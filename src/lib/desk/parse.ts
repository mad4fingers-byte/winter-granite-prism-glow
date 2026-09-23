export type IndicatorInput = Record<string, number | string | boolean>;

export type DeskOp =
  | { op: "venue"; venue: string }
  | { op: "market"; symbol?: string; timeframe?: string }
  | { op: "style"; style: string }
  | { op: "theme"; theme: "dark" | "light" }
  | { op: "log"; on: boolean }
  | { op: "range"; preset: string }
  | { op: "layout"; layout: string }
  | { op: "indicator"; type: string; numbers: number[]; inputs: IndicatorInput }
  | { op: "remove"; type: string }
  | { op: "clear"; what: "indicators" | "drawings" | "all" }
  | { op: "hline"; price: number; color?: string; lineStyle?: "solid" | "dashed" | "dotted" }
  | { op: "zone"; high: number; low: number; color?: string };

export interface ParsedBatch {
  ops: DeskOp[];
  errors: string[];
}

const VENUES = new Set(["binance", "coinbase", "hyperliquid"]);
const STYLES = new Set(["candles", "bars", "line", "area", "baseline", "heikinashi", "heikin"]);
const RANGES = new Set(["1d", "1w", "1m", "3m", "6m", "1y", "ytd", "all"]);
const LAYOUTS = new Set(["1", "2h", "2v", "4", "8"]);

const TF_MAP: Record<string, string> = {
  "1": "1",
  "1m": "1",
  "3": "3",
  "3m": "3",
  "5": "5",
  "5m": "5",
  "15": "15",
  "15m": "15",
  "30": "30",
  "30m": "30",
  "45": "45",
  "45m": "45",
  "60": "60",
  "60m": "60",
  "1h": "60",
  h: "60",
  "120": "120",
  "2h": "120",
  "180": "180",
  "3h": "180",
  "240": "240",
  "4h": "240",
  "360": "360",
  "6h": "360",
  "480": "480",
  "8h": "480",
  "720": "720",
  "12h": "720",
  d: "D",
  "1d": "D",
  day: "D",
  w: "W",
  "1w": "W",
  week: "W",
};

export function normalizeTimeframe(raw: string): string | null {
  const t = raw.trim();
  if (!t) return null;
  if (t === "M" || t === "1M" || /^1mo(nth)?$/i.test(t) || t.toLowerCase() === "month") return "M";
  const key = t.toLowerCase();
  return TF_MAP[key] ?? null;
}

export function isTimeframe(raw: string): boolean {
  return normalizeTimeframe(raw) != null;
}

export function normalizeStyle(raw: string): string | null {
  const s = raw.trim().toLowerCase();
  if (s === "heikin" || s === "heikinashi" || s === "ha") return "heikinashi";
  if (s === "candle" || s === "candlestick") return "candles";
  if (STYLES.has(s)) return s === "heikin" ? "heikinashi" : s;
  return null;
}

function isTicker(raw: string): boolean {
  return /^[A-Za-z][A-Za-z0-9.:-]{0,24}$/.test(raw) && !isTimeframe(raw);
}

