import compress from '@playform/compress'
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
	compressHTML: false,
	vite: {
		css: {
			transformer: 'lightningcss',
		},
	},
	integrations: [
		icon({
			svgoOptions: {
				multipass: true,
				plugins: [
					'preset-default',
					{
						name: 'removeAttrs',
						params: {
							attrs: '*:(stroke|fill):((?!^currentColor$).)*',
						},
					},
				],
			},
		}),
		compress({
			CSS: {
				lightningcss: true,
			},
			Image: false,
			HTML: false,
		}),
	],
})
