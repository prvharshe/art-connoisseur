import { workSchema, type Work } from "@/lib/schema";

const draft = {
  slug: "the-sick-child",
  title: "The Sick Child",
  titleLocal: "Het zieke kind",
  maker: {
    name: "Gabriël Metsu",
    life: "1629–1667",
    place: "Leiden / Amsterdam",
    note: "The wall captions in this house print 1629–1667. The person record is narrower: born 1629-01, Leiden; died in a span that ends 24 October 1667. Mentioned on object. The Dutch masters page: his best-known painting is this one; colourful scenes; Isabella, his wife, a model in other rooms here. This plate does not put her face on this mother. Roelofs’s title in the object literature: a virtuoso Leiden painter in seventeenth-century Amsterdam. Leiden is the birthplace they record. Amsterdam is the plague sentence on the wall.",
  },
  dateDisplay: "c. 1664–1666",
  dateNote:
    "The Rijksmuseum dates the picture c. 1664–c. 1666. Both ends approximate. The object is signed, not dated. The object literature records a dating discussion: Collins Baker, 1925, in the ’60s; a note on possible 1656. Their label stays.",
  medium: "Oil on canvas",
  dimensions: "32.2 × 27.2 cm",
  location: "Rijksmuseum, Amsterdam",
  accession: "SK-A-3059",
  acquisition:
    "Purchased 10 May 1928, with the support of the Vereniging Rembrandt. The object record prints purchase 1928-05-10 and that credit line. Provenance and Remarks are empty fields.",
  museumUrl:
    "https://www.rijksmuseum.nl/en/collection/object/The-Sick-Child--67c2d3403b3d016bcf2a31c80d14af94",
  rights:
    "The painting is in the public domain. Zoom tiles are served by the Rijksmuseum’s IIIF (Micrio). Poster file from the same service.",
  image: {
    iiif: "https://iiif.micr.io/zdALf/info.json",
    poster: "/works/the-sick-child.jpg",
    width: 4443,
    height: 5479,
    alt: "A mother in a dark jacket and blue skirt holds a pale child in a yellow shirt across her lap; a pot with a spoon sits at left, clothes on a chair at right, a map and a small crucifixion on the wall.",
    credit: "Rijksmuseum, Amsterdam. IIIF identifier zdALf.",
  },
  caption: "c. 1664–1666 · SK-A-3059",
  hotspots: [
    {
      id: "face",
      n: 1,
      x: 0.6,
      y: 0.47,
      title: "Ashen",
      body: "The masterpieces note: the child’s face is ashen. Up close it is grey-pink, a mouth, two lights. The same note asks whether this child had the plague. Asks. I am pointing at a complexion.",
      source:
        "Rijksmuseum, One hundred masterpieces: The child’s face is ashen. An ashen face. Did this child have the plague?",
    },
    {
      id: "pieta",
      n: 2,
      x: 0.52,
      y: 0.62,
      title: "On her lap",
      body: "The wall text: their posture evokes a pieta — the Virgin Mary with the body of Jesus on her lap. Evokes. The Dutch wall: doet denken. A child across a skirt is looking. The name of the pose is theirs.",
      source:
        "Rijksmuseum wall text: Their posture evokes a pieta: the Virgin Mary with the body of Jesus on her lap. Dutch wall: Hun houding doet denken aan een piëta.",
    },
    {
      id: "mother",
      n: 3,
      x: 0.375,
      y: 0.375,
      title: "The look down",
      body: "The wall text’s verb is comforting. Down, not out. A black cap, a white collar, an earring. I am not adding a name the object does not print on this face.",
      source: "Rijksmuseum wall text: a mother comforting her sick child.",
    },
    {
      id: "pot",
      n: 4,
      x: 0.085,
      y: 0.735,
      title: "Pot met een lepel",
      body: "The Dutch description: left, on a small table, a pot with a spoon. Earthenware, a stem, a dark ledge. I am not hanging a dose they did not write.",
      source:
        "Rijksmuseum Dutch description: Links op een tafeltje staat een pot met een lepel.",
    },
    {
      id: "chair",
      n: 5,
      x: 0.88,
      y: 0.66,
      title: "Kleren en een muts",
      body: "The Dutch description: right, clothes and a cap lie on a chair. A white bundle, a green cloth over the back, the post of the chair. Discarded is my word. Theirs is liggen.",
      source:
        "Rijksmuseum Dutch description: rechts liggen kleren en een muts op een stoel.",
    },
    {
      id: "map",
      n: 6,
      x: 0.28,
      y: 0.14,
      title: "Landkaart op rollen",
      body: "The Dutch description: on the wall, a map on rolls. A pale sheet, a rod, almost empty. The English wall does not name it. I am pointing at paper they named.",
      source:
        "Rijksmuseum Dutch description: Aan de muur hangen een landkaart op rollen en een schilderij met een kruisiging.",
    },
    {
      id: "crucifixion",
      n: 7,
      x: 0.82,
      y: 0.085,
      title: "A crucifixion",
      body: "A small dark picture, upper right. The wall text: Christ on the cross, a poignant reminder of that suffering. The Dutch description: een schilderij met een kruisiging. The subject field: crucified Christ, with particular persons under the cross. Snoep-Reitsma, in a note this house files: the scene must mean through Christ’s death we are brought to life. Must. Their sentence. I am pointing at a dark rectangle.",
      source:
        "Rijksmuseum wall text: The painting on the wall, depicting Christ on the cross. Dutch description: een schilderij met een kruisiging. E. Snoep-Reitsma, 1973, as filed on the object: schilderij met kruisigingscène moet betekenen: door Christus’ dood worden wij tot leven gebracht.",
    },
    {
      id: "signature",
      n: 8,
      x: 0.135,
      y: 0.095,
      title: "G. Metsu",
      body: "On the map, upper left. The museum transcribes G. Metsu. Dutch: linksboven op de kaart. English inscriptions omit the place. Looking: a G that can read as a hook, then Metsu. The name is paint on paper they called a map.",
      source:
        "Rijksmuseum inscriptions: signature: ‘G. Metsu’. Dutch: signatuur, linksboven op de kaart: ‘G. Metsu’.",
    },
    {
      id: "yellow",
      n: 9,
      x: 0.58,
      y: 0.55,
      title: "Yellow, then the rest",
      body: "The Dutch masters note: the palette in his Sick Child is enlivened by expressive red, blue and yellow accents. Yellow on the shirt. Blue on her skirt. Red at the right, under the chair. Their three colours. I am pointing at the middle one.",
      source:
        "Rijksmuseum, Dutch masters: The palette in his Sick Child is enlivened by expressive red, blue and yellow accents.",
    },
    {
      id: "slump",
      n: 10,
      x: 0.36,
      y: 0.78,
      title: "Listless",
      body: "Bare legs, a foot, the weight of a body that is not sitting up. The Dutch masters note: a listless child slumped in its mother’s lap. Lusteloos, onderuitgezakt. The description only says a child on her lap. I am pointing at the slump they named.",
      source:
        "Rijksmuseum, Dutch masters: a listless child slumped in its mother’s lap. Dutch: een lusteloos onderuitgezakt kindje.",
    },
  ],
  explainer: [
    "This is not a Delft kitchen and not a mill on a river. A lap, a pale child, a pot, a chair, two things on a wall. The wall text starts with 1663: the plague ravaged Amsterdam, one in ten lives. Around this time, they write, Metsu painted a mother comforting her sick child. Around this time. Look at the face before you settle the epidemic.",
    "The titles in this house agree more than most: The Sick Child; Het zieke kind. The Dutch description keeps a mother and a child. The subject field genders the group: mother and son(s). Son is not a word on the wall. I am not choosing a sex the description refused.",
    "The Pietà is their comparison, not a second subject. Evokes, doet denken. The crucifixion is on the wall as a reminder of that suffering, they write. Snoep-Reitsma’s must — through Christ’s death we are brought to life — sits in the object literature. Hedquist’s title in the same list, Dutch Genre Painting as Religious Art, is a title I have not opened. The masterpieces note is plainer and less sure: this sick child probably has the plague; an ashen face; did this child have the plague? Probably. A question. The wall never names the disease on the child. Both stay.",
    "The Dutch description is almost a list: a pot with a spoon; clothes and a cap on a chair; a map on rolls; a crucifixion. The English wall names none of those tools. It names a plague year, a comfort, a Pietà. The Dutch masters page adds colour — red, blue, yellow — and a slump. Collins Baker, 1925, filed here, lets Metsu possibly influence de Hooch and argues a date in the ’60s against a 1656. Possibly. Waiboer’s 2010 catalog sits on the same shelf; I have not turned those pages. I am pointing at a pot because they named one.",
    "c. 1664–c. 1666 on the label. Oil on canvas, support 32.2 × 27.2 cm; the frame they measure is 56 × 56 × 6.6 cm. Signed G. Metsu, upper left on the map; not dated. Purchased 10 May 1928 with the Vereniging Rembrandt. Provenance and Remarks are empty fields on the current object page. Public domain. A grey face, then a year they will not pin to the child.",
  ],
  sources: [
    {
      label: "Rijksmuseum, SK-A-3059",
      href: "https://www.rijksmuseum.nl/en/collection/object/The-Sick-Child--67c2d3403b3d016bcf2a31c80d14af94",
    },
    {
      label:
        "Rijksmuseum object text (wall text: 1663 plague, one in ten, around this time, mother comforting, Pietà, crucifixion as reminder; title The Sick Child; dating c. 1664–c. 1666; oil on canvas, support 32.2 × 27.2 cm, frame 56 × 56 × 6.6 cm; signature ‘G. Metsu’; purchase 1928-05-10; credit line Purchased with the support of the Vereniging Rembrandt; Provenance and Remarks left empty; public domain; subject mother and son(s); Dutch description: pot, clothes, cap, map, crucifixion)",
    },
    {
      label: "Persistent URL, SK-A-3059",
      href: "https://id.rijksmuseum.nl/200109480",
    },
    {
      label:
        "Rijksmuseum, Dutch object page (title Het zieke kind; wall text: pest 1663, een op de tien, piëta; signatuur, linksboven op de kaart: ‘G. Metsu’)",
      href: "https://www.rijksmuseum.nl/nl/collectie/object/Het-zieke-kind--67c2d3403b3d016bcf2a31c80d14af94",
    },
    {
      label:
        "Rijksmuseum person record, Gabriël Metsu (born 1629-01, Leiden; died 1667–1667-10-24)",
      href: "https://id.rijksmuseum.nl/2102747",
    },
    {
      label:
        "Rijksmuseum, Dutch masters, Gabriël Metsu (best-known painting; listless child slumped; red, blue and yellow accents; Isabella a model in other rooms)",
      href: "https://www.rijksmuseum.nl/en/stories/dutch-masters/story/gabriel-metsu-10",
    },
    {
      label:
        "Rijksmuseum, Nederlandse meesters, Gabriël Metsu (lusteloos onderuitgezakt kindje; sprekende accenten in rood, blauw en geel)",
      href: "https://www.rijksmuseum.nl/nl/stories/nederlandse-meesters/story/gabriel-metsu",
    },
    {
      label:
        "Rijksmuseum, One hundred masterpieces, The Sick Child (probably the plague; ashen face; Did this child have the plague?)",
      href: "https://www.rijksmuseum.nl/en/stories/one-hundred-masterpieces/story/sick-child",
    },
    {
      label:
        "Rijksmuseum, Honderd meesterwerken, Het zieke kind (waarschijnlijk de pest; gezichtje asgrauw)",
      href: "https://www.rijksmuseum.nl/nl/stories/honderd-meesterwerken/story/het-zieke-kind",
    },
    {
      label:
        "Rijksmuseum object literature as filed (C.H. Collins Baker, Pieter de Hooch, 1925, note 7: mogelijk invloed Metsu op de Hooch, discussie datering 1656, Collins Baker dateert in ’60 jaren; E. Snoep-Reitsma, 1973: kruisiging moet betekenen door Christus’ dood worden wij tot leven gebracht; V. Hedquist, Art History 31 (2008): Dutch Genre Painting as Religious Art; Adriaan E. Waiboer, Gabriel Metsu, 2010, p. 41, 173, afb. 34, 136–137; P. Roelofs, Rush on Amsterdam, winter 2010–2011: a virtuoso Leiden painter in seventeenth century Amsterdam)",
    },
  ],
  corrections:
    "If a plate is wrong, the error is mine. There is no comments box. A public corrections address will sit here when the site has a desk.",
};

export const sickChild: Work = workSchema.parse(draft);
