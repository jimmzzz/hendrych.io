import { _maxHeight, _typography } from "#tailwind-config/theme";
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
        },
        darkBlue: '#0C121F',
        darkLight: '#242A36',
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'footer': 'repeat(3, minmax(0, 175px))',
      },
      
      typography: {
        DEFAULT: { // this is for prose class
          css: {
            // color: theme('colors.yourSpecificColor'), // change global color scheme
            'h1, h2, h3, h4, h5, h6': {
              '> a': {
                fontWeight: 'bold',
                textDecoration: 'none',
                // '&:hover': { 
                //   color: '#F7941E',
                // },
              },
            },
            pre: {
              maxHeight: '600px',
              position: 'relative',
              top: '-28px',
            }
            // a: {
            //   color: '#03989E',
            //     '&:hover': { // could be any. It's like extending css selector
            //       color: '#F7941E',
            //     },
            // },
          },
        },
        sm: { // and this is for prose-sm. 
          css: {},
        },
      },
    },

    },
  plugins: [require("@tailwindcss/typography")],
};
