import { workSchema, type Work } from "@/lib/schema";

const draft = {
  slug: "the-jewish-bride",
  title: "The Jewish Bride",
  titleLocal:
    "Portret van een paar als Isaac en Rebecca, bekend als Het Joodse bruidje",
  maker: {
    name: "Rembrandt van Rijn",
    life: "1606–1669",
    place: "Amsterdam",
    note: "The museum’s title now leads with Isaac and Rebecca. The nickname is older than that reading and slightly wrong: a nineteenth-century collector saw a Jewish father and a bride. The museum’s Dutch description still allows other Old Testament pairs. The faces look like portraits. The clothes do not look like Amsterdam street dress. That collision is the picture’s open question.",
  },
  dateDisplay: "c. 1665–1669",
  dateNote:
    "The Rijksmuseum spans c. 1665 to c. 1669. The painted date is incomplete: Rembrandt f. 16… The gap in the numerals is on the canvas.",
  medium: "Oil on canvas",
  dimensions: "121.5 × 166.5 cm",
  location: "Rijksmuseum, Amsterdam",
  accession: "SK-C-216",
  acquisition:
    "On loan from the City of Amsterdam (A. van der Hoop Bequest)",
  museumUrl:
    "https://www.rijksmuseum.nl/en/collection/object/Isaac-and-Rebecca-Known-as-The-Jewish-Bride--019c1265e6dbf108d4587ab2b7c02c66",
  rights:
    "The painting is in the public domain. Zoom tiles are served by the Rijksmuseum’s IIIF (Micrio). Poster file from the same service.",
  image: {
    iiif: "https://iiif.micr.io/uRWXq/info.json",
    poster: "/works/the-jewish-bride.jpg",
    width: 7620,
    height: 5542,
    alt: "A man in a gold-sleeved garment places his hand on a woman’s breast; she rests her hand on his, both looking down, against a dark ground.",
    credit: "Rijksmuseum, Amsterdam. IIIF identifier uRWXq.",
  },
  caption: "c. 1665–1669 · SK-C-216",
  hotspots: [
    {
      id: "hands",
      n: 1,
      x: 0.5,
      y: 0.52,
      title: "The hands",
      body: "His right hand on her breast; her left hand on his. The museum describes the gesture without decorating it. That is the still point. Everything else is weather around it.",
      source: "Rijksmuseum object description of the pose.",
    },
    {
      id: "gold",
      n: 2,
      x: 0.28,
      y: 0.48,
      title: "Gold, scratched",
      body: "The museum is specific about method: he applies the paint thickly and scratches into it with the butt end of the brush. The sleeve is not a depiction of gold thread so much as gold paint worked until it catches.",
      source:
        "Rijksmuseum object text: paint applied thickly; scratched with the butt end of the paintbrush.",
    },
    {
      id: "red",
      n: 3,
      x: 0.58,
      y: 0.78,
      title: "The red",
      body: "Her skirt is a relief. Stand back and it is colour; come close and it is ridges. The tenderness of the subject is not a reason to paint thinly.",
    },
    {
      id: "faces",
      n: 4,
      x: 0.48,
      y: 0.28,
      title: "They do not look at us",
      body: "Down and a little away. The museum calls the moment tender. I will leave the word. What you can check is that neither face is performing for the viewer.",
      source: "Rijksmuseum object text: a tender moment.",
    },
    {
      id: "isaac",
      n: 5,
      x: 0.36,
      y: 0.26,
      title: "Isaac, on the label",
      body: "The museum tells the Abimelech story: Isaac conceals his love for Rebecca by calling her his sister; intimacy betrays them. That is the reading on the wall. The Dutch object description still says Isaac and Rebecca or other Old Testament figures. The biblical names are a proposal the museum now leads with, not a signature on the canvas.",
      source:
        "Rijksmuseum wall text (Isaac and Rebecca); Dutch description allowing other Old Testament pairs.",
    },
    {
      id: "nickname",
      n: 6,
      x: 0.58,
      y: 0.3,
      title: "A nineteenth-century name",
      body: "Jewish Bride is not Rembrandt’s title. It is a later habit, from a reading of father and daughter that the museum no longer uses. The nickname stays because language is sticky. The plate keeps it in second place.",
    },
    {
      id: "signature",
      n: 7,
      x: 0.12,
      y: 0.9,
      title: "Rembrandt f. 16…",
      body: "Signed and dated, except the date gives up. The museum transcribes Rembrandt f. 16… The missing digits are a fact of the inscription, not a mystery I will solve.",
      source: "Rijksmuseum inscriptions: signature and date Rembrandt f. 16…",
    },
    {
      id: "pearls",
      n: 8,
      x: 0.54,
      y: 0.42,
      title: "Pearls and linen",
      body: "A string at the neck, white at the wrists. Delicate against the crust of the gold. I am not turning jewelry into an emblem. It is how light finds a small hard thing in a thick picture.",
    },
    {
      id: "ground",
      n: 9,
      x: 0.85,
      y: 0.45,
      title: "The dark",
      body: "A wall, perhaps more. The museum’s Dutch text says they stand before a wall. The right edge keeps suggestions and then lets them go. The couple is the picture; the room is withheld.",
      source: "Rijksmuseum Dutch description: standing before a wall.",
    },
    {
      id: "her-right",
      n: 10,
      x: 0.68,
      y: 0.7,
      title: "Her other hand",
      body: "The museum notes her right hand in front of the body. It is not idle. It completes the circuit of the two of them without opening toward us.",
      source: "Rijksmuseum object description.",
    },
  ],
  explainer: [
    "This is the one room that is not Vermeer. The scale changes, and the paint changes. Vermeer subtracts until a pour or a letter can hold a small canvas. Rembrandt builds a crust you could catch a sleeve on.",
    "The museum wants you to know two things at once: the subject they now print (Isaac and Rebecca, the Abimelech story) and the method (thick paint, scratched with the brush’s butt). Look at the method first. The story is a label. The sleeve is on the surface.",
    "Jewish Bride is a sticky wrong name. A collector in the nineteenth century saw a father and a wedding gift. The museum’s present title leads with a biblical couple and still, in Dutch, allows other Old Testament pairs. Faces like portraits, clothes like theatre: that gap is honest. Closing it would be a kind of lying.",
    "Van der Hoop again: the picture is the city’s, on loan since the bequest. Same door as the woman in blue, a different century of paint.",
    "The date on the canvas is broken. Rembrandt f. 16… The museum’s span, c. 1665–1669, is how they live with that. This plate does not invent the missing numbers.",
  ],
  sources: [
    {
      label: "Rijksmuseum, SK-C-216",
      href: "https://www.rijksmuseum.nl/en/collection/object/Isaac-and-Rebecca-Known-as-The-Jewish-Bride--019c1265e6dbf108d4587ab2b7c02c66",
    },
    {
      label:
        "Rijksmuseum object text (Isaac and Rebecca / Abimelech; thick paint; brush butt; inscription Rembrandt f. 16…)",
    },
  ],
  corrections:
    "If a plate is wrong, the error is mine. There is no comments box. A public corrections address will sit here when the site has a desk.",
};

export const jewishBride: Work = workSchema.parse(draft);
