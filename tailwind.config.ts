import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "#0a0a0a",
        "bg-surface": "#111111",
        "bg-border": "#1e1e1e",
        "accent-green": "#00ff88",
        "accent-cyan": "#00ccff",
        "accent-red": "#ff4444",
        "text-primary": "#e2e8f0",
        "text-muted": "#64748b",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
