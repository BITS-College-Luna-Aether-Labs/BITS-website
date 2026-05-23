import { NextRequest, NextResponse } from "next/server";
import { THEME_COOKIE, THEME_COOKIE_MAX_AGE, parseTheme } from "@/lib/theme";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const existing = request.cookies.get(THEME_COOKIE)?.value;

  if (!existing) {
    response.cookies.set(THEME_COOKIE, "light", {
      maxAge: THEME_COOKIE_MAX_AGE,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
  } else {
    const theme = parseTheme(existing);
    response.cookies.set(THEME_COOKIE, theme, {
      maxAge: THEME_COOKIE_MAX_AGE,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/).*)"],
};
