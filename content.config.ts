import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: "page",
      source: "articles/*.md",
      schema: z.object({
        title: z.string(),
        pubDate: z.string(),
        author: z.string(),
        image: z.string().optional(),
        tags: z.array(z.string()),
      }),
    }),
  },
});
