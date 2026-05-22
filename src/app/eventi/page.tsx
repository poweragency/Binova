import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contacts from "@/components/sections/Contacts";

export const metadata: Metadata = {
  title: "Eventi · Binova",
  description:
    "Salone del Mobile, Milano Design Week, showcooking, partnership. Tutti gli eventi che Binova ospita nello showroom di Via Durini 17.",
};

type Event = {
  year: string;
  title: string;
  partner: string;
  desc: string;
  image: string;
};

const featured: Event[] = [
  {
    year: "2023",
    title: "Laminam per Binova",
    partner: "Milano Design Week",
    desc:
      "Le superfici Laminam in dialogo con le architetture Binova. Un'installazione dedicata alle grandi lastre e ai loro impieghi nella cucina contemporanea.",
    image: "/images/eventi/laminam.jpg",
  },
  {
    year: "2023",
    title: "Xtone per Binova",
    partner: "Milano Design Week",
    desc:
      "Il porcellanato di grande formato Xtone presentato negli ambienti dello showroom — top, schienali, rivestimenti integrali a sviluppo verticale.",
    image: "/images/eventi/xtone.jpg",
  },
  {
    year: "2023",
    title: "Bertazzoni per Binova",
    partner: "Milano Design Week",
    desc:
      "La Master Series Bertazzoni integrata nelle cucine Binova. Tecnologia professionale, estetica italiana, una sinergia naturale.",
    image: "/images/eventi/bertazzoni.jpg",
  },
];

type LegacyEvent = {
  year: string;
  title: string;
  caption: string;
  image?: string;
};

const archive: LegacyEvent[] = [
  {
    year: "2022",
    title: "Live Dinner Experience",
    caption: "Cena live con lo Chef Roberto Valbuzzi nello showroom di Via Durini.",
    image: "/images/eventi/valbuzzi.jpg",
  },
  {
    year: "2019",
    title: "Binova with Petti",
    caption: "Serata Petti dedicata alle conserve d'autore.",
  },
  {
    year: "2019",
    title: "Showcooking V-Zug",
    caption: "Dimostrazione delle tecnologie di cottura V-Zug, 10 aprile 2019.",
    image: "/images/eventi/vzug.jpg",
  },
  {
    year: "2019",
    title: "Panzeri with Matteo Thun",
    caption: "Talk con l'architetto Matteo Thun sulla luce nella cucina contemporanea.",
    image: "/images/eventi/matteo-thun.jpg",
  },
  {
    year: "2018",
    title: "Magico Vapore V-Zug",
    caption: "Workshop sul vapore in cucina e i suoi impieghi nella ristorazione domestica.",
  },
  {
    year: "2018",
    title: "Eurocucina",
    caption: "Presenza Binova alla fiera Eurocucina con le novità 2018.",
    image: "/images/eventi/eurocucina.jpg",
  },
  {
    year: "2018",
    title: "Panzeri: Sfere. Rotazioni. Ritorni.",
    caption: "Installazione luminosa Panzeri nello showroom di Via Durini.",
  },
  {
    year: "2018",
    title: "Cocktail Party Partners",
    caption: "Serata dedicata ai partner di filiera, 20 aprile 2018.",
  },
  {
    year: "2018",
    title: "Cocktail Party Asia",
    caption: "Cena di rappresentanza per i partner asiatici, 19 aprile 2018.",
  },
  {
    year: "2018",
    title: "Cocktail Party Official",
    caption: "Apertura ufficiale Milano Design Week 2018.",
  },
  {
    year: "2018",
    title: "Showcooking ZUG",
    caption: "Dimostrazione cottura ZUG, 17 aprile 2018.",
  },
  {
    year: "—",
    title: "Cocktail with Davide Oldani",
    caption: "Serata con lo Chef Davide Oldani, cucina pop italiana.",
  },
  {
    year: "—",
    title: "Inaugurazione",
    caption: "Apertura ufficiale dello showroom Binova Milano in Via Durini 17.",
    image: "/images/eventi/inaugurazione.jpg",
  },
];

