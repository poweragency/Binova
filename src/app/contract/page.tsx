import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contacts from "@/components/sections/Contacts";

export const metadata: Metadata = {
  title: "Contract System · Binova",
  description:
    "Binova Milano Contract System: soluzioni di lusso per hotel, residenze private e progetti hospitality. Una cucina unica per un ambiente unico.",
};

const gallery = [
  { src: "/images/contract/g1.jpg", alt: "Realizzazione contract A001" },
  { src: "/images/contract/g2.jpg", alt: "Realizzazione contract A002" },
  { src: "/images/contract/g3.jpg", alt: "Realizzazione contract A003" },
  { src: "/images/contract/g4.jpg", alt: "Realizzazione contract A004" },
  { src: "/images/contract/g5.jpg", alt: "Realizzazione contract F003" },
  { src: "/images/contract/g6.jpg", alt: "Realizzazione contract F004" },
];

export default function ContractPage() {
  return (
    <main className="relative bg-binova-black">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[90svh] min-h-[560px] max-md:min-h-[500px] overflow-hidden bg-binova-black">
        <Image
          src="/images/contract/hero.jpg"
          alt="Binova Milano Contract System"
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
            <span className="text-binova-bone">Contract</span>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold-soft">
              · Binova Milano Contract System
            </span>
            <h1 className="font-display text-[clamp(2.6rem,7vw,7rem)] max-md:text-[clamp(2.2rem,11vw,4rem)] font-light leading-[0.95] tracking-tight text-binova-bone drop-shadow-[0_4px_40px_rgba(0,0,0,0.5)]">
              Una cucina unica{" "}
              <span className="italic text-binova-gold-soft">
                per un ambiente unico.
              </span>
            </h1>
          </div>

          <p className="max-w-2xl text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-binova-bone/85">
            Ci piace immaginare lo spazio predisposto a cucinare come un
            centro di vita e luogo di aggregazione. In questo senso, per
            noi, cucina è sinonimo di cuore.
          </p>
        </div>
      </section>

      {/* Intro copy */}
      <section className="bg-binova-ink px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto grid max-w-[1400px] gap-16 max-lg:gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · Soluzioni di lusso
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,3.5vw,3.5rem)] max-md:text-[clamp(1.7rem,7vw,2.6rem)] font-light leading-[1.05] tracking-tight text-binova-bone">
              Progettazione su misura per hotel, residenze private e
              progetti hospitality di alta gamma.
            </h2>
            <p className="mt-8 text-[clamp(1rem,1.1vw,1.1rem)] leading-relaxed text-binova-bone/70">
              La nostra Contract Division segue il progetto dalla
              pianificazione architettonica all'installazione, integrando
              le cucine Binova nell'identità del luogo che le ospita.
              Lavoriamo con studi di architettura, general contractor e
              committenza diretta su progetti residenziali di pregio,
              suite alberghiere, ville private, attici di rappresentanza.
            </p>
            <p className="mt-4 text-[clamp(1rem,1.1vw,1.1rem)] leading-relaxed text-binova-bone/70">
              Per ogni progetto contract, Binova mette a disposizione un
              team dedicato: project manager, progettista, tecnico di
              cantiere. Una sola interfaccia, dalle prime tavole al
              collaudo finale.
            </p>
          </div>

          <aside className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · Cosa includiamo
            </span>
            <ul className="mt-6 divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {[
                "Progettazione esecutiva e tavole tecniche",
                "Selezione finiture e materiali su brief",
                "Coordinamento elettrodomestici premium",
                "Logistica e installazione in cantiere",
                "Direzione lavori e collaudo finale",
                "Servizio post-vendita dedicato",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between py-4 text-binova-bone/85"
                >
                  <span className="font-display text-[15px] lg:text-base">
                    {item}
                  </span>
                  <span className="text-binova-bone/30" aria-hidden>
                    +
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-4 border border-binova-bone/30 px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-binova-bone transition-all duration-500 hover:border-binova-gold hover:text-binova-gold"
            >
              Richiedi un sopralluogo
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          </aside>
        </div>
      </section>

      {/* Gallery realizzazioni */}
      <section className="bg-binova-black px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
                · Realizzazioni
              </span>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,4rem)] max-md:text-[clamp(1.8rem,8vw,3rem)] font-light leading-[1] tracking-tight text-binova-bone">
                Alcuni dei nostri{" "}
                <span className="italic text-binova-gold-soft">
                  progetti chiusi.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-binova-bone/60">
              Da appartamenti di rappresentanza a residenze multi-piano,
              da hotel di lusso a ville con vista. Sei progetti, sei lingue
              diverse — la stessa precisione di esecuzione.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 max-md:gap-4 md:grid-cols-2 lg:gap-10">
            {gallery.map((item) => (
              <figure
                key={item.src}
                className="relative aspect-[4/3] w-full overflow-hidden border border-white/[0.06] bg-binova-stone"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  quality={88}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Contacts />
      <Footer />
    </main>
  );
}
