import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Exhibition } from "@/components/Exhibition";
import { Nav } from "@/components/Nav";
import { getWork, getWorks } from "@/lib/works";

export const dynamic = "force-static";
export const dynamicParams = false;

type WorkParams = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getWorks().map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: WorkParams): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return { title: "Work" };
  return {
    title: work.title,
    description: `${work.maker.name}, ${work.title}. ${work.location}, ${work.accession}.`,
    openGraph: {
      title: `${work.title} · Connoisseur`,
      description: work.image.alt,
      images: [work.image.poster],
    },
  };
}

export default async function WorkPage({ params }: WorkParams) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();
  return (
    <>
      <Nav work={work} />
      <Exhibition work={work} />
    </>
  );
}
