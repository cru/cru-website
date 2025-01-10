/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}'],
  theme: {
    extend: {
      fontFamily: {
        display: 'Gotham, sans-serif', // Adds a new `font-display` class
      },
      colors: {
        'brand-primary': {
          50: colors.red[50],
          100: colors.red[100],
          200: colors.red[200],
          300: colors.red[300],
          400: colors.red[400],
          500: '#d6001c',
          600: colors.red[600],
          700: colors.red[700],
          800: colors.red[800],
          900: colors.red[900],
        },
        'brand-secondary': colors.amber,
      },
    },
  },
  plugins: [],
}
