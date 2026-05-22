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

      {/* Hero — full-bleed image (coerente con Contract/Progettazione/Cucine) */}
      <section className="relative h-[90svh] min-h-[560px] max-md:min-h-[500px] overflow-hidden bg-binova-black">
        <Image
          src="/images/showroom/showroom-1.jpg"
          alt="Showroom Binova Milano, Via Durini 17"
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
            <span className="text-binova-bone">Showroom</span>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold-soft">
              · Via Durini 17 · Milano
            </span>
            <h1 className="font-display text-[clamp(2.8rem,7vw,7rem)] max-md:text-[clamp(2.4rem,11vw,4rem)] font-light leading-[0.95] tracking-tight text-binova-bone drop-shadow-[0_4px_40px_rgba(0,0,0,0.5)]">
              Milano,{" "}
              <span className="italic text-binova-gold-soft">
                Durini Design District.
              </span>
            </h1>
          </div>

          <p className="max-w-2xl text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-binova-bone/85">
            350 m² nel cuore del distretto del design milanese. Su
            appuntamento con il nostro team di architetti e progettisti.
          </p>
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
