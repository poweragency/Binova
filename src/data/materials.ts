type Locale = "it" | "en";

type LocalizedDescription = Record<Locale, string>;

const FALLBACK: LocalizedDescription = {
  it: "Finitura del catalogo Binova 2026. Disponibile in showroom per consultazione campioni e abbinamenti.",
  en: "Finish from the Binova 2026 catalogue. Available in the showroom for sample consultation and pairing.",
};

// Material names are keyed by their IT label (the canonical name in collections data).
// Each entry contains the localized title and body for IT and EN.
type MaterialEntry = {
  title: LocalizedDescription;
  desc: LocalizedDescription;
};

const ENTRIES: Record<string, MaterialEntry> = {
  "Noce Canaletto": {
    title: { it: "Noce Canaletto", en: "Canaletto walnut" },
    desc: {
      it: "Essenza pregiata americana, venatura morbida e tonalità calde dorate. Lavorata a poro aperto per esaltare il disegno naturale del legno.",
      en: "Premium American walnut with a soft grain and warm golden tones. Open-pore finish to enhance the natural pattern of the wood.",
    },
  },
  "Marmo Sahara Noir": {
    title: { it: "Marmo Sahara Noir", en: "Sahara Noir marble" },
    desc: {
      it: "Marmo dell'Atlante con venature dorate su fondo nero profondo. Selezionato lastra per lastra, lavorato in spessori da 3 cm.",
      en: "Atlas marble with golden veining on a deep black background. Selected slab by slab, worked in 3 cm thicknesses.",
    },
  },
  "Ottone brunito": {
    title: { it: "Ottone brunito", en: "Burnished brass" },
    desc: {
      it: "Lega trattata a caldo per ottenere la patina bruna antica. Tutti gli elementi metallici sono prodotti su misura del progetto.",
      en: "Alloy heat-treated to obtain an antique brown patina. All metal elements are made to measure for the project.",
    },
  },
  "Vetro Rain": {
    title: { it: "Vetro Rain", en: "Rain glass" },
    desc: {
      it: "Vetro stampato con l'effetto gocce di pioggia ottenuto per sottrazione ad acido. Esclusiva del catalogo Binova 2026.",
      en: "Glass printed with a raindrop effect obtained by acid subtraction. Exclusive to the Binova 2026 catalogue.",
    },
  },
  "Laccato opaco": {
    title: { it: "Laccato opaco", en: "Matt lacquer" },
    desc: {
      it: "Verniciatura mat ai polveri ceramici. 16 colori del catalogo, anti-impronta e ricaricabile in caso di abrasioni profonde.",
      en: "Matt ceramic-powder lacquering. 16 catalogue colours, fingerprint-resistant and recoatable in case of deep abrasions.",
    },
  },
  "Ebano Makassar": {
    title: { it: "Ebano Makassar", en: "Makassar ebony" },
    desc: {
      it: "Essenza esotica indonesiana con venatura marcata, palette dal bruno al nero. Prodotta in misure controllate per garantire continuità.",
      en: "Exotic Indonesian wood with a strong grain, palette ranging from brown to black. Produced in controlled sizes to ensure continuity.",
    },
  },
  "Grès effetto pietra": {
    title: { it: "Grès effetto pietra", en: "Stone-effect stoneware" },
    desc: {
      it: "Lastre in grès porcellanato di grande formato (160×320 cm). Spessore sottile, leggerezza strutturale, resistenza al graffio.",
      en: "Large-format porcelain stoneware slabs (160×320 cm). Thin gauge, structural lightness, scratch resistance.",
    },
  },
  Acciaio: {
    title: { it: "Acciaio", en: "Steel" },
    desc: {
      it: "Inox satinato spessore 1,2 mm con bordi piegati. Inalterabile, ideale per i piani di lavoro a contatto con liquidi e calore.",
      en: "Satin stainless steel 1.2 mm thick with folded edges. Unalterable, ideal for worktops in contact with liquids and heat.",
    },
  },
  "Rovere termotrattato": {
    title: { it: "Rovere termotrattato", en: "Heat-treated oak" },
    desc: {
      it: "Rovere essiccato in autoclave per garantire stabilità dimensionale in ogni clima. Colore ambra naturale, ricco di sfumature.",
      en: "Oak autoclave-dried to guarantee dimensional stability in any climate. Natural amber colour, rich in nuances.",
    },
  },
  "Alluminio spazzolato": {
    title: { it: "Alluminio spazzolato", en: "Brushed aluminium" },
    desc: {
      it: "Alluminio anodizzato con finitura satinata, anti-impronta. Bordi netti e tolleranze stretto per le ante a taglio verticale.",
      en: "Anodised aluminium with satin, fingerprint-resistant finish. Clean edges and tight tolerances for vertical-cut doors.",
    },
  },
  "Vetro acidato": {
    title: { it: "Vetro acidato", en: "Acid-etched glass" },
    desc: {
      it: "Vetro trattato con acido per ottenere una finitura morbida traslucida. Lascia filtrare la luce senza svelare il contenuto.",
      en: "Glass treated with acid for a soft translucent finish. Lets light pass through without revealing the contents.",
    },
  },
  "Marmo Calacatta": {
    title: { it: "Marmo Calacatta", en: "Calacatta marble" },
    desc: {
      it: "Marmo bianco delle Apuane con venature grigio-oro. Selezione delle lastre direttamente in cava per ogni singolo progetto.",
      en: "White marble from the Apuan Alps with grey-gold veining. Slabs selected directly at the quarry for each individual project.",
    },
  },
  "Statuario lucido": {
    title: { it: "Statuario lucido", en: "Polished Statuario" },
    desc: {
      it: "Bianco Statuario con lucidatura specchio. Marmo storico di Carrara, riservato ai progetti contract di alta gamma.",
      en: "White Statuario with mirror polish. Historic Carrara marble, reserved for high-end contract projects.",
    },
  },
  "Miele integrato": {
    title: { it: "Miele integrato", en: "Integrated Miele" },
    desc: {
      it: "Elettrodomestici della linea Miele Generation 7000 ad incasso totale. Coordinamento diretto con il fornitore in fase di cantiere.",
      en: "Miele Generation 7000 fully built-in appliances. Direct coordination with the supplier during construction.",
    },
  },
  "Marmo bocciardato": {
    title: { it: "Marmo bocciardato", en: "Bush-hammered marble" },
    desc: {
      it: "Marmo lavorato con bocciarde per finitura ruvida tridimensionale. Sensazione tattile inedita, perfetta per i fondali.",
      en: "Marble worked with bush-hammers for a three-dimensional rough finish. A new tactile feel, perfect for backdrops.",
    },
  },
  "Cemento materico": {
    title: { it: "Cemento materico", en: "Textured concrete" },
    desc: {
      it: "Cemento polimerico applicato a mano in spessore di 3 mm. Totalmente personalizzabile nel colore, fugato a vista per cifra autoriale.",
      en: "Polymeric concrete hand-applied in a 3 mm thickness. Fully customisable in colour, exposed grouting as a signature.",
    },
  },
  "Quercia spazzolata": {
    title: { it: "Quercia spazzolata", en: "Brushed oak" },
    desc: {
      it: "Quercia europea spazzolata a setole metalliche per esaltare la venatura. Finitura tattile, calda, viva.",
      en: "European oak brushed with metal bristles to enhance the grain. Tactile, warm, living finish.",
    },
  },
  "Alluminio 12mm": {
    title: { it: "Alluminio 12mm", en: "12mm aluminium" },
    desc: {
      it: "Anta tecnica in alluminio alveolare spessore 12 mm. Esclusiva Mantis: leggerezza strutturale + altezze libere fino al soffitto.",
      en: "Technical door in 12 mm honeycomb aluminium. Mantis exclusive: structural lightness + free heights all the way to the ceiling.",
    },
  },
  "Rovere Saturno": {
    title: { it: "Rovere Saturno", en: "Saturno oak" },
    desc: {
      it: "Variante cromatica del rovere disegnata da Binova: tonalità ardesia con riflessi caldi. Coordinata con i metalli scuri.",
      en: "A chromatic variant of oak designed by Binova: slate tones with warm highlights. Coordinated with dark metals.",
    },
  },
  "Vetro nero strutturale": {
    title: { it: "Vetro nero strutturale", en: "Structural black glass" },
    desc: {
      it: "Vetro temperato di sicurezza, finitura nera satinata, spessore 6 mm. Usato come fondale o come schienale tecnico.",
      en: "Tempered safety glass, satin black finish, 6 mm thick. Used as a backdrop or as a technical back panel.",
    },
  },
  "Frassino tinto": {
    title: { it: "Frassino tinto", en: "Stained ash" },
    desc: {
      it: "Frassino europeo tinto e laccato per ottenere palette personalizzata sul progetto. Resa morbida, venatura visibile.",
      en: "European ash stained and lacquered to obtain a project-customised palette. Soft rendering, visible grain.",
    },
  },
  "Brass anticato": {
    title: { it: "Brass anticato", en: "Antiqued brass" },
    desc: {
      it: "Ottone trattato chimicamente per ottenere patina d'epoca. Ogni pezzo è unico — nessuna patina è identica alla successiva.",
      en: "Brass chemically treated to obtain a period patina. Every piece is unique — no two patinas are identical.",
    },
  },
  "Olmo naturale": {
    title: { it: "Olmo naturale", en: "Natural elm" },
    desc: {
      it: "Essenza italiana a poro aperto, venatura morbida e dorata. Cresce nella Pianura Padana, finitura naturale a olio duro.",
      en: "Italian open-pore wood with a soft, golden grain. Grown in the Po Valley, hard-oil natural finish.",
    },
  },
  "Pietra Serena": {
    title: { it: "Pietra Serena", en: "Pietra Serena stone" },
    desc: {
      it: "Pietra fiorentina dall'inconfondibile grigio-azzurro. Lavorabile per spessori importanti, ideale per piani monolitici.",
      en: "Florentine stone with an unmistakable grey-blue colour. Workable in significant thicknesses, ideal for monolithic worktops.",
    },
  },
  "Lacca opaca": {
    title: { it: "Lacca opaca", en: "Matt lacquer" },
    desc: {
      it: "Verniciatura mat ai polveri ceramici. 16 colori del catalogo 2026, anti-impronta, riparabile.",
      en: "Matt ceramic-powder lacquering. 16 colours in the 2026 catalogue, fingerprint-resistant, repairable.",
    },
  },
};

export function getMaterial(name: string, locale: Locale): { title: string; desc: string } {
  const entry = ENTRIES[name];
  if (!entry) {
    return { title: name, desc: FALLBACK[locale] };
  }
  return { title: entry.title[locale], desc: entry.desc[locale] };
}
