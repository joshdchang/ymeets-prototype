const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Noto Serif", ...defaultTheme.fontFamily.serif],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
