/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Vazirmatn", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
