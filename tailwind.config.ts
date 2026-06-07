import type { Config } from "tailwindcss";

const config: Config = {
  content: [
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
          gold: "#b48c1e",
          "gold-light": "#d4af37",
          gray: "#54595F",
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
    },
  },
  plugins: [],
};

export default config;
