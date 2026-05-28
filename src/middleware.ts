import { NextResponse, type NextRequest } from "next/server";

const JS_SHIMS = new Set(["/main-app.js", "/app-pages-internals.js", "/layout.js", "/page.js"]);
const CSS_SHIMS = new Set(["/layout.css"]);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (JS_SHIMS.has(pathname)) {
    return new NextResponse("/* shim */\n", {
      status: 200,
      headers: {
        "content-type": "application/javascript; charset=utf-8",
        "cache-control": "no-store"
      }
    });
  }

  if (CSS_SHIMS.has(pathname)) {
    return new NextResponse("/* shim */\n", {
      status: 200,
      headers: {
        "content-type": "text/css; charset=utf-8",
        "cache-control": "no-store"
      }
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/main-app.js", "/app-pages-internals.js", "/layout.js", "/page.js", "/layout.css"]
};

