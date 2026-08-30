import { jewishBride } from "@/content/works/the-jewish-bride";
import { littleStreet } from "@/content/works/the-little-street";
import { milkmaid } from "@/content/works/the-milkmaid";
import { womanReadingALetter } from "@/content/works/woman-reading-a-letter";
import type { Work } from "@/lib/schema";

const works: Work[] = [
  milkmaid,
  womanReadingALetter,
  littleStreet,
  jewishBride,
];

export function getWorks(): Work[] {
  return works;
}

export function getWork(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}
