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
  const t = await getTranslations({ locale, namespace: "progettazione" });
  return {
    title: "Kitchen Design · Binova",
    description: t("tagline"),
  };
}

const projectImages: Record<string, string> = {
  mantisBluna: "/images/progettazione/londra.jpg",
  lab: "/images/progettazione/lab.jpg",
  mantisScava: "/images/progettazione/mantis-scava.jpg",
  blunaX: "/images/progettazione/bluna-x.jpg",
};

export default async function ProgettazionePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("progettazione");
  const tNav = await getTranslations("nav");

  const projects = (["mantisBluna", "lab", "mantisScava", "blunaX"] as const).map(
    (key) => ({
      key,
      name: t(`projects.${key}.name`),
      tag: t(`projects.${key}.tag`),
      desc: t(`projects.${key}.desc`),
      image: projectImages[key],
    })
  );

  const questions = ["space", "use", "optimize", "exposed", "budget"] as const;

  return (
    <main className="relative bg-binova-black">
      <Navbar />

      <section className="relative h-[90svh] min-h-[560px] max-md:min-h-[500px] overflow-hidden bg-binova-black">
        <Image
          src="/images/progettazione/bluna-x-dining.jpg"
          alt="Binova kitchen design"
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
            <span className="text-binova-bone">{tNav("design")}</span>
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

      <section className="bg-binova-ink px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto grid max-w-[1400px] gap-16 max-lg:gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7" data-reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · {t("approachEyebrow")}
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,3.5vw,3.5rem)] max-md:text-[clamp(1.7rem,7vw,2.6rem)] font-light leading-[1.05] tracking-tight text-binova-bone">
              {t("approachTitle")}
            </h2>
            <p className="mt-8 text-[clamp(1rem,1.1vw,1.1rem)] leading-relaxed text-binova-bone/70">
              {t("approachBody1")}
            </p>
            <p className="mt-4 text-[clamp(1rem,1.1vw,1.1rem)] leading-relaxed text-binova-bone/70">
              {t("approachBody2")}
            </p>
          </div>

          <aside className="lg:col-span-5" data-reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · {t("fiveQuestionsEyebrow")}
            </span>
            <ul className="mt-6">
              {questions.map((q) => (
                <AccordionItem key={q} title={t(`questions.${q}.title`)}>
                  {t(`questions.${q}.body`)}
                </AccordionItem>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-binova-black px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
            data-reveal
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
                · {t("projectsEyebrow")}
              </span>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,4rem)] max-md:text-[clamp(1.8rem,8vw,3rem)] font-light leading-[1] tracking-tight text-binova-bone">
                {t("projectsTitle")}{" "}
                <span className="italic text-binova-gold-soft">
                  {t("projectsItalic")}
                </span>
              </h2>
            </div>
            <p className="max-w-md text-binova-bone/60">
              {t("projectsIntro")}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 max-md:gap-8 md:grid-cols-2 lg:gap-14">
            {projects.map((project) => (
              <article
                key={project.key}
                className="flex flex-col gap-5"
                data-reveal
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/[0.06] bg-binova-stone">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-[0.32em] text-binova-gold-soft">
                    · {project.tag}
                  </span>
                  <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] font-light leading-[1.1] text-binova-bone">
                    {project.name}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-binova-bone/60">
                    {project.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 flex justify-center max-lg:mt-14" data-reveal>
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 border border-binova-bone/30 px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-binova-bone transition-all duration-500 hover:border-binova-gold hover:text-binova-gold"
            >
              {t("projectsCTA")}
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <Contacts />
      <Footer />
    </main>
  );
}
