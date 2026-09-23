import { workSchema, type Work } from "@/lib/schema";

const draft = {
  slug: "the-serenade",
  title: "The Serenade",
  titleLocal: "De serenade",
  maker: {
    name: "Judith Leyster",
    life: "1609–1660",
    place: "Haarlem",
    note: "The English wall: the first woman to become a master painter in the Netherlands in the seventeenth century; the title in 1633, Haarlem Guild of St Luke. The Dutch wall: de enige vrouwelijke meesterschilder. The person page in this house hedges: one of the first. Bikker’s 2022 biography: training is not documented; Ampzing praised her in 1628 beside the de Grebbers. The same page lets her ‘likely’ have spent time in Frans Hals’s studio. Likely. Mentioned on object. This plate does not tidy first, only, or the teacher.",
  },
  dateDisplay: "1629",
  dateNote:
    "Signed and dated. The museum transcribes 1629 / J* at upper right, a ligated monogram and star. 1629 on the label is a date on the face, not an approximation. Bikker: this and The Jolly Drinker are her earliest signed and dated pictures.",
  medium: "Oil on panel",
  dimensions: "47 × 34.5 cm",
  location: "Rijksmuseum, Amsterdam",
  accession: "SK-A-2326",
  acquisition:
    "Purchased 1908, with the support of the Vereniging Rembrandt. The object record prints purchase 1908 and the same credit line. Provenance opens with a question mark on a 1668 inventory.",
  museumUrl:
    "https://www.rijksmuseum.nl/en/collection/object/The-Serenade--5b56863e2af8c41e0f4d27c4553ddc8f",
  rights:
    "The painting is in the public domain. Zoom tiles are served by the Rijksmuseum’s IIIF (Micrio). Poster file from the same service.",
  image: {
    iiif: "https://iiif.micr.io/ZppYx/info.json",
    poster: "/works/the-serenade.jpg",
    width: 4545,
    height: 6274,
    alt: "A young man seen from below plays a lute and looks upward with parted lips; a dark feathered beret, a green-and-white striped doublet, and a flash of red at the hem, against a greenish ground.",
    credit: "Rijksmuseum, Amsterdam. IIIF identifier ZppYx.",
  },
  caption: "1629 · SK-A-2326",
  hotspots: [
    {
      id: "eyes",
      n: 1,
      x: 0.5,
      y: 0.255,
      title: "The look",
      body: "Up, and out of the corner. Bikker: di sotto in su, as if the figure sits on a stage above the viewer; gleeful eyes. The Dutch masters note in the same house: we look at him from below, as if we too are looking up at his beloved. As if. I am pointing at a white of an eye.",
      source:
        "Jonathan Bikker, 2022: di sotto in su; the corner of his gleeful eyes. Dutch masters: daring perspective, from below.",
    },
    {
      id: "mouth",
      n: 2,
      x: 0.435,
      y: 0.318,
      title: "Parted lips",
      body: "Teeth, a lower lip, a little light. Bikker: parted — perhaps in song. Perhaps. The wall text’s singing lute player needs this opening. I am not adding a tune the museum does not record.",
      source:
        "Jonathan Bikker, 2022: showing the figure’s lips parted – perhaps in song. Wall text: a singing lute player.",
    },
    {
      id: "beret",
      n: 3,
      x: 0.42,
      y: 0.1,
      title: "Baret met pluimen",
      body: "The Dutch description: on the head, a beret with plumes. Black, a mass of feather, cut by the top edge. Bikker lets the feathered beret take a halo of light. I am pointing at a brim.",
      source: "Rijksmuseum Dutch description: Op het hoofd een baret met pluimen.",
    },
    {
      id: "collar",
      n: 4,
      x: 0.45,
      y: 0.395,
      title: "Collar and cuffs",
      body: "White, a simple fall at the throat; the same white at the wrists. Bikker names lace. Looking finds a band and two cuffs. The technical note: collar, cuffs, and the white highlights were added last. I am pointing at the last paint.",
      source:
        "Jonathan Bikker, 2022: a doublet with slashed sleeves, lace collar and cuffs. Gwen Tauber, 2022: added in the final stage.",
    },
    {
      id: "doublet",
      n: 5,
      x: 0.36,
      y: 0.47,
      title: "Striped doublet",
      body: "Green and white, slashed, contemporary, they write, albeit very fancy. The green is smalt mixed with yellow. The wall text’s colour argument starts here and then drops to the red below. I am not hanging a bravo’s costume the catalog refuses: she departed from Utrecht stripes and from Hals’s fool.",
      source:
        "Jonathan Bikker, 2022: contemporary, albeit very fancy apparel; slashed sleeves. Gwen Tauber, 2022: the green in the striped doublet is a mixture of smalt and yellow.",
    },
    {
      id: "right-hand",
      n: 6,
      x: 0.2,
      y: 0.69,
      title: "The right hand",
      body: "On the belly of the lute. Short strokes, unblended, the catalog’s sketchy execution. Tauber, 2022: changes in the body of the lute on either side of the hand, possibly a placement more to the left, with an extended thumb. Possibly. I have not handled the plates. I am pointing at a thumb as it is.",
      source:
        "Gwen Tauber, 2022: Changes are apparent in the body of the lute on either side of the hand, possibly indicating that the latter was originally placed more to the left with an extended thumb.",
    },
    {
      id: "lute",
      n: 7,
      x: 0.435,
      y: 0.57,
      title: "A lute",
      body: "The Dutch description: a boy playing a lute. The subject field adds the beloved, and then the instrument: lute, and special forms of lute, e.g. theorbo. Looking finds a rose, a teardrop, a bent pegbox. I am not naming a theorbo the face does not.",
      source:
        "Rijksmuseum Dutch description: Een jongen spelend op een luit. Subject: lute, and special forms of lute, e.g.: theorbo.",
    },
    {
      id: "left-hand",
      n: 8,
      x: 0.825,
      y: 0.42,
      title: "On the neck",
      body: "Fingers on the pegbox end. Tauber: the middle, ring, and little fingers of the other hand were probably first planned slightly more to the left. Probably. The catalog’s shorter brushstrokes are here if they are anywhere. I am pointing at three knuckles.",
      source:
        "Gwen Tauber, 2022: The middle, ring and little fingers of the other hand were probably also first planned slightly more to the left.",
    },
    {
      id: "breeches",
      n: 9,
      x: 0.62,
      y: 0.935,
      title: "Red breeches",
      body: "A strip at the hem. The wall text: the bright red of his breeches forms a fine contrast with the greenish background. The condition note in the same house: the rich red glaze in the stripes of the knee britches has faded considerably. Bright, they write. Faded, they write. Both stay.",
      source:
        "Rijksmuseum wall text: The bright red of his breeches. Condition: The rich red glaze used in the stripes of the knee britches has faded considerably.",
    },
    {
      id: "monogram",
      n: 10,
      x: 0.91,
      y: 0.28,
      title: "1629 / J*",
      body: "In the ground, to the right of the hat, above the pegs. The museum transcribes 1629 / J*, ligated monogram and star. Looking: a date, then a J and a star shooting right. Von Bode read a Jan. Hofstede de Groot, 1893, read a lodestar. The name is paint. The recovery is theirs.",
      source:
        "Rijksmuseum inscriptions: signature and date, with ligated monogram and star, upper right: ‘1629 / J*’.",
    },
  ],
  explainer: [
    "This is not a Delft kitchen and not a mill on a river. A boy, half-length, a lute, a look up. The wall text starts with a life — first woman master, Haarlem, 1633, a studio, pupils — and then with paint: light and dark, the red of the breeches against a greenish ground. Look at the mouth before you settle the biography.",
    "The titles in this house do not quite agree. English: The Serenade, and underneath, A Lute Player, known as ‘The Serenade’. Dutch: De serenade; Een luitspeler, bekend als ‘De serenade’. The description drops the song and keeps the boy. The subject field puts the beloved back: serenade to the beloved. Bikker, 2022, writing in this house: given the literary pairing of love and music it is not too far-fetched to assume the smile turns toward the object of his affections. Not too far-fetched. Their assumption. I am pointing at a look.",
    "He was Hals in this house for a long time. Van Winter’s cabinet, as Frans Hals; the Six heirs, as Frans Hals; purchased 1908 still under that name. Von Bode questioned the J and gave the picture to Jan Hals. Hofstede de Groot, 1893, read the star as Leyster — lodestar, the house-name her father took. The Dutch masters note: after her death she fell into obscurity; the monogram on A Lute Player and five other pictures brought her back. The wall’s first woman is a sentence that needs that recovery.",
    "The light is the argument they will not tidy. Bikker: the strong illumination of face, right arm, and shoulder from a hidden source was definitely not derived from Hals. Utrecht used it. Pieter de Grebber, in Haarlem, used it. It cannot be ruled out, he writes, that she took the device from him rather than from an Utrecht model. Cannot be ruled out. The technical note is quieter: an undermodelling left visible as a halo around the head; the figure reserved in light grey; wet in wet; contours adjusted with the final grey-green of the ground. Panel, thinned, transferred to plywood in 1951. Wooden strips already added. Fair condition. None of that is a problem to solve.",
    "1629 on the face. Oil on panel, support 47 × 34.5 cm. Purchased 1908 with the Vereniging Rembrandt. Provenance opens with a question mark: a 1668 Haarlem inventory of Jan Miense Molenaer, in the vestibule, ‘Een luijtslager van sijn huijsvrou’ — a lute player by his wife. Question mark. Ellipsis. Then van Winter, as Hals. Public domain. A star in the ground, then a name.",
  ],
  sources: [
    {
      label: "Rijksmuseum, SK-A-2326",
      href: "https://www.rijksmuseum.nl/en/collection/object/The-Serenade--5b56863e2af8c41e0f4d27c4553ddc8f",
    },
    {
      label:
        "Rijksmuseum object text (wall text; Dutch description; titles The Serenade / A Lute Player, known as ‘The Serenade’ / De serenade / Een luitspeler; subject serenade to the beloved; signature and date ‘1629 / J*’; dating 1629; oil on panel, support 47 × 34.5 cm; purchase 1908; credit line Purchased with the support of the Vereniging Rembrandt; provenance opens ? 1668 Molenaer inventory; public domain; condition: faded red glaze)",
    },
    {
      label: "Persistent URL, SK-A-2326",
      href: "https://id.rijksmuseum.nl/200109431",
    },
    {
      label:
        "Rijksmuseum, Dutch object page (title De serenade; wall text: enige vrouwelijke meesterschilder; signatuur en datum, rechtsboven: ‘1629 / J*’)",
      href: "https://www.rijksmuseum.nl/nl/collectie/object/De-serenade--5b56863e2af8c41e0f4d27c4553ddc8f",
    },
    {
      label:
        "Jonathan Bikker, “Judith Leyster, A Lute Player, known as ‘The Serenade’, 1629,” in J. Bikker (ed.), Dutch Paintings of the Seventeenth Century in the Rijksmuseum, 2022 (Haarlem 1609–Heemstede 1660; training not documented; von Bode as Jan Hals; Hofstede de Groot 1893; di sotto in su; hidden light not from Hals; perhaps de Grebber; parted lips perhaps in song; contemporary fancy apparel; not too far-fetched… object of his affections)",
      href: "https://data.rijksmuseum.nl/200109431",
    },
    {
      label:
        "Gwen Tauber, technical notes, 2022 (panel thinned and transferred to plywood 1951; wooden strips; halo of undermodelling; smalt and yellow in the doublet; changes at the lute and the fingers)",
    },
    {
      label:
        "Rijksmuseum person page, Judith Leyster (1609–1660; one of the first female master painters; teacher unknown; likely some time in Hals’s studio)",
      href: "https://www.rijksmuseum.nl/en/collection/node/Judith-Leyster--6b888886998f333d4310dc396aa02c63",
    },
    {
      label:
        "Rijksmuseum, Dutch masters, Judith Leyster (rediscovery by the monogram on A Lute Player; lodestar; hidden source; daring perspective; we too looking up at his beloved)",
      href: "https://www.rijksmuseum.nl/en/stories/dutch-masters/story/judith-leyster-10",
    },
  ],
  corrections:
    "If a plate is wrong, the error is mine. There is no comments box. A public corrections address will sit here when the site has a desk.",
};

export const serenade: Work = workSchema.parse(draft);
