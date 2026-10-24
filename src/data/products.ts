import { Product } from "../types/ecommerce";

export const mockProducts: Product[] = [
  {
    id: "koto-ceramic-lamp",
    name: "Koto Ceramic Table Lamp",
    tagline: "LUMINAIRE // SERIES 04",
    price: 48500,
    category: "Lighting",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=1000", // Plate 01 Front Elevation
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1000", // Plate 02 Texture & Brass
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=1000", // Plate 03 Spatial Context
      "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&q=80&w=1000", // Plate 04 Standing Illumination
    ],
    description:
      "An architectural study in quiet light and mineral form. Hand-thrown by master artisans using unrefined stoneware clay and fitted with a solid brushed brass rotary dimmer switch.",
    inStock: true,
    dimensions: "H 42cm × W 30cm (Base: 18cm)",
    material: "Sand Stoneware & Linen Shade",
  },
  {
    id: "forma-stoneware-vessel",
    name: "Forma Stoneware Vessel No. 04",
    tagline: "CERAMICS // ARCHIVE",
    price: 26500,
    category: "Ceramics",
    images: [
      "https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1000",
    ],
    description:
      "Coarse grogged clay vessel turned by hand in Copenhagen. Features a chalk-matte bone glaze with subtle iron speckling.",
    inStock: true,
    dimensions: "H 38cm × W 22cm",
    material: "Hand-Thrown Clay",
  },
  {
    id: "klint-sculptural-armchair",
    name: "Klint Sculptural Armchair",
    tagline: "FURNITURE // SERIES 01",
    price: 135000,
    category: "Furniture",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1580481072645-022f9a6d8310?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1000",
    ],
    description:
      "Precision-carved solid ash frame paired with tactile Italian bouclé upholstery. A study in geometric ergonomics.",
    inStock: true,
    dimensions: "H 78cm × W 85cm × D 80cm",
    material: "Bleached Ash & Bouclé",
  },
  {
    id: "halo-travertine-lamp",
    name: "Halo Travertine Table Lamp",
    tagline: "LUMINAIRE // SERIES 02",
    price: 65000,
    category: "Lighting",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&q=80&w=1000",
    ],
    description:
      "Honed Roman travertine cylinder base topped with a patinated solid brass shade disk that casts soft ambient downward glow.",
    inStock: true,
    dimensions: "H 35cm × Diameter 28cm",
    material: "Honed Roman Travertine & Brass",
  },
  {
    id: "nordic-cashmere-throw",
    name: "Nordic Cashmere & Wool Throw",
    tagline: "TEXTILES // ARCHIVE",
    price: 18500,
    category: "Textiles",
    images: [
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000",
    ],
    description:
      "Ultra-soft un-dyed Mongolian cashmere and virgin wool blend woven with fringe details.",
    inStock: true,
    dimensions: "140cm × 200cm",
    material: "70% Virgin Wool, 30% Cashmere",
  },
  {
    id: "sven-oak-credenza",
    name: "Sven Minimalist Oak Credenza",
    tagline: "FURNITURE // SERIES 03",
    price: 245000,
    category: "Furniture",
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000",
    ],
    description:
      "Hand-assembled oak credenza featuring whisper-quiet tambour doors and concealed cable channels.",
    inStock: true,
    dimensions: "H 72cm × W 180cm × D 45cm",
    material: "Solid White Oak",
  },
  {
    id: "aeto-pendant-light",
    name: "Aeto Brass Pendant Luminaire",
    tagline: "LUMINAIRE // SERIES 01",
    price: 52000,
    category: "Lighting",
    images: [
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&q=80&w=1000",
    ],
    description:
      "Spun solid brass dish reflector suspended by a subtle woven fabric cord. Warm directional downlight.",
    inStock: true,
    dimensions: "Diameter 45cm × Cable 300cm",
    material: "Unlacquered Solid Brass",
  },
  {
    id: "gas-ash-coffee-table",
    name: "Gas Natural Ash Coffee Table",
    tagline: "FURNITURE // SERIES 02",
    price: 112000,
    category: "Furniture",
    images: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1000",
    ],
    description:
      "Monolithic Scandinavian ash coffee table with organic carved cylindrical legs and matte clear coat finish.",
    inStock: true,
    dimensions: "H 32cm × W 120cm × D 70cm",
    material: "Solid European Ash",
  },
];
