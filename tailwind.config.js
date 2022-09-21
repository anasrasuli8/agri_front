/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '324px'
      },
      colors: {
        cgreen: {
          DEFAULT: '#27AE60',
          dark: '#219653',
        },
      }
    },
  },
  plugins: [],
}
