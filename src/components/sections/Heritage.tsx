import Image from "next/image";

export default function Heritage() {
  return (
    <section
      id="heritage"
      className="relative overflow-hidden bg-binova-ink px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section header — full width */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · Heritage
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4.5vw,4.5rem)] font-light leading-[1] tracking-tight text-binova-bone">
              Da Petrignano{" "}
              <span className="italic text-binova-gold-soft">a Milano.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-binova-bone/65">
            Sessantasei anni in bottega, in fabbrica, in cantiere. Ogni gesto
            che facciamo oggi è stato disegnato da una mano nel 1958 e
            riadattato cento volte da chi è venuto dopo.
          </p>
        </div>

        {/* Editorial banner image */}
        <div className="relative mt-16 aspect-[21/9] w-full overflow-hidden border border-white/[0.06] max-lg:mt-10 max-md:aspect-[4/3] lg:mt-20">
          <Image
            src="/images/realizzazioni/contract.jpg"
            alt="Realizzazione Binova"
            fill
            sizes="(max-width: 1400px) 100vw, 1400px"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,17,15,0.1) 0%, rgba(20,17,15,0.3) 60%, rgba(20,17,15,0.85) 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 p-8 lg:p-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold-soft">
              · 1958 — 2026
            </span>
            <p className="mt-3 max-w-2xl font-display text-[clamp(1.2rem,2vw,1.8rem)] font-light leading-[1.3] text-binova-bone">
              "Non vendiamo mobili. Disegniamo lo spazio che li ospiterà."
            </p>
          </div>
        </div>

        {/* Timeline — horizontal */}
        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/[0.06] pt-12 max-lg:mt-12 max-lg:gap-y-8 max-lg:pt-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-10">
          <TimelineItem
            year="1958"
            event="Giovanni e Francesco Bolletta fondano la bottega a Petrignano d'Assisi."
          />
          <TimelineItem
            year="1970s"
            event="Industrializzazione dei processi, ispirazione automotive USA."
          />
          <TimelineItem
            year="2018"
            event="Apre Factory-One a Notaresco: 25.000 m² di produzione 4.0."
          />
          <TimelineItem
            year="2022"
            event="Cubo Design entra in Italian Design Brands (IDB)."
          />
          <TimelineItem
            year="2026"
            event="Nuova collezione al Salone del Mobile Milano."
          />
        </div>

        {/* Brand pillars — 4 columns, text-only */}
        <div className="mt-24 grid grid-cols-1 gap-x-8 gap-y-12 border-t border-white/[0.06] pt-16 max-lg:mt-14 max-lg:gap-y-10 max-lg:pt-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
          <Pillar
            code="I."
            title="Made in Italy"
            body="Filiera completamente italiana. Legno, metalli, grès, vetro lavorati nei nostri stabilimenti."
          />
          <Pillar
            code="II."
            title="Sostenibilità"
            body="Laccatura a eccimeri, legni compositi sostenibili, materiali a chilometro tracciato."
          />
          <Pillar
            code="III."
            title="Artigianato 4.0"
            body="La precisione del CNC, il giudizio dell'artigiano. Ogni cucina passa entrambe le mani."
          />
          <Pillar
            code="IV."
            title="Architettura"
            body="Non vendiamo mobili. Disegniamo lo spazio che li ospiterà."
          />
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ year, event }: { year: string; event: string }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-display text-3xl text-binova-gold-soft lg:text-4xl">
        {year}
      </span>
      <span className="block h-px w-8 bg-binova-gold/40" />
      <span className="text-sm leading-relaxed text-binova-bone/70">
        {event}
      </span>
    </div>
  );
}

function Pillar({
  code,
  title,
  body,
}: {
  code: string;
  title: string;
  body: string;
}) {
  return (
    <div className="group flex flex-col gap-4">
      <span className="font-display text-sm text-binova-gold-soft tracking-wider">
        {code}
      </span>
      <h3 className="font-display text-2xl text-binova-bone lg:text-3xl">
        {title}
      </h3>
      <span className="block h-px w-8 bg-binova-gold/40 transition-all duration-500 group-hover:w-16 group-hover:bg-binova-gold" />
      <p className="text-sm leading-relaxed text-binova-bone/55">{body}</p>
    </div>
  );
}
