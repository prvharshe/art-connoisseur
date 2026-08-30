import Link from "next/link";
import { Nav } from "@/components/Nav";
import type { Work } from "@/lib/schema";

type CatalogProps = {
  works: Work[];
};

export function Catalog({ works }: CatalogProps) {
  return (
    <>
      <Nav />
      <main className="index">
        <header className="index-head">
          <h1 className="index-lede">Works.</h1>
          <p className="index-note">Look first. One room at a time.</p>
        </header>
        <ol className="index-list" id="index">
          {works.map((work) => (
            <li key={work.slug}>
              <Link className="index-row" href={`/works/${work.slug}/`}>
                <span className="index-row__maker">{work.maker.name}</span>
                <span className="index-row__title">{work.title}</span>
                <span className="index-row__meta">
                  {work.dateDisplay} · {work.accession}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </main>
      <footer className="foot-dense">
        <p>
          Public-domain paintings. Zoom tiles from the Rijksmuseum’s IIIF. If a
          plate is wrong, the error is mine. There is no comments box.
        </p>
      </footer>
    </>
  );
}
