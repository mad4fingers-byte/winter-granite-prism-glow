import { formatSymbol, isVenue, type VenueName } from "@/lib/desk/market";
import { parseCommand, type DeskOp, type IndicatorInput } from "@/lib/desk/parse";

export interface NativeDesc {
  inputs?: ReadonlyArray<{ key?: string; type?: string }>;
}

export interface IndicatorSnap {
  type: string;
  title: string;
  inputs: Record<string, unknown>;
}

export interface DeskState {
  symbol: string;
  timeframe: string;
  priceStyle: string;
  indicators: IndicatorSnap[];
  drawings: number;
  link: string;
}

export interface DeskResult {
  ok: boolean;
  message: string;
  state: DeskState;
}

interface Handle {
  id: string;
  title: string;
  nativeType?: string;
  remove(): void;
  inputValues(): Record<string, unknown>;
}

interface DrawingSnap {
  id: string;
}

export interface DeskChart {
  setMarket(next: { symbol?: string; timeframe?: string }): Promise<void>;
  addNativeIndicator(type: string, options?: { inputs?: IndicatorInput }): Handle;
  indicators(): Handle[];
  availableNativeIndicators(): Promise<Array<{ type: string; title: string }>>;
  getVisibleRange(): { from: number; to: number } | null;
  setVisibleRangePreset(preset: string): void;
  renderer: { set(patch: { logScale?: boolean }): void };
  drawings: {
    add(
      type: string,
      init?: {
        anchors?: { time: number; price: number }[];
        style?: {
          lineColor?: string;
          lineWidth?: number;
          lineStyle?: "solid" | "dashed" | "dotted";
          fillColor?: string;
          fillOpacity?: number;
        };
      },
    ): { id: string } | null;
    all(): DrawingSnap[];
    removeMany(ids: readonly string[]): void;
  };
  market: { symbol?: string; provider?: string };
  data: { resolve(symbol: string): { provider: string; ticker: string } | null };
}

export interface DeskCell {
  symbol: string;
  timeframe: string;
  priceStyle: string;
  setPriceStyle(style: string): void;
}

export interface DeskWorkspace {
  chart: DeskChart;
  active: DeskCell;
  setTheme(theme: "dark" | "light"): void;
  setLayout(layout: string): void;
  destroy(): void;
}

const ALIASES: Record<string, string> = {
  sma: "sma",
  ema: "ema",
  rma: "rma",
  bb: "bollinger-bands",
  boll: "bollinger-bands",
  bollinger: "bollinger-bands",
  bands: "bollinger-bands",
  kc: "keltner-channels",
  keltner: "keltner-channels",
  dc: "donchian-channels",
  donchian: "donchian-channels",
  st: "supertrend",
  supertrend: "supertrend",
  rsi: "rsi",
  stoch: "stochastic",
  stochrsi: "stochastic-rsi",
  macd: "macd",
  atr: "average-true-range",
  adx: "average-directional-index",
  cci: "commodity-channel-index",
  mfi: "money-flow-index",
  obv: "on-balance-volume",
  vwap: "vwap",
  sar: "parabolic-sar",
  psar: "parabolic-sar",
  ao: "awesome-oscillator",
  roc: "rate-of-change",
  willr: "williams-percent-r",
  wr: "williams-percent-r",
  cmf: "chaikin-money-flow",
  vol: "volume",
  volume: "volume",
  vpvr: "vpvr",
  profile: "vpvr",
  pivots: "pivot-points",
  pivot: "pivot-points",
  zigzag: "zigzag",
  zz: "zigzag",
  squeeze: "ttm-squeeze",
  ttm: "ttm-squeeze",
};

const LEVEL = "#d6d3cb";

function norm(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function resolveType(token: string, catalog: Array<{ type: string; title: string }>): string | null {
  const n = norm(token);
  const alias = ALIASES[n] ?? ALIASES[token.toLowerCase()];
  if (alias && (catalog.length === 0 || catalog.some((row) => row.type === alias))) return alias;
  const exact = catalog.find((row) => norm(row.type) === n || norm(row.title) === n);
  if (exact) return exact.type;
  if (n.length < 2) return null;
  const fuzzy = catalog.find((row) => norm(row.type).includes(n) || norm(row.title).includes(n));
  return fuzzy?.type ?? null;
}

function numericKeys(desc: NativeDesc | undefined): string[] {
  return (desc?.inputs ?? [])
    .filter((input) => input.key && (input.type === "int" || input.type === "float"))
    .map((input) => input.key as string);
}

function withNumbers(desc: NativeDesc | undefined, numbers: number[], inputs: IndicatorInput): IndicatorInput {
  const next: IndicatorInput = { ...inputs };
  if (numbers.length === 0) return next;
  const keys = numericKeys(desc).filter((key) => !(key in next));
  if (numbers.length === 1) {
    const key = keys.includes("length") ? "length" : (keys[0] ?? "length");
    next[key] = numbers[0];
    return next;
  }
  numbers.forEach((value, index) => {
    const key = keys[index];
    if (key) next[key] = value;
  });
  return next;
}

function sameInputs(handle: Handle, inputs: IndicatorInput): boolean {
  const current = handle.inputValues();
  return Object.entries(inputs).every(([key, value]) => String(current[key]) === String(value));
}

export function readState(ws: DeskWorkspace, href: string): DeskState {
  const cell = ws.active;
  const resolved = ws.chart.data.resolve(cell.symbol);
  const symbol = resolved ? `${resolved.provider}:${resolved.ticker}` : cell.symbol;
  const indicators = ws.chart
    .indicators()
    .filter((item) => item.nativeType && item.nativeType !== "volume")
    .map((item) => ({
      type: item.nativeType as string,
      title: item.title,
      inputs: item.inputValues(),
    }));
  const url = new URL(href, "http://localhost");
  url.search = "";
  url.hash = "";
  const params = new URLSearchParams();
  params.set("symbol", symbol);
  params.set("tf", cell.timeframe);
  if (indicators.length) {
    params.set(
      "ind",
      indicators
        .map((item) => {
          const keys = Object.entries(item.inputs).filter(([, value]) => typeof value === "number");
          if (!keys.length) return item.type;
          return `${item.type}:${keys.map(([, value]) => value).join("-")}`;
        })
        .join(","),
    );
  }
  url.search = params.toString();
  return {
    symbol,
    timeframe: cell.timeframe,
    priceStyle: cell.priceStyle,
    indicators,
    drawings: ws.chart.drawings.all().length,
    link: `${url.origin}${url.pathname}?${params.toString()}`,
  };
}

function anchorTime(chart: DeskChart): { from: number; to: number } {
  const range = chart.getVisibleRange();
  if (range) return range;
  const now = Date.now();
  return { from: now - 86_400_000, to: now };
}

export function createRunner(
  ws: DeskWorkspace,
  getNative: (type: string) => NativeDesc | undefined,
  href: () => string,
) {
  let venue: VenueName = "coinbase";

  const finish = (notes: string[], errors: string[]): DeskResult => {
    const state = readState(ws, href());
    const head = errors.length ? errors.join(" ") : notes.join(" · ");
    return {
      ok: errors.length === 0,
      message: head || `${state.symbol} · ${state.timeframe}`,
      state,
    };
  };

  const apply = async (ops: DeskOp[], errors: string[]) => {
    const notes: string[] = [];
    let catalog: Array<{ type: string; title: string }> | null = null;
    const studies = async () => {
      catalog ??= await ws.chart.availableNativeIndicators();
      return catalog;
    };

    for (const op of ops) {
      if (op.op === "venue") {
        if (op.venue === "binance") {
          errors.push("Binance blocks a browser chart. Use coinbase or hyperliquid.");
          continue;
        }
        if (!isVenue(op.venue)) errors.push(`Unknown venue ${op.venue}`);
        else {
          venue = op.venue;
          notes.push(venue);
        }
        continue;
      }
      if (op.op === "market") {
        const next: { symbol?: string; timeframe?: string } = {};
        if (op.symbol) next.symbol = formatSymbol(op.symbol, venue);
        if (next.symbol?.startsWith("binance:")) {
          errors.push("Binance blocks a browser chart. Use coinbase or hyperliquid.");
          continue;
        }
        if (op.timeframe) next.timeframe = op.timeframe;
        if (next.symbol || next.timeframe) {
          await ws.chart.setMarket(next);
          notes.push([next.symbol, next.timeframe].filter(Boolean).join(" "));
        }
        continue;
      }
      if (op.op === "style") {
        ws.active.setPriceStyle(op.style);
        notes.push(op.style);
        continue;
      }
      if (op.op === "theme") {
        ws.setTheme(op.theme);
        notes.push(op.theme);
        continue;
      }
      if (op.op === "log") {
        ws.chart.renderer.set({ logScale: op.on });
        notes.push(op.on ? "log" : "linear");
        continue;
      }
      if (op.op === "range") {
        ws.chart.setVisibleRangePreset(op.preset);
        notes.push(op.preset);
        continue;
      }
      if (op.op === "layout") {
        ws.setLayout(op.layout);
        notes.push(`layout ${op.layout}`);
        continue;
      }
      if (op.op === "clear") {
        if (op.what !== "drawings") {
          for (const item of ws.chart.indicators()) {
            if (op.what === "all" || item.nativeType !== "volume") item.remove();
          }
          notes.push("cleared studies");
        }
        if (op.what !== "indicators") {
          const ids = ws.chart.drawings.all().map((drawing) => drawing.id);
          if (ids.length) ws.chart.drawings.removeMany(ids);
          notes.push("cleared drawings");
        }
        continue;
      }
      if (op.op === "remove") {
        const type = resolveType(op.type, await studies());
        if (!type) {
          errors.push(`No study named ${op.type}`);
          continue;
        }
        const hits = ws.chart.indicators().filter((item) => item.nativeType === type);
        if (!hits.length) errors.push(`${type} is not on the chart`);
        else {
          for (const hit of hits) hit.remove();
          notes.push(`removed ${type}`);
        }
        continue;
      }
      if (op.op === "indicator") {
        const list = await studies();
        const type = resolveType(op.type, list);
        if (!type) {
          errors.push(`No study named ${op.type}`);
          continue;
        }
        const inputs = withNumbers(getNative(type), op.numbers, op.inputs);
        const existing = ws.chart.indicators().find((item) => item.nativeType === type && sameInputs(item, inputs));
        if (existing) {
          notes.push(`${existing.title} already on`);
          continue;
        }
        const handle = ws.chart.addNativeIndicator(type, Object.keys(inputs).length ? { inputs } : undefined);
        if (!handle.nativeType) {
          handle.remove();
          errors.push(`Couldn't add ${type}`);
        } else notes.push(handle.title);
        continue;
      }
      if (op.op === "hline") {
        const span = anchorTime(ws.chart);
        const drawing = ws.chart.drawings.add("hline", {
          anchors: [{ time: (span.from + span.to) / 2, price: op.price }],
          style: { lineColor: op.color ?? LEVEL, lineWidth: 1, lineStyle: op.lineStyle ?? "dashed" },
        });
        if (!drawing) errors.push("Couldn't place that level");
        else notes.push(`level ${op.price}`);
        continue;
      }
      const span = anchorTime(ws.chart);
      const drawing = ws.chart.drawings.add("box", {
        anchors: [
          { time: span.from, price: op.high },
          { time: span.to, price: op.low },
        ],
        style: {
          lineColor: op.color ?? LEVEL,
          lineWidth: 1,
          lineStyle: "solid",
          fillColor: op.color ?? LEVEL,
          fillOpacity: 0.08,
        },
      });
      if (!drawing) errors.push("Couldn't place that zone");
      else notes.push(`zone ${op.low}–${op.high}`);
    }
    return finish(notes, errors);
  };

  return {
    venue: () => venue,
    state: () => readState(ws, href()),
    run: async (input: unknown): Promise<DeskResult> => {
      const batch = parseCommand(input);
      if (batch.ops.length === 0) {
        return finish([], batch.errors.length ? batch.errors : ["Empty command"]);
      }
      try {
        return await apply(batch.ops, [...batch.errors]);
      } catch (error) {
        const message = error instanceof Error ? error.message : "The chart rejected that command";
        return finish([], [...batch.errors, message]);
      }
    },
  };
}


