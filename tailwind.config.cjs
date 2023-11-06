/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}'],
  theme: {
    extend: {
      fontFamily: {
        display: 'Ubuntu, ui-serif', // Adds a new `font-display` class
      },
      colors: {
        'brand-primary': colors.violet,
        'brand-secondary': colors.fuchsia,
      },
    },
  },
  plugins: [],
}
