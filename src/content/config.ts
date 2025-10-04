import { defineCollection, z } from "astro:content";

// Blog collection
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    author: z.string().optional(),
    draft: z.boolean().default(false),
    publishDate: z.coerce.date(),
    snippet: z.string().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string()).optional(),
    profilePic: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
});



// Team collection
const teamCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    draft: z.boolean().optional(),
    publishDate: z.coerce.date().optional(),
    bio: z.string().optional(),
    position: z.string().optional(),
    image: z.string().optional(),
  }),
});

// add this 👇
const indexCollection = defineCollection({
  type: "data",
});

export const collections = {
  blog: blogCollection,
  team: teamCollection,
};
