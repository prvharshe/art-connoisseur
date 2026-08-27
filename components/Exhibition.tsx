"use client";

import { useState } from "react";
import { Colophon } from "@/components/Colophon";
import { Explainer } from "@/components/Explainer";
import { HotspotNote } from "@/components/HotspotNote";
import { Nav } from "@/components/Nav";
import { ObjectPlate } from "@/components/ObjectPlate";
import { PaintingViewer } from "@/components/PaintingViewer";
import type { Work } from "@/lib/schema";

type ExhibitionProps = {
  work: Work;
};

export function Exhibition({ work }: ExhibitionProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active =
    work.hotspots.find((hotspot) => hotspot.id === activeId) ?? null;

  return (
    <>
      <Nav work={work} />
      <main>
        <section className="photo-fold">
          <PaintingViewer
            work={work}
            activeId={activeId}
            onSelect={setActiveId}
          />
          <ol className="plate-index" aria-label="Catalog plates">
            {work.hotspots.map((hotspot) => (
              <li key={hotspot.id}>
                <button
                  type="button"
                  className={activeId === hotspot.id ? "is-active" : undefined}
                  aria-pressed={activeId === hotspot.id}
                  aria-label={`Plate ${hotspot.n}, ${hotspot.title}`}
                  onClick={() =>
                    setActiveId((current) =>
                      current === hotspot.id ? null : hotspot.id,
                    )
                  }
                >
                  {hotspot.n}
                </button>
              </li>
            ))}
          </ol>
          <HotspotNote
            hotspot={active}
            onClose={() => setActiveId(null)}
          />
        </section>
        <ObjectPlate work={work} />
        <Explainer work={work} />
      </main>
      <Colophon work={work} />
    </>
  );
}
