import type { Product } from "../types/ecommerce";

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=1000`;

const lightingImgs = [
  "1507473885765-e6ed057f782c",
  "1513519245088-0e12902e5a38",
  "1540932239986-30128078f3c5",
  "1534349762230-e0cadf78f5da",
].map(img);
const furnitureImgs = [
  "1586023492125-27b2c045efd7",
  "1567538096630-e0c55bd6374c",
  "1580481072645-022f9a6d8310",
  "1592078615290-033ee584e267",
].map(img);
const ceramicsImgs = [
  "1612196808214-b7e239e5f6b7",
  "1578749556568-bc2c40e68b61",
  "1565193566173-7a0ee3dbe261",
  "1513519245088-0e12902e5a38",
].map(img);
const textileImgs = [
  "1600121848594-d8644e57abab",
  "1584100936595-c0654b55a2e2",
  "1522771739844-6a9f6d5f14af",
  "1616486338812-3dadae4b4ace",
].map(img);

export const mockProducts: Product[] = [
  {
    id: "vik-alabaster-sconce",
    name: "Vik Alabaster Wall Sconce",
    tagline: "LUMINAIRE // SERIES 05",
    price: 29500,
    category: "Lighting",
    images: lightingImgs,
    description:
      "Hand-cut alabaster shade that diffuses a warm, honeyed glow across plaster walls.",
    inStock: true,
    dimensions: "H 30cm × W 18cm × D 12cm",
    material: "Alabaster & Brushed Brass",
  },
  {
    id: "noor-paper-lantern",
    name: "Noor Paper Floor Lantern",
    tagline: "LUMINAIRE // SERIES 06",
    price: 34000,
    category: "Lighting",
    images: [...lightingImgs].reverse(),
    description:
      "Washi paper stretched over a slim ash frame. Soft, even light with no glare.",
    inStock: true,
    dimensions: "H 150cm × Diameter 35cm",
    material: "Washi Paper & Ash",
  },
  {
    id: "soren-desk-lamp",
    name: "Soren Oak & Linen Desk Lamp",
    tagline: "LUMINAIRE // SERIES 03",
    price: 21500,
    category: "Lighting",
    images: lightingImgs,
    description:
      "Compact articulated desk lamp with a turned oak stem and a pleated linen shade.",
    inStock: false,
    dimensions: "H 48cm × W 22cm",
    material: "Solid Oak & Belgian Linen",
  },
  {
    id: "arc-lounge-chair",
    name: "Arc Lounge Chair",
    tagline: "FURNITURE // SERIES 04",
    price: 48500,
    category: "Furniture",
    images: [...furnitureImgs].reverse(),
    description:
      "Curved upholstered back on tapered ash legs. Compact enough for small rooms.",
    inStock: true,
    dimensions: "H 82cm × W 60cm × D 62cm",
    material: "Ash & Woven Wool",
  },
  {
    id: "form-side-table",
    name: "Form Side Table",
    tagline: "FURNITURE // SERIES 05",
    price: 22900,
    category: "Furniture",
    images: furnitureImgs,
    description:
      "Open-shelf side table in solid oak with soft-radius corners and a hand-oiled finish.",
    inStock: true,
    dimensions: "H 55cm × W 40cm × D 35cm",
    material: "Solid Oak",
  },
  {
    id: "lund-walnut-bench",
    name: "Lund Walnut Bench",
    tagline: "FURNITURE // SERIES 06",
    price: 78000,
    category: "Furniture",
    images: furnitureImgs,
    description:
      "Single-slab walnut bench with a slim profile. Works at an entryway or a bed end.",
    inStock: true,
    dimensions: "H 45cm × W 140cm × D 38cm",
    material: "American Walnut",
  },
  {
    id: "serein-stoneware-vase",
    name: "Serein Stoneware Vase",
    tagline: "CERAMICS // ARCHIVE",
    price: 8400,
    category: "Ceramics",
    images: ceramicsImgs,
    description:
      "Rounded shoulder vase with a milky matte glaze. Holds dried stems or stands alone.",
    inStock: true,
    dimensions: "H 30cm × W 20cm",
    material: "Glazed Stoneware",
  },
  {
    id: "onda-glazed-carafe",
    name: "Onda Glazed Carafe",
    tagline: "CERAMICS // TABLEWARE",
    price: 6200,
    category: "Ceramics",
    images: ceramicsImgs,
    description:
      "Everyday carafe with a wave-ribbed body and a deep indigo reactive glaze.",
    inStock: true,
    dimensions: "H 24cm × W 12cm",
    material: "Glazed Stoneware",
  },
  {
    id: "mino-tea-bowl-set",
    name: "Mino Tea Bowl Set of 4",
    tagline: "CERAMICS // TABLEWARE",
    price: 9800,
    category: "Ceramics",
    images: ceramicsImgs,
    description:
      "Four hand-pinched bowls, each slightly different, in an ash-speckled celadon glaze.",
    inStock: true,
    dimensions: "H 7cm × Diameter 11cm (each)",
    material: "Hand-Pinched Stoneware",
  },
  {
    id: "vara-terracotta-urn",
    name: "Vara Hand-Thrown Terracotta Urn",
    tagline: "CERAMICS // ARCHIVE",
    price: 18500,
    category: "Ceramics",
    images: ceramicsImgs,
    description:
      "Unglazed Italian clay, fired with traditional wood-ash kiln techniques.",
    inStock: true,
    dimensions: "H 45cm × W 28cm",
    material: "Unglazed Terracotta",
  },
  {
    id: "askja-matte-planter",
    name: "Askja Matte Planter",
    tagline: "CERAMICS // OBJECTS",
    price: 12400,
    category: "Ceramics",
    images: ceramicsImgs,
    description:
      "Wide, low planter with a volcanic-black matte glaze and a drainage plug.",
    inStock: false,
    dimensions: "H 18cm × Diameter 32cm",
    material: "Matte-Glazed Stoneware",
  },
  {
    id: "gotland-linen-cushion",
    name: "Gotland Linen Cushion",
    tagline: "TEXTILES // WEAVE",
    price: 5800,
    category: "Textiles",
    images: textileImgs,
    description:
      "Stonewashed linen cover with a feather insert. Softens with every wash.",
    inStock: true,
    dimensions: "50cm × 50cm",
    material: "100% Stonewashed Linen",
  },
  {
    id: "fjord-wool-rug",
    name: "Fjord Hand-Knotted Wool Rug",
    tagline: "TEXTILES // ATELIER",
    price: 96000,
    category: "Textiles",
    images: textileImgs,
    description:
      "Dense hand-knotted rug in undyed wool tones with a subtle tonal stripe.",
    inStock: true,
    dimensions: "200cm × 300cm",
    material: "100% Undyed Wool",
  },
  {
    id: "bruma-linen-bedding",
    name: "Bruma Linen Bedding Set",
    tagline: "TEXTILES // WEAVE",
    price: 24500,
    category: "Textiles",
    images: textileImgs,
    description:
      "Duvet cover and two pillowcases in washed European flax linen.",
    inStock: true,
    dimensions: "King (240cm × 260cm)",
    material: "100% European Flax Linen",
  },
  {
    id: "lyra-alpaca-blanket",
    name: "Lyra Alpaca Blanket",
    tagline: "TEXTILES // ARCHIVE",
    price: 15500,
    category: "Textiles",
    images: textileImgs,
    description:
      "Light, warm alpaca blend with a brushed finish and a hand-knotted fringe.",
    inStock: true,
    dimensions: "130cm × 180cm",
    material: "80% Alpaca, 20% Wool",
  },
  {
    id: "ostra-linen-runner",
    name: "Ostra Linen Table Runner",
    tagline: "TEXTILES // TABLEWARE",
    price: 4200,
    category: "Textiles",
    images: textileImgs,
    description:
      "Narrow table runner with a hemstitched edge in natural unbleached linen.",
    inStock: true,
    dimensions: "40cm × 180cm",
    material: "Unbleached Linen",
  },
];
