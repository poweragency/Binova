export default function Contacts() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-binova-ink px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44"
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
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · Prenota visita
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,5rem)] max-md:text-[clamp(2rem,8vw,3.2rem)] font-light leading-[0.95] tracking-tight text-binova-bone">
              Parliamone{" "}
              <span className="italic text-binova-gold-soft">di persona.</span>
            </h2>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-binova-bone/65">
              Ogni progetto Binova nasce intorno a un'architettura e a chi
              la abiterà. Vieni in showroom o scrivici: ti assegniamo un
              progettista dedicato che ti guiderà dalla prima visita
              all'installazione finale.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 max-md:flex-col max-md:items-stretch">
              <a
                href="mailto:info@binovamilano.it?subject=Richiesta%20visita%20showroom"
                className="group flex items-center justify-between gap-4 border border-binova-bone/30 px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-binova-bone transition-all duration-500 hover:border-binova-gold hover:text-binova-gold max-md:px-6"
              >
                Prenota una visita
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="tel:+390229061826"
                className="group flex items-center justify-between gap-4 px-2 py-4 text-[11px] uppercase tracking-[0.32em] text-binova-bone/70 hover:text-binova-bone transition-colors max-md:border max-md:border-binova-bone/15 max-md:px-6"
              >
                +39 02 2906 1826
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          <aside className="lg:col-span-5 lg:border-l lg:border-white/[0.06] lg:pl-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · Showroom Milano
            </span>

            <div className="mt-6 flex flex-col gap-6">
              <ContactRow label="Indirizzo" value="Via Durini 17, 20122 Milano" />
              <ContactRow label="Email" value="info@binovamilano.it" href="mailto:info@binovamilano.it" />
              <ContactRow label="Telefono" value="+39 02 2906 1826" href="tel:+390229061826" />
              <ContactRow label="Orari" value="Lun–Sab · 10:00–19:00" />
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="https://maps.google.com/?q=Via+Durini+17+Milano"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-[0.32em] text-binova-bone/55 hover:text-binova-bone transition-colors"
              >
                Apri in Google Maps ↗
              </a>
            </div>
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
