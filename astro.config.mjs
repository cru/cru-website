import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

import solidJs from '@astrojs/solid-js'

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), solidJs()],

  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    '/services-and-pricing/edc-services': '/data-capture/pricing',
  },

  adapter: netlify(),
})