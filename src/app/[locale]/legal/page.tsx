import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Legal · Binova",
  description:
    "Informazioni legali e societarie del sito Binova. Cubo Design S.r.l., P.IVA 01579900679.",
};

export default async function LegalPage({
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
        eyebrow="Legal"
        title="Legal notice"
        subtitle="Information about the company operating the site and the conditions of use of the published content."
        updated="21 May 2026"
      >
        <p>
          <strong>Note:</strong> the Italian version of this notice is the
          legally binding text. The translation below is provided for
          convenience only.
        </p>

        <h2>Publisher of the site</h2>
        <p>
          The site <strong>binova.it</strong> is operated by{" "}
          <strong>Cubo Design S.r.l.</strong>, an Italian company part of
          the <strong>Italian Design Brands (IDB)</strong> group.
        </p>
        <ul>
          <li>Registered office: Contrada Grasciano, Notaresco (TE) — Italy</li>
          <li>VAT / Tax Code: 01579900679</li>
          <li>Teramo Companies Register: REA TE 158329</li>
          <li>Share capital: fully paid up</li>
          <li>PEC: cubodesign@pec.it</li>
        </ul>

        <h2>Brand</h2>
        <p>
          <strong>Binova</strong> is a registered trademark of Cubo Design
          S.r.l. The flagship showroom is located at{" "}
          <strong>Via Durini 17, 20122 Milan</strong>. All other trademarks
          mentioned on the site belong to their respective owners.
        </p>

        <h2>Intellectual property</h2>
        <p>
          All published content — texts, images, videos, photographs,
          projects, renderings, trademarks, logos and graphic materials —
          is the exclusive property of Cubo Design S.r.l. or used under
          licence from the legitimate owners. The reproduction,
          modification, distribution or commercial use of the content
          without written authorisation is prohibited and prosecuted
          according to law.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          Cubo Design S.r.l. is committed to ensuring the maximum accuracy
          of the information published but assumes no responsibility for
          any errors, omissions or differences with respect to what is
          actually available in the showroom. Technical characteristics,
          finishes, dimensions and prices may change without notice. For
          binding information please contact the authorised dealer.
        </p>

        <h2>External links</h2>
        <p>
          The site may contain links to external resources. Cubo Design
          S.r.l. does not control the content of such sites and assumes no
          responsibility for the information published on them or for any
          damage resulting from their use.
        </p>

        <h2>Jurisdiction and applicable law</h2>
        <p>
          This legal notice is governed by Italian law. For any dispute
          arising from the use of the site, the{" "}
          <strong>Court of Teramo</strong> shall have exclusive
          jurisdiction, save for any mandatory provision of law to the
          contrary.
        </p>

        <h2>Contact</h2>
        <p>
          For any communication of a legal nature, please write to{" "}
          <a href="mailto:legal@binovamilano.it">legal@binovamilano.it</a> or
          contact the registered office at the address indicated above.
        </p>
      </LegalLayout>
    );
  }

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
