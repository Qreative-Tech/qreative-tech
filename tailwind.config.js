import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: {
          DEFAULT: "#ffffff",
        },
        background: {
          DEFAULT: "#333333",
        },
        brand: {
          50: "#b3b3b3",
          100: "#7a7a7a",
          200: "#696969",
          300: "#424242",
          400: "#303030",
          500: "#1e1e1e",
          600: "#1a1a1a",
          700: "#121212",
          800: "#0d0d0d",
          900: "#232324",
        },
        accent: {
          50: "#dcdbdb",
          100: "#b5b5b5",
          200: "#9f9e9e",
          300: "#888787",
          400: "#737272",
          500: "#555454",
          600: "#454444",
          700: "#3e3d3d",
          800: "#363535",
          900: "#363535",
        },
        warning: {
          50: "#ffe8bd",
          100: "#ffd07a",
          200: "#ffcd70",
          300: "#ffc55c",
          400: "#ffbe47",
          500: "#ffb733",
          600: "#ffa705",
          700: "#e09100",
          800: "#bd7a00",
          900: "#805300",
        },
        neutralCustom: {
          50: "#ffffff",
          100: "#ebebeb",
          200: "#dedede",
          300: "#bababa",
          400: "#a8a8a8",
          500: "#929292",
          600: "#4d4d4d",
          700: "#333333",
          800: "#292929",
          900: "#222222",
        },
        blue: {
          500: "#00bcd4",
        },
        green: {
          500: "#8bc34a",
        },
        red: {
          500: "#f44336",
        },
        black: {
          500: "#1E1E1E",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#333333",
            },
            secondary: {
              DEFAULT: "#292929",
            },
          },
        },
      },
    }),
  ],
};

module.exports = config;
