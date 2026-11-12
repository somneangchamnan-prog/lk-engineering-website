"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Project } from "@/data/projects";
import { BlueprintArt } from "@/components/art/BlueprintArt";

const PLACEHOLDER_TILES = 4;

/** Thumbnail grid with an accessible lightbox (Esc, ←/→, focus return). */
export function Gallery({ project }: { project: Project }) {
  const real = project.images.length > 0;
  const count = real ? project.images.length : PLACEHOLDER_TILES;
  const [open, setOpen] = useState<number | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(null);
    openerRef.current?.focus();
  }, []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + count) % count)), [count]);

  useEffect(() => {
    if (open === null) return;
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const tile = (i: number, big: boolean) =>
    real ? (
      <Image
        src={project.images[i]}
        alt={`${project.name} gallery image ${i + 1} of ${count}`}
        fill
        sizes={big ? "90vw" : "(min-width:1024px) 25vw, 50vw"}
        className={big ? "object-contain" : "object-cover"}
      />
    ) : (
      <div className="flex h-full w-full flex-col items-center justify-center bg-navy-900 text-volt-light">
        <BlueprintArt variant={project.art} className="h-4/5 w-4/5 opacity-70" decorative />
        <span className="label absolute bottom-2 left-2 !text-[0.6rem] text-amber-signal">[PROJECT IMAGE {i + 1}]</span>
      </div>
    );

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {Array.from({ length: count }).map((_, i) => (
          <li key={i}>
            <button
              type="button"
              className="group relative block aspect-[4/3] w-full overflow-hidden border border-steel-200"
              aria-label={`Open gallery image ${i + 1} of ${count}`}
              onClick={(e) => {
                openerRef.current = e.currentTarget;
                setOpen(i);
              }}
            >
              <span className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">{tile(i, false)}</span>
            </button>
          </li>
        ))}
      </ul>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} gallery`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/95 p-4"
          onClick={close}
        >
          <button ref={closeRef} type="button" onClick={close} aria-label="Close gallery" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-white/30 text-white hover:bg-white/10">
            <X aria-hidden className="h-5 w-5" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous image" className="absolute left-2 flex h-11 w-11 items-center justify-center border border-white/30 text-white hover:bg-white/10 sm:left-6">
            <ChevronLeft aria-hidden className="h-5 w-5" />
          </button>
          <div className="relative aspect-[4/3] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {tile(open, true)}
          </div>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next image" className="absolute right-2 flex h-11 w-11 items-center justify-center border border-white/30 text-white hover:bg-white/10 sm:right-6">
            <ChevronRight aria-hidden className="h-5 w-5" />
          </button>
          <p className="label absolute bottom-5 text-steel-300" aria-live="polite">{open + 1} / {count}</p>
        </div>
      )}
    </>
  );
}
