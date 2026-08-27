import { milkmaid } from "@/content/works/the-milkmaid";
import type { Work } from "@/lib/schema";

const works: Work[] = [milkmaid];

export function getWork(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}

export function getFirstWork(): Work {
  return milkmaid;
}
