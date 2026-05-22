export type LocaleKey = "it" | "en" | "de" | "es" | "fr";

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
      de: {
        name: "Bluna",
        tag: "Grifflose Eleganz",
        shortDesc:
          "Die Ästhetik der Griffmulde auf ihrem Höhepunkt. Rational, modern, maßgeschneidert.",
        longDesc:
          "Bluna treibt die Ästhetik der Griffmulde an ihr Limit: keine Griffe, nur ein maßgeschneiderter Schnitt, der entlang der Türen verläuft. Eine rationale, aber weiche Kollektion, gebaut auf strengen Proportionen, die sich in den Details abschwächen — technischer Höhepunkt verbunden mit einer fast taktilen Empfindsamkeit.",
        materials: ["Matt-Lackierung", "Makassar-Ebenholz", "Stein-Effekt-Steingut", "Edelstahl"],
      },
      es: {
        name: "Bluna",
        tag: "Excelencia sin tirador",
        shortDesc:
          "La estética del gola llevada a su cumbre. Racional, moderna, corte sartorial.",
        longDesc:
          "Bluna empuja la estética del gola hasta su límite: sin tiradores, solo un corte sartorial que recorre las puertas. Una colección racional pero suave, construida sobre proporciones rigurosas que se suavizan en los detalles — el ápice técnico unido a una sensibilidad casi táctil.",
        materials: ["Lacado mate", "Ébano Makassar", "Gres efecto piedra", "Acero"],
      },
      fr: {
        name: "Bluna",
        tag: "Excellence à gorge",
        shortDesc:
          "L'esthétique de la gorge portée à son sommet. Rationnelle, moderne, coupe sur mesure.",
        longDesc:
          "Bluna pousse l'esthétique de la gorge à sa limite : pas de poignées, juste une coupe sur mesure qui court le long des portes. Une collection rationnelle mais douce, construite sur des proportions rigoureuses qui s'adoucissent dans les détails — le sommet technique allié à une sensibilité presque tactile.",
        materials: ["Laque mate", "Ébène Makassar", "Grès effet pierre", "Acier"],
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
      de: {
        name: "Mantis",
        tag: "Präzision",
        shortDesc:
          "Leichte Strukturen, uhrmacherische Details. Geflüsterte Ingenieurskunst.",
        longDesc:
          "Mantis ist geflüsterte Ingenieurskunst: leichte Strukturen mit 12-mm-Aluminiumtüren, unsichtbare Verbindungen, uhrmacherische Details. Eine Kollektion für diejenigen, die Qualität an Mikrometern erkennen, bevor sie auf die Oberflächen schauen.",
        materials: ["12mm Aluminium", "Saturno-Eiche", "Strukturelles Schwarzglas"],
      },
      es: {
        name: "Mantis",
        tag: "Precisión",
        shortDesc:
          "Estructuras ligeras, detalles de relojería. Ingeniería susurrada.",
        longDesc:
          "Mantis es ingeniería susurrada: estructuras ligeras con puertas de aluminio de 12 mm, juntas invisibles, detalles de relojería. Una colección para quien reconoce la calidad en los micrones antes que en los acabados.",
        materials: ["Aluminio 12mm", "Roble Saturno", "Vidrio negro estructural"],
      },
      fr: {
        name: "Mantis",
        tag: "Précision",
        shortDesc:
          "Structures légères, détails d'horlogerie. Ingénierie chuchotée.",
        longDesc:
          "Mantis est de l'ingénierie chuchotée : structures légères avec portes en aluminium de 12 mm, jointures invisibles, détails d'horlogerie. Une collection pour ceux qui reconnaissent la qualité dans les microns avant même de regarder les finitions.",
        materials: ["Aluminium 12mm", "Chêne Saturno", "Verre noir structurel"],
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
      de: {
        name: "Ono",
        tag: "Essenzialität",
        shortDesc:
          "Reduziert auf die notwendige Geste. Reine Form, sprechende Materie.",
        longDesc:
          "Ono ist Reduktion: Alles Unnötige wird entfernt, bis nur die Geste übrig bleibt. Die Form ist rein, die Materie spricht. Eine Zen-Kollektion für Räume, die atmen wollen.",
        materials: ["Natürliche Ulme", "Pietra Serena", "Matt-Lack"],
      },
      es: {
        name: "Ono",
        tag: "Esencialidad",
        shortDesc:
          "Reducida al gesto necesario. Forma pura, materia que habla.",
        longDesc:
          "Ono es reducción: se elimina todo lo innecesario hasta que solo queda el gesto. La forma es pura, es la materia la que habla. Una colección zen, pensada para espacios que quieren respirar.",
        materials: ["Olmo natural", "Piedra Serena", "Laca mate"],
      },
      fr: {
        name: "Ono",
        tag: "Essentialité",
        shortDesc:
          "Réduite au geste nécessaire. Forme pure, matière qui parle.",
        longDesc:
          "Ono est réduction : on élimine tout ce qui n'est pas nécessaire jusqu'à ce qu'il ne reste que le geste. La forme est pure, c'est la matière qui parle. Une collection zen, pensée pour des espaces qui veulent respirer.",
        materials: ["Orme naturel", "Pietra Serena", "Laque mate"],
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
      de: {
        name: "Regula",
        tag: "Maß",
        shortDesc:
          "Gleichmäßiger Rhythmus, klassische Proportionen, neu gelesen in zeitgenössischem Vokabular.",
        longDesc:
          "Regula ist die Regel: gleichmäßiger Rhythmus, klassische Proportionen, neu gelesen mit zeitgenössischem Vokabular. Die Kollektion für diejenigen, die Permanenz suchen, nicht Trend. Eine Küche, die 1960 oder 2060 entworfen worden sein könnte.",
        materials: ["Gefärbte Esche", "Calacatta-Marmor", "Antiquiertes Messing"],
      },
      es: {
        name: "Regula",
        tag: "Medida",
        shortDesc:
          "Ritmo regular, proporciones clásicas releídas en clave contemporánea.",
        longDesc:
          "Regula es la regla: ritmo regular, proporciones clásicas, pero releídas con vocabulario contemporáneo. Es la colección para quien busca permanencia, no tendencia. Una cocina que se podría haber diseñado en 1960 o en 2060.",
        materials: ["Fresno teñido", "Mármol Calacatta", "Latón envejecido"],
      },
      fr: {
        name: "Regula",
        tag: "Mesure",
        shortDesc:
          "Rythme régulier, proportions classiques relues dans un vocabulaire contemporain.",
        longDesc:
          "Regula est la règle : rythme régulier, proportions classiques, mais relues avec un vocabulaire contemporain. C'est la collection pour qui cherche la permanence, pas la tendance. Une cuisine qui aurait pu être conçue en 1960 ou en 2060.",
        materials: ["Frêne teinté", "Marbre Calacatta", "Laiton vieilli"],
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
      de: {
        name: "Scava",
        tag: "Subtraktion",
        shortDesc:
          "Ausgehöhlte Materie. Geometrien durch Subtraktion gewonnen, mineralische Atmosphäre.",
        longDesc:
          "Scava entsteht aus einer einzigen Geste: entfernen. Die Geometrien werden durch Subtraktion aus der Materie gewonnen, nicht durch Hinzufügung. Daraus entsteht eine mineralische, fast archäologische Atmosphäre — die Küche als skulpturaler Block, nicht als zusammengesetztes Ganzes.",
        materials: ["Bossierter Marmor", "Strukturierter Beton", "Gebürstete Eiche"],
      },
      es: {
        name: "Scava",
        tag: "Sustracción",
        shortDesc:
          "La materia excavada. Geometrías obtenidas por sustracción, atmósfera mineral.",
        longDesc:
          "Scava nace de un gesto: quitar. Las geometrías se obtienen por sustracción de la materia, no por adición. De ello se deriva una atmósfera mineral, casi arqueológica — la cocina como bloque esculpido, no ensamblado.",
        materials: ["Mármol abujardado", "Cemento matérico", "Roble cepillado"],
      },
      fr: {
        name: "Scava",
        tag: "Soustraction",
        shortDesc:
          "La matière creusée. Géométries obtenues par soustraction, atmosphère minérale.",
        longDesc:
          "Scava naît d'un geste : retirer. Les géométries sont obtenues par soustraction de la matière, non par addition. Il en résulte une atmosphère minérale, presque archéologique — la cuisine comme un bloc sculpté, non assemblé.",
        materials: ["Marbre bouchardé", "Béton matiéré", "Chêne brossé"],
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
      de: {
        name: "Vesta",
        tag: "Monumentaler Marmor",
        shortDesc:
          "Marmor als Protagonist. Maserung als Architektur, kompakte Volumen, in die Oberfläche eingebaute Geräte.",
        longDesc:
          "Vesta bringt Marmor von der Arbeitsplatte an die Wand: Calacatta-Platten vom Boden bis zur Decke, Fronten in Kontinuität mit dem Hintergrund, Block-Inseln, in denen das Material geformt statt zusammengesetzt wird. Eine Kollektion, die großzügige Räume verlangt und sie mit einer imperialen Ästhetik belohnt, in der das Design der Maserung die einzige erlaubte Dekoration wird.",
        materials: ["Calacatta-Marmor", "Polierter Statuario", "Canaletto-Nussbaum", "Integrierter Miele"],
      },
      es: {
        name: "Vesta",
        tag: "Mármol monumental",
        shortDesc:
          "El mármol como protagonista. Vetas como arquitectura, volúmenes compactos, electrodomésticos integrados en la superficie.",
        longDesc:
          "Vesta lleva el mármol del plano a la pared: losas Calacatta que recorren del suelo al techo, frontales en continuidad con el fondo, islas-bloque donde la materia se esculpe en lugar de ensamblarse. Una colección que exige ambientes generosos y los recompensa con una estética imperial, donde el dibujo de las vetas se convierte en la única decoración permitida.",
        materials: ["Mármol Calacatta", "Statuario pulido", "Nogal Canaletto", "Miele integrado"],
      },
      fr: {
        name: "Vesta",
        tag: "Marbre monumental",
        shortDesc:
          "Le marbre comme protagoniste. Veinures comme architecture, volumes compacts, électroménagers encastrés dans la surface.",
        longDesc:
          "Vesta porte le marbre du plan au mur : dalles Calacatta qui courent du sol au plafond, façades en continuité avec l'arrière-plan, îlots-blocs où la matière se sculpte plutôt qu'elle ne s'assemble. Une collection qui exige des espaces généreux et les récompense par une esthétique impériale, où le dessin des veinures devient la seule décoration permise.",
        materials: ["Marbre Calacatta", "Statuaire poli", "Noyer Canaletto", "Miele intégré"],
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
      de: {
        name: "Vogue",
        tag: "Vertikale Schnitte",
        shortDesc:
          "Türöffnung ohne sichtbare Griffe, grafischer Rhythmus, skulpturale Präsenz.",
        longDesc:
          "Vogue spielt mit vertikalen Schnitten, die sowohl Funktion (das Öffnen der Türen) als auch Dekoration sind. Das Ergebnis ist eine skulpturale Präsenz: Die Küche versteckt sich nicht, sie behauptet sich. Eine Kollektion, die ebenso gut als zentrales Totem wie als Hintergrund funktioniert.",
        materials: ["Wärmebehandelte Eiche", "Gebürstetes Aluminium", "Säuregeätztes Glas"],
      },
      es: {
        name: "Vogue",
        tag: "Cortes verticales",
        shortDesc:
          "Apertura de puertas sin tiradores a la vista, ritmo gráfico, presencia escultórica.",
        longDesc:
          "Vogue juega con cortes verticales que se convierten tanto en función (la apertura de las puertas) como en decoración. El resultado es una presencia escultórica: la cocina no se esconde, se afirma. Una colección que funciona igual de bien como tótem central o como fondo.",
        materials: ["Roble termotratado", "Aluminio cepillado", "Vidrio acidulado"],
      },
      fr: {
        name: "Vogue",
        tag: "Coupes verticales",
        shortDesc:
          "Ouverture des portes sans poignées visibles, rythme graphique, présence sculpturale.",
        longDesc:
          "Vogue joue avec des coupes verticales qui deviennent à la fois fonction (l'ouverture des portes) et décor. Le résultat est une présence sculpturale : la cuisine ne se cache pas, elle s'affirme. Une collection qui fonctionne aussi bien comme totem central que comme arrière-plan.",
        materials: ["Chêne thermotraité", "Aluminium brossé", "Verre acidulé"],
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
      de: {
        name: "Avola",
        tag: "Architektonischer Rahmen",
        shortDesc:
          "Vertikale und horizontale Linien, getaktet durch einen ultradünnen sichtbaren Rahmen. Binovas neueste Signatur.",
        longDesc:
          "Avola ist Binovas neueste Signatur: Ein ultradünner sichtbarer Rahmen zeichnet eine rhythmische Architektur aus vertikalen und horizontalen Linien. Die Kollektion, die die Philosophie der Marke am besten zusammenfasst — die Küche als architektonisches Element, nicht als Möbel. Konzipiert für zeitgenössische Häuser, in denen Proportionen ebenso zählen wie Materialien.",
        materials: ["Canaletto-Nussbaum", "Sahara-Noir-Marmor", "Brünierte Messing", "Rain-Glas"],
      },
      es: {
        name: "Avola",
        tag: "Estructura arquitectónica",
        shortDesc:
          "Líneas verticales y horizontales marcadas por una estructura ultrafina a la vista. La firma más reciente de Binova.",
        longDesc:
          "Avola es la última firma de Binova: una estructura ultrafina a la vista dibuja una arquitectura rítmica de líneas verticales y horizontales. Es la colección que mejor sintetiza la filosofía de la marca — la cocina como elemento arquitectónico, no como mueble. Pensada para casas contemporáneas donde las proporciones cuentan tanto como los materiales.",
        materials: ["Nogal Canaletto", "Mármol Sahara Noir", "Latón bruñido", "Vidrio Rain"],
      },
      fr: {
        name: "Avola",
        tag: "Cadre architectural",
        shortDesc:
          "Lignes verticales et horizontales rythmées par un cadre ultra-fin apparent. La signature la plus récente de Binova.",
        longDesc:
          "Avola est la dernière signature de Binova : un cadre ultra-fin apparent dessine une architecture rythmique de lignes verticales et horizontales. C'est la collection qui synthétise le mieux la philosophie de la marque — la cuisine comme élément d'architecture, non comme meuble. Pensée pour des maisons contemporaines où les proportions comptent autant que les matériaux.",
        materials: ["Noyer Canaletto", "Marbre Sahara Noir", "Laiton bruni", "Verre Rain"],
      },
    },
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
