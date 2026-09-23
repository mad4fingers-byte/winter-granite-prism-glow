import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { CircleHelp, CornerDownLeft, Share2, X } from "lucide-react";
import { EXAMPLES, HELP_LINES } from "@/lib/desk/help";
import { formatSymbol } from "@/lib/desk/market";
import { readBoot } from "@/lib/desk/parse";
import { createRunner, type DeskResult, type DeskState, type DeskWorkspace, type NativeDesc } from "@/lib/desk/run";

type Runner = ReturnType<typeof createRunner>;

const HISTORY_KEY = "vela-desk-history";

function loadHistory(): string[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string").slice(0, 30) : [];
  } catch {
    return [];
  }
}

export function VelaDesk() {
  const hostRef = useRef<HTMLDivElement>(null);
  const runnerRef = useRef<Runner | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<string[]>([]);
  const historyAt = useRef(-1);
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState("Opening the tape…");
  const [failed, setFailed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [help, setHelp] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const bag: { dead: boolean; off: () => void; workspace: { destroy(): void } | null } = {
      dead: false,
      off: () => {},
      workspace: null,
    };

    const boot = async () => {
      await new Promise((resolve) => requestAnimationFrame(resolve));
      if (bag.dead || !hostRef.current) return;
      const [{ VelaWorkspace }, coinbase, hyperliquid, core] = await Promise.all([
        import("@luxalgo/vela/workspace"),
        import("@luxalgo/vela/providers/coinbase"),
        import("@luxalgo/vela/providers/hyperliquid"),
        import("@luxalgo/vela"),
      ]);
      if (bag.dead || !hostRef.current) return;

      const params = readBoot(window.location.search);
      const symbol = formatSymbol(params.symbol, "coinbase");
      const ws = new VelaWorkspace(hostRef.current, {
        layout: "1",
        symbol,
        timeframe: params.timeframe,
        live: true,
        theme: "dark",
        bars: 500,
        persist: params.fresh ? false : "vela-desk",
        autofocus: false,
        timezone: "exchange",
        providers: {
          coinbase: () => new coinbase.CoinbaseProvider(),
          hyperliquid: () => new hyperliquid.HyperliquidProvider(),
        },
      });
      if (bag.dead) {
        ws.destroy();
        return;
      }
      bag.workspace = ws;

      const runner = createRunner(
        ws as unknown as DeskWorkspace,
        (type) => core.getNativeIndicator(type) as NativeDesc | undefined,
        () => window.location.href,
      );
      runnerRef.current = runner;

      const onMessage = (event: MessageEvent) => {
        const data = event.data as { channel?: string; command?: unknown } | null;
        if (!data || data.channel !== "vela-desk" || data.command == null) return;
        void runner.run(data.command).then((result) => {
          if (bag.dead) return;
          window.dispatchEvent(new CustomEvent("vela-desk", { detail: result.state }));
          setStatus(result.message);
          setFailed(!result.ok);
          const source = event.source as { postMessage?: (message: unknown, origin: string) => void } | null;
          source?.postMessage?.({ channel: "vela-desk", ok: result.ok, message: result.message, state: result.state }, "*");
        });
      };
      window.addEventListener("message", onMessage);
      bag.off = () => window.removeEventListener("message", onMessage);

      window.VelaDesk = {
        run: async (input: unknown) => {
          const result = await runner.run(input);
          if (!bag.dead) {
            setStatus(result.message);
            setFailed(!result.ok);
          }
          return result;
        },
        state: () => runner.state(),
        help: () => HELP_LINES.join("\n"),
      };

      try {
        await ws.chart.ready();
        if (bag.dead) return;
        ws.resize();
        const search = new URLSearchParams(window.location.search);
        const pinned = search.has("symbol") || search.has("s") || search.has("tf") || search.has("timeframe");
        if (pinned) await ws.chart.setMarket({ symbol, timeframe: params.timeframe });
        if (bag.dead) return;
        if (params.cmd) {
          const result = await runner.run(params.cmd);
          if (bag.dead) return;
          setStatus(result.message);
          setFailed(!result.ok);
        } else if (params.ind) {
          const result = await runner.run(indScript(params.ind));
          if (bag.dead) return;
          setStatus(result.message);
          setFailed(!result.ok);
        } else {
          const state = runner.state();
          setStatus(`${prettySymbol(state.symbol)} · ${prettyTf(state.timeframe)} · live`);
          setFailed(false);
        }
      } catch (error) {
        if (bag.dead) return;
        setFailed(true);
        setStatus(error instanceof Error ? error.message : "The chart didn't start");
      }
    };

    historyRef.current = loadHistory();
    void boot().catch((error: unknown) => {
      if (bag.dead) return;
      setFailed(true);
      setStatus(error instanceof Error ? error.message : "The chart didn't start");
    });

    return () => {
      bag.dead = true;
      bag.off();
      runnerRef.current = null;
      delete window.VelaDesk;
      bag.workspace?.destroy();
    };
  }, []);

  async function runDraft(text: string) {
    const command = text.trim();
    const runner = runnerRef.current;
    if (!command || !runner || busy) return;
    setBusy(true);
    const result = await runner.run(command);
    setBusy(false);
    setStatus(result.message);
    setFailed(!result.ok);
    if (result.ok) {
      const next = [command, ...historyRef.current.filter((item) => item !== command)].slice(0, 30);
      historyRef.current = next;
      historyAt.current = -1;
      localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
      setDraft("");
    }
    window.dispatchEvent(new CustomEvent("vela-desk", { detail: result.state }));
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
    const items = historyRef.current;
    if (!items.length) return;
    event.preventDefault();
    const next = event.key === "ArrowUp" ? Math.min(items.length - 1, historyAt.current + 1) : Math.max(-1, historyAt.current - 1);
    historyAt.current = next;
    setDraft(next === -1 ? "" : items[next]);
  }

  async function copyLink() {
    const link = runnerRef.current?.state().link ?? window.location.href;
    try {
      await navigator.clipboard.writeText(link);
      setFailed(false);
      setStatus("Link copied. Send that to Grok.");
    } catch {
      setFailed(false);
      setStatus(link);
    }
  }

  return (
    <main className="safe-top safe-bottom flex h-dvh flex-col bg-ink text-paper">
      <header className="flex h-12 shrink-0 items-center gap-1.5 border-b border-line bg-panel px-2">
        <div className="flex shrink-0 items-center gap-2 pr-1">
          <CandleMark />
          <span className="hidden text-sm font-medium tracking-wide sm:inline">Vela</span>
        </div>
        <form
          className="flex min-w-0 flex-1 items-center gap-1.5"
          onSubmit={(event) => {
            event.preventDefault();
            void runDraft(draft);
          }}
        >
          <label className="sr-only" htmlFor="desk-command">
            Chart command
          </label>
          <input
            id="desk-command"
            ref={inputRef}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={onKeyDown}
            placeholder="BTC 15m   ·   + ema 21"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            className="h-9 min-w-0 flex-1 rounded-md border border-line bg-ink px-3 font-mono text-sm text-paper outline-none placeholder:text-stone focus:border-stone"
          />
          <button
            type="submit"
            disabled={busy || !draft.trim()}
            className="inline-flex h-11 items-center gap-1 rounded-md bg-paper px-3 text-sm font-medium text-ink disabled:opacity-40"
          >
            <CornerDownLeft className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Run</span>
          </button>
        </form>
        <button type="button" aria-label="Copy chart link" onClick={() => void copyLink()} className="inline-flex size-11 items-center justify-center rounded-md text-stone hover:bg-ink hover:text-paper">
          <Share2 className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Command help"
          aria-expanded={help}
          onClick={() => setHelp((open) => !open)}
          className="inline-flex size-11 items-center justify-center rounded-md text-stone hover:bg-ink hover:text-paper"
        >
          <CircleHelp className="size-4" />
        </button>
      </header>

      <p className={`shrink-0 truncate px-3 py-1 font-mono text-xs ${failed ? "text-down" : "text-stone"}`} aria-live="polite">
        {status}
      </p>

      <div className="relative min-h-0 flex-1">
        <div ref={hostRef} className="absolute inset-0" />
        {help && (
          <section role="dialog" aria-label="Command language" className="absolute inset-x-2 top-2 bottom-2 flex flex-col overflow-hidden rounded-lg border border-line bg-panel shadow-2xl sm:inset-auto sm:top-2 sm:right-2 sm:bottom-auto sm:max-h-full sm:w-96">
            <div className="flex items-center justify-between border-b border-line px-3 py-2">
              <h2 className="text-sm font-medium">Drive the chart</h2>
              <button type="button" aria-label="Close help" onClick={() => setHelp(false)} className="inline-flex size-11 items-center justify-center text-stone">
                <X className="size-4" />
              </button>
            </div>
            <div className="flex gap-1.5 overflow-x-auto px-3 py-2">
              {EXAMPLES.map((example) => (
                <button
                  key={example}
                  type="button"
                  className="shrink-0 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-paper"
                  onClick={() => {
                    setHelp(false);
                    void runDraft(example);
                  }}
                >
                  {example}
                </button>
              ))}
            </div>
            <pre className="min-h-0 flex-1 overflow-auto px-3 pb-3 font-mono text-xs leading-relaxed whitespace-pre-wrap text-stone">{HELP_LINES.join("\n")}</pre>
          </section>
        )}
      </div>
    </main>
  );
}

