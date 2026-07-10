import { NextResponse } from "next/server";

/** Pre-computed SHA-256 hashes for inline scripts (theme + error reporter) */
const THEME_HASH = "'sha256-NhzUKfveOg7mcRyOHqfXa83QgUQOuo/uyYCLkLqe9CE='";
const ERROR_HASH = "'sha256-SFvwRvpSGNkVRKBwaqdtHPgB8Pxaikx+oEshBInp6oY='";

const isDev = process.env.NODE_ENV !== "production";

export function middleware() {
  const nonce = crypto.randomUUID();
  const response = NextResponse.next();

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' ${THEME_HASH} ${ERROR_HASH}${isDev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
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
