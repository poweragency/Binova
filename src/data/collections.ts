export type Collection = {
  code: string;
  slug: string;
  name: string;
  tag: string;
  shortDesc: string;
  longDesc: string;
  image?: string;
  gallery?: string[];
  materials?: string[];
};

export const collections: Collection[] = [
  {
    code: "01",
    slug: "avola",
    name: "Avola",
    tag: "Telaio architettonico",
    shortDesc:
      "Linee verticali e orizzontali ritmate da un telaio sottilissimo a vista. La firma più recente di Binova.",
    longDesc:
      "Avola è l'ultima firma di Binova: un telaio sottilissimo a vista disegna un'architettura ritmica di linee verticali e orizzontali. È la collezione che meglio sintetizza la filosofia del brand — la cucina come elemento d'architettura, non come mobile. Pensata per case contemporanee dove le proporzioni contano quanto i materiali.",
    image: "/images/collections/avola/cover.jpg",
    gallery: [
      "/images/collections/avola/cover.jpg",
      "/images/collections/avola/gallery-1.jpg",
      "/images/collections/avola/gallery-2.jpg",
      "/images/collections/avola/gallery-3.jpg",
      "/images/collections/avola/gallery-4.jpg",
      "/images/collections/avola/gallery-5.jpg",
    ],
    materials: ["Noce Canaletto", "Marmo Sahara Noir", "Ottone brunito", "Vetro Rain"],
  },
  {
    code: "02",
    slug: "bluna",
    name: "Bluna",
    tag: "Gola d'eccellenza",
    shortDesc:
      "L'estetica della gola portata al suo apice. Razionale, moderna, taglio sartoriale.",
    longDesc:
      "Bluna spinge l'estetica della gola al suo limite: niente maniglie, solo un taglio sartoriale che corre lungo le ante. È una collezione razionale ma morbida, costruita su proporzioni rigorose che si addolciscono nei dettagli — l'apice tecnico unito a una sensibilità quasi tattile.",
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
    materials: ["Laccato opaco", "Ebano Makassar", "Grès effetto pietra", "Acciaio"],
  },
  {
    code: "03",
    slug: "vogue",
    name: "Vogue",
    tag: "Tagli verticali",
    shortDesc:
      "Apertura ante senza maniglie a vista, ritmo grafico, presenza scultorea.",
    longDesc:
      "Vogue gioca con tagli verticali che diventano sia funzione (l'apertura delle ante) sia decoro. Il risultato è una presenza scultorea: la cucina non si nasconde, si afferma. Una collezione che funziona altrettanto bene come totem centrale o come fondale.",
    image: "/images/collections/vogue/g5.jpg",
    gallery: [
      "/images/collections/vogue/g5.jpg",
      "/images/collections/vogue/g1.jpg",
      "/images/collections/vogue/g2.jpg",
      "/images/collections/vogue/g3.jpg",
      "/images/collections/vogue/g4.jpg",
      "/images/collections/vogue/g6.jpg",
    ],
    materials: ["Rovere termotrattato", "Alluminio spazzolato", "Vetro acidato"],
  },
  {
    code: "04",
    slug: "vesta",
    name: "Vesta",
    tag: "Marmo monumentale",
    shortDesc:
      "Il marmo come protagonista. Venature come architettura, volumi compatti, elettrodomestici incassati nella superficie.",
    longDesc:
      "Vesta porta il marmo dal piano alla parete: lastre Calacatta che corrono dal pavimento al soffitto, frontali in continuità con il fondale, isole-blocco in cui la materia si scolpisce piuttosto che assemblarsi. Una collezione che pretende ambienti generosi e li ripaga con un'estetica imperiale, dove il disegno delle venature diventa l'unica decorazione concessa.",
    image: "/images/collections/vesta/cover.jpg",
    gallery: [
      "/images/collections/vesta/cover.jpg",
      "/images/collections/vesta/g1.jpg",
      "/images/collections/vesta/g2.jpg",
      "/images/collections/vesta/g3.jpg",
    ],
    materials: ["Marmo Calacatta", "Statuario lucido", "Noce Canaletto", "Miele integrato"],
  },
  {
    code: "05",
    slug: "scava",
    name: "Scava",
    tag: "Sottrazione",
    shortDesc:
      "La materia scavata. Geometrie ottenute per sottrazione, atmosfera minerale.",
    longDesc:
      "Scava nasce da un gesto: togliere. Le geometrie sono ottenute per sottrazione dalla materia, non per aggiunta. Ne deriva un'atmosfera minerale, quasi archeologica — la cucina come blocco scolpito, non assemblato.",
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
    materials: ["Marmo bocciardato", "Cemento materico", "Quercia spazzolata"],
  },
  {
    code: "06",
    slug: "mantis",
    name: "Mantis",
    tag: "Precisione",
    shortDesc:
      "Strutture leggere, dettagli da orologeria. Ingegneria sussurrata.",
    longDesc:
      "Mantis è ingegneria sussurrata: strutture leggere con ante in alluminio da 12 mm, giunzioni invisibili, dettagli da orologeria. Una collezione per chi riconosce la qualità nei micron prima ancora che nelle finiture.",
    image: "/images/collections/mantis/g6.jpg",
    gallery: [
      "/images/collections/mantis/g6.jpg",
      "/images/collections/mantis/g1.jpg",
      "/images/collections/mantis/g2.jpg",
      "/images/collections/mantis/g3.jpg",
      "/images/collections/mantis/g4.jpg",
      "/images/collections/mantis/g5.jpg",
    ],
    materials: ["Alluminio 12mm", "Rovere Saturno", "Vetro nero strutturale"],
  },
  {
    code: "07",
    slug: "regula",
    name: "Regula",
    tag: "Misura",
    shortDesc:
      "Ritmo regolare, proporzioni classiche rilette in chiave contemporanea.",
    longDesc:
      "Regula è la regola: ritmo regolare, proporzioni classiche, ma rilette con vocabolario contemporaneo. È la collezione per chi cerca permanenza, non tendenza. Una cucina che si sarebbe potuta progettare nel 1960 o nel 2060.",
    image: "/images/collections/regula/g4.jpg",
    gallery: [
      "/images/collections/regula/g4.jpg",
      "/images/collections/regula/g1.jpg",
      "/images/collections/regula/g2.jpg",
      "/images/collections/regula/g3.jpg",
    ],
    materials: ["Frassino tinto", "Marmo Calacatta", "Brass anticato"],
  },
  {
    code: "08",
    slug: "ono",
    name: "Ono",
    tag: "Essenzialità",
    shortDesc:
      "Riduzione al gesto necessario. Forma pura, materia che parla.",
    longDesc:
      "Ono è riduzione: si elimina tutto ciò che non è necessario finché resta solo il gesto. La forma è pura, è la materia a parlare. Una collezione zen, pensata per spazi che vogliono respirare.",
    image: "/images/collections/ono/g2.jpg",
    gallery: [
      "/images/collections/ono/g2.jpg",
      "/images/collections/ono/g1.jpg",
      "/images/collections/ono/g3.jpg",
      "/images/collections/ono/g4.jpg",
      "/images/collections/ono/g5.jpg",
    ],
    materials: ["Olmo naturale", "Pietra Serena", "Lacca opaca"],
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
