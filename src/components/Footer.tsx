export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-white/[0.06] bg-binova-black px-6 pb-10 pt-24 lg:px-12 lg:pt-32"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center border border-binova-bone/80">
                <span className="h-3 w-3 bg-binova-bone" />
              </span>
              <span className="font-display text-2xl text-binova-bone">Binova</span>
            </div>
            <p className="mt-6 max-w-sm text-binova-bone/55">
              Cucine moderne di lusso. Made in Italy dal 1958. Un brand del
              gruppo Italian Design Brands.
            </p>
          </div>

          <FooterCol
            title="Prodotti"
            items={["Cucine", "Contract", "Finiture", "Catalogo 2026"]}
          />
          <FooterCol
            title="Brand"
            items={["Heritage", "Factory-One", "Sostenibilità", "Press", "Awards"]}
          />
          <FooterCol
            title="Contatti"
            items={["Showroom Milano", "Notaresco HQ", "Rivenditori", "Supporto", "Whistleblowing"]}
          />
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/[0.06] pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
            © {new Date().getFullYear()} Binova — Cubo Design S.r.l. · P.IVA 01579900679
          </div>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
            <a href="#" className="hover:text-binova-bone transition-colors">Privacy</a>
            <a href="#" className="hover:text-binova-bone transition-colors">Cookie</a>
            <a href="#" className="hover:text-binova-bone transition-colors">Legal</a>
            <a href="#" className="hover:text-binova-bone transition-colors">Accessibilità</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-4 lg:col-span-2">
      <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/45">
        {title}
      </span>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-sm text-binova-bone/75 transition-colors hover:text-binova-gold"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
