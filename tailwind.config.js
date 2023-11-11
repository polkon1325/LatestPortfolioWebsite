/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.{html,js}"],
    darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xsm': '320px'
      }
    },
  },
  plugins: [],
}

