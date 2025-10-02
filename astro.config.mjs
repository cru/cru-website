import cloudflare from '@astrojs/cloudflare'
import mdx from '@astrojs/mdx'
import solidJs from '@astrojs/solid-js'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [mdx(), solidJs()],

  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    '/services-and-pricing/edc-services': '/data-capture/pricing',
  },

  adapter: cloudflare(),
})
