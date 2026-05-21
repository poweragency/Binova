import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { collections, getCollectionBySlug } from "@/data/collections";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return { title: "Cucina non trovata · Binova" };
  return {
    title: `${collection.name} — Cucine d'autore · Binova`,
    description: collection.shortDesc,
    openGraph: {
      title: `${collection.name} · Binova`,
      description: collection.shortDesc,
      images: collection.image ? [collection.image] : [],
    },
  };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const currentIndex = collections.findIndex((c) => c.slug === collection.slug);
  const prev = collections[(currentIndex - 1 + collections.length) % collections.length];
  const next = collections[(currentIndex + 1) % collections.length];

  return (
    <main className="relative">
      <Navbar />

      {/* Hero — full-bleed kitchen image */}
      <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-binova-black">
        {collection.image ? (
          <Image
            src={collection.image}
            alt={collection.name}
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-stone-700 via-stone-800 to-stone-950" />
        )}

        {/* Layered overlay */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.15) 40%, rgba(10,10,10,0.55) 80%, rgba(10,10,10,0.95) 100%)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-between px-6 pb-16 pt-32 lg:px-12 lg:pb-20 lg:pt-40">
          {/* Top — breadcrumb */}
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-binova-bone/60">
            <Link href="/" className="hover:text-binova-bone transition-colors">
              Binova
            </Link>
            <span className="text-binova-bone/30">/</span>
            <Link
              href="/#collections"
              className="hover:text-binova-bone transition-colors"
            >
              Collezioni
            </Link>
            <span className="text-binova-bone/30">/</span>
            <span className="text-binova-bone">{collection.name}</span>
          </div>

          {/* Center — name */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="font-display text-binova-gold-soft">
                {collection.code}
              </span>
              <span className="h-px w-12 bg-binova-gold/60" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-binova-bone/80">
                {collection.tag}
              </span>
            </div>
            <h1 className="font-display text-[clamp(4rem,14vw,14rem)] font-light leading-[0.85] tracking-tight text-binova-bone drop-shadow-[0_4px_40px_rgba(0,0,0,0.5)]">
              {collection.name}
            </h1>
          </div>

          {/* Bottom — short desc */}
          <p className="max-w-2xl text-[clamp(1rem,1.3vw,1.2rem)] leading-relaxed text-binova-bone/85">
            {collection.shortDesc}
          </p>
        </div>
      </section>

      {/* Long description + materials */}
      <section className="bg-binova-ink px-6 py-32 lg:px-12 lg:py-44">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · Identità
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-[1.05] tracking-tight text-binova-bone">
              {collection.longDesc.split(". ")[0]}.
            </h2>
            <p className="mt-8 text-[clamp(1rem,1.1vw,1.1rem)] leading-relaxed text-binova-bone/70">
              {collection.longDesc.split(". ").slice(1).join(". ")}
            </p>
          </div>

          <aside className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · Materiali firma
            </span>
            <ul className="mt-6 divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {(collection.materials ?? []).map((m) => (
                <li
                  key={m}
                  className="flex items-center justify-between py-4 text-binova-bone/85"
                >
                  <span className="font-display text-lg">{m}</span>
                  <span className="text-binova-bone/30" aria-hidden>
                    +
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#book"
              className="group mt-10 inline-flex items-center gap-4 border border-binova-bone/30 px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-binova-bone transition-all duration-500 hover:border-binova-gold hover:text-binova-gold"
            >
              Richiedi {collection.name}
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          </aside>
        </div>
      </section>

      {/* Second image block — only if image */}
      {collection.image && (
        <section className="relative bg-binova-black px-6 py-20 lg:px-12 lg:py-32">
          <div className="relative mx-auto aspect-[16/9] w-full max-w-[1400px] overflow-hidden">
            <Image
              src={collection.image}
              alt={`${collection.name} — dettaglio`}
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover"
            />
          </div>
        </section>
      )}

      {/* Prev / next nav */}
      <section className="border-t border-white/[0.06] bg-binova-black px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-8">
          <Link
            href={`/cucine/${prev.slug}`}
            className="group flex flex-col gap-3"
          >
            <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
              ← Precedente
            </span>
            <span className="font-display text-2xl text-binova-bone transition-colors group-hover:text-binova-gold-soft lg:text-3xl">
              {prev.name}
            </span>
          </Link>
          <Link
            href={`/cucine/${next.slug}`}
            className="group flex flex-col items-end gap-3 text-right"
          >
            <span className="text-[10px] uppercase tracking-[0.32em] text-binova-bone/40">
              Successiva →
            </span>
            <span className="font-display text-2xl text-binova-bone transition-colors group-hover:text-binova-gold-soft lg:text-3xl">
              {next.name}
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
