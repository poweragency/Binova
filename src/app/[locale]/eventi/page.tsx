import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contacts from "@/components/sections/Contacts";
import type { LocaleKey } from "@/data/collections";
import { type Localized, pick } from "@/data/localized";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "eventi" });
  return {
    title: "Events · Binova",
    description: t("tagline"),
  };
}

type FeaturedItem = {
  year: string;
  partner: string;
  image: string;
  title: Localized;
  desc: Localized;
};

const featured: FeaturedItem[] = [
  {
    year: "2023",
    partner: "Milano Design Week",
    image: "/images/eventi/laminam.jpg",
    title: {
      it: "Laminam per Binova",
      en: "Laminam for Binova",
      de: "Laminam für Binova",
      es: "Laminam para Binova",
      fr: "Laminam pour Binova",
    },
    desc: {
      it: "Le superfici Laminam in dialogo con le architetture Binova. Un'installazione dedicata alle grandi lastre e ai loro impieghi nella cucina contemporanea.",
      en: "Laminam surfaces in dialogue with Binova architectures. An installation dedicated to large slabs and their use in the contemporary kitchen.",
      de: "Laminam-Oberflächen im Dialog mit der Binova-Architektur. Eine Installation, die großen Platten und ihrer Verwendung in der zeitgenössischen Küche gewidmet ist.",
      es: "Las superficies Laminam en diálogo con las arquitecturas Binova. Una instalación dedicada a las grandes losas y a sus usos en la cocina contemporánea.",
      fr: "Les surfaces Laminam en dialogue avec les architectures Binova. Une installation dédiée aux grandes dalles et à leurs usages dans la cuisine contemporaine.",
    },
  },
  {
    year: "2023",
    partner: "Milano Design Week",
    image: "/images/eventi/xtone.jpg",
    title: {
      it: "Xtone per Binova",
      en: "Xtone for Binova",
      de: "Xtone für Binova",
      es: "Xtone para Binova",
      fr: "Xtone pour Binova",
    },
    desc: {
      it: "Il porcellanato di grande formato Xtone presentato negli ambienti dello showroom — top, schienali, rivestimenti integrali a sviluppo verticale.",
      en: "Xtone large-format porcelain presented in the showroom environments — worktops, backsplashes, integral vertical cladding.",
      de: "Großformatiges Xtone-Porzellan in den Showroom-Umgebungen präsentiert — Arbeitsplatten, Rückwände, integrale vertikale Verkleidungen.",
      es: "El porcelánico de gran formato Xtone presentado en los ambientes del showroom — encimeras, traseras, revestimientos integrales de desarrollo vertical.",
      fr: "La porcelaine grand format Xtone présentée dans les environnements du showroom — plans de travail, crédences, revêtements intégraux à développement vertical.",
    },
  },
  {
    year: "2023",
    partner: "Milano Design Week",
    image: "/images/eventi/bertazzoni.jpg",
    title: {
      it: "Bertazzoni per Binova",
      en: "Bertazzoni for Binova",
      de: "Bertazzoni für Binova",
      es: "Bertazzoni para Binova",
      fr: "Bertazzoni pour Binova",
    },
    desc: {
      it: "La Master Series Bertazzoni integrata nelle cucine Binova. Tecnologia professionale, estetica italiana, una sinergia naturale.",
      en: "The Bertazzoni Master Series integrated into Binova kitchens. Professional technology, Italian aesthetics, a natural synergy.",
      de: "Die Bertazzoni Master Series, integriert in Binova-Küchen. Professionelle Technologie, italienische Ästhetik, eine natürliche Synergie.",
      es: "La Master Series Bertazzoni integrada en las cocinas Binova. Tecnología profesional, estética italiana, una sinergia natural.",
      fr: "La Master Series Bertazzoni intégrée dans les cuisines Binova. Technologie professionnelle, esthétique italienne, une synergie naturelle.",
    },
  },
];

type ArchiveItem = {
  year: string;
  title: Localized;
  caption: Localized;
  image?: string;
};