function splitLines(script: string): string[] {
  return script
    .split(/[\n;]+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function parseIndicatorTail(rest: string): { numbers: number[]; inputs: IndicatorInput; error?: string } {
  const inputs: IndicatorInput = {};
  const numbers: number[] = [];
  if (!rest) return { numbers, inputs };
  for (const token of rest.split(/\s+/)) {
    const eq = token.indexOf("=");
    if (eq > 0) {
      const key = token.slice(0, eq);
      const value = token.slice(eq + 1);
      const num = Number(value);
      inputs[key] = Number.isFinite(num) && value.trim() !== "" ? num : value;
      continue;
    }
    const num = Number(token);
    if (!Number.isFinite(num)) return { numbers, inputs, error: `Not a number: ${token}` };
    numbers.push(num);
  }
  return { numbers, inputs };
}

function parseLine(line: string, batch: ParsedBatch) {
  if (line.startsWith("#") || line.startsWith("//")) return;
  const lower = line.toLowerCase();

  if (lower === "help" || lower === "?") return;

  const clear = lower.match(/^clear(?:\s+(indicators|studies|drawings|levels|all))?$/);
  if (clear) {
    const what = clear[1];
    batch.ops.push({
      op: "clear",
      what: !what || what === "indicators" || what === "studies" ? "indicators" : what === "all" ? "all" : "drawings",
    });
    return;
  }

  const add = line.match(/^(?:\+\s*|add\s+|study\s+|indicator\s+)([A-Za-z][A-Za-z0-9%.-]*)(?:\s+(.+))?$/i);
  if (add) {
    const tail = parseIndicatorTail(add[2] ?? "");
    if (tail.error) batch.errors.push(tail.error);
    else batch.ops.push({ op: "indicator", type: add[1], numbers: tail.numbers, inputs: tail.inputs });
    return;
  }

  const remove = line.match(/^(?:-\s*|remove\s+|rm\s+)([A-Za-z][A-Za-z0-9%.-]*)$/i);
  if (remove) {
    batch.ops.push({ op: "remove", type: remove[1] });
    return;
  }

  const hline = line.match(/^(?:hline|level|price)\s+([+-]?\d+(?:\.\d+)?)(?:\s+(solid|dashed|dotted))?(?:\s+(#[0-9a-fA-F]{3,8}))?$/i);
  if (hline) {
    batch.ops.push({
      op: "hline",
      price: Number(hline[1]),
      lineStyle: hline[2]?.toLowerCase() as "solid" | "dashed" | "dotted" | undefined,
      color: hline[3],
    });
    return;
  }

  const zone = line.match(/^(?:zone|box|range)\s+([+-]?\d+(?:\.\d+)?)\s+([+-]?\d+(?:\.\d+)?)(?:\s+(#[0-9a-fA-F]{3,8}))?$/i);
  if (zone) {
    const a = Number(zone[1]);
    const b = Number(zone[2]);
    batch.ops.push({ op: "zone", high: Math.max(a, b), low: Math.min(a, b), color: zone[3] });
    return;
  }

  const kv = line.match(/^(symbol|sym|ticker|tf|timeframe|venue|exchange|style|theme|log|scale|layout|range|window)\s+(.+)$/i);
  if (kv) {
    const key = kv[1].toLowerCase();
    const value = kv[2].trim();
    applyKeyed(key, value, batch);
    return;
  }

  const parts = line.split(/\s+/);
  if (parts.length === 2 && isTicker(parts[0]) && isTimeframe(parts[1])) {
    batch.ops.push({ op: "market", symbol: parts[0], timeframe: normalizeTimeframe(parts[1]) ?? undefined });
    return;
  }
  if (parts.length === 1 && isTimeframe(parts[0])) {
    batch.ops.push({ op: "market", timeframe: normalizeTimeframe(parts[0]) ?? undefined });
    return;
  }
  if (parts.length === 1 && VENUES.has(parts[0].toLowerCase())) {
    batch.ops.push({ op: "venue", venue: parts[0].toLowerCase() });
    return;
  }
  if (parts.length === 1 && normalizeStyle(parts[0])) {
    batch.ops.push({ op: "style", style: normalizeStyle(parts[0])! });
    return;
  }
  if (parts.length === 1 && isTicker(parts[0])) {
    batch.ops.push({ op: "market", symbol: parts[0] });
    return;
  }

  batch.errors.push(`Didn't understand "${line}"`);
}

function applyKeyed(key: string, value: string, batch: ParsedBatch) {
  if (key === "symbol" || key === "sym" || key === "ticker") {
    const bits = value.split(/\s+/);
    if (bits.length === 2 && isTimeframe(bits[1])) {
      batch.ops.push({ op: "market", symbol: bits[0], timeframe: normalizeTimeframe(bits[1]) ?? undefined });
    } else {
      batch.ops.push({ op: "market", symbol: value });
    }
    return;
  }
  if (key === "tf" || key === "timeframe") {
    const tf = normalizeTimeframe(value);
    if (!tf) batch.errors.push(`Unknown timeframe "${value}"`);
    else batch.ops.push({ op: "market", timeframe: tf });
    return;
  }
  if (key === "venue" || key === "exchange") {
    const venue = value.toLowerCase();
    if (!VENUES.has(venue)) batch.errors.push(`Venue must be coinbase, binance, or hyperliquid`);
    else batch.ops.push({ op: "venue", venue });
    return;
  }
  if (key === "style") {
    const style = normalizeStyle(value);
    if (!style) batch.errors.push(`Unknown style "${value}"`);
    else batch.ops.push({ op: "style", style });
    return;
  }
  if (key === "theme") {
    const theme = value.toLowerCase();
    if (theme !== "dark" && theme !== "light") batch.errors.push(`Theme must be dark or light`);
    else batch.ops.push({ op: "theme", theme });
    return;
  }
  if (key === "log" || key === "scale") {
    const on = /^(1|on|true|log)$/i.test(value);
    const off = /^(0|off|false|linear)$/i.test(value);
    if (!on && !off) batch.errors.push(`Log must be on or off`);
    else batch.ops.push({ op: "log", on });
    return;
  }
  if (key === "layout") {
    const layout = value.toLowerCase();
    if (!LAYOUTS.has(layout)) batch.errors.push(`Layout must be 1, 2h, 2v, 4, or 8`);
    else batch.ops.push({ op: "layout", layout });
    return;
  }
  const preset = value.toUpperCase() === "YTD" || value.toUpperCase() === "ALL" ? value.toUpperCase() : value.toUpperCase();
  if (!RANGES.has(preset.toLowerCase())) batch.errors.push(`Range must be 1D, 1W, 1M, 3M, 6M, 1Y, YTD, or ALL`);
  else batch.ops.push({ op: "range", preset: preset === "YTD" || preset === "ALL" ? preset : preset.toUpperCase() });
}

function fromStructured(raw: Record<string, unknown>, batch: ParsedBatch) {
  if (typeof raw.script === "string") {
    for (const line of splitLines(raw.script)) parseLine(line, batch);
  }
  if (typeof raw.venue === "string") applyKeyed("venue", raw.venue, batch);
  if (typeof raw.symbol === "string" || typeof raw.timeframe === "string" || typeof raw.tf === "string") {
    batch.ops.push({
      op: "market",
      symbol: typeof raw.symbol === "string" ? raw.symbol : undefined,
      timeframe:
        typeof raw.timeframe === "string"
          ? (normalizeTimeframe(raw.timeframe) ?? undefined)
          : typeof raw.tf === "string"
            ? (normalizeTimeframe(raw.tf) ?? undefined)
            : undefined,
    });
    if (typeof raw.timeframe === "string" && !normalizeTimeframe(raw.timeframe)) {
      batch.errors.push(`Unknown timeframe "${raw.timeframe}"`);
    }
  }
  if (typeof raw.style === "string" || typeof raw.priceStyle === "string") {
    applyKeyed("style", String(raw.style ?? raw.priceStyle), batch);
  }
  if (typeof raw.theme === "string") applyKeyed("theme", raw.theme, batch);
  if (typeof raw.log === "boolean" || typeof raw.logScale === "boolean") {
    batch.ops.push({ op: "log", on: Boolean(raw.log ?? raw.logScale) });
  }
  if (typeof raw.range === "string") applyKeyed("range", raw.range, batch);
  if (typeof raw.layout === "string") applyKeyed("layout", raw.layout, batch);
  if (raw.clearIndicators === true) batch.ops.push({ op: "clear", what: "indicators" });
  if (raw.clearDrawings === true) batch.ops.push({ op: "clear", what: "drawings" });
  if (Array.isArray(raw.remove)) {
    for (const item of raw.remove) {
      if (typeof item === "string") batch.ops.push({ op: "remove", type: item });
    }
  }
  if (Array.isArray(raw.indicators)) {
    for (const item of raw.indicators) pushIndicator(item, batch);
  }
  if (typeof raw.hline === "number") batch.ops.push({ op: "hline", price: raw.hline });
  if (raw.hline && typeof raw.hline === "object") pushHline(raw.hline, batch);
  if (Array.isArray(raw.hlines)) {
    for (const price of raw.hlines) {
      if (typeof price === "number") batch.ops.push({ op: "hline", price });
    }
  }
  if (Array.isArray(raw.zone) && raw.zone.length >= 2) {
    const a = Number(raw.zone[0]);
    const b = Number(raw.zone[1]);
    if (Number.isFinite(a) && Number.isFinite(b)) {
      batch.ops.push({ op: "zone", high: Math.max(a, b), low: Math.min(a, b) });
    }
  }
  if (raw.zone && typeof raw.zone === "object" && !Array.isArray(raw.zone)) {
    const z = raw.zone as Record<string, unknown>;
    const high = Number(z.high);
    const low = Number(z.low);
    if (Number.isFinite(high) && Number.isFinite(low)) {
      batch.ops.push({
        op: "zone",
        high: Math.max(high, low),
        low: Math.min(high, low),
        color: typeof z.color === "string" ? z.color : undefined,
      });
    }
  }
  if (Array.isArray(raw.drawings)) {
    for (const item of raw.drawings) {
      if (!item || typeof item !== "object") continue;
      const d = item as Record<string, unknown>;
      const type = String(d.type ?? "hline").toLowerCase();
      if (type === "hline" || type === "level") pushHline(d, batch);
      if (type === "zone" || type === "box") {
        const high = Number(d.high ?? d.y1);
        const low = Number(d.low ?? d.y2);
        if (Number.isFinite(high) && Number.isFinite(low)) {
          batch.ops.push({
            op: "zone",
            high: Math.max(high, low),
            low: Math.min(high, low),
            color: typeof d.color === "string" ? d.color : undefined,
          });
        }
      }
    }
  }
}

function pushIndicator(item: unknown, batch: ParsedBatch) {
  if (typeof item === "string") {
    parseLine(item.startsWith("+") ? item : `+ ${item}`, batch);
    return;
  }
  if (!item || typeof item !== "object") return;
  const row = item as Record<string, unknown>;
  const type = String(row.type ?? row.name ?? "");
  if (!type) return;
  const inputs: IndicatorInput = {};
  const numbers: number[] = [];
  if (row.inputs && typeof row.inputs === "object") {
    for (const [key, value] of Object.entries(row.inputs as Record<string, unknown>)) {
      if (typeof value === "number" || typeof value === "string" || typeof value === "boolean") inputs[key] = value;
    }
  }
  if (typeof row.length === "number") inputs.length = row.length;
  batch.ops.push({ op: "indicator", type, numbers, inputs });
}

function pushHline(item: unknown, batch: ParsedBatch) {
  if (!item || typeof item !== "object") return;
  const row = item as Record<string, unknown>;
  const price = Number(row.price ?? row.y);
  if (!Number.isFinite(price)) return;
  const lineStyle = row.style === "dashed" || row.style === "dotted" || row.style === "solid" ? row.style : undefined;
  batch.ops.push({
    op: "hline",
    price,
    lineStyle,
    color: typeof row.color === "string" ? row.color : undefined,
  });
}

export function parseCommand(input: unknown): ParsedBatch {
  const batch: ParsedBatch = { ops: [], errors: [] };
  if (input && typeof input === "object") {
    fromStructured(input as Record<string, unknown>, batch);
    return batch;
  }
  if (typeof input !== "string") {
    batch.errors.push("Command must be text or JSON");
    return batch;
  }
  const text = input.trim();
  if (!text) {
    batch.errors.push("Empty command");
    return batch;
  }
  if (text.startsWith("{") || text.startsWith("[")) {
    try {
      const json = JSON.parse(text) as unknown;
      if (Array.isArray(json)) {
        for (const item of json) {
          if (typeof item === "string") parseLine(item, batch);
          else if (item && typeof item === "object") fromStructured(item as Record<string, unknown>, batch);
        }
      } else if (json && typeof json === "object") {
        fromStructured(json as Record<string, unknown>, batch);
      }
      return batch;
    } catch {
      batch.errors.push("That JSON didn't parse");
      return batch;
    }
  }
  for (const line of splitLines(text)) parseLine(line, batch);
  if (batch.ops.length === 0 && batch.errors.length === 0) batch.errors.push("Empty command");
  return batch;
}

export function readBoot(search: string): { symbol: string; timeframe: string; fresh: boolean; ind: string | null; cmd: string | null } {
  const params = new URLSearchParams(search);
  const symbol = params.get("symbol") || params.get("s") || "BTC-USD";
  const tfRaw = params.get("tf") || params.get("timeframe") || "15";
  return {
    symbol,
    timeframe: normalizeTimeframe(tfRaw) ?? "15",
    fresh: params.get("fresh") === "1",
    ind: params.get("ind"),
    cmd: params.get("cmd"),
  };
}
