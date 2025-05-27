// Config reference
// https://astro.build/config

import { defineConfig } from 'astro/config';



import mdx from '@astrojs/mdx';



export default defineConfig({
  site: 'https://snorri.vercel.app',

  redirects: {
      // '/blog/[...slug]': '/writing/[...slug]'
	},

  integrations: [mdx()]
});