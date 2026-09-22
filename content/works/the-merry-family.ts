import { workSchema, type Work } from "@/lib/schema";

const draft = {
  slug: "the-merry-family",
  title: "The Merry Family",
  titleLocal: "Het vrolijke huisgezin",
  maker: {
    name: "Jan Havicksz. Steen",
    life: "c. 1626–1679",
    place: "Leiden",
    note: "The person page in this house: c. 1626–1679, Leiden, a grain merchant’s son, a beer brewer’s son. It is believed, they write, that he trained with Knupfer, van Ostade, van Goyen. Believed. The person record’s birth span is more careful: c. 1625–c. 1626. Death is printed 1679-02. The wall caption on this canvas drops the circas: 1626–1679. A later phrase in the same house — a Jan Steen household — is not on the object wall. This plate does not tidy the years.",
  },
  dateDisplay: "1668",
  dateNote:
    "Signed and dated. The museum transcribes JSteen 1668. The Dutch page places the marks lower right. Looking finds the letters on the table, not in the corner of the canvas. 1668 on the label is a date on the face, not an approximation.",
  medium: "Oil on canvas",
  dimensions: "110.5 × 141 cm",
  location: "Rijksmuseum, Amsterdam",
  accession: "SK-C-229",
  acquisition:
    "On loan from the City of Amsterdam (A. van der Hoop Bequest). The object record prints that credit line and leaves the Acquisition and Provenance fields empty.",
  museumUrl:
    "https://www.rijksmuseum.nl/en/collection/object/The-Merry-Family--f6c4f4db1681a8704b372bda0183623b",
  rights:
    "The painting is in the public domain. Zoom tiles are served by the Rijksmuseum’s IIIF (Micrio). Poster file from the same service.",
  image: {
    iiif: "https://iiif.micr.io/SbsFC/info.json",
    poster: "/works/the-merry-family.jpg",
    width: 5876,
    height: 4619,
    alt: "A crowded Dutch interior: an old man raises a wine glass at a table, a bagpiper behind him, women and children making music and smoke; a written sheet hangs at the chimney.",
    credit: "Rijksmuseum, Amsterdam. IIIF identifier SbsFC.",
  },
  caption: "1668 · SK-C-229",
  hotspots: [
    {
      id: "note",
      n: 1,
      x: 0.825,
      y: 0.154,
      title: "The note",
      body: "The wall text’s lesson hangs here: a sheet at the chimney. Looking, the letters run Soo d’ovde songen / soo pÿpen de jonge. The museum’s object description writes Soo de ouden songen, pijpen de jongen. The Dutch wall writes piepen. The English wall writes twitter. Four sentences, one scrap of paper. I am pointing at the letters.",
      source:
        "Rijksmuseum wall text: ‘As the old sing, so shall the young twitter.’ Dutch wall: ‘Zo de ouden zongen, zo piepen de jongen.’ Object description: ‘Soo de ouden songen, pijpen de jongen’.",
    },
    {
      id: "roemer",
      n: 2,
      x: 0.348,
      y: 0.368,
      title: "Opgeheven roemer",
      body: "Raised, a stemmed glass, wine catching the window. The Dutch description: a singing old man with a raised roemer. The wall text’s first singers are father, mother, and grandmother. An old man is not yet a father. I am pointing at a glass.",
      source:
        "Rijksmuseum Dutch description: een zingende oude man met opgeheven roemer.",
    },
    {
      id: "window",
      n: 3,
      x: 0.104,
      y: 0.361,
      title: "In the window",
      body: "The Dutch description: left, in the window, a boy with a pipe and a horn. Looking: a long clay stem, smoke, a horn hanging on blue cords. The wall text lets the children puff on long pipes. This is one of them, in the weather.",
      source:
        "Rijksmuseum Dutch description: Links in het raam een jongen met een pijp en een hoorn.",
    },
    {
      id: "bagpiper",
      n: 4,
      x: 0.417,
      y: 0.307,
      title: "Doedelzak",
      body: "Drones up, a hat, a mouth on a stem. The Dutch description: a man playing the bagpipes. The masterpieces note in the same house: he portrayed himself, the instrument of fools. The wall text does not. I have not set this face beside their self-portrait. I am pointing at a drone.",
      source:
        "Rijksmuseum Dutch description: een man spelend op een doedelzak. One hundred masterpieces: bagpipe, the instrument of fools.",
    },
    {
      id: "paper",
      n: 5,
      x: 0.45,
      y: 0.477,
      title: "A piece of paper",
      body: "The Dutch description: two women singing from a piece of paper. A sheet between an older mouth and a younger one. The wall text names mother and grandmother. Their names. The paper is looking.",
      source:
        "Rijksmuseum Dutch description: twee vrouwen die zingen van een stuk papier.",
    },
    {
      id: "spoon",
      n: 6,
      x: 0.658,
      y: 0.392,
      title: "A spoon",
      body: "The Dutch description: a child with a spoon. On the table, a small figure, a metal bowl of a spoon held up. I am not hanging appetite as emblem. A spoon is there.",
      source: "Rijksmuseum Dutch description: een kind met een lepel.",
    },
    {
      id: "flute",
      n: 7,
      x: 0.708,
      y: 0.408,
      title: "A flute",
      body: "The Dutch description: a boy with a flute. Fingers, a pale tube, the wall text’s join in made audible. Up close it is wood and a mouth. I am not adding a tune the museum does not record.",
      source: "Rijksmuseum Dutch description: een jongen met een fluit.",
    },
    {
      id: "smokers",
      n: 8,
      x: 0.86,
      y: 0.4,
      title: "Long pipes",
      body: "The Dutch description: a boy and a girl smoking a pipe. She smiles on a long stem. He handles another. The wall text: they even puff on long pipes. Pijpen on the chimney sheet is a verb of piping. Here it is smoke. The pun stays their proverb, not a joke I will enlarge.",
      source:
        "Rijksmuseum Dutch description: een jongen en een meisje die een pijp roken.",
    },
    {
      id: "wine",
      n: 9,
      x: 0.683,
      y: 0.604,
      title: "A sip",
      body: "The Dutch description: in front of the table a child is given a sip of wine from a jug. Pewter, a yellow skirt, a mouth at the rim. The wall text’s question — what is to become of the children — needs this pour. I am pointing at a kan.",
      source:
        "Rijksmuseum Dutch description: Voor de tafel krijgt een kind een slok wijn uit een kan.",
    },
    {
      id: "signature",
      n: 10,
      x: 0.845,
      y: 0.708,
      title: "JSteen 1668",
      body: "On the table, to the right of the green coat. The museum transcribes JSteen 1668. Looking: a ligature, then 1668. The Dutch page says lower right; the English inscriptions omit the place. The name is paint on cloth, not a caption under the sheet.",
      source: "Rijksmuseum inscriptions: signature and date: ‘JSteen 1668’.",
    },
  ],
  explainer: [
    "This is not a Delft kitchen and not a mill on a river. A table, a window, a chimney, a family making noise. The wall text starts there: father, mother, and grandmother sing loudly; the children join in; they even puff on long pipes. Then the paper is allowed to teach. Hints, they write. What is to become of the children if their parents set the wrong example? Their question. Look at the sheet before you answer it.",
    "The titles in this house do not quite agree. English: The Merry Family, and underneath, The merry family. Dutch: Het vrolijke huisgezin. The object description adds another name in the same breath: or ‘Soo de ouden songen, pijpen de jongen’. Wall Dutch writes piepen. Wall English writes twitter. On the chimney the letters are closer to Soo d’ovde songen soo pÿpen de jonge. Pijpen, piepen, twitter: a pipe, a peep, a translation. The argument stays on the plate.",
    "The museum’s Dutch description is almost a list: a boy in the window with pipe and horn; a singing old man with raised roemer; a man on the bagpipes; two women from a paper; a child with a spoon; a boy with a flute; a boy and a girl smoking; in front, a child given wine from a jug; on the floor a dog, jugs, a plate, a skillet. The English wall names none of those tools. It names a family. Father is not a label on a hat. The masterpieces note lets the bagpiper be Steen himself, instrument of fools. The wall text does not. I have not compared the self-portrait they mention. If that face is not his, the error is theirs and then mine for repeating the claim.",
    "The person page in the same house hedges the life: c. 1626–1679; believed training; a brewery and a tavern at home; a libertine reputation that seems mainly based on the debauched characters in his pictures. Seems. The Dutch masters note: cheerful paintings of disorderly families gave rise to the saying a Jan Steen household. The in-detail story hangs that saying on this room. The object wall does not. Chapman’s title in the object literature — Jan Steen as family man — is a title I have not opened. I am not making this table his table.",
    "1668 on the face. Oil on canvas, 110.5 × 141 cm. On loan from the City of Amsterdam, A. van der Hoop Bequest — the same credit line as the mill and the Jewish Bride in this house. Acquisition and Provenance are empty fields on the current object page. Public domain. Gallery noise, then a paper. None of that is a problem to solve.",
  ],
  sources: [
    {
      label: "Rijksmuseum, SK-C-229",
      href: "https://www.rijksmuseum.nl/en/collection/object/The-Merry-Family--f6c4f4db1681a8704b372bda0183623b",
    },
    {
      label:
        "Rijksmuseum object text (wall text; Dutch description; titles The Merry Family / The merry family / Het vrolijke huisgezin; proverb as twitter / piepen / pijpen; signature and date ‘JSteen 1668’; dating 1668; oil on canvas, support 110.5 × 141 cm; credit line On loan from the City of Amsterdam (A. van der Hoop Bequest); Acquisition and Provenance left empty; public domain)",
    },
    {
      label: "Persistent URL, SK-C-229",
      href: "https://id.rijksmuseum.nl/200108012",
    },
    {
      label:
        "Rijksmuseum, Dutch object page (title Het vrolijke huisgezin; wall text: briefje op de schouw; signatuur en datum, rechtsonder: ‘JSteen 1668’)",
      href: "https://www.rijksmuseum.nl/nl/collectie/object/The-Merry-Family--f6c4f4db1681a8704b372bda0183623b",
    },
    {
      label:
        "Rijksmuseum person page, Jan Havicksz. Steen (c. 1626–1679; Leiden; believed training; brewery and tavern; libertine reputation seems mainly based on the characters)",
      href: "https://www.rijksmuseum.nl/en/collection/node/Jan-Havicksz-Steen--0ea2099d38a0203eba2c26fb0cf4a294",
    },
    {
      label:
        "Rijksmuseum person record (birth span c. 1625–c. 1626; death 1679-02; Rijkscanon 2007 biography: born Leiden 1626)",
      href: "https://id.rijksmuseum.nl/2103131",
    },
    {
      label:
        "Rijksmuseum, “The Merry Family,” One hundred masterpieces (self-portrait as bagpiper, instrument of fools; 1626–1679)",
      href: "https://www.rijksmuseum.nl/en/stories/one-hundred-masterpieces/story/merry-family",
    },
    {
      label:
        "Rijksmuseum, Honderd meesterwerken, “Het vrolijke huisgezin” (instrument der dwazen)",
      href: "https://www.rijksmuseum.nl/nl/stories/honderd-meesterwerken/story/het-vrolijke-huisgezin",
    },
    {
      label:
        "Rijksmuseum, In detail, “Vrolijk gezin” (spreekwoordelijk huishouden van Jan Steen; goed voorbeeld doet goed volgen)",
      href: "https://www.rijksmuseum.nl/nl/stories/in-detail/story/vrolijke-huisgezin",
    },
    {
      label:
        "Rijksmuseum, Dutch masters, Jan Steen (a Jan Steen household; self-portrait: squinting eyes and large fleshy nose)",
      href: "https://www.rijksmuseum.nl/en/stories/dutch-masters/story/jan-steen-10",
    },
  ],
  corrections:
    "If a plate is wrong, the error is mine. There is no comments box. A public corrections address will sit here when the site has a desk.",
};

export const merryFamily: Work = workSchema.parse(draft);
