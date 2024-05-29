/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const plugin = require('tailwindcss/plugin')


module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui(),
    plugin(function ({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
      addUtilities({
        '.flex-center': {
          "display": 'flex',
          "justify-content": 'center',
          "align-items": 'center'
        }
      })
    })
  ],
}

