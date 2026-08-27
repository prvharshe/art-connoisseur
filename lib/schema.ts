import { z } from "zod";

export const hotspotSchema = z.object({
  id: z.string(),
  n: z.number().int().min(1),
  x: z.number().min(0).max(1),
  y: z.number().min(0).max(1),
  title: z.string(),
  body: z.string(),
  source: z.string().optional(),
});

export const workSchema = z.object({
  slug: z.string(),
  title: z.string(),
  titleLocal: z.string(),
  maker: z.object({
    name: z.string(),
    life: z.string(),
    place: z.string(),
    note: z.string(),
  }),
  dateDisplay: z.string(),
  dateNote: z.string(),
  medium: z.string(),
  dimensions: z.string(),
  location: z.string(),
  accession: z.string(),
  acquisition: z.string(),
  museumUrl: z.string().url(),
  rights: z.string(),
  image: z.object({
    iiif: z.string().url(),
    poster: z.string(),
    width: z.number(),
    height: z.number(),
    alt: z.string(),
    credit: z.string(),
  }),
  caption: z.string(),
  hotspots: z.array(hotspotSchema).min(1),
  explainer: z.array(z.string()).min(1),
  sources: z.array(
    z.object({
      label: z.string(),
      href: z.string().url().optional(),
    }),
  ),
  corrections: z.string(),
});

export type Work = z.infer<typeof workSchema>;
export type Hotspot = z.infer<typeof hotspotSchema>;
