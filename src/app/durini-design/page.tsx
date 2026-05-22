import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contacts from "@/components/sections/Contacts";

export const metadata: Metadata = {
  title: "Durini Design · Binova",
  description:
    "Il distretto del design milanese. 24 partner di filiera che condividono con Binova lo showroom di Via Durini: elettrodomestici, rubinetterie, materiali, illuminazione, arredo.",
};

type Partner = {
  name: string;
  role: string;
  url?: string;
};

type PartnerGroup = {
  category: string;
  description: string;
  brands: Partner[];
};

const groups: PartnerGroup[] = [
  {
    category: "Elettrodomestici",
    description:
      "Le marche che selezioniamo e integriamo nelle nostre cucine. Ogni partner è scelto per affidabilità, design e disponibilità nei nostri progetti contract.",
    brands: [
      { name: "Miele", role: "Generation 7000 ad incasso", url: "https://www.miele.it" },
      { name: "Bertazzoni", role: "Master Series italiana", url: "https://www.bertazzoni.com" },
      { name: "Wolf", role: "Cottura professionale USA", url: "https://www.subzero-wolf.com" },
      { name: "V-Zug", role: "Vapore + steam svizzero", url: "https://www.vzug.com" },
      { name: "Sub-Zero", role: "Refrigerazione integrata", url: "https://www.subzero-wolf.com" },
      { name: "Bora", role: "Aspirazione a induzione", url: "https://www.bora.com" },
    ],
  },
  {
    category: "Rubinetteria",
    description:
      "Rubinetti, miscelatori e sistemi di erogazione: dalle linee high-tech a quelle scultoree.",
    brands: [
      { name: "Quooker", role: "Acqua bollente istantanea", url: "https://www.quooker.it" },
      { name: "Nobili", role: "Rubinetteria di design italiana", url: "https://www.nobili.it" },
      { name: "MGS", role: "Acciaio scolpito", url: "https://www.mgstaps.com" },
    ],
  },
  {
    category: "Materiali e superfici",
    description:
      "Pietre tecniche, grès di grande formato, marmi naturali — partner per i top, i fondali, i rivestimenti integrali.",
    brands: [
      { name: "Neolith", role: "Sintered stone XXL", url: "https://www.neolith.com" },
      { name: "Marazzi", role: "Ceramica e grès di firma", url: "https://www.marazzi.it" },
      { name: "Made a Mano", role: "Maioliche artigianali", url: "https://www.madeamano.com" },
      { name: "Locherber Milano", role: "Profumi d'ambiente", url: "https://www.locherbermilano.com" },
    ],
  },
  {
    category: "Illuminazione",
    description:
      "Corpi illuminanti tecnici e decorativi. Vedi anche la pagina dedicata a Euroluce.",
    brands: [
      { name: "Panzeri", role: "Storico partner illuminazione", url: "https://www.panzeri.it" },
    ],
  },
  {
    category: "Living e arredo",
    description:
      "Sedute, tavoli, librerie. Per i progetti dove la cucina si fonde col soggiorno.",
    brands: [
      { name: "Miniforms", role: "Arredo e complementi", url: "https://www.miniforms.com" },
      { name: "Colico", role: "Sedie e sgabelli di design", url: "https://www.colicodesign.com" },
      { name: "Emporio Zani", role: "Curated home accessories" },
      { name: "Federmobili", role: "Federazione mobile italiana", url: "https://www.federmobili.it" },
      { name: "Memento", role: "Oggetti d'autore" },
      { name: "FG Art Design", role: "Arte e quadri custom" },
      { name: "London Art", role: "Carte da parati", url: "https://www.londonart.it" },
    ],
  },
  {
    category: "Verde e ambiente",
    description:
      "Pareti vegetali, fragranze, oggetti che riportano la natura dentro casa.",
    brands: [
      { name: "VerdeProfilo", role: "Pareti vegetali e moss design", url: "https://www.verdeprofilo.com" },
      { name: "Serafino Zani", role: "Strumenti di cucina di design", url: "https://www.serafinozani.it" },
      { name: "Euwork", role: "Soluzioni tecnologiche cucina" },
    ],
  },
];

export default function DuriniDesignPage() {
  return (
    <main className="relative bg-binova-black">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[90svh] min-h-[560px] max-md:min-h-[500px] overflow-hidden bg-binova-black">
        <Image
          src="/images/showroom/showroom-1.jpg"
          alt="Durini Design District — Milano"
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
            <span className="text-binova-bone">Durini Design</span>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold-soft">
              · Il distretto del design
            </span>
            <h1 className="font-display text-[clamp(2.8rem,7vw,7rem)] max-md:text-[clamp(2.4rem,11vw,4rem)] font-light leading-[0.95] tracking-tight text-binova-bone drop-shadow-[0_4px_40px_rgba(0,0,0,0.5)]">
              Non lavoriamo{" "}
              <span className="italic text-binova-gold-soft">da soli.</span>
            </h1>
          </div>

          <p className="max-w-2xl text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-binova-bone/85">
            Lo showroom di Via Durini è ospite di un ecosistema. Ventiquattro
            partner di filiera condividono con noi il distretto del design
            milanese — elettrodomestici, materiali, luce, arredo, ambiente.
          </p>
        </div>
      </section>

      {/* Intro copy */}
      <section className="bg-binova-ink px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto grid max-w-[1400px] gap-16 max-lg:gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7" data-reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · L'idea
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,3.5vw,3.5rem)] max-md:text-[clamp(1.7rem,7vw,2.6rem)] font-light leading-[1.05] tracking-tight text-binova-bone">
              Una cucina è la somma di centinaia di decisioni.
            </h2>
            <p className="mt-8 text-[clamp(1rem,1.1vw,1.1rem)] leading-relaxed text-binova-bone/70">
              Il forno, l'aspirazione, il rubinetto, il top, la luce sopra
              l'isola, le piastrelle del backsplash, le sedie attorno al
              tavolo. Per ognuna di queste decisioni Binova lavora con i
              brand più solidi e curati del mercato — non per riempire un
              listino, ma per garantire al committente coerenza nei
              materiali, nei tempi e nel post-vendita.
            </p>
            <p className="mt-4 text-[clamp(1rem,1.1vw,1.1rem)] leading-relaxed text-binova-bone/70">
              Tutti i partner qui sotto sono presenti in showroom: puoi
              vederli dal vivo, toccarli, parlare con i loro rappresentanti
              direttamente nelle giornate degli eventi.
            </p>
          </div>

          <aside className="lg:col-span-5" data-reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · Numeri
            </span>
            <ul className="mt-6 divide-y divide-white/[0.06] border-y border-white/[0.06]">
              <li className="flex items-baseline justify-between py-5">
                <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
                  Partner totali
                </span>
                <span className="font-display text-3xl text-binova-bone">24</span>
              </li>
              <li className="flex items-baseline justify-between py-5">
                <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
                  Categorie
                </span>
                <span className="font-display text-3xl text-binova-bone">6</span>
              </li>
              <li className="flex items-baseline justify-between py-5">
                <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
                  Eventi annui
                </span>
                <span className="font-display text-3xl text-binova-bone">12+</span>
              </li>
              <li className="flex items-baseline justify-between py-5">
                <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
                  Showroom
                </span>
                <span className="font-display text-3xl text-binova-bone">350 m²</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Partner directory by category */}
      <section className="bg-binova-black px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1400px]">
          <div data-reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · Directory
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,4rem)] max-md:text-[clamp(1.7rem,7vw,2.6rem)] font-light leading-[1] tracking-tight text-binova-bone">
              Tutti i{" "}
              <span className="italic text-binova-gold-soft">partner.</span>
            </h2>
          </div>

          <div className="mt-16 flex flex-col gap-20 max-md:gap-14">
            {groups.map((group) => (
              <div key={group.category} data-reveal>
                <div className="grid gap-6 border-t border-white/[0.06] pt-10 lg:grid-cols-12 lg:gap-12 lg:pt-12">
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-[clamp(1.6rem,2.4vw,2.2rem)] font-light leading-[1.1] text-binova-bone">
                      {group.category}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-binova-bone/55">
                      {group.description}
                    </p>
                  </div>

                  <ul className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 lg:col-span-8 lg:gap-x-10 lg:gap-y-8">
                    {group.brands.map((brand) => (
                      <li key={brand.name} className="flex flex-col gap-1.5">
                        {brand.url ? (
                          <a
                            href={brand.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-baseline gap-3 transition-colors hover:text-binova-gold-soft"
                          >
                            <span className="font-display text-xl text-binova-bone group-hover:text-binova-gold-soft transition-colors lg:text-2xl">
                              {brand.name}
                            </span>
                            <span aria-hidden className="text-binova-bone/30 transition-colors group-hover:text-binova-gold">
                              ↗
                            </span>
                          </a>
                        ) : (
                          <span className="font-display text-xl text-binova-bone lg:text-2xl">
                            {brand.name}
                          </span>
                        )}
                        <span className="text-[11px] uppercase tracking-[0.28em] text-binova-bone/50">
                          {brand.role}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contacts />
      <Footer />
    </main>
  );
}
