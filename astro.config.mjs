import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  redirects: {
    '/services-and-pricing/edc-services': '/data-capture/pricing',
  },
})
