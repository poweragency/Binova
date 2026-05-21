import Image from "next/image";

export default function Showroom() {
  return (
    <section
      id="showroom"
      className="relative overflow-hidden bg-binova-black px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · Showroom
            </span>
            <h2 className="font-display text-[clamp(2.4rem,5vw,5rem)] font-light leading-[0.95] tracking-tight text-binova-bone">
              Milano, <br />
              <span className="italic text-binova-gold-soft">Durini Design District.</span>
            </h2>
            <p className="max-w-md text-binova-bone/65">
              350 m² nel cuore del distretto del design milanese. Su
              appuntamento con il nostro team di architetti e progettisti.
              Visite guidate per studi di architettura e interior designer.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/5 pt-8">
              <Info label="Indirizzo" value="Via Durini 17, 20122 Milano" />
              <Info label="Telefono" value="+39 02 2906 1826" />
              <Info label="Email" value="info@binovamilano.it" />
              <Info label="Orari" value="Lun–Sab · 10:00–19:00" />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 max-md:flex-col max-md:items-stretch">
              <a
                href="#book"
                className="group flex items-center justify-between gap-4 border border-binova-bone/30 px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-binova-bone transition-all duration-500 hover:border-binova-gold hover:text-binova-gold max-md:px-6"
              >
                Prenota una visita
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="https://maps.google.com/?q=Via+Durini+17+Milano"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-[0.32em] text-binova-bone/60 hover:text-binova-bone transition-colors"
              >
                Apri in Maps ↗
              </a>
            </div>
          </div>

          {/* Right — real showroom photo */}
          <div className="relative aspect-[4/5] overflow-hidden border border-white/5 lg:aspect-auto lg:min-h-[640px]">
            <Image
              src="/images/showroom/showroom-1.jpg"
              alt="Showroom Binova Milano, Via Durini 17"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-binova-black/80" />

            <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-12">
              <div className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center border border-binova-bone/90 backdrop-blur-sm">
                  <span className="h-2.5 w-2.5 bg-binova-bone" />
                </span>
                <span className="font-display text-lg text-binova-bone drop-shadow-lg">
                  Binova Milano
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-[10px] uppercase tracking-[0.4em] text-binova-bone/80">
                  Flagship store
                </span>
                <span className="font-display text-4xl text-binova-bone lg:text-5xl drop-shadow-lg">
                  350 m²
                </span>
                <span className="text-binova-bone/80">
                  di esperienza Binova nel cuore del design milanese.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
        {label}
      </span>
      <span className="text-binova-bone/85">{value}</span>
    </div>
  );
}
