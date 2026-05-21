"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  THEME_COOKIE,
  THEME_STORAGE_KEY,
  type Theme,
  resolveTheme,
} from "@/lib/theme";

type ThemeContextValue = {
  theme: Theme;
  resolved: "light" | "dark";
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyResolved(resolved: "light" | "dark") {
  document.documentElement.classList.toggle("dark", resolved === "dark");
}

function readSystemPreference(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function readStoredTheme(): Theme {
  if (typeof window === "undefined") return "system";
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
  } catch {
    /* localStorage unavailable */
  }
  return "system";
}

function persistTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
  document.cookie = `${THEME_COOKIE}=${theme}; path=/; max-age=31536000; SameSite=Lax${
    window.location.protocol === "https:" ? "; Secure" : ""
  }`;
}

export function ThemeProvider({
  children,
  initialTheme = "system",
}: {
  children: React.ReactNode;
  initialTheme?: Theme;
}) {
  const [theme, setThemeState] = useState<Theme>(
    initialTheme === "system" ? "light" : initialTheme,
  );
  const [resolved, setResolved] = useState<"light" | "dark">("light");

  const setTheme = useCallback((next: Theme) => {
    const normalized =
      next === "system" ? readSystemPreference() : resolveTheme(next);
    const themeValue = normalized === "dark" ? "dark" : "light";
    setThemeState(themeValue);
    persistTheme(themeValue);
    setResolved(themeValue);
    applyResolved(themeValue);
  }, []);

  useEffect(() => {
    const stored = readStoredTheme();
    setThemeState(stored);
    const resolvedNext =
      stored === "system" ? readSystemPreference() : resolveTheme(stored);
    setResolved(resolvedNext);
    applyResolved(resolvedNext);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (stored === "system") {
        const sys = readSystemPreference();
        setResolved(sys);
        applyResolved(sys);
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const value = useMemo(
    () => ({ theme, resolved, setTheme }),
    [theme, resolved, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
