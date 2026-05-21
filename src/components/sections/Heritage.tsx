import Image from "next/image";

export default function Heritage() {
  return (
    <section
      id="heritage"
      className="relative overflow-hidden bg-binova-ink px-6 py-32 lg:px-12 lg:py-44"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · Heritage
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4.5vw,4.5rem)] font-light leading-[1] tracking-tight text-binova-bone">
              Da Petrignano <br />
              <span className="italic text-binova-gold-soft">a Milano.</span>
            </h2>
            <div className="mt-10 flex flex-col gap-4">
              <Timeline year="1958" event="Giovanni e Francesco Bolletta fondano la bottega a Petrignano d'Assisi." />
              <Timeline year="1970s" event="Industrializzazione dei processi, ispirazione automotive USA." />
              <Timeline year="2018" event="Apre Factory-One a Notaresco: 25.000 m² di produzione 4.0." />
              <Timeline year="2022" event="Cubo Design entra in Italian Design Brands (IDB)." />
              <Timeline year="2026" event="Nuova collezione al Salone del Mobile.Milano." />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <Card
                title="Made in Italy."
                body="Filiera completamente italiana. Legno, metalli, grès, vetro lavorati nei nostri stabilimenti."
                image="/images/heritage/atmosphere-1.jpg"
              />
              <Card
                title="Sostenibilità."
                body="Laccatura a eccimeri, legni compositi sostenibili, materiali a chilometro tracciato."
                image="/images/heritage/atmosphere-2.jpg"
              />
              <Card
                title="Artigianato 4.0."
                body="La precisione del CNC, il giudizio dell'artigiano. Ogni cucina passa entrambe le mani."
                image="/images/heritage/atmosphere-3.jpg"
              />
              <Card
                title="Architettura."
                body="Non vendiamo mobili. Disegniamo lo spazio che li ospiterà."
                image="/images/realizzazioni/contract.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline({ year, event }: { year: string; event: string }) {
  return (
    <div className="flex gap-6 border-b border-white/[0.06] py-3">
      <span className="w-20 shrink-0 font-display text-binova-gold-soft">{year}</span>
      <span className="text-binova-bone/70">{event}</span>
    </div>
  );
}

function Card({
  title,
  body,
  image,
}: {
  title: string;
  body: string;
  image: string;
}) {
  return (
    <div className="group relative overflow-hidden border border-white/[0.06] bg-binova-stone transition-colors hover:border-binova-gold/30">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-binova-stone via-binova-stone/40 to-transparent" />
      </div>
      <div className="p-6 lg:p-8">
        <h3 className="font-display text-2xl text-binova-bone lg:text-3xl">{title}</h3>
        <p className="mt-3 text-sm text-binova-bone/55 lg:text-[15px]">{body}</p>
        <span className="mt-6 block h-px w-8 bg-binova-gold/30 transition-all duration-500 group-hover:w-16 group-hover:bg-binova-gold" />
      </div>
    </div>
  );
}
