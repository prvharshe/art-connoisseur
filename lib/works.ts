import { flowersInAGlassVase } from "@/content/works/still-life-with-flowers-in-a-glass-vase";
import { giltCup } from "@/content/works/still-life-with-a-gilt-cup";
import { portraitOfAMarriedCouple } from "@/content/works/portrait-of-a-married-couple";
import { jewishBride } from "@/content/works/the-jewish-bride";
import { littleStreet } from "@/content/works/the-little-street";
import { milkmaid } from "@/content/works/the-milkmaid";
import { merryFamily } from "@/content/works/the-merry-family";
import { serenade } from "@/content/works/the-serenade";
import { sickChild } from "@/content/works/the-sick-child";
import { threatenedSwan } from "@/content/works/the-threatened-swan";
import { windmillAtWijkBijDuurstede } from "@/content/works/the-windmill-at-wijk-bij-duurstede";
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
  windmillAtWijkBijDuurstede,
  portraitOfAMarriedCouple,
  merryFamily,
  serenade,
  giltCup,
  sickChild,
];

export function getWorks(): Work[] {
  return works;
}

export function getWork(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}
