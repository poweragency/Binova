import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contacts from "@/components/sections/Contacts";

type Locale = "it" | "en";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "press" });
  return {
    title: "Press · Binova",
    description: t("tagline"),
  };
}

type Article = {
  publication: string;
  date: string;
  headline: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  url?: string;
};

const featured: Article[] = [
  {
    publication: "Elle Décor",
    date: "2026",
    url: "https://www.elledecor.com",
    headline: {
      it: "Binova al Salone del Mobile: l'arte di scolpire la cucina",
      en: "Binova at the Salone del Mobile: the art of sculpting the kitchen",
    },
    excerpt: {
      it: "La presentazione delle nuove collezioni Avola e Bluna 2026 si articola tra venature di Sahara Noir, ottoni bruniti e vetrine integrate. Una lezione di sottrazione applicata al progetto domestico.",
      en: "The presentation of the new Avola and Bluna 2026 collections is articulated between Sahara Noir veining, burnished brass and integrated glass cabinets. A lesson in subtraction applied to the domestic project.",
    },
  },
  {
    publication: "Domus",
    date: "2026",
    url: "https://www.domusweb.it",
    headline: {
      it: "L'architettura del riempire: visita allo showroom di Via Durini",
      en: "The architecture of filling: a visit to the Via Durini showroom",
    },
    excerpt: {
      it: "350 m² nel cuore del Durini Design District. Il flagship Binova ridefinisce il concept del showroom come laboratorio aperto agli architetti, non come vetrina di prodotto.",
      en: "350 m² in the heart of the Durini Design District. The Binova flagship redefines the showroom as an open laboratory for architects, not as a product display.",
    },
  },
  {
    publication: "Marie Claire Maison",
    date: "2025",
    headline: {
      it: "Cucine d'autore: il ritorno del marmo Calacatta in Vesta",
      en: "Signature kitchens: the return of Calacatta marble in Vesta",
    },
    excerpt: {
      it: "Lastre dal pavimento al soffitto, isole monolitiche, elettrodomestici Miele integrati. Vesta è la collezione che dichiara senza esitazioni la propria preferenza per il monumentale.",
      en: "Floor-to-ceiling slabs, monolithic islands, integrated Miele appliances. Vesta is the collection that declares its preference for the monumental without hesitation.",
    },
  },
];

const archive: Article[] = [
  {
    publication: "Pambianco Design",
    date: "2024",
    headline: {
      it: "Italian Design Brands debutta nelle cucine con Binova e Miton",
      en: "Italian Design Brands enters the kitchen sector with Binova and Miton",
    },
    excerpt: {
      it: "Closing dell'acquisizione di Cubo Design. IDB entra nel segmento cucina con due brand complementari: Binova per l'alto di gamma, Miton per la fascia 'democratica'.",
      en: "Closing of the Cubo Design acquisition. IDB enters the kitchen segment with two complementary brands: Binova in the high-end and Miton in the 'democratic' segment.",
    },
  },
  {
    publication: "Ambiente Cucina",
    date: "2024",
    headline: {
      it: "Binova, l'artigianalità 4.0",
      en: "Binova, craftsmanship 4.0",
    },
    excerpt: {
      it: "Reportage da Factory-One a Notaresco: 25.000 m² dove la precisione del CNC convive con il giudizio dell'artigiano. Ogni cucina passa entrambe le mani.",
      en: "Report from Factory-One in Notaresco: 25,000 m² where CNC precision lives alongside the judgement of the artisan. Every kitchen passes through both hands.",
    },
  },
  {
    publication: "Ambiente Cucina · Design Week",
    date: "2024",
    headline: {
      it: "Showcooking nello showroom: Binova × Roberto Valbuzzi",
      en: "Showcooking in the showroom: Binova × Roberto Valbuzzi",
    },
    excerpt: {
      it: "Cena live durante la Milano Design Week. Lo Chef Valbuzzi cucina nelle linee Bluna, dimostrando l'ergonomia delle altezze libere Mantis fino al soffitto.",
      en: "Live dinner during Milan Design Week. Chef Valbuzzi cooks in the Bluna line, demonstrating the ergonomics of Mantis floor-to-ceiling heights.",
    },
  },
  {
    publication: "Corriere della Sera",
    date: "2023",
    headline: {
      it: "Made in Italy del lusso: la cucina come architettura",
      en: "Luxury Made in Italy: the kitchen as architecture",
    },
    excerpt: {
      it: "Reportage sul Durini Design District. Binova citata fra i brand che hanno rilanciato il distretto milanese del design dopo la pandemia.",
      en: "Report on the Durini Design District. Binova cited among the brands that have relaunched the Milan design district after the pandemic.",
    },
  },
  {
    publication: "Cucine d'Italia",
    date: "2023",
    headline: {
      it: "Le collezioni 2023 di Binova: sostenibilità + 22 finiture",
      en: "The 2023 Binova collections: sustainability + 22 finishes",
    },
    excerpt: {
      it: "Anteprima del catalogo: rivestimenti laterali curvi, vetrine Zen nelle basi, legni compositi sostenibili rinnovati, laminati acrilici effetto vetro pluripremiati.",
      en: "Catalogue preview: curved side cladding, Zen glass cabinets in the bases, renewed sustainable composite woods, multi-award-winning glass-effect acrylic laminates.",
    },
  },
  {
    publication: "Pambianco Design",
    date: "2022",
    headline: {
      it: "Cucine d'autore: Cubo Design archivia il 2022 a 55,7 milioni",
      en: "Signature kitchens: Cubo Design closes 2022 at 55.7 million",
    },
    excerpt: {
      it: "Bilancio 2022 di Cubo Design (Binova + Miton): ricavi a 55,7 milioni, conferma del trend di crescita post-pandemia nel segmento cucina premium.",
      en: "2022 Cubo Design (Binova + Miton) financials: revenues at 55.7 million, confirming the post-pandemic growth trend in the premium kitchen segment.",
    },
  },
];

