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
  const t = await getTranslations({ locale, namespace: "durini" });
  return {
    title: "Durini Design · Binova",
    description: t("tagline"),
  };
}

type Partner = {
  name: string;
  role: Localized;
  url?: string;
};

type CategoryKey =
  | "appliances"
  | "taps"
  | "surfaces"
  | "lighting"
  | "living"
  | "ambient";

const partnerGroups: { key: CategoryKey; brands: Partner[] }[] = [
  {
    key: "appliances",
    brands: [
      { name: "Miele", url: "https://www.miele.it", role: { it: "Generation 7000 ad incasso", en: "Generation 7000 built-in", de: "Generation 7000 zum Einbauen", es: "Generation 7000 empotrado", fr: "Generation 7000 encastrable" } },
      { name: "Bertazzoni", url: "https://www.bertazzoni.com", role: { it: "Master Series italiana", en: "Italian Master Series", de: "Italienische Master Series", es: "Master Series italiana", fr: "Master Series italienne" } },
      { name: "Wolf", url: "https://www.subzero-wolf.com", role: { it: "Cottura professionale USA", en: "US professional cooking", de: "US-Profi-Kochkunst", es: "Cocción profesional USA", fr: "Cuisson professionnelle USA" } },
      { name: "V-Zug", url: "https://www.vzug.com", role: { it: "Vapore + steam svizzero", en: "Swiss steam cooking", de: "Schweizer Dampfgaren", es: "Cocción al vapor suiza", fr: "Cuisson vapeur suisse" } },
      { name: "Sub-Zero", url: "https://www.subzero-wolf.com", role: { it: "Refrigerazione integrata", en: "Integrated refrigeration", de: "Integrierte Kühlung", es: "Refrigeración integrada", fr: "Réfrigération intégrée" } },
      { name: "Bora", url: "https://www.bora.com", role: { it: "Aspirazione a induzione", en: "Induction extraction", de: "Induktionsabzug", es: "Extracción por inducción", fr: "Aspiration par induction" } },
    ],
  },
  {
    key: "taps",
    brands: [
      { name: "Quooker", url: "https://www.quooker.it", role: { it: "Acqua bollente istantanea", en: "Instant boiling water", de: "Sofort kochendes Wasser", es: "Agua hirviendo instantánea", fr: "Eau bouillante instantanée" } },
      { name: "Nobili", url: "https://www.nobili.it", role: { it: "Rubinetteria di design italiana", en: "Italian designer taps", de: "Italienische Designer-Armaturen", es: "Grifería de diseño italiana", fr: "Robinetterie design italienne" } },
      { name: "MGS", url: "https://www.mgstaps.com", role: { it: "Acciaio scolpito", en: "Sculpted stainless steel", de: "Skulptierter Edelstahl", es: "Acero esculpido", fr: "Acier sculpté" } },
    ],
  },
  {
    key: "surfaces",
    brands: [
      { name: "Neolith", url: "https://www.neolith.com", role: { it: "Sintered stone XXL", en: "XXL sintered stone", de: "XXL gesinterter Stein", es: "Piedra sinterizada XXL", fr: "Pierre frittée XXL" } },
      { name: "Marazzi", url: "https://www.marazzi.it", role: { it: "Ceramica e grès di firma", en: "Signature ceramics and stoneware", de: "Signature-Keramik und Steingut", es: "Cerámica y gres de firma", fr: "Céramique et grès de signature" } },
      { name: "Made a Mano", url: "https://www.madeamano.com", role: { it: "Maioliche artigianali", en: "Handmade majolica", de: "Handgefertigte Majolika", es: "Mayólicas artesanales", fr: "Majoliques artisanales" } },
      { name: "Locherber Milano", url: "https://www.locherbermilano.com", role: { it: "Profumi d'ambiente", en: "Home fragrances", de: "Raumdüfte", es: "Perfumes de ambiente", fr: "Parfums d'ambiance" } },
    ],
  },
  {
    key: "lighting",
    brands: [
      { name: "Panzeri", url: "https://www.panzeri.it", role: { it: "Storico partner illuminazione", en: "Historic lighting partner", de: "Historischer Lichtpartner", es: "Histórico partner de iluminación", fr: "Partenaire lumière historique" } },
    ],
  },
  {
    key: "living",
    brands: [
      { name: "Miniforms", url: "https://www.miniforms.com", role: { it: "Arredo e complementi", en: "Furniture and accessories", de: "Möbel und Accessoires", es: "Mobiliario y complementos", fr: "Mobilier et accessoires" } },
      { name: "Colico", url: "https://www.colicodesign.com", role: { it: "Sedie e sgabelli di design", en: "Designer chairs and stools", de: "Designer-Stühle und -Hocker", es: "Sillas y taburetes de diseño", fr: "Chaises et tabourets design" } },
      { name: "Emporio Zani", role: { it: "Curated home accessories", en: "Curated home accessories", de: "Kuratierte Wohnaccessoires", es: "Accesorios de hogar seleccionados", fr: "Accessoires maison sélectionnés" } },
      { name: "Federmobili", url: "https://www.federmobili.it", role: { it: "Federazione mobile italiana", en: "Italian furniture federation", de: "Italienischer Möbelverband", es: "Federación italiana de mobiliario", fr: "Fédération italienne du mobilier" } },
      { name: "Memento", role: { it: "Oggetti d'autore", en: "Signature objects", de: "Signature-Objekte", es: "Objetos de autor", fr: "Objets de signature" } },
      { name: "FG Art Design", role: { it: "Arte e quadri custom", en: "Custom art and paintings", de: "Maßgeschneiderte Kunst und Bilder", es: "Arte y cuadros a medida", fr: "Art et tableaux sur mesure" } },
      { name: "London Art", url: "https://www.londonart.it", role: { it: "Carte da parati", en: "Wallpaper", de: "Tapeten", es: "Papeles pintados", fr: "Papiers peints" } },
    ],
  },
  {
    key: "ambient",
    brands: [
      { name: "VerdeProfilo", url: "https://www.verdeprofilo.com", role: { it: "Pareti vegetali e moss design", en: "Living walls and moss design", de: "Pflanzenwände und Moos-Design", es: "Paredes vegetales y diseño de musgo", fr: "Murs végétaux et moss design" } },
      { name: "Serafino Zani", url: "https://www.serafinozani.it", role: { it: "Strumenti di cucina di design", en: "Designer kitchen tools", de: "Designer-Küchenutensilien", es: "Utensilios de cocina de diseño", fr: "Ustensiles de cuisine design" } },
      { name: "Euwork", role: { it: "Soluzioni tecnologiche cucina", en: "Kitchen technology solutions", de: "Küchentechnologie-Lösungen", es: "Soluciones tecnológicas de cocina", fr: "Solutions technologiques cuisine" } },
    ],
  },
];

