import { workSchema, type Work } from "@/lib/schema";

const draft = {
  slug: "the-little-street",
  title: "The Little Street",
  titleLocal: "Gezicht op huizen in Delft, bekend als Het straatje",
  maker: {
    name: "Johannes Vermeer",
    life: "1632–1675",
    place: "Delft",
    note: "The museum’s official title is View of Houses in Delft, known as The Little Street. A portrait of ordinary houses, they say, unusual in his work and unusual for the time. The English short title is a habit.",
  },
  dateDisplay: "c. 1658",
  dateNote:
    "The Rijksmuseum still dates the picture c. 1658. Frans Grijzenhout’s 2015 address research led him to prefer a later span; I have not seen the museum move its label. Both stay on the plate.",
  medium: "Oil on canvas",
  dimensions: "54.3 × 44 cm",
  location: "Rijksmuseum, Amsterdam",
  accession: "SK-A-2860",
  acquisition: "Gift of Henry W.A. Deterding, 1921",
  museumUrl:
    "https://www.rijksmuseum.nl/en/collection/object/View-of-Houses-in-Delft-Known-as-The-Little-Street--a7dbf937cbd6f7c30f66f8aca4a0207c",
  rights:
    "The painting is in the public domain. Zoom tiles are served by the Rijksmuseum’s IIIF (Micrio). Poster file from the same service.",
  image: {
    iiif: "https://iiif.micr.io/VWEov/info.json",
    poster: "/works/the-little-street.jpg",
    width: 5190,
    height: 6344,
    alt: "A Delft street of brick houses under a cloudy sky, with a woman sewing in a doorway, two children on the stoep, and another woman at a tub in the alley.",
    credit: "Rijksmuseum, Amsterdam. IIIF identifier VWEov.",
  },
  caption: "c. 1658 · SK-A-2860",
  hotspots: [
    {
      id: "brick",
      n: 1,
      x: 0.65,
      y: 0.35,
      title: "Brick and mortar",
      body: "The museum says the old walls — brick, whitewash, cracks — are almost tangible. Up close the masonry is not a pattern. It is repair, stain, and the width of a joint.",
      source: "Rijksmuseum object text: old walls with bricks, whitewash, and cracks.",
    },
    {
      id: "whitewash",
      n: 2,
      x: 0.62,
      y: 0.68,
      title: "Whitewash",
      body: "The lower walls are coated and worn. White here is not purity. It is lime that has been rained on and touched.",
    },
    {
      id: "sewing",
      n: 3,
      x: 0.78,
      y: 0.6,
      title: "Woman in the doorway",
      body: "Seated, capped, sewing, framed by the dark room and a red shutter folded back. A figure at the scale of a house, not a portrait that ate the architecture.",
    },
    {
      id: "children",
      n: 4,
      x: 0.58,
      y: 0.78,
      title: "Two on the stoep",
      body: "Crouched with their backs to us. I will not name the game. They are how you know the street is used, and how small the people are against the stepped gable.",
    },
    {
      id: "alley",
      n: 5,
      x: 0.36,
      y: 0.58,
      title: "The alley",
      body: "A gate, a passage, another woman bent to a tub. The street is not a façade only. It has a depth you can look into without entering.",
    },
    {
      id: "address",
      n: 6,
      x: 0.7,
      y: 0.5,
      title: "Vlamingstraat 40–42",
      body: "The museum now states the location as Vlamingstraat 40–42 in Delft. That identification is Grijzenhout’s, from the 1667 quay-dues ledger, and the museum accepts it. The houses there now are later. You are looking at a site, not the same bricks.",
      source:
        "Rijksmuseum object text; Frans Grijzenhout, 2015, accepted by the museum.",
    },
    {
      id: "aunt",
      n: 7,
      x: 0.8,
      y: 0.48,
      title: "The house at right",
      body: "The museum says Vermeer’s aunt Ariaentgen Claes lived in the house at the right, with her children, from around 1645 until her death in 1670. That is their sentence. I am not turning it into a family anecdote.",
      source: "Rijksmuseum object text.",
    },
    {
      id: "sky",
      n: 8,
      x: 0.45,
      y: 0.1,
      title: "The weather",
      body: "A large, ordinary sky. No drama of cloud for its own sake. The houses need a lid, and this is it.",
    },
    {
      id: "gutter",
      n: 9,
      x: 0.22,
      y: 0.88,
      title: "The gutter",
      body: "A run of water toward the lower left. Street fact. Once you have seen it, the foreground stops being a stage floor and becomes paving that drains.",
    },
    {
      id: "composition",
      n: 10,
      x: 0.42,
      y: 0.4,
      title: "The cut of the view",
      body: "The museum calls the composition as exciting as it is balanced. What that means in looking: the alley splits the houses; the right gable is allowed to be huge; the left is a fragment. A street portrait, not a town view.",
      source: "Rijksmuseum object text.",
    },
  ],
  explainer: [
    "The official title is the honest one: a view of houses in Delft. The nickname is shorter and slightly cute. Vermeer is looking at masonry the way, in other rooms, he looks at plaster — as a surface that has been lived with.",
    "People are small on purpose. A woman sews, children crouch, another woman works in the alley. They keep the houses from becoming a still life of brick. They do not become a narrative I will invent.",
    "The museum now prints an address: Vlamingstraat 40–42. That is Grijzenhout’s 2015 reading of Delft’s 1667 dredging ledger, which the museum accepts. The standing houses on that plot are later. Close looking includes knowing when you are looking at a site rather than a surviving wall.",
    "Ariaentgen Claes, the painter’s aunt, in the house at the right: that is the museum’s own sentence, with dates. I am not adding a trade, a smell, or a childhood memory the object text does not give.",
    "The museum dates the picture c. 1658. Grijzenhout, once the address was fixed, preferred a later span. The label in the gallery has not, as far as this plate knows, followed him. The disagreement stays visible.",
  ],
  sources: [
    {
      label: "Rijksmuseum, SK-A-2860",
      href: "https://www.rijksmuseum.nl/en/collection/object/View-of-Houses-in-Delft-Known-as-The-Little-Street--a7dbf937cbd6f7c30f66f8aca4a0207c",
    },
    {
      label:
        "Frans Grijzenhout, identification of Vlamingstraat 40–42, 2015 (accepted in the museum’s object text)",
    },
  ],
  corrections:
    "If a plate is wrong, the error is mine. There is no comments box. A public corrections address will sit here when the site has a desk.",
};

export const littleStreet: Work = workSchema.parse(draft);
