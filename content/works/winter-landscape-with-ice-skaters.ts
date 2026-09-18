import { workSchema, type Work } from "@/lib/schema";

const draft = {
  slug: "winter-landscape-with-ice-skaters",
  title: "Winter Landscape with Ice Skaters",
  titleLocal: "Winterlandschap met schaatsers",
  maker: {
    name: "Hendrick Avercamp",
    life: "1585–1634",
    place: "Kampen",
    note: "The museum’s biography baptizes him in Amsterdam and buries him in Kampen. Mute from birth, they say; called de Stomme. That is their sentence. This plate does not hang it on the ice. He signed the shed at the right. The English title has slipped: Ice Skaters, Iceskaters, Skaters. The Dutch still keeps a former name, Winterlandschap met ijsvermaak.",
  },
  dateDisplay: "c. 1608",
  dateNote:
    "The Rijksmuseum dates the picture c. 1608. Dendrochronology on the three oak planks: youngest heartwood 1582; the panel could have been ready by 1593, more likely 1599 or after. The museum’s year stays. The wood is earlier permission, not a second date on the face.",
  medium: "Oil on panel",
  dimensions: "77.3 × 131.9 cm",
  location: "Rijksmuseum, Amsterdam",
  accession: "SK-A-1718",
  acquisition:
    "Purchased with the support of the Vereniging Rembrandt. The object record dates the purchase 1898-01; the provenance paragraph says 1897, from the dealer C.S. Roos. Both stay.",
  museumUrl:
    "https://www.rijksmuseum.nl/en/collection/object/Winter-Landscape-with-Ice-Skaters--918895dc18da94e357c6763adda8882f",
  rights:
    "The painting is in the public domain. Zoom tiles are served by the Rijksmuseum’s IIIF (Micrio). Poster file from the same service.",
  image: {
    iiif: "https://iiif.micr.io/aXnzA/info.json",
    poster: "/works/winter-landscape-with-ice-skaters.jpg",
    width: 6337,
    height: 3674,
    alt: "A wide winter village seen from above: a frozen river crowded with skaters and walkers, a church at left, a red sleigh at right, bare trees at either edge.",
    credit: "Rijksmuseum, Amsterdam. IIIF identifier aXnzA.",
  },
  caption: "c. 1608 · SK-A-1718",
  hotspots: [
    {
      id: "carcass",
      n: 1,
      x: 0.08,
      y: 0.93,
      title: "The horse",
      body: "The wall text starts in the left foreground: crows and a dog feast on a horse that has frozen to death. Avercamp, they say, did not shy away from grim details. It is paint of a body on ice, not an emblem I will name for them.",
      source: "Rijksmuseum wall text.",
    },
    {
      id: "trap",
      n: 2,
      x: 0.19,
      y: 0.94,
      title: "Bird trap",
      body: "A small trap in the snow, footprints toward it. The 2007 catalogue says Avercamp took the motif from Brueghel’s Landscape with Skaters and Bird Trap. Writers have wanted vanitas here. The catalogue calls that speculation. So does this plate.",
      source:
        "Jan Piet Filedt Kok, Dutch Paintings of the Seventeenth Century in the Rijksmuseum, 2007, no. 10.",
    },
    {
      id: "church",
      n: 3,
      x: 0.2,
      y: 0.34,
      title: "Church, at left",
      body: "The Dutch object description is brief: links een kerk. A tower, a nave, cold colour. I am not naming a parish the museum does not.",
      source: "Rijksmuseum Dutch description: links een kerk.",
    },
    {
      id: "half-moon",
      n: 4,
      x: 0.24,
      y: 0.58,
      title: "Two lions",
      body: "Antwerp’s beasts on a gable. The catalogue thinks this a brewery or an inn called The Half Moon — De Halve Maan, they say, are the words on the sign. Thought to be. The question mark stays.",
      source:
        "Rijksmuseum catalogue entry: thought to be a brewery or an inn called The Half Moon.",
    },
    {
      id: "kolf",
      n: 5,
      x: 0.46,
      y: 0.8,
      title: "Kolf",
      body: "A club on the ice. The Dutch description lists kolfspelers among the figures. The catalogue adds: the forerunner of golf. The stroke is the fact. The genealogy is theirs.",
      source: "Rijksmuseum Dutch description: kolfspelers.",
    },
    {
      id: "ice",
      n: 6,
      x: 0.62,
      y: 0.4,
      title: "High vantage",
      body: "The wall text’s first fact: the high vantage turns the panel into a sampler. Ice recedes until colour almost gives up. The catalogue names aerial perspective — almost white tints merging with the sky. Look here before the anecdotes.",
      source: "Rijksmuseum wall text; 2007 catalogue on aerial perspective.",
    },
    {
      id: "sleigh",
      n: 7,
      x: 0.7,
      y: 0.72,
      title: "Sleigh, at right",
      body: "The Dutch description places an arrenslede at the right. Red body, a horse, a few passengers. A vehicle on ice, not a pageant I will invent.",
      source: "Rijksmuseum Dutch description: Rechts een arrenslede.",
    },
    {
      id: "signature",
      n: 8,
      x: 0.9,
      y: 0.73,
      title: "HAenricus / Av",
      body: "On the wall of a wooden shed, at the right, among graffiti. H and A ligated: HAenricus / Av. The museum transcribes it. The name is paint on boards, not a caption under the sky.",
      source:
        "Rijksmuseum inscriptions: signature, on the right, on the wall of a wooden shed with graffiti (H and A ligated): ‘HAenricus / Av’.",
    },
    {
      id: "trees",
      n: 9,
      x: 0.07,
      y: 0.28,
      title: "Stage flats",
      body: "Bare trees left and right. The catalogue calls them stage flats: they draw the eye in. Flemish habit, they say — Bol, Vinckboons — in an early Dutch winter. The branches are how the picture begins, not decoration.",
      source:
        "Rijksmuseum catalogue: tall trees in the left and right foreground act like stage flats.",
    },
    {
      id: "necessity",
      n: 10,
      x: 0.32,
      y: 0.68,
      title: "Work on the ice",
      body: "A net, a hole, a man bent to it. The wall text splits the crowd: most out for pleasure, others working out of dire necessity. I am pointing at work. I will not count the hundreds.",
      source:
        "Rijksmuseum wall text: most of them for pleasure, others working out of dire necessity.",
    },
  ],
  explainer: [
    "This is not a Delft interior and not a bouquet on marble. A high vantage, a frozen river that has burst its banks, a village used as wings. The wall text wants you to take it as a sampler of a harsh winter: hundreds of people, pleasure and necessity, and a horse already dead in the left foreground. Look at the ice before you hunt the jokes.",
    "The museum’s Dutch description is almost a list: skaters, kolf players, walkers; a sleigh at the right; a church at the left. That is enough. The 2007 catalogue adds an inn that is only thought to be The Half Moon, a bird trap borrowed from Brueghel, and speculation — their word — about hidden allusions to the fragility of life. The speculation stays speculation.",
    "Avercamp signs the shed: HAenricus / Av. The catalogue calls this his largest and most ambitious winter, and the first Dutch painter to make winter and its recreations his subject. Those are Filedt Kok’s sentences, 2007. This plate does not enlarge them into a founding myth.",
    "c. 1608 on the label. The oak could have been ready a decade earlier. Purchased with the Vereniging Rembrandt: 1898 in one field, 1897 in the provenance. Former titles remain in the record. None of that is a problem to solve.",
    "A white mountain with a flour mill is named in the catalogue as an unrealistic detail at the right, almost invisible. I have not given it a plate I cannot honestly point to. If you find it, the finding is yours.",
  ],
  sources: [
    {
      label: "Rijksmuseum, SK-A-1718",
      href: "https://www.rijksmuseum.nl/en/collection/object/Winter-Landscape-with-Ice-Skaters--918895dc18da94e357c6763adda8882f",
    },
    {
      label:
        "Rijksmuseum object text (wall text; Dutch description; inscription HAenricus / Av; purchase 1898-01 / provenance 1897; public domain)",
    },
    {
      label:
        "Jan Piet Filedt Kok, in J. Bikker (ed.), Dutch Paintings of the Seventeenth Century in the Rijksmuseum Amsterdam, I, 2007, no. 10",
    },
  ],
  corrections:
    "If a plate is wrong, the error is mine. There is no comments box. A public corrections address will sit here when the site has a desk.",
};

export const winterLandscapeWithIceSkaters: Work = workSchema.parse(draft);
