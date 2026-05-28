export function normalizeSiteUrl(input: string | undefined | null) {
  const raw = (input ?? "").trim();
  if (!raw) return "https://chaassociatespc.com";
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
  // Railway users often paste the domain without a scheme.
  return `https://${raw}`;
}

