module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      filter: ['hover', 'focus'],
      grayscale: ['hover', 'focus'],
    },
  },
  plugins: [],
}
