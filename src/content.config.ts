import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guias' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      order: z.number().default(0),
      updated: z.coerce.date().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { guias };
