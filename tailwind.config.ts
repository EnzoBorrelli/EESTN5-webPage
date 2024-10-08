import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "hop-right": {
          "0%,100%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(25%)" },
        },
        "hop-left": {
          "0%,100%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-25%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "hop-right": "hop-right 1s ease-out infinite",
        "hop-left": "hop-left 1s ease-out infinite",
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        bg: {
          100: "rgb(var(--color-bg100)/<alpha-value>)",
          200: "rgb(var(--color-bg200)/<alpha-value>)",
          300: "rgb(var(--color-bg300)/<alpha-value>)",
          400: "rgb(var(--color-bg400)/<alpha-value>)",
          500: "rgb(var(--color-bg500)/<alpha-value>)",
          600: "rgb(var(--color-bg600)/<alpha-value>)",
        },
        text: {
          100: "rgb(var(--color-text100)/<alpha-value>)",
          200: "rgb(var(--color-text200)/<alpha-value>)",
          300: "rgb(var(--color-text300)/<alpha-value>)",
          400: "rgb(var(--color-text400)/<alpha-value>)",
          500: "rgb(var(--color-text500)/<alpha-value>)",
          600: "rgb(var(--color-text600)/<alpha-value>)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
