import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy · Binova",
  description:
    "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Privacy"
      title="Privacy Policy"
      subtitle="Informativa resa ai sensi del Regolamento UE 2016/679 (GDPR) e della normativa italiana applicabile in materia di protezione dei dati personali."
      updated="21 maggio 2026"
    >
      <h2>Titolare del trattamento</h2>
      <p>
        Il titolare del trattamento dei dati è <strong>Cubo Design S.r.l.</strong>,
        con sede legale in Contrada Grasciano, Notaresco (TE), Italia.
        P.IVA / C.F. 01579900679. Per qualsiasi richiesta relativa al
        trattamento dei dati personali è possibile scrivere a{" "}
        <a href="mailto:privacy@binovamilano.it">privacy@binovamilano.it</a>.
      </p>

      <h2>Dati raccolti</h2>
      <p>
        Raccogliamo unicamente i dati strettamente necessari a erogare i
        servizi richiesti dall'utente:
      </p>
      <ul>
        <li>Dati anagrafici e di contatto forniti spontaneamente attraverso i form (nome, email, telefono, messaggio)</li>
        <li>Dati di navigazione tecnici (indirizzo IP, browser, lingua, pagine visitate)</li>
        <li>Cookie tecnici e, previo consenso, cookie statistici e di profilazione (vedi <a href="/cookie">Cookie Policy</a>)</li>
      </ul>

      <h2>Finalità del trattamento</h2>
      <p>I dati sono trattati per le seguenti finalità:</p>
      <ul>
        <li>Rispondere a richieste di informazioni, preventivi e prenotazioni di visite presso lo showroom</li>
        <li>Garantire il funzionamento e la sicurezza del sito</li>
        <li>Adempimenti contabili e fiscali quando previsto da legge</li>
        <li>Invio di comunicazioni commerciali, esclusivamente previo consenso esplicito e revocabile in ogni momento</li>
      </ul>

      <h2>Base giuridica</h2>
      <p>
        Il trattamento si fonda sull'esecuzione di misure precontrattuali
        richieste dall'interessato (art. 6.1.b GDPR), sul consenso esplicito
        ove necessario (art. 6.1.a GDPR), su obblighi di legge (art. 6.1.c
        GDPR) e sul legittimo interesse del titolare (art. 6.1.f GDPR).
      </p>

      <h2>Conservazione</h2>
      <p>
        I dati sono conservati per il tempo strettamente necessario al
        conseguimento delle finalità per cui sono stati raccolti, fatti
        salvi obblighi di conservazione previsti dalla normativa fiscale e
        civilistica.
      </p>

      <h2>Diritti dell'interessato</h2>
      <p>
        In qualità di interessato hai diritto, in qualsiasi momento, di
        accedere ai tuoi dati, rettificarli, cancellarli, limitarne il
        trattamento, opporti al trattamento, ricevere i dati in un formato
        strutturato e portarli verso altro titolare, oltre a revocare il
        consenso prestato. Puoi esercitare i tuoi diritti scrivendo a{" "}
        <a href="mailto:privacy@binovamilano.it">privacy@binovamilano.it</a>.
        Hai inoltre il diritto di proporre reclamo al Garante per la
        Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">garanteprivacy.it</a>).
      </p>

      <h2>Modifiche</h2>
      <p>
        Ci riserviamo il diritto di aggiornare la presente informativa in
        qualsiasi momento. La versione corrente è sempre disponibile su
        questa pagina con la data di ultimo aggiornamento.
      </p>
    </LegalLayout>
  );
}
