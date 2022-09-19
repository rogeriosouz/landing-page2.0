/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        Bai_Jamjuree: ['Bai Jamjuree', 'Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}
