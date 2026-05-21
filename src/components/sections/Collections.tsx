"use client";

import { useState } from "react";

const collections = [
  {
    code: "01",
    name: "Avola",
    tag: "Telaio architettonico",
    desc: "Linee verticali e orizzontali ritmate da un telaio sottilissimo a vista. La firma più recente di Binova.",
    accent: "from-stone-700 to-stone-900",
  },
  {
    code: "02",
    name: "Bluna",
    tag: "Gola d'eccellenza",
    desc: "L'estetica della gola portata al suo apice. Razionale, moderna, taglio sartoriale.",
    accent: "from-zinc-800 to-zinc-950",
  },
  {
    code: "03",
    name: "Vogue",
    tag: "Tagli verticali",
    desc: "Apertura ante senza maniglie a vista, ritmo grafico, presenza scultorea.",
    accent: "from-neutral-800 to-neutral-950",
  },
  {
    code: "04",
    name: "Lab",
    tag: "Volumi essenziali",
    desc: "Volumi importanti, linee decise. Per chi cerca la cucina come elemento d'architettura.",
    accent: "from-stone-800 to-black",
  },
  {
    code: "05",
    name: "Scava",
    tag: "Sottrazione",
    desc: "La materia scavata. Geometrie ottenute per sottrazione, atmosfera minerale.",
    accent: "from-zinc-700 to-zinc-900",
  },
  {
    code: "06",
    name: "Mantis",
    tag: "Precisione",
    desc: "Strutture leggere, dettagli da orologeria. Ingegneria sussurrata.",
    accent: "from-neutral-700 to-neutral-950",
  },
  {
    code: "07",
    name: "Regula",
    tag: "Misura",
    desc: "Ritmo regolare, proporzioni classiche rilette in chiave contemporanea.",
    accent: "from-stone-700 to-stone-950",
  },
  {
    code: "08",
    name: "Ono",
    tag: "Essenzialità",
    desc: "Riduzione al gesto necessario. Forma pura, materia che parla.",
    accent: "from-zinc-800 to-black",
  },
  {
    code: "09",
    name: "Balance",
    tag: "Boho contemporaneo",
    desc: "Vasche integrate per aromatiche, materie calde, atmosfera accogliente.",
    accent: "from-stone-600 to-stone-900",
  },
  {
    code: "10",
    name: "Hily",
    tag: "Verticalità",
    desc: "Slancio verso l'alto, sviluppo verticale, vetrine integrate.",
    accent: "from-neutral-800 to-neutral-950",
  },
];

export default function Collections() {
  const [hovered, setHovered] = useState<number | null>(null);

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
              Dieci modi <span className="italic text-binova-gold-soft">di abitare la materia.</span>
            </h2>
          </div>
          <p className="max-w-md text-binova-bone/60">
            Ogni collezione nasce da un'idea di spazio. Materiali sostenibili,
            22 finiture nel catalogo 2026, lavorazioni a eccimeri, vetri Rain
            ottenuti per sottrazione ad acido.
          </p>
        </div>

        {/* Collections list — luxury editorial layout */}
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {collections.map((collection, i) => (
            <a
              key={collection.code}
              href={`#kitchen-${collection.name.toLowerCase()}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative grid grid-cols-12 items-center gap-4 py-7 transition-colors hover:bg-white/[0.015] lg:py-9"
            >
              <span className="col-span-1 font-display text-sm text-binova-bone/40 lg:text-base">
                {collection.code}
              </span>

              <h3 className="col-span-3 font-display text-[clamp(1.8rem,3.5vw,3.4rem)] font-light leading-none tracking-tight text-binova-bone transition-colors group-hover:text-binova-gold-soft lg:col-span-3">
                {collection.name}
              </h3>

              <span className="col-span-3 hidden text-[11px] uppercase tracking-[0.28em] text-binova-bone/50 lg:block">
                {collection.tag}
              </span>

              <p className="col-span-7 text-sm text-binova-bone/55 lg:col-span-4 lg:text-[15px]">
                {collection.desc}
              </p>

              <span
                className="col-span-1 flex justify-end text-binova-bone/40 transition-all duration-500 group-hover:translate-x-1 group-hover:text-binova-gold"
                aria-hidden
              >
                <svg
                  width="22"
                  height="10"
                  viewBox="0 0 22 10"
                  fill="none"
                  className="lg:h-3 lg:w-7"
                >
                  <path
                    d="M0 5h20m0 0L16 1m4 4l-4 4"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </span>

              {/* Hover preview gradient (placeholder for future image swap) */}
              <div
                className={`pointer-events-none absolute right-6 top-1/2 hidden h-32 w-48 -translate-y-1/2 rounded-sm bg-gradient-to-br ${collection.accent} transition-all duration-700 lg:block ${
                  hovered === i
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
                aria-hidden
              />
            </a>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
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