const archive: ArchiveItem[] = [
  {
    year: "2022",
    image: "/images/eventi/valbuzzi.jpg",
    title: {
      it: "Live Dinner Experience",
      en: "Live Dinner Experience",
      de: "Live Dinner Experience",
      es: "Live Dinner Experience",
      fr: "Live Dinner Experience",
    },
    caption: {
      it: "Cena live con lo Chef Roberto Valbuzzi nello showroom di Via Durini.",
      en: "Live dinner with Chef Roberto Valbuzzi in the Via Durini showroom.",
      de: "Live-Dinner mit Küchenchef Roberto Valbuzzi im Showroom in der Via Durini.",
      es: "Cena en vivo con el chef Roberto Valbuzzi en el showroom de Via Durini.",
      fr: "Dîner live avec le chef Roberto Valbuzzi au showroom de la Via Durini.",
    },
  },
  {
    year: "2019",
    title: {
      it: "Binova with Petti",
      en: "Binova with Petti",
      de: "Binova mit Petti",
      es: "Binova con Petti",
      fr: "Binova avec Petti",
    },
    caption: {
      it: "Serata Petti dedicata alle conserve d'autore.",
      en: "Petti evening dedicated to signature preserves.",
      de: "Petti-Abend, gewidmet den Konserven der Autorenküche.",
      es: "Velada Petti dedicada a las conservas de autor.",
      fr: "Soirée Petti dédiée aux conserves d'auteur.",
    },
  },
  {
    year: "2019",
    image: "/images/eventi/vzug.jpg",
    title: {
      it: "Showcooking V-Zug",
      en: "V-Zug Showcooking",
      de: "V-Zug Showcooking",
      es: "Showcooking V-Zug",
      fr: "Showcooking V-Zug",
    },
    caption: {
      it: "Dimostrazione delle tecnologie di cottura V-Zug, 10 aprile 2019.",
      en: "Demonstration of V-Zug cooking technologies, 10 April 2019.",
      de: "Demonstration der V-Zug-Kochtechnologien, 10. April 2019.",
      es: "Demostración de las tecnologías de cocción V-Zug, 10 de abril de 2019.",
      fr: "Démonstration des technologies de cuisson V-Zug, 10 avril 2019.",
    },
  },
  {
    year: "2019",
    image: "/images/eventi/matteo-thun.jpg",
    title: {
      it: "Panzeri with Matteo Thun",
      en: "Panzeri with Matteo Thun",
      de: "Panzeri mit Matteo Thun",
      es: "Panzeri con Matteo Thun",
      fr: "Panzeri avec Matteo Thun",
    },
    caption: {
      it: "Talk con l'architetto Matteo Thun sulla luce nella cucina contemporanea.",
      en: "Talk with architect Matteo Thun on light in the contemporary kitchen.",
      de: "Gespräch mit Architekt Matteo Thun über das Licht in der zeitgenössischen Küche.",
      es: "Charla con el arquitecto Matteo Thun sobre la luz en la cocina contemporánea.",
      fr: "Conférence avec l'architecte Matteo Thun sur la lumière dans la cuisine contemporaine.",
    },
  },
  {
    year: "2018",
    title: {
      it: "Magico Vapore V-Zug",
      en: "V-Zug Magic Steam",
      de: "V-Zug Magic Steam",
      es: "Vapor mágico V-Zug",
      fr: "Vapeur magique V-Zug",
    },
    caption: {
      it: "Workshop sul vapore in cucina e i suoi impieghi nella ristorazione domestica.",
      en: "Workshop on steam in the kitchen and its uses in home cooking.",
      de: "Workshop über Dampf in der Küche und seine Anwendungen in der Hausgastronomie.",
      es: "Taller sobre el vapor en la cocina y sus usos en la restauración doméstica.",
      fr: "Atelier sur la vapeur en cuisine et ses usages en restauration domestique.",
    },
  },
  {
    year: "2018",
    image: "/images/eventi/eurocucina.jpg",
    title: {
      it: "Eurocucina",
      en: "Eurocucina",
      de: "Eurocucina",
      es: "Eurocucina",
      fr: "Eurocucina",
    },
    caption: {
      it: "Presenza Binova alla fiera Eurocucina con le novità 2018.",
      en: "Binova at the Eurocucina trade fair with the 2018 launches.",
      de: "Binova auf der Eurocucina-Messe mit den Neuheiten 2018.",
      es: "Presencia Binova en la feria Eurocucina con las novedades 2018.",
      fr: "Binova au salon Eurocucina avec les nouveautés 2018.",
    },
  },
  {
    year: "2018",
    title: {
      it: "Panzeri: Sfere. Rotazioni. Ritorni.",
      en: "Panzeri: Spheres. Rotations. Returns.",
      de: "Panzeri: Sphären. Rotationen. Rückkehr.",
      es: "Panzeri: Esferas. Rotaciones. Retornos.",
      fr: "Panzeri : Sphères. Rotations. Retours.",
    },
    caption: {
      it: "Installazione luminosa Panzeri nello showroom di Via Durini.",
      en: "Panzeri lighting installation at the Via Durini showroom.",
      de: "Panzeri-Lichtinstallation im Showroom in der Via Durini.",
      es: "Instalación luminosa Panzeri en el showroom de Via Durini.",
      fr: "Installation lumineuse Panzeri au showroom de la Via Durini.",
    },
  },
  {
    year: "2018",
    title: {
      it: "Cocktail Party Partners",
      en: "Cocktail Party Partners",
      de: "Cocktail Party Partners",
      es: "Cocktail Party Partners",
      fr: "Cocktail Party Partners",
    },
    caption: {
      it: "Serata dedicata ai partner di filiera, 20 aprile 2018.",
      en: "Evening dedicated to supply-chain partners, 20 April 2018.",
      de: "Abend für die Lieferkettenpartner, 20. April 2018.",
      es: "Velada dedicada a los partners de la cadena, 20 de abril de 2018.",
      fr: "Soirée dédiée aux partenaires de la filière, 20 avril 2018.",
    },
  },
  {
    year: "2018",
    title: {
      it: "Cocktail Party Asia",
      en: "Cocktail Party Asia",
      de: "Cocktail Party Asia",
      es: "Cocktail Party Asia",
      fr: "Cocktail Party Asia",
    },
    caption: {
      it: "Cena di rappresentanza per i partner asiatici, 19 aprile 2018.",
      en: "Dinner for Asian partners, 19 April 2018.",
      de: "Repräsentationsessen für die asiatischen Partner, 19. April 2018.",
      es: "Cena de representación para los partners asiáticos, 19 de abril de 2018.",
      fr: "Dîner de représentation pour les partenaires asiatiques, 19 avril 2018.",
    },
  },
  {
    year: "2018",
    title: {
      it: "Cocktail Party Official",
      en: "Cocktail Party Official",
      de: "Cocktail Party Official",
      es: "Cocktail Party Official",
      fr: "Cocktail Party Official",
    },
    caption: {
      it: "Apertura ufficiale Milano Design Week 2018.",
      en: "Official opening of Milan Design Week 2018.",
      de: "Offizielle Eröffnung der Milan Design Week 2018.",
      es: "Apertura oficial de la Milán Design Week 2018.",
      fr: "Ouverture officielle de la Milan Design Week 2018.",
    },
  },
  {
    year: "2018",
    title: {
      it: "Showcooking ZUG",
      en: "ZUG Showcooking",
      de: "ZUG Showcooking",
      es: "Showcooking ZUG",
      fr: "Showcooking ZUG",
    },
    caption: {
      it: "Dimostrazione cottura ZUG, 17 aprile 2018.",
      en: "ZUG cooking demonstration, 17 April 2018.",
      de: "ZUG-Kochdemonstration, 17. April 2018.",
      es: "Demostración de cocción ZUG, 17 de abril de 2018.",
      fr: "Démonstration de cuisson ZUG, 17 avril 2018.",
    },
  },
  {
    year: "—",
    title: {
      it: "Cocktail with Davide Oldani",
      en: "Cocktail with Davide Oldani",
      de: "Cocktail mit Davide Oldani",
      es: "Cóctel con Davide Oldani",
      fr: "Cocktail avec Davide Oldani",
    },
    caption: {
      it: "Serata con lo Chef Davide Oldani, cucina pop italiana.",
      en: "Evening with Chef Davide Oldani, Italian pop cuisine.",
      de: "Abend mit Küchenchef Davide Oldani, italienische Pop-Küche.",
      es: "Velada con el chef Davide Oldani, cocina pop italiana.",
      fr: "Soirée avec le chef Davide Oldani, cuisine pop italienne.",
    },
  },
  {
    year: "—",
    image: "/images/eventi/inaugurazione.jpg",
    title: {
      it: "Inaugurazione",
      en: "Inauguration",
      de: "Eröffnung",
      es: "Inauguración",
      fr: "Inauguration",
    },
    caption: {
      it: "Apertura ufficiale dello showroom Binova Milano in Via Durini 17.",
      en: "Official opening of the Binova Milan showroom in Via Durini 17.",
      de: "Offizielle Eröffnung des Binova-Showrooms in Mailand, Via Durini 17.",
      es: "Apertura oficial del showroom Binova Milán en Via Durini 17.",
      fr: "Ouverture officielle du showroom Binova Milan, Via Durini 17.",
    },
  },
];

