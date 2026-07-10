import { NextResponse } from "next/server";

/** Pre-computed SHA-256 hashes for inline scripts (theme + error reporter) */
const THEME_HASH = "'sha256-NhzUKfveOg7mcRyOHqfXa83QgUQOuo/uyYCLkLqe9CE='";
const ERROR_HASH = "'sha256-SFvwRvpSGNkVRKBwaqdtHPgB8Pxaikx+oEshBInp6oY='";

const isDev = process.env.NODE_ENV !== "production";

/** Edge-safe UUID v4 (crypto.randomUUID not in all Edge runtimes) */
function uuidv4() {
  const b = crypto.getRandomValues(new Uint8Array(16));
  b[6] = (b[6] & 0x0f) | 0x40;
  b[8] = (b[8] & 0x3f) | 0x80;
  let s = "";
  for (let i = 0; i < 16; i++) s += b[i].toString(16).padStart(2, "0");
  return `${s.slice(0,8)}-${s.slice(8,12)}-${s.slice(12,16)}-${s.slice(16,20)}-${s.slice(20)}`;
}

export function middleware() {
  const nonce = uuidv4();
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
