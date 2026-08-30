import { Catalog } from "@/components/Catalog";
import { getWorks } from "@/lib/works";

const works = getWorks();

export const metadata = {
  title: "Works",
  description: "Look first. One room at a time.",
};

export default function Home() {
  return <Catalog works={works} />;
}
