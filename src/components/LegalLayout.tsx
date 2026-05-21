import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contacts from "./sections/Contacts";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  updated?: string;
  children: React.ReactNode;
};

export default function LegalLayout({
  eyebrow,
  title,
  subtitle,
  updated,
  children,
}: Props) {
  return (
    <main className="relative bg-binova-black">
      <Navbar />

      {/* Hero header */}
      <section className="relative overflow-hidden border-b border-white/[0.06] bg-binova-ink px-6 pb-20 pt-32 max-md:pb-12 max-md:pt-24 lg:px-12 lg:pb-28 lg:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,179,120,0.08), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1100px]">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-binova-bone/55">
            <Link href="/" className="hover:text-binova-bone transition-colors">
              Binova
            </Link>
            <span className="text-binova-bone/30">/</span>
            <span className="text-binova-bone">{eyebrow}</span>
          </div>
          <h1 className="mt-8 font-display text-[clamp(2.4rem,6vw,5rem)] max-md:text-[clamp(2rem,9vw,3.5rem)] font-light leading-[1] tracking-tight text-binova-bone">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-binova-bone/65">
              {subtitle}
            </p>
          )}
          {updated && (
            <p className="mt-8 text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
              Ultimo aggiornamento · {updated}
            </p>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="relative px-6 pb-32 pt-20 max-md:pb-20 max-md:pt-12 lg:px-12 lg:pb-44 lg:pt-24">
        <article className="mx-auto max-w-[760px] space-y-10 text-[15px] leading-relaxed text-binova-bone/75 [&_h2]:font-display [&_h2]:text-binova-bone [&_h2]:text-[clamp(1.4rem,2.4vw,2rem)] [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-light [&_h2]:tracking-tight [&_h2:first-child]:mt-0 [&_h3]:font-display [&_h3]:text-binova-bone [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-light [&_p]:my-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul_li]:my-2 [&_a]:text-binova-gold-soft [&_a:hover]:text-binova-gold [&_a]:underline [&_a]:underline-offset-4 [&_strong]:text-binova-bone [&_strong]:font-medium">
          {children}
        </article>
      </section>

      <Contacts />
      <Footer />
    </main>
  );
}
