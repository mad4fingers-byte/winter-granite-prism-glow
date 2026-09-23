const VENUES = ["coinbase", "binance", "hyperliquid"] as const;
export type VenueName = (typeof VENUES)[number];

export function isVenue(value: string): value is VenueName {
  return (VENUES as readonly string[]).includes(value);
}

export function formatSymbol(raw: string, venue: VenueName): string {
  const trimmed = raw.trim();
  const colon = trimmed.indexOf(":");
  if (colon > 0 && isVenue(trimmed.slice(0, colon).toLowerCase())) {
    const pinned = trimmed.slice(0, colon).toLowerCase() as VenueName;
    return `${pinned}:${formatTicker(pinned, trimmed.slice(colon + 1))}`;
  }
  return `${venue}:${formatTicker(venue, trimmed)}`;
}

function formatTicker(venue: VenueName, ticker: string): string {
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
