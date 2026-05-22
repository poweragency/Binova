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
  const t = await getTranslations({ locale, namespace: "press" });
  return {
    title: "Press · Binova",
    description: t("tagline"),
  };
}

type Article = {
  publication: string;
  date: string;
  headline: Localized;
  excerpt: Localized;
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
      de: "Binova auf dem Salone del Mobile: die Kunst, die Küche zu skulptieren",
      es: "Binova en el Salone del Mobile: el arte de esculpir la cocina",
      fr: "Binova au Salone del Mobile : l'art de sculpter la cuisine",
    },
    excerpt: {
      it: "La presentazione delle nuove collezioni Avola e Bluna 2026 si articola tra venature di Sahara Noir, ottoni bruniti e vetrine integrate. Una lezione di sottrazione applicata al progetto domestico.",
      en: "The presentation of the new Avola and Bluna 2026 collections is articulated between Sahara Noir veining, burnished brass and integrated glass cabinets. A lesson in subtraction applied to the domestic project.",
      de: "Die Präsentation der neuen Kollektionen Avola und Bluna 2026 entfaltet sich zwischen Sahara-Noir-Maserung, brüniertem Messing und integrierten Vitrinen. Eine Lektion in Subtraktion, angewandt auf das häusliche Projekt.",
      es: "La presentación de las nuevas colecciones Avola y Bluna 2026 se articula entre vetas de Sahara Noir, latones bruñidos y vitrinas integradas. Una lección de sustracción aplicada al proyecto doméstico.",
      fr: "La présentation des nouvelles collections Avola et Bluna 2026 s'articule entre veinures de Sahara Noir, laitons brunis et vitrines intégrées. Une leçon de soustraction appliquée au projet domestique.",
    },
  },
  {
    publication: "Domus",
    date: "2026",
    url: "https://www.domusweb.it",
    headline: {
      it: "L'architettura del riempire: visita allo showroom di Via Durini",
      en: "The architecture of filling: a visit to the Via Durini showroom",
      de: "Die Architektur des Füllens: ein Besuch im Showroom in der Via Durini",
      es: "La arquitectura del llenar: visita al showroom de Via Durini",
      fr: "L'architecture du remplir : visite du showroom de la Via Durini",
    },
    excerpt: {
      it: "350 m² nel cuore del Durini Design District. Il flagship Binova ridefinisce il concept del showroom come laboratorio aperto agli architetti, non come vetrina di prodotto.",
      en: "350 m² in the heart of the Durini Design District. The Binova flagship redefines the showroom as an open laboratory for architects, not as a product display.",
      de: "350 m² im Herzen des Durini Design District. Der Binova-Flagship-Store definiert den Showroom neu als offenes Labor für Architekten und nicht als Produktvitrine.",
      es: "350 m² en el corazón del Durini Design District. El flagship Binova redefine el concepto de showroom como laboratorio abierto a los arquitectos, no como escaparate de producto.",
      fr: "350 m² au cœur du Durini Design District. Le flagship Binova redéfinit le concept du showroom comme laboratoire ouvert aux architectes, et non comme vitrine produit.",
    },
  },
  {
    publication: "Marie Claire Maison",
    date: "2025",
    headline: {
      it: "Cucine d'autore: il ritorno del marmo Calacatta in Vesta",
      en: "Signature kitchens: the return of Calacatta marble in Vesta",
      de: "Signatur-Küchen: die Rückkehr des Calacatta-Marmors in Vesta",
      es: "Cocinas de autor: el regreso del mármol Calacatta en Vesta",
      fr: "Cuisines d'auteur : le retour du marbre Calacatta dans Vesta",
    },
    excerpt: {
      it: "Lastre dal pavimento al soffitto, isole monolitiche, elettrodomestici Miele integrati. Vesta è la collezione che dichiara senza esitazioni la propria preferenza per il monumentale.",
      en: "Floor-to-ceiling slabs, monolithic islands, integrated Miele appliances. Vesta is the collection that declares its preference for the monumental without hesitation.",
      de: "Platten vom Boden bis zur Decke, monolithische Inseln, integrierte Miele-Geräte. Vesta ist die Kollektion, die ihre Vorliebe für das Monumentale ohne Zögern erklärt.",
      es: "Losas del suelo al techo, islas monolíticas, electrodomésticos Miele integrados. Vesta es la colección que declara sin titubeos su preferencia por lo monumental.",
      fr: "Dalles du sol au plafond, îlots monolithiques, électroménagers Miele intégrés. Vesta est la collection qui déclare sans hésitation sa préférence pour le monumental.",
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
      de: "Italian Design Brands tritt mit Binova und Miton in den Küchensektor ein",
      es: "Italian Design Brands debuta en cocinas con Binova y Miton",
      fr: "Italian Design Brands fait ses débuts dans la cuisine avec Binova et Miton",
    },
    excerpt: {
      it: "Closing dell'acquisizione di Cubo Design. IDB entra nel segmento cucina con due brand complementari: Binova per l'alto di gamma, Miton per la fascia 'democratica'.",
      en: "Closing of the Cubo Design acquisition. IDB enters the kitchen segment with two complementary brands: Binova in the high-end and Miton in the 'democratic' segment.",
      de: "Abschluss der Übernahme von Cubo Design. IDB tritt mit zwei komplementären Marken in das Küchensegment ein: Binova im High-End und Miton im 'demokratischen' Segment.",
      es: "Cierre de la adquisición de Cubo Design. IDB entra en el segmento cocina con dos marcas complementarias: Binova para la gama alta, Miton para la franja 'democrática'.",
      fr: "Closing de l'acquisition de Cubo Design. IDB entre dans le segment cuisine avec deux marques complémentaires : Binova pour le haut de gamme, Miton pour le segment 'démocratique'.",
    },
  },
  {
    publication: "Ambiente Cucina",
    date: "2024",
    headline: {
      it: "Binova, l'artigianalità 4.0",
      en: "Binova, craftsmanship 4.0",
      de: "Binova, Handwerk 4.0",
      es: "Binova, la artesanía 4.0",
      fr: "Binova, l'artisanat 4.0",
    },
    excerpt: {
      it: "Reportage da Factory-One a Notaresco: 25.000 m² dove la precisione del CNC convive con il giudizio dell'artigiano. Ogni cucina passa entrambe le mani.",
      en: "Report from Factory-One in Notaresco: 25,000 m² where CNC precision lives alongside the judgement of the artisan. Every kitchen passes through both hands.",
      de: "Reportage aus Factory-One in Notaresco: 25.000 m², wo CNC-Präzision neben dem Urteil des Handwerkers existiert. Jede Küche durchläuft beide Hände.",
      es: "Reportaje desde Factory-One en Notaresco: 25.000 m² donde la precisión del CNC convive con el criterio del artesano. Cada cocina pasa por ambas manos.",
      fr: "Reportage depuis Factory-One à Notaresco : 25 000 m² où la précision de la CNC cohabite avec le jugement de l'artisan. Chaque cuisine passe par les deux mains.",
    },
  },
  {
    publication: "Ambiente Cucina · Design Week",
    date: "2024",
    headline: {
      it: "Showcooking nello showroom: Binova × Roberto Valbuzzi",
      en: "Showcooking in the showroom: Binova × Roberto Valbuzzi",
      de: "Showcooking im Showroom: Binova × Roberto Valbuzzi",
      es: "Showcooking en el showroom: Binova × Roberto Valbuzzi",
      fr: "Showcooking au showroom : Binova × Roberto Valbuzzi",
    },
    excerpt: {
      it: "Cena live durante la Milano Design Week. Lo Chef Valbuzzi cucina nelle linee Bluna, dimostrando l'ergonomia delle altezze libere Mantis fino al soffitto.",
      en: "Live dinner during Milan Design Week. Chef Valbuzzi cooks in the Bluna line, demonstrating the ergonomics of Mantis floor-to-ceiling heights.",
      de: "Live-Dinner während der Milan Design Week. Küchenchef Valbuzzi kocht in der Bluna-Linie und demonstriert die Ergonomie der Mantis-Höhen vom Boden bis zur Decke.",
      es: "Cena en vivo durante la Milán Design Week. El chef Valbuzzi cocina en las líneas Bluna, demostrando la ergonomía de las alturas libres Mantis hasta el techo.",
      fr: "Dîner live pendant la Milan Design Week. Le chef Valbuzzi cuisine dans les lignes Bluna, démontrant l'ergonomie des hauteurs libres Mantis jusqu'au plafond.",
    },
  },
  {
    publication: "Corriere della Sera",
    date: "2023",
    headline: {
      it: "Made in Italy del lusso: la cucina come architettura",
      en: "Luxury Made in Italy: the kitchen as architecture",
      de: "Made in Italy des Luxus: die Küche als Architektur",
      es: "Made in Italy del lujo: la cocina como arquitectura",
      fr: "Made in Italy du luxe : la cuisine comme architecture",
    },
    excerpt: {
      it: "Reportage sul Durini Design District. Binova citata fra i brand che hanno rilanciato il distretto milanese del design dopo la pandemia.",
      en: "Report on the Durini Design District. Binova cited among the brands that have relaunched the Milan design district after the pandemic.",
      de: "Reportage über den Durini Design District. Binova wird unter den Marken erwähnt, die den Mailänder Designbezirk nach der Pandemie wiederbelebt haben.",
      es: "Reportaje sobre el Durini Design District. Binova citada entre las marcas que han relanzado el distrito del diseño milanés tras la pandemia.",
      fr: "Reportage sur le Durini Design District. Binova citée parmi les marques qui ont relancé le quartier du design milanais après la pandémie.",
    },
  },
  {
    publication: "Cucine d'Italia",
    date: "2023",
    headline: {
      it: "Le collezioni 2023 di Binova: sostenibilità + 22 finiture",
      en: "The 2023 Binova collections: sustainability + 22 finishes",
      de: "Die Binova-Kollektionen 2023: Nachhaltigkeit + 22 Oberflächen",
      es: "Las colecciones 2023 de Binova: sostenibilidad + 22 acabados",
      fr: "Les collections 2023 de Binova : durabilité + 22 finitions",
    },
    excerpt: {
      it: "Anteprima del catalogo: rivestimenti laterali curvi, vetrine Zen nelle basi, legni compositi sostenibili rinnovati, laminati acrilici effetto vetro pluripremiati.",
      en: "Catalogue preview: curved side cladding, Zen glass cabinets in the bases, renewed sustainable composite woods, multi-award-winning glass-effect acrylic laminates.",
      de: "Katalog-Vorschau: gebogene Seitenverkleidungen, Zen-Vitrinen in den Basen, erneuerte nachhaltige Verbundhölzer, mehrfach ausgezeichnete Acryllaminate mit Glaseffekt.",
      es: "Avance del catálogo: revestimientos laterales curvos, vitrinas Zen en las bases, maderas compuestas sostenibles renovadas, laminados acrílicos efecto vidrio multipremiados.",
      fr: "Avant-première du catalogue : revêtements latéraux courbes, vitrines Zen dans les bases, bois composites durables renouvelés, stratifiés acryliques effet verre multi-primés.",
    },
  },
  {
    publication: "Pambianco Design",
    date: "2022",
    headline: {
      it: "Cucine d'autore: Cubo Design archivia il 2022 a 55,7 milioni",
      en: "Signature kitchens: Cubo Design closes 2022 at 55.7 million",
      de: "Signatur-Küchen: Cubo Design schließt 2022 mit 55,7 Millionen ab",
      es: "Cocinas de autor: Cubo Design cierra 2022 con 55,7 millones",
      fr: "Cuisines d'auteur : Cubo Design clôture 2022 à 55,7 millions",
    },
    excerpt: {
      it: "Bilancio 2022 di Cubo Design (Binova + Miton): ricavi a 55,7 milioni, conferma del trend di crescita post-pandemia nel segmento cucina premium.",
      en: "2022 Cubo Design (Binova + Miton) financials: revenues at 55.7 million, confirming the post-pandemic growth trend in the premium kitchen segment.",
      de: "Bilanz 2022 von Cubo Design (Binova + Miton): Umsatz von 55,7 Millionen, Bestätigung des Wachstumstrends nach der Pandemie im Premium-Küchensegment.",
      es: "Balance 2022 de Cubo Design (Binova + Miton): ingresos de 55,7 millones, confirmación de la tendencia de crecimiento post-pandemia en el segmento cocina premium.",
      fr: "Bilan 2022 de Cubo Design (Binova + Miton) : revenus de 55,7 millions, confirmant la tendance de croissance post-pandémie dans le segment cuisine premium.",
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
  const locale = rawLocale as LocaleKey;
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
                  {pick(article.headline, locale)}
                </h3>
                <p className="text-sm leading-relaxed text-binova-bone/60">
                  {pick(article.excerpt, locale)}
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
                      {pick(article.headline, locale)}
                    </h3>
                    <p className="text-sm text-binova-bone/55 lg:text-[15px]">
                      {pick(article.excerpt, locale)}
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
