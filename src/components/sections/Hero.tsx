"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const tCommon = useTranslations("common");

  return (
    <section
      id="top"
      className="relative min-h-screen max-lg:min-h-[100svh] overflow-hidden bg-binova-black"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero.jpg"
          alt="Showroom Binova Milano via Durini"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.25) 35%, rgba(10,10,10,0.45) 70%, rgba(10,10,10,0.92) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,179,120,0.18), transparent 60%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-lg:min-h-[100svh] max-w-[1600px] flex-col justify-between px-6 pb-16 pt-36 max-lg:pt-28 max-lg:pb-12 lg:px-12 lg:pb-20 lg:pt-44">
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-binova-gold/60" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-binova-bone/80">
            {t("eyebrow")}
          </span>
        </div>

        <div className="flex flex-col gap-10 max-lg:gap-7">
          <h1 className="font-display font-light leading-[0.95] tracking-tight text-binova-bone drop-shadow-[0_2px_30px_rgba(0,0,0,0.4)]">
            <span className="block text-[clamp(2.8rem,8.5vw,9rem)] max-md:text-[clamp(2.4rem,12vw,4rem)]">
              {t("titleLine1")}
            </span>
            <span className="block text-[clamp(2.8rem,8.5vw,9rem)] max-md:text-[clamp(2.4rem,12vw,4rem)] italic text-binova-gold-soft">
              {t("titleLine2")}
            </span>
          </h1>

          <div className="flex flex-col gap-10 max-lg:gap-6 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-[clamp(0.95rem,1.1vw,1.05rem)] leading-relaxed text-binova-bone/85">
              {t("tagline")}
            </p>

            <div className="flex items-center gap-5 max-md:flex-col max-md:items-stretch max-md:gap-4">
              <a
                href="#collections"
                className="group flex items-center justify-between gap-4 border border-binova-bone/40 bg-black/20 px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-binova-bone backdrop-blur-sm transition-all duration-500 hover:border-binova-gold hover:text-binova-gold max-md:px-6"
              >
                {tCommon("exploreCollections")}
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 max-lg:mt-12 max-lg:gap-6 max-lg:pt-8 lg:grid-cols-4">
          {[
            { value: "1958", label: t("stats.founded") },
            { value: "25.000 m²", label: t("stats.factoryOne") },
            { value: t("stats.collectionsCount"), label: t("stats.collectionsLabel") },
            { value: t("stats.madeInItalyValue"), label: t("stats.madeInItalyLabel") },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span className="font-display text-3xl text-binova-bone lg:text-4xl">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 lg:block">
        <span className="text-[10px] uppercase tracking-[0.5em] text-binova-bone/40">
          {t("sideTicker")}
        </span>
      </div>
    </section>
  );
}
