import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const eventsCollection = defineCollection({
  // UPDATED: Now it specifically scans for .json files
  loader: glob({ pattern: "**/*.json", base: "./src/content/events" }),
  
  schema: z.object({
    title: z.string(),
    date: z.string(), // This works perfectly now because JSON keeps it a string!
    hoursFrom: z.string().optional(),
    hoursTo: z.string().optional(),  
    locationName: z.string().optional(),
    mapUrl: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  'events': eventsCollection,
};