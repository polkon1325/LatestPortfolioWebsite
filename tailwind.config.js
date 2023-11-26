/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.{html,js}"],
    darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xsm': '320px'
      },
      colors: {
        DirtyWhite: {
          1: '#F5F5F5',
          2: '#FFFFF0',
          3: '#F5FEFD',
          4: '#F2EBDD',
          5: '#ECE7E1'
        }
      }
    },
  },
  plugins: [],
}

