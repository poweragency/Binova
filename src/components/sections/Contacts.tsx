import { useTranslations } from "next-intl";

export default function Contacts() {
  const t = useTranslations("contacts");
  const tCommon = useTranslations("common");

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-binova-ink px-6 py-32 max-lg:py-20 max-md:pt-14 max-md:pb-10 lg:px-12 lg:py-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,179,120,0.10), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="grid gap-12 max-md:gap-8 lg:grid-cols-12 lg:gap-20">
          <div data-reveal className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · {t("eyebrow")}
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,5rem)] max-md:text-[clamp(2rem,8vw,3.2rem)] font-light leading-[0.95] tracking-tight text-binova-bone">
              {t("titleLine1")}{" "}
              <span className="italic text-binova-gold-soft">{t("titleItalic")}</span>
            </h2>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-binova-bone/65">
              {t("intro")}
            </p>

            <div className="mt-10 flex flex-col gap-6 max-md:gap-5">
              <a
                href="tel:+390229061826"
                className="group inline-flex items-baseline gap-3 max-md:w-full"
              >
                <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
                  {t("labels.phone")}
                </span>
                <span className="font-display text-[clamp(1.25rem,1.8vw,1.6rem)] font-light tracking-tight text-binova-bone transition-colors group-hover:text-binova-gold-soft">
                  +39 02 2906 1826
                </span>
              </a>

              <a
                href="mailto:info@binovamilano.it"
                className="group inline-flex items-baseline gap-3 max-md:w-full max-md:flex-wrap"
              >
                <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
                  {t("labels.email")}
                </span>
                <span className="font-display text-[clamp(1.25rem,1.8vw,1.6rem)] font-light tracking-tight text-binova-bone transition-colors group-hover:text-binova-gold-soft break-all">
                  info@binovamilano.it
                </span>
              </a>
            </div>

            <p className="mt-6 text-[11px] uppercase tracking-[0.32em] text-binova-bone/40">
              {tCommon("hours")}
            </p>
          </div>

          <aside data-reveal className="lg:col-span-5 lg:border-l lg:border-white/[0.06] lg:pl-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · {t("showroomEyebrow")}
            </span>

            <div className="mt-6 flex flex-col gap-5 max-md:gap-4">
              <ContactRow label={t("labels.address")} value={tCommon("address")} />
              <ContactRow label={t("labels.hours")} value={tCommon("hours")} />
            </div>

            <a
              href="https://maps.google.com/?q=Via+Durini+17+Milano"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-binova-bone/55 hover:text-binova-bone transition-colors max-md:mt-6"
            >
              {tCommon("openMaps")} ↗
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="block text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
        {label}
      </span>
      <span className="mt-1.5 block text-binova-bone/85">{value}</span>
    </>
  );
  if (href) {
    return (
      <a href={href} className="block hover:text-binova-gold transition-colors">
        {content}
      </a>
    );
  }
  return <div>{content}</div>;
}
