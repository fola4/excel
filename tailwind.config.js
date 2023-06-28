/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        "satoshi": ["'satoshi'", 'sans-serif']
      }
    },
  },
  plugins: [],
}

