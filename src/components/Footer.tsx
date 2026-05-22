import Link from "next/link";

const exploreLinks = [
  { label: "Durini Design", href: "/durini-design" },
  { label: "Press", href: "/press" },
  { label: "Euroluce", href: "/euroluce" },
  { label: "Progettazione", href: "/progettazione" },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t border-white/[0.06] bg-binova-black px-6 pb-10 pt-20 max-lg:pt-12 max-md:pt-6 max-md:pb-6 lg:px-12 lg:pt-24"
      style={{
        paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
      }}
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Brand + secondary links + showroom info — hidden on phones */}
        <div className="grid gap-10 max-md:hidden lg:grid-cols-12 lg:gap-16">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center border border-binova-bone/80">
                <span className="h-3 w-3 bg-binova-bone" />
              </span>
              <span className="font-display text-2xl text-binova-bone">Binova</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-binova-bone/55">
              Cucine moderne di lusso. Made in Italy dal 1958. Un brand del
              gruppo Italian Design Brands.
            </p>
          </div>

          {/* Secondary nav — discover */}
          <div className="lg:col-span-3">
            <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/45">
              · Esplora
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

          {/* Showroom contact */}
          <div className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.32em] text-binova-bone/50 lg:col-span-4 lg:text-right">
            <span>Showroom Milano</span>
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

        {/* Bottom legal row */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.06] pt-6 max-md:mt-0 max-md:border-t-0 max-md:pt-0 max-md:gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/40 max-md:text-center">
            © {new Date().getFullYear()} Binova — Cubo Design S.r.l. · P.IVA 01579900679
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.32em] text-binova-bone/40 max-md:justify-center">
            <Link href="/privacy" className="hover:text-binova-bone transition-colors">
              Privacy
            </Link>
            <Link href="/cookie" className="hover:text-binova-bone transition-colors">
              Cookie
            </Link>
            <Link href="/legal" className="hover:text-binova-bone transition-colors">
              Legal
            </Link>
            <Link
              href="/accessibilita"
              className="hover:text-binova-bone transition-colors"
            >
              Accessibilità
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
