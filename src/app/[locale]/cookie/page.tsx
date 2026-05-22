import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy · Binova",
  description:
    "Informativa sull'utilizzo dei cookie e di tecnologie analoghe sul sito Binova.",
};

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // DE/ES/FR fall back to the English convenience translation until
  // localised legal copy is reviewed by counsel. IT remains the binding text.
  if (locale !== "it") {
    return (
      <LegalLayout
        eyebrow="Cookies"
        title="Cookie Policy"
        subtitle="This page describes how Binova uses cookies and similar technologies on this website, in accordance with the Italian Data Protection Authority's order of 10 June 2021."
        updated="21 May 2026"
      >
        <p>
          <strong>Note:</strong> the Italian version of this notice is the
          legally binding text. The translation below is provided for
          convenience only.
        </p>

        <h2>What cookies are</h2>
        <p>
          Cookies are small text files that visited sites store on the
          user's device. They are used to ensure the correct functioning of
          the pages, to improve the browsing experience, to collect usage
          statistics and — only with consent — for profiling purposes.
        </p>

        <h2>Types used</h2>

        <h3>Technical cookies (always active)</h3>
        <p>
          Essential for the operation of the site. They store preferences
          such as language, consent state and whether the intro has been
          shown. No consent is required.
        </p>

        <h3>Analytics cookies</h3>
        <p>
          Used in aggregate, anonymised form to understand how users
          interact with the site (pages visited, time spent, devices). They
          are activated only after the user has given consent.
        </p>

        <h3>Profiling cookies</h3>
        <p>
          May be installed by third parties to deliver advertising in line
          with the preferences shown by the user during navigation. Active
          only after explicit consent.
        </p>

        <h2>Managing preferences</h2>
        <p>
          You can change your cookie preferences at any time via the banner
          on the site or by acting directly on your browser settings. For
          detailed instructions, see your browser's guide:
        </p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>

        <h2>Third-party cookies</h2>
        <p>
          Some integrated services (e.g. maps, videos, web fonts) may
          install cookies on your device themselves. For the processing of
          such cookies we refer to the respective providers' notices.
        </p>

        <h2>Contact</h2>
        <p>
          For any request relating to cookies and personal-data
          processing, write to{" "}
          <a href="mailto:privacy@binovamilano.it">privacy@binovamilano.it</a>.
          See also our <a href="/privacy">Privacy Policy</a>.
        </p>
      </LegalLayout>
    );
  }

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
