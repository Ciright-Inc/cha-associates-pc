import { NextResponse } from "next/server";

export function GET() {
  // Avoid noisy 404s for browsers requesting /favicon.ico by default.
  return NextResponse.redirect(new URL("https://chaassociatespc.com/icon.svg"), 307);
}

