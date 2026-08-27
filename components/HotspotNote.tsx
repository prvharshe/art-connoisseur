"use client";

import type { Hotspot } from "@/lib/schema";

type HotspotNoteProps = {
  hotspot: Hotspot | null;
  onClose: () => void;
};

export function HotspotNote({ hotspot, onClose }: HotspotNoteProps) {
  if (!hotspot) return null;

  return (
    <aside
      className="hotspot-note"
      aria-live="polite"
      aria-label={`Plate ${hotspot.n}`}
    >
      <header className="hotspot-note__head">
        <p className="hotspot-note__num">{hotspot.n}</p>
        <h2 className="hotspot-note__title">{hotspot.title}</h2>
        <button type="button" className="hotspot-note__close" onClick={onClose}>
          Close
        </button>
      </header>
      <p className="hotspot-note__body">{hotspot.body}</p>
      {hotspot.source ? (
        <p className="hotspot-note__source">{hotspot.source}</p>
      ) : null}
    </aside>
  );
}
