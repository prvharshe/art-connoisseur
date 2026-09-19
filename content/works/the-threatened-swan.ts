import { workSchema, type Work } from "@/lib/schema";

const draft = {
  slug: "the-threatened-swan",
  title: "The Threatened Swan",
  titleLocal: "De bedreigde zwaan",
  maker: {
    name: "Jan Asselijn",
    life: "after 1610–1652",
    place: "Amsterdam",
    note: "The museum’s other title on this object is longer: Interpreted later as an Allegory on Johan de Witt. Asselijn signed JA. He was dead by 1652; de Witt was murdered in 1672. The wall text keeps the scuffle and the later reading as two sentences. So does this plate. Rembrandt’s etching in the same house calls him Krabbetje and a painter of Italianate landscapes. This canvas is a swan.",
  },
  dateDisplay: "c. 1650",
  dateNote:
    "The Rijksmuseum dates the picture c. 1650. The object is not dated on the face. The three labels that turn a bird into de Witt are recorded as later interpretation. The year stays approximate.",
  medium: "Oil on canvas",
  dimensions: "144 × 171 cm",
  location: "Rijksmuseum, Amsterdam",
  accession: "SK-A-4",
  acquisition:
    "Purchased 1800-06-11. The wall text: the very first acquisition to enter the Nationale Kunstgalerij, forerunner of the Rijksmuseum.",
  museumUrl:
    "https://www.rijksmuseum.nl/en/collection/object/The-Threatened-Swan--22040f90565e730131983a44a85b989f",
  rights:
    "The painting is in the public domain. Zoom tiles are served by the Rijksmuseum’s IIIF (Micrio). Poster file from the same service.",
  image: {
    iiif: "https://iiif.micr.io/hZepb/info.json",
    poster: "/works/the-threatened-swan.jpg",
    width: 5892,
    height: 4903,
    alt: "A large white swan stands on a bank with wings spread and beak open; a dog approaches from dark water at left; an egg marked HOLLAND lies in the nest at right.",
    credit: "Rijksmuseum, Amsterdam. IIIF identifier hZepb.",
  },
  caption: "c. 1650 · SK-A-4",
  hotspots: [
    {
      id: "beak",
      n: 1,
      x: 0.49,
      y: 0.34,
      title: "The mouth",
      body: "Open, toward the water. The wall text’s first verb is defends. Up close it is tongue, palate, a few lights on the keratin. I am not adding a cry the museum does not record.",
      source: "Rijksmuseum wall text: a swan fiercely defends its nest.",
    },
    {
      id: "left-wing",
      n: 2,
      x: 0.21,
      y: 0.32,
      title: "The left wing",
      body: "The canvas is almost only this: white, spread, taking the air. Look at the primaries before you hunt the labels. The later allegory needs a monument. The paint had one already.",
    },
    {
      id: "dog",
      n: 3,
      x: 0.14,
      y: 0.86,
      title: "The dog",
      body: "The museum’s Dutch description is brief: tegen een hond. Brown, in the water, half lost in the left dark. A body, not yet an enemy of the state. The inscription sits above it; the animal does not wear the sentence.",
      source: "Rijksmuseum Dutch description: tegen een hond.",
    },
    {
      id: "viand",
      n: 4,
      x: 0.15,
      y: 0.73,
      title: "de viand van de staat",
      body: "Painted above the dog. The museum transcribes de viand van de staat. On the ground it reads closer to DE VIAND VAN DE STAAT. Their spelling, the letters in the bank: both stay. Later reading, their words.",
      source:
        "Rijksmuseum inscriptions: ‘de viand van de staat [boven de hond]’.",
    },
    {
      id: "raadpensionaris",
      n: 5,
      x: 0.5,
      y: 0.8,
      title: "de Raad-Pensionaris",
      body: "Between the feet, under the swan. The museum writes de Raad-Pensionaris. The letters look more like DE RAADT PENSIONARIS. I will not tidy their hyphen against the paint. This is how a bird is named a statesman.",
      source:
        "Rijksmuseum inscriptions: ‘de Raad-Pensionaris [onder de zwaan]’.",
    },
    {
      id: "holland",
      n: 6,
      x: 0.88,
      y: 0.63,
      title: "Holland, on the egg",
      body: "One egg, in the nest at right, lettered HOLLAND. The museum places the word there. A second pale form sits behind it. The Dutch description says eieren, plural. I am pointing at the labeled one.",
      source: "Rijksmuseum inscriptions: ‘Holland [op het ei]’.",
    },
    {
      id: "nest",
      n: 7,
      x: 0.86,
      y: 0.52,
      title: "The nest",
      body: "Dry grass, a bank, not a basket. The museum’s first sentence needs this: nest against a dog. The swan is allowed to be huge because the nest is almost nothing — straw and two eggs at the right edge.",
      source: "Rijksmuseum wall text: defends its nest against a dog.",
    },
    {
      id: "signature",
      n: 8,
      x: 0.92,
      y: 0.82,
      title: "JA",
      body: "Low at the right, in the grass. The museum records a signature: JA. Looking, the A is the fact; the J is fainter. If I have missed a ligature, the error is mine. The name is paint in a corner, not a caption under the sky.",
      source: "Rijksmuseum inscriptions: signature: ‘JA’.",
    },
    {
      id: "body",
      n: 9,
      x: 0.58,
      y: 0.48,
      title: "The white",
      body: "The wall text: the white swan was thought to symbolize Johan de Witt. Thought to. Wit, white: a pun later centuries wanted. I am pointing at plumage. The thought stays their thought.",
      source:
        "Rijksmuseum wall text: the white swan was thought to symbolize the Dutch statesman Johan de Witt.",
    },
    {
      id: "right-wing",
      n: 10,
      x: 0.86,
      y: 0.12,
      title: "The right wing",
      body: "A second spread, into the ochre sky. Reeds behind. The museum does not name a weather. The bird takes both upper corners; the dog is given a puddle. That is the composition, before anyone wrote on the bank.",
    },
  ],
  explainer: [
    "This is not a Delft interior and not a mill on a river. A swan, a nest, a dog in the left water. The wall text starts there and only then allows the later centuries: a political allegory, the white bird thought to be Johan de Witt, assassinated 1672, protecting the country from its enemies. Thought to. The object’s other title prints the hedge: Interpreted later.",
    "Look at the bird before the letters. Wings, an open mouth, a body that fills a canvas a hundred and forty-four centimetres high. The inscriptions sit where furniture would sit — under the feet, above the dog, on an egg. They are how a scuffle was made to mean a republic. They are not how the paint begins.",
    "The museum transcribes three phrases and a signature. de Raad-Pensionaris under the swan; Holland on the egg; de viand van de staat above the dog; JA at the right. Looking argues with their spelling in two places. The argument stays on the plate. Júlia Tátrai, writing for CODART, says technical analysis puts the three inscriptions after Asselijn’s death. I have not handled those plates. If that dating is wrong, the error is theirs and then mine for repeating it.",
    "c. 1650 on the label. Asselijn after 1610–1652: the museum’s own related monograph is titled that way. Dieppe is a birthplace other desks print; this object does not. Purchased 11 June 1800, first picture into the Nationale Kunstgalerij. Those are their sentences. Gallery of Honour now. None of that is a problem to solve.",
    "I am not hanging England, France, Münster, or the Rampjaar on a feather. The object record lists those subjects because the later allegory does. The paint lists a swan.",
  ],
  sources: [
    {
      label: "Rijksmuseum, SK-A-4",
      href: "https://www.rijksmuseum.nl/en/collection/object/The-Threatened-Swan--22040f90565e730131983a44a85b989f",
    },
    {
      label:
        "Rijksmuseum object text (wall text; Dutch description; titles including Interpreted later as an Allegory on Johan de Witt; inscriptions JA / de Raad-Pensionaris / Holland / de viand van de staat; purchase 1800-06-11; public domain)",
    },
    {
      label:
        "Anne Charlotte Steland-Stief, Jan Asselijn, nach 1610 bis 1652, Amsterdam 1971 (museum-related literature)",
      href: "https://www.rijksmuseum.nl/en/collection/publication/Jan-Asselijn-nach-1610-bis-1652--d24e0327b86d9327e4fa8612a0e9aaa7",
    },
    {
      label:
        "Rembrandt, Jan Asselijn (‘Krabbetje’), c. 1647, RP-P-OB-553 (Italianate landscapes; the nickname is theirs)",
      href: "https://www.rijksmuseum.nl/en/collection/object/Jan-Asselijn-Krabbetje--5941771c4680cd1754f99f3e3e7d58e7",
    },
    {
      label:
        "Júlia Tátrai, “The Threatened Swan,” CODART Canon (inscriptions after Asselijn’s death; I have not seen the technical plates)",
      href: "https://canon.codart.nl/artwork/the-threatened-swan/",
    },
  ],
  corrections:
    "If a plate is wrong, the error is mine. There is no comments box. A public corrections address will sit here when the site has a desk.",
};

export const threatenedSwan: Work = workSchema.parse(draft);
