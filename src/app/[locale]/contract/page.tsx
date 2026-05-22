import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contacts from "@/components/sections/Contacts";
import AccordionItem from "@/components/AccordionItem";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contract" });
  return {
    title: "Contract System · Binova",
    description: t("tagline"),
  };
}

const gallery = [
  { src: "/images/contract/g1.jpg", alt: "Binova contract project A001" },
  { src: "/images/contract/g2.jpg", alt: "Binova contract project A002" },
  { src: "/images/contract/g3.jpg", alt: "Binova contract project A003" },
  { src: "/images/contract/g4.jpg", alt: "Binova contract project A004" },
  { src: "/images/contract/g5.jpg", alt: "Binova contract project F003" },
  { src: "/images/contract/g6.jpg", alt: "Binova contract project F004" },
];

export default async function ContractPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contract");

  const includes = [
    { title: t("includes.design.title"), body: t("includes.design.body") },
    { title: t("includes.materials.title"), body: t("includes.materials.body") },
    { title: t("includes.appliances.title"), body: t("includes.appliances.body") },
    { title: t("includes.logistics.title"), body: t("includes.logistics.body") },
    { title: t("includes.supervision.title"), body: t("includes.supervision.body") },
    { title: t("includes.afterSales.title"), body: t("includes.afterSales.body") },
  ];

  return (
    <main className="relative bg-binova-black">
      <Navbar />

      <section className="relative h-[90svh] min-h-[560px] max-md:min-h-[500px] overflow-hidden bg-binova-black">
        <Image
          src="/images/contract/hero.jpg"
          alt="Binova Milano Contract System"
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
            <span className="text-binova-bone">Contract</span>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold-soft">
              · {t("eyebrow")}
            </span>
            <h1 className="font-display text-[clamp(2.6rem,7vw,7rem)] max-md:text-[clamp(2.2rem,11vw,4rem)] font-light leading-[0.95] tracking-tight text-binova-bone drop-shadow-[0_4px_40px_rgba(0,0,0,0.5)]">
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

      <section className="bg-binova-ink px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto grid max-w-[1400px] gap-16 max-lg:gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · {t("introEyebrow")}
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,3.5vw,3.5rem)] max-md:text-[clamp(1.7rem,7vw,2.6rem)] font-light leading-[1.05] tracking-tight text-binova-bone">
              {t("introTitle")}
            </h2>
            <p className="mt-8 text-[clamp(1rem,1.1vw,1.1rem)] leading-relaxed text-binova-bone/70">
              {t("introBody1")}
            </p>
            <p className="mt-4 text-[clamp(1rem,1.1vw,1.1rem)] leading-relaxed text-binova-bone/70">
              {t("introBody2")}
            </p>
          </div>

          <aside className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · {t("includesEyebrow")}
            </span>
            <ul className="mt-6">
              {includes.map((item) => (
                <AccordionItem key={item.title} title={item.title}>
                  {item.body}
                </AccordionItem>
              ))}
            </ul>

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-4 border border-binova-bone/30 px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-binova-bone transition-all duration-500 hover:border-binova-gold hover:text-binova-gold"
            >
              {t("ctaSurvey")}
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          </aside>
        </div>
      </section>

      <section className="bg-binova-black px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
                · {t("galleryEyebrow")}
              </span>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,4rem)] max-md:text-[clamp(1.8rem,8vw,3rem)] font-light leading-[1] tracking-tight text-binova-bone">
                {t("galleryTitleLine1")}{" "}
                <span className="italic text-binova-gold-soft">
                  {t("galleryTitleItalic")}
                </span>
              </h2>
            </div>
            <p className="max-w-md text-binova-bone/60">
              {t("galleryIntro")}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 max-md:gap-4 md:grid-cols-2 lg:gap-10">
            {gallery.map((item) => (
              <figure
                key={item.src}
                className="relative aspect-[4/3] w-full overflow-hidden border border-white/[0.06] bg-binova-stone"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  quality={88}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Contacts />
      <Footer />
    </main>
  );
}
