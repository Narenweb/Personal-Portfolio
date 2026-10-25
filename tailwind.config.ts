import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "rgb(var(--bg) / <alpha-value>)",
          soft: "rgb(var(--bg-soft) / <alpha-value>)",
          card: "rgb(var(--bg-card) / <alpha-value>)",
        },
        line: "var(--line)",
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          warm: "#ff6b35",
          cool: "#7c3aed",
        },
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          dim: "rgb(var(--ink-dim) / <alpha-value>)",
          mute: "rgb(var(--ink-mute) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-1": ["clamp(2.25rem, 5.5vw, 4.75rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-2": ["clamp(1.875rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "section": ["clamp(1.5rem, 2.6vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "marquee-rev": "marquee-rev 35s linear infinite",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
        "blink": "blink 1.05s steps(2, start) infinite",
        "grain": "grain 8s steps(10) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-10%)" },
          "20%": { transform: "translate(-15%,5%)" },
          "30%": { transform: "translate(7%,-25%)" },
          "40%": { transform: "translate(-5%,25%)" },
          "50%": { transform: "translate(-15%,10%)" },
          "60%": { transform: "translate(15%,0%)" },
          "70%": { transform: "translate(0%,15%)" },
          "80%": { transform: "translate(3%,35%)" },
          "90%": { transform: "translate(-10%,10%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
