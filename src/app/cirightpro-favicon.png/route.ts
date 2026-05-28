import { NextResponse } from "next/server";
import { normalizeSiteUrl } from "@/lib/siteUrl";

export function GET() {
  // Devtools/extensions sometimes request a cached favicon filename.
  const base = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
  return NextResponse.redirect(new URL("/icon.svg", base), 307);
}

