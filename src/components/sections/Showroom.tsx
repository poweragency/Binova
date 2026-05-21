export default function Showroom() {
  return (
    <section
      id="showroom"
      className="relative overflow-hidden bg-binova-black px-6 py-32 lg:px-12 lg:py-44"
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
              <Info label="Telefono" value="+39 02 0000 0000" />
              <Info label="Email" value="milano@binova.it" />
              <Info label="Orari" value="Lun–Sab · 10:00–19:00" />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <a
                href="#book"
                className="group flex items-center gap-4 border border-binova-bone/30 px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-binova-bone transition-all duration-500 hover:border-binova-gold hover:text-binova-gold"
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

          {/* Right — visual placeholder */}
          <div className="relative aspect-[4/5] overflow-hidden border border-white/5 bg-gradient-to-br from-binova-stone via-binova-ink to-black lg:aspect-auto lg:min-h-[640px]">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: "radial-gradient(circle at 30% 30%, rgba(201,179,120,0.18), transparent 50%)",
            }} />
            <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-12">
              <div className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center border border-binova-bone/80">
                  <span className="h-2.5 w-2.5 bg-binova-bone" />
                </span>
                <span className="font-display text-lg text-binova-bone">Binova Milano</span>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-[10px] uppercase tracking-[0.4em] text-binova-bone/50">
                  Flagship store
                </span>
                <span className="font-display text-4xl text-binova-bone lg:text-5xl">
                  350 m²
                </span>
                <span className="text-binova-bone/60">
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
