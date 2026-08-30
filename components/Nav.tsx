import Link from "next/link";
import type { Work } from "@/lib/schema";

type NavProps = {
  work?: Work;
};

export function Nav({ work }: NavProps) {
  return (
    <header className="nav-edge">
      <a className="skip" href={work ? "#plate" : "#index"}>
        {work ? "Skip to the plate" : "Skip to the list"}
      </a>
      <Link className="wordmark" href="/">
        Connoisseur
      </Link>
      {work ? (
        <a className="nav-cta" href="#plate">
          The plate
        </a>
      ) : null}
      {work ? (
        <span className="visually-hidden">{work.title}</span>
      ) : null}
    </header>
  );
}
