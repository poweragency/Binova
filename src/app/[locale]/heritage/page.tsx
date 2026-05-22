import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contacts from "@/components/sections/Contacts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "heritage" });
  return {
    title: "Heritage · Binova",
    description: t("tagline"),
  };
}

export default async function HeritagePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("heritage");

  return (
    <main className="relative bg-binova-black">
      <Navbar />

      <section className="relative h-[90svh] min-h-[560px] max-md:min-h-[500px] overflow-hidden bg-binova-black">
        <Image
          src="/images/heritage/atmosphere-1.jpg"
          alt="Heritage Binova — 1958 / 2026"
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
            <span className="text-binova-bone">Heritage</span>
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

      <section className="bg-binova-black px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1400px]">
          <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
            · Timeline
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-[1.05] tracking-tight text-binova-bone">
            {t("timelineTitle")} <span className="italic text-binova-gold-soft">{t("timelineItalic")}</span>
          </h2>

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/[0.06] pt-12 max-lg:mt-10 max-lg:gap-y-8 max-lg:pt-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-10">
            <TimelineItem year="1958" event={t("timeline.1958")} />
            <TimelineItem year="1970s" event={t("timeline.1970s")} />
            <TimelineItem year="2018" event={t("timeline.2018")} />
            <TimelineItem year="2022" event={t("timeline.2022")} />
            <TimelineItem year="2026" event={t("timeline.2026")} />
          </div>

          <div className="mt-24 max-lg:mt-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · Pillars
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-[1.05] tracking-tight text-binova-bone">
              {t("pillarsTitle")}{" "}
              <span className="italic text-binova-gold-soft">{t("pillarsItalic")}</span>
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 border-t border-white/[0.06] pt-12 max-lg:gap-y-10 max-lg:pt-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
              <Pillar code="I." title={t("pillars.madeInItaly.title")} body={t("pillars.madeInItaly.body")} />
              <Pillar code="II." title={t("pillars.sustainability.title")} body={t("pillars.sustainability.body")} />
              <Pillar code="III." title={t("pillars.craftsmanship.title")} body={t("pillars.craftsmanship.body")} />
              <Pillar code="IV." title={t("pillars.architecture.title")} body={t("pillars.architecture.body")} />
            </div>
          </div>
        </div>
      </section>

      <Contacts />
      <Footer />
    </main>
  );
}

function TimelineItem({ year, event }: { year: string; event: string }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-display text-3xl text-binova-gold-soft lg:text-4xl">
        {year}
      </span>
      <span className="block h-px w-8 bg-binova-gold/40" />
      <span className="text-sm leading-relaxed text-binova-bone/70">
        {event}
      </span>
    </div>
  );
}

function Pillar({
  code,
  title,
  body,
}: {
  code: string;
  title: string;
  body: string;
}) {
  return (
    <div className="group flex flex-col gap-4">
      <span className="font-display text-sm text-binova-gold-soft tracking-wider">
        {code}
      </span>
      <h3 className="font-display text-2xl text-binova-bone lg:text-3xl">
        {title}
      </h3>
      <span className="block h-px w-8 bg-binova-gold/40 transition-all duration-500 group-hover:w-16 group-hover:bg-binova-gold" />
      <p className="text-sm leading-relaxed text-binova-bone/55">{body}</p>
    </div>
  );
}