export default async function EventiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  setRequestLocale(rawLocale);
  const locale = rawLocale as LocaleKey;
  const t = await getTranslations("eventi");
  const tNav = await getTranslations("nav");

  return (
    <main className="relative bg-binova-black">
      <Navbar />

      <section className="relative h-[90svh] min-h-[560px] max-md:min-h-[500px] overflow-hidden bg-binova-black">
        <Image
          src="/images/heritage/atmosphere-3.jpg"
          alt="Binova events"
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
            <span className="text-binova-bone">{tNav("events")}</span>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold-soft">
              · {t("eyebrow")}
            </span>
            <h1 className="font-display text-[clamp(2.8rem,7vw,7rem)] max-md:text-[clamp(2.4rem,11vw,4rem)] font-light leading-[0.95] tracking-tight text-binova-bone drop-shadow-[0_4px_40px_rgba(0,0,0,0.5)]">
              {t("titleLine1")}{" "}
              <span className="italic text-binova-gold-soft">
                {t("titleItalic")}
              </span>
            </h1>
          </div>

          <p className="max-w-2xl text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-binova-bone/85">
            {t("tagline")}
          </p>
        </div>
      </section>

      <section className="bg-binova-black px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
            · {t("featuredEyebrow")}
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,4rem)] max-md:text-[clamp(1.7rem,7vw,2.6rem)] font-light leading-[1.05] tracking-tight text-binova-bone">
            {t("featuredTitle")}{" "}
            <span className="italic text-binova-gold-soft">{t("featuredItalic")}</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-10 max-md:gap-8 md:grid-cols-3 lg:gap-12">
            {featured.map((event) => (
              <article key={event.title.en} className="flex flex-col gap-5">
                <div className="relative aspect-square w-full overflow-hidden border border-white/[0.06] bg-binova-stone">
                  <Image
                    src={event.image}
                    alt={pick(event.title, locale)}
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
                    {pick(event.title, locale)}
                  </h3>
                  <p className="text-sm leading-relaxed text-binova-bone/60">
                    {pick(event.desc, locale)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-binova-ink px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
                · {t("archiveEyebrow")}
              </span>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,4rem)] max-md:text-[clamp(1.7rem,7vw,2.6rem)] font-light leading-[1] tracking-tight text-binova-bone">
                {t("archiveTitle")}{" "}
                <span className="italic text-binova-gold-soft">{t("archiveItalic")}</span>
              </h2>
            </div>
            <p className="max-w-md text-binova-bone/60">
              {t("archiveIntro")}
            </p>
          </div>

          <ul className="mt-16 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {archive.map((event) => (
              <li
                key={event.title.en}
                className="grid grid-cols-12 items-start gap-4 py-6 lg:py-7"
              >
                <span className="col-span-2 font-display text-sm text-binova-gold-soft lg:text-base">
                  {event.year}
                </span>
                <div className="col-span-10 flex flex-col gap-2 lg:col-span-7 lg:flex-row lg:items-baseline lg:gap-8">
                  <h3 className="font-display text-xl font-light text-binova-bone lg:text-2xl lg:min-w-[18rem]">
                    {pick(event.title, locale)}
                  </h3>
                  <p className="text-sm text-binova-bone/55 lg:text-[15px]">
                    {pick(event.caption, locale)}
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
            {t("calendarCTA")}{" "}
            <a
              href="#contact"
              className="text-binova-gold-soft hover:text-binova-gold transition-colors"
            >
              {t("calendarLink")} →
            </a>
          </p>
        </div>
      </section>

      <Contacts />
      <Footer />
    </main>
  );
}
