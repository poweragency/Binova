import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contacts from "@/components/sections/Contacts";

export const metadata: Metadata = {
  title: "Showroom Milano · Binova",
  description:
    "Lo showroom Binova Milano: 350 m² in Via Durini 17, nel cuore del Durini Design District.",
};

export default function ShowroomPage() {
  return (
    <main className="relative bg-binova-black">
      <Navbar />

      {/* Hero header */}
      <section className="relative overflow-hidden border-b border-white/[0.06] bg-binova-ink px-6 pb-20 pt-32 max-md:pb-12 max-md:pt-24 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="relative mx-auto max-w-[1400px]">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-binova-bone/55">
            <Link href="/" className="hover:text-binova-bone transition-colors">
              Binova
            </Link>
            <span className="text-binova-bone/30">/</span>
            <span className="text-binova-bone">Showroom</span>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
                · Via Durini 17, Milano
              </span>
              <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,5.5rem)] max-md:text-[clamp(2rem,9vw,3.6rem)] font-light leading-[1] tracking-tight text-binova-bone">
                Milano,{" "}
                <span className="italic text-binova-gold-soft">
                  Durini Design District.
                </span>
              </h1>
            </div>
            <p className="lg:col-span-4 text-binova-bone/65">
              350 m² nel cuore del distretto del design milanese. Su
              appuntamento con il nostro team di architetti e progettisti.
            </p>
          </div>
        </div>
      </section>

      {/* Big photo */}
      <section className="relative bg-binova-black">
        <div className="relative aspect-[21/9] w-full overflow-hidden max-md:aspect-[4/3]">
          <Image
            src="/images/showroom/showroom-1.jpg"
            alt="Showroom Binova Milano, Via Durini 17"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.2) 50%, rgba(10,10,10,0.9) 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-10 lg:px-12 lg:pb-16">
            <div className="mx-auto max-w-[1600px]">
              <span className="text-[10px] uppercase tracking-[0.4em] text-binova-bone/70">
                Flagship store
              </span>
              <p className="mt-3 font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[0.95] text-binova-bone">
                350 m² di esperienza Binova.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info grid */}
      <section className="bg-binova-black px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · Il luogo
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-[1.05] tracking-tight text-binova-bone">
              Non un negozio.{" "}
              <span className="italic text-binova-gold-soft">
                Un laboratorio.
              </span>
            </h2>
            <p className="mt-8 text-[clamp(1rem,1.1vw,1.1rem)] leading-relaxed text-binova-bone/70">
              Via Durini è il distretto del design milanese da cinquant'anni.
              Il nostro showroom, a pochi metri dall&apos;Università Statale,
              è pensato per essere attraversato come un appartamento — non
              come un'esposizione di prodotto. Ogni angolo è un ambiente
              progettato: cucina, living, dispensa, tavolo da pranzo.
            </p>
            <p className="mt-4 text-[clamp(1rem,1.1vw,1.1rem)] leading-relaxed text-binova-bone/70">
              Da noi puoi vedere i materiali dal vivo, toccare le finiture,
              cuocere in showroom durante eventi di showcooking, parlare con
              chi disegna le cucine — non solo con chi le vende.
            </p>
          </div>

          <aside className="lg:col-span-5 lg:border-l lg:border-white/[0.06] lg:pl-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · Visita
            </span>
            <ul className="mt-6 divide-y divide-white/[0.06] border-y border-white/[0.06]">
              <li className="py-5">
                <span className="block text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
                  Per architetti & designer
                </span>
                <span className="mt-2 block text-binova-bone/80">
                  Tour guidati settimanali, accesso ai cataloghi tecnici e
                  ai campioni di finitura. Convenzioni dedicate agli studi.
                </span>
              </li>
              <li className="py-5">
                <span className="block text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
                  Per clienti privati
                </span>
                <span className="mt-2 block text-binova-bone/80">
                  Appuntamento individuale con un progettista per la
                  pianificazione su misura della tua cucina.
                </span>
              </li>
              <li className="py-5">
                <span className="block text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
                  Eventi
                </span>
                <span className="mt-2 block text-binova-bone/80">
                  Showcooking, presentazioni partner, design week.{" "}
                  <Link href="/eventi" className="text-binova-gold-soft hover:text-binova-gold transition-colors">
                    Calendario eventi →
                  </Link>
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <Contacts />
      <Footer />
    </main>
  );
}