function prettySymbol(symbol: string): string {
  const ticker = symbol.includes(":") ? symbol.slice(symbol.indexOf(":") + 1) : symbol;
  return ticker;
}

function prettyTf(tf: string): string {
  const named: Record<string, string> = {
    "1": "1m",
    "3": "3m",
    "5": "5m",
    "15": "15m",
    "30": "30m",
    "45": "45m",
    "60": "1h",
    "120": "2h",
    "180": "3h",
    "240": "4h",
    "360": "6h",
    "480": "8h",
    "720": "12h",
    D: "1D",
    W: "1W",
    M: "1M",
  };
  return named[tf] ?? tf;
}

function indScript(ind: string): string {
  return ind
    .split(",")
    .map((part) => {
      const piece = part.trim();
      if (!piece) return "";
      const colon = piece.indexOf(":");
      if (colon < 0) return `+ ${piece}`;
      return `+ ${piece.slice(0, colon)} ${piece.slice(colon + 1).replace(/-/g, " ")}`.trim();
    })
    .filter(Boolean)
    .join("\n");
}

function CandleMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="size-6">
      <rect width="32" height="32" rx="7" className="fill-ink" />
      <path d="M10 21V12" className="stroke-down" strokeWidth="2.2" strokeLinecap="round" />
      <rect x="8.3" y="14.4" width="3.4" height="4" rx="0.4" className="fill-down" />
      <path d="M22 22V10" className="stroke-up" strokeWidth="2.2" strokeLinecap="round" />
      <rect x="20.3" y="12.2" width="3.4" height="6" rx="0.4" className="fill-up" />
    </svg>
  );
}

declare global {
  interface Window {
    VelaDesk?: {
      run: (input: unknown) => Promise<DeskResult>;
      state: () => DeskState;
      help: () => string;
    };
  }
}
