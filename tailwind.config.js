const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config}  */
module.exports = {
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        primary: '#009efd',
        secondary: '#090f23',
        light: '#f8ffff',
        dark: '#666666',
      },
      backgroundImage: {
        banner: "url('/images/hero-banner-bg.png')",
        'special-offer': "url('/images/special-offer-bg.png')",
      },
      fontFamily: {
        display: ['Playfair Display', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
