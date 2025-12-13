import { z, defineCollection } from 'astro:content';

// Define the notes collection schema
const notesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    title_id: z.string().optional(),
    category: z.string(),
    status: z.enum(['draft', 'published']).default('draft'),
    publishedDate: z.date(),
    summary: z.string().optional(),
    summary_en: z.string().optional(),
    summary_id: z.string().optional(),
    tags: z.array(z.string()).optional(),
    headerImage: z.string().optional(),
    content: z.any().optional(),
    content_en: z.any().optional(),
    content_id: z.any().optional()
  })
});

export const collections = {
  notes: notesCollection,
};