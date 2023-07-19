/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["'Satoshi'", "sans-serif"],
      },
      colors: {
        black: "#030303",
      },
    },
  },
  plugins: [],
};
