export const materialDescriptions: Record<string, string> = {
  // Avola
  "Noce Canaletto":
    "Essenza pregiata americana, venatura morbida e tonalità calde dorate. Lavorata a poro aperto per esaltare il disegno naturale del legno.",
  "Marmo Sahara Noir":
    "Marmo dell'Atlante con venature dorate su fondo nero profondo. Selezionato lastra per lastra, lavorato in spessori da 3 cm.",
  "Ottone brunito":
    "Lega trattata a caldo per ottenere la patina bruna antica. Tutti gli elementi metallici sono prodotti su misura del progetto.",
  "Vetro Rain":
    "Vetro stampato con l'effetto gocce di pioggia ottenuto per sottrazione ad acido. Esclusiva del catalogo Binova 2026.",

  // Bluna
  "Laccato opaco":
    "Verniciatura mat ai polveri ceramici. 16 colori del catalogo, anti-impronta e ricaricabile in caso di abrasioni profonde.",
  "Ebano Makassar":
    "Essenza esotica indonesiana con venatura marcata, palette dal bruno al nero. Prodotta in misure controllate per garantire continuità.",
  "Grès effetto pietra":
    "Lastre in grès porcellanato di grande formato (160×320 cm). Spessore sottile, leggerezza strutturale, resistenza al graffio.",
  Acciaio:
    "Inox satinato spessore 1,2 mm con bordi piegati. Inalterabile, ideale per i piani di lavoro a contatto con liquidi e calore.",

  // Vogue
  "Rovere termotrattato":
    "Rovere essiccato in autoclave per garantire stabilità dimensionale in ogni clima. Colore ambra naturale, ricco di sfumature.",
  "Alluminio spazzolato":
    "Alluminio anodizzato con finitura satinata, anti-impronta. Bordi netti e tolleranze stretto per le ante a taglio verticale.",
  "Vetro acidato":
    "Vetro trattato con acido per ottenere una finitura morbida traslucida. Lascia filtrare la luce senza svelare il contenuto.",

  // Vesta
  "Marmo Calacatta":
    "Marmo bianco delle Apuane con venature grigio-oro. Selezione delle lastre direttamente in cava per ogni singolo progetto.",
  "Statuario lucido":
    "Bianco Statuario con lucidatura specchio. Marmo storico di Carrara, riservato ai progetti contract di alta gamma.",
  "Miele integrato":
    "Elettrodomestici della linea Miele Generation 7000 ad incasso totale. Coordinamento diretto con il fornitore in fase di cantiere.",

  // Scava
  "Marmo bocciardato":
    "Marmo lavorato con bocciarde per finitura ruvida tridimensionale. Sensazione tattile inedita, perfetta per i fondali.",
  "Cemento materico":
    "Cemento polimerico applicato a mano in spessore di 3 mm. Totalmente personalizzabile nel colore, fugato a vista per cifra autoriale.",
  "Quercia spazzolata":
    "Quercia europea spazzolata a setole metalliche per esaltare la venatura. Finitura tattile, calda, viva.",

  // Mantis
  "Alluminio 12mm":
    "Anta tecnica in alluminio alveolare spessore 12 mm. Esclusiva Mantis: leggerezza strutturale + altezze libere fino al soffitto.",
  "Rovere Saturno":
    "Variante cromatica del rovere disegnata da Binova: tonalità ardesia con riflessi caldi. Coordinata con i metalli scuri.",
  "Vetro nero strutturale":
    "Vetro temperato di sicurezza, finitura nera satinata, spessore 6 mm. Usato come fondale o come schienale tecnico.",

  // Regula
  "Frassino tinto":
    "Frassino europeo tinto e laccato per ottenere palette personalizzata sul progetto. Resa morbida, venatura visibile.",
  "Brass anticato":
    "Ottone trattato chimicamente per ottenere patina d'epoca. Ogni pezzo è unico — nessuna patina è identica alla successiva.",

  // Ono
  "Olmo naturale":
    "Essenza italiana a poro aperto, venatura morbida e dorata. Cresce nella Pianura Padana, finitura naturale a olio duro.",
  "Pietra Serena":
    "Pietra fiorentina dall'inconfondibile grigio-azzurro. Lavorabile per spessori importanti, ideale per piani monolitici.",
  "Lacca opaca":
    "Verniciatura mat ai polveri ceramici. 16 colori del catalogo 2026, anti-impronta, riparabile.",
};

export function getMaterialDescription(name: string): string {
  return (
    materialDescriptions[name] ??
    "Finitura del catalogo Binova 2026. Disponibile in showroom per consultazione campioni e abbinamenti."
  );
}