export default async function PressPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  setRequestLocale(rawLocale);
  const locale = rawLocale as Locale;
  const t = await getTranslations("press");
  const tNav = await getTranslations("nav");

  return (
    <main className="relative bg-binova-black">
      <Navbar />

      <section className="relative h-[90svh] min-h-[560px] max-md:min-h-[500px] overflow-hidden bg-binova-black">
        <Image
          src="/images/heritage/atmosphere-1.jpg"
          alt="Binova press"
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
            <span className="text-binova-bone">{tNav("press")}</span>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold-soft">
              · {t("eyebrow")}
            </span>
            <h1 className="font-display text-[clamp(2.8rem,7vw,7rem)] max-md:text-[clamp(2.4rem,11vw,4rem)] font-light leading-[0.95] tracking-tight text-binova-bone drop-shadow-[0_4px_40px_rgba(0,0,0,0.5)]">
              {t("titleLine1")}{" "}
              <span className="italic text-binova-gold-soft">{t("titleItalic")}</span>
            </h1>
          </div>

          <p className="max-w-2xl text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-binova-bone/85">
            {t("tagline")}
          </p>
        </div>
      </section>

      <section className="bg-binova-ink px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between" data-reveal>
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
                · {t("featuredEyebrow")}
              </span>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,4rem)] max-md:text-[clamp(1.7rem,7vw,2.6rem)] font-light leading-[1.05] tracking-tight text-binova-bone">
                {t("featuredTitleLine1")}{" "}
                <span className="italic text-binova-gold-soft">{t("featuredItalic")}</span>
              </h2>
            </div>
            <p className="max-w-md text-binova-bone/60">
              {t("featuredIntro")}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 max-md:gap-8 md:grid-cols-3 lg:gap-14">
            {featured.map((article) => (
              <article key={article.headline.en} className="flex flex-col gap-5" data-reveal>
                <div className="flex items-baseline justify-between border-b border-white/[0.08] pb-3">
                  <span className="font-display text-[clamp(1rem,1.3vw,1.2rem)] tracking-tight text-binova-bone">
                    {article.publication}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/50">
                    {article.date}
                  </span>
                </div>
                <h3 className="font-display text-[clamp(1.4rem,2vw,1.8rem)] font-light leading-[1.15] text-binova-bone">
                  {article.headline[locale]}
                </h3>
                <p className="text-sm leading-relaxed text-binova-bone/60">
                  {article.excerpt[locale]}
                </p>
                {article.url && (
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-binova-gold-soft hover:text-binova-gold transition-colors"
                  >
                    {t("readArticle")}
                    <span aria-hidden>↗</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-binova-black px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between" data-reveal>
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
                · {t("archiveEyebrow")}
              </span>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,4rem)] max-md:text-[clamp(1.7rem,7vw,2.6rem)] font-light leading-[1] tracking-tight text-binova-bone">
                {t("archiveTitleLine1")}{" "}
                <span className="italic text-binova-gold-soft">{t("archiveItalic")}</span>
              </h2>
            </div>
            <p className="max-w-md text-binova-bone/60">
              {t("archiveIntro")}
            </p>
          </div>

          <ul className="mt-16 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {archive.map((article) => (
              <li key={article.headline.en} className="grid grid-cols-12 items-baseline gap-4 py-6 lg:py-7" data-reveal>
                <span className="col-span-2 font-display text-sm text-binova-gold-soft lg:text-base">
                  {article.date}
                </span>
                <div className="col-span-10 flex flex-col gap-2 lg:col-span-10 lg:flex-row lg:items-baseline lg:gap-8">
                  <span className="font-display text-[clamp(1rem,1.3vw,1.2rem)] tracking-tight text-binova-bone lg:min-w-[15rem]">
                    {article.publication}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-xl font-light leading-[1.2] text-binova-bone lg:text-2xl">
                      {article.headline[locale]}
                    </h3>
                    <p className="text-sm text-binova-bone/55 lg:text-[15px]">
                      {article.excerpt[locale]}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-16 max-w-2xl text-center text-binova-bone/55 mx-auto" data-reveal>
            {t("pressInquiry")}{" "}
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
