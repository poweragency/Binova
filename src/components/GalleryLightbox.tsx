"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
  altPrefix: string;
};

/**
 * Renders the gallery (3:1 stacked frames) plus a full-screen lightbox
 * triggered by click on any frame. Keyboard navigation: arrows for
 * prev/next, Escape to close. Body scroll-locks while open.
 */
export default function GalleryLightbox({ images, altPrefix }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const prev = () =>
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length
    );
  const next = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));

  useEffect(() => {
    if (openIndex === null) {
      document.body.classList.remove("no-scroll");
      return;
    }
    document.body.classList.add("no-scroll");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("no-scroll");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex]);

  return (
    <>
      <div className="flex flex-col gap-6 max-md:gap-3 lg:gap-10">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative block aspect-[3/1] w-full overflow-hidden bg-binova-stone max-md:aspect-[16/10] focus:outline-none"
            aria-label={`Apri ${altPrefix} — vista ${i + 1} a tutto schermo`}
          >
            <Image
              src={src}
              alt={`${altPrefix} — vista ${i + 1}`}
              fill
              quality={92}
              sizes="100vw"
              className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-4 right-4 grid h-10 w-10 place-items-center border border-binova-bone/40 bg-binova-black/40 text-binova-bone/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 5V1h4M9 1h4v4M13 9v4h-4M5 13H1V9"
                  stroke="currentColor"
                  strokeWidth="1.25"
                />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <div
        aria-hidden={openIndex === null}
        className={`fixed inset-0 z-[150] transition-[opacity,visibility] duration-300 ${
          openIndex !== null
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div
          onClick={close}
          className="absolute inset-0 bg-binova-black/95 backdrop-blur-sm"
        />

        {openIndex !== null && (
          <>
            <button
              type="button"
              onClick={close}
              aria-label="Chiudi"
              className="absolute right-6 top-6 z-10 grid h-12 w-12 place-items-center text-binova-bone/70 transition-colors hover:text-binova-bone max-md:right-4 max-md:top-4"
              style={{ marginTop: "env(safe-area-inset-top)" }}
            >
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 1l12 12M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.25"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={prev}
              aria-label="Immagine precedente"
              className="absolute left-6 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center border border-binova-bone/30 text-binova-bone/70 transition-colors hover:border-binova-gold hover:text-binova-gold max-md:left-3 max-md:h-10 max-md:w-10"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M9 1L3 7l6 6"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Immagine successiva"
              className="absolute right-6 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center border border-binova-bone/30 text-binova-bone/70 transition-colors hover:border-binova-gold hover:text-binova-gold max-md:right-3 max-md:h-10 max-md:w-10"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M5 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </button>

            <div className="absolute inset-0 flex items-center justify-center px-16 py-20 max-md:px-12 max-md:py-16">
              <div className="relative h-full w-full">
                <Image
                  src={images[openIndex]}
                  alt={`${altPrefix} — vista ${openIndex + 1}`}
                  fill
                  quality={95}
                  sizes="100vw"
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.32em] text-binova-bone/55">
              {openIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </>
  );
}
