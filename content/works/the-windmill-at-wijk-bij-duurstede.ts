import { workSchema, type Work } from "@/lib/schema";

const draft = {
  slug: "the-windmill-at-wijk-bij-duurstede",
  title: "The Windmill at Wijk bij Duurstede",
  titleLocal: "De molen bij Wijk bij Duurstede",
  maker: {
    name: "Jacob Isaacksz van Ruisdael",
    life: "1628/29–1682",
    place: "Haarlem / Amsterdam",
    note: "The museum’s person page baptizes him Haarlem-born, c. 1628–1682, a physician who moved to Amsterdam in 1656. Eddy Schavemaker’s 2019 biography in the same house is more careful: a notarized age in 1661 gives 1628 or 1629; Houbraken’s doctor is probably another man; Amsterdam circa 1655. He signs this canvas Ruisdael. The Dutch masters note: his uncle signed Ruysdael. The spelling is a fact of paint. The physician is not.",
  },
  dateDisplay: "c. 1668–1670",
  dateNote:
    "The Rijksmuseum dates the picture c. 1668–c. 1670. Both ends approximate. The object is not dated on the face.",
  medium: "Oil on canvas",
  dimensions: "83 × 101 cm",
  location: "Rijksmuseum, Amsterdam",
  accession: "SK-C-211",
  acquisition:
    "On loan from the City of Amsterdam (A. van der Hoop Bequest). The object record prints that credit line and leaves the Acquisition and Provenance fields empty.",
  museumUrl:
    "https://www.rijksmuseum.nl/en/collection/object/The-Windmill-at-Wijk-bij-Duurstede--fb2b57919550092bf709472f81426eab",
  rights:
    "The painting is in the public domain. Zoom tiles are served by the Rijksmuseum’s IIIF (Micrio). Poster file from the same service.",
  image: {
    iiif: "https://iiif.micr.io/XWEFp/info.json",
    poster: "/works/the-windmill-at-wijk-bij-duurstede.jpg",
    width: 7021,
    height: 5952,
    alt: "A brick windmill stands on a riverbank under dark clouds; a sailing boat on the water at left, castle roofs and a church tower beyond, three women on the path at right.",
    credit: "Rijksmuseum, Amsterdam. IIIF identifier XWEFp.",
  },
  caption: "c. 1668–1670 · SK-C-211",
  hotspots: [
    {
      id: "mill",
      n: 1,
      x: 0.71,
      y: 0.46,
      title: "The mill",
      body: "The wall text’s first verb is rises. Dark rain clouds; castle and church overshadowed. Up close it is brick, a cap, a gallery. I am not hanging a republic on a mill the museum does not.",
      source: "Rijksmuseum wall text: the windmill rises up majestically.",
    },
    {
      id: "miller",
      n: 2,
      x: 0.645,
      y: 0.525,
      title: "On the balcony",
      body: "The museum’s masterpieces note: if you look closely you can see the miller standing on the balcony, as if to check the weather. As if. Their question — is a storm rolling in? — stays their question. I am pointing at a hat on a gallery.",
      source:
        "Rijksmuseum, One hundred masterpieces: the miller standing on the balcony, as if to check the weather.",
    },
    {
      id: "sails",
      n: 3,
      x: 0.62,
      y: 0.33,
      title: "The sails",
      body: "How the mill takes the sky. Four arms, two in light. The museum does not lecture on whether the set could turn. I will not either.",
    },
    {
      id: "clouds",
      n: 4,
      x: 0.22,
      y: 0.18,
      title: "Dark rain clouds",
      body: "The wall text: defying the dark rain clouds. The masterpieces note asks if a storm is rolling in. Paint of weather, their weather. Look at the grey before the mill.",
      source: "Rijksmuseum wall text: defying the dark rain clouds.",
    },
    {
      id: "lek",
      n: 5,
      x: 0.22,
      y: 0.8,
      title: "The Lek",
      body: "The wall text: the River Lek flows in the foreground. The Dutch description puts it at left. Water, a few lights, posts along the cut. A river, not a symbol I will name for them.",
      source:
        "Rijksmuseum wall text; Dutch description: Links de rivier de Lek.",
    },
    {
      id: "boat",
      n: 6,
      x: 0.14,
      y: 0.7,
      title: "Een bootje",
      body: "The Dutch description is singular: een bootje, at left on the Lek. Looking finds a sailing boat, a small hull beside it, a skiff, and two masts at the bank. I am pointing at the sail. Their one stays one.",
      source: "Rijksmuseum Dutch description: met een bootje.",
    },
    {
      id: "castle",
      n: 7,
      x: 0.56,
      y: 0.59,
      title: "Kasteel Duurstede",
      body: "The Dutch description: in the distance, the towers of kasteel Duurstede. The English wall text lets the mill overshadow the castle. Roofs, a turret, trees. Their name.",
      source:
        "Rijksmuseum Dutch description: In de verte de torens van kasteel Duurstede.",
    },
    {
      id: "church",
      n: 8,
      x: 0.885,
      y: 0.575,
      title: "The church tower",
      body: "The Dutch description names the tower at right: de Sint-Janskerk. The English wall text only says the church of Wijk bij Duurstede. I am not adding a second saint the object does not.",
      source:
        "Rijksmuseum Dutch description: rechts de toren van de Sint-Janskerk.",
    },
    {
      id: "women",
      n: 9,
      x: 0.835,
      y: 0.67,
      title: "Along the bank",
      body: "The Dutch description: langs de oever lopen enkele vrouwen. Three figures on the path, one in a white cap. I am not inventing errands the museum does not.",
      source:
        "Rijksmuseum Dutch description: Langs de oever lopen enkele vrouwen.",
    },
    {
      id: "land",
      n: 10,
      x: 0.18,
      y: 0.655,
      title: "Low-lying land",
      body: "The wall text’s typical Dutch elements: the low-lying land, the water and the expansive sky, made to converge on the mill. I am pointing at the left shore. Their sentence about converging stays theirs.",
      source:
        "Rijksmuseum wall text: united all the typical Dutch elements – the low-lying land, the water and the expansive sky.",
    },
  ],
  explainer: [
    "This is not a Delft interior and not a swan. A mill on a river, named. The wall text starts with majesty and then with typical Dutch elements made to converge on an equally characteristic mill. Look at the brick before that sentence. The person page in the same house says many of his landscapes look grander than the actual view. Both claims stay. I am not hanging independence on a sail.",
    "The museum’s Dutch description is almost a list: the Lek at left with a boat; the mill on the bank; the towers of kasteel Duurstede in the distance; at right the tower of the Sint-Janskerk; women along the shore. The English wall text does not name the saint. Een bootje is singular; looking finds more hulls. The gaps stay.",
    "If you look closely, the masterpieces note says, you can see the miller on the balcony, as if to check the weather. As if. The object record lists a signature, Ruisdael, and does not say where. Marks sit above the mill door that I cannot honestly read as that name. I have not given them a plate. If you find the letters, the finding is yours.",
    "c. 1668–c. 1670 on the label. The person page lets him practise medicine and move in 1656; Schavemaker, 2019, marks both with caution. Two English titles, one capital. On loan from the City of Amsterdam, A. van der Hoop Bequest — the same credit line as the Jewish Bride in this house. Acquisition and Provenance are empty fields on the current object page. None of that is a problem to solve.",
    "World famous, and rightly so: their sentence. A mill, a river, a sky. The rest is looking.",
  ],
  sources: [
    {
      label: "Rijksmuseum, SK-C-211",
      href: "https://www.rijksmuseum.nl/en/collection/object/The-Windmill-at-Wijk-bij-Duurstede--fb2b57919550092bf709472f81426eab",
    },
    {
      label:
        "Rijksmuseum object text (wall text; Dutch description; titles The Windmill / The windmill; signature: ‘Ruisdael’; dating c. 1668–c. 1670; oil on canvas 83 × 101 cm; credit line On loan from the City of Amsterdam (A. van der Hoop Bequest); Acquisition and Provenance left empty; public domain)",
    },
    {
      label: "Persistent URL, SK-C-211",
      href: "https://id.rijksmuseum.nl/200107959",
    },
    {
      label:
        "Rijksmuseum, “The Windmill at Wijk bij Duurstede,” One hundred masterpieces (miller on the balcony; c. 1628–1682)",
      href: "https://www.rijksmuseum.nl/en/stories/one-hundred-masterpieces/story/windmill-wijk-bij-duurstede",
    },
    {
      label:
        "Rijksmuseum person page, Jacob Isaacksz van Ruisdael (Haarlem-born; physician; Amsterdam 1656; landscapes grander than the actual view)",
      href: "https://www.rijksmuseum.nl/en/collection/node/Jacob-Isaacksz-van-Ruisdael--84e5adab2eedeb558173c75ebe75b474",
    },
    {
      label:
        "Eddy Schavemaker, biography of Jacob Isaacksz van Ruisdael (Haarlem 1628/29–Amsterdam 1682; physician claim unlikely), in Dutch Drawings of the Seventeenth Century in the Rijksmuseum, 2019",
      href: "https://www.rijksmuseum.nl/en/collection/object/Landscape-with-a-View-of-Haarlem-Seen-from-the-West--66babe8f8e8b4f0b281a043c72e0998e",
    },
    {
      label:
        "Rijksmuseum, Dutch masters note on Jacob Isaacksz van Ruisdael (Ruisdael / Ruysdael spelling)",
      href: "https://www.rijksmuseum.nl/en/stories/dutch-masters/story/jacob-isaacksz-ruisdael-10",
    },
  ],
  corrections:
    "If a plate is wrong, the error is mine. There is no comments box. A public corrections address will sit here when the site has a desk.",
};

export const windmillAtWijkBijDuurstede: Work = workSchema.parse(draft);
