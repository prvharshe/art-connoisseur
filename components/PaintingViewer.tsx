"use client";

import { useCallback, useEffect, useId, useRef, useState, type CSSProperties } from "react";
import type OpenSeadragon from "openseadragon";
import { assetPath } from "@/lib/asset";
import type { Hotspot, Work } from "@/lib/schema";

type PaintingViewerProps = {
  work: Work;
  activeId: string | null;
  onSelect: (id: string | null) => void;
};

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function fitHotspot(
  viewer: OpenSeadragon.Viewer,
  hotspot: Hotspot,
  image: Work["image"],
) {
  const width = image.width * 0.32;
  const height = image.height * 0.32;
  const x = hotspot.x * image.width - width / 2;
  const y = hotspot.y * image.height - height / 2;
  const rect = viewer.viewport.imageToViewportRectangle(x, y, width, height);
  viewer.viewport.fitBoundsWithConstraints(rect, prefersReducedMotion());
}

export function PaintingViewer({
  work,
  activeId,
  onSelect,
}: PaintingViewerProps) {
  const hostId = useId();
  const hostRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<OpenSeadragon.Viewer | null>(null);
  const overlayMap = useRef<Map<string, HTMLButtonElement>>(new Map());
  const onSelectRef = useRef(onSelect);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    onSelectRef.current = onSelect;
  }, [onSelect]);

  const select = useCallback((id: string) => {
    onSelectRef.current(id);
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    let viewer: OpenSeadragon.Viewer | undefined;
    const overlays = overlayMap.current;

    void import("openseadragon").then((mod) => {
      if (cancelled || !hostRef.current) return;
      const host = hostRef.current;
      host.replaceChildren();
      const OpenSeadragon = mod.default;
      viewer = OpenSeadragon({
        element: host,
        showNavigationControl: false,
        showNavigator: false,
        visibilityRatio: 1,
        constrainDuringPan: true,
        minZoomImageRatio: 1,
        maxZoomPixelRatio: 4,
        animationTime: prefersReducedMotion() ? 0 : 0.7,
        springStiffness: 6.5,
        gestureSettingsMouse: {
          clickToZoom: false,
          dblClickToZoom: true,
        },
        gestureSettingsTouch: {
          pinchToZoom: true,
          clickToZoom: false,
          flickEnabled: true,
        },
        tileSources: work.image.iiif,
        crossOriginPolicy: "Anonymous",
        placeholderFillStyle: "transparent",
      });
      viewerRef.current = viewer;

      viewer.addHandler("open-failed", () => {
        viewer?.open({
          tileSource: {
            type: "image",
            url: assetPath(work.image.poster),
          },
        });
      });

      viewer.addHandler("open", () => {
        const opened = viewer;
        if (!opened || cancelled) return;
        setOpen(true);
        overlays.forEach((el) => el.remove());
        overlays.clear();

        work.hotspots.forEach((hotspot) => {
          const button = document.createElement("button");
          button.type = "button";
          button.className = "hotspot";
          button.textContent = String(hotspot.n);
          button.setAttribute(
            "aria-label",
            `Plate ${hotspot.n}, ${hotspot.title}`,
          );
          button.addEventListener("click", (event) => {
            event.stopPropagation();
            select(hotspot.id);
          });
          const point = new OpenSeadragon.Point(
            hotspot.x * work.image.width,
            hotspot.y * work.image.height,
          );
          const location = opened.viewport.imageToViewportCoordinates(point);
          opened.addOverlay({
            element: button,
            location,
            placement: OpenSeadragon.Placement.CENTER,
            checkResize: false,
          });
          overlays.set(hotspot.id, button);
        });
      });
    });

    return () => {
      cancelled = true;
      setOpen(false);
      overlays.clear();
      viewer?.destroy();
      viewerRef.current = null;
    };
  }, [select, work]);

  useEffect(() => {
    overlayMap.current.forEach((button, id) => {
      button.classList.toggle("is-active", id === activeId);
      button.setAttribute("aria-pressed", id === activeId ? "true" : "false");
    });
    const viewer = viewerRef.current;
    if (!viewer || !activeId) return;
    const hotspot = work.hotspots.find((item) => item.id === activeId);
    if (!hotspot) return;
    if (!viewer.viewport) return;
    try {
      fitHotspot(viewer, hotspot, work.image);
    } catch {
      // Viewer may not be fully open yet.
    }
  }, [activeId, work]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" || target.tagName === "TEXTAREA")
      ) {
        return;
      }
      if (event.key === "Escape") {
        onSelectRef.current(null);
        return;
      }
      if (event.key === "0") {
        const tenth = work.hotspots.find((item) => item.n === 10);
        if (tenth) onSelectRef.current(tenth.id);
        return;
      }
      if (event.key >= "1" && event.key <= "9") {
        const n = Number(event.key);
        const found = work.hotspots.find((item) => item.n === n);
        if (found) onSelectRef.current(found.id);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [work.hotspots]);

  function fitWhole() {
    viewerRef.current?.viewport.goHome(prefersReducedMotion());
    onSelectRef.current(null);
  }

  return (
    <div className="viewer-well">
      <div
        ref={hostRef}
        id={hostId}
        className={open ? "viewer-host" : "viewer-host is-waiting"}
        role="application"
        aria-label={`${work.title}, zoomable painting. Number keys open plates.`}
        style={
          {
            "--poster": `url(${assetPath(work.image.poster)})`,
          } as CSSProperties
        }
      />
      <p className="viewer-caption">
        <span>{work.caption}</span>
        <button type="button" className="fit-whole" onClick={fitWhole}>
          Whole
        </button>
      </p>
    </div>
  );
}
