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

function readStoredTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
  } catch {
    /* localStorage unavailable */
  }
  return "light";
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
  initialTheme = "light",
}: {
  children: React.ReactNode;
  initialTheme?: Theme;
}) {
  const [theme, setThemeState] = useState<Theme>(
    initialTheme === "system" ? "light" : initialTheme,
  );
  const [resolved, setResolved] = useState<"light" | "dark">(
    resolveTheme(initialTheme),
  );

  const setTheme = useCallback((next: Theme) => {
    const value = next === "dark" ? "dark" : "light";
    setThemeState(value);
    persistTheme(value);
    setResolved(value);
    applyResolved(value);
  }, []);

  useEffect(() => {
    const stored = readStoredTheme();
    const resolvedValue = stored === "dark" ? "dark" : "light";
    setThemeState(resolvedValue);
    setResolved(resolvedValue);
    applyResolved(resolvedValue);
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
