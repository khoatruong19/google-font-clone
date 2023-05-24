/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#BC371F",
        secondaryColor: "#253D4C",
        primaryColorDark: "#233B45",
        secondaryColorDark: "#D3E2D8",
        tertiaryColorDark: "#77E9BA",
      },
      screens:{
        '3xl': '1600px',
      },
      boxShadow: {
        'even': 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require("daisyui")
  ],
}

