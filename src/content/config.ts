import { defineCollection, z } from 'astro:content'

const objectsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			year: z.number(),
			price: z.number(),
			image: image(),
		}),
})

const buildersCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			full_name: z.string(),
			short_name: z.string(),
			logo: image(),
			desc: z.string(),
			place: z.number(),
			finished_on_time_houses: z.number(),
			finished_houses: z.number(),
			years: z.number(),
		}),
})

const mortgagesCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			icon: image(),
			desc: z.string(),
			rate: z.string(),
			period: z.number(),
			total: z.number(),
		}),
})

export const collections = {
	objects: objectsCollection,
	builders: buildersCollection,
	mortgages: mortgagesCollection,
}
