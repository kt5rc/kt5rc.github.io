import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  readingTime: z.string().optional()
});

const blog = defineCollection({ type: "content", schema: baseSchema });
const experiments = defineCollection({
  type: "content",
  schema: baseSchema.extend({
    status: z.enum(["idea", "active", "verified"]).default("active")
  })
});
const notes = defineCollection({
  type: "content",
  schema: baseSchema.extend({
    library: z.string()
  })
});

export const collections = { blog, experiments, notes };
