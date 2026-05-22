import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contacts from "@/components/sections/Contacts";
import AccordionItem from "@/components/AccordionItem";

export const metadata: Metadata = {
  title: "Progettazione Cucine · Binova",
  description:
    "Progettazione esecutiva, selezione materiali, coordinamento elettrodomestici. Un team Binova ti segue dalla prima visita all'installazione finale.",
};

type Project = {
  name: string;
  tag: string;
  desc: string;
  image: string;
};

const projects: Project[] = [
  {
    name: "Bluna X · Londra",
    tag: "Anta da pavimento a soffitto",
    desc:
      "Cucina Bluna installata in un appartamento di rappresentanza londinese. Tecnologia Anta Mantis (sp. 1,2 cm in alveolare di alluminio): le altezze non sono più un vincolo, una sola anta corre dal pavimento al soffitto.",
    image: "/images/collections/mantis/g1.jpg",
  },
  {
    name: "Mantis + Scava",
    tag: "Spina di pesce in legno",
    desc:
      "Combinazione di Mantis (struttura leggera) e Scava (sottrazione della materia). Frontale in legno a spina di pesce, top in pietra scura. Un progetto per chi cerca contrasto materico senza rumore visivo.",
    image: "/images/collections/scava/g1.jpg",
  },
  {
    name: "Bluna · Mensola Ice",
    tag: "Acciaio + legno",
    desc:
      "Inserimento della mensola Ice — pensata da Binova per ospitare scatole contenitive in legno. Una soluzione che mantiene la pulizia visiva di Bluna aggiungendo profondità funzionale.",
    image: "/images/collections/bluna/g3.jpg",
  },
  {
    name: "Vesta · Calacatta",
    tag: "Marmo dal pavimento al soffitto",
    desc:
      "Quando il marmo non è rivestimento ma architettura. Lastre Calacatta che corrono integre dal piano al fondale, isola-blocco scolpita nello stesso materiale, Miele integrato.",
    image: "/images/heritage/atmosphere-2.jpg",
  },
];

export default function ProgettazionePage() {
  return (
    <main className="relative bg-binova-black">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[90svh] min-h-[560px] max-md:min-h-[500px] overflow-hidden bg-binova-black">
        <Image
          src="/images/collections/mantis/g1.jpg"
          alt="Progettazione Cucine Binova"
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
            <span className="text-binova-bone">Progettazione</span>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold-soft">
              · Servizio Binova
            </span>
            <h1 className="font-display text-[clamp(2.8rem,7vw,7rem)] max-md:text-[clamp(2.4rem,11vw,4rem)] font-light leading-[0.95] tracking-tight text-binova-bone drop-shadow-[0_4px_40px_rgba(0,0,0,0.5)]">
              Progettazione{" "}
              <span className="italic text-binova-gold-soft">
                Cucine.
              </span>
            </h1>
          </div>

          <p className="max-w-2xl text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-binova-bone/85">
            Disegnare la cucina è disegnare lo spazio che la accoglie. I
            nostri architetti ti seguono dalla prima visita in showroom
            fino al collaudo finale in cantiere.
          </p>
        </div>
      </section>

      {/* Intro copy */}
      <section className="bg-binova-ink px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto grid max-w-[1400px] gap-16 max-lg:gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7" data-reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · Approccio
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,3.5vw,3.5rem)] max-md:text-[clamp(1.7rem,7vw,2.6rem)] font-light leading-[1.05] tracking-tight text-binova-bone">
              Una cucina non è un mobile. È architettura che si abita.
            </h2>
            <p className="mt-8 text-[clamp(1rem,1.1vw,1.1rem)] leading-relaxed text-binova-bone/70">
              Per questo il nostro processo di progettazione comincia
              dallo spazio, non dal catalogo. Prima studiamo l'ambiente,
              le aperture, la luce, il flusso di chi ci abiterà. Solo dopo
              scegliamo finiture e modelli — perché la stessa collezione
              può vivere dieci vite diverse a seconda di dove la metti.
            </p>
            <p className="mt-4 text-[clamp(1rem,1.1vw,1.1rem)] leading-relaxed text-binova-bone/70">
              Ogni progetto Binova è seguito da un architetto dedicato,
              che lavora in dialogo con il tuo studio (o, se non ne hai
              uno, fa da architetto interno per te). Tavole esecutive,
              abachi materiali, coordinamento elettrodomestici: tutto su
              misura del cantiere.
            </p>
          </div>

          <aside className="lg:col-span-5" data-reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · Cinque domande prima di iniziare
            </span>
            <ul className="mt-6">
              <AccordionItem title="Spazio disponibile">
                Quanti metri quadri reali abbiamo? Dove sono i muri
                portanti, le pluviali, le canne fumarie? Lo spazio
                comanda le proporzioni — non il contrario.
              </AccordionItem>
              <AccordionItem title="Come la userai davvero">
                Cucini ogni giorno o accogli ospiti due volte al mese?
                Il design cambia: una cucina-laboratorio ha priorità
                ergonomiche diverse da una cucina-palcoscenico.
              </AccordionItem>
              <AccordionItem title="Cosa vuoi ottimizzare">
                Le cucine sbagliate non sono brutte — sono inefficienti.
                Studiamo i tuoi gesti, dal frigo al piano al fuoco, e
                accorciamo i tragitti che farai migliaia di volte.
              </AccordionItem>
              <AccordionItem title="A vista o a scomparsa">
                Dispense aperte come scenografia. O pannelli scorrevoli
                che chiudono tutto in una parete pulita. Due filosofie
                opposte, due vite domestiche opposte.
              </AccordionItem>
              <AccordionItem title="Budget e priorità">
                Definiamo insieme dove vale spendere (top, elettrodomestici,
                un'isola in marmo monolitico) e dove conviene risparmiare.
                Il budget guida il progetto, non lo limita.
              </AccordionItem>
            </ul>
          </aside>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-binova-black px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
            data-reveal
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
                · Progetti
              </span>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,4rem)] max-md:text-[clamp(1.8rem,8vw,3rem)] font-light leading-[1] tracking-tight text-binova-bone">
                Quattro cantieri,{" "}
                <span className="italic text-binova-gold-soft">
                  quattro lingue.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-binova-bone/60">
              Stesso DNA progettuale, soluzioni completamente diverse a
              seconda di chi abita e di che casa ospita la cucina.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 max-md:gap-8 md:grid-cols-2 lg:gap-14">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex flex-col gap-5"
                data-reveal
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/[0.06] bg-binova-stone">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-[0.32em] text-binova-gold-soft">
                    · {project.tag}
                  </span>
                  <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] font-light leading-[1.1] text-binova-bone">
                    {project.name}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-binova-bone/60">
                    {project.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 flex justify-center max-lg:mt-14" data-reveal>
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 border border-binova-bone/30 px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-binova-bone transition-all duration-500 hover:border-binova-gold hover:text-binova-gold"
            >
              Fissa un appuntamento con un architetto
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <Contacts />
      <Footer />
    </main>
  );
}
