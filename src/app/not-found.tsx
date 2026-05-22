import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pagina non trovata · Binova",
  description: "La pagina che cerchi non esiste. Torna alla home di Binova.",
};

export default function NotFound() {
  return (
    <main className="relative bg-binova-black">
      <Navbar />

      <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-32 max-md:py-24 lg:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,179,120,0.12), transparent 60%)",
          }}
        />

        <div className="relative flex max-w-3xl flex-col items-center text-center">
          <span className="font-display text-[clamp(7rem,22vw,18rem)] font-light leading-none tracking-tight text-binova-gold-soft/40 max-md:text-[clamp(6rem,30vw,10rem)]">
            404
          </span>

          <span className="mt-6 text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
            · Pagina non trovata
          </span>

          <h1 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] max-md:text-[clamp(1.8rem,8vw,2.6rem)] font-light leading-[1.05] tracking-tight text-binova-bone">
            Questa pagina si è persa.{" "}
            <span className="italic text-binova-gold-soft">Le nostre cucine no.</span>
          </h1>

          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-binova-bone/65">
            La URL che hai cercato non esiste o è stata spostata. Torna
            alle collezioni o esplora lo showroom di Milano.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 max-md:flex-col max-md:items-stretch max-md:gap-3">
            <Link
              href="/"
              className="group flex items-center justify-between gap-4 border border-binova-bone/30 px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-binova-bone transition-all duration-500 hover:border-binova-gold hover:text-binova-gold max-md:px-6"
            >
              Torna alle collezioni
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/showroom"
              className="text-[11px] uppercase tracking-[0.32em] text-binova-bone/60 hover:text-binova-bone transition-colors max-md:py-3 max-md:text-center"
            >
              Visita lo showroom Milano
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
