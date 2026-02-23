import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#06101f",
        "ink-soft": "#0b1728",
        panel: "#0e1d34",
        line: "rgba(148, 163, 184, 0.16)",
        accent: {
          DEFAULT: "#5f86b8",
          soft: "#86a4cc",
          glow: "rgba(95, 134, 184, 0.22)"
        }
      },
      boxShadow: {
        panel: "0 10px 40px rgba(2, 8, 23, 0.42)",
        glow: "0 0 0 1px rgba(95, 134, 184, 0.22), 0 12px 32px rgba(4, 12, 24, 0.45)"
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(95, 134, 184, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(95, 134, 184, 0.07) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
