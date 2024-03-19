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
        bg: {
          100: "rgb(var(--color-bg100)/<alpha-value>)",
          200: "rgb(var(--color-bg200)/<alpha-value>)",
          300: "rgb(var(--color-bg300)/<alpha-value>)",
        },
        text: {
          100: "rgb(var(--color-text100)/<alpha-value>)",
          200: "rgb(var(--color-text200)/<alpha-value>)",
          300: "rgb(var(--color-text300)/<alpha-value>)",
        },
        tone: {
          100: "rgb(var(--color-tone100)/<alpha-value>)",
          200: "rgb(var(--color-tone200)/<alpha-value>)",
          300: "rgb(var(--color-tone300)/<alpha-value>)",
        },
        accent: {
          1: "rgb(var(--color-accent1)/<alpha-value>)",
          2: "rgb(var(--color-accent2)/<alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
