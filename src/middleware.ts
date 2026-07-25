import { NextResponse, type NextRequest } from "next/server";

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

export function middleware(request: NextRequest) {
  const nonce = uuidv4();

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' ${THEME_HASH} ${ERROR_HASH}${isDev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://i.ytimg.com",
    "font-src 'self' data:",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://applications.bitscollege.edu.et",
    "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
    "frame-ancestors 'self'",
    ...(isDev ? [] : ["upgrade-insecure-requests"]),
  ].join("; ");

  // Next.js must see the nonce on the REQUEST so it can stamp it onto
  // its own hydration / streaming scripts (self.__next_f.push, etc.)
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("x-nonce", nonce);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|llms.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|mp4|pdf|woff2)$).*)"],
};
