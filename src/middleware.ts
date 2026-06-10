import { NextRequest, NextResponse } from "next/server";

const isDev = process.env.NODE_ENV !== "production";

export function middleware(request: NextRequest) {
  const nonce = crypto.randomUUID();
  const nonceScript = `'nonce-${nonce}'`;
  const response = NextResponse.next();

  const csp = [
    "default-src 'self'",
    `script-src 'self' ${nonceScript}${isDev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' https://www.bitscollege.edu.et data: blob:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://applications.bitscollege.edu.et",
    "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
    "frame-ancestors 'self'",
    ...(isDev ? [] : ["upgrade-insecure-requests"]),
  ].join("; ");

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("x-nonce", nonce);

  return response;
}

export const config = {
  matcher: "/:path*",
};
