import { workSchema, type Work } from "@/lib/schema";

const draft = {
  slug: "still-life-with-a-gilt-cup",
  title: "Still Life with a Gilt Cup",
  titleLocal: "Stilleven met vergulde bokaal",
  maker: {
    name: "Willem Claesz Heda",
    life: "1594–1680",
    place: "Haarlem",
    note: "Filedt Kok, 2007, on this object: Haarlem, 14 December 1594, to 1680; the surname is his mother’s. Nothing is known about his training. He probably joined the Guild of St Luke in 1614. Ampzing, 1628, names him with Pieter Claesz as a painter of banquet pieces. The English wall: tonal banquet pieces. The Dutch wall: monochrome banketjes. Almost all his known pictures are still lifes; a few vanitas scenes belong to the career, not to this table. This plate does not hang a sermon on a cup they call a banquet.",
  },
  dateDisplay: "1635",
  dateNote:
    "Signed and dated. The museum transcribes HEDA. 1635. English inscriptions: at the bottom of the left-hand edge of the tablecloth on the right. Dutch: beneden op de linkerrand van het servet rechts. Tablecloth, napkin. Looking at that hem can read the third digit as a 5. Their 1635 stays on the label. Dendrochronology: youngest heartwood 1605; the panel could have been ready by 1616, but a date in or after 1622 is more likely.",
  medium: "Oil on panel",
  dimensions: "87.8 × 112.6 cm",
  location: "Rijksmuseum, Amsterdam",
  accession: "SK-A-4830",
  acquisition:
    "Purchased 1984, with the support of the Vereniging Rembrandt and the Rijksmuseum-Stichting. The provenance sentence in the same record also names the Jubileumfonds and the Dutch State. The credit line does not.",
  museumUrl:
    "https://www.rijksmuseum.nl/en/collection/object/Still-Life-with-a-Gilt-Cup--4617db9a8506653eb2437fc6bde903fd",
  rights:
    "The painting is in the public domain. Zoom tiles are served by the Rijksmuseum’s IIIF (Micrio). Poster file from the same service.",
  image: {
    iiif: "https://iiif.micr.io/UjEro/info.json",
    poster: "/works/still-life-with-a-gilt-cup.jpg",
    width: 5772,
    height: 4481,
    alt: "A laid table seen against a brownish ground: white damask over a green cloth, oysters and bread on pewter, a rummer, a gilt cup with lid, a pewter jug, a silver tazza on its side.",
    credit: "Rijksmuseum, Amsterdam. IIIF identifier UjEro.",
  },
  caption: "1635 · SK-A-4830",
  hotspots: [
    {
      id: "gilt-cup",
      n: 1,
      x: 0.68,
      y: 0.24,
      title: "Vergulde bokaal",
      body: "The titles start here. English now: a gilt cup. Another English title, and Filedt Kok’s citation: gilt goblet. Dutch: vergulde bokaal; the description adds with lid, gilt silver. A figure stands on the cover. Filedt Kok lets goblets of this kind belong to municipalities and guilds, and be lent as models. He does not name the figure on this one. I am pointing at gold.",
      source:
        "Rijksmuseum titles Still Life with a Gilt Cup / Still Life with Gilt Goblet / Stilleven met vergulde bokaal. Dutch description: een verguld zilveren bokaal met deksel. Filedt Kok, 2007: luxurious goblets… usually belonged to municipalities and the boards of guilds… made available to painters as models.",
    },
    {
      id: "tazza",
      n: 2,
      x: 0.64,
      y: 0.46,
      title: "Neergelegde drinkschaal",
      body: "On its side, on the white napkin. The Dutch description: a silver drinking bowl on a foot, laid down. Filedt Kok: the tazza lying on the white napkin; floral motifs; the same vessel in SK-A-137. I am pointing at a rim that faces us.",
      source:
        "Rijksmuseum Dutch description: een neergelegde zilveren drinkschaal op voet. Filedt Kok, 2007: the tazza lying on the white napkin; the tazza with its floral motifs (SK-A-137).",
    },
    {
      id: "rummer",
      n: 3,
      x: 0.555,
      y: 0.33,
      title: "Roemer",
      body: "Green glass, prunts, a pale wine. The Dutch description: a rummer with white wine. Filedt Kok: the green rummer. The wall’s grey argument has to pass through this green.",
      source:
        "Rijksmuseum Dutch description: een roemer met witte wijn. Filedt Kok, 2007: the green rummer.",
    },
    {
      id: "pewter-jug",
      n: 4,
      x: 0.82,
      y: 0.3,
      title: "Tinnen wijnkan",
      body: "Lid up, a dull skin. The Dutch description: a pewter wine jug. Filedt Kok: the large pewter jug; its first appearance in a banquet piece of 1633 in Haarlem. The hundred-masterpieces line in this house: the dull sheen of pewter. I am pointing at that sheen.",
      source:
        "Rijksmuseum Dutch description: een tinnen wijnkan. Filedt Kok, 2007: the large pewter jug. Rijksmuseum, One hundred masterpieces: the dull sheen of pewter.",
    },
    {
      id: "oysters",
      n: 5,
      x: 0.33,
      y: 0.5,
      title: "Oesters",
      body: "A pewter dish, open shells, the cool inside. The Dutch description names the dish. The subject field: molluscs: oyster. The wall text adds mother-of-pearl among the materials on the table. I am not adding a feast they did not write.",
      source:
        "Rijksmuseum Dutch description: een tinnen schaal met oesters. Subject: molluscs: oyster. Wall text: pewter, silver, damask, glass and mother-of-pearl.",
    },
    {
      id: "bread",
      n: 6,
      x: 0.44,
      y: 0.58,
      title: "Brood",
      body: "Broken, on pewter. The Dutch description: a pewter plate with bread. Filedt Kok: a broken loaf. The subject field: bread, loaf. The crumb is paint. I am not adding a meal.",
      source:
        "Rijksmuseum Dutch description: een tinnen bord met brood. Subject: bread, loaf. Filedt Kok, 2007: a broken loaf of bread.",
    },
    {
      id: "pepper",
      n: 7,
      x: 0.22,
      y: 0.6,
      title: "A twist of paper",
      body: "On the left plate, among shells. Filedt Kok: pewter plates jutting out over the edge of the table with a twist of paper containing pepper. The Dutch list does not name the paper. Their English catalog does. I am pointing at a cone.",
      source:
        "Filedt Kok, 2007: a twist of paper containing pepper. Rijksmuseum Dutch description lists the plates and the oysters, not the paper.",
    },
    {
      id: "salt",
      n: 8,
      x: 0.485,
      y: 0.38,
      title: "Zilveren zoutvat",
      body: "A cylinder, engraved, a mound on the lid. The Dutch description: a silver salt cellar. Filedt Kok: the cylindrical salt-cellar of engraved silver. Vels Heijn, in this house, put salt cellars in different styles on a Kunstkrant page. I am pointing at this one.",
      source:
        "Rijksmuseum Dutch description: een zilveren zoutvat. Filedt Kok, 2007: the cylindrical salt-cellar of engraved silver.",
    },
    {
      id: "berkemeyer",
      n: 9,
      x: 0.93,
      y: 0.51,
      title: "Berkenmeier",
      body: "Laid down, at the right edge, almost off the panel. The Dutch description: a berkemeyer lying on its side. Looking finds a dark glass cut by the frame. If I have the wrong glass, the error is mine.",
      source: "Rijksmuseum Dutch description: een neergelegde berkenmeier.",
    },
    {
      id: "signature",
      n: 10,
      x: 0.64,
      y: 0.91,
      title: "HEDA. 1635",
      body: "On the hem of the right cloth. The museum transcribes HEDA. 1635. English puts it on the tablecloth; Dutch on the napkin. Looking can read the third digit as a 5. I am not adjudicating a year. The name is paint. The date is theirs.",
      source:
        "Rijksmuseum inscriptions: signature and date, at the bottom of the left-hand edge of the tablecloth on the right: ‘HEDA. 1635’. Dutch: beneden op de linkerrand van het servet rechts.",
    },
  ],
  explainer: [
    "This is not a kitchen maid and not a mill. A table, pewter, silver, glass, a gilt cup. The English wall starts with grey: the range of tonalities is astounding; pewter, silver, damask, glass, mother-of-pearl; a few yellow and ochre accents compliment the colours. Compliment, they write. The Dutch wall says the same grey another way: hoeveel schakeringen grijs; tin, zilver, damast, glas, parelmoer; geel and oker. Look at the cup before you settle the genre.",
    "The titles in this house do not quite agree. English now: Still Life with a Gilt Cup. Another English title: Still Life with Gilt Goblet. Dutch: Stilleven met vergulde bokaal. Filedt Kok’s citation in the same catalog uses the goblet. Cup, goblet, bokaal. I am pointing at one vessel.",
    "The Dutch description lists what is on the table and then says onder meer: green cloth, two linen damask napkins, pewter with bread, pewter with oysters, a glass of red wine, an oil-or-vinegar jug of glass, a silver salt, a rummer of white wine, a silver bowl on a foot laid down, a gilt silver cup with lid, a pewter wine jug, a berkemeyer laid down. Oil or vinegar. They do not choose. Filedt Kok, later in the same house, calls the little jug vinegar, and Venetian. Looking finds a yellow on the green cloth at right that the list does not pin. Onder meer. The wall’s yellow and ochre stay a colour, not a name I will invent.",
    "Filedt Kok, 2007: the largest and most impressive of Heda’s paintings; a high point; viewed from a lower vantage than van Dijck’s SK-A-4821 and Claesz’s SK-A-4646 in this house; the objects overlap; grey tints, some tending toward blue, with whites, greens, and yellows; metal and glass do the work of shadow and reflection. A Washington picture of the same year, Banquet Piece with Mince Pie, is almost the mirror of this one, and higher, and on canvas. Copies exist; one adds a woman. None of that is on this surface.",
    "1635 on the label. Oil on panel, support 87.8 × 112.6 cm; four oak planks, thinned and cradled; some retouching along the joins; condition good. Purchased 1984 with the Vereniging Rembrandt and the Rijksmuseum-Stichting. Provenance opens with an ellipsis, then a Richedot family at Château de Choisey according to a 1977 sale catalogue, then another ellipsis, then Noortman and Brod. The museum marks the 1933–45 trail as possibly incomplete. Public domain. A gilt lid, then a name on a hem.",
  ],
  sources: [
    {
      label: "Rijksmuseum, SK-A-4830",
      href: "https://www.rijksmuseum.nl/en/collection/object/Still-Life-with-a-Gilt-Cup--4617db9a8506653eb2437fc6bde903fd",
    },
    {
      label:
        "Rijksmuseum object text (wall text: tonal banquet pieces, grey tonalities, pewter silver damask glass mother-of-pearl, yellow and ochre accents; titles Still Life with a Gilt Cup / Still Life with Gilt Goblet; dating 1635; oil on panel, support 87.8 × 112.6 cm; signature and date ‘HEDA. 1635’; purchase 1984; credit line Purchased with the support of the Vereniging Rembrandt and the Rijksmuseum-Stichting; public domain; provenance opens … Richedot … 1977 sale … Noortman and Brod; 1933–45 note)",
    },
    {
      label: "Persistent URL, SK-A-4830",
      href: "https://id.rijksmuseum.nl/200109354",
    },
    {
      label:
        "Rijksmuseum, Dutch object page (title Stilleven met vergulde bokaal; wall text: schakeringen grijs, monochrome banketjes; description of the laid table, onder meer; signatuur en datum, servet rechts: ‘HEDA. 1635’)",
      href: "https://www.rijksmuseum.nl/nl/collectie/object/Stilleven-met-vergulde-bokaal--4617db9a8506653eb2437fc6bde903fd",
    },
    {
      label:
        "J.P. Filedt Kok, “Willem Claesz. Heda, Still Life with Gilt Goblet, 1635,” in J. Bikker (ed.), Dutch Paintings of the Seventeenth Century in the Rijksmuseum, 2007, no. 120 (Haarlem 1594–1680; training unknown; Ampzing 1628; largest and most impressive; lower vantage; muted greys; tazza, rummer, gilt goblet, pewter jug; pepper paper; Venetian vinegar jug; Washington pendant 1635; dendrochronology; four oak planks)",
      href: "https://data.rijksmuseum.nl/200109354",
    },
    {
      label:
        "Rijksmuseum, One hundred masterpieces, Still Life with a Gilt Cup (master of reflections; dull sheen of pewter)",
      href: "https://www.rijksmuseum.nl/en/stories/one-hundred-masterpieces/story/still-life-gilt-cup",
    },
  ],
  corrections:
    "If a plate is wrong, the error is mine. There is no comments box. A public corrections address will sit here when the site has a desk.",
};

export const giltCup: Work = workSchema.parse(draft);
