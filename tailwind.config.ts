import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
            DEFAULT: '#A21CAF',
            50: '#E695EE',
            100: '#E283EB',
            200: '#DA60E6',
            300: '#D13DE0',
            400: '#C322D2',
            500: '#A21CAF',
            600: '#75147F',
            700: '#480D4E',
            800: '#1C051E',
            900: '#000000',
            950: '#000000'
        }
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
