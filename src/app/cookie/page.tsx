import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy · Binova",
  description:
    "Informativa sull'utilizzo dei cookie e di tecnologie analoghe sul sito Binova.",
};

export default function CookiePage() {
  return (
    <LegalLayout
      eyebrow="Cookie"
      title="Cookie Policy"
      subtitle="Questa pagina descrive le modalità con cui Binova utilizza cookie e tecnologie analoghe sul presente sito, conformemente al Provvedimento del Garante del 10 giugno 2021."
      updated="21 maggio 2026"
    >
      <h2>Cosa sono i cookie</h2>
      <p>
        I cookie sono piccoli file di testo che i siti visitati memorizzano
        sul dispositivo dell'utente. Sono utilizzati per il corretto
        funzionamento delle pagine, per migliorare l'esperienza di
        navigazione, per raccogliere statistiche di utilizzo e — solo
        previo consenso — per finalità di profilazione.
      </p>

      <h2>Tipologie utilizzate</h2>

      <h3>Cookie tecnici (sempre attivi)</h3>
      <p>
        Indispensabili al funzionamento del sito. Memorizzano preferenze
        come la lingua, lo stato del consenso e l'avvenuta visualizzazione
        dell'intro. Non richiedono consenso.
      </p>

      <h3>Cookie analitici</h3>
      <p>
        Utilizzati in forma aggregata e anonimizzata per comprendere come
        gli utenti interagiscono con il sito (pagine visitate, tempo di
        permanenza, dispositivi). Vengono attivati solo dopo che l'utente
        ha prestato il proprio consenso.
      </p>

      <h3>Cookie di profilazione</h3>
      <p>
        Possono essere installati da terze parti per inviare messaggi
        pubblicitari in linea con le preferenze manifestate dall'utente
        durante la navigazione. Attivi solo dopo consenso esplicito.
      </p>

      <h2>Gestione delle preferenze</h2>
      <p>
        Puoi modificare in qualsiasi momento le tue preferenze sui cookie
        attraverso il banner presente sul sito o agendo direttamente sulle
        impostazioni del tuo browser. Per istruzioni dettagliate
        consulta la guida del tuo browser:
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
        <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>

      <h2>Cookie di terze parti</h2>
      <p>
        Alcuni servizi integrati (es. mappe, video, font web) possono
        installare cookie autonomamente sul tuo dispositivo. Per il
        trattamento di tali cookie facciamo riferimento alle informative
        dei rispettivi fornitori.
      </p>

      <h2>Contatti</h2>
      <p>
        Per qualsiasi richiesta relativa ai cookie e al trattamento dei
        dati personali scrivi a{" "}
        <a href="mailto:privacy@binovamilano.it">privacy@binovamilano.it</a>.
        Vedi anche la nostra <a href="/privacy">Privacy Policy</a>.
      </p>
    </LegalLayout>
  );
}
