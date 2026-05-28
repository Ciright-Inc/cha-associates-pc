import { NextResponse } from "next/server";

export function GET() {
  // Devtools/extensions sometimes request a cached favicon filename.
  return NextResponse.redirect(new URL("https://chaassociatespc.com/icon.svg"), 307);
}

