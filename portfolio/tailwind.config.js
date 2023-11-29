/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html", "./src/**/*.{js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Gilroy', 'sans'], // 'custom' es el nombre que asignamos a esta fuente
        'offbit': ['OffBit Trial', 'sans'],
      },
      backgroundImage: {
        'bground': "url('/src/assets/images/pxfuel22.jpg')",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#1b2223",
            foreground: "#f4fefd",
          },
          secondary: {
            DEFAULT: "#dd2a7b",
            foreground: "#f4fefd",
          },
          danger: {
            DEFAULT: "#0077b5",
            foreground: "#f4fefd",
          },
          focus: "#f4fefd",
        },
      },
    },
  })],
}

