/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: "#fdfcfa",
          100: "#faf8f5",
          200: "#f0ece4",
          300: "#e4dfd6",
          400: "#d4cdc0",
          500: "#b8b0a0",
        },
        ink: {
          DEFAULT: "#1a1520",
          light: "#2d2636",
          muted: "#6b6370",
          faint: "#9e97a5",
        },
        accent: {
          DEFAULT: "#c94040",
          hover: "#a83232",
          light: "#f2dede",
        },
        gold: {
          DEFAULT: "#b8924f",
          light: "#d4b87a",
          faint: "#f0e8d4",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"Outfit"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      fontSize: {
        "display-xl": [
          "clamp(3rem, 6vw, 5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "clamp(2rem, 4vw, 3.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.015em" },
        ],
        "display-md": [
          "clamp(1.5rem, 3vw, 2.25rem)",
          { lineHeight: "1.15", letterSpacing: "-0.01em" },
        ],
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-in": "slideIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "underline-grow": "underlineGrow 0.3s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-12px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        underlineGrow: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
