/** Theme utilities — syncs <html> class with localStorage so dark mode survives refresh without flash */
export type Theme = "light" | "dark";

const STORAGE_KEY = "bits_theme";

export function getDOMTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

let themeListeners: Set<() => void> = new Set();

export function subscribeToTheme(cb: () => void): () => void {
  themeListeners.add(cb);
  return () => themeListeners.delete(cb);
}

export function notifyThemeChange() {
  themeListeners.forEach((fn) => fn());
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function persistTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch { /* ignore */ }
}

/** Runs before React hydration to prevent dark/light flash */
export const THEME_SCRIPT = `(function(){try{var v=localStorage.getItem('bits_theme');document.documentElement.classList.toggle('dark',v==='dark')}catch(e){}})()`;
