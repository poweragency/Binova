import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Accessibilità · Binova",
  description:
    "Dichiarazione di accessibilità del sito Binova. Impegno verso WCAG 2.1 livello AA.",
};

export default function AccessibilitaPage() {
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
