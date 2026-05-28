import { NextResponse } from "next/server";
import { normalizeSiteUrl } from "@/lib/siteUrl";

export function GET() {
  // Avoid noisy 404s for browsers requesting /favicon.ico by default.
  const base = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
  return NextResponse.redirect(new URL("/icon.svg", base), 307);
}

