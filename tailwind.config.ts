import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        background: {
          light: "#FAFAFA",
          dark: "#0A0A0A",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#121212",
        },
        foreground: {
          light: "#111111",
          dark: "#F5F5F5",
        },
        muted: {
          light: "#666666",
          dark: "#9E9E9E",
        },
        border: {
          light: "#E5E5E5",
          dark: "#262626",
        },
      },
    },
  },
  plugins: [],
};

export default config;