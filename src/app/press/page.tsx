import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contacts from "@/components/sections/Contacts";

export const metadata: Metadata = {
  title: "Press · Binova",
  description:
    "Rassegna stampa Binova: Elle Décor, Domus, Marie Claire Maison, Pambianco Design, Ambiente Cucina, Corriere della Sera.",
};

type Article = {
  publication: string;
  date: string;
  headline: string;
  excerpt: string;
  url?: string;
};

const featured: Article[] = [
  {
    publication: "Elle Décor",
    date: "2026",
    headline: "Binova al Salone del Mobile: l'arte di scolpire la cucina",
    excerpt:
      "La presentazione delle nuove collezioni Avola e Bluna 2026 si articola tra venature di Sahara Noir, ottoni bruniti e vetrine integrate. Una lezione di sottrazione applicata al progetto domestico.",
    url: "https://www.elledecor.com",
  },
  {
    publication: "Domus",
    date: "2026",
    headline: "L'architettura del riempire: visita allo showroom di Via Durini",
    excerpt:
      "350 m² nel cuore del Durini Design District. Il flagship Binova ridefinisce il concept del showroom come laboratorio aperto agli architetti, non come vetrina di prodotto.",
    url: "https://www.domusweb.it",
  },
  {
    publication: "Marie Claire Maison",
    date: "2025",
    headline: "Cucine d'autore: il ritorno del marmo Calacatta in Vesta",
    excerpt:
      "Lastre dal pavimento al soffitto, isole monolitiche, elettrodomestici Miele integrati. Vesta è la collezione che dichiara senza esitazioni la propria preferenza per il monumentale.",
  },
];

const archive: Article[] = [
  {
    publication: "Pambianco Design",
    date: "2024",
    headline: "Italian Design Brands debutta nelle cucine con Binova e Miton",
    excerpt:
      "Closing dell'acquisizione di Cubo Design. IDB entra nel segmento cucina con due brand complementari: Binova per l'alto di gamma, Miton per la fascia 'democratica'.",
  },
  {
    publication: "Ambiente Cucina",
    date: "2024",
    headline: "Binova, l'artigianalità 4.0",
    excerpt:
      "Reportage da Factory-One a Notaresco: 25.000 m² dove la precisione del CNC convive con il giudizio dell'artigiano. Ogni cucina passa entrambe le mani.",
  },
  {
    publication: "Ambiente Cucina · Design Week",
    date: "2024",
    headline: "Showcooking nello showroom: Binova × Roberto Valbuzzi",
    excerpt:
      "Cena live durante la Milano Design Week. Lo Chef Valbuzzi cucina nelle linee Bluna, dimostrando l'ergonomia delle altezze libere Mantis fino al soffitto.",
  },
  {
    publication: "Corriere della Sera",
    date: "2023",
    headline: "Made in Italy del lusso: la cucina come architettura",
    excerpt:
      "Reportage sul Durini Design District. Binova citata fra i brand che hanno rilanciato il distretto milanese del design dopo la pandemia.",
  },
  {
    publication: "Cucine d'Italia",
    date: "2023",
    headline: "Le collezioni 2023 di Binova: sostenibilità + 22 finiture",
    excerpt:
      "Anteprima del catalogo: rivestimenti laterali curvi, vetrine Zen nelle basi, legni compositi sostenibili rinnovati, laminati acrilici effetto vetro pluripremiati.",
  },
  {
    publication: "Pambianco Design",
    date: "2022",
    headline: "Cucine d'autore: Cubo Design archivia il 2022 a 55,7 milioni",
    excerpt:
      "Bilancio 2022 di Cubo Design (Binova + Miton): ricavi a 55,7 milioni, conferma del trend di crescita post-pandemia nel segmento cucina premium.",
  },
];

export default function PressPage() {
  return (
    <main className="relative bg-binova-black">
      <Navbar />

      {/* Hero — full-bleed coerente con altre pagine */}
      <section className="relative h-[90svh] min-h-[560px] max-md:min-h-[500px] overflow-hidden bg-binova-black">
        <Image
          src="/images/heritage/atmosphere-1.jpg"
          alt="Press Binova"
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
            <span className="text-binova-bone">Press</span>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold-soft">
              · Rassegna stampa
            </span>
            <h1 className="font-display text-[clamp(2.8rem,7vw,7rem)] max-md:text-[clamp(2.4rem,11vw,4rem)] font-light leading-[0.95] tracking-tight text-binova-bone drop-shadow-[0_4px_40px_rgba(0,0,0,0.5)]">
              Quello che hanno scritto{" "}
              <span className="italic text-binova-gold-soft">di noi.</span>
            </h1>
          </div>

          <p className="max-w-2xl text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-binova-bone/85">
            Sessantasei anni di lavoro hanno lasciato traccia. Una
            selezione di articoli, reportage e interviste apparsi sulle
            principali testate italiane di design e lifestyle.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-binova-ink px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between" data-reveal>
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
                · In primo piano
              </span>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,4rem)] max-md:text-[clamp(1.7rem,7vw,2.6rem)] font-light leading-[1.05] tracking-tight text-binova-bone">
                Le testate{" "}
                <span className="italic text-binova-gold-soft">di riferimento.</span>
              </h2>
            </div>
            <p className="max-w-md text-binova-bone/60">
              Tre articoli che raccontano il momento attuale del brand:
              Salone 2026, showroom Milano, ritorno del marmo Calacatta.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 max-md:gap-8 md:grid-cols-3 lg:gap-14">
            {featured.map((article) => (
              <article key={article.headline} className="flex flex-col gap-5" data-reveal>
                <div className="flex items-baseline justify-between border-b border-white/[0.08] pb-3">
                  <span className="font-display text-[clamp(1rem,1.3vw,1.2rem)] tracking-tight text-binova-bone">
                    {article.publication}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/50">
                    {article.date}
                  </span>
                </div>
                <h3 className="font-display text-[clamp(1.4rem,2vw,1.8rem)] font-light leading-[1.15] text-binova-bone">
                  {article.headline}
                </h3>
                <p className="text-sm leading-relaxed text-binova-bone/60">
                  {article.excerpt}
                </p>
                {article.url && (
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-binova-gold-soft hover:text-binova-gold transition-colors"
                  >
                    Leggi l'articolo
                    <span aria-hidden>↗</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="bg-binova-black px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between" data-reveal>
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
                · Archivio
              </span>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,4rem)] max-md:text-[clamp(1.7rem,7vw,2.6rem)] font-light leading-[1] tracking-tight text-binova-bone">
                Tutti gli{" "}
                <span className="italic text-binova-gold-soft">articoli.</span>
              </h2>
            </div>
            <p className="max-w-md text-binova-bone/60">
              Articoli, reportage, interviste. Ordine cronologico
              dall'ultimo apparso.
            </p>
          </div>

          <ul className="mt-16 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {archive.map((article) => (
              <li key={article.headline} className="grid grid-cols-12 items-baseline gap-4 py-6 lg:py-7" data-reveal>
                <span className="col-span-2 font-display text-sm text-binova-gold-soft lg:text-base">
                  {article.date}
                </span>
                <div className="col-span-10 flex flex-col gap-2 lg:col-span-10 lg:flex-row lg:items-baseline lg:gap-8">
                  <span className="font-display text-[clamp(1rem,1.3vw,1.2rem)] tracking-tight text-binova-bone lg:min-w-[15rem]">
                    {article.publication}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-xl font-light leading-[1.2] text-binova-bone lg:text-2xl">
                      {article.headline}
                    </h3>
                    <p className="text-sm text-binova-bone/55 lg:text-[15px]">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-16 max-w-2xl text-center text-binova-bone/55 mx-auto" data-reveal>
            Sei un giornalista o autore? Per richieste stampa e
            collaborazioni editoriali scrivi a{" "}
            <a
              href="mailto:press@binovamilano.it"
              className="text-binova-gold-soft hover:text-binova-gold transition-colors"
            >
              press@binovamilano.it
            </a>
          </p>
        </div>
      </section>

      <Contacts />
      <Footer />
    </main>
  );
}
