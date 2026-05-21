import Image from "next/image";
import Link from "next/link";
import { collections } from "@/data/collections";

export default function Collections() {
  return (
    <section
      id="collections"
      className="relative bg-binova-black px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section header */}
        <div className="mb-20 flex flex-col gap-6 max-lg:mb-12 max-md:gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · Collezioni
            </span>
            <h2 className="font-display text-[clamp(2.5rem,5.5vw,5.5rem)] font-light leading-[0.95] tracking-tight text-binova-bone">
              Otto modi{" "}
              <span className="italic text-binova-gold-soft">
                di abitare la materia.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-binova-bone/60">
            Ogni collezione nasce da un'idea di spazio. Materiali sostenibili,
            22 finiture nel catalogo 2026, lavorazioni a eccimeri, vetri Rain
            ottenuti per sottrazione ad acido.
          </p>
        </div>

        {/* Editorial grid — image-first, always visible, 2 wide cards per row */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 max-md:gap-y-12 md:grid-cols-2 lg:gap-x-14 lg:gap-y-28">
          {collections.map((collection) => (
            <Link
              key={collection.code}
              href={`/cucine/${collection.slug}`}
              className="group flex flex-col gap-6"
            >
              {/* Image — always visible, 3:2 photographic aspect */}
              <div className="relative aspect-[3/2] overflow-hidden bg-binova-stone">
                {collection.image ? (
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-stone-700 via-stone-800 to-stone-950">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-binova-bone/40">
                      Collezione 2026
                    </span>
                  </div>
                )}

                {/* Top-right code badge */}
                <span className="absolute right-5 top-5 font-display text-sm text-binova-bone mix-blend-difference">
                  {collection.code}
                </span>

                {/* Hover gold border */}
                <span
                  aria-hidden
                  className="absolute inset-0 border border-transparent transition-colors duration-700 group-hover:border-binova-gold/50"
                />

                {/* Subtle bottom gradient for readability if text overlaps later */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
              </div>

              {/* Caption */}
              <div className="flex flex-col gap-3">
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="font-display text-[clamp(2rem,3.2vw,3.2rem)] font-light leading-none tracking-tight text-binova-bone transition-colors group-hover:text-binova-gold-soft">
                    {collection.name}
                  </h3>
                  <span className="shrink-0 text-[10px] uppercase tracking-[0.32em] text-binova-bone/50">
                    {collection.tag}
                  </span>
                </div>

                <p className="max-w-xl text-[15px] leading-relaxed text-binova-bone/60">
                  {collection.shortDesc}
                </p>

                <span className="mt-2 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-binova-bone/55 transition-colors group-hover:text-binova-gold">
                  Scopri {collection.name}
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-500 group-hover:translate-x-1"
                  >
                    <svg
                      width="22"
                      height="10"
                      viewBox="0 0 22 10"
                      fill="none"
                    >
                      <path
                        d="M0 5h20m0 0L16 1m4 4l-4 4"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
