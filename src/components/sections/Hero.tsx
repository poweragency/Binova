"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-binova-black"
    >
      {/* Hero image — true Binova kitchen */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero.jpg"
          alt="Showroom Binova Milano via Durini"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        {/* Layered overlays for legibility */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.25) 35%, rgba(10,10,10,0.45) 70%, rgba(10,10,10,0.92) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,179,120,0.18), transparent 60%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col justify-between px-6 pb-16 pt-36 lg:px-12 lg:pb-20 lg:pt-44">
        {/* Top eyebrow */}
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-binova-gold/60" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-binova-bone/80">
            Collezione 2026 · Salone del Mobile.Milano
          </span>
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-10">
          <h1 className="font-display font-light leading-[0.95] tracking-tight text-binova-bone drop-shadow-[0_2px_30px_rgba(0,0,0,0.4)]">
            <span className="block text-[clamp(2.8rem,8.5vw,9rem)]">
              Cucine d'autore
            </span>
            <span className="block text-[clamp(2.8rem,8.5vw,9rem)] italic text-binova-gold-soft">
              dal 1958.
            </span>
          </h1>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-[clamp(0.95rem,1.1vw,1.05rem)] leading-relaxed text-binova-bone/85">
              Da Petrignano d'Assisi a Milano. Sessantasei anni di artigianato
              evoluto in linguaggio contemporaneo. Ogni cucina è disegnata
              attorno all'architettura che la accoglie.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="#collections"
                className="group flex items-center gap-4 border border-binova-bone/40 bg-black/20 px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-binova-bone backdrop-blur-sm transition-all duration-500 hover:border-binova-gold hover:text-binova-gold"
              >
                Esplora le collezioni
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#showroom"
                className="text-[11px] uppercase tracking-[0.32em] text-binova-bone/70 hover:text-binova-bone transition-colors"
              >
                Showroom Milano
              </a>
            </div>
          </div>
        </div>

        {/* Bottom data row */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 lg:grid-cols-4">
          {[
            { value: "1958", label: "Fondazione" },
            { value: "25.000 m²", label: "Factory-One Notaresco" },
            { value: "10", label: "Collezioni firma" },
            { value: "Made in Italy", label: "Senza compromessi" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span className="font-display text-3xl text-binova-bone lg:text-4xl">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Side ticker */}
      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 lg:block">
        <span className="text-[10px] uppercase tracking-[0.5em] text-binova-bone/40">
          Scroll · Cucine moderne di lusso
        </span>
      </div>
    </section>
  );
}
