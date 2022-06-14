const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config}  */
module.exports = {
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
      },
    },
    extend: {
      colors: {
        azure: '#f8ffff',
        'dim-gray': '#666666',
        'sky-blue': '#009efd',
        cyprus: '#090f23',
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
