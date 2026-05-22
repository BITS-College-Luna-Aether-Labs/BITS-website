export const THEME_COOKIE = "bits_theme";
export const THEME_STORAGE_KEY = "bits_theme";
export type Theme = "light" | "dark" | "system";

export const THEME_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export function parseTheme(value: string | undefined): Theme {
  if (value === "light" || value === "dark" || value === "system") {
    return value;
  }
  return "system";
}

export function resolveTheme(theme: Theme): "light" | "dark" {
  if (theme === "light" || theme === "dark") return theme;
  return "light";
}

/** Minimal inline script to prevent theme flash — injected before first paint */
export const THEME_SCRIPT = `
(function(){try{var c=document.cookie.split('; ').find(function(c){return c.startsWith('bits_theme=')});var v=c?c.split('=')[1]:'system';document.documentElement.classList.toggle('dark',v==='dark'||(v==='system'&&window.matchMedia('(prefers-color-scheme:dark)').matches))}catch(e){}})()
`;
