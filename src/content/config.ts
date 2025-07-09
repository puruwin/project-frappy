import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		author: z.string(),
		date: z.string(),
		description: z.string(),
	}),
});

const detrasDeFrappe = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string(),
	}),
});

export const collections = {
	blog,
	detrasDeFrappe,
};