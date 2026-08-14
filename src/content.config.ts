import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const contribution = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/contributions' }),
  schema: z.object({
    title: z.string().min(3),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    summary: z.string().min(40),
    aliases: z.array(z.string()).default([]),
    fields: z.array(z.enum([
      'statistical-inference',
      'experimental-design',
      'multivariate-methods',
      'genetics-evolution',
      'historical-context',
    ])).min(1),
    kind: z.enum(['concept', 'method', 'principle', 'design', 'model']),
    period: z.string(),
    difficulty: z.enum(['introductory', 'intermediate', 'advanced']),
    attribution: z.object({
      status: z.enum(['introduced', 'co-developed', 'materially-advanced', 'popularized', 'associated', 'disputed']),
      note: z.string().min(20),
    }),
    collaborators: z.array(z.string()).default([]),
    prerequisites: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    references: z.array(z.string()).min(2),
    contributors: z.array(z.string()).min(1),
    reviewedAt: z.coerce.date(),
    status: z.enum(['draft', 'reviewed']),
    legacyRedirects: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { contributions: contribution };
