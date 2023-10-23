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
      }
    },
  },
  plugins: [],
}