export default async function DuriniDesignPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  setRequestLocale(rawLocale);
  const locale = rawLocale as LocaleKey;
  const t = await getTranslations("durini");
  const tNav = await getTranslations("nav");

  return (
    <main className="relative bg-binova-black">
      <Navbar />

      <section className="relative h-[90svh] min-h-[560px] max-md:min-h-[500px] overflow-hidden bg-binova-black">
        <Image
          src="/images/showroom/showroom-1.jpg"
          alt="Durini Design District — Milan"
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
            <span className="text-binova-bone">{tNav("duriniDesign")}</span>
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
        <div className="mx-auto grid max-w-[1400px] gap-16 max-lg:gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7" data-reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · {t("ideaEyebrow")}
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,3.5vw,3.5rem)] max-md:text-[clamp(1.7rem,7vw,2.6rem)] font-light leading-[1.05] tracking-tight text-binova-bone">
              {t("ideaTitle")}
            </h2>
            <p className="mt-8 text-[clamp(1rem,1.1vw,1.1rem)] leading-relaxed text-binova-bone/70">
              {t("ideaBody1")}
            </p>
            <p className="mt-4 text-[clamp(1rem,1.1vw,1.1rem)] leading-relaxed text-binova-bone/70">
              {t("ideaBody2")}
            </p>
          </div>

          <aside className="lg:col-span-5" data-reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · {t("numbersEyebrow")}
            </span>
            <ul className="mt-6 divide-y divide-white/[0.06] border-y border-white/[0.06]">
              <li className="flex items-baseline justify-between py-5">
                <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
                  {t("numbers.totalPartners")}
                </span>
                <span className="font-display text-3xl text-binova-bone">24</span>
              </li>
              <li className="flex items-baseline justify-between py-5">
                <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
                  {t("numbers.categories")}
                </span>
                <span className="font-display text-3xl text-binova-bone">6</span>
              </li>
              <li className="flex items-baseline justify-between py-5">
                <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
                  {t("numbers.annualEvents")}
                </span>
                <span className="font-display text-3xl text-binova-bone">12+</span>
              </li>
              <li className="flex items-baseline justify-between py-5">
                <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
                  {t("numbers.showroomLabel")}
                </span>
                <span className="font-display text-3xl text-binova-bone">350 m²</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-binova-black px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1400px]">
          <div data-reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · {t("directoryEyebrow")}
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,4rem)] max-md:text-[clamp(1.7rem,7vw,2.6rem)] font-light leading-[1] tracking-tight text-binova-bone">
              {t("directoryTitleLine1")}{" "}
              <span className="italic text-binova-gold-soft">{t("directoryItalic")}</span>
            </h2>
          </div>

          <div className="mt-16 flex flex-col gap-20 max-md:gap-14">
            {partnerGroups.map((group) => (
              <div key={group.key} data-reveal>
                <div className="grid gap-6 border-t border-white/[0.06] pt-10 lg:grid-cols-12 lg:gap-12 lg:pt-12">
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-[clamp(1.6rem,2.4vw,2.2rem)] font-light leading-[1.1] text-binova-bone">
                      {t(`categories.${group.key}.title`)}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-binova-bone/55">
                      {t(`categories.${group.key}.desc`)}
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
                          {pick(brand.role, locale)}
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
