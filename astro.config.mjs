import sitemap from '@astrojs/sitemap'
import { deOptimisePaths, importDirectory, runSVGO } from '@iconify/tools'
import { defineConfig } from 'astro/config'
import Icons from 'unplugin-icons/vite'

// https://astro.build/config
export default defineConfig({
	compressHTML: false,
	site: 'https://nova-ug.ru',
	vite: {
		css: {
			transformer: 'lightningcss',
		},
		resolve: {
			alias: [{ find: 'icons:astro', replacement: '~icons' }],
		},
		plugins: [
			Icons({
				compiler: 'astro',
				defaultClass: 'icon',
				customCollections: {
					ui: async () => {
						// Load icons
						const iconSet = await importDirectory(`./src/assets/icons/ui`, {
							prefix: 'ui',
						})

						// Clean up each icon
						await iconSet.forEach(name => {
							const svg = iconSet.toSVG(name)
							if (!svg) {
								return
							}

							// Optimise icon
							runSVGO(svg, {
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
							})

							deOptimisePaths(svg)

							// Update icon in icon set
							iconSet.fromSVG(name, svg)
						})

						// Export as IconifyJSON
						return iconSet.export()
					},
					map: async () => {
						// Load icons
						const iconSet = await importDirectory(`./src/assets/icons/map`, {
							prefix: 'map',
						})

						// Clean up each icon
						await iconSet.forEach(name => {
							const svg = iconSet.toSVG(name)
							if (!svg) {
								return
							}

							// Optimise icon
							runSVGO(svg, {
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
							})

							deOptimisePaths(svg)

							// Update icon in icon set
							iconSet.fromSVG(name, svg)
						})

						// Export as IconifyJSON
						return iconSet.export()
					},
				},
			}),
		],
	},
	integrations: [sitemap()],
})
