import { workSchema, type Work } from "@/lib/schema";

const draft = {
  slug: "still-life-with-flowers-in-a-glass-vase",
  title: "Still Life with Flowers in a Glass Vase",
  titleLocal: "Stilleven met bloemen in een glazen vaas",
  maker: {
    name: "Rachel Ruysch",
    life: "1664–1750",
    place: "The Hague / Amsterdam",
    note: "The museum’s wall text leads with fame: the most famous female artist of her time, prices over a thousand guilders, court painter to the Elector of the Palatinate. Then the sentence about marriage, ten children, and that she kept working and signed with her own name. The name on the canvas is the fact that belongs to looking. The rest is their biography, not a story I will enlarge. The person record has her born in The Hague and dead in Amsterdam. This plate does not tidy a city of work they do not print on the object.",
  },
  dateDisplay: "c. 1690–1720",
  dateNote:
    "The Rijksmuseum spans c. 1690 to c. 1720. Thirty years, both ends approximate. The object is not dated on the face. The gap stays.",
  medium: "Oil on canvas",
  dimensions: "65 × 53.5 cm",
  location: "Rijksmuseum, Amsterdam",
  accession: "SK-A-354",
  acquisition: "Purchased 1814",
  museumUrl:
    "https://www.rijksmuseum.nl/en/collection/object/Still-Life-with-Flowers-in-a-Glass-Vase--210e3fc99bb8b3a875fcd7b57fce1a83",
  rights:
    "The painting is in the public domain. Zoom tiles are served by the Rijksmuseum’s IIIF (Micrio). Poster file from the same service.",
  image: {
    iiif: "https://iiif.micr.io/sbaXO/info.json",
    poster: "/works/still-life-with-flowers-in-a-glass-vase.jpg",
    width: 5537,
    height: 6667,
    alt: "A glass vase of mixed flowers stands on a marble ledge against a dark ground: tulips rising, roses in the mass, a bloom resting on the stone.",
    credit: "Rijksmuseum, Amsterdam. IIIF identifier sbaXO.",
  },
  caption: "c. 1690–1720 · SK-A-354",
  hotspots: [
    {
      id: "vase",
      n: 1,
      x: 0.52,
      y: 0.76,
      title: "Glass vase",
      body: "The museum’s title starts here: flowers in a glass vase. Dark green, round, stems inside. The bouquet is theatre. The vessel is how it sits.",
      source: "Rijksmuseum title and Dutch description: glazen vaas.",
    },
    {
      id: "marble",
      n: 2,
      x: 0.28,
      y: 0.9,
      title: "Marble ledge",
      body: "The Dutch object description is specific: a marble tabletop. Not a cloth. A stone shelf, and the bouquet has to answer it.",
      source:
        "Rijksmuseum Dutch description: op een marmeren tafelblad.",
    },
    {
      id: "tulip-flame",
      n: 3,
      x: 0.62,
      y: 0.12,
      title: "Tulip, flamed",
      body: "The museum lists tulips among the bouquet. This is the one that takes the top: white, broken with red, on a long stem. I am not adding a market or a mania. It is a tulip in this window of dark.",
      source: "Rijksmuseum description: tulpen.",
    },
    {
      id: "tulip-open",
      n: 4,
      x: 0.28,
      y: 0.27,
      title: "Tulip, open",
      body: "Another tulip, turned, the inner cup catching light. Two of the same name, two different weights. The left side of the picture leans on this one.",
      source: "Rijksmuseum description: tulpen.",
    },
    {
      id: "roses",
      n: 5,
      x: 0.55,
      y: 0.48,
      title: "Roses",
      body: "The museum names roses. In looking they are the pale mass at the heart — pink, full, a dark eye in one. They hold the middle so the tulips can leave it.",
      source: "Rijksmuseum description: rozen.",
    },
    {
      id: "bindweed",
      n: 6,
      x: 0.36,
      y: 0.78,
      title: "Bindweed",
      body: "A small blue near the glass. The museum’s Dutch list includes winde — bindweed. That is their word. If this bloom is the wrong one in the list, the error is mine.",
      source: "Rijksmuseum description: winde.",
    },
    {
      id: "carnations",
      n: 7,
      x: 0.78,
      y: 0.62,
      title: "Carnations, at right",
      body: "Ruffled red on the right edge. The museum lists anjers. I am pointing at the cluster that reads as such in looking. I will not walk the rest of the bouquet naming flowers they did not pin to a petal.",
      source: "Rijksmuseum description: anjers.",
    },
    {
      id: "signature",
      n: 8,
      x: 0.1,
      y: 0.93,
      title: "Rachel Ruysch f.",
      body: "The Dutch inscriptions record is more precise than the English: signature, lower left, Rachel Ruysch f. She signed her own name. The wall text makes that a biographical point. On the canvas it is paint in a corner.",
      source:
        "Rijksmuseum inscriptions: signatuur, linksonder: ‘Rachel Ruysch f.’",
    },
    {
      id: "ground",
      n: 9,
      x: 0.86,
      y: 0.22,
      title: "The dark",
      body: "Almost empty field. The bouquet is allowed to be a monument because the room is withheld. I am not turning the black into a forest floor the museum does not name.",
    },
    {
      id: "ledge-bloom",
      n: 10,
      x: 0.22,
      y: 0.82,
      title: "On the stone",
      body: "A bloom rests on the marble, orange, apart from the glass. The museum’s list is tulips, roses, carnations, irises, poppies, hyacinths, bindweed. It does not pin this one. I will not give it a name the record does not.",
      source:
        "Rijksmuseum description lists species without placing this flower.",
    },
  ],
  explainer: [
    "This room is not a Delft interior. A marble ledge, a glass, a bouquet that would not stand in a house as a single week’s flowers. The museum names the species. It does not name a season, a vanitas, or an insect. Those absences are the plate’s discipline.",
    "Look at the vase before the tulips. Stems in water, a dark vessel on stone. The opulence is arranged. The still point is how the glass sits, not how famous she was.",
    "The wall text wants you to know four things: fame, prices over a thousand guilders, a court appointment to the Elector of the Palatinate, and that after marriage and ten children she kept working and signed with her own name. Close looking includes refusing to hang any of that on a petal. The name is in the lower left. The rest is their prose.",
    "The date is a span of thirty years: c. 1690–c. 1720. Both ends approximate. The object is unsigned with a year. This plate does not invent one.",
    "Purchased 1814. The museum does not print a seller. It hangs in the Gallery of Honour. Those are their sentences. Irises, poppies, hyacinths are on the list and not, here, given a hotspot I cannot honestly place.",
  ],
  sources: [
    {
      label: "Rijksmuseum, SK-A-354",
      href: "https://www.rijksmuseum.nl/en/collection/object/Still-Life-with-Flowers-in-a-Glass-Vase--210e3fc99bb8b3a875fcd7b57fce1a83",
    },
    {
      label:
        "Rijksmuseum object text (wall text; Dutch description of vase, marble, species; inscription lower left; purchase 1814)",
    },
    {
      label:
        "Rijksmuseum person record for Rachel Ruysch (born The Hague; died Amsterdam; 1664–1750)",
      href: "https://id.rijksmuseum.nl/2101342",
    },
  ],
  corrections:
    "If a plate is wrong, the error is mine. There is no comments box. A public corrections address will sit here when the site has a desk.",
};

export const flowersInAGlassVase: Work = workSchema.parse(draft);
