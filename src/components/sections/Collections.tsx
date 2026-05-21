import Image from "next/image";
import Link from "next/link";
import { collections } from "@/data/collections";

export default function Collections() {
  return (
    <section
      id="collections"
      className="relative bg-binova-black px-6 py-32 lg:px-12 lg:py-44"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section header */}
        <div className="mb-20 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
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

        {/* Editorial grid — image-first, always visible */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-24">
          {collections.map((collection) => (
            <Link
              key={collection.code}
              href={`/cucine/${collection.slug}`}
              className="group flex flex-col gap-5"
            >
              {/* Image — always visible */}
              <div className="relative aspect-[4/5] overflow-hidden bg-binova-stone">
                {collection.image ? (
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-stone-700 via-stone-800 to-stone-950">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-binova-bone/40">
                      Collezione 2026
                    </span>
                  </div>
                )}

                {/* Bottom-right code badge */}
                <span className="absolute right-4 top-4 font-display text-xs text-binova-bone/70 mix-blend-difference">
                  {collection.code}
                </span>

                {/* Hover gold border */}
                <span
                  aria-hidden
                  className="absolute inset-0 border border-transparent transition-colors duration-700 group-hover:border-binova-gold/50"
                />
              </div>

              {/* Caption */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-[clamp(1.8rem,2.6vw,2.4rem)] font-light leading-none tracking-tight text-binova-bone transition-colors group-hover:text-binova-gold-soft">
                    {collection.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/45">
                    {collection.tag}
                  </span>
                </div>
                <span
                  aria-hidden
                  className="mt-2 text-binova-bone/30 transition-all duration-500 group-hover:translate-x-1 group-hover:text-binova-gold"
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
              </div>

              <p className="text-sm leading-relaxed text-binova-bone/55">
                {collection.shortDesc}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <a
            href="#collections-all"
            className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-binova-bone/70 hover:text-binova-bone transition-colors"
          >
            <span className="h-px w-12 bg-binova-bone/30 transition-all duration-500 group-hover:w-24 group-hover:bg-binova-gold" />
            Scopri tutte le finiture
          </a>
        </div>
      </div>
    </section>
  );
}
