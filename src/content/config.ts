import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    // Shown in the browser tab and used as the nav label fallback.
    title: z.string(),
    // The <h1> printed at the top of the page.
    heading: z.string(),
    // Which nav section this page belongs to: 'salzmann' | 'penn' | 'about' | 'top'
    section: z.string().default('top'),
    // Sort order within a section.
    order: z.number().default(0),
    // Optional intro image shown under the heading (absolute URL or /local path).
    image: z.string().optional(),
    // When true, style the body as a dated timeline (bold leading year reads as a marker).
    timeline: z.boolean().optional(),
    // Optional gallery: renders as a captioned image grid after the markdown body.
    gallery: z
      .array(
        z.object({
          year: z.string().optional(),
          title: z.string(),
          image: z.string(),
          url: z.string().optional(),
          description: z.string().optional(),
        })
      )
      .optional(),
  }),
});

export const collections = { pages };
