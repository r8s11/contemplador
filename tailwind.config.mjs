/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Primary colors (Rich Black)
        primary: {
          50: "rgb(var(--color-primary-900) / <alpha-value>)", // lightest
          100: "rgb(var(--color-primary-800) / <alpha-value>)",
          200: "rgb(var(--color-primary-700) / <alpha-value>)",
          300: "rgb(var(--color-primary-600) / <alpha-value>)",
          400: "rgb(var(--color-primary-400) / <alpha-value>)",
          500: "rgb(var(--color-primary-500) / <alpha-value>)",
          600: "rgb(var(--color-primary-300) / <alpha-value>)",
          700: "rgb(var(--color-primary-200) / <alpha-value>)",
          800: "rgb(var(--color-primary-100) / <alpha-value>)",
          900: "rgb(var(--color-primary-100) / <alpha-value>)", // darkest
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
        },
        // Secondary colors (Midnight Green)
        secondary: {
          50: "rgb(var(--color-secondary-900) / <alpha-value>)",
          100: "rgb(var(--color-secondary-800) / <alpha-value>)",
          200: "rgb(var(--color-secondary-700) / <alpha-value>)",
          300: "rgb(var(--color-secondary-600) / <alpha-value>)",
          400: "rgb(var(--color-secondary-400) / <alpha-value>)",
          500: "rgb(var(--color-secondary-500) / <alpha-value>)",
          600: "rgb(var(--color-secondary-300) / <alpha-value>)",
          700: "rgb(var(--color-secondary-200) / <alpha-value>)",
          800: "rgb(var(--color-secondary-100) / <alpha-value>)",
          900: "rgb(var(--color-secondary-100) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
        },
        // Accent colors (Fulvous)
        accent: {
          50: "rgb(var(--color-accent-900) / <alpha-value>)",
          100: "rgb(var(--color-accent-800) / <alpha-value>)",
          200: "rgb(var(--color-accent-700) / <alpha-value>)",
          300: "rgb(var(--color-accent-600) / <alpha-value>)",
          400: "rgb(var(--color-accent-400) / <alpha-value>)",
          500: "rgb(var(--color-accent-500) / <alpha-value>)",
          600: "rgb(var(--color-accent-300) / <alpha-value>)",
          700: "rgb(var(--color-accent-200) / <alpha-value>)",
          800: "rgb(var(--color-accent-100) / <alpha-value>)",
          900: "rgb(var(--color-accent-100) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
        },
        // Azure colors (Blue)
        azure: {
          50: "rgb(var(--color-azure-900) / <alpha-value>)",
          100: "rgb(var(--color-azure-800) / <alpha-value>)",
          200: "rgb(var(--color-azure-700) / <alpha-value>)",
          300: "rgb(var(--color-azure-600) / <alpha-value>)",
          400: "rgb(var(--color-azure-400) / <alpha-value>)",
          500: "rgb(var(--color-azure-500) / <alpha-value>)",
          600: "rgb(var(--color-azure-300) / <alpha-value>)",
          700: "rgb(var(--color-azure-200) / <alpha-value>)",
          800: "rgb(var(--color-azure-100) / <alpha-value>)",
          900: "rgb(var(--color-azure-100) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-azure) / <alpha-value>)",
        },
        // Neutral colors (Platinum)
        neutral: {
          50: "rgb(var(--color-neutral-900) / <alpha-value>)",
          100: "rgb(var(--color-neutral-800) / <alpha-value>)",
          200: "rgb(var(--color-neutral-700) / <alpha-value>)",
          300: "rgb(var(--color-neutral-600) / <alpha-value>)",
          400: "rgb(var(--color-neutral-500) / <alpha-value>)",
          500: "rgb(var(--color-neutral-400) / <alpha-value>)",
          600: "rgb(var(--color-neutral-300) / <alpha-value>)",
          700: "rgb(var(--color-neutral-200) / <alpha-value>)",
          800: "rgb(var(--color-neutral-100) / <alpha-value>)",
          900: "rgb(var(--color-neutral-100) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-neutral) / <alpha-value>)",
        },
        // Light colors
        light: {
          50: "rgb(var(--color-light) / <alpha-value>)",
          100: "rgb(var(--color-light-100) / <alpha-value>)",
          200: "rgb(var(--color-light-200) / <alpha-value>)",
          300: "rgb(var(--color-light-300) / <alpha-value>)",
          400: "rgb(var(--color-light-400) / <alpha-value>)",
          500: "rgb(var(--color-light-500) / <alpha-value>)",
          600: "rgb(var(--color-light-600) / <alpha-value>)",
          700: "rgb(var(--color-light-700) / <alpha-value>)",
          800: "rgb(var(--color-light-800) / <alpha-value>)",
          900: "rgb(var(--color-light-900) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-light) / <alpha-value>)",
        },
        // Semantic colors
        success: "rgb(var(--color-success) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
