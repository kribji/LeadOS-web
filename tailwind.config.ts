import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "#040810",
        "bg-surface": "#0e1822",
        "bg-elevated": "#152232",
        "teal-400": "#00d4aa",
        "teal-950": "#002820",
        "border-teal": "#00422e",
        "border-color": "#0e1822",
        "text-primary": "#dce8f0",
        "text-secondary": "#7a9ab0",
        "text-muted": "#4a6272",
        "blue-400": "#60a5fa",
        "amber-400": "#f59e0b",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
