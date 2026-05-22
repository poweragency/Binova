export type LocaleKey = "it" | "en";

type CollectionText = {
  name: string;
  tag: string;
  shortDesc: string;
  longDesc: string;
  materials: string[];
};

export type Collection = {
  code: string;
  slug: string;
  image?: string;
  gallery?: string[];
  i18n: Record<LocaleKey, CollectionText>;
};

export const CATALOG_PDF_URL =
  "https://www.binova.it/docs/1325/catalogo-binova-cucine-2025_web.pdf";

export const collections: Collection[] = [
  {
    code: "01",
    slug: "bluna",
    image: "/images/collections/bluna/g5.jpg",
    gallery: [
      "/images/collections/bluna/g5.jpg",
      "/images/collections/bluna/g1.jpg",
      "/images/collections/bluna/g2.jpg",
      "/images/collections/bluna/g3.jpg",
      "/images/collections/bluna/g4.jpg",
      "/images/collections/bluna/g6.jpg",
      "/images/collections/bluna/g7.jpg",
      "/images/collections/bluna/g8.jpg",
      "/images/collections/bluna/g9.jpg",
    ],
    i18n: {
      it: {
        name: "Bluna",
        tag: "Gola d'eccellenza",
        shortDesc:
          "L'estetica della gola portata al suo apice. Razionale, moderna, taglio sartoriale.",
        longDesc:
          "Bluna spinge l'estetica della gola al suo limite: niente maniglie, solo un taglio sartoriale che corre lungo le ante. È una collezione razionale ma morbida, costruita su proporzioni rigorose che si addolciscono nei dettagli — l'apice tecnico unito a una sensibilità quasi tattile.",
        materials: ["Laccato opaco", "Ebano Makassar", "Grès effetto pietra", "Acciaio"],
      },
      en: {
        name: "Bluna",
        tag: "Recessed-grip excellence",
        shortDesc:
          "The aesthetic of the recessed grip taken to its peak. Rational, modern, tailored.",
        longDesc:
          "Bluna pushes recessed-grip aesthetics to their limit: no handles, just a tailored cut that runs along the doors. A rational yet soft collection, built on rigorous proportions that soften in the details — technical peak combined with an almost tactile sensibility.",
        materials: ["Matt lacquer", "Makassar ebony", "Stone-effect stoneware", "Steel"],
      },
    },
  },
  {
    code: "02",
    slug: "mantis",
    image: "/images/collections/mantis/g6.jpg",
    gallery: [
      "/images/collections/mantis/g6.jpg",
      "/images/collections/mantis/g1.jpg",
      "/images/collections/mantis/g2.jpg",
      "/images/collections/mantis/g3.jpg",
      "/images/collections/mantis/g4.jpg",
      "/images/collections/mantis/g5.jpg",
    ],
    i18n: {
      it: {
        name: "Mantis",
        tag: "Precisione",
        shortDesc:
          "Strutture leggere, dettagli da orologeria. Ingegneria sussurrata.",
        longDesc:
          "Mantis è ingegneria sussurrata: strutture leggere con ante in alluminio da 12 mm, giunzioni invisibili, dettagli da orologeria. Una collezione per chi riconosce la qualità nei micron prima ancora che nelle finiture.",
        materials: ["Alluminio 12mm", "Rovere Saturno", "Vetro nero strutturale"],
      },
      en: {
        name: "Mantis",
        tag: "Precision",
        shortDesc:
          "Light structures, watchmaking details. Engineering, whispered.",
        longDesc:
          "Mantis is whispered engineering: light structures with 12 mm aluminium doors, invisible joints, watchmaking details. A collection for those who recognise quality in microns before they look at the finishes.",
        materials: ["12mm aluminium", "Saturno oak", "Structural black glass"],
      },
    },
  },
  {
    code: "03",
    slug: "ono",
    image: "/images/collections/ono/g2.jpg",
    gallery: [
      "/images/collections/ono/g2.jpg",
      "/images/collections/ono/g1.jpg",
      "/images/collections/ono/g3.jpg",
      "/images/collections/ono/g4.jpg",
      "/images/collections/ono/g5.jpg",
    ],
    i18n: {
      it: {
        name: "Ono",
        tag: "Essenzialità",
        shortDesc:
          "Riduzione al gesto necessario. Forma pura, materia che parla.",
        longDesc:
          "Ono è riduzione: si elimina tutto ciò che non è necessario finché resta solo il gesto. La forma è pura, è la materia a parlare. Una collezione zen, pensata per spazi che vogliono respirare.",
        materials: ["Olmo naturale", "Pietra Serena", "Lacca opaca"],
      },
      en: {
        name: "Ono",
        tag: "Essentiality",
        shortDesc:
          "Reduced to the necessary gesture. Pure form, matter that speaks.",
        longDesc:
          "Ono is reduction: everything unnecessary is removed until only the gesture remains. The form is pure, the material speaks. A zen collection designed for spaces that want to breathe.",
        materials: ["Natural elm", "Pietra Serena stone", "Matt lacquer"],
      },
    },
  },
  {
    code: "04",
    slug: "regula",
    image: "/images/collections/regula/g4.jpg",
    gallery: [
      "/images/collections/regula/g4.jpg",
      "/images/collections/regula/g1.jpg",
      "/images/collections/regula/g2.jpg",
      "/images/collections/regula/g3.jpg",
    ],
    i18n: {
      it: {
        name: "Regula",
        tag: "Misura",
        shortDesc:
          "Ritmo regolare, proporzioni classiche rilette in chiave contemporanea.",
        longDesc:
          "Regula è la regola: ritmo regolare, proporzioni classiche, ma rilette con vocabolario contemporaneo. È la collezione per chi cerca permanenza, non tendenza. Una cucina che si sarebbe potuta progettare nel 1960 o nel 2060.",
        materials: ["Frassino tinto", "Marmo Calacatta", "Brass anticato"],
      },
      en: {
        name: "Regula",
        tag: "Measure",
        shortDesc:
          "Regular rhythm, classical proportions reinterpreted with a contemporary vocabulary.",
        longDesc:
          "Regula is the rule: regular rhythm, classical proportions, reread with a contemporary vocabulary. The collection for those who seek permanence, not trend. A kitchen that could have been designed in 1960 or in 2060.",
        materials: ["Stained ash", "Calacatta marble", "Antiqued brass"],
      },
    },
  },
  {
    code: "05",
    slug: "scava",
    image: "/images/collections/scava/g2.jpg",
    gallery: [
      "/images/collections/scava/g2.jpg",
      "/images/collections/scava/g1.jpg",
      "/images/collections/scava/g3.jpg",
      "/images/collections/scava/g4.jpg",
      "/images/collections/scava/g5.jpg",
      "/images/collections/scava/g6.jpg",
      "/images/collections/scava/g7.jpg",
      "/images/collections/scava/g8.jpg",
    ],
    i18n: {
      it: {
        name: "Scava",
        tag: "Sottrazione",
        shortDesc:
          "La materia scavata. Geometrie ottenute per sottrazione, atmosfera minerale.",
        longDesc:
          "Scava nasce da un gesto: togliere. Le geometrie sono ottenute per sottrazione dalla materia, non per aggiunta. Ne deriva un'atmosfera minerale, quasi archeologica — la cucina come blocco scolpito, non assemblato.",
        materials: ["Marmo bocciardato", "Cemento materico", "Quercia spazzolata"],
      },
      en: {
        name: "Scava",
        tag: "Subtraction",
        shortDesc:
          "Hollowed-out matter. Geometries obtained by subtraction, mineral atmosphere.",
        longDesc:
          "Scava is born from a single gesture: remove. The geometries are obtained by subtracting from the matter, not by adding to it. The result is a mineral, almost archaeological atmosphere — the kitchen as a sculpted block, not an assembled one.",
        materials: ["Bush-hammered marble", "Textured concrete", "Brushed oak"],
      },
    },
  },
  {
    code: "06",
    slug: "vesta",
    image: "/images/collections/vesta/cover.jpg",
    gallery: [
      "/images/collections/vesta/cover.jpg",
      "/images/collections/vesta/g1.jpg",
      "/images/collections/vesta/g2.jpg",
      "/images/collections/vesta/g3.jpg",
    ],
    i18n: {
      it: {
        name: "Vesta",
        tag: "Marmo monumentale",
        shortDesc:
          "Il marmo come protagonista. Venature come architettura, volumi compatti, elettrodomestici incassati nella superficie.",
        longDesc:
          "Vesta porta il marmo dal piano alla parete: lastre Calacatta che corrono dal pavimento al soffitto, frontali in continuità con il fondale, isole-blocco in cui la materia si scolpisce piuttosto che assemblarsi. Una collezione che pretende ambienti generosi e li ripaga con un'estetica imperiale, dove il disegno delle venature diventa l'unica decorazione concessa.",
        materials: ["Marmo Calacatta", "Statuario lucido", "Noce Canaletto", "Miele integrato"],
      },
      en: {
        name: "Vesta",
        tag: "Monumental marble",
        shortDesc:
          "Marble as the protagonist. Veining as architecture, compact volumes, appliances built into the surface.",
        longDesc:
          "Vesta takes marble from the worktop to the wall: Calacatta slabs running from floor to ceiling, fronts in continuity with the backdrop, block-islands where the material is carved rather than assembled. A collection that demands generous spaces and rewards them with an imperial aesthetic, where the design of the veining becomes the only decoration allowed.",
        materials: ["Calacatta marble", "Polished Statuario", "Canaletto walnut", "Integrated Miele"],
      },
    },
  },
  {
    code: "07",
    slug: "vogue",
    image: "/images/collections/vogue/g5.jpg",
    gallery: [
      "/images/collections/vogue/g5.jpg",
      "/images/collections/vogue/g1.jpg",
      "/images/collections/vogue/g2.jpg",
      "/images/collections/vogue/g3.jpg",
      "/images/collections/vogue/g4.jpg",
      "/images/collections/vogue/g6.jpg",
    ],
    i18n: {
      it: {
        name: "Vogue",
        tag: "Tagli verticali",
        shortDesc:
          "Apertura ante senza maniglie a vista, ritmo grafico, presenza scultorea.",
        longDesc:
          "Vogue gioca con tagli verticali che diventano sia funzione (l'apertura delle ante) sia decoro. Il risultato è una presenza scultorea: la cucina non si nasconde, si afferma. Una collezione che funziona altrettanto bene come totem centrale o come fondale.",
        materials: ["Rovere termotrattato", "Alluminio spazzolato", "Vetro acidato"],
      },
      en: {
        name: "Vogue",
        tag: "Vertical cuts",
        shortDesc:
          "Door opening with no visible handles, graphic rhythm, sculptural presence.",
        longDesc:
          "Vogue plays with vertical cuts that act both as function (the opening of the doors) and as decoration. The result is a sculptural presence: the kitchen doesn't hide, it asserts itself. A collection that works equally well as a central totem or as a backdrop.",
        materials: ["Heat-treated oak", "Brushed aluminium", "Acid-etched glass"],
      },
    },
  },
  {
    code: "08",
    slug: "avola",
    image: "/images/collections/avola/cover.jpg",
    gallery: [
      "/images/collections/avola/cover.jpg",
      "/images/collections/avola/gallery-1.jpg",
      "/images/collections/avola/gallery-2.jpg",
      "/images/collections/avola/gallery-3.jpg",
      "/images/collections/avola/gallery-4.jpg",
      "/images/collections/avola/gallery-5.jpg",
    ],
    i18n: {
      it: {
        name: "Avola",
        tag: "Telaio architettonico",
        shortDesc:
          "Linee verticali e orizzontali ritmate da un telaio sottilissimo a vista. La firma più recente di Binova.",
        longDesc:
          "Avola è l'ultima firma di Binova: un telaio sottilissimo a vista disegna un'architettura ritmica di linee verticali e orizzontali. È la collezione che meglio sintetizza la filosofia del brand — la cucina come elemento d'architettura, non come mobile. Pensata per case contemporanee dove le proporzioni contano quanto i materiali.",
        materials: ["Noce Canaletto", "Marmo Sahara Noir", "Ottone brunito", "Vetro Rain"],
      },
      en: {
        name: "Avola",
        tag: "Architectural frame",
        shortDesc:
          "Vertical and horizontal lines paced by an ultra-thin exposed frame. Binova's most recent signature.",
        longDesc:
          "Avola is Binova's latest signature: an ultra-thin exposed frame draws a rhythmic architecture of vertical and horizontal lines. The collection that best synthesises the brand's philosophy — the kitchen as an architectural element, not as furniture. Designed for contemporary homes where proportions count as much as materials.",
        materials: ["Canaletto walnut", "Sahara Noir marble", "Burnished brass", "Rain glass"],
      },
    },
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
