const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.js"],
  theme: {
    extend: {
      colors: {
        yarg: "#787878",
        ground: "#121212"
      },
      fontFamily: {
        "rubik": ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'sm': '640px',
        'md': '838px',
        'lg': '960px',
        'xl': '1200px',
        '2xl': '1500px',
      }, 
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out forwards"
      }
    },
  },
  plugins: [],
}

