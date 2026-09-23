import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as CircleHelp, i as CornerDownLeft, r as Share2, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CEIb8hst.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var HELP_LINES = [
	"One chart. Type a command here, paste JSON, or open a link.",
	"The same commands work for you, for me, or for another bot.",
	"",
	"Markets",
	"BTC 15m",
	"ETH-USD 4h",
	"venue hyperliquid",
	"BTC 15m",
	"",
	"Studies — the built-in set, no Pine required",
	"+ ema 21",
	"+ sma 50",
	"+ rsi 14",
	"+ macd 12 26 9",
	"+ bb 20",
	"+ vwap",
	"+ supertrend",
	"- rsi",
	"clear indicators",
	"",
	"Drawings",
	"hline 65000",
	"hline 65000 dashed",
	"zone 64000 67000",
	"clear drawings",
	"",
	"View",
	"style line",
	"theme light",
	"log on",
	"range 1D",
	"layout 2h",
	"",
	"Link a bot can open",
	"?symbol=coinbase:ETH-USD&tf=15&ind=ema:21,rsi:14",
	"Hyperliquid: ?symbol=hyperliquid:ETH&tf=15",
	"Add &fresh=1 to ignore the saved chart.",
	"Binance is not wired — its API refuses a browser chart.",
	"",
	"From a page that can see this one",
	"VelaDesk.run(\"ETH 15m; + ema 21\")",
	"VelaDesk.run({ symbol: \"BTC-USD\", timeframe: \"60\", indicators: [{ type: \"vwap\" }] })",
	"postMessage({ channel: \"vela-desk\", command: \"BTC 15m\" })"
];
var EXAMPLES = [
	"BTC 15m",
	"ETH 4h",
	"+ ema 21",
	"+ rsi 14",
	"hline 100000"
];
var VENUES$1 = [
	"coinbase",
	"binance",
	"hyperliquid"
];
function isVenue(value) {
	return VENUES$1.includes(value);
}
function formatSymbol(raw, venue) {
	const trimmed = raw.trim();
	const colon = trimmed.indexOf(":");
	if (colon > 0 && isVenue(trimmed.slice(0, colon).toLowerCase())) {
		const pinned = trimmed.slice(0, colon).toLowerCase();
		return `${pinned}:${formatTicker(pinned, trimmed.slice(colon + 1))}`;
	}
	return `${venue}:${formatTicker(venue, trimmed)}`;
}
function formatTicker(venue, ticker) {
	let u = ticker.trim().toUpperCase().replace(/\s+/g, "");
	if (venue === "coinbase") {
		u = u.replace("/", "-");
		if (u.endsWith("USDT")) u = `${u.slice(0, -4)}-USD`;
		else if (u.endsWith("-USD") || u.endsWith("-USDC")) return u;
		else if (u.endsWith("USD") && !u.includes("-")) u = `${u.slice(0, -3)}-USD`;
		else if (!u.includes("-")) u = `${u}-USD`;
		return u;
	}
	if (venue === "binance") {
		u = u.replace("-", "");
		if (u.endsWith(".P")) return u;
		if (u.endsWith("USDT") || u.endsWith("USDC")) return u;
		if (u.endsWith("USD")) return `${u.slice(0, -3)}USDT`;
		return `${u}USDT`;
	}
	u = u.replace("-", "");
	if (u.endsWith("USDT")) u = u.slice(0, -4);
	else if (u.endsWith("USD")) u = u.slice(0, -3);
	return u;
}
var VENUES = /* @__PURE__ */ new Set([
	"binance",
	"coinbase",
	"hyperliquid"
]);
var STYLES = /* @__PURE__ */ new Set([
	"candles",
	"bars",
	"line",
	"area",
	"baseline",
	"heikinashi",
	"heikin"
]);
var RANGES = /* @__PURE__ */ new Set([
	"1d",
	"1w",
	"1m",
	"3m",
	"6m",
	"1y",
	"ytd",
	"all"
]);
var LAYOUTS = /* @__PURE__ */ new Set([
	"1",
	"2h",
	"2v",
	"4",
	"8"
]);
var TF_MAP = {
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
	week: "W"
};
function normalizeTimeframe(raw) {
	const t = raw.trim();
	if (!t) return null;
	if (t === "M" || t === "1M" || /^1mo(nth)?$/i.test(t) || t.toLowerCase() === "month") return "M";
	return TF_MAP[t.toLowerCase()] ?? null;
}
function isTimeframe(raw) {
	return normalizeTimeframe(raw) != null;
}
function normalizeStyle(raw) {
	const s = raw.trim().toLowerCase();
	if (s === "heikin" || s === "heikinashi" || s === "ha") return "heikinashi";
	if (s === "candle" || s === "candlestick") return "candles";
	if (STYLES.has(s)) return s === "heikin" ? "heikinashi" : s;
	return null;
}
function isTicker(raw) {
	return /^[A-Za-z][A-Za-z0-9.:-]{0,24}$/.test(raw) && !isTimeframe(raw);
}
function splitLines(script) {
	return script.split(/[\n;]+/).map((line) => line.trim()).filter(Boolean);
}
function parseIndicatorTail(rest) {
	const inputs = {};
	const numbers = [];
	if (!rest) return {
		numbers,
		inputs
	};
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
		if (!Number.isFinite(num)) return {
			numbers,
			inputs,
			error: `Not a number: ${token}`
		};
		numbers.push(num);
	}
	return {
		numbers,
		inputs
	};
}
function parseLine(line, batch) {
	if (line.startsWith("#") || line.startsWith("//")) return;
	const lower = line.toLowerCase();
	if (lower === "help" || lower === "?") return;
	const clear = lower.match(/^clear(?:\s+(indicators|studies|drawings|levels|all))?$/);
	if (clear) {
		const what = clear[1];
		batch.ops.push({
			op: "clear",
			what: !what || what === "indicators" || what === "studies" ? "indicators" : what === "all" ? "all" : "drawings"
		});
		return;
	}
	const add = line.match(/^(?:\+\s*|add\s+|study\s+|indicator\s+)([A-Za-z][A-Za-z0-9%.-]*)(?:\s+(.+))?$/i);
	if (add) {
		const tail = parseIndicatorTail(add[2] ?? "");
		if (tail.error) batch.errors.push(tail.error);
		else batch.ops.push({
			op: "indicator",
			type: add[1],
			numbers: tail.numbers,
			inputs: tail.inputs
		});
		return;
	}
	const remove = line.match(/^(?:-\s*|remove\s+|rm\s+)([A-Za-z][A-Za-z0-9%.-]*)$/i);
	if (remove) {
		batch.ops.push({
			op: "remove",
			type: remove[1]
		});
		return;
	}
	const hline = line.match(/^(?:hline|level|price)\s+([+-]?\d+(?:\.\d+)?)(?:\s+(solid|dashed|dotted))?(?:\s+(#[0-9a-fA-F]{3,8}))?$/i);
	if (hline) {
		batch.ops.push({
			op: "hline",
			price: Number(hline[1]),
			lineStyle: hline[2]?.toLowerCase(),
			color: hline[3]
		});
		return;
	}
	const zone = line.match(/^(?:zone|box|range)\s+([+-]?\d+(?:\.\d+)?)\s+([+-]?\d+(?:\.\d+)?)(?:\s+(#[0-9a-fA-F]{3,8}))?$/i);
	if (zone) {
		const a = Number(zone[1]);
		const b = Number(zone[2]);
		batch.ops.push({
			op: "zone",
			high: Math.max(a, b),
			low: Math.min(a, b),
			color: zone[3]
		});
		return;
	}
	const kv = line.match(/^(symbol|sym|ticker|tf|timeframe|venue|exchange|style|theme|log|scale|layout|range|window)\s+(.+)$/i);
	if (kv) {
		applyKeyed(kv[1].toLowerCase(), kv[2].trim(), batch);
		return;
	}
	const parts = line.split(/\s+/);
	if (parts.length === 2 && isTicker(parts[0]) && isTimeframe(parts[1])) {
		batch.ops.push({
			op: "market",
			symbol: parts[0],
			timeframe: normalizeTimeframe(parts[1]) ?? void 0
		});
		return;
	}
	if (parts.length === 1 && isTimeframe(parts[0])) {
		batch.ops.push({
			op: "market",
			timeframe: normalizeTimeframe(parts[0]) ?? void 0
		});
		return;
	}
	if (parts.length === 1 && VENUES.has(parts[0].toLowerCase())) {
		batch.ops.push({
			op: "venue",
			venue: parts[0].toLowerCase()
		});
		return;
	}
	if (parts.length === 1 && normalizeStyle(parts[0])) {
		batch.ops.push({
			op: "style",
			style: normalizeStyle(parts[0])
		});
		return;
	}
	if (parts.length === 1 && isTicker(parts[0])) {
		batch.ops.push({
			op: "market",
			symbol: parts[0]
		});
		return;
	}
	batch.errors.push(`Didn't understand "${line}"`);
}
function applyKeyed(key, value, batch) {
	if (key === "symbol" || key === "sym" || key === "ticker") {
		const bits = value.split(/\s+/);
		if (bits.length === 2 && isTimeframe(bits[1])) batch.ops.push({
			op: "market",
			symbol: bits[0],
			timeframe: normalizeTimeframe(bits[1]) ?? void 0
		});
		else batch.ops.push({
			op: "market",
			symbol: value
		});
		return;
	}
	if (key === "tf" || key === "timeframe") {
		const tf = normalizeTimeframe(value);
		if (!tf) batch.errors.push(`Unknown timeframe "${value}"`);
		else batch.ops.push({
			op: "market",
			timeframe: tf
		});
		return;
	}
	if (key === "venue" || key === "exchange") {
		const venue = value.toLowerCase();
		if (!VENUES.has(venue)) batch.errors.push(`Venue must be coinbase, binance, or hyperliquid`);
		else batch.ops.push({
			op: "venue",
			venue
		});
		return;
	}
	if (key === "style") {
		const style = normalizeStyle(value);
		if (!style) batch.errors.push(`Unknown style "${value}"`);
		else batch.ops.push({
			op: "style",
			style
		});
		return;
	}
	if (key === "theme") {
		const theme = value.toLowerCase();
		if (theme !== "dark" && theme !== "light") batch.errors.push(`Theme must be dark or light`);
		else batch.ops.push({
			op: "theme",
			theme
		});
		return;
	}
	if (key === "log" || key === "scale") {
		const on = /^(1|on|true|log)$/i.test(value);
		const off = /^(0|off|false|linear)$/i.test(value);
		if (!on && !off) batch.errors.push(`Log must be on or off`);
		else batch.ops.push({
			op: "log",
			on
		});
		return;
	}
	if (key === "layout") {
		const layout = value.toLowerCase();
		if (!LAYOUTS.has(layout)) batch.errors.push(`Layout must be 1, 2h, 2v, 4, or 8`);
		else batch.ops.push({
			op: "layout",
			layout
		});
		return;
	}
	const preset = value.toUpperCase() === "YTD" || value.toUpperCase() === "ALL" ? value.toUpperCase() : value.toUpperCase();
	if (!RANGES.has(preset.toLowerCase())) batch.errors.push(`Range must be 1D, 1W, 1M, 3M, 6M, 1Y, YTD, or ALL`);
	else batch.ops.push({
		op: "range",
		preset: preset === "YTD" || preset === "ALL" ? preset : preset.toUpperCase()
	});
}
function fromStructured(raw, batch) {
	if (typeof raw.script === "string") for (const line of splitLines(raw.script)) parseLine(line, batch);
	if (typeof raw.venue === "string") applyKeyed("venue", raw.venue, batch);
	if (typeof raw.symbol === "string" || typeof raw.timeframe === "string" || typeof raw.tf === "string") {
		batch.ops.push({
			op: "market",
			symbol: typeof raw.symbol === "string" ? raw.symbol : void 0,
			timeframe: typeof raw.timeframe === "string" ? normalizeTimeframe(raw.timeframe) ?? void 0 : typeof raw.tf === "string" ? normalizeTimeframe(raw.tf) ?? void 0 : void 0
		});
		if (typeof raw.timeframe === "string" && !normalizeTimeframe(raw.timeframe)) batch.errors.push(`Unknown timeframe "${raw.timeframe}"`);
	}
	if (typeof raw.style === "string" || typeof raw.priceStyle === "string") applyKeyed("style", String(raw.style ?? raw.priceStyle), batch);
	if (typeof raw.theme === "string") applyKeyed("theme", raw.theme, batch);
	if (typeof raw.log === "boolean" || typeof raw.logScale === "boolean") batch.ops.push({
		op: "log",
		on: Boolean(raw.log ?? raw.logScale)
	});
	if (typeof raw.range === "string") applyKeyed("range", raw.range, batch);
	if (typeof raw.layout === "string") applyKeyed("layout", raw.layout, batch);
	if (raw.clearIndicators === true) batch.ops.push({
		op: "clear",
		what: "indicators"
	});
	if (raw.clearDrawings === true) batch.ops.push({
		op: "clear",
		what: "drawings"
	});
	if (Array.isArray(raw.remove)) {
		for (const item of raw.remove) if (typeof item === "string") batch.ops.push({
			op: "remove",
			type: item
		});
	}
	if (Array.isArray(raw.indicators)) for (const item of raw.indicators) pushIndicator(item, batch);
	if (typeof raw.hline === "number") batch.ops.push({
		op: "hline",
		price: raw.hline
	});
	if (raw.hline && typeof raw.hline === "object") pushHline(raw.hline, batch);
	if (Array.isArray(raw.hlines)) {
		for (const price of raw.hlines) if (typeof price === "number") batch.ops.push({
			op: "hline",
			price
		});
	}
	if (Array.isArray(raw.zone) && raw.zone.length >= 2) {
		const a = Number(raw.zone[0]);
		const b = Number(raw.zone[1]);
		if (Number.isFinite(a) && Number.isFinite(b)) batch.ops.push({
			op: "zone",
			high: Math.max(a, b),
			low: Math.min(a, b)
		});
	}
	if (raw.zone && typeof raw.zone === "object" && !Array.isArray(raw.zone)) {
		const z = raw.zone;
		const high = Number(z.high);
		const low = Number(z.low);
		if (Number.isFinite(high) && Number.isFinite(low)) batch.ops.push({
			op: "zone",
			high: Math.max(high, low),
			low: Math.min(high, low),
			color: typeof z.color === "string" ? z.color : void 0
		});
	}
	if (Array.isArray(raw.drawings)) for (const item of raw.drawings) {
		if (!item || typeof item !== "object") continue;
		const d = item;
		const type = String(d.type ?? "hline").toLowerCase();
		if (type === "hline" || type === "level") pushHline(d, batch);
		if (type === "zone" || type === "box") {
			const high = Number(d.high ?? d.y1);
			const low = Number(d.low ?? d.y2);
			if (Number.isFinite(high) && Number.isFinite(low)) batch.ops.push({
				op: "zone",
				high: Math.max(high, low),
				low: Math.min(high, low),
				color: typeof d.color === "string" ? d.color : void 0
			});
		}
	}
}
function pushIndicator(item, batch) {
	if (typeof item === "string") {
		parseLine(item.startsWith("+") ? item : `+ ${item}`, batch);
		return;
	}
	if (!item || typeof item !== "object") return;
	const row = item;
	const type = String(row.type ?? row.name ?? "");
	if (!type) return;
	const inputs = {};
	const numbers = [];
	if (row.inputs && typeof row.inputs === "object") {
		for (const [key, value] of Object.entries(row.inputs)) if (typeof value === "number" || typeof value === "string" || typeof value === "boolean") inputs[key] = value;
	}
	if (typeof row.length === "number") inputs.length = row.length;
	batch.ops.push({
		op: "indicator",
		type,
		numbers,
		inputs
	});
}
function pushHline(item, batch) {
	if (!item || typeof item !== "object") return;
	const row = item;
	const price = Number(row.price ?? row.y);
	if (!Number.isFinite(price)) return;
	const lineStyle = row.style === "dashed" || row.style === "dotted" || row.style === "solid" ? row.style : void 0;
	batch.ops.push({
		op: "hline",
		price,
		lineStyle,
		color: typeof row.color === "string" ? row.color : void 0
	});
}
function parseCommand(input) {
	const batch = {
		ops: [],
		errors: []
	};
	if (input && typeof input === "object") {
		fromStructured(input, batch);
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
	if (text.startsWith("{") || text.startsWith("[")) try {
		const json = JSON.parse(text);
		if (Array.isArray(json)) {
			for (const item of json) if (typeof item === "string") parseLine(item, batch);
			else if (item && typeof item === "object") fromStructured(item, batch);
		} else if (json && typeof json === "object") fromStructured(json, batch);
		return batch;
	} catch {
		batch.errors.push("That JSON didn't parse");
		return batch;
	}
	for (const line of splitLines(text)) parseLine(line, batch);
	if (batch.ops.length === 0 && batch.errors.length === 0) batch.errors.push("Empty command");
	return batch;
}
function readBoot(search) {
	const params = new URLSearchParams(search);
	return {
		symbol: params.get("symbol") || params.get("s") || "BTC-USD",
		timeframe: normalizeTimeframe(params.get("tf") || params.get("timeframe") || "15") ?? "15",
		fresh: params.get("fresh") === "1",
		ind: params.get("ind"),
		cmd: params.get("cmd")
	};
}
var ALIASES = {
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
	ttm: "ttm-squeeze"
};
var LEVEL = "#d6d3cb";
function norm(value) {
	return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}
function resolveType(token, catalog) {
	const n = norm(token);
	const alias = ALIASES[n] ?? ALIASES[token.toLowerCase()];
	if (alias && (catalog.length === 0 || catalog.some((row) => row.type === alias))) return alias;
	const exact = catalog.find((row) => norm(row.type) === n || norm(row.title) === n);
	if (exact) return exact.type;
	if (n.length < 2) return null;
	return catalog.find((row) => norm(row.type).includes(n) || norm(row.title).includes(n))?.type ?? null;
}
function numericKeys(desc) {
	return (desc?.inputs ?? []).filter((input) => input.key && (input.type === "int" || input.type === "float")).map((input) => input.key);
}
function withNumbers(desc, numbers, inputs) {
	const next = { ...inputs };
	if (numbers.length === 0) return next;
	const keys = numericKeys(desc).filter((key) => !(key in next));
	if (numbers.length === 1) {
		const key = keys.includes("length") ? "length" : keys[0] ?? "length";
		next[key] = numbers[0];
		return next;
	}
	numbers.forEach((value, index) => {
		const key = keys[index];
		if (key) next[key] = value;
	});
	return next;
}
function sameInputs(handle, inputs) {
	const current = handle.inputValues();
	return Object.entries(inputs).every(([key, value]) => String(current[key]) === String(value));
}
function readState(ws, href) {
	const cell = ws.active;
	const resolved = ws.chart.data.resolve(cell.symbol);
	const symbol = resolved ? `${resolved.provider}:${resolved.ticker}` : cell.symbol;
	const indicators = ws.chart.indicators().filter((item) => item.nativeType && item.nativeType !== "volume").map((item) => ({
		type: item.nativeType,
		title: item.title,
		inputs: item.inputValues()
	}));
	const url = new URL(href, "http://localhost");
	url.search = "";
	url.hash = "";
	const params = new URLSearchParams();
	params.set("symbol", symbol);
	params.set("tf", cell.timeframe);
	if (indicators.length) params.set("ind", indicators.map((item) => {
		const keys = Object.entries(item.inputs).filter(([, value]) => typeof value === "number");
		if (!keys.length) return item.type;
		return `${item.type}:${keys.map(([, value]) => value).join("-")}`;
	}).join(","));
	url.search = params.toString();
	return {
		symbol,
		timeframe: cell.timeframe,
		priceStyle: cell.priceStyle,
		indicators,
		drawings: ws.chart.drawings.all().length,
		link: `${url.origin}${url.pathname}?${params.toString()}`
	};
}
function anchorTime(chart) {
	const range = chart.getVisibleRange();
	if (range) return range;
	const now = Date.now();
	return {
		from: now - 864e5,
		to: now
	};
}
function createRunner(ws, getNative, href) {
	let venue = "coinbase";
	const finish = (notes, errors) => {
		const state = readState(ws, href());
		const head = errors.length ? errors.join(" ") : notes.join(" · ");
		return {
			ok: errors.length === 0,
			message: head || `${state.symbol} · ${state.timeframe}`,
			state
		};
	};
	const apply = async (ops, errors) => {
		const notes = [];
		let catalog = null;
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
				const next = {};
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
					for (const item of ws.chart.indicators()) if (op.what === "all" || item.nativeType !== "volume") item.remove();
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
				const handle = ws.chart.addNativeIndicator(type, Object.keys(inputs).length ? { inputs } : void 0);
				if (!handle.nativeType) {
					handle.remove();
					errors.push(`Couldn't add ${type}`);
				} else notes.push(handle.title);
				continue;
			}
			if (op.op === "hline") {
				const span = anchorTime(ws.chart);
				if (!ws.chart.drawings.add("hline", {
					anchors: [{
						time: (span.from + span.to) / 2,
						price: op.price
					}],
					style: {
						lineColor: op.color ?? LEVEL,
						lineWidth: 1,
						lineStyle: op.lineStyle ?? "dashed"
					}
				})) errors.push("Couldn't place that level");
				else notes.push(`level ${op.price}`);
				continue;
			}
			const span = anchorTime(ws.chart);
			if (!ws.chart.drawings.add("box", {
				anchors: [{
					time: span.from,
					price: op.high
				}, {
					time: span.to,
					price: op.low
				}],
				style: {
					lineColor: op.color ?? LEVEL,
					lineWidth: 1,
					lineStyle: "solid",
					fillColor: op.color ?? LEVEL,
					fillOpacity: .08
				}
			})) errors.push("Couldn't place that zone");
			else notes.push(`zone ${op.low}–${op.high}`);
		}
		return finish(notes, errors);
	};
	return {
		venue: () => venue,
		state: () => readState(ws, href()),
		run: async (input) => {
			const batch = parseCommand(input);
			if (batch.ops.length === 0) return finish([], batch.errors.length ? batch.errors : ["Empty command"]);
			try {
				return await apply(batch.ops, [...batch.errors]);
			} catch (error) {
				const message = error instanceof Error ? error.message : "The chart rejected that command";
				return finish([], [...batch.errors, message]);
			}
		}
	};
}
var HISTORY_KEY = "vela-desk-history";
function loadHistory() {
	try {
		const raw = localStorage.getItem(HISTORY_KEY);
		const parsed = raw ? JSON.parse(raw) : [];
		return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string").slice(0, 30) : [];
	} catch {
		return [];
	}
}
function VelaDesk() {
	const hostRef = (0, import_react.useRef)(null);
	const runnerRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const historyRef = (0, import_react.useRef)([]);
	const historyAt = (0, import_react.useRef)(-1);
	const [draft, setDraft] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("Opening the tape…");
	const [failed, setFailed] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [help, setHelp] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!hostRef.current) return;
		const bag = {
			dead: false,
			off: () => {},
			workspace: null
		};
		const boot = async () => {
			await new Promise((resolve) => requestAnimationFrame(resolve));
			if (bag.dead || !hostRef.current) return;
			const [{ VelaWorkspace }, coinbase, hyperliquid, core] = await Promise.all([
				import("../_libs/@luxalgo/vela+[...].mjs").then((n) => n.t),
				import("../_libs/@luxalgo/vela+[...].mjs").then((n) => n.r),
				import("../_libs/@luxalgo/vela+[...].mjs").then((n) => n.n),
				import("../_libs/@luxalgo/vela+[...].mjs").then((n) => n.i)
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
					hyperliquid: () => new hyperliquid.HyperliquidProvider()
				}
			});
			if (bag.dead) {
				ws.destroy();
				return;
			}
			bag.workspace = ws;
			const runner = createRunner(ws, (type) => core.getNativeIndicator(type), () => window.location.href);
			runnerRef.current = runner;
			const onMessage = (event) => {
				const data = event.data;
				if (!data || data.channel !== "vela-desk" || data.command == null) return;
				runner.run(data.command).then((result) => {
					if (bag.dead) return;
					window.dispatchEvent(new CustomEvent("vela-desk", { detail: result.state }));
					setStatus(result.message);
					setFailed(!result.ok);
					event.source?.postMessage?.({
						channel: "vela-desk",
						ok: result.ok,
						message: result.message,
						state: result.state
					}, "*");
				});
			};
			window.addEventListener("message", onMessage);
			bag.off = () => window.removeEventListener("message", onMessage);
			window.VelaDesk = {
				run: async (input) => {
					const result = await runner.run(input);
					if (!bag.dead) {
						setStatus(result.message);
						setFailed(!result.ok);
					}
					return result;
				},
				state: () => runner.state(),
				help: () => HELP_LINES.join("\n")
			};
			try {
				await ws.chart.ready();
				if (bag.dead) return;
				ws.resize();
				const search = new URLSearchParams(window.location.search);
				if (search.has("symbol") || search.has("s") || search.has("tf") || search.has("timeframe")) await ws.chart.setMarket({
					symbol,
					timeframe: params.timeframe
				});
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
		boot().catch((error) => {
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
	async function runDraft(text) {
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
	function onKeyDown(event) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "safe-top safe-bottom flex h-dvh flex-col bg-ink text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex h-12 shrink-0 items-center gap-1.5 border-b border-line bg-panel px-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 items-center gap-2 pr-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CandleMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-sm font-medium tracking-wide sm:inline",
							children: "Vela"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "flex min-w-0 flex-1 items-center gap-1.5",
						onSubmit: (event) => {
							event.preventDefault();
							runDraft(draft);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "sr-only",
								htmlFor: "desk-command",
								children: "Chart command"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "desk-command",
								ref: inputRef,
								value: draft,
								onChange: (event) => setDraft(event.target.value),
								onKeyDown,
								placeholder: "BTC 15m   ·   + ema 21",
								autoCapitalize: "off",
								autoCorrect: "off",
								spellCheck: false,
								className: "h-9 min-w-0 flex-1 rounded-md border border-line bg-ink px-3 font-mono text-sm text-paper outline-none placeholder:text-stone focus:border-stone"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: busy || !draft.trim(),
								className: "inline-flex h-11 items-center gap-1 rounded-md bg-paper px-3 text-sm font-medium text-ink disabled:opacity-40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerDownLeft, {
									className: "size-4",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Run"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Copy chart link",
						onClick: () => void copyLink(),
						className: "inline-flex size-11 items-center justify-center rounded-md text-stone hover:bg-ink hover:text-paper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Command help",
						"aria-expanded": help,
						onClick: () => setHelp((open) => !open),
						className: "inline-flex size-11 items-center justify-center rounded-md text-stone hover:bg-ink hover:text-paper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleHelp, { className: "size-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `shrink-0 truncate px-3 py-1 font-mono text-xs ${failed ? "text-down" : "text-stone"}`,
				"aria-live": "polite",
				children: status
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-h-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: hostRef,
					className: "absolute inset-0"
				}), help && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					role: "dialog",
					"aria-label": "Command language",
					className: "absolute inset-x-2 top-2 bottom-2 flex flex-col overflow-hidden rounded-lg border border-line bg-panel shadow-2xl sm:inset-auto sm:top-2 sm:right-2 sm:bottom-auto sm:max-h-full sm:w-96",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-line px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-medium",
								children: "Drive the chart"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Close help",
								onClick: () => setHelp(false),
								className: "inline-flex size-11 items-center justify-center text-stone",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1.5 overflow-x-auto px-3 py-2",
							children: EXAMPLES.map((example) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "shrink-0 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-paper",
								onClick: () => {
									setHelp(false);
									runDraft(example);
								},
								children: example
							}, example))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "min-h-0 flex-1 overflow-auto px-3 pb-3 font-mono text-xs leading-relaxed whitespace-pre-wrap text-stone",
							children: HELP_LINES.join("\n")
						})
					]
				})]
			})
		]
	});
}
function prettySymbol(symbol) {
	return symbol.includes(":") ? symbol.slice(symbol.indexOf(":") + 1) : symbol;
}
function prettyTf(tf) {
	return {
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
		M: "1M"
	}[tf] ?? tf;
}
function indScript(ind) {
	return ind.split(",").map((part) => {
		const piece = part.trim();
		if (!piece) return "";
		const colon = piece.indexOf(":");
		if (colon < 0) return `+ ${piece}`;
		return `+ ${piece.slice(0, colon)} ${piece.slice(colon + 1).replace(/-/g, " ")}`.trim();
	}).filter(Boolean).join("\n");
}
function CandleMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		"aria-hidden": "true",
		className: "size-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				rx: "7",
				className: "fill-ink"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M10 21V12",
				className: "stroke-down",
				strokeWidth: "2.2",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8.3",
				y: "14.4",
				width: "3.4",
				height: "4",
				rx: "0.4",
				className: "fill-down"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M22 22V10",
				className: "stroke-up",
				strokeWidth: "2.2",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "20.3",
				y: "12.2",
				width: "3.4",
				height: "6",
				rx: "0.4",
				className: "fill-up"
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VelaDesk, {});
}
//#endregion
export { Home as component };
