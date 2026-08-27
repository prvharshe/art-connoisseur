import type { Metadata } from "next";
import { Exhibition } from "@/components/Exhibition";
import { getFirstWork } from "@/lib/works";

const work = getFirstWork();

export const metadata: Metadata = {
  title: work.title,
  description: `${work.maker.name}, ${work.title}. ${work.location}, ${work.accession}.`,
  openGraph: {
    title: `${work.title} · Connoisseur`,
    description: work.image.alt,
    images: [work.image.poster],
  },
};

export default function Home() {
  return <Exhibition work={work} />;
}
