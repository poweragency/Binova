import CompareSlider from "../CompareSlider";

export default function Materials() {
  return (
    <section
      id="materials"
      className="relative scroll-mt-24 overflow-hidden bg-binova-ink px-6 py-32 max-lg:py-20 max-md:py-16 lg:px-12 lg:py-44"
    >
      <div className="mx-auto max-w-[1400px]">
        <div
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          data-reveal
        >
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · Materiali
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,5rem)] max-md:text-[clamp(2rem,8vw,3.2rem)] font-light leading-[0.95] tracking-tight text-binova-bone">
              Due anime.{" "}
              <span className="italic text-binova-gold-soft">
                Stesso DNA.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-binova-bone/65">
            Trascina la linea oro per esplorare due dei nostri linguaggi:
            la cucina <strong className="text-binova-bone">scura e
            scultorea</strong> contro la cucina <strong className="text-binova-bone">chiara e
            marmorea</strong>. Stesso telaio, due caratteri opposti.
          </p>
        </div>

        <div className="mt-16 max-lg:mt-12" data-reveal>
          <CompareSlider
            before={{
              src: "/images/collections/bluna/g3.jpg",
              label: "Bluna · Ebano",
            }}
            after={{
              src: "/images/heritage/atmosphere-2.jpg",
              label: "Vesta · Calacatta",
            }}
            alt="Confronto Bluna ebano vs Vesta calacatta"
          />
        </div>
      </div>
    </section>
  );
}
