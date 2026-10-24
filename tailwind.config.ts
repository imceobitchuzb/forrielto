import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50: "#FAF8F5",
          100: "#F5F2EC", // Primary background
          200: "#EAE5DC", // Secondary background
          300: "#DDD8CF", // Subtle border
          400: "#B8B2A6",
          500: "#8C867B",
          600: "#77746D", // Secondary text
          700: "#504E49",
          800: "#343532",
          900: "#20211F", // Deep graphite
          950: "#141513",
        },
        bronze: {
          50: "#FBF7F2",
          100: "#F5ECE1",
          200: "#EAD7C2",
          300: "#DCBE9E",
          400: "#C59B6F",
          500: "#A8794A", // Muted bronze accent
          600: "#8F6238",
          700: "#744E2C",
          800: "#5E3E23",
          900: "#49301B",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      letterSpacing: {
        widest: ".2em",
        tighter: "-0.04em",
      },
      boxShadow: {
        editorial: "0 20px 40px -15px rgba(32, 33, 31, 0.05)",
        luxury: "0 30px 60px -12px rgba(32, 33, 31, 0.08), 0 18px 36px -18px rgba(32, 33, 31, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
