import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Accessibility · Binova",
  description:
    "Dichiarazione di accessibilità del sito Binova. Impegno verso WCAG 2.1 livello AA.",
};

export default async function AccessibilitaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (locale === "en") {
    return (
      <LegalLayout
        eyebrow="Accessibility"
        title="Accessibility statement"
        subtitle="Binova design is inclusive by philosophy. We work to make our digital presence inclusive too, on every device and in every environment."
        updated="21 May 2026"
      >
        <h2>Our commitment</h2>
        <p>
          Binova is committed to making its website accessible to as many
          people as possible, regardless of any disability or assistive
          technology used. We adopt the international{" "}
          <strong>WCAG 2.1 Level AA</strong> guidelines from the W3C and
          the European digital accessibility regulations as our reference.
        </p>

        <h2>What we have implemented</h2>
        <ul>
          <li><strong>Semantic structure</strong>: correct use of HTML5 tags (header, main, nav, section, article, footer) to guide screen readers</li>
          <li><strong>Keyboard navigation</strong>: all interactive elements are reachable and activatable from the keyboard with visible focus state</li>
          <li><strong>Colour contrast</strong>: the black/gold/bone palette respects the minimum 4.5:1 ratio for standard text and 3:1 for large text</li>
          <li><strong>Alternative text</strong>: all significant images have a descriptive alt attribute</li>
          <li><strong>Reduced motion</strong>: we respect the system <code>prefers-reduced-motion</code> setting, disabling animations and transitions when requested</li>
          <li><strong>Touch targets</strong>: all touch buttons and links have a minimum 44×44 pixel area on mobile devices</li>
          <li><strong>Responsive design</strong>: the layout adapts to all screen sizes from 320 px upwards with no need for horizontal scrolling</li>
          <li><strong>Readable typography</strong>: text sizes adjustable via browser settings, fonts with good legibility at small sizes</li>
        </ul>

        <h2>Conformance</h2>
        <p>
          The site is <strong>partially conformant</strong> with WCAG 2.1
          Level AA. We are working towards full conformance in upcoming
          releases, in particular on:
        </p>
        <ul>
          <li>Subtitles and audio descriptions for video content</li>
          <li>Text transcripts of immersive experiences</li>
          <li>Full compatibility with all major screen readers</li>
        </ul>

        <h2>Report an issue</h2>
        <p>
          If you encounter an obstacle when using the site or have a
          suggestion for improving accessibility, write to us at{" "}
          <a href="mailto:accessibilita@binovamilano.it">accessibilita@binovamilano.it</a>.
          We will reply within 30 days and commit to resolving the
          issue raised.
        </p>

        <h2>Useful resources</h2>
        <ul>
          <li><a href="https://www.agid.gov.it/it/design-servizi/accessibilita" target="_blank" rel="noopener noreferrer">AgID — Accessibility guidelines</a></li>
          <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">W3C — Web Content Accessibility Guidelines</a></li>
        </ul>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout
      eyebrow="Accessibilità"
      title="Dichiarazione di accessibilità"
      subtitle="Il design di Binova è inclusivo per filosofia. Lavoriamo affinché lo sia anche la nostra presenza digitale, in ogni ambiente e su ogni dispositivo."
      updated="21 maggio 2026"
    >
      <h2>Il nostro impegno</h2>
      <p>
        Binova si impegna a rendere il proprio sito web accessibile al
        maggior numero possibile di persone, indipendentemente da
        eventuali disabilità o tecnologie assistive utilizzate. Adottiamo
        come riferimento le linee guida internazionali{" "}
        <strong>WCAG 2.1 livello AA</strong> del W3C e la normativa
        europea sull'accessibilità digitale.
      </p>

      <h2>Cosa abbiamo implementato</h2>
      <ul>
        <li><strong>Struttura semantica</strong>: utilizzo corretto di tag HTML5 (header, main, nav, section, article, footer) per orientare gli screen reader</li>
        <li><strong>Navigazione da tastiera</strong>: tutti gli elementi interattivi sono raggiungibili e attivabili da tastiera con stato di focus visibile</li>
        <li><strong>Contrasto cromatico</strong>: la palette nero/oro/bone rispetta il rapporto minimo 4.5:1 per i testi standard e 3:1 per i testi grandi</li>
        <li><strong>Testi alternativi</strong>: tutte le immagini significative dispongono di attributo alt descrittivo</li>
        <li><strong>Riduzione movimento</strong>: rispettiamo l'impostazione di sistema <code>prefers-reduced-motion</code>, disattivando animazioni e transizioni quando richiesto</li>
        <li><strong>Touch target</strong>: tutti i pulsanti e link tattili hanno una superficie minima di 44×44 pixel su dispositivi mobile</li>
        <li><strong>Responsive design</strong>: il layout si adatta a tutte le dimensioni di schermo da 320 px in su senza necessità di zoom orizzontale</li>
        <li><strong>Tipografia leggibile</strong>: dimensioni del testo regolabili tramite impostazioni del browser, font con buona leggibilità ai piccoli formati</li>
      </ul>

      <h2>Conformità</h2>
      <p>
        Il sito è in <strong>parziale conformità</strong> con le WCAG 2.1
        livello AA. Stiamo lavorando per raggiungere la piena conformità
        nei prossimi rilasci, in particolare su:
      </p>
      <ul>
        <li>Sottotitoli e descrizioni audio per i contenuti video</li>
        <li>Trascrizioni testuali delle esperienze immersive</li>
        <li>Compatibilità completa con tutti i principali screen reader</li>
      </ul>

      <h2>Segnala un problema</h2>
      <p>
        Se incontri un ostacolo nella fruizione del sito o hai un
        suggerimento per migliorare l'accessibilità, scrivici a{" "}
        <a href="mailto:accessibilita@binovamilano.it">accessibilita@binovamilano.it</a>.
        Risponderemo entro 30 giorni e ci impegneremo a risolvere
        l'eventuale criticità segnalata.
      </p>

      <h2>Strumenti utili</h2>
      <p>
        Per migliorare la fruibilità del web da parte di tutti
        consigliamo le risorse messe a disposizione da:
      </p>
      <ul>
        <li><a href="https://www.agid.gov.it/it/design-servizi/accessibilita" target="_blank" rel="noopener noreferrer">AgID — Linee guida accessibilità</a></li>
        <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">W3C — Web Content Accessibility Guidelines</a></li>
      </ul>
    </LegalLayout>
  );
}
