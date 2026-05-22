import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const exploreLinks = [
    { label: tNav("events"), href: "/eventi" },
    { label: tNav("duriniDesign"), href: "/durini-design" },
    { label: tNav("press"), href: "/press" },
    { label: tNav("euroluce"), href: "/euroluce" },
  ];

  return (
    <footer
      className="relative border-t border-white/[0.06] bg-binova-black px-6 pb-10 pt-20 max-lg:pt-12 max-md:pt-6 max-md:pb-6 lg:px-12 lg:pt-24"
      style={{
        paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
      }}
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-10 max-md:hidden lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center border border-binova-bone/80">
                <span className="h-3 w-3 bg-binova-bone" />
              </span>
              <span className="font-display text-2xl text-binova-bone">Binova</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-binova-bone/55">
              {t("tagline")}
            </p>
          </div>

          <div className="lg:col-span-3">
            <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/45">
              · {t("exploreLabel")}
            </span>
            <ul className="mt-4 flex flex-col gap-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-binova-bone/75 hover:text-binova-gold-soft transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.32em] text-binova-bone/50 lg:col-span-4 lg:text-right">
            <span>{t("showroomLabel")}</span>
            <span className="text-binova-bone/70">Via Durini 17 · 20122 Milano</span>
            <a
              href="mailto:info@binovamilano.it"
              className="text-binova-bone/70 hover:text-binova-gold transition-colors"
            >
              info@binovamilano.it
            </a>
            <a
              href="tel:+390229061826"
              className="text-binova-bone/70 hover:text-binova-gold transition-colors"
            >
              +39 02 2906 1826
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.06] pt-6 max-md:mt-0 max-md:border-t-0 max-md:pt-0 max-md:gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/40 max-md:text-center">
            {t("copyright", { year: new Date().getFullYear() })}
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.32em] text-binova-bone/40 max-md:justify-center">
            <Link href="/privacy" className="hover:text-binova-bone transition-colors">
              {t("privacy")}
            </Link>
            <Link href="/cookie" className="hover:text-binova-bone transition-colors">
              {t("cookie")}
            </Link>
            <Link href="/legal" className="hover:text-binova-bone transition-colors">
              {t("legal")}
            </Link>
            <Link
              href="/accessibilita"
              className="hover:text-binova-bone transition-colors"
            >
              {t("accessibility")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
