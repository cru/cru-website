import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    '/services-and-pricing/edc-services': '/data-capture/pricing',
  },
})
