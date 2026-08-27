import type { Work } from "@/lib/schema";

type ColophonProps = {
  work: Work;
};

export function Colophon({ work }: ColophonProps) {
  return (
    <footer className="foot-dense">
      <p>
        {work.image.credit} {work.rights} Image and object record:{" "}
        <a href={work.museumUrl} rel="noreferrer">
          Rijksmuseum {work.accession}
        </a>
        . {work.corrections}
      </p>
    </footer>
  );
}
