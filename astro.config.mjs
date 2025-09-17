import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'

import solidJs from '@astrojs/solid-js'

import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), solidJs()],

  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    '/services-and-pricing/edc-services': '/data-capture/pricing',
  },

  adapter: node({
    mode: 'standalone',
  }),
})
