import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bits: {
          green: "#7DC243",
          "green-dark": "#6aad38",
          "green-light": "#a8d97a",
          gold: "#b48c1e",
          "gold-light": "#d4af37",
          "gold-muted": "#9d7d2a",
          gray: "#54595F",
          "text-muted": "var(--bits-muted)",
          footer: "#454545",
          "footer-text": "#F1F4FA",
          heading: "var(--bits-heading)",
        },
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "Open Sans", "system-ui", "sans-serif"],
        slab: ["var(--font-roboto-slab)", "Roboto Slab", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
      },
      maxWidth: {
        site: "1200px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0, 0, 0, 0.08)",
        "card-hover": "var(--shadow-card-hover)",
        "glow-green": "0 0 12px rgba(125, 194, 67, 0.25)",
        "glow-gold": "0 0 12px rgba(180, 140, 30, 0.2)",
      },
      borderRadius: {
        pill: "126px",
      },
      backgroundImage: {
        "shimmer-green": "linear-gradient(90deg, transparent, rgba(125, 194, 67, 0.3), transparent)",
        "shimmer-gold": "linear-gradient(90deg, transparent, rgba(180, 140, 30, 0.3), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
