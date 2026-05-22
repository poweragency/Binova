type Locale = "it" | "en" | "de" | "es" | "fr";

type LocalizedDescription = Record<Locale, string>;

const FALLBACK: LocalizedDescription = {
  it: "Finitura del catalogo Binova 2026. Disponibile in showroom per consultazione campioni e abbinamenti.",
  en: "Finish from the Binova 2026 catalogue. Available in the showroom for sample consultation and pairing.",
  de: "Oberfläche aus dem Binova-Katalog 2026. Im Showroom für Musterberatung und Kombinationen verfügbar.",
  es: "Acabado del catálogo Binova 2026. Disponible en el showroom para consulta de muestras y combinaciones.",
  fr: "Finition du catalogue Binova 2026. Disponible en showroom pour consultation d'échantillons et associations.",
};

type MaterialEntry = {
  title: LocalizedDescription;
  desc: LocalizedDescription;
};

const ENTRIES: Record<string, MaterialEntry> = {
  "Noce Canaletto": {
    title: {
      it: "Noce Canaletto",
      en: "Canaletto walnut",
      de: "Canaletto-Nussbaum",
      es: "Nogal Canaletto",
      fr: "Noyer Canaletto",
    },
    desc: {
      it: "Essenza pregiata americana, venatura morbida e tonalità calde dorate. Lavorata a poro aperto per esaltare il disegno naturale del legno.",
      en: "Premium American walnut with a soft grain and warm golden tones. Open-pore finish to enhance the natural pattern of the wood.",
      de: "Edles amerikanisches Holz mit weicher Maserung und warmen goldenen Tönen. Offene Pore, um die natürliche Zeichnung des Holzes zu betonen.",
      es: "Esencia americana de prestigio, veta suave y tonos cálidos dorados. Acabado de poro abierto para realzar el dibujo natural de la madera.",
      fr: "Essence américaine de prestige, veinure douce et tons chauds dorés. Finition à pores ouverts pour mettre en valeur le dessin naturel du bois.",
    },
  },
  "Marmo Sahara Noir": {
    title: {
      it: "Marmo Sahara Noir",
      en: "Sahara Noir marble",
      de: "Sahara-Noir-Marmor",
      es: "Mármol Sahara Noir",
      fr: "Marbre Sahara Noir",
    },
    desc: {
      it: "Marmo dell'Atlante con venature dorate su fondo nero profondo. Selezionato lastra per lastra, lavorato in spessori da 3 cm.",
      en: "Atlas marble with golden veining on a deep black background. Selected slab by slab, worked in 3 cm thicknesses.",
      de: "Atlas-Marmor mit goldener Maserung auf tiefem schwarzem Grund. Platte für Platte ausgewählt, in 3-cm-Stärken verarbeitet.",
      es: "Mármol del Atlas con vetas doradas sobre fondo negro profundo. Seleccionado losa por losa, trabajado en espesores de 3 cm.",
      fr: "Marbre de l'Atlas avec veinures dorées sur fond noir profond. Sélectionné dalle par dalle, travaillé en épaisseurs de 3 cm.",
    },
  },
  "Ottone brunito": {
    title: {
      it: "Ottone brunito",
      en: "Burnished brass",
      de: "Brüniertes Messing",
      es: "Latón bruñido",
      fr: "Laiton bruni",
    },
    desc: {
      it: "Lega trattata a caldo per ottenere la patina bruna antica. Tutti gli elementi metallici sono prodotti su misura del progetto.",
      en: "Alloy heat-treated to obtain an antique brown patina. All metal elements are made to measure for the project.",
      de: "Heißbehandelte Legierung, um eine antike braune Patina zu erhalten. Alle Metallelemente werden maßgefertigt für das Projekt.",
      es: "Aleación tratada en caliente para obtener una pátina marrón antigua. Todos los elementos metálicos se fabrican a medida del proyecto.",
      fr: "Alliage traité à chaud pour obtenir une patine brune antique. Tous les éléments métalliques sont fabriqués sur mesure pour le projet.",
    },
  },
  "Vetro Rain": {
    title: {
      it: "Vetro Rain",
      en: "Rain glass",
      de: "Rain-Glas",
      es: "Vidrio Rain",
      fr: "Verre Rain",
    },
    desc: {
      it: "Vetro stampato con l'effetto gocce di pioggia ottenuto per sottrazione ad acido. Esclusiva del catalogo Binova 2026.",
      en: "Glass printed with a raindrop effect obtained by acid subtraction. Exclusive to the Binova 2026 catalogue.",
      de: "Glas mit Regentropfen-Effekt, gewonnen durch Säuresubtraktion. Exklusiv im Binova-Katalog 2026.",
      es: "Vidrio impreso con efecto gotas de lluvia obtenido por sustracción con ácido. Exclusivo del catálogo Binova 2026.",
      fr: "Verre imprimé avec un effet gouttes de pluie obtenu par soustraction à l'acide. Exclusivité du catalogue Binova 2026.",
    },
  },
  "Laccato opaco": {
    title: {
      it: "Laccato opaco",
      en: "Matt lacquer",
      de: "Matt-Lackierung",
      es: "Lacado mate",
      fr: "Laque mate",
    },
    desc: {
      it: "Verniciatura mat ai polveri ceramici. 16 colori del catalogo, anti-impronta e ricaricabile in caso di abrasioni profonde.",
      en: "Matt ceramic-powder lacquering. 16 catalogue colours, fingerprint-resistant and recoatable in case of deep abrasions.",
      de: "Matt-Lackierung mit Keramikpulver. 16 Katalogfarben, fingerabdrucksicher und bei tiefen Abrieben nachbeschichtbar.",
      es: "Lacado mate con polvos cerámicos. 16 colores del catálogo, antihuellas y recargable en caso de abrasiones profundas.",
      fr: "Laquage mat aux poudres céramiques. 16 couleurs du catalogue, anti-traces et réparable en cas d'abrasions profondes.",
    },
  },
  "Ebano Makassar": {
    title: {
      it: "Ebano Makassar",
      en: "Makassar ebony",
      de: "Makassar-Ebenholz",
      es: "Ébano Makassar",
      fr: "Ébène Makassar",
    },
    desc: {
      it: "Essenza esotica indonesiana con venatura marcata, palette dal bruno al nero. Prodotta in misure controllate per garantire continuità.",
      en: "Exotic Indonesian wood with a strong grain, palette ranging from brown to black. Produced in controlled sizes to ensure continuity.",
      de: "Exotisches indonesisches Holz mit ausgeprägter Maserung, Palette von Braun bis Schwarz. In kontrollierten Größen produziert, um Kontinuität zu gewährleisten.",
      es: "Esencia exótica indonesia con veta marcada, paleta del marrón al negro. Producida en medidas controladas para garantizar continuidad.",
      fr: "Essence exotique indonésienne avec une veinure marquée, palette du brun au noir. Produite dans des mesures contrôlées pour garantir la continuité.",
    },
  },
  "Grès effetto pietra": {
    title: {
      it: "Grès effetto pietra",
      en: "Stone-effect stoneware",
      de: "Stein-Effekt-Steingut",
      es: "Gres efecto piedra",
      fr: "Grès effet pierre",
    },
    desc: {
      it: "Lastre in grès porcellanato di grande formato (160×320 cm). Spessore sottile, leggerezza strutturale, resistenza al graffio.",
      en: "Large-format porcelain stoneware slabs (160×320 cm). Thin gauge, structural lightness, scratch resistance.",
      de: "Großformatige Feinsteinzeugplatten (160×320 cm). Dünne Stärke, strukturelle Leichtigkeit, Kratzfestigkeit.",
      es: "Losas de gres porcelánico de gran formato (160×320 cm). Espesor delgado, ligereza estructural, resistencia al rayado.",
      fr: "Dalles en grès cérame grand format (160×320 cm). Épaisseur fine, légèreté structurelle, résistance aux rayures.",
    },
  },
  Acciaio: {
    title: {
      it: "Acciaio",
      en: "Steel",
      de: "Edelstahl",
      es: "Acero",
      fr: "Acier",
    },
    desc: {
      it: "Inox satinato spessore 1,2 mm con bordi piegati. Inalterabile, ideale per i piani di lavoro a contatto con liquidi e calore.",
      en: "Satin stainless steel 1.2 mm thick with folded edges. Unalterable, ideal for worktops in contact with liquids and heat.",
      de: "Satinierter Edelstahl, 1,2 mm dick, mit gefalteten Kanten. Unveränderlich, ideal für Arbeitsplatten in Kontakt mit Flüssigkeiten und Hitze.",
      es: "Acero inoxidable satinado de 1,2 mm de espesor con bordes plegados. Inalterable, ideal para encimeras en contacto con líquidos y calor.",
      fr: "Acier inox satiné de 1,2 mm d'épaisseur avec bords pliés. Inaltérable, idéal pour les plans de travail en contact avec liquides et chaleur.",
    },
  },
  "Rovere termotrattato": {
    title: {
      it: "Rovere termotrattato",
      en: "Heat-treated oak",
      de: "Wärmebehandelte Eiche",
      es: "Roble termotratado",
      fr: "Chêne thermotraité",
    },
    desc: {
      it: "Rovere essiccato in autoclave per garantire stabilità dimensionale in ogni clima. Colore ambra naturale, ricco di sfumature.",
      en: "Oak autoclave-dried to guarantee dimensional stability in any climate. Natural amber colour, rich in nuances.",
      de: "Im Autoklav getrocknete Eiche, um in jedem Klima Maßhaltigkeit zu gewährleisten. Natürliche Bernsteinfarbe, reich an Nuancen.",
      es: "Roble secado en autoclave para garantizar estabilidad dimensional en cualquier clima. Color ámbar natural, rico en matices.",
      fr: "Chêne séché en autoclave pour garantir la stabilité dimensionnelle dans tout climat. Couleur ambre naturel, riche en nuances.",
    },
  },
  "Alluminio spazzolato": {
    title: {
      it: "Alluminio spazzolato",
      en: "Brushed aluminium",
      de: "Gebürstetes Aluminium",
      es: "Aluminio cepillado",
      fr: "Aluminium brossé",
    },
    desc: {
      it: "Alluminio anodizzato con finitura satinata, anti-impronta. Bordi netti e tolleranze stretto per le ante a taglio verticale.",
      en: "Anodised aluminium with satin, fingerprint-resistant finish. Clean edges and tight tolerances for vertical-cut doors.",
      de: "Eloxiertes Aluminium mit satinierter, fingerabdrucksicherer Oberfläche. Saubere Kanten und enge Toleranzen für vertikal geschnittene Türen.",
      es: "Aluminio anodizado con acabado satinado, antihuellas. Bordes netos y tolerancias estrechas para puertas de corte vertical.",
      fr: "Aluminium anodisé avec finition satinée anti-traces. Bords nets et tolérances serrées pour les portes à coupe verticale.",
    },
  },
  "Vetro acidato": {
    title: {
      it: "Vetro acidato",
      en: "Acid-etched glass",
      de: "Säuregeätztes Glas",
      es: "Vidrio acidulado",
      fr: "Verre acidulé",
    },
    desc: {
      it: "Vetro trattato con acido per ottenere una finitura morbida traslucida. Lascia filtrare la luce senza svelare il contenuto.",
      en: "Glass treated with acid for a soft translucent finish. Lets light pass through without revealing the contents.",
      de: "Mit Säure behandeltes Glas für eine weiche, durchscheinende Oberfläche. Lässt Licht durch, ohne den Inhalt zu zeigen.",
      es: "Vidrio tratado con ácido para obtener un acabado suave translúcido. Deja pasar la luz sin revelar el contenido.",
      fr: "Verre traité à l'acide pour obtenir une finition douce translucide. Laisse passer la lumière sans révéler le contenu.",
    },
  },
  "Marmo Calacatta": {
    title: {
      it: "Marmo Calacatta",
      en: "Calacatta marble",
      de: "Calacatta-Marmor",
      es: "Mármol Calacatta",
      fr: "Marbre Calacatta",
    },
    desc: {
      it: "Marmo bianco delle Apuane con venature grigio-oro. Selezione delle lastre direttamente in cava per ogni singolo progetto.",
      en: "White marble from the Apuan Alps with grey-gold veining. Slabs selected directly at the quarry for each individual project.",
      de: "Weißer Marmor aus den Apuanischen Alpen mit grau-goldener Maserung. Die Platten werden für jedes einzelne Projekt direkt im Steinbruch ausgewählt.",
      es: "Mármol blanco de los Alpes Apuanos con vetas gris-oro. Selección de las losas directamente en la cantera para cada proyecto individual.",
      fr: "Marbre blanc des Alpes Apuanes avec veinures gris-or. Sélection des dalles directement à la carrière pour chaque projet individuel.",
    },
  },
  "Statuario lucido": {
    title: {
      it: "Statuario lucido",
      en: "Polished Statuario",
      de: "Polierter Statuario",
      es: "Statuario pulido",
      fr: "Statuaire poli",
    },
    desc: {
      it: "Bianco Statuario con lucidatura specchio. Marmo storico di Carrara, riservato ai progetti contract di alta gamma.",
      en: "White Statuario with mirror polish. Historic Carrara marble, reserved for high-end contract projects.",
      de: "Weißer Statuario mit Spiegelpolitur. Historischer Carrara-Marmor, vorbehalten für High-End-Contract-Projekte.",
      es: "Blanco Statuario con pulido espejo. Mármol histórico de Carrara, reservado a proyectos contract de alta gama.",
      fr: "Statuaire blanc avec polissage miroir. Marbre historique de Carrare, réservé aux projets contract haut de gamme.",
    },
  },
  "Miele integrato": {
    title: {
      it: "Miele integrato",
      en: "Integrated Miele",
      de: "Integrierter Miele",
      es: "Miele integrado",
      fr: "Miele intégré",
    },
    desc: {
      it: "Elettrodomestici della linea Miele Generation 7000 ad incasso totale. Coordinamento diretto con il fornitore in fase di cantiere.",
      en: "Miele Generation 7000 fully built-in appliances. Direct coordination with the supplier during construction.",
      de: "Voll integrierte Geräte der Linie Miele Generation 7000. Direkte Abstimmung mit dem Lieferanten während der Bauphase.",
      es: "Electrodomésticos de la línea Miele Generation 7000 totalmente empotrados. Coordinación directa con el proveedor en fase de obra.",
      fr: "Électroménagers de la ligne Miele Generation 7000 entièrement encastrés. Coordination directe avec le fournisseur en phase de chantier.",
    },
  },
  "Marmo bocciardato": {
    title: {
      it: "Marmo bocciardato",
      en: "Bush-hammered marble",
      de: "Bossierter Marmor",
      es: "Mármol abujardado",
      fr: "Marbre bouchardé",
    },
    desc: {
      it: "Marmo lavorato con bocciarde per finitura ruvida tridimensionale. Sensazione tattile inedita, perfetta per i fondali.",
      en: "Marble worked with bush-hammers for a three-dimensional rough finish. A new tactile feel, perfect for backdrops.",
      de: "Mit Stockhämmern bearbeiteter Marmor für eine dreidimensionale, raue Oberfläche. Ein neues taktiles Gefühl, perfekt für Hintergründe.",
      es: "Mármol trabajado con bujardas para un acabado rugoso tridimensional. Sensación táctil inédita, perfecta para los fondos.",
      fr: "Marbre travaillé à la boucharde pour une finition rugueuse tridimensionnelle. Une sensation tactile inédite, parfaite pour les arrière-plans.",
    },
  },
  "Cemento materico": {
    title: {
      it: "Cemento materico",
      en: "Textured concrete",
      de: "Strukturierter Beton",
      es: "Cemento matérico",
      fr: "Béton matiéré",
    },
    desc: {
      it: "Cemento polimerico applicato a mano in spessore di 3 mm. Totalmente personalizzabile nel colore, fugato a vista per cifra autoriale.",
      en: "Polymeric concrete hand-applied in a 3 mm thickness. Fully customisable in colour, exposed grouting as a signature.",
      de: "Polymer-Beton, handaufgetragen in 3 mm Stärke. Vollständig farblich anpassbar, sichtbare Verfugung als Signatur.",
      es: "Cemento polimérico aplicado a mano en espesor de 3 mm. Totalmente personalizable en el color, junta vista como sello autoral.",
      fr: "Béton polymère appliqué à la main en 3 mm d'épaisseur. Entièrement personnalisable en couleur, joint apparent comme signature.",
    },
  },
  "Quercia spazzolata": {
    title: {
      it: "Quercia spazzolata",
      en: "Brushed oak",
      de: "Gebürstete Eiche",
      es: "Roble cepillado",
      fr: "Chêne brossé",
    },
    desc: {
      it: "Quercia europea spazzolata a setole metalliche per esaltare la venatura. Finitura tattile, calda, viva.",
      en: "European oak brushed with metal bristles to enhance the grain. Tactile, warm, living finish.",
      de: "Europäische Eiche, gebürstet mit Metallborsten, um die Maserung hervorzuheben. Taktile, warme, lebendige Oberfläche.",
      es: "Roble europeo cepillado con cerdas metálicas para realzar la veta. Acabado táctil, cálido, vivo.",
      fr: "Chêne européen brossé à la brosse métallique pour mettre en valeur la veinure. Finition tactile, chaude, vivante.",
    },
  },
  "Alluminio 12mm": {
    title: {
      it: "Alluminio 12mm",
      en: "12mm aluminium",
      de: "12mm Aluminium",
      es: "Aluminio 12mm",
      fr: "Aluminium 12mm",
    },
    desc: {
      it: "Anta tecnica in alluminio alveolare spessore 12 mm. Esclusiva Mantis: leggerezza strutturale + altezze libere fino al soffitto.",
      en: "Technical door in 12 mm honeycomb aluminium. Mantis exclusive: structural lightness + free heights all the way to the ceiling.",
      de: "Technische Tür aus 12 mm Wabenaluminium. Mantis-Exklusivität: strukturelle Leichtigkeit + freie Höhen bis zur Decke.",
      es: "Puerta técnica en aluminio alveolar de 12 mm de espesor. Exclusiva Mantis: ligereza estructural + alturas libres hasta el techo.",
      fr: "Porte technique en aluminium alvéolaire de 12 mm d'épaisseur. Exclusivité Mantis : légèreté structurelle + hauteurs libres jusqu'au plafond.",
    },
  },
  "Rovere Saturno": {
    title: {
      it: "Rovere Saturno",
      en: "Saturno oak",
      de: "Saturno-Eiche",
      es: "Roble Saturno",
      fr: "Chêne Saturno",
    },
    desc: {
      it: "Variante cromatica del rovere disegnata da Binova: tonalità ardesia con riflessi caldi. Coordinata con i metalli scuri.",
      en: "A chromatic variant of oak designed by Binova: slate tones with warm highlights. Coordinated with dark metals.",
      de: "Eine von Binova entworfene chromatische Variante der Eiche: Schiefertöne mit warmen Akzenten. Abgestimmt auf dunkle Metalle.",
      es: "Variante cromática del roble diseñada por Binova: tonos pizarra con reflejos cálidos. Coordinada con metales oscuros.",
      fr: "Variante chromatique du chêne dessinée par Binova : tons ardoise avec des reflets chauds. Coordonnée avec les métaux foncés.",
    },
  },
  "Vetro nero strutturale": {
    title: {
      it: "Vetro nero strutturale",
      en: "Structural black glass",
      de: "Strukturelles Schwarzglas",
      es: "Vidrio negro estructural",
      fr: "Verre noir structurel",
    },
    desc: {
      it: "Vetro temperato di sicurezza, finitura nera satinata, spessore 6 mm. Usato come fondale o come schienale tecnico.",
      en: "Tempered safety glass, satin black finish, 6 mm thick. Used as a backdrop or as a technical back panel.",
      de: "Gehärtetes Sicherheitsglas, satinierte schwarze Oberfläche, 6 mm Stärke. Verwendet als Hintergrund oder als technisches Rückteil.",
      es: "Vidrio templado de seguridad, acabado negro satinado, espesor 6 mm. Utilizado como fondo o como respaldo técnico.",
      fr: "Verre trempé de sécurité, finition noir satiné, épaisseur 6 mm. Utilisé comme arrière-plan ou comme dosseret technique.",
    },
  },
  "Frassino tinto": {
    title: {
      it: "Frassino tinto",
      en: "Stained ash",
      de: "Gefärbte Esche",
      es: "Fresno teñido",
      fr: "Frêne teinté",
    },
    desc: {
      it: "Frassino europeo tinto e laccato per ottenere palette personalizzata sul progetto. Resa morbida, venatura visibile.",
      en: "European ash stained and lacquered to obtain a project-customised palette. Soft rendering, visible grain.",
      de: "Europäische Esche, gefärbt und lackiert, um eine projektspezifische Palette zu erhalten. Weiche Wirkung, sichtbare Maserung.",
      es: "Fresno europeo teñido y lacado para obtener una paleta personalizada para el proyecto. Renderizado suave, veta visible.",
      fr: "Frêne européen teinté et laqué pour obtenir une palette personnalisée selon le projet. Rendu doux, veinure visible.",
    },
  },
  "Brass anticato": {
    title: {
      it: "Brass anticato",
      en: "Antiqued brass",
      de: "Antiquiertes Messing",
      es: "Latón envejecido",
      fr: "Laiton vieilli",
    },
    desc: {
      it: "Ottone trattato chimicamente per ottenere patina d'epoca. Ogni pezzo è unico — nessuna patina è identica alla successiva.",
      en: "Brass chemically treated to obtain a period patina. Every piece is unique — no two patinas are identical.",
      de: "Chemisch behandeltes Messing, um eine zeitgenössische Patina zu erhalten. Jedes Stück ist einzigartig — keine Patina gleicht der nächsten.",
      es: "Latón tratado químicamente para obtener pátina de época. Cada pieza es única — ninguna pátina es idéntica a la siguiente.",
      fr: "Laiton traité chimiquement pour obtenir une patine d'époque. Chaque pièce est unique — aucune patine n'est identique à la suivante.",
    },
  },
  "Olmo naturale": {
    title: {
      it: "Olmo naturale",
      en: "Natural elm",
      de: "Natürliche Ulme",
      es: "Olmo natural",
      fr: "Orme naturel",
    },
    desc: {
      it: "Essenza italiana a poro aperto, venatura morbida e dorata. Cresce nella Pianura Padana, finitura naturale a olio duro.",
      en: "Italian open-pore wood with a soft, golden grain. Grown in the Po Valley, hard-oil natural finish.",
      de: "Italienisches offenporiges Holz mit weicher, goldener Maserung. Wächst in der Po-Ebene, natürliche Hartöl-Oberfläche.",
      es: "Esencia italiana de poro abierto, veta suave y dorada. Crece en la Llanura Padana, acabado natural al aceite duro.",
      fr: "Essence italienne à pores ouverts, veinure douce et dorée. Pousse dans la plaine du Pô, finition naturelle à l'huile dure.",
    },
  },
  "Pietra Serena": {
    title: {
      it: "Pietra Serena",
      en: "Pietra Serena stone",
      de: "Pietra Serena",
      es: "Piedra Serena",
      fr: "Pietra Serena",
    },
    desc: {
      it: "Pietra fiorentina dall'inconfondibile grigio-azzurro. Lavorabile per spessori importanti, ideale per piani monolitici.",
      en: "Florentine stone with an unmistakable grey-blue colour. Workable in significant thicknesses, ideal for monolithic worktops.",
      de: "Florentinischer Stein mit unverwechselbarer grau-blauer Farbe. In erheblichen Stärken verarbeitbar, ideal für monolithische Arbeitsplatten.",
      es: "Piedra florentina del inconfundible gris-azul. Trabajable en espesores importantes, ideal para encimeras monolíticas.",
      fr: "Pierre florentine d'un gris-bleu inimitable. Travaillable en épaisseurs importantes, idéale pour les plans de travail monolithiques.",
    },
  },
  "Lacca opaca": {
    title: {
      it: "Lacca opaca",
      en: "Matt lacquer",
      de: "Matt-Lack",
      es: "Laca mate",
      fr: "Laque mate",
    },
    desc: {
      it: "Verniciatura mat ai polveri ceramici. 16 colori del catalogo 2026, anti-impronta, riparabile.",
      en: "Matt ceramic-powder lacquering. 16 colours in the 2026 catalogue, fingerprint-resistant, repairable.",
      de: "Matt-Lackierung mit Keramikpulver. 16 Farben im Katalog 2026, fingerabdrucksicher, reparierbar.",
      es: "Lacado mate con polvos cerámicos. 16 colores del catálogo 2026, antihuellas, reparable.",
      fr: "Laquage mat aux poudres céramiques. 16 couleurs au catalogue 2026, anti-traces, réparable.",
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
