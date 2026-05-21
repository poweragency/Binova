import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contacts from "@/components/sections/Contacts";

export const metadata: Metadata = {
  title: "Heritage · Binova",
  description:
    "Da Petrignano d'Assisi a Milano. Sessantasei anni di artigianato evoluto in linguaggio contemporaneo.",
};

export default function HeritagePage() {
  return (
    <main className="relative bg-binova-black">
      <Navbar />

      {/* Hero header */}
      <section className="relative overflow-hidden border-b border-white/[0.06] bg-binova-ink px-6 pb-20 pt-32 max-md:pb-12 max-md:pt-24 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="relative mx-auto max-w-[1400px]">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-binova-bone/55">
            <Link href="/" className="hover:text-binova-bone transition-colors">
              Binova
            </Link>
            <span className="text-binova-bone/30">/</span>
            <span className="text-binova-bone">Heritage</span>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
                · 1958 — 2026
              </span>
              <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,5.5rem)] max-md:text-[clamp(2rem,9vw,3.6rem)] font-light leading-[1] tracking-tight text-binova-bone">
                Da Petrignano{" "}
                <span className="italic text-binova-gold-soft">a Milano.</span>
              </h1>
            </div>
            <p className="lg:col-span-5 text-binova-bone/65">
              Sessantasei anni in bottega, in fabbrica, in cantiere. Ogni
              gesto che facciamo oggi è stato disegnato da una mano nel
              1958 e riadattato cento volte da chi è venuto dopo.
            </p>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="bg-binova-black px-6 pt-20 max-md:pt-12 lg:px-12 lg:pt-24">
        <div className="relative mx-auto aspect-[21/9] w-full max-w-[1600px] overflow-hidden border border-white/[0.06] max-md:aspect-[4/3]">
          <Image
            src="/images/realizzazioni/contract.jpg"
            alt="Realizzazione Binova"
            fill
            priority
            sizes="(max-width: 1600px) 100vw, 1600px"
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
              &quot;Non vendiamo mobili. Disegniamo lo spazio che li ospiterà.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Timeline + Pillars */}
      <section className="bg-binova-black px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1400px]">
          <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
            · Linea del tempo
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-[1.05] tracking-tight text-binova-bone">
            Cinque <span className="italic text-binova-gold-soft">tappe.</span>
          </h2>

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/[0.06] pt-12 max-lg:mt-10 max-lg:gap-y-8 max-lg:pt-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-10">
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

          <div className="mt-24 max-lg:mt-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · Quattro principi
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-[1.05] tracking-tight text-binova-bone">
              Cosa portiamo dal{" "}
              <span className="italic text-binova-gold-soft">1958.</span>
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 border-t border-white/[0.06] pt-12 max-lg:gap-y-10 max-lg:pt-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
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
        </div>
      </section>

      <Contacts />
      <Footer />
    </main>
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
