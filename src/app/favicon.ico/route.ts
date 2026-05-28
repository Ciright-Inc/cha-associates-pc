import { NextResponse } from "next/server";

export function GET() {
  // Avoid noisy 404s for browsers requesting /favicon.ico by default.
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chaassociatespc.com";
  return NextResponse.redirect(new URL("/icon.svg", base), 307);
}

