import { workSchema, type Work } from "@/lib/schema";

const draft = {
  slug: "portrait-of-a-married-couple",
  title:
    "Portrait of a Married Couple, Likely Isaac Abrahamsz Massa and Beatrix van der Laen",
  titleLocal:
    "Portret van een echtpaar, mogelijk Isaac Abrahamsz Massa en Beatrix van der Laen",
  maker: {
    name: "Frans Hals",
    life: "c. 1582/83–1666",
    place: "Haarlem",
    note: "The person page in this house gives c. 1582–1666: a bold and daring painter, Haarlem commissions, ordinary sitters as well as the elite. Jonathan Bikker’s 2007 biography in the same catalog is more careful: Antwerp, probably 1582 or 1583; Haarlem by 1586; buried 1666. The current English title hedges the sitters: Likely. A former title does not. The Dutch description names them without a hedge. This plate does not tidy the names.",
  },
  dateDisplay: "c. 1622",
  dateNote:
    "The Rijksmuseum dates the picture c. 1622. The Dutch description ties that year to a Haarlem wedding on 25 April 1622. If the sitters are not Massa and van der Laen, the year is still an approximation on the label, not a date on the face. Inscriptions / marks is an empty field.",
  medium: "Oil on canvas",
  dimensions: "140 × 166.5 cm",
  location: "Rijksmuseum, Amsterdam",
  accession: "SK-A-133",
  acquisition:
    "Purchased 25 November 1851. The object record prints purchase 1851-11-25. Credit line is an empty field.",
  museumUrl:
    "https://www.rijksmuseum.nl/en/collection/object/Portrait-of-a-Married-Couple-Likely-Isaac-Abrahamsz-Massa-and-Beatrix-van-der-Laen--29d98c79eda4e9d954f80ce0bb0c8b17",
  rights:
    "The painting is in the public domain. Zoom tiles are served by the Rijksmuseum’s IIIF (Micrio). Poster file from the same service.",
  image: {
    iiif: "https://iiif.micr.io/kMSwz/info.json",
    poster: "/works/portrait-of-a-married-couple.jpg",
    width: 9760,
    height: 8242,
    alt: "A smiling couple sits full-length under a tree at left: the man in black with a wide hat, the woman leaning a hand on his shoulder; a garden with a fountain and a country house opens at right.",
    credit: "Rijksmuseum, Amsterdam. IIIF identifier kMSwz.",
  },
  caption: "c. 1622 · SK-A-133",
  hotspots: [
    {
      id: "his-smile",
      n: 1,
      x: 0.16,
      y: 0.22,
      title: "His mouth",
      body: "Open enough to count as a smile. The wall text’s adjectives are intimate and joyful. Up close it is teeth, a moustache, a few lights on the lip. I am not adding a joke the museum does not record.",
      source: "Rijksmuseum wall text: an intimate and joyful manner.",
    },
    {
      id: "heart",
      n: 2,
      x: 0.235,
      y: 0.43,
      title: "The left hand",
      body: "White, on the black of the chest. Looking stops there. Bikker, writing in this house in 2007, lets the gesture take on an oath of fidelity because of the thistle. I am pointing at a glove. Their oath stays theirs.",
      source:
        "Jonathan Bikker, 2007: the placement of the man’s hand over his heart… swearing an oath of fidelity.",
    },
    {
      id: "her-hand",
      n: 3,
      x: 0.318,
      y: 0.3,
      title: "On his shoulder",
      body: "The catalog: the wife affectionately rests her right hand on her husband’s shoulder. Affectionately is their adverb. The same entry: the hand was not reserved; a change of mind. I have not handled the plates. The paint of a cuff sits over a bodice. That much is looking.",
      source:
        "Jonathan Bikker, 2007: hand on the shoulder; not reserved; the man’s left cuff painted over the woman’s bodice.",
    },
    {
      id: "her-laugh",
      n: 4,
      x: 0.51,
      y: 0.21,
      title: "Her mouth",
      body: "The Dutch masterpieces note: she looks at us laughing; rare, they say, on a seventeenth-century picture. All the reason for gaiety: it is a wedding portrait. Their sentence needs the names to be the names. I am pointing at a mouth.",
      source:
        "Rijksmuseum, Honderd meesterwerken: De vrouw kijkt ons lachend aan.",
    },
    {
      id: "thistle",
      n: 5,
      x: 0.125,
      y: 0.47,
      title: "Distel",
      body: "The Dutch description: links een distel. A plant, at left, against the rise. Writers hang male fidelity on it. The wall text does not. A thistle is there; Männertreu is not a fact I will assert.",
      source:
        "Rijksmuseum Dutch description: Links een distel. Wall text silent on the plant.",
    },
    {
      id: "ivy",
      n: 6,
      x: 0.8,
      y: 0.91,
      title: "Klimop",
      body: "The Dutch description: rechts klimop. A trail on the ground at the right, leaves on dirt. Bikker lets ivy mean steadfast love, faithfulness, fertility. Probably, he writes. Probably stays on his page.",
      source: "Rijksmuseum Dutch description: rechts klimop.",
    },
    {
      id: "tree",
      n: 7,
      x: 0.42,
      y: 0.12,
      title: "Onder een boom",
      body: "The Dutch description: full-length on a rise under a tree. Canopy, a trunk behind his hat. Bikker names a vine clinging between them and then a metaphor for love past death. The object text names a tree. I am pointing at leaves.",
      source:
        "Rijksmuseum Dutch description: Het paar zit ten voeten uit op een verhoging onder een boom.",
    },
    {
      id: "fountain",
      n: 8,
      x: 0.83,
      y: 0.6,
      title: "Fontein",
      body: "The Dutch description puts a fountain in the garden at right. Stone, a jet, a basin. Bikker calls the middle ground a Garden of Love and keeps the seated couple separate from it. Their garden. I am pointing at water.",
      source:
        "Rijksmuseum Dutch description: in een tuin met fontein bij een landhuis.",
    },
    {
      id: "walkers",
      n: 9,
      x: 0.89,
      y: 0.61,
      title: "Elegante paren",
      body: "The Dutch description: elegant pairs walking. Two figures by the basin, more at the house steps. I am not inventing courtship the object does not. Bikker’s reading — still in the courtship phase — stays his reading.",
      source:
        "Rijksmuseum Dutch description: elegante paren wandelend in een tuin.",
    },
    {
      id: "house",
      n: 10,
      x: 0.955,
      y: 0.5,
      title: "Landhuis",
      body: "A pale house at the right edge. The Dutch description names it: een landhuis. The wall text does not. The sky takes more of the canvas than the building. Bikker notes the couple placed off to one side rather than in the centre. I am pointing at a façade.",
      source: "Rijksmuseum Dutch description: bij een landhuis.",
    },
  ],
  explainer: [
    "This is not a Delft kitchen and not a mill on a river. A couple, life-size, on a bank under a tree, smiling. The wall text starts with rarity — a married pair portrayed together, lifesize, in one picture — and then with friendship: presumably Isaac Abrahamsz Massa and Beatrix van der Laen, likely. Presumably. Likely. Look at the mouths before you settle the names.",
    "The titles in this house do not agree. English now: Likely. Another English title: probably. Dutch current: mogelijk. The Dutch description drops the hedge and gives a Haarlem wedding, 25 April 1622. A former English title prints the same wedding as a fact. In 1851 the Six sale offered them as Hals and his wife; Hofstede de Groot dismissed that in 1910, and the catalog repeats the dismissal. Slive did not find the Massa identification compelling, and asked whether the woman looks old enough to be thirty. Gudlaugsson did not find that the man resembles Massa. Their doubts stay.",
    "The museum’s Dutch description is almost a list: the pair full-length on a rise under a tree; a thistle at left; ivy at right; in the distance, elegant pairs walking in a garden with a fountain by a country house. The English wall text names none of those plants. Bikker, 2007, writing in this house, lets the vegetation probably allude to newly-weds — a vine, ivy, thistle, clay pots, a Garden of Love. Probably. I am pointing at a thistle because they named one. I am not hanging an emblem the wall does not.",
    "The Dutch masterpieces note: she looks at us laughing; rare on a seventeenth-century picture; all the reason for gaiety, it is a wedding portrait. The wall text’s adjectives are intimate, joyful, audacious. The laugh is paint. The wedding is their sentence, and it needs the sitters to be the sitters. The person page in the same house, introducing Hals, captions this canvas probably. Three hedges, one picture.",
    "c. 1622 on the label. Oil on canvas, 140 × 166.5 cm. Unsigned: Inscriptions / marks is empty. Purchased 25 November 1851; Credit line is an empty field; provenance opens with an ellipsis and marks a 1710 inventory with a question mark. Bikker notes a change of mind in the cuff and in the hand on the shoulder. I have not handled those plates. None of that is a problem to solve.",
  ],
  sources: [
    {
      label: "Rijksmuseum, SK-A-133",
      href: "https://www.rijksmuseum.nl/en/collection/object/Portrait-of-a-Married-Couple-Likely-Isaac-Abrahamsz-Massa-and-Beatrix-van-der-Laen--29d98c79eda4e9d954f80ce0bb0c8b17",
    },
    {
      label:
        "Rijksmuseum object text (wall text; Dutch description; titles Likely / probably / mogelijk / former Marriage Portrait, married in Haarlem 25 April 1622; dating c. 1622; oil on canvas, support 140 × 166.5 cm; purchase 1851-11-25; Credit line left empty; Inscriptions / marks left empty; provenance opens … and marks 1710 with ?; public domain)",
    },
    {
      label: "Persistent URL, SK-A-133",
      href: "https://id.rijksmuseum.nl/200109346",
    },
    {
      label:
        "Rijksmuseum, Dutch object page (title Portret van een echtpaar, mogelijk…; wall text: zelden levensgroot… vermoedelijk Isaac Abrahamsz Massa en Beatrix van der Laen)",
      href: "https://www.rijksmuseum.nl/nl/collectie/object/Portret-van-een-echtpaar-mogelijk-Isaac-Abrahamsz-Massa-en-Beatrix-van-der-Laen--29d98c79eda4e9d954f80ce0bb0c8b17",
    },
    {
      label:
        "Jonathan Bikker, “Frans Hals, Portrait of a Couple in a Landscape, probably Isaac Abrahamsz Massa (1586–1643) and Beatrix van der Laen (1592–1639), c. 1622,” in J. Bikker (ed.), Dutch Paintings of the Seventeenth Century in the Rijksmuseum, 2007, no. 104 (Antwerp c. 1582/83; identification doubted by Slive and Gudlaugsson; 1851 as Hals and his wife; plants probably symbolic; cuff over bodice)",
      href: "https://data.rijksmuseum.nl/200109346",
    },
    {
      label:
        "Rijksmuseum person page, Frans Hals (c. 1582–1666; Haarlem commissions; ordinary sitters; caption on this canvas: probably)",
      href: "https://www.rijksmuseum.nl/en/collection/node/Frans-Hals--7738329f061a2d20eb864179305c70b2",
    },
    {
      label:
        "Rijksmuseum, Honderd meesterwerken, “Portret van een stel, waarschijnlijk Abrahamsz Massa en Beatrix van der Laen” (De vrouw kijkt ons lachend aan)",
      href: "https://www.rijksmuseum.nl/nl/stories/honderd-meesterwerken/story/portret-van-een-stel",
    },
  ],
  corrections:
    "If a plate is wrong, the error is mine. There is no comments box. A public corrections address will sit here when the site has a desk.",
};

export const portraitOfAMarriedCouple: Work = workSchema.parse(draft);
