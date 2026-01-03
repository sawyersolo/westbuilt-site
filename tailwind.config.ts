import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f7f7",
          100: "#ededed",
          200: "#d9d9d9",
          300: "#bfbfbf",
          400: "#a3a3a3",
          500: "#7a7a7a",
          600: "#5c5c5c",
          700: "#454545",
          800: "#2e2e2e",
          900: "#1f1f1f"
        },
        stonewash: {
          50: "#fbfbfa",
          100: "#f4f3f0",
          200: "#e8e6e0",
          300: "#d6d2c9"
        },
        accent: {
          50: "#eef7f2",
          100: "#d7efe2",
          200: "#b2dfc6",
          300: "#7fc7a2",
          400: "#4da97b",
          500: "#2f8b5e",
          600: "#216a46",
          700: "#1b5539",
          800: "#15412c",
          900: "#102f21"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      }
    },
  },
  plugins: [],
} satisfies Config;
