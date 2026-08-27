import Link from "next/link";
import type { Work } from "@/lib/schema";

export function Nav({ work }: { work: Work }) {
  return (
    <header className="nav-edge">
      <a className="skip" href="#plate">
        Skip to the plate
      </a>
      <Link className="wordmark" href="/">
        Connoisseur
      </Link>
      <a className="nav-cta" href="#plate">
        The plate
      </a>
      <span className="visually-hidden">{work.title}</span>
    </header>
  );
}
