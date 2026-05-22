import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { collections, getCollectionBySlug, CATALOG_PDF_URL, type LocaleKey } from "@/data/collections";
import { getMaterial } from "@/data/materials";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contacts from "@/components/sections/Contacts";
import GalleryLightbox from "@/components/GalleryLightbox";
import AccordionItem from "@/components/AccordionItem";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return { title: "Not found · Binova" };
  const text = collection.i18n[locale as LocaleKey] ?? collection.i18n.it;
  return {
    title: `${text.name} — Binova`,
    description: text.shortDesc,
    openGraph: {
      title: `${text.name} · Binova`,
      description: text.shortDesc,
      images: collection.image ? [collection.image] : [],
    },
  };
}

export default async function CollectionPage({ params }: Props) {
  const { slug, locale: rawLocale } = await params;
  setRequestLocale(rawLocale);
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const locale = rawLocale as LocaleKey;
  const text = collection.i18n[locale] ?? collection.i18n.it;
  const t = await getTranslations("cucine");
  const tCommon = await getTranslations("common");

  const currentIndex = collections.findIndex((c) => c.slug === collection.slug);
  const prev = collections[(currentIndex - 1 + collections.length) % collections.length];
  const next = collections[(currentIndex + 1) % collections.length];
  const prevText = prev.i18n[locale] ?? prev.i18n.it;
  const nextText = next.i18n[locale] ?? next.i18n.it;

  const longSentences = text.longDesc.split(". ");
  const firstSentence = longSentences[0] + ".";
  const restOfLong = longSentences.slice(1).join(". ");

  return (
    <main className="relative">
      <Navbar />

      <section className="relative h-[100svh] min-h-[640px] max-md:min-h-[560px] overflow-hidden bg-binova-black">
        {collection.image ? (
          <Image
            src={collection.image}
            alt={text.name}
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-stone-700 via-stone-800 to-stone-950" />
        )}

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
            <Link
              href="/#collections"
              className="hover:text-binova-bone transition-colors"
            >
              {t("breadcrumb")}
            </Link>
            <span className="text-binova-bone/30">/</span>
            <span className="text-binova-bone">{text.name}</span>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="font-display text-binova-gold-soft">
                {collection.code}
              </span>
              <span className="h-px w-12 bg-binova-gold/60" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-binova-bone/80">
                {text.tag}
              </span>
            </div>
            <h1 className="font-display text-[clamp(4rem,14vw,14rem)] max-md:text-[clamp(3.5rem,18vw,6rem)] font-light leading-[0.85] tracking-tight text-binova-bone drop-shadow-[0_4px_40px_rgba(0,0,0,0.5)]">
              {text.name}
            </h1>
          </div>

          <p className="max-w-2xl text-[clamp(1rem,1.3vw,1.2rem)] leading-relaxed text-binova-bone/85">
            {text.shortDesc}
          </p>
        </div>
      </section>

      <section className="bg-binova-ink px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto grid max-w-[1400px] gap-16 max-lg:gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · {t("identity")}
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-[1.05] tracking-tight text-binova-bone">
              {firstSentence}
            </h2>
            <p className="mt-8 text-[clamp(1rem,1.1vw,1.1rem)] leading-relaxed text-binova-bone/70">
              {restOfLong}
            </p>
          </div>

          <aside className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · {t("materials")}
            </span>
            <ul className="mt-6">
              {text.materials.map((m, idx) => {
                const canonical = collection.i18n.it.materials[idx] ?? m;
                const localized = getMaterial(canonical, locale);
                return (
                  <AccordionItem key={`${collection.slug}-${idx}-${canonical}`} title={localized.title}>
                    {localized.desc}
                  </AccordionItem>
                );
              })}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4 max-md:flex-col max-md:items-stretch">
              <a
                href="#contact"
                className="group inline-flex items-center justify-between gap-4 border border-binova-bone/30 px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-binova-bone transition-all duration-500 hover:border-binova-gold hover:text-binova-gold max-md:px-6"
              >
                {tCommon("requestKitchen", { name: text.name })}
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href={CATALOG_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-2 py-3 text-[11px] uppercase tracking-[0.32em] text-binova-bone/70 hover:text-binova-bone transition-colors max-md:border max-md:border-binova-bone/15 max-md:px-6 max-md:py-4 max-md:justify-between"
              >
                {tCommon("downloadCatalog")}
                <span aria-hidden className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      {collection.gallery && collection.gallery.length > 1 && (
        <section className="relative bg-binova-black py-20 max-md:py-12 lg:py-32">
          <div className="mx-auto mb-12 max-w-[1600px] px-6 max-md:mb-8 lg:mb-16 lg:px-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · {t("gallery")}
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,3.5rem)] max-md:text-[clamp(1.6rem,7vw,2.6rem)] font-light leading-[1] tracking-tight text-binova-bone">
              {t("galleryTitle", { name: text.name })}
            </h2>
          </div>

          <GalleryLightbox
            images={collection.gallery.slice(1)}
            altPrefix={text.name}
          />
        </section>
      )}

      {!collection.gallery && collection.image && (
        <section className="relative bg-binova-black px-6 py-20 lg:px-12 lg:py-32">
          <div className="relative mx-auto aspect-[16/9] w-full max-w-[1400px] overflow-hidden">
            <Image
              src={collection.image}
              alt={`${text.name} — detail`}
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover"
            />
          </div>
        </section>
      )}

      <section className="border-t border-white/[0.06] bg-binova-black px-6 py-16 max-md:py-10 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-8 max-md:gap-4">
          <Link
            href={`/cucine/${prev.slug}`}
            className="group flex flex-col gap-3"
          >
            <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
              ← {tCommon("previous")}
            </span>
            <span className="font-display text-2xl text-binova-bone transition-colors group-hover:text-binova-gold-soft lg:text-3xl">
              {prevText.name}
            </span>
          </Link>
          <Link
            href={`/cucine/${next.slug}`}
            className="group flex flex-col items-end gap-3 text-right"
          >
            <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
              {tCommon("next")} →
            </span>
            <span className="font-display text-2xl text-binova-bone transition-colors group-hover:text-binova-gold-soft lg:text-3xl">
              {nextText.name}
            </span>
          </Link>
        </div>
      </section>

      <Contacts />
      <Footer />
    </main>
  );
}
