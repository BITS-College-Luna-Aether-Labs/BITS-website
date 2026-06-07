"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import { subscribeToTheme, getDOMTheme, applyTheme, persistTheme, notifyThemeChange } from "@/lib/theme";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  resolved: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

/** Reads theme from <html> class — avoids React state getting out of sync during navigation */
function getSnapshot(): Theme {
  return getDOMTheme();
}

function getServerSnapshot(): Theme {
  return "light";
}

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useSyncExternalStore(subscribeToTheme, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((next: Theme) => {
    applyTheme(next);
    persistTheme(next);
    notifyThemeChange();
  }, []);

  const value = useMemo(
    () => ({ theme, resolved: theme, setTheme }),
    [theme, setTheme],
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
