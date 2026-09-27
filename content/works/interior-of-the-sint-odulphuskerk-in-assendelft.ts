import { workSchema, type Work } from "@/lib/schema";

const draft = {
  slug: "interior-of-the-sint-odulphuskerk-in-assendelft",
  title: "Interior of the Sint-Odulphuskerk in Assendelft",
  titleLocal: "Interieur van de Sint-Odulphuskerk in Assendelft",
  maker: {
    name: "Pieter Jansz. Saenredam",
    life: "1597–1665",
    place: "Assendelft / Haarlem",
    note: "The catalogue biography in this house: Assendelft, 9 June 1597; buried in St Bavo’s, Haarlem, 31 May 1665. Son of the engraver Jan Pietersz Saenredam. The person page: a substantial inheritance after the father’s VOC investments; Haarlem; eleven years with Frans de Grebber. Wuestman, 2007, citing De Bie: 1612 till 1622. Eleven, or ten. The same biography marks a hunchback read from van Campen’s 1628 drawing as speculation without evidence. This plate does not settle the back or the years.",
  },
  dateDisplay: "2 October 1649",
  dateNote:
    "The object dates the picture 1649-10-02. The museum transcribes the pew: painted in the year 1649, the 2nd of October. An overpainted line on the tomb, almost illegible, keeps 1649 volschildert. The masterpieces story prints 1649. Dendrochronology: youngest heartwood 1621; the panel could have been ready by 1632, but a date in or after 1638 is more likely. The painted day is later than the wood.",
  medium: "Oil on panel",
  dimensions: "49.6 × 75 cm",
  location: "Rijksmuseum, Amsterdam",
  accession: "SK-C-217",
  acquisition:
    "On loan from the City of Amsterdam (A. van der Hoop Bequest). The object record prints that credit line. Provenance is not an empty field: Pollmer, 2004, reconstructs a trail from a 1776 sale to van der Hoop in 1848, the city in 1854, and the loan since 30 June 1885.",
  museumUrl:
    "https://www.rijksmuseum.nl/en/collection/object/Interior-of-the-Sint-Odulphuskerk-in-Assendelft--ece748ca3c45cc2167022acebca268ca",
  rights:
    "The painting is in the public domain. Zoom tiles are served by the Rijksmuseum’s IIIF (Micrio). Poster file from the same service.",
  image: {
    iiif: "https://iiif.micr.io/fjTNG/info.json",
    poster: "/works/interior-of-the-sint-odulphuskerk-in-assendelft.jpg",
    width: 6385,
    height: 4157,
    alt: "A pale church interior seen from the choir toward the west: empty pews in the foreground, a small congregation in the nave, a preacher in a pulpit at right, a stone tomb, and a gravestone in the tiled floor.",
    credit: "Rijksmuseum, Amsterdam. IIIF identifier fjTNG.",
  },
  caption: "2 October 1649 · SK-C-217",
  hotspots: [
    {
      id: "pulpit",
      n: 1,
      x: 0.675,
      y: 0.435,
      title: "Vanaf de kansel",
      body: "The wall text: as it happens, a sermon is being preached from the pulpit. Toevallig net. A sounding board, a tiny figure, a book. The Dutch description: rechts de predikant op de preekstoel. I am pointing at a man they named. Schwartz/Bok, filed here, speculate about the preacher’s identity. Speculate.",
      source:
        "Rijksmuseum wall text: a sermon is being preached from the pulpit. Dutch wall: toevallig net vanaf de kansel. Dutch description: Rechts de predikant op de preekstoel. Schwartz/Bok 1990, p. 98, as cited in the 2007 entry: speculation about the preacher’s identity.",
    },
    {
      id: "stone",
      n: 2,
      x: 0.76,
      y: 0.93,
      title: "Iohannis Saenredam",
      body: "The wall text puts the gravestone of his father, Jan Saenredam, in the right foreground, inscription and all. Looking: the letters run the wrong way up unless you stand at the west. The museum transcribes Iohannis Saenredam, sculptoris celeberrimi. The 2007 entry: that stone is the only surviving part of the church, demolished in 1852. I am pointing at a slab they can still name.",
      source:
        "Rijksmuseum wall text; inscriptions: lower right on the tombstone. Wuestman, 2007: the tombstone of the engraver Jan Saenredam; the only surviving part of the church, demolished in 1852.",
    },
    {
      id: "tomb",
      n: 3,
      x: 0.84,
      y: 0.575,
      title: "De TOMBE",
      body: "Along the upper edge, in the paint: dit is de TOMBE ofte begraefplaets vande heeren tot assendelft. The museum’s translation stays theirs. The 2007 entry: on the right, the tomb of the lords of Assendelft. A box of stone, a line of letters. I am not adding a dynasty they did not write.",
      source:
        "Rijksmuseum inscriptions: centre right, along the upper edge of the tomb. Wuestman, 2007: the tomb of the lords of Assendelft.",
    },
    {
      id: "pew",
      n: 4,
      x: 0.11,
      y: 0.68,
      title: "2 October",
      body: "The museum puts the signature and the day on this pew, lower left: dit is de kerck tot Assendelft, een dorp in Hollandt… 1649. den 2. October. Looking at the rail I cannot honestly read the letters. Their transcription stays. If you find the day, the finding is yours.",
      source:
        "Rijksmuseum inscriptions: signature and date, lower left, on the pew in the choir.",
    },
    {
      id: "listeners",
      n: 5,
      x: 0.50,
      y: 0.70,
      title: "Eenige toehoorders",
      body: "A cluster on the floor of the nave; one figure in black sits apart. The Dutch description only says during a service. The 1776 sale, as the object files it, had some listeners. The 2007 entry: the views in St Odulphus’s are the only painted church interiors by Saenredam in which a service is being held. Older catalogues gave the staffage to Adriaen van Ostade. Wuestman: there can be no doubt that Saenredam painted them himself. The Dutch masters page: he was very good at this, as can be seen in the panel with the Odolphuskerk. Odolphus. Their spelling. I am pointing at dark clothes.",
      source:
        "Rijksmuseum Dutch description: tijdens een kerkdienst. Provenance, 1776 sale: voor eenige Toehoorders. Wuestman, 2007: only painted interiors with a service; figures by Saenredam, not van Ostade. Dutch masters: the panel with the Odolphuskerk.",
    },
    {
      id: "door",
      n: 6,
      x: 0.575,
      y: 0.44,
      title: "The same point",
      body: "The wall text: all the orthogonal lines converge at the same point. A pale door, a pointed head, two hanging lines. The Dutch masters page: the construction is determined by his eye level and the exact location where he sat in the church. I am pointing at the door they made the lines meet.",
      source:
        "Rijksmuseum wall text: all the orthogonal lines converge at the same point. Dutch masters: eye level and the exact location where he sat.",
    },
    {
      id: "white",
      n: 7,
      x: 0.18,
      y: 0.30,
      title: "Wit is nooit alleen wit",
      body: "The wall text starts with light: bright, clear; wat een licht en helderheid. The Dutch masters page: white is never just white; the play of light on walls whitewashed after the Reformation. This wall is cream, then cooler, then a stain. I am not hanging a sermon on the lime. Their sentence about Protestant whitewash stays theirs.",
      source:
        "Rijksmuseum wall text: Bright, clear light fills this church. Dutch masters: White is never just white. Nederlandse meesters: Wit is nooit alleen wit.",
    },
    {
      id: "arches",
      n: 8,
      x: 0.22,
      y: 0.155,
      title: "Round-headed",
      body: "Looking: a round arch, not a lancet. The 2007 entry: several authors have noted that he toned down Gothic details from the 1634 study. Vermeulen: the church was largely rebuilt in 1642–44; the change may be the building. Liedtke: more plausible that it is a preference for classicist architecture. More plausible. Both stay. I am pointing at a curve.",
      source:
        "Wuestman, 2007, citing Vermeulen 1920 and Liedtke 1975: lancet arches in the drawing become round-headed in the painting.",
    },
    {
      id: "vault",
      n: 9,
      x: 0.48,
      y: 0.10,
      title: "Bouwkundige details",
      body: "The masterpieces note: just look at his careful rendering of structural details. Ties, a king-post, the pale vault. I am pointing at timber they asked you to look at. I am not naming a carpenter they did not.",
      source:
        "Rijksmuseum, One hundred masterpieces: Just look at his careful rendering of structural details. Dutch: Kijk mee naar zijn aandacht voor bouwkundige details.",
    },
    {
      id: "overpaint",
      n: 10,
      x: 0.86,
      y: 0.66,
      title: "1649 volschildert",
      body: "Along the lower edge of the tomb the museum still reads a broken line: dit is […] kerck Assendelft […] Saenredam 1649 volschildert. The technical note: he overpainted this inscription and replaced it with the one on the pew. Almost identical, they write. You can barely have the letters. The move is theirs to explain; they only say he may have wanted the words more evenly spread.",
      source:
        "Rijksmuseum inscriptions: centre right, along the lower edge of the tombe. Technical notes / Wuestman, 2007: overpainted by the artist and replaced by the inscription on the left.",
    },
  ],
  explainer: [
    "This is not a Delft kitchen and not a mill on a river. A church, named, emptied until a sermon can happen in it. The wall text starts with light and then with a coincidence: as it happens, someone is preaching. Toevallig net. Look at the plaster before you settle the service.",
    "The titles in this house do not quite agree. The object: Sint-Odulphuskerk. The masterpieces story: Sint-Odolphuskerk. Dutch masters, on the figures: Odolphuskerk. One saint, two vowels. The longer English title adds the view: seen from the choir to the west. The Dutch description keeps that axis and adds the preacher, the father’s stone. I am not choosing a spelling the stories refused.",
    "The calm is made. A study in 1634; a construction drawing in 1643, transferred by indentation; the panel dated 2 October 1649. The 2007 entry calls the gestation long, as so many of his pictures are. Vermeulen lets the rebuilt church explain the round arches; Liedtke prefers classicist taste. Schwartz and Bok find it very tempting — their words — that this version stayed in the family, because the stone is missing from the other known views. Tempting. The stone is here.",
    "Older catalogues in this house gave the figures to Adriaen van Ostade, or said possibly. Wuestman, 2007: no doubt Saenredam painted them; the paint goes around the preacher. The Dutch masters page uses this panel as the proof he could do staffage, and other rooms as the proof he sometimes did not. Both sentences stay. I am not inventing a widow in the aisle.",
    "2 October 1649 on the pew they transcribe; 1649 on the tomb he painted out; 1649 on the masterpieces label. Oil on panel, support 49.6 × 75 cm; the frame they measure is 70.4 × 95.6 × 5.7 cm. Public domain. On loan from the City of Amsterdam, A. van der Hoop Bequest — the same credit line as the Jewish Bride and the mill in this house. The church was pulled down in 1852. A floor, a name, a day.",
  ],
  sources: [
    {
      label: "Rijksmuseum, SK-C-217",
      href: "https://www.rijksmuseum.nl/en/collection/object/Interior-of-the-Sint-Odulphuskerk-in-Assendelft--ece748ca3c45cc2167022acebca268ca",
    },
    {
      label:
        "Rijksmuseum object text (wall text: bright clear light, as it happens a sermon, orthogonal lines, born in Assendelft, father’s gravestone; titles Interior of the Sint-Odulphuskerk in Assendelft / Interior of the St. Odulphuskerk in Assendelft, Seen from the Choir to the West; dating 1649-10-02; oil on panel, support 49.6 × 75 cm, frame 70.4 × 95.6 × 5.7 cm; credit line On loan from the City of Amsterdam (A. van der Hoop Bequest); public domain; inscriptions on pew, tomb, and tombstone)",
    },
    {
      label: "Persistent URL, SK-C-217",
      href: "https://id.rijksmuseum.nl/200107965",
    },
    {
      label:
        "Rijksmuseum, Dutch object page (title Interieur van de Sint-Odulphuskerk in Assendelft; wall text: licht en helderheid, toevallig net vanaf de kansel; description: predikant, grafsteen van Jan Saenredam)",
      href: "https://www.rijksmuseum.nl/nl/collectie/object/Interieur-van-de-Sint-Odulphuskerk-in-Assendelft--ece748ca3c45cc2167022acebca268ca",
    },
    {
      label:
        "G. Wuestman, 2007, “Pieter Jansz. Saenredam, Interior of the Sint-Odulphuskerk in Assendelft, Seen from the Choir to the West, 1649-10-02,” in J. Bikker (ed.), Dutch Paintings of the Seventeenth Century in the Rijksmuseum, no. 262 (biography; high point; church demolished 1852; long gestation; arches; Ostade refused; overpainted inscription)",
      href: "https://data.rijksmuseum.nl/200107965",
    },
    {
      label:
        "Rijksmuseum, One hundred masterpieces, Interior of the Sint-Odolphuskerk in Assendelft (sober Protestant church; structural details; Odolphus spelling)",
      href: "https://www.rijksmuseum.nl/en/stories/one-hundred-masterpieces/story/interior-saint-odulphus-church",
    },
    {
      label:
        "Rijksmuseum, Honderd meesterwerken, Interieur van de Sint-Odolphuskerk in Assendelft (sobere protestantse kerk; bouwkundige details)",
      href: "https://www.rijksmuseum.nl/nl/stories/honderd-meesterwerken/story/interieur-sint-odulphuskerk",
    },
    {
      label:
        "Rijksmuseum person page, Pieter Jansz Saenredam (Assendelft 1597–1665; VOC inheritance; eleven years with Frans de Grebber; buried St. Bavokerk)",
      href: "https://www.rijksmuseum.nl/en/collection/node/Pieter-Jansz-Saenredam--26a0ac0e8f1a7e353cdc79dab969a260",
    },
    {
      label:
        "Rijksmuseum, Dutch masters, Pieter Saenredam (after life; central perspective; white is never just white; staffage on the Odolphuskerk panel)",
      href: "https://www.rijksmuseum.nl/en/stories/dutch-masters/story/pieter-saenredam-10",
    },
    {
      label:
        "Rijksmuseum, Nederlandse meesters, Pieter Saenredam (naar het leven; wit is nooit alleen wit; figuren op het paneel met de Odolphuskerk)",
      href: "https://www.rijksmuseum.nl/nl/stories/nederlandse-meesters/story/pieter-saenredam",
    },
  ],
  corrections:
    "If a plate is wrong, the error is mine. There is no comments box. A public corrections address will sit here when the site has a desk.",
};

export const odulphuskerk: Work = workSchema.parse(draft);
