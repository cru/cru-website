import { z, defineCollection } from 'astro:content'

// Define a `type` and `schema` for each collection
const announcementsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    publishDate: z.date(),
    description: z.string(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()).optional(),
  }),
})

const publicationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    publishDate: z.date(),
    journal: z.string(),
    authors: z.array(z.string()).optional(),
    link: z.string().url(),
  }),
})

// Export a single `collections` object to register your collection(s)
export const collections = {
  announcements: announcementsCollection,
  publications: publicationsCollection,
}
