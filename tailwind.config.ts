import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        surface: {
          primary: "#0a0a0f",
          secondary: "#12121a",
          tertiary: "#1a1a28",
        },
        content: {
          primary: "#f0f0f5",
          secondary: "#8a8a9a",
          tertiary: "#55556a",
        },
        accent: {
          DEFAULT: "#3b82f6",
          light: "#60a5fa",
          glow: "rgba(59,130,246,0.15)",
          subtle: "rgba(59,130,246,0.08)",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.06)",
          hover: "rgba(255,255,255,0.12)",
          accent: "rgba(59,130,246,0.3)",
        },
      },
      animation: {
        "grain": "grain 8s steps(10) infinite",
        "grid-drift": "grid-drift 25s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "draw-line": "draw-line 0.6s ease-out forwards",
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
        "grid-drift": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "draw-line": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;