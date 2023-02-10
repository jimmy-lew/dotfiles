import { defineConfig } from 'astro/config'
import { defaultLayout } from 'astro-default-layout'

import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import vercel from '@astrojs/vercel/serverless'

export default defineConfig({
	integrations: [tailwind(), vue()],
	output: 'server',
	adapter: vercel(),
	markdown: {
		remarkPlugins: [defaultLayout],
		extendDefaultPlugins: true,
	},
})
