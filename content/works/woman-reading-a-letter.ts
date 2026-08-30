import { workSchema, type Work } from "@/lib/schema";

const draft = {
  slug: "woman-reading-a-letter",
  title: "Woman Reading a Letter",
  titleLocal: "Brieflezende vrouw",
  maker: {
    name: "Johannes Vermeer",
    life: "1632–1675",
    place: "Delft",
    note: "The museum calls the garment a night jacket. The English nickname Woman in Blue is a habit, not a second picture. Early ownership is marked with question marks in the Rijksmuseum record; this plate does not tidy them.",
  },
  dateDisplay: "c. 1663",
  dateNote:
    "The Rijksmuseum dates the picture c. 1663. Other catalogues spread a few years around that. The museum’s date stays on the plate.",
  medium: "Oil on canvas",
  dimensions: "46.5 × 39 cm",
  location: "Rijksmuseum, Amsterdam",
  accession: "SK-C-251",
  acquisition:
    "On loan from the City of Amsterdam (A. van der Hoop Bequest)",
  museumUrl:
    "https://www.rijksmuseum.nl/en/collection/object/Woman-Reading-a-Letter--8e9e02c8045362ffb2171b2fb52953ba",
  rights:
    "The painting is in the public domain. Zoom tiles are served by the Rijksmuseum’s IIIF (Micrio). Poster file from the same service.",
  image: {
    iiif: "https://iiif.micr.io/aehHx/info.json",
    poster: "/works/woman-reading-a-letter.jpg",
    width: 5456,
    height: 6517,
    alt: "A woman in a blue jacket stands in profile in a quiet room, reading a letter by morning light, with a wall map behind her and chairs at either side.",
    credit: "Rijksmuseum, Amsterdam. IIIF identifier aehHx.",
  },
  caption: "c. 1663 · SK-C-251",
  hotspots: [
    {
      id: "letter",
      n: 1,
      x: 0.41,
      y: 0.46,
      title: "The letter",
      body: "She is still, and the paper is small. The museum’s wall text starts here: a private moment in morning light. I am not naming a correspondent. The picture does not.",
      source: "Rijksmuseum object text: absorbed in reading a letter in the morning light.",
    },
    {
      id: "jacket",
      n: 2,
      x: 0.5,
      y: 0.42,
      title: "Night jacket",
      body: "The museum’s phrase is night jacket, not costume. All the other colours give way to this blue. They call it radiant lapis lazuli. That is a fact of the palette they publish, not a metaphor I am adding.",
      source: "Rijksmuseum object text: blue night jacket; radiant lapis lazuli blue.",
    },
    {
      id: "skin",
      n: 3,
      x: 0.4,
      y: 0.28,
      title: "Pale grey flesh",
      body: "The museum flags this as the unusual move: skin recorded in pale grey. Look at the forehead and the hands before you decide what the face is doing. The light is doing most of the work.",
      source: "Rijksmuseum object text: the woman’s skin with pale grey.",
    },
    {
      id: "wall",
      n: 4,
      x: 0.86,
      y: 0.5,
      title: "Blue on the wall",
      body: "The plaster is not a blank. Shadows are mixed with light blue. Once you have seen that, the right side of the room stops being empty and becomes weather.",
      source: "Rijksmuseum object text: shadows on the wall using light blue.",
    },
    {
      id: "map",
      n: 5,
      x: 0.58,
      y: 0.22,
      title: "Map on rolls",
      body: "A wall map hangs on rods behind her. The museum’s object description stops there. Writers have named the sheet. I will not. A map is in the room; the place-name is not a fact I will assert from looking.",
      source: "Rijksmuseum object description: a landkaart on rolls, unnamed.",
    },
    {
      id: "table",
      n: 6,
      x: 0.14,
      y: 0.68,
      title: "Table at left",
      body: "A dark cloth, a chair, a box, another paper. The room has furniture the way a room has furniture. The action is the letter; this is the delay before it.",
    },
    {
      id: "chair",
      n: 7,
      x: 0.78,
      y: 0.82,
      title: "Chair at right",
      body: "Pushed in at an angle, studs catching. It keeps the foreground from becoming a stage. You look past it to her hands.",
    },
    {
      id: "light",
      n: 8,
      x: 0.1,
      y: 0.2,
      title: "Morning, offstage",
      body: "The window is not in the picture. The museum still calls the light morning. Cool, from the left, as so often in his rooms. What you see is the fall of it, not the glass.",
      source: "Rijksmuseum object text: morning light.",
    },
    {
      id: "jacket-volume",
      n: 9,
      x: 0.55,
      y: 0.52,
      title: "The bulk of the cloth",
      body: "The jacket is thick and tied. Writers sometimes turn that volume into a pregnancy. The Rijksmuseum’s object text does not. Fashion can be ample. I am not hanging a story on a silhouette.",
      source: "Rijksmuseum object text names a night jacket, not a condition.",
    },
    {
      id: "restoration",
      n: 10,
      x: 0.48,
      y: 0.38,
      title: "After cleaning",
      body: "The museum’s bibliography includes a book on the restoration of this picture. I have not compared the plates before and after. If the blue looks newly loud, that may be varnish lifted, or it may be the room you are in. I will not pretend to know which.",
      source: "Rijksmuseum related publication: The restoration of Woman in Blue Reading a Letter by Johannes Vermeer.",
    },
  ],
  explainer: [
    "Look at the blue before you decide what she is thinking. The museum is blunt about the hierarchy: every other colour is secondary to the lapis of the jacket. The letter is the event; the jacket is the fact of paint.",
    "Then look at the wall. Pale grey skin, light-blue shadow — the museum names both as the unusual recording of light. The map hangs because a Delft room of this kind had maps. Naming the cartography is a separate literature. It is not on this plate.",
    "The English nickname Woman in Blue is useful and slightly wrong. The museum’s title is Woman Reading a Letter. The garment is a night jacket in their English. Those are the words that stay.",
    "Adriaan van der Hoop bought the picture in the nineteenth century; it came to the city with his bequest and has hung in the Rijksmuseum on loan since 1885. Earlier owners in the museum’s own trail carry question marks. This plate leaves them marked.",
    "A silhouette is not a diagnosis. Close looking includes refusing a story the paint does not tell.",
  ],
  sources: [
    {
      label: "Rijksmuseum, SK-C-251",
      href: "https://www.rijksmuseum.nl/en/collection/object/Woman-Reading-a-Letter--8e9e02c8045362ffb2171b2fb52953ba",
    },
    {
      label:
        "Rijksmuseum object text (morning light; night jacket; lapis; pale grey skin; light-blue shadows)",
    },
    {
      label:
        "Rijksmuseum related publication: The restoration of Woman in Blue Reading a Letter by Johannes Vermeer",
    },
  ],
  corrections:
    "If a plate is wrong, the error is mine. There is no comments box. A public corrections address will sit here when the site has a desk.",
};

export const womanReadingALetter: Work = workSchema.parse(draft);
