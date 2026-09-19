import { flowersInAGlassVase } from "@/content/works/still-life-with-flowers-in-a-glass-vase";
import { jewishBride } from "@/content/works/the-jewish-bride";
import { littleStreet } from "@/content/works/the-little-street";
import { milkmaid } from "@/content/works/the-milkmaid";
import { threatenedSwan } from "@/content/works/the-threatened-swan";
import { winterLandscapeWithIceSkaters } from "@/content/works/winter-landscape-with-ice-skaters";
import { womanReadingALetter } from "@/content/works/woman-reading-a-letter";
import type { Work } from "@/lib/schema";

const works: Work[] = [
  milkmaid,
  womanReadingALetter,
  littleStreet,
  jewishBride,
  flowersInAGlassVase,
  winterLandscapeWithIceSkaters,
  threatenedSwan,
];

export function getWorks(): Work[] {
  return works;
}

export function getWork(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}
