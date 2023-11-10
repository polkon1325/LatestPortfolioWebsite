/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xsm': '320px'
      }
    },
  },
  plugins: [],
}

