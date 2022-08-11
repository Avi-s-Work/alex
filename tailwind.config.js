/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1366px",

      xl: "1920px",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      noticia: ['"Noticia Text"', "serif"],
    },
  },
  plugins: [],
};
