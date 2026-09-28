import { workSchema, type Work } from "@/lib/schema";

const draft = {
  slug: "gallant-conversation",
  title: "Gallant Conversation, Known as ‘The Paternal Admonition’",
  titleLocal: "Galante conversatie, bekend als ‘De vaderlijke vermaning’",
  maker: {
    name: "Gerard ter Borch (II)",
    life: "1617–1681",
    place: "Zwolle / Deventer",
    note: "The (II) is the museum’s mark against the father. Korevaar’s biography on this object: Zwolle, the end of December 1617; Deventer, 8 December 1681; buried beside the father in the Sint-Michaëlskerk in Zwolle. Italy between 1637 and 1640 is marked as speculation without firm evidence, Houbraken aside. He and Vermeer signed as witnesses in Delft on 22 April 1653. This canvas is filed as one of the first after he settled in Deventer in 1654. The Dutch masters page: an artistic family; Gesina a model in other rooms, known by a pointed nose. This plate does not put that nose on a woman we do not see.",
  },
  dateDisplay: "c. 1654–1655",
  dateNote:
    "The object dates the picture c. 1654–c. 1655. Both ends approximate. The hundred-masterpieces line prints c. 1654. Korevaar: around 1654–55, because Caspar Netscher copied the Berlin version in 1655. The object is not dated on the face. The span stays.",
  medium: "Oil on canvas",
  dimensions: "70 × 72.5 cm",
  location: "Rijksmuseum, Amsterdam",
  accession: "SK-A-404",
  acquisition:
    "Purchased 1809. The object record prints purchase 1809. Provenance: with 136 other paintings, the Kabinet van Heteren Gevers, by decree of Louis Napoleon, 8 June 1809. The trail opens with a question mark on the dealer Jacques de Roore.",
  museumUrl:
    "https://www.rijksmuseum.nl/en/collection/object/Gallant-Conversation-Known-as-The-Paternal-Admonition--c7e6ee5e46db1ef891d311eff9f9b27e",
  rights:
    "The painting is in the public domain. Zoom tiles are served by the Rijksmuseum’s IIIF (Micrio). Poster file from the same service.",
  image: {
    iiif: "https://iiif.micr.io/RxOuM/info.json",
    poster: "/works/gallant-conversation.jpg",
    width: 4647,
    height: 4510,
    alt: "A standing woman seen from behind in a white satin dress faces a seated officer and a seated woman who drinks from a glass; a red bed and a table with candlestick and mirror at left, a dog and a closed door at right.",
    credit: "Rijksmuseum, Amsterdam. IIIF identifier RxOuM.",
  },
  caption: "c. 1654–1655 · SK-A-404",
  hotspots: [
    {
      id: "satin",
      n: 1,
      x: 0.26,
      y: 0.77,
      title: "Satijnen jurk",
      body: "The wall’s first craft sentence lands here. English: fabrics, such as the satin dress. Dutch: stoffen, zoals de satijnen jurk. The Dutch masters page: silk satin was a difficult technical feat; this fabric is almost tangible. I am pointing at lights on a skirt. The gathering can wait.",
      source:
        "Rijksmuseum wall text: accurately rendering fabrics, such as the satin dress. Dutch wall: waarheidsgetrouw afbeelden van stoffen, zoals de satijnen jurk. Dutch masters: The rendering of silk satin was considered a difficult technical feat… This fabric is almost tangible.",
    },
    {
      id: "back",
      n: 2,
      x: 0.255,
      y: 0.375,
      title: "The back",
      body: "We are given a nape, a knot of hair, a black wrap. Not a face. Korevaar: the figure seen from the back is a leitmotiv, and it is how the room stays unread. The wall: the sentiments of his figures are difficult to determine. I will not name the woman we cannot see.",
      source:
        "Rijksmuseum wall text: the sentiments of his figures are difficult to determine. Korevaar, 2026, on this object: The figure seen from the back, which is a leitmotiv in Ter Borch’s oeuvre, makes a particularly important contribution to this effect.",
    },
    {
      id: "hat",
      n: 3,
      x: 0.525,
      y: 0.66,
      title: "The hat",
      body: "Brown, on the lap between the two who sit. The English wall: the man seems to have just arrived, as he still holds his hat in his hand. Dutch: misschien net binnengekomen; hij heeft zijn hoed nog in zijn hand. Seems. Misschien. I am pointing at felt they named as a door still closing.",
      source:
        "Rijksmuseum wall text: The man seems to have just arrived, as he still holds his hat in his hand. Dutch wall: De man is misschien net binnengekomen: hij heeft zijn hoed nog in zijn hand.",
    },
    {
      id: "hand",
      n: 4,
      x: 0.57,
      y: 0.51,
      title: "The raised hand",
      body: "Thumb and finger, toward the satin. Writers have put a coin here and called the room a brothel. Korevaar: not a trace of a coin was found during the painting’s technical examination. None in Berlin either, they add. The gesture stays. The coin does not.",
      source:
        "Korevaar, 2026, on this object: Some authors have argued that he must have been holding a coin which has since disappeared… However, not a trace of a coin was found during the painting’s technical examination. On this see also McNeil Kettering… no sign of a coin in the Berlin version either.",
    },
    {
      id: "glass",
      n: 5,
      x: 0.495,
      y: 0.57,
      title: "Uit een glas",
      body: "The Dutch description: a seated woman who drinks from a glass. Beside the officer, they write. Eyes down, a dark hood, a blue-and-gold wrap. Goethe, in the catalogue’s telling, made her a mother who looks away from an admonition. The museum’s present sentence does not. She is drinking.",
      source:
        "Rijksmuseum Dutch description: Naast hem een zittende vrouw die uit een glas drinkt. Korevaar, 2026: Goethe… described the picture… as a father admonishing his daughter.",
    },
    {
      id: "table",
      n: 6,
      x: 0.085,
      y: 0.61,
      title: "Kandelaar en spiegel",
      body: "The Dutch description stops at what sits here: a candlestick with a candle, and a mirror opened out. Opengeklapte spiegel. Korevaar adds a silver bowl among luxury goods in a domestic interior. I am keeping their two objects. The candle is unlit. I am not hanging vanitas on an unlit wick they did not name.",
      source:
        "Rijksmuseum Dutch description: Op de tafel een kandelaar met kaars en een opengeklapte spiegel. Korevaar, 2026: the silver bowl and candlestick on the table were luxury items in a domestic interior.",
    },
    {
      id: "bed",
      n: 7,
      x: 0.4,
      y: 0.32,
      title: "The bed",
      body: "Red, taking the wall. Korevaar: a combination of a young woman, an old one, a man and a bed is typical of brothel scenes — and, in another reading, a first-floor piece of expensive furniture, even a future marriage. Tauber: the reserve for the bed was narrower by some centimetres; at first he was following Berlin. I am pointing at red they widened.",
      source:
        "Korevaar, 2026: The combination of a young woman, an old one (often in the role of a procuress), a man and a bed is typical of brothel scenes… the bedstead… was an expensive piece of furniture found in the reception rooms on the first floor. Technical notes: The reserve for the bed… was narrower… The originally smaller bed matches the one in Berlin.",
    },
    {
      id: "officer",
      n: 8,
      x: 0.655,
      y: 0.575,
      title: "Zittende officier",
      body: "The Dutch description: she is being spoken to by a seated officer. Korevaar: identified as a military man by his buff coat. Sleeves in light, a breastplate, a red chair. The English wall will only say the man. Their two names stay on the plate.",
      source:
        "Rijksmuseum Dutch description: een staande vrouw die wordt toegesproken door een zittende officier. Korevaar, 2026: The man on the right… is identified as a military man by his buff coat.",
    },
    {
      id: "dog",
      n: 9,
      x: 0.9,
      y: 0.79,
      title: "Rechts een hond",
      body: "The Dutch description’s last animal: a dog at the right. Grey, head down, toward the boards. The wall text does not give it a job. I am not making it an emblem. It is how the oblong canvas spends its extra width.",
      source:
        "Rijksmuseum Dutch description: Rechts een hond.",
    },
    {
      id: "door",
      n: 10,
      x: 0.875,
      y: 0.42,
      title: "The door",
      body: "Closed, in the right dark. Berlin, in the catalogue’s fig. a, is a narrower upright: 71.4 × 61 cm. This support is 70 × 72.5. Korevaar: he first painted a vertical version, then an oblong. The dog and this panel are what the extra centimetres hold. A closed door is not a vista. I will not walk through it.",
      source:
        "Rijksmuseum dimensions: height 70 cm × width 72.5 cm. Korevaar, 2026, fig. a: Berlin, 71.4 × 61 cm. Same entry: it is not surprising that in this case too he first painted a vertical version and then opted for an oblong support as an alternative.",
    },
  ],
  explainer: [
    "Look at the skirt before you hunt a plot. The museum’s wall puts fabric first: satin, rendered until it is a fact of light. The Dutch masters page in this house calls that a difficult technical feat, almost tangible. The picture is nearly square and still most of its air is a dress seen from behind.",
    "The present title is already an argument. English: Gallant Conversation, Known as ‘The Paternal Admonition’. Dutch: Galante conversatie, bekend als ‘De vaderlijke vermaning’. Korevaar traces the old name to Wille’s 1765 print Instruction Paternelle, after the Berlin canvas, and to Goethe in 1809. A former title in this house keeps the same pair of phrases. The catalogue’s other heading — Three Figures Conversing in an Interior — is drier, and closer to looking.",
    "The wall will not decide why they have met. English: the reason behind the gathering remains enigmatic. Dutch: mysterieus. The hundred-masterpieces line asks the question the wall refuses to close: Is this a brothel? / Is dit een bordeel? Korevaar lets a seventeenth-century viewer have it as brothel, courtship, or everyday conversation. The coin that would settle one of those readings is not on the paint. Their exam says so.",
    "Berlin is the other room. Netscher copied that version in 1655, which is how this object keeps c. 1654–c. 1655. Korevaar notes more pentimenti here, and a bed first reserved as narrow as Berlin’s, then widened. The 1843 catalogue in this house found the background completely overpainted. The calm is made, and has been remade.",
    "Korevaar files the picture among the first after Deventer, 1654. Purchase 1809, Kabinet van Heteren Gevers, by decree of Louis Napoleon. The provenance still opens with a question mark. This plate does not tidy the title, the year, or the coin that is not there.",
  ],
  sources: [
    {
      label: "Rijksmuseum, SK-A-404",
      href: "https://www.rijksmuseum.nl/en/collection/object/Gallant-Conversation-Known-as-The-Paternal-Admonition--c7e6ee5e46db1ef891d311eff9f9b27e",
    },
    {
      label:
        "Rijksmuseum object text (wall text: two guests, hat still in hand, satin, enigmatic gathering; titles Gallant Conversation, Known as ‘The Paternal Admonition’ / former title of the same form; dating c. 1654–c. 1655; oil on canvas, 70 × 72.5 cm, frame 85 × 87 × 8.5 cm; purchase 1809; public domain)",
    },
    {
      label: "Persistent URL, SK-A-404",
      href: "https://id.rijksmuseum.nl/200108277",
    },
    {
      label:
        "Rijksmuseum, Dutch object page (title Galante conversatie, bekend als ‘De vaderlijke vermaning’; also Interieur met drie figuren die met elkaar in gesprek zijn; wall: twee gasten, hoed nog in de hand, satijnen jurk, mysterieus; description: zittende officier, vrouw die uit een glas drinkt, hond rechts, kandelaar en opengeklapte spiegel)",
      href: "https://www.rijksmuseum.nl/nl/collectie/object/Galante-conversatie-bekend-als-De-vaderlijke-vermaning--c7e6ee5e46db1ef891d311eff9f9b27e",
    },
    {
      label:
        "G. Korevaar, 2026, “Gerard ter Borch, Three Figures Conversing in an Interior, known as ‘The Paternal Admonition’, c. 1654–c. 1655,” in J. Bikker (ed.), Dutch Paintings of the Seventeenth Century in the Rijksmuseum (Wille 1765; Goethe 1809; no coin; buff coat; bed; Berlin 71.4 × 61 cm; Deventer 1654; purchase 8 June 1809; provenance opens ? de Roore)",
      href: "https://data.rijksmuseum.nl/200108277",
    },
    {
      label:
        "Gwen Tauber, technical notes, publication date 2026 (wax-resin lining; no underdrawing detected; bed reserved narrower, matching Berlin; dog’s hindquarters; sword closer to the ankle; cape not reserved)",
    },
    {
      label:
        "Rijksmuseum, One hundred masterpieces, Gallant Conversation, Known as ‘The Paternal Admonition’ (Is this a brothel?; incomparable rendering of satin; c. 1654)",
      href: "https://www.rijksmuseum.nl/en/stories/one-hundred-masterpieces/story/gallant-conversation",
    },
    {
      label:
        "Rijksmuseum, Honderd meesterwerken, Galante conversatie (Is dit een bordeel?; weergaloze weergave van de stof satijn)",
      href: "https://www.rijksmuseum.nl/nl/stories/honderd-meesterwerken/story/galante-conversatie",
    },
    {
      label:
        "Rijksmuseum person page, Gerard ter Borch (II)",
      href: "https://www.rijksmuseum.nl/en/collection/node/Gerard-ter-Borch-II--de4fa44f554bebd835cd9a40912f37d3",
    },
    {
      label:
        "Rijksmuseum, Dutch masters, Gerard ter Borch (artistic family; silk satin a difficult technical feat, almost tangible; Gesina a model; open-ended conversation; a master of suggestion)",
      href: "https://www.rijksmuseum.nl/en/stories/dutch-masters/story/gerard-ter-borch-10",
    },
  ],
  corrections:
    "If a plate is wrong, the error is mine. There is no comments box. A public corrections address will sit here when the site has a desk.",
};

export const gallantConversation: Work = workSchema.parse(draft);
