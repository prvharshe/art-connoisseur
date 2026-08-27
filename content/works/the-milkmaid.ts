import { workSchema, type Work } from "@/lib/schema";

const draft = {
  slug: "the-milkmaid",
  title: "The Milkmaid",
  titleLocal: "Het melkmeisje",
  maker: {
    name: "Johannes Vermeer",
    life: "1632–1675",
    place: "Delft",
    note: "A kitchen maid, not a dairymaid — the English title is a habit. Vermeer was looking at Leiden fine painters and then taking things away. The probable first owner is Pieter van Ruijven; the museum marks that trail with question marks, and so does this plate.",
  },
  dateDisplay: "c. 1658–1660",
  dateNote:
    "The Rijksmuseum dates the picture c. 1660. The Metropolitan Museum’s 2009 essay prefers c. 1657–58. Both stay on the plate.",
  medium: "Oil on canvas",
  dimensions: "45.5 × 41 cm",
  location: "Rijksmuseum, Amsterdam",
  accession: "SK-A-2344",
  acquisition: "Purchased 1908, with the support of the Vereniging Rembrandt",
  museumUrl:
    "https://www.rijksmuseum.nl/en/collection/object/The-Milkmaid--42dd0e658c2979aec8e144d2357c55c0",
  rights:
    "The painting is in the public domain. Zoom tiles are served by the Rijksmuseum’s IIIF (Micrio). Poster file from the same service.",
  image: {
    iiif: "https://iiif.micr.io/QkOGy/info.json",
    poster: "/works/the-milkmaid.jpg",
    width: 4649,
    height: 5177,
    alt: "A kitchen maid in a Delft interior pours milk from an earthenware pitcher into a bowl on a cloth-covered table, lit from a leaded window at left.",
    credit: "Rijksmuseum, Amsterdam. IIIF identifier QkOGy.",
  },
  caption: "Plate 1 · c. 1660 · SK-A-2344",
  hotspots: [
    {
      id: "milk",
      n: 1,
      x: 0.43,
      y: 0.56,
      title: "The stream",
      body: "The pour is the still point of the room. Up close it is not a ribbon of liquid so much as a few lights, stacked, against the dark bowl. Vermeer is painting how milk looks in this window, not how milk behaves.",
      source: "Looking; cf. Gowing on Vermeer’s lights as facts of paint.",
    },
    {
      id: "bread",
      n: 2,
      x: 0.54,
      y: 0.7,
      title: "Broken bread",
      body: "The crust is built from small lights — pointillés — that catch before the form does. This is looking at paint as much as at breakfast. The scatter on the cloth is composition, not mess.",
      source: "A habit of description since Gowing and Wheelock; the dots are on the surface.",
    },
    {
      id: "nail",
      n: 3,
      x: 0.74,
      y: 0.2,
      title: "Nail in the wall",
      body: "A hole, a stain, a shadow. The plaster is allowed to be a wall that has been lived with. The empty field to the right of her cap is not blank; it is measured by this mark.",
    },
    {
      id: "window",
      n: 4,
      x: 0.09,
      y: 0.3,
      title: "Leaded window",
      body: "The room’s only weather. One pane is broken; the leading is not a grid for its own sake. Cool light comes from the left, as it so often does in his interiors, and dies on the wall behind her.",
    },
    {
      id: "tiles",
      n: 5,
      x: 0.72,
      y: 0.86,
      title: "Skirting tiles",
      body: "Delftware at ankle height. Writers sometimes name a Cupid on one tile and then hang a love story on it. The Rijksmuseum’s own object text does not. A figure is there; the name is not a fact I will assert.",
      source: "Rijksmuseum object description: tiles and a foot stove, without the Cupid.",
    },
    {
      id: "stove",
      n: 6,
      x: 0.58,
      y: 0.91,
      title: "Foot stove",
      body: "A stoof: a box of coals under the skirts. Kitchen fact, not emblem. It sits on the floor the way furniture sits — a little too present, a little in the way.",
    },
    {
      id: "copper",
      n: 7,
      x: 0.16,
      y: 0.22,
      title: "Copper basin",
      body: "Hung on the left wall with the wicker basket. It returns the window as a dull gold. A hanging object is how he keeps the left edge from becoming only glass.",
    },
    {
      id: "apron",
      n: 8,
      x: 0.4,
      y: 0.5,
      title: "Blue apron",
      body: "Natural ultramarine, ground lapis, on a servant’s cloth. That is a fact of the palette and of money. I am not adding dignity as a metaphor; the pigment was expensive, and he put it here.",
      source: "Vermeer’s use of ultramarine is well documented in technical literature; I have not re-run the samples.",
    },
    {
      id: "vessels",
      n: 9,
      x: 0.4,
      y: 0.62,
      title: "Pitcher and pot",
      body: "Earthenware pours into a dark glazed bowl. Beside them, a blue-and-white jug. The action is ordinary; the grouping is not. Her rolled sleeves and the thickness of the arms belong to work.",
    },
    {
      id: "painted-out",
      n: 10,
      x: 0.64,
      y: 0.32,
      title: "What was here",
      body: "You cannot see this on the surface. MA-XRF imaging published around the Rijksmuseum’s 2023 Vermeer exhibition showed a hanging rack of jugs and a fire basket that he later painted out. I have not handled the technical plates. If the identification is wrong, the error is mine.",
      source: "Rijksmuseum technical research associated with the 2023 Vermeer exhibition.",
    },
  ],
  explainer: [
    "The English title is a slight. She is a kitchen maid, pouring milk for bread, in a room that has been stripped until the pour can hold the whole picture. Vermeer took a Leiden subject — the busy kitchen of Dou and his circle — and subtracted until stillness became the event.",
    "Look at the wall before you look at her face. The plaster is worked: stains, a nail, the slow death of the window’s light. The right side of the canvas is almost empty, which is how the figure becomes monumental in a picture only forty-five centimetres high.",
    "He restricts himself, more or less, to the primaries: the yellow bodice, the blue apron, the red skirt. The ultramarine is not a halo. It is a costly blue on working cloth, and that collision is the picture’s argument, if it has one.",
    "The museum dates the painting c. 1660; other catalogues sit a year or two earlier. Provenance to van Ruijven is marked with caution in the Rijksmuseum record. This plate does not tidy either disagreement.",
    "What was painted out matters because it tells you the calm is made. A rack, a fire basket, a cluttered kitchen — then removed. Close looking includes the things that are no longer there, provided we cite the imaging and do not turn it into a detective story.",
  ],
  sources: [
    {
      label: "Rijksmuseum, SK-A-2344",
      href: "https://www.rijksmuseum.nl/en/collection/object/The-Milkmaid--42dd0e658c2979aec8e144d2357c55c0",
    },
    {
      label:
        "Walter Liedtke, “Johannes Vermeer (1632–1675) and The Milkmaid,” Metropolitan Museum of Art, 2009",
      href: "https://www.metmuseum.org/essays/johannes-vermeer-1632-1675-and-the-milkmaid",
    },
    {
      label:
        "Rijksmuseum technical imaging associated with the 2023 Vermeer exhibition (painted-out rack and fire basket)",
    },
  ],
  corrections:
    "If a plate is wrong, the error is mine. There is no comments box. A public corrections address will sit here when the site has a desk.",
};

export const milkmaid: Work = workSchema.parse(draft);