export default function EventiPage() {
  return (
    <main className="relative bg-binova-black">
      <Navbar />

      {/* Hero — full-bleed image (coerente con altre pagine) */}
      <section className="relative h-[90svh] min-h-[560px] max-md:min-h-[500px] overflow-hidden bg-binova-black">
        <Image
          src="/images/heritage/atmosphere-3.jpg"
          alt="Eventi Binova — showroom Milano"
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
            <span className="text-binova-bone">Eventi</span>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold-soft">
              · Showroom Milano
            </span>
            <h1 className="font-display text-[clamp(2.8rem,7vw,7rem)] max-md:text-[clamp(2.4rem,11vw,4rem)] font-light leading-[0.95] tracking-tight text-binova-bone drop-shadow-[0_4px_40px_rgba(0,0,0,0.5)]">
              La cucina come{" "}
              <span className="italic text-binova-gold-soft">
                centro di vita.
              </span>
            </h1>
          </div>

          <p className="max-w-2xl text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-binova-bone/85">
            Lo showroom Binova di Via Durini è un palcoscenico vivo:
            Salone del Mobile, Milano Design Week, showcooking con
            chef stellati, incontri con i partner di filiera.
          </p>
        </div>
      </section>

      {/* Featured: Milano Design Week 2023 */}
      <section className="bg-binova-black px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
            · In primo piano · Milano Design Week 2023
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,4rem)] max-md:text-[clamp(1.7rem,7vw,2.6rem)] font-light leading-[1.05] tracking-tight text-binova-bone">
            Tre serate, tre{" "}
            <span className="italic text-binova-gold-soft">collaborazioni.</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-10 max-md:gap-8 md:grid-cols-3 lg:gap-12">
            {featured.map((event) => (
              <article key={event.title} className="flex flex-col gap-5">
                <div className="relative aspect-square w-full overflow-hidden border border-white/[0.06] bg-binova-stone">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] uppercase tracking-[0.32em] text-binova-gold-soft">
                    {event.partner} · {event.year}
                  </span>
                  <h3 className="font-display text-[clamp(1.5rem,2.4vw,2.2rem)] font-light leading-[1.1] text-binova-bone">
                    {event.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-binova-bone/60">
                    {event.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="bg-binova-ink px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
                · Archivio
              </span>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,4rem)] max-md:text-[clamp(1.7rem,7vw,2.6rem)] font-light leading-[1] tracking-tight text-binova-bone">
                Tutti gli{" "}
                <span className="italic text-binova-gold-soft">eventi</span>
              </h2>
            </div>
            <p className="max-w-md text-binova-bone/60">
              Dieci anni di showcooking, partnership e collaborazioni con
              chef, designer e brand della filiera.
            </p>
          </div>

          <ul className="mt-16 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {archive.map((event) => (
              <li
                key={event.title}
                className="grid grid-cols-12 items-start gap-4 py-6 lg:py-7"
              >
                <span className="col-span-2 font-display text-sm text-binova-gold-soft lg:text-base">
                  {event.year}
                </span>
                <div className="col-span-10 flex flex-col gap-2 lg:col-span-7 lg:flex-row lg:items-baseline lg:gap-8">
                  <h3 className="font-display text-xl font-light text-binova-bone lg:text-2xl lg:min-w-[18rem]">
                    {event.title}
                  </h3>
                  <p className="text-sm text-binova-bone/55 lg:text-[15px]">
                    {event.caption}
                  </p>
                </div>
                <span
                  className="col-span-12 mt-2 inline-flex justify-end text-binova-bone/30 lg:col-span-3 lg:mt-0"
                  aria-hidden
                >
                  {event.image && (
                    <span className="relative block aspect-square h-16 w-16 overflow-hidden border border-white/[0.06] bg-binova-stone lg:h-20 lg:w-20">
                      <Image
                        src={event.image}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-16 max-w-2xl text-center text-binova-bone/55 mx-auto">
            Vuoi essere informato sui prossimi eventi nello showroom?{" "}
            <a
              href="#contact"
              className="text-binova-gold-soft hover:text-binova-gold transition-colors"
            >
              Scrivici per ricevere il calendario →
            </a>
          </p>
        </div>
      </section>

      <Contacts />
      <Footer />
    </main>
  );
}
