import { NextResponse } from "next/server";

export function GET() {
  // Devtools/extensions sometimes request a cached favicon filename.
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chaassociatespc.com";
  return NextResponse.redirect(new URL("/icon.svg", base), 307);
}

