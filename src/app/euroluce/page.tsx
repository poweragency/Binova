import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contacts from "@/components/sections/Contacts";

export const metadata: Metadata = {
  title: "Euroluce · Binova",
  description:
    "Euroluce 2026 e archivio degli eventi illuminotecnici Binova: Panzeri, Matteo Thun, presentazioni nuove linee luce dello showroom di Via Durini.",
};

type LightingEvent = {
  year: string;
  title: string;
  partner: string;
  desc: string;
  image?: string;
};

const events: LightingEvent[] = [
  {
    year: "2026",
    title: "Euroluce 2026 — la luce come architettura",
    partner: "Salone del Mobile.Milano · Fiera Milano",
    desc:
      "La cucina e la luce convivono nello stesso spazio. Per Euroluce 2026 Binova presenta nello showroom di Via Durini una serie di scenografie luminose pensate per accompagnare le nuove collezioni Avola e Bluna: corpi sospesi, strisce LED retro-illuminanti per i fondali in marmo, integrazione tecnica diretta nei pensili.",
    image: "/images/heritage/atmosphere-3.jpg",
  },
  {
    year: "2019",
    title: "Panzeri × Matteo Thun",
    partner: "Panzeri Illuminazione · 9 Aprile 2019",
    desc:
      "Talk con l'architetto e designer Matteo Thun sul ruolo della luce nella cucina contemporanea. Presentazione delle collezioni Panzeri ospitate nello showroom: corpi orientabili, lampade a sospensione magnetiche, dimmer integrati ai sistemi di domotica.",
    image: "/images/eventi/matteo-thun.jpg",
  },
  {
    year: "2018",
    title: "Sfere. Rotazioni. Ritorni.",
    partner: "Panzeri Illuminazione · Milano Design Week",
    desc:
      "Installazione luminosa di Panzeri all'interno dello showroom Binova: sfere sospese in movimento controllato, ombre proiettate sui top in marmo, gioco di volumi che dialogano con la cucina sottostante.",
  },
];

const partners = [
  {
    name: "Panzeri",
    role: "Illuminazione tecnica e decorativa",
    desc: "Storico partner Binova per i corpi illuminanti integrati nelle cucine.",
  },
  {
    name: "Flos",
    role: "Decorativo da soffitto",
    desc: "Sospensioni firmate per i progetti contract di alto profilo.",
  },
  {
    name: "Davide Groppi",
    role: "Lampade scultoree",
    desc: "Pezzi unici per le nicchie e le tavole dell'isola.",
  },
  {
    name: "iGuzzini",
    role: "Tecnica architettonica",
    desc: "Spot da incasso e profili LED per i fondali integrati.",
  },
];

export default function EurolucePage() {
  return (
    <main className="relative bg-binova-black">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[90svh] min-h-[560px] max-md:min-h-[500px] overflow-hidden bg-binova-black">
        <Image
          src="/images/eventi/matteo-thun.jpg"
          alt="Euroluce — Binova Milano"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.15) 40%, rgba(10,10,10,0.55) 80%, rgba(10,10,10,0.95) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-between px-6 pb-16 pt-32 max-md:pt-24 max-md:pb-12 lg:px-12 lg:pb-20 lg:pt-40">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-binova-bone/60">
            <Link href="/" className="hover:text-binova-bone transition-colors">
              Binova
            </Link>
            <span className="text-binova-bone/30">/</span>
            <span className="text-binova-bone">Euroluce</span>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold-soft">
              · Showroom Milano
            </span>
            <h1 className="font-display text-[clamp(2.8rem,7vw,7rem)] max-md:text-[clamp(2.4rem,11vw,4rem)] font-light leading-[0.95] tracking-tight text-binova-bone drop-shadow-[0_4px_40px_rgba(0,0,0,0.5)]">
              Luce e cucina,{" "}
              <span className="italic text-binova-gold-soft">
                nello stesso respiro.
              </span>
            </h1>
          </div>

          <p className="max-w-2xl text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-binova-bone/85">
            Da sempre Binova ospita nello showroom di Via Durini gli
            eventi della filiera illuminotecnica. Da Euroluce alle
            presentazioni stagionali, la luce è parte del progetto —
            mai un dettaglio a posteriori.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-binova-ink px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1400px]">
          <div data-reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · Calendario
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,4rem)] max-md:text-[clamp(1.7rem,7vw,2.6rem)] font-light leading-[1.05] tracking-tight text-binova-bone">
              Gli eventi <span className="italic text-binova-gold-soft">della luce.</span>
            </h2>
          </div>

          <div className="mt-16 flex flex-col gap-16 max-md:gap-10">
            {events.map((event, i) => (
              <article
                key={event.title}
                className={`grid gap-10 max-lg:gap-6 lg:grid-cols-12 lg:gap-16 lg:items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
                data-reveal
              >
                {event.image && (
                  <div className="relative aspect-square w-full overflow-hidden border border-white/[0.06] bg-binova-stone lg:col-span-5">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      quality={90}
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className={event.image ? "lg:col-span-7" : "lg:col-span-12"}>
                  <span className="text-[10px] uppercase tracking-[0.32em] text-binova-gold-soft">
                    · {event.partner} · {event.year}
                  </span>
                  <h3 className="mt-4 font-display text-[clamp(1.8rem,3vw,2.8rem)] font-light leading-[1.1] text-binova-bone">
                    {event.title}
                  </h3>
                  <p className="mt-6 text-[clamp(0.95rem,1.1vw,1.05rem)] leading-relaxed text-binova-bone/65">
                    {event.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-binova-black px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between" data-reveal>
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
                · Brand di filiera
              </span>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,4rem)] max-md:text-[clamp(1.7rem,7vw,2.6rem)] font-light leading-[1] tracking-tight text-binova-bone">
                I nostri{" "}
                <span className="italic text-binova-gold-soft">
                  partner luce.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-binova-bone/60">
              Quattro brand con cui collaboriamo costantemente per
              integrare la luce nei progetti cucina.
            </p>
          </div>

          <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 border-t border-white/[0.06] pt-12 max-lg:mt-12 max-lg:gap-y-10 max-lg:pt-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
            {partners.map((p) => (
              <li key={p.name} className="flex flex-col gap-3" data-reveal>
                <h3 className="font-display text-2xl text-binova-bone lg:text-3xl">
                  {p.name}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.32em] text-binova-gold-soft">
                  {p.role}
                </span>
                <span className="block h-px w-8 bg-binova-gold/40" />
                <p className="text-sm leading-relaxed text-binova-bone/55">
                  {p.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contacts />
      <Footer />
    </main>
  );
}
