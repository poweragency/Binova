import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Note legali · Binova",
  description:
    "Informazioni legali e societarie del sito Binova. Cubo Design S.r.l., P.IVA 01579900679.",
};

export default function LegalPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Note legali"
      subtitle="Informazioni sulla società che gestisce il sito e sulle condizioni di utilizzo dei contenuti pubblicati."
      updated="21 maggio 2026"
    >
      <h2>Editore del sito</h2>
      <p>
        Il sito <strong>binova.it</strong> è gestito da <strong>Cubo Design S.r.l.</strong>,
        società di diritto italiano facente parte del gruppo{" "}
        <strong>Italian Design Brands (IDB)</strong>.
      </p>
      <ul>
        <li>Sede legale: Contrada Grasciano, Notaresco (TE) — Italia</li>
        <li>P.IVA / Codice Fiscale: 01579900679</li>
        <li>Iscrizione Registro Imprese di Teramo: REA TE 158329</li>
        <li>Capitale Sociale: interamente versato</li>
        <li>PEC: cubodesign@pec.it</li>
      </ul>

      <h2>Brand</h2>
      <p>
        <strong>Binova</strong> è un marchio registrato di Cubo Design S.r.l.
        Lo showroom flagship si trova in <strong>Via Durini 17, 20122 Milano</strong>.
        Tutti gli altri marchi citati nel sito appartengono ai rispettivi
        titolari.
      </p>

      <h2>Proprietà intellettuale</h2>
      <p>
        Tutti i contenuti pubblicati — testi, immagini, video, fotografie,
        progetti, render, marchi, loghi e materiali grafici — sono di
        esclusiva proprietà di Cubo Design S.r.l. o utilizzati su licenza
        dei legittimi titolari. La riproduzione, modifica, distribuzione o
        utilizzo commerciale dei contenuti senza autorizzazione scritta è
        vietata e perseguita ai sensi di legge.
      </p>

      <h2>Limitazione di responsabilità</h2>
      <p>
        Cubo Design S.r.l. si impegna a garantire la massima accuratezza
        delle informazioni pubblicate ma non assume responsabilità in
        merito a eventuali errori, omissioni o difformità rispetto a
        quanto effettivamente disponibile in showroom. Caratteristiche
        tecniche, finiture, dimensioni e prezzi possono variare senza
        preavviso. Per informazioni vincolanti rivolgersi al rivenditore
        autorizzato di riferimento.
      </p>

      <h2>Link esterni</h2>
      <p>
        Il sito può contenere link a risorse esterne. Cubo Design S.r.l.
        non controlla i contenuti di tali siti e non si assume
        responsabilità per le informazioni in essi pubblicate o per
        eventuali danni derivanti dal loro utilizzo.
      </p>

      <h2>Foro competente e legge applicabile</h2>
      <p>
        Le presenti note legali sono regolate dalla legge italiana. Per
        ogni controversia derivante dall'utilizzo del sito sarà competente
        in via esclusiva il <strong>Foro di Teramo</strong>, salvo diversa
        disposizione inderogabile di legge.
      </p>

      <h2>Contatti</h2>
      <p>
        Per qualsiasi comunicazione di natura legale è possibile scrivere
        a <a href="mailto:legal@binovamilano.it">legal@binovamilano.it</a> o
        contattare la sede legale all'indirizzo sopra indicato.
      </p>
    </LegalLayout>
  );
}
