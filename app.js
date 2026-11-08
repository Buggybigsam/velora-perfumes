/**
 * VELORA PERFUMES LUXURY - APP LOGIC
 * High-End Perfumery E-Commerce with Ghana Cedis (GH₵) & Concierge Order Flow
 */

// 1. PRODUCT CATALOG DATA
const PRODUCTS = [
  {
    id: "velora-midnight-oud",
    name: "Velora Midnight Oud",
    tagline: "Extrait de Parfum · Private Reserve",
    category: "men",
    tags: ["bestseller", "men", "unisex"],
    price: 1450,
    sizes: [
      { size: "50ml", price: 950 },
      { size: "100ml", price: 1450 },
      { size: "150ml", price: 1980 }
    ],
    rating: 4.9,
    reviewsCount: 148,
    scentFamily: "Woody · Oriental · Smoky",
    image: "assets/products/velora-midnight-oud-hd.jpg",
    gallery: [
      "assets/products/velora-midnight-oud-hd.jpg",
      "assets/products/midnight-oud.jpg",
      "assets/products/velora-signature.jpg"
    ],
    description:
      "A commanding, mysterious blend of rare Cambodian agarwood, smoldering amber resins, and velvety dark leather. Formulated at 30% Extrait de Parfum concentration for magnetic projection that lingers long into the night.",
    topNotes: "Smoked Cardamom, Rare Persian Saffron, Bergamot",
    heartNotes: "Cambodian Agarwood (Oud), Damask Rose, Frankincense",
    baseNotes: "Black Amber Resin, Birch Leather, Indonesian Patchouli",
    longevity: "16+ Hours",
    sillage: "Intense / Enormous",
    season: "Autumn / Winter / Evening",
    isBestseller: true,
    isNew: false
  },
  {
    id: "velora-amber-bliss",
    name: "Velora Amber Bliss",
    tagline: "Eau de Parfum · Golden Nectar",
    category: "women",
    tags: ["bestseller", "women", "unisex"],
    price: 1250,
    sizes: [
      { size: "50ml", price: 820 },
      { size: "100ml", price: 1250 },
      { size: "150ml", price: 1720 }
    ],
    rating: 4.9,
    reviewsCount: 182,
    scentFamily: "Warm Amber · Gourmand · Floral",
    image: "assets/products/velora-amber-bliss-hd.jpg",
    gallery: [
      "assets/products/velora-amber-bliss-hd.jpg",
      "assets/products/amber-bliss.jpg"
    ],
    description:
      "A radiant, golden elixir that wraps your skin in warm Madagascar vanilla, sun-drenched benzoin, and luminous white jasmine. Decadent yet refined, embodying quiet opulence and sensual warmth.",
    topNotes: "Sweet Sicilian Almond, Golden Mandarin, Neroli",
    heartNotes: "Bourbon Vanilla Orchid, Benzoin Tears, Jasmine",
    baseNotes: "Golden Amber Crystal, Tonka Bean, Mysore Sandalwood",
    longevity: "14+ Hours",
    sillage: "Strong & Radiant",
    season: "All Year / Evening & Signature",
    isBestseller: true,
    isNew: false
  },
  {
    id: "velora-blush-petals",
    name: "Velora Blush Petals",
    tagline: "Eau de Parfum · Haute Romance",
    category: "women",
    tags: ["bestseller", "women", "new"],
    price: 1150,
    sizes: [
      { size: "50ml", price: 750 },
      { size: "100ml", price: 1150 },
      { size: "150ml", price: 1580 }
    ],
    rating: 4.8,
    reviewsCount: 124,
    scentFamily: "Floral · Fresh · Romantic",
    image: "assets/products/velora-blush-petals-hd.jpg",
    gallery: [
      "assets/products/velora-blush-petals-hd.jpg",
      "assets/products/blush-petals.jpg"
    ],
    description:
      "A breathtaking celebration of Grasse Centifolia rose and tender pink peonies kissed by morning dew and sweet lychee. An intoxicatingly feminine fragrance that leaves a trail of soft elegance.",
    topNotes: "Dewy Pink Lychee, Morning Peony, Calabrian Bergamot",
    heartNotes: "Centifolia Rose Petals, White Magnolia, Lily of the Valley",
    baseNotes: "Clean Cashmere Musk, Soft Cedarwood, Subtle Amber",
    longevity: "12+ Hours",
    sillage: "Moderate to Radiant",
    season: "Spring / Summer / Daytime Elegance",
    isBestseller: true,
    isNew: true
  },
  {
    id: "velora-ocean-breeze",
    name: "Velora Ocean Breeze",
    tagline: "Eau de Parfum · Marine Zenith",
    category: "men",
    tags: ["bestseller", "men", "unisex"],
    price: 1180,
    sizes: [
      { size: "50ml", price: 780 },
      { size: "100ml", price: 1180 },
      { size: "150ml", price: 1620 }
    ],
    rating: 4.8,
    reviewsCount: 96,
    scentFamily: "Fresh · Marine · Citrus",
    image: "assets/products/velora-ocean-breeze-hd.jpg",
    gallery: [
      "assets/products/velora-ocean-breeze-hd.jpg",
      "assets/products/ocean-breeze.jpg"
    ],
    description:
      "An exhilarating burst of Mediterranean sea spray combined with crisp Italian bergamot, coastal rosemary, and sun-bleached driftwood. Clean, dynamic, and undeniably refreshing.",
    topNotes: "Italian Bergamot, Ocean Minerals, Crisp Marine Accord",
    heartNotes: "Mediterranean Rosemary, Clary Sage, Sea Salt",
    baseNotes: "Sun-bleached Driftwood, Mineral Ambergris, White Cedar",
    longevity: "11+ Hours",
    sillage: "Moderate to Strong",
    season: "Summer / Warm Weather / Daytime",
    isBestseller: true,
    isNew: false
  },
  {
    id: "velora-vanilla-dream",
    name: "Velora Vanilla Dream",
    tagline: "Eau de Parfum · Velvet Gourmand",
    category: "women",
    tags: ["bestseller", "women", "unisex"],
    price: 1220,
    sizes: [
      { size: "50ml", price: 800 },
      { size: "100ml", price: 1220 },
      { size: "150ml", price: 1680 }
    ],
    rating: 4.9,
    reviewsCount: 167,
    scentFamily: "Gourmand · Sweet · Amber",
    image: "assets/products/velora-vanilla-dream-hd.jpg",
    gallery: [
      "assets/products/velora-vanilla-dream-hd.jpg",
      "assets/products/vanilla-dream.jpg"
    ],
    description:
      "An addictive symphony of warm roasted vanilla beans, spun caramel nectar, and velvety sandalwood. Created for those who want their presence to feel irresistible, cozy, and lavish.",
    topNotes: "Madagascar Vanilla Blossom, Coconut Cream, Apricot",
    heartNotes: "Caramelized Brown Sugar, Heliotrope, Marshmallow Fluff",
    baseNotes: "Creamy Sandalwood, Cashmere Amber, Musk",
    longevity: "14+ Hours",
    sillage: "Heavy & Addictive",
    season: "Autumn / Winter / Date Night",
    isBestseller: true,
    isNew: false
  },
  {
    id: "bleu-de-chanel",
    name: "Bleu de Chanel",
    tagline: "Eau de Parfum · Timeless Masculine",
    category: "men",
    tags: ["bestseller", "men"],
    price: 2200,
    sizes: [
      { size: "50ml", price: 1600 },
      { size: "100ml", price: 2200 },
      { size: "150ml", price: 2850 }
    ],
    rating: 4.9,
    reviewsCount: 210,
    scentFamily: "Woody · Citrus · Fresh",
    image: "assets/products/bleu-de-chanel.jpg",
    gallery: ["assets/products/bleu-de-chanel.jpg"],
    description:
      "An aromatic, woody fragrance with a captivating trail. A tribute to masculine freedom in a deep, enigmatic blue bottle that commands respect and effortless charisma.",
    topNotes: "Grapefruit, Lemon, Mint, Pink Pepper",
    heartNotes: "Ginger, Nutmeg, Jasmine, Iso E Super",
    baseNotes: "Incense, Vetiver, Cedarwood, Sandalwood, Patchouli",
    longevity: "12+ Hours",
    sillage: "Strong & Sophisticated",
    season: "Versatile / All Seasons",
    isBestseller: true,
    isNew: false
  },
  {
    id: "tom-ford-oud-wood",
    name: "Tom Ford Oud Wood",
    tagline: "Eau de Parfum · Private Blend",
    category: "men",
    tags: ["bestseller", "men", "unisex"],
    price: 2650,
    sizes: [
      { size: "50ml", price: 1950 },
      { size: "100ml", price: 2650 }
    ],
    rating: 4.9,
    reviewsCount: 194,
    scentFamily: "Woody · Spicy · Luxurious",
    image: "assets/products/tom-ford-oud-wood.jpg",
    gallery: ["assets/products/tom-ford-oud-wood.jpg"],
    description:
      "One of the most rare, precious, and expensive ingredients in a perfumer's arsenal. Exotic rose wood and cardamom give way to a smoky blend of rare oud wood, sandalwood and vetiver.",
    topNotes: "Rare Oud Wood, Rosewood, Cardamom",
    heartNotes: "Sichuan Pepper, Sandalwood, Vetiver",
    baseNotes: "Tonka Bean, Vanilla, Amber",
    longevity: "14+ Hours",
    sillage: "Heavy & Authoritative",
    season: "Evening / Formal / Winter",
    isBestseller: true,
    isNew: false
  },
  {
    id: "ysl-y",
    name: "Yves Saint Laurent Y",
    tagline: "Eau de Parfum · Bold & Fresh",
    category: "men",
    tags: ["men", "new"],
    price: 1950,
    sizes: [
      { size: "60ml", price: 1450 },
      { size: "100ml", price: 1950 }
    ],
    rating: 4.8,
    reviewsCount: 135,
    scentFamily: "Woody · Aromatic · Fresh",
    image: "assets/products/ysl-y.jpg",
    gallery: ["assets/products/ysl-y.jpg"],
    description:
      "A bold, woody fragrance infused with crisp apple, fresh sage, and deep geranium. Tailored for the accomplished, ambitious man who reaches his goals with poise.",
    topNotes: "Apple, Ginger, Bergamot",
    heartNotes: "Sage, Juniper Berries, Geranium",
    baseNotes: "Amberwood, Tonka Bean, Cedar, Vetiver, Olibanum",
    longevity: "12+ Hours",
    sillage: "Strong & Crisp",
    season: "All Year / Signature",
    isBestseller: false,
    isNew: true
  },
  {
    id: "miss-dior",
    name: "Miss Dior Blooming Bouquet",
    tagline: "Eau de Toilette · Parisian Couture",
    category: "women",
    tags: ["bestseller", "women"],
    price: 1850,
    sizes: [
      { size: "50ml", price: 1350 },
      { size: "100ml", price: 1850 }
    ],
    rating: 4.8,
    reviewsCount: 178,
    scentFamily: "Floral · Fresh · Romantic",
    image: "assets/products/miss-dior.jpg",
    gallery: ["assets/products/miss-dior.jpg"],
    description:
      "An instant floral rush that opens with fresh Calabrian bergamot, bursting into a radiant heart of Damask rose and peony, enveloped in a whisper of white musks.",
    topNotes: "Calabrian Bergamot, Sweet Pea",
    heartNotes: "Damascus Rose, Pink Peony",
    baseNotes: "Soft White Musk",
    longevity: "9+ Hours",
    sillage: "Gentle & Intimate",
    season: "Spring / Daytime",
    isBestseller: true,
    isNew: false
  },
  {
    id: "armani-si",
    name: "Armani Sì",
    tagline: "Eau de Parfum · Modern Chypre",
    category: "women",
    tags: ["women", "new"],
    price: 1750,
    sizes: [
      { size: "50ml", price: 1280 },
      { size: "100ml", price: 1750 }
    ],
    rating: 4.7,
    reviewsCount: 112,
    scentFamily: "Fruity · Floral · Elegant",
    image: "assets/products/armani-si.jpg",
    gallery: ["assets/products/armani-si.jpg"],
    description:
      "A tribute to modern femininity: an irresistible combination of grace, strength, and independent spirit. Deep blackcurrant nectar gives way to freesia and warm patchouli.",
    topNotes: "Blackcurrant Nectar, Italian Mandarin",
    heartNotes: "Rose de Mai, Freesia, Egyptian Neroli",
    baseNotes: "Vanilla, Patchouli, Ambroxan, Warm Woods",
    longevity: "11+ Hours",
    sillage: "Radiant & Elegant",
    season: "Autumn / Winter / Evening",
    isBestseller: false,
    isNew: true
  },
  {
    id: "good-girl",
    name: "Carolina Herrera Good Girl",
    tagline: "Eau de Parfum · Sensual & Daring",
    category: "women",
    tags: ["bestseller", "women"],
    price: 1900,
    sizes: [
      { size: "50ml", price: 1400 },
      { size: "80ml", price: 1900 }
    ],
    rating: 4.7,
    reviewsCount: 163,
    scentFamily: "Floral · Sweet · Oriental",
    image: "assets/products/good-girl.jpg",
    gallery: ["assets/products/good-girl.jpg"],
    description:
      "A fearless fusion of contrasting elements: sweet, alluring jasmine against rich cocoa and roasted tonka bean. An ultra-sensual statement for the modern woman.",
    topNotes: "Almond, Roasted Coffee, Bergamot, Lemon",
    heartNotes: "Tuberose, Jasmine Sambac, Orange Blossom",
    baseNotes: "Tonka Bean, Cacao, Vanilla, Praline, Sandalwood",
    longevity: "13+ Hours",
    sillage: "Enormous",
    season: "Night / Formal / Winter",
    isBestseller: true,
    isNew: false
  },
  {
    id: "versace-bright-crystal",
    name: "Versace Bright Crystal",
    tagline: "Eau de Toilette · Luminous Glamour",
    category: "women",
    tags: ["women"],
    price: 1550,
    sizes: [
      { size: "50ml", price: 1150 },
      { size: "90ml", price: 1550 }
    ],
    rating: 4.6,
    reviewsCount: 89,
    scentFamily: "Floral · Fruity · Musky",
    image: "assets/products/versace-bright-crystal.jpg",
    gallery: ["assets/products/versace-bright-crystal.jpg"],
    description:
      "A precious jewel of rare beauty characterized by a fresh, vibrant, floral scent. Juicy pomegranate grains, vibrant yuzu, and icy accord transition into blooming peony and magnolia.",
    topNotes: "Yuzu, Pomegranate, Frosted Ice Accord",
    heartNotes: "Peony, Lotus Blossom, Magnolia",
    baseNotes: "Sensual Musk, Mahogany, Vegetable Amber",
    longevity: "8+ Hours",
    sillage: "Moderate",
    season: "Summer / Spring / Daytime",
    isBestseller: false,
    isNew: false
  },
  {
    id: "ck-one",
    name: "CK One",
    tagline: "Eau de Toilette · Pure Universal",
    category: "unisex",
    tags: ["unisex"],
    price: 980,
    sizes: [
      { size: "50ml", price: 720 },
      { size: "100ml", price: 980 },
      { size: "200ml", price: 1350 }
    ],
    rating: 4.5,
    reviewsCount: 140,
    scentFamily: "Citrus · Green · Fresh",
    image: "assets/products/ck-one.jpg",
    gallery: ["assets/products/ck-one.jpg"],
    description:
      "The revolutionary universal fragrance designed for everyone. Fresh green tea, crisp bergamot, papaya, and cardamon rest upon a soft base of amber and musk.",
    topNotes: "Lemon, Green Notes, Bergamot, Pineapple, Mandarin",
    heartNotes: "Lily of the Valley, Jasmine, Violet, Nutmeg",
    baseNotes: "Clean Musk, Cedarwood, Sandalwood, Oakmoss",
    longevity: "7+ Hours",
    sillage: "Crisp & Intimate",
    season: "Casual / Summer / Everyday",
    isBestseller: false,
    isNew: false
  },
  {
    id: "velora-imperial-saffron",
    name: "Velora Imperial Saffron",
    tagline: "Extrait de Parfum · Royal Gold",
    category: "unisex",
    tags: ["unisex", "new", "bestseller"],
    price: 1650,
    sizes: [
      { size: "50ml", price: 1100 },
      { size: "100ml", price: 1650 }
    ],
    rating: 4.9,
    reviewsCount: 78,
    scentFamily: "Oriental · Spicy · Floral",
    image: "assets/products/velora-signature.jpg",
    gallery: ["assets/products/velora-signature.jpg"],
    description:
      "A majestic signature blending the world's most coveted red gold saffron with honeyed Taif rose and ancient golden myrrh. A crown jewel in personal fragrance.",
    topNotes: "Persian Red Saffron, Pink Peppercorn, Wild Bergamot",
    heartNotes: "Taif Rose Nectar, Somali Myrrh, Incense Smoke",
    baseNotes: "Golden Ambergris, Mysore Sandalwood, Wild Honey",
    longevity: "18+ Hours",
    sillage: "Imperial / Enormous",
    season: "Formal / Evening / Royal",
    isBestseller: true,
    isNew: true
  },
  {
    id: "creed-aventus",
    name: "Creed Aventus",
    tagline: "Eau de Parfum · The Royal Icon",
    category: "men",
    tags: ["men", "bestseller", "new"],
    price: 3600,
    sizes: [
      { size: "50ml", price: 2450 },
      { size: "100ml", price: 3600 }
    ],
    rating: 4.9,
    reviewsCount: 230,
    scentFamily: "Fruity · Chypre · Smoky",
    image: "assets/products/Audacious, confident and powerful, this signature….jpeg",
    gallery: [
      "assets/products/Audacious, confident and powerful, this signature….jpeg"
    ],
    description:
      "Audacious, confident and powerful, this signature fragrance from The House of Creed celebrates strength, vision and success. Sensual and contemporary, it blends tantalizing blackcurrant and Italian bergamot with French apple, birch, and a rich ambergris base.",
    topNotes: "Blackcurrant, Italian Bergamot, French Apple, Royal Pineapple",
    heartNotes: "Smoked Birch, Moroccan Jasmine, Patchouli, Juniper Berries",
    baseNotes: "Oakmoss, Ambergris, Musk, Rich Vanilla",
    longevity: "14+ Hours",
    sillage: "Commanding / Magnetic",
    season: "All Seasons / Signature / Connoisseur",
    isBestseller: true,
    isNew: true
  },
  {
    id: "tom-ford-ombre-leather",
    name: "Tom Ford Ombré Leather",
    tagline: "Eau de Parfum · Vast Desert Leather",
    category: "unisex",
    tags: ["unisex", "men", "new", "bestseller"],
    price: 2650,
    sizes: [
      { size: "50ml", price: 1850 },
      { size: "100ml", price: 2650 }
    ],
    rating: 4.9,
    reviewsCount: 164,
    scentFamily: "Warm Leather · Floral · Earthy",
    image: "assets/products/Tom Ford Ombré Leather Bottle on Black Leather Biker Jacket – Edgy Fragrance.jpeg",
    gallery: [
      "assets/products/Tom Ford Ombré Leather Bottle on Black Leather Biker Jacket – Edgy Fragrance.jpeg",
      "assets/products/Tom Ford Obré Leather.jpeg"
    ],
    description:
      "Tactile sensuality unrolls like a desert highway. Rich black leather is enveloped by spiced cardamom, sweet patchouli, and night-blooming jasmine, crafting an aura of pure, unrestrained luxury.",
    topNotes: "Cardamom, Saffron, Fresh Bergamot",
    heartNotes: "Black Leather, Sambac Jasmine, Orris Root",
    baseNotes: "Warm Amber, Patchouli, Green Moss",
    longevity: "16+ Hours",
    sillage: "Enveloping & Sophisticated",
    season: "Autumn / Winter / Evening",
    isBestseller: true,
    isNew: true
  },
  {
    id: "valentino-uomo-born-in-roma",
    name: "Valentino Born In Roma Uomo",
    tagline: "Eau de Toilette · Haute Roman Heritage",
    category: "men",
    tags: ["men", "new"],
    price: 1950,
    sizes: [
      { size: "50ml", price: 1350 },
      { size: "100ml", price: 1950 },
      { size: "150ml", price: 2450 }
    ],
    rating: 4.8,
    reviewsCount: 142,
    scentFamily: "Woody · Aromatic · Mineral",
    image: "assets/products/Men's Uomo Born In Roma Eau de Toilette Fragrance Collection - Macy's.jpeg",
    gallery: [
      "assets/products/Men's Uomo Born In Roma Eau de Toilette Fragrance Collection - Macy's.jpeg",
      "assets/products/Perfume Valentino.jpeg"
    ],
    description:
      "A modern tribute to Rome's timeless street culture. Aromatic clary sage and smoked vetiver collide with a vibrant mineral salt accord and spicy ginger, bottled in Valentino's iconic rockstud flacon.",
    topNotes: "Mineral Salt, Violet Leaf, Italian Bergamot",
    heartNotes: "Spicy Ginger, Clary Sage",
    baseNotes: "Smoked Vetiver, Guaiac Wood",
    longevity: "10+ Hours",
    sillage: "Radiant & Modern",
    season: "Spring / Summer / Night Out",
    isBestseller: false,
    isNew: true
  },
  {
    id: "versace-eros-flame",
    name: "Versace Eros Flame",
    tagline: "Eau de Parfum · Fiery Passion",
    category: "men",
    tags: ["men", "new", "bestseller"],
    price: 1750,
    sizes: [
      { size: "50ml", price: 1200 },
      { size: "100ml", price: 1750 },
      { size: "200ml", price: 2350 }
    ],
    rating: 4.8,
    reviewsCount: 118,
    scentFamily: "Citrus · Spicy · Woody Amber",
    image: "assets/products/1107955945865721371.jpeg",
    gallery: [
      "assets/products/1107955945865721371.jpeg"
    ],
    description:
      "A fragrance for a strong, passionate, self-confident man. Cold and warm, sweet and spicy, light and shadow contrast vivaciously with fresh Italian chinotto, fiery black pepper, wild mountain rosemary, and Haitian vetiver.",
    topNotes: "Chinotto, Italian Lemon, Mandarin Orange, Black Pepper, Rosemary",
    heartNotes: "Pepperwood, Geranium, Wild Rose",
    baseNotes: "Texas Cedar, Indonesian Patchouli, Tonka Bean, Bourbon Vanilla, Sandalwood",
    longevity: "12+ Hours",
    sillage: "Potent & Magnetic",
    season: "Autumn / Winter / Date Night",
    isBestseller: true,
    isNew: true
  },
  {
    id: "viktor-rolf-spicebomb-infrared",
    name: "Spicebomb Infrared",
    tagline: "Eau de Parfum · High Heat Incendiary",
    category: "men",
    tags: ["men", "new"],
    price: 1850,
    sizes: [
      { size: "50ml", price: 1280 },
      { size: "90ml", price: 1850 }
    ],
    rating: 4.8,
    reviewsCount: 95,
    scentFamily: "Spicy · Amber · Fiery",
    image: "assets/products/Spice Bomb Infrared.jpeg",
    gallery: [
      "assets/products/Spice Bomb Infrared.jpeg"
    ],
    description:
      "The hottest fragrance in the Spicebomb collection. An explosion of fiery red habanero chili, sharp red berries, and cinnamon leaf turning up the heat over benzoin and smoldering tobacco resin.",
    topNotes: "Red Habanero Pepper, Red Berries, Persian Saffron",
    heartNotes: "Cinnamon Leaf, Red Pepper",
    baseNotes: "Benzoin Resin, Smoked Tobacco, Amber Woods",
    longevity: "12+ Hours",
    sillage: "Warm & Seductive",
    season: "Winter / Night / Seduction",
    isBestseller: false,
    isNew: true
  },
  {
    id: "givenchy-gentleman-reserve-privee",
    name: "Givenchy Gentleman Réserve Privée",
    tagline: "Eau de Parfum · Whisky & Iris Reserve",
    category: "men",
    tags: ["men", "unisex", "new"],
    price: 2100,
    sizes: [
      { size: "60ml", price: 1450 },
      { size: "100ml", price: 2100 }
    ],
    rating: 4.9,
    reviewsCount: 156,
    scentFamily: "Woody · Floral · Gourmand",
    image: "assets/products/876020565007813109.jpeg",
    gallery: [
      "assets/products/876020565007813109.jpeg"
    ],
    description:
      "Born from the unexpected meeting of master perfumers and a Scottish whisky master distiller. Precious powdery iris absolute is steeped in aromatic whisky barrel essence, warm amber, and creamy cedarwood.",
    topNotes: "Calabrian Bergamot, Whisky Absolute",
    heartNotes: "Powdery Iris, Chestnut, Benzoin Siam",
    baseNotes: "Virginia Cedarwood, Haitian Vetiver, Patchouli",
    longevity: "14+ Hours",
    sillage: "Intimate & Aristocratic",
    season: "Autumn / Winter / Evening Reserve",
    isBestseller: false,
    isNew: true
  },
  {
    id: "lattafa-asad-elixir",
    name: "Lattafa Asad Elixir",
    tagline: "Extrait de Parfum · Sultans Reserve",
    category: "men",
    tags: ["men", "unisex", "new", "bestseller"],
    price: 850,
    sizes: [
      { size: "100ml", price: 850 }
    ],
    rating: 4.8,
    reviewsCount: 205,
    scentFamily: "Oriental · Spicy · Amber",
    image: "assets/products/Lattafa Asad Elixir For Men.jpeg",
    gallery: [
      "assets/products/Lattafa Asad Elixir For Men.jpeg"
    ],
    description:
      "An opulent Oriental elixir crafted for commanding presence. Black pepper and pineapple burst forth into intense tobacco, coffee, and dry woods, anchored by ambergris and vanilla for extraordinary longevity.",
    topNotes: "Black Pepper, Juicy Pineapple, Dark Tobacco",
    heartNotes: "Roasted Coffee, Indonesian Patchouli, Dark Iris",
    baseNotes: "Ambergris, Bourbon Vanilla, Dry Woods, Benzoin",
    longevity: "15+ Hours",
    sillage: "Potent & Room-Filling",
    season: "All Seasons / Evening Power",
    isBestseller: true,
    isNew: true
  },
  {
    id: "tom-ford-black-orchid",
    name: "Tom Ford Black Orchid",
    tagline: "Eau de Toilette · Elusive Dark Glamour",
    category: "unisex",
    tags: ["unisex", "women", "men", "new"],
    price: 2450,
    sizes: [
      { size: "50ml", price: 1680 },
      { size: "100ml", price: 2450 }
    ],
    rating: 4.8,
    reviewsCount: 189,
    scentFamily: "Warm Floral · Oriental · Dark Truffle",
    image: "assets/products/download.jpeg",
    gallery: [
      "assets/products/download.jpeg",
      "assets/products/tom-ford-black-orchid-secondary.jpeg"
    ],
    description:
      "A luxurious, dark, and sensual fragrance of rich dark accords and an alluring potion of black orchids and spice. A radiant iteration of the iconic Tom Ford signature with open tuberose and black plum accents.",
    topNotes: "Black Truffle, Ylang-Ylang, Blackcurrant, Italian Bergamot",
    heartNotes: "Black Orchid, Tuberose, Rich Floral Spices",
    baseNotes: "Indonesian Patchouli, Incense, Vetiver, Vanilla, Sandalwood",
    longevity: "14+ Hours",
    sillage: "Intoxicating & Sensual",
    season: "Autumn / Winter / Gala Evening",
    isBestseller: false,
    isNew: true
  }
,
  {
    "id": "dior-sauvage",
    "name": "Dior Sauvage",
    "tagline": "Eau de Parfum · Raw Nobility & Vast Desert",
    "category": "men",
    "tags": [
      "men",
      "bestseller",
      "new"
    ],
    "price": 2450,
    "sizes": [
      {
        "size": "60ml",
        "price": 1750
      },
      {
        "size": "100ml",
        "price": 2450
      }
    ],
    "rating": 4.9,
    "reviewsCount": 312,
    "scentFamily": "Aromatic · Fresh Spicy · Amber",
    "image": "assets/dior-sauvage.jpg",
    "gallery": [
      "assets/dior-sauvage.jpg"
    ],
    "description": "An act of creation inspired by wide-open spaces. An ozone blue sky sprawled above a rocky landscape, white-hot beneath the desert sun. A powerfully fresh composition with radiant Calabrian bergamot and a noble trail of ambroxan.",
    "topNotes": "Calabrian Bergamot, Sichuan Pepper, Elemi",
    "heartNotes": "Lavender, Pink Pepper, Geranium, Vetiver",
    "baseNotes": "Ambroxan, Cedarwood, Labdanum",
    "longevity": "14+ Hours",
    "sillage": "Commanding / Magnetic",
    "season": "All Seasons / Signature / Daytime & Evening",
    "isBestseller": true,
    "isNew": true
  },
  {
    "id": "jpg-le-male-elixir",
    "name": "Jean Paul Gaultier Le Male Elixir",
    "tagline": "Parfum · Gilded Honey & Smoldering Seduction",
    "category": "men",
    "tags": [
      "men",
      "bestseller",
      "new"
    ],
    "price": 2350,
    "sizes": [
      {
        "size": "75ml",
        "price": 1680
      },
      {
        "size": "125ml",
        "price": 2350
      }
    ],
    "rating": 4.9,
    "reviewsCount": 198,
    "scentFamily": "Amber · Aromatic · Sweet Honey",
    "image": "assets/jpg-le-male-elixir.jpg",
    "gallery": [
      "assets/jpg-le-male-elixir.jpg"
    ],
    "description": "An incendiary wave of pure gold. Sizzling lavender encounters radiant tonka bean and tropical benzoin wrapped in golden honeyed nectar. Intensely sensual and designed to burn into memory.",
    "topNotes": "Sparkling Mint, Fine Lavender",
    "heartNotes": "Golden Honey, Bourbon Vanilla, Benzoin",
    "baseNotes": "Tonka Bean, Tobacco Leaf, Virginian Cedarwood",
    "longevity": "16+ Hours",
    "sillage": "Intoxicating / Room-Filling",
    "season": "Autumn / Winter / Date Night",
    "isBestseller": true,
    "isNew": true
  },
  {
    "id": "armani-acqua-di-gio-profondo",
    "name": "Armani Acqua di Giò Profondo",
    "tagline": "Eau de Parfum · Deep Ocean Intensity",
    "category": "men",
    "tags": [
      "men",
      "bestseller",
      "new"
    ],
    "price": 2200,
    "sizes": [
      {
        "size": "75ml",
        "price": 1550
      },
      {
        "size": "125ml",
        "price": 2200
      }
    ],
    "rating": 4.8,
    "reviewsCount": 174,
    "scentFamily": "Aquatic · Aromatic · Mineral",
    "image": "assets/armani-acqua-di-gio-profondo.jpg",
    "gallery": [
      "assets/armani-acqua-di-gio-profondo.jpg"
    ],
    "description": "A profound plunge into the mesmerizing depths of the sea. Marine accords blend seamlessly with aromatic essences of rosemary, cypress, and lavender over modern mineral amber and woody patchouli.",
    "topNotes": "Marine Accords, Green Mandarin, Calabrian Bergamot",
    "heartNotes": "Rosemary, Lavender, Cypress, Lentisque",
    "baseNotes": "Mineral Amber, Indonesian Patchouli, Musk",
    "longevity": "12+ Hours",
    "sillage": "Crisp & Oceanic",
    "season": "Spring / Summer / Office & Weekend",
    "isBestseller": true,
    "isNew": true
  },
  {
    "id": "paco-rabanne-1-million",
    "name": "Paco Rabanne 1 Million",
    "tagline": "Eau de Parfum · Opulent Gold & Warm Amber",
    "category": "men",
    "tags": [
      "men",
      "bestseller",
      "new"
    ],
    "price": 2100,
    "sizes": [
      {
        "size": "50ml",
        "price": 1450
      },
      {
        "size": "100ml",
        "price": 2100
      }
    ],
    "rating": 4.8,
    "reviewsCount": 265,
    "scentFamily": "Warm Spicy · Leather · Amber",
    "image": "assets/paco-rabanne-1-million.jpg",
    "gallery": [
      "assets/paco-rabanne-1-million.jpg"
    ],
    "description": "The insolent mark of success. A decadent collision of solar leather, salty tuberose, and warm pine resins laced with cinnamon and blood mandarin in an iconic golden flacon.",
    "topNotes": "Blood Mandarin, Frosted Grapefruit, Peppermint",
    "heartNotes": "Cinnamon Bark, Rose Absolute, Blond Leather",
    "baseNotes": "Amberketal, White Wood, Indian Patchouli",
    "longevity": "14+ Hours",
    "sillage": "Extravagant / Head-Turning",
    "season": "Evening / Nightlife / Celebration",
    "isBestseller": true,
    "isNew": true
  },
  {
    "id": "paco-rabanne-invictus",
    "name": "Paco Rabanne Invictus",
    "tagline": "Eau de Parfum · The Scent of Triumph",
    "category": "men",
    "tags": [
      "men",
      "new"
    ],
    "price": 1950,
    "sizes": [
      {
        "size": "50ml",
        "price": 1350
      },
      {
        "size": "100ml",
        "price": 1950
      }
    ],
    "rating": 4.7,
    "reviewsCount": 182,
    "scentFamily": "Woody · Fresh Aquatic · Citrus",
    "image": "assets/paco-rabanne-invictus.jpg",
    "gallery": [
      "assets/paco-rabanne-invictus.jpg"
    ],
    "description": "An ecstasy of freshness colliding with magnetic wood. Invigorating marine grapefruit pairs against warm guaiac wood, ambergris, and bay leaf for an undeniable champion's trail.",
    "topNotes": "Grapefruit Zest, Marine Sea Salt, Mandarin Orange",
    "heartNotes": "Bay Leaf, Hedione Jasmine",
    "baseNotes": "Guaiac Wood, Oakmoss, Patchouli, Ambergris",
    "longevity": "11+ Hours",
    "sillage": "Dynamic & Radiant",
    "season": "Spring / Summer / Active Luxury",
    "isBestseller": false,
    "isNew": true
  },
  {
    "id": "tom-ford-noir-extreme",
    "name": "Tom Ford Noir Extreme",
    "tagline": "Eau de Parfum · Drenched in Amber & Kulfi",
    "category": "men",
    "tags": [
      "men",
      "bestseller",
      "new"
    ],
    "price": 2750,
    "sizes": [
      {
        "size": "50ml",
        "price": 1950
      },
      {
        "size": "100ml",
        "price": 2750
      }
    ],
    "rating": 4.9,
    "reviewsCount": 147,
    "scentFamily": "Warm Spicy · Amber · Gourmand",
    "image": "assets/tom-ford-noir-extreme.jpg",
    "gallery": [
      "assets/tom-ford-noir-extreme.jpg"
    ],
    "description": "An amber-drenched, woody oriental fragrance with a tantalizing, delectable heart. Capturing the aspect of a man that relishes in immoderation, daring to be extraordinary with rare Indian kulfi accord.",
    "topNotes": "Cardamom, Nutmeg, Saffron, Mandarin Oil, Neroli",
    "heartNotes": "Indian Kulfi Accord, Rose Absolute, Jasmine, Orange Flower",
    "baseNotes": "Bourbon Vanilla, Amber Resin, Sandalwood, Cedarwood",
    "longevity": "15+ Hours",
    "sillage": "Opulent & Aristocratic",
    "season": "Autumn / Winter / Black Tie Gala",
    "isBestseller": true,
    "isNew": true
  },
  {
    "id": "dg-the-one-for-men",
    "name": "Dolce & Gabbana The One for Men",
    "tagline": "Eau de Parfum · Timeless Tobacco & Warm Spices",
    "category": "men",
    "tags": [
      "men",
      "bestseller",
      "new"
    ],
    "price": 2050,
    "sizes": [
      {
        "size": "50ml",
        "price": 1400
      },
      {
        "size": "100ml",
        "price": 2050
      }
    ],
    "rating": 4.9,
    "reviewsCount": 220,
    "scentFamily": "Oriental · Woody · Amber",
    "image": "assets/dg-the-one-for-men.jpg",
    "gallery": [
      "assets/dg-the-one-for-men.jpg"
    ],
    "description": "The essence of modern masculine charisma. An intense opening of coriander and basil melts into warm cardamom and ginger, grounded on a rich bed of cured tobacco and amber.",
    "topNotes": "Grapefruit, Coriander, Italian Basil",
    "heartNotes": "Warm Cardamom, Ginger, Orange Blossom",
    "baseNotes": "Rich Tobacco, Golden Amber, Cedarwood",
    "longevity": "12+ Hours",
    "sillage": "Intimate & Irresistible",
    "season": "Autumn / Winter / Romantic Dinners",
    "isBestseller": true,
    "isNew": true
  },
  {
    "id": "montblanc-explorer",
    "name": "Montblanc Explorer",
    "tagline": "Eau de Parfum · An Unconventional Journey",
    "category": "men",
    "tags": [
      "men",
      "new"
    ],
    "price": 1850,
    "sizes": [
      {
        "size": "60ml",
        "price": 1250
      },
      {
        "size": "100ml",
        "price": 1850
      }
    ],
    "rating": 4.8,
    "reviewsCount": 165,
    "scentFamily": "Woody · Aromatic · Leather",
    "image": "assets/montblanc-explorer.jpg",
    "gallery": [
      "assets/montblanc-explorer.jpg"
    ],
    "description": "An invitation to a fantastic journey around the globe. Green bergamot from Italy contrasts with the rich vetiver of Haiti and an exclusive, velvety patchouli from Sulawesi.",
    "topNotes": "Italian Bergamot, Pink Pepper, French Clary Sage",
    "heartNotes": "Haitian Vetiver, Rich Leather",
    "baseNotes": "Akigalawood, Ambroxan, Indonesian Patchouli, Cacao Pod",
    "longevity": "12+ Hours",
    "sillage": "Crisp & Versatile",
    "season": "All Seasons / Everyday Sophistication",
    "isBestseller": false,
    "isNew": true
  },
  {
    "id": "azzaro-the-most-wanted",
    "name": "Azzaro The Most Wanted",
    "tagline": "Eau de Parfum Intense · Fiery Toffee & Bourbon Vanilla",
    "category": "men",
    "tags": [
      "men",
      "bestseller",
      "new"
    ],
    "price": 2150,
    "sizes": [
      {
        "size": "50ml",
        "price": 1480
      },
      {
        "size": "100ml",
        "price": 2150
      }
    ],
    "rating": 4.9,
    "reviewsCount": 190,
    "scentFamily": "Woody · Amber · Gourmand",
    "image": "assets/azzaro-the-most-wanted.jpg",
    "gallery": [
      "assets/azzaro-the-most-wanted.jpg"
    ],
    "description": "A weapon of mass seduction for the daring man. Addictive toffee caramel merges with Guatemalan cardamom and glowing amber wood for an ultra-sophisticated, intensely seductive trail.",
    "topNotes": "Red Cardamom, Ginger Zest",
    "heartNotes": "Melting Toffee Caramel, Lavender",
    "baseNotes": "Bourbon Vanilla, Smoked Amber Wood, Vetiver",
    "longevity": "15+ Hours",
    "sillage": "Potent / Magnetic",
    "season": "Autumn / Winter / Date Night",
    "isBestseller": true,
    "isNew": true
  },
  {
    "id": "azzaro-wanted-by-night",
    "name": "Azzaro Wanted by Night",
    "tagline": "Eau de Parfum · Cinnamon, Cedar & White Tobacco",
    "category": "men",
    "tags": [
      "men",
      "new"
    ],
    "price": 1980,
    "sizes": [
      {
        "size": "50ml",
        "price": 1350
      },
      {
        "size": "100ml",
        "price": 1980
      }
    ],
    "rating": 4.8,
    "reviewsCount": 142,
    "scentFamily": "Oriental · Spicy · Woody",
    "image": "assets/azzaro-wanted-by-night.jpg",
    "gallery": [
      "assets/azzaro-wanted-by-night.jpg"
    ],
    "description": "The olfactory expression of an eternal night of celebration. Explosive cinnamon and warm red cedar meet the mystery of white tobacco, leaving an intoxicating, unforgettable impression.",
    "topNotes": "Cinnamon Bark, Mandarin Orange, Lavender, Lemon",
    "heartNotes": "Red Cedar, Incense, Cumin, Fruity Accords",
    "baseNotes": "White Tobacco, Vanilla, Leather, Benzoin, Cypress",
    "longevity": "13+ Hours",
    "sillage": "Warm & Enveloping",
    "season": "Autumn / Winter / Evening Party",
    "isBestseller": false,
    "isNew": true
  },
  {
    "id": "hugo-boss-bottled",
    "name": "Hugo Boss Bottled Elixir",
    "tagline": "Parfum Intense · Captivating Incense & Cedar",
    "category": "men",
    "tags": [
      "men",
      "new"
    ],
    "price": 1950,
    "sizes": [
      {
        "size": "50ml",
        "price": 1320
      },
      {
        "size": "100ml",
        "price": 1950
      }
    ],
    "rating": 4.8,
    "reviewsCount": 158,
    "scentFamily": "Woody · Amber · Incense",
    "image": "assets/hugo-boss-bottled.jpg",
    "gallery": [
      "assets/hugo-boss-bottled.jpg"
    ],
    "description": "A captivating, highly concentrated elixir for the man of purpose. Incense and cardamom top notes radiate before unveiling a warm heart of patchouli and vetiver, settled on rich cedarwood.",
    "topNotes": "Frankincense, Warm Cardamom",
    "heartNotes": "Patchouli Essence, Haitian Vetiver",
    "baseNotes": "Cedarwood, Labdanum Resin",
    "longevity": "13+ Hours",
    "sillage": "Refined & Authoritative",
    "season": "Autumn / Winter / Executive",
    "isBestseller": false,
    "isNew": true
  },
  {
    "id": "carolina-herrera-bad-boy",
    "name": "Carolina Herrera Bad Boy",
    "tagline": "Eau de Toilette · Bold Contrast of Light & Shadow",
    "category": "men",
    "tags": [
      "men",
      "bestseller",
      "new"
    ],
    "price": 2100,
    "sizes": [
      {
        "size": "50ml",
        "price": 1450
      },
      {
        "size": "100ml",
        "price": 2100
      }
    ],
    "rating": 4.8,
    "reviewsCount": 175,
    "scentFamily": "Oriental · Spicy · Tonka",
    "image": "assets/carolina-herrera-bad-boy.jpg",
    "gallery": [
      "assets/carolina-herrera-bad-boy.jpg"
    ],
    "description": "A fragrant tribute to the multi-faceted modern rebel. Black and white pepper mingle with Italian green bergamot, leading to an intoxicating heart of cedarwood and sage over cocoa and tonka bean.",
    "topNotes": "White Pepper, Black Pepper, Italian Green Bergamot",
    "heartNotes": "Cedarwood, Clary Sage",
    "baseNotes": "Tonka Bean, Roasted Cocoa, Amberwood",
    "longevity": "11+ Hours",
    "sillage": "Bold & Playful",
    "season": "All Seasons / Evening Edge",
    "isBestseller": true,
    "isNew": true
  },
  {
    "id": "prada-luna-rossa-carbon",
    "name": "Prada Luna Rossa Carbon",
    "tagline": "Eau de Toilette · Metallic Lavender & Dark Coal",
    "category": "men",
    "tags": [
      "men",
      "new"
    ],
    "price": 2200,
    "sizes": [
      {
        "size": "50ml",
        "price": 1500
      },
      {
        "size": "100ml",
        "price": 2200
      }
    ],
    "rating": 4.9,
    "reviewsCount": 205,
    "scentFamily": "Fougère · Mineral · Aromatic",
    "image": "assets/prada-luna-rossa-carbon.jpg",
    "gallery": [
      "assets/prada-luna-rossa-carbon.jpg"
    ],
    "description": "A visionary fougère fragrance combining steam-distilled botanicals and carbon minerals. Crisp Italian bergamot collides with metallic lavender, wet soil, and radiant ambroxan for extraordinary contemporary refinement.",
    "topNotes": "Italian Bergamot, Black Pepper",
    "heartNotes": "Lavender, Soil Tincture, Metallic & Water Notes",
    "baseNotes": "Ambroxan, Indonesian Patchouli",
    "longevity": "13+ Hours",
    "sillage": "Polished & Razor-Sharp",
    "season": "All Seasons / Signature / Daytime & Executive",
    "isBestseller": false,
    "isNew": true
  }
];

// 2. STATE MANAGEMENT
const safeParseJSON = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch (err) {
    return fallback;
  }
};

const STATE = {
  cart: safeParseJSON("velora_cart", []),
  wishlist: safeParseJSON("velora_wishlist", []),
  compareList: safeParseJSON("velora_compare", []),
  rewardsPoints: Number(localStorage.getItem("velora_rewards_points") || "250"),
  activeDiscount: safeParseJSON("velora_active_discount", null),
  currentFilter: "all",
  activeScentNote: "all",
  activePriceRange: "all",
  sortOption: "featured",
  searchQuery: "",
  selectedProduct: null,
  activeModalSize: null,
  activeModalQty: 1,
  activeEngraving: { enabled: false, text: "", style: "serif" }
};

// 3. UTILITIES
const formatGHC = (amount) => `GH₵ ${Number(amount).toLocaleString("en-GH", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

const saveState = () => {
  localStorage.setItem("velora_cart", JSON.stringify(STATE.cart));
  localStorage.setItem("velora_wishlist", JSON.stringify(STATE.wishlist));
  updateBadges();
};

const showToast = (message, icon = "") => {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span class="toast-icon">${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3200);
};

// 4. BADGE COUNTERS
const updateBadges = () => {
  const cartCountEl = document.getElementById("cartCountBadge");
  const wishlistCountEl = document.getElementById("wishlistCountBadge");
  const totalCartQty = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cartCountEl) cartCountEl.textContent = totalCartQty;
  if (wishlistCountEl) wishlistCountEl.textContent = STATE.wishlist.length;
};

// 5. RENDER BEST SELLERS SECTION
const renderBestSellers = () => {
  const container = document.getElementById("bestsellersGrid");
  if (!container) return;

  const bestSellers = PRODUCTS.filter((p) => p.isBestseller).slice(0, 5);

  container.innerHTML = bestSellers
    .map((product) => {
      const isWishlisted = STATE.wishlist.includes(product.id);
      return `
      <div class="bestseller-card" data-id="${product.id}">
        <div class="card-img-wrapper">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <span class="card-badge">Bestseller</span>
          <button class="wishlist-btn-overlay ${isWishlisted ? "active" : ""}" 
                  onclick="toggleWishlist('${product.id}', event)" 
                  title="Save to Wishlist" aria-label="Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <div class="card-content">
          <span class="perfume-family-tag">${product.scentFamily.split("·")[0].trim()}</span>
          <h4 class="perfume-name">${product.name}</h4>
          <p class="perfume-desc">${product.description}</p>
          <div class="card-price-row">
            <div class="perfume-price">${formatGHC(product.price)}</div>
            <div class="perfume-rating">
              <span>${product.rating}</span>
            </div>
          </div>
          <div class="card-actions-grid">
            <button class="btn btn-dark btn-card-action" onclick="openProductModal('${product.id}')">Details</button>
            <button class="btn btn-primary btn-card-action" onclick="quickAddToCart('${product.id}', event)">Add To Cart</button>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
};

// 6. RENDER SHOP CATALOG
const renderShop = () => {
  const container = document.getElementById("shopProductsGrid");
  const countEl = document.getElementById("shopResultsCount");
  if (!container) return;

  let filtered = [...PRODUCTS];

  // Category filter
  if (STATE.currentFilter === "men") {
    filtered = filtered.filter((p) => p.category === "men" || p.tags.includes("men"));
  } else if (STATE.currentFilter === "women") {
    filtered = filtered.filter((p) => p.category === "women" || p.tags.includes("women"));
  } else if (STATE.currentFilter === "unisex") {
    filtered = filtered.filter((p) => p.category === "unisex" || p.tags.includes("unisex"));
  } else if (STATE.currentFilter === "bestsellers") {
    filtered = filtered.filter((p) => p.isBestseller);
  } else if (STATE.currentFilter === "new") {
    filtered = filtered.filter((p) => p.isNew);
  }

  // Scent note filter
  if (STATE.activeScentNote !== "all") {
    filtered = filtered.filter((p) =>
      p.scentFamily.toLowerCase().includes(STATE.activeScentNote.toLowerCase()) ||
      p.topNotes.toLowerCase().includes(STATE.activeScentNote.toLowerCase()) ||
      p.heartNotes.toLowerCase().includes(STATE.activeScentNote.toLowerCase()) ||
      p.baseNotes.toLowerCase().includes(STATE.activeScentNote.toLowerCase())
    );
  }

  // Price range filter
  if (STATE.activePriceRange !== "all") {
    if (STATE.activePriceRange === "under-1200") {
      filtered = filtered.filter((p) => p.price < 1200);
    } else if (STATE.activePriceRange === "1200-1800") {
      filtered = filtered.filter((p) => p.price >= 1200 && p.price <= 1800);
    } else if (STATE.activePriceRange === "1800-plus") {
      filtered = filtered.filter((p) => p.price > 1800);
    }
  }

  // Search filter
  if (STATE.searchQuery.trim() !== "") {
    const q = STATE.searchQuery.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.scentFamily.toLowerCase().includes(q)
    );
  }

  // Sort
  if (STATE.sortOption === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (STATE.sortOption === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (STATE.sortOption === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    if (countEl) countEl.textContent = `Showing 0 of ${PRODUCTS.length} perfumes`;
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 1rem;">No fragrances match your selected filters.</p>
        <button class="btn btn-outline" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  if (countEl) {
    countEl.textContent = `Showing 1 to ${filtered.length} of ${PRODUCTS.length} perfumes`;
  }

  container.innerHTML = filtered
    .map((product) => {
      const isWishlisted = STATE.wishlist.includes(product.id);
      return `
      <div class="product-card" data-id="${product.id}">
        <div class="card-img-wrapper">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          ${product.isNew ? '<span class="card-badge" style="background:#9e7836;">New Arrival</span>' : product.isBestseller ? '<span class="card-badge">Bestseller</span>' : ""}
          <button class="wishlist-btn-overlay ${isWishlisted ? "active" : ""}" 
                  onclick="toggleWishlist('${product.id}', event)" 
                  title="Save to Wishlist" aria-label="Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <div class="card-body">
          <span class="product-notes-badge">${product.scentFamily}</span>
          <h4 class="product-title">${product.name}</h4>
          <p class="product-desc">${product.description}</p>
          <div class="product-price-row">
            <div class="product-card-price">${formatGHC(product.price)}</div>
            <div class="perfume-rating">${product.rating}</div>
          </div>
          <div class="card-actions-grid">
            <button class="btn btn-dark btn-card-action" onclick="openProductModal('${product.id}')">View Details</button>
            <button class="btn btn-primary btn-card-action" onclick="quickAddToCart('${product.id}', event)">Add To Cart</button>
          </div>
          <button type="button" class="compare-toggle-btn ${STATE.compareList && STATE.compareList.includes(product.id) ? 'active' : ''}" onclick="toggleCompareProduct('${product.id}', event)">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>
            <span>${STATE.compareList && STATE.compareList.includes(product.id) ? 'In Comparison ✓' : '+ Compare Perfume'}</span>
          </button>
        </div>
      </div>
    `;
    })
    .join("");
};

// 7. FILTER CONTROLS
window.setCategoryFilter = (cat) => {
  STATE.currentFilter = cat;
  document.querySelectorAll(".pill-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category === cat);
  });
  renderShop();
};

window.setScentNoteFilter = (note) => {
  STATE.activeScentNote = note;
  renderShop();
};

window.setPriceRangeFilter = (range) => {
  STATE.activePriceRange = range;
  renderShop();
};

window.setSortOption = (sort) => {
  STATE.sortOption = sort;
  renderShop();
};

window.resetAllFilters = () => {
  STATE.currentFilter = "all";
  STATE.activeScentNote = "all";
  STATE.activePriceRange = "all";
  STATE.sortOption = "featured";
  STATE.searchQuery = "";

  document.querySelectorAll(".pill-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category === "all");
  });
  const sortSel = document.getElementById("shopSortSelect");
  if (sortSel) sortSel.value = "featured";

  document.querySelectorAll('input[name="scentNote"]').forEach((i) => (i.checked = i.value === "all"));
  document.querySelectorAll('input[name="priceRange"]').forEach((i) => (i.checked = i.value === "all"));

  renderShop();
  showToast("Filters reset to default");
};

// 8. PRODUCT DETAILS MODAL
window.openProductModal = (productId) => {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  STATE.selectedProduct = product;
  STATE.activeModalSize = product.sizes ? product.sizes[product.sizes.length > 1 ? 1 : 0] : { size: "100ml", price: product.price };
  STATE.activeModalQty = 1;

  const modal = document.getElementById("productModal");
  if (!modal) {
    window.location.href = `shop.html#product-${productId}`;
    return;
  }

  // Fill in content
  const imgEl = document.getElementById("modalProductImage");
  if (imgEl) { imgEl.src = product.image; imgEl.alt = product.name; }
  const titleEl = document.getElementById("modalProductTitle");
  if (titleEl) titleEl.textContent = product.name;
  const tagEl = document.getElementById("modalProductTagline");
  if (tagEl) tagEl.textContent = product.tagline;
  const priceEl = document.getElementById("modalProductPrice");
  if (priceEl) priceEl.textContent = formatGHC(STATE.activeModalSize.price);
  const descEl = document.getElementById("modalProductDesc");
  if (descEl) descEl.textContent = product.description;
  const topNotesEl = document.getElementById("modalTopNotes");
  if (topNotesEl) {
    topNotesEl.innerHTML = (product.topNotes || "").split(",").map(t => `<span class="pyramid-accord-tag">${t.trim()}</span>`).join(" ");
  }
  const heartNotesEl = document.getElementById("modalHeartNotes");
  if (heartNotesEl) {
    heartNotesEl.innerHTML = (product.heartNotes || "").split(",").map(t => `<span class="pyramid-accord-tag">${t.trim()}</span>`).join(" ");
  }
  const baseNotesEl = document.getElementById("modalBaseNotes");
  if (baseNotesEl) {
    baseNotesEl.innerHTML = (product.baseNotes || "").split(",").map(t => `<span class="pyramid-accord-tag">${t.trim()}</span>`).join(" ");
  }
  const longevityEl = document.getElementById("modalLongevity");
  if (longevityEl) longevityEl.textContent = product.longevity;
  const sillageEl = document.getElementById("modalSillage");
  if (sillageEl) sillageEl.textContent = product.sillage;
  document.getElementById("modalQtyInput").value = STATE.activeModalQty;

  // Reset Engraving Customizer State
  STATE.activeEngraving = { enabled: false, text: "", style: "serif" };
  const engravingCheckbox = document.getElementById("engravingCheckbox");
  if (engravingCheckbox) engravingCheckbox.checked = false;
  const engravingFields = document.getElementById("engravingFieldsRow");
  if (engravingFields) engravingFields.classList.remove("active");
  const engravingOverlay = document.getElementById("modalEngravingOverlay");
  if (engravingOverlay) engravingOverlay.classList.remove("active");
  const engravingInput = document.getElementById("engravingTextInput");
  if (engravingInput) engravingInput.value = "";
  const engravingPreview = document.getElementById("modalEngravingPreview");
  if (engravingPreview) {
    engravingPreview.textContent = "INITIALS";
    engravingPreview.className = "engraved-text-preview";
  }

  // Render Thumbnails
  const thumbsContainer = document.getElementById("modalGalleryThumbs");
  if (thumbsContainer) {
    const gallery = product.gallery || [product.image];
    thumbsContainer.innerHTML = gallery
      .map(
        (imgUrl, idx) => `
        <div class="thumb-item ${idx === 0 ? "active" : ""}" onclick="changeModalImage('${imgUrl}', this)">
          <img src="${imgUrl}" alt="${product.name}" loading="lazy" />
        </div>
      `
      )
      .join("");
  }

  // Render Size buttons
  const sizeContainer = document.getElementById("modalSizePills");
  if (sizeContainer && product.sizes) {
    sizeContainer.innerHTML = product.sizes
      .map(
        (s) => `
        <button class="size-btn ${s.size === STATE.activeModalSize.size ? "active" : ""}" 
                onclick="selectModalSize('${s.size}', ${s.price}, this)">
          ${s.size} (${formatGHC(s.price)})
        </button>
      `
      )
      .join("");
  }

  // Render Related Fragrances
  const relatedContainer = document.getElementById("modalRelatedGrid");
  if (relatedContainer) {
    const related = PRODUCTS.filter((p) => p.id !== product.id && (p.category === product.category || p.isBestseller)).slice(0, 4);
    relatedContainer.innerHTML = related
      .map(
        (rp) => `
        <div class="related-item" onclick="openProductModal('${rp.id}')">
          <img src="${rp.image}" alt="${rp.name}" loading="lazy" />
          <div class="related-title">${rp.name}</div>
          <div class="related-price">${formatGHC(rp.price)}</div>
        </div>
      `
      )
      .join("");
  }

  // Render Connoisseur Reviews
  if (window.renderProductReviews) {
    window.renderProductReviews(product.id);
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeProductModal = () => {
  const modal = document.getElementById("productModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
};

window.changeModalImage = (src, el) => {
  document.getElementById("modalProductImage").src = src;
  document.querySelectorAll(".thumb-item").forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
};

window.selectModalSize = (size, price, btnEl) => {
  STATE.activeModalSize = { size, price };
  document.getElementById("modalProductPrice").textContent = formatGHC(price * STATE.activeModalQty);
  document.querySelectorAll(".size-btn").forEach((b) => b.classList.remove("active"));
  btnEl.classList.add("active");
};

window.adjustModalQty = (delta) => {
  STATE.activeModalQty = Math.max(1, STATE.activeModalQty + delta);
  const input = document.getElementById("modalQtyInput");
  if (input) input.value = STATE.activeModalQty;
  if (STATE.activeModalSize) {
    document.getElementById("modalProductPrice").textContent = formatGHC(STATE.activeModalSize.price * STATE.activeModalQty);
  }
};

window.addModalProductToCart = () => {
  if (!STATE.selectedProduct) return;
  const engravingData = (STATE.activeEngraving && STATE.activeEngraving.enabled && STATE.activeEngraving.text.trim()) 
    ? { text: STATE.activeEngraving.text.trim(), style: STATE.activeEngraving.style } 
    : null;

  const item = {
    id: STATE.selectedProduct.id,
    name: STATE.selectedProduct.name,
    image: STATE.selectedProduct.image,
    size: STATE.activeModalSize ? STATE.activeModalSize.size : "100ml",
    price: STATE.activeModalSize ? STATE.activeModalSize.price : STATE.selectedProduct.price,
    quantity: STATE.activeModalQty,
    engraving: engravingData
  };
  addToCart(item);
  closeProductModal();
  openCartDrawer();
};

window.buyNowFromModal = () => {
  if (!STATE.selectedProduct) return;
  const engravingData = (STATE.activeEngraving && STATE.activeEngraving.enabled && STATE.activeEngraving.text.trim()) 
    ? { text: STATE.activeEngraving.text.trim(), style: STATE.activeEngraving.style } 
    : null;

  const item = {
    id: STATE.selectedProduct.id,
    name: STATE.selectedProduct.name,
    image: STATE.selectedProduct.image,
    size: STATE.activeModalSize ? STATE.activeModalSize.size : "100ml",
    price: STATE.activeModalSize ? STATE.activeModalSize.price : STATE.selectedProduct.price,
    quantity: STATE.activeModalQty,
    engraving: engravingData
  };
  addToCart(item);
  closeProductModal();
  openCheckoutModal();
};

// 9. CART MANAGEMENT
const addToCart = (item) => {
  const existingIdx = STATE.cart.findIndex(
    (c) => c.id === item.id && c.size === item.size && JSON.stringify(c.engraving || null) === JSON.stringify(item.engraving || null)
  );
  if (existingIdx > -1) {
    STATE.cart[existingIdx].quantity += item.quantity;
  } else {
    STATE.cart.push(item);
  }
  saveState();
  renderCartDrawer();
  showToast(`Added ${item.name} (${item.size}) to cart`);
};

window.quickAddToCart = (productId, event) => {
  if (event) event.stopPropagation();
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const defaultSize = product.sizes ? product.sizes[product.sizes.length > 1 ? 1 : 0] : { size: "100ml", price: product.price };
  addToCart({
    id: product.id,
    name: product.name,
    image: product.image,
    size: defaultSize.size,
    price: defaultSize.price,
    quantity: 1
  });
};

window.updateCartItemQty = (index, delta) => {
  if (STATE.cart[index]) {
    STATE.cart[index].quantity += delta;
    if (STATE.cart[index].quantity <= 0) {
      STATE.cart.splice(index, 1);
    }
    saveState();
    renderCartDrawer();
  }
};

window.removeCartItem = (index) => {
  if (STATE.cart[index]) {
    const removedName = STATE.cart[index].name;
    STATE.cart.splice(index, 1);
    saveState();
    renderCartDrawer();
    showToast(`Removed ${removedName} from cart`);
  }
};

const renderCartDrawer = () => {
  const container = document.getElementById("cartItemsBody");
  const subtotalEl = document.getElementById("cartSubtotalAmount");
  const shippingBarFill = document.getElementById("shippingBarFill");
  const shippingText = document.getElementById("shippingProgressText");

  if (!container) return;

  const subtotal = STATE.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeThreshold = 1500; // Free delivery in Accra above GH₵ 1,500

  if (subtotalEl) subtotalEl.textContent = formatGHC(subtotal);

  if (shippingBarFill && shippingText) {
    const progress = Math.min(100, Math.round((subtotal / freeThreshold) * 100));
    shippingBarFill.style.width = `${progress}%`;
    if (subtotal >= freeThreshold) {
      shippingText.innerHTML = `<strong>Free Delivery Unlocked!</strong> You qualify for free delivery across Accra & Tema.`;
    } else {
      const remaining = freeThreshold - subtotal;
      shippingText.innerHTML = `Add <strong>${formatGHC(remaining)}</strong> more for <strong>Free Delivery</strong> in Accra!`;
    }
  }

  if (STATE.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-message">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p style="font-size: 1.1rem; color: #fff; margin-bottom: 0.5rem;">Your Cart is Empty</p>
        <p style="font-size: 0.85rem; margin-bottom: 1.5rem;">Discover our handcrafted collection and choose your signature fragrance.</p>
        <button class="btn btn-primary" onclick="closeCartDrawer(); window.location.href='shop.html';">Shop Fragrances</button>
      </div>
    `;
    const checkoutBtn = document.getElementById("cartCheckoutBtn");
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  const checkoutBtn = document.getElementById("cartCheckoutBtn");
  if (checkoutBtn) checkoutBtn.disabled = false;

  container.innerHTML = STATE.cart
    .map(
      (item, idx) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" loading="lazy" />
        <div class="cart-item-details">
          <h5 class="cart-item-title">${item.name}</h5>
          <span class="cart-item-size">Size: ${item.size}</span>
          ${item.engraving && item.engraving.text ? `<span class="cart-item-engraving">Engraved: "${item.engraving.text}" (${item.engraving.style})</span>` : ""}
          <span class="cart-item-price">${formatGHC(item.price * item.quantity)}</span>
          <div class="cart-item-controls">
            <div class="qty-counter" style="height: 32px;">
              <button class="qty-btn" style="width: 28px;" onclick="updateCartItemQty(${idx}, -1)">−</button>
              <span class="qty-input" style="width: 28px; line-height: 32px;">${item.quantity}</span>
              <button class="qty-btn" style="width: 28px;" onclick="updateCartItemQty(${idx}, 1)">+</button>
            </div>
            <button class="btn-remove-item" onclick="removeCartItem(${idx})">Remove</button>
          </div>
        </div>
      </div>
    `
    )
    .join("");
};

window.openCartDrawer = () => {
  renderCartDrawer();
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartDrawerOverlay");
  if (drawer && overlay) {
    drawer.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
};

window.closeCartDrawer = () => {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartDrawerOverlay");
  if (drawer && overlay) {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
};

// 10. WISHLIST MANAGEMENT
window.toggleWishlist = (productId, event) => {
  if (event) event.stopPropagation();
  const idx = STATE.wishlist.indexOf(productId);
  const product = PRODUCTS.find((p) => p.id === productId);
  if (idx > -1) {
    STATE.wishlist.splice(idx, 1);
    showToast(`Removed from wishlist`, "");
  } else {
    STATE.wishlist.push(productId);
    showToast(`Added ${product ? product.name : ""} to wishlist`, "");
  }
  saveState();
  renderBestSellers();
  renderShop();
  renderWishlistDrawer();
};

window.openWishlistDrawer = () => {
  renderWishlistDrawer();
  const drawer = document.getElementById("wishlistDrawer");
  const overlay = document.getElementById("wishlistDrawerOverlay");
  if (drawer && overlay) {
    drawer.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
};

window.closeWishlistDrawer = () => {
  const drawer = document.getElementById("wishlistDrawer");
  const overlay = document.getElementById("wishlistDrawerOverlay");
  if (drawer && overlay) {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
};

const renderWishlistDrawer = () => {
  const container = document.getElementById("wishlistItemsBody");
  if (!container) return;

  if (STATE.wishlist.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-message">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <p style="font-size: 1.1rem; color: #fff; margin-bottom: 0.5rem;">Your Wishlist is Empty</p>
        <p style="font-size: 0.85rem; margin-bottom: 1.5rem;">Tap the heart icon on any perfume to save it for later.</p>
      </div>
    `;
    return;
  }

  const wishlistedProducts = PRODUCTS.filter((p) => STATE.wishlist.includes(p.id));

  container.innerHTML = wishlistedProducts
    .map(
      (p) => `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.name}" class="cart-item-img" />
        <div class="cart-item-details">
          <h5 class="cart-item-title">${p.name}</h5>
          <span class="cart-item-size">${p.scentFamily}</span>
          <span class="cart-item-price">${formatGHC(p.price)}</span>
          <div class="cart-item-controls">
            <button class="btn btn-primary" style="padding: 0.35rem 0.8rem; font-size: 0.72rem;" onclick="quickAddToCart('${p.id}'); toggleWishlist('${p.id}');">Move to Cart</button>
            <button class="btn-remove-item" onclick="toggleWishlist('${p.id}')">Remove</button>
          </div>
        </div>
      </div>
    `
    )
    .join("");
};

// 11. CHECKOUT / CONCIERGE ORDERING (GHANA CEDIS, NO ONLINE PAYMENT)
window.openCheckoutModal = () => {
  closeCartDrawer();
  if (STATE.cart.length === 0) {
    showToast("Please add fragrances to your cart first!");
    return;
  }

  const modal = document.getElementById("checkoutModal");
  if (!modal) return;

  const subtotal = STATE.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Render mini list in checkout
  const itemsContainer = document.getElementById("checkoutItemsMiniList");
  if (itemsContainer) {
    itemsContainer.innerHTML = STATE.cart
      .map(
        (item) => `
        <div class="order-item-mini-row" style="display:flex; justify-content:space-between; margin-bottom:0.4rem; font-size:0.85rem;">
          <div>
            <span>${item.name} (${item.size}) × ${item.quantity}</span>
            ${item.engraving && item.engraving.text ? `<div style="font-size:0.72rem; color:var(--gold-dark); font-weight:600;">Engraving: "${item.engraving.text}" (${item.engraving.style})</div>` : ""}
          </div>
          <strong>${formatGHC(item.price * item.quantity)}</strong>
        </div>
      `
      )
      .join("");
  }

  // Apply active rewards voucher discount if present
  let discountAmount = 0;
  if (STATE.activeDiscount) {
    if (STATE.activeDiscount.type === "fixed") {
      discountAmount = Math.min(subtotal, STATE.activeDiscount.value);
    } else if (STATE.activeDiscount.type === "percent") {
      discountAmount = Math.round((subtotal * STATE.activeDiscount.value) / 100);
    }
  }

  const discountedSubtotal = Math.max(0, subtotal - discountAmount);
  const deliveryFee = discountedSubtotal >= 1500 ? 0 : 45;
  const grandTotal = discountedSubtotal + deliveryFee;

  const subtotalEl = document.getElementById("checkoutSubtotal");
  if (subtotalEl) {
    if (discountAmount > 0) {
      subtotalEl.innerHTML = `<span>${formatGHC(discountedSubtotal)}</span> <span style="font-size:0.75rem; color:#25d366; text-decoration:line-through;">${formatGHC(subtotal)}</span>`;
    } else {
      subtotalEl.textContent = formatGHC(subtotal);
    }
  }
  const deliveryFeeEl = document.getElementById("checkoutDeliveryFee");
  if (deliveryFeeEl) deliveryFeeEl.textContent = deliveryFee === 0 ? "FREE" : formatGHC(deliveryFee);
  const grandTotalEl = document.getElementById("checkoutGrandTotal");
  if (grandTotalEl) grandTotalEl.textContent = formatGHC(grandTotal);

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeCheckoutModal = () => {
  const modal = document.getElementById("checkoutModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
};

window.toggleGiftWrapOption = (isChecked) => {
  const wrap = document.getElementById("giftMessageWrap");
  if (wrap) wrap.classList.toggle("active", isChecked);
};

window.submitOrderForm = (e) => {
  e.preventDefault();
  const form = e.target;
  const fullName = form.fullName.value.trim();
  const phone = form.phone.value.trim();
  const whatsapp = form.whatsapp.value.trim();
  const region = form.region ? form.region.value : "Greater Accra";
  const address = form.address.value.trim();
  const notes = form.notes ? form.notes.value.trim() : "";

  // Feature 7: Gift Wrapping & Personalized Message
  const isGiftWrap = form.giftWrap ? form.giftWrap.checked : false;
  const giftMessage = form.giftMessage ? form.giftMessage.value.trim() : "";

  if (!fullName || !phone || !whatsapp || !address) {
    alert("Please fill in all required delivery contact fields.");
    return;
  }

  // Generate Reference Number
  const orderRef = "VEL-" + Math.floor(100000 + Math.random() * 900000);
  const subtotal = STATE.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  let discountAmount = 0;
  if (STATE.activeDiscount) {
    if (STATE.activeDiscount.type === "fixed") {
      discountAmount = Math.min(subtotal, STATE.activeDiscount.value);
    } else if (STATE.activeDiscount.type === "percent") {
      discountAmount = Math.round((subtotal * STATE.activeDiscount.value) / 100);
    }
  }

  const discountedSubtotal = Math.max(0, subtotal - discountAmount);
  const deliveryFee = discountedSubtotal >= 1500 ? 0 : 45;
  const grandTotal = discountedSubtotal + deliveryFee;

  // Award loyalty points: 1 point per GH₵ 10 spent + bonus
  const earnedPoints = Math.round(grandTotal / 10);
  STATE.rewardsPoints = (STATE.rewardsPoints || 0) + earnedPoints;
  localStorage.setItem("velora_rewards_points", STATE.rewardsPoints.toString());
  if (STATE.activeDiscount) {
    localStorage.removeItem("velora_active_discount");
    STATE.activeDiscount = null;
  }

  const orderData = {
    ref: orderRef,
    date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }),
    customer: { fullName, phone, whatsapp, region, address, notes },
    giftWrap: { enabled: isGiftWrap, message: giftMessage },
    items: [...STATE.cart],
    subtotal,
    discountAmount,
    deliveryFee,
    grandTotal,
    earnedPoints
  };

  // Save latest order & append to orders ledger
  localStorage.setItem("velora_last_order", JSON.stringify(orderData));
  try {
    const existingOrders = JSON.parse(localStorage.getItem("velora_all_orders") || "[]");
    existingOrders.unshift(orderData);
    localStorage.setItem("velora_all_orders", JSON.stringify(existingOrders));
  } catch (err) {
    console.error("Order ledger save error:", err);
  }

  // Clear Cart
  STATE.cart = [];
  saveState();
  renderCartDrawer();
  closeCheckoutModal();

  // Show Confirmation Modal
  showOrderConfirmation(orderData);
};

const showOrderConfirmation = (order) => {
  const modal = document.getElementById("confirmationModal");
  if (!modal) return;

  const refEl = document.getElementById("confirmOrderRef");
  if (refEl) refEl.textContent = `#${order.ref}`;
  const nameEl = document.getElementById("confirmCustomerName");
  if (nameEl) nameEl.textContent = order.customer.fullName;
  const confirmContactEl = document.getElementById("confirmCustomerContact");
  if (confirmContactEl) confirmContactEl.textContent = order.customer.whatsapp || order.customer.phone;
  const confirmLocEl = document.getElementById("confirmDeliveryLocation");
  if (confirmLocEl) confirmLocEl.textContent = `${order.customer.address}, ${order.customer.region}`;
  const confirmTotalEl = document.getElementById("confirmTotalAmount");
  if (confirmTotalEl) confirmTotalEl.textContent = formatGHC(order.grandTotal);

  // Set WhatsApp button link
  const itemsText = order.items
    .map((i) => `• ${i.name} (${i.size})${i.engraving && i.engraving.text ? ` [Engraved: "${i.engraving.text}" (${i.engraving.style})]` : ""} × ${i.quantity} = GH₵ ${i.price * i.quantity}`)
    .join("\n");

  let giftSection = "";
  if (order.giftWrap && order.giftWrap.enabled) {
    giftSection = `\n*Complimentary Gift Wrap:* Requested\n${order.giftWrap.message ? `*Gift Card Inscription:* "${order.giftWrap.message}"\n` : ""}`;
  }

  const message = `Hello Velora Perfumes! I just placed an order on your website:\n\n*Order Ref:* #${order.ref}\n*Customer:* ${order.customer.fullName}\n*Phone:* ${order.customer.phone}\n*WhatsApp:* ${order.customer.whatsapp}\n*Delivery Location:* ${order.customer.address}, ${order.customer.region}\n\n*Fragrances Ordered:*\n${itemsText}${giftSection}\n\n*Total Payable on Delivery:* ${formatGHC(order.grandTotal)}\n${order.customer.notes ? `*Delivery Notes:* ${order.customer.notes}\n` : ""}\nPlease confirm my delivery dispatch schedule. Thank you!`;

  const waBtn = document.getElementById("confirmWhatsAppBtn");
  if (waBtn) {
    const encoded = encodeURIComponent(message);
    waBtn.href = `https://wa.me/233245550192?text=${encoded}`;
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeConfirmationModal = () => {
  const modal = document.getElementById("confirmationModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
};

// 12. LIVE SEARCH MODAL
window.openSearchModal = () => {
  const modal = document.getElementById("searchModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    setTimeout(() => document.getElementById("searchModalInput").focus(), 100);
  }
};

window.closeSearchModal = () => {
  const modal = document.getElementById("searchModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
};

window.handleLiveSearch = (e) => {
  const query = e.target.value.toLowerCase().trim();
  const resultsContainer = document.getElementById("searchResultsList");
  if (!resultsContainer) return;

  if (query.length === 0) {
    resultsContainer.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 2rem;">Start typing to search perfumes by name, notes or family...</p>`;
    return;
  }

  const matches = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.scentFamily.toLowerCase().includes(query) ||
      p.topNotes.toLowerCase().includes(query) ||
      p.heartNotes.toLowerCase().includes(query) ||
      p.baseNotes.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 2rem;">No perfumes found matching "${query}".</p>`;
    return;
  }

  resultsContainer.innerHTML = matches
    .map(
      (p) => `
      <div class="search-result-item" onclick="closeSearchModal(); openProductModal('${p.id}')">
        <img src="${p.image}" alt="${p.name}" class="search-result-img" />
        <div style="flex-grow: 1;">
          <h5 style="font-family: var(--font-display); color: #fff; font-size: 0.95rem;">${p.name}</h5>
          <span style="font-size: 0.75rem; color: var(--gold-primary);">${p.scentFamily}</span>
        </div>
        <div style="font-family: var(--font-display); font-weight: 700; color: var(--gold-light);">
          ${formatGHC(p.price)}
        </div>
      </div>
    `
    )
    .join("");
};

// 13. CONTACT HANDLER
window.handleContactSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const nameInput = form.querySelector("#contactFullName") || form.querySelector("input[type='text']");
  const name = nameInput && nameInput.value ? nameInput.value.trim() : "Valued Customer";
  showToast(`Thank you, ${name}! Your inquiry has been sent to our concierge.`, "");
  form.reset();
};

// 14. NEWSLETTER HANDLER
window.handleNewsletterSubmit = (e) => {
  e.preventDefault();
  const input = (e.target && e.target.querySelector('input[type="email"]')) || document.getElementById("newsletterEmailInput");
  const email = input ? input.value.trim() : "";
  if (!email) return;

  showToast(`Welcome to the Velora Circle! Your 15% VIP invitation code has been sent to ${email}.`, "");
  if (input) input.value = "";
};

// 15. MOBILE NAVIGATION
window.toggleMobileNav = () => {
  const drawer = document.getElementById("mobileNavDrawer");
  const overlay = document.getElementById("mobileNavOverlay");
  if (!drawer) return;
  const isActive = drawer.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active", isActive);
  document.body.style.overflow = isActive ? "hidden" : "";
};

window.closeMobileNav = () => {
  const drawer = document.getElementById("mobileNavDrawer");
  const overlay = document.getElementById("mobileNavOverlay");
  if (drawer) drawer.classList.remove("active");
  if (overlay) overlay.classList.remove("active");
  document.body.style.overflow = "";
};

// 16. SPRINT 2 LUXURY ENHANCEMENTS

// 16A. CONCIERGE PILL & QUICK ACTIONS PANEL
window.toggleConciergePanel = () => {
  const panel = document.getElementById("veloraConciergePanel");
  if (panel) panel.classList.toggle("active");
};

window.closeConciergePanel = () => {
  const panel = document.getElementById("veloraConciergePanel");
  if (panel) panel.classList.remove("active");
};

window.openConciergeWhatsApp = () => {
  const pageTitle = (document.title.split("|")[0] || "Velora Perfumes").trim();
  const text = encodeURIComponent(`Hello Velora Concierge! I am browsing the ${pageTitle} page and would like personalized fragrance recommendations & delivery details.`);
  window.open(`https://wa.me/233245550192?text=${text}`, "_blank");
  window.closeConciergePanel();
};

// 16B. FLACON ENGRAVING CUSTOMIZER
window.toggleEngravingCustomizer = () => {
  const checkbox = document.getElementById("engravingCheckbox");
  const fields = document.getElementById("engravingFieldsRow");
  const overlay = document.getElementById("modalEngravingOverlay");

  const isChecked = checkbox ? checkbox.checked : false;
  if (!STATE.activeEngraving) {
    STATE.activeEngraving = { enabled: false, text: "", style: "serif" };
  }
  STATE.activeEngraving.enabled = isChecked;

  if (fields) fields.classList.toggle("active", isChecked);
  if (overlay) overlay.classList.toggle("active", isChecked);

  if (isChecked) {
    const input = document.getElementById("engravingTextInput");
    if (input) {
      input.focus();
      handleEngravingInput({ target: input });
    }
  }
};

window.handleEngravingInput = (e) => {
  const val = (e.target.value || "").toUpperCase().slice(0, 14);
  e.target.value = val;
  if (!STATE.activeEngraving) {
    STATE.activeEngraving = { enabled: true, text: "", style: "serif" };
  }
  STATE.activeEngraving.text = val;

  const preview = document.getElementById("modalEngravingPreview");
  if (preview) {
    preview.textContent = val || "INITIALS";
  }
};

window.selectEngravingFont = (style, btnEl) => {
  if (!STATE.activeEngraving) {
    STATE.activeEngraving = { enabled: true, text: "", style: "serif" };
  }
  STATE.activeEngraving.style = style;
  document.querySelectorAll(".engraving-font-btn").forEach((b) => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");

  const preview = document.getElementById("modalEngravingPreview");
  if (preview) {
    preview.classList.remove("script-style", "minimal-style");
    if (style === "script") preview.classList.add("script-style");
    else if (style === "minimal") preview.classList.add("minimal-style");
  }
};

// 16C. SIGNATURE SCENT FINDER QUIZ
const QUIZ_QUESTIONS = [
  {
    stepName: "Setting & Routine",
    title: "Where will you wear this fragrance most?",
    desc: "Pick the daily context or setting that matters most to you.",
    options: [
      { key: "regal", title: "Evenings out, events & special occasions", desc: "Deep woods, rich amber, and lingering smoky notes that make a statement." },
      { key: "fresh", title: "Warm days, office & daily wear", desc: "Clean bergamot, sea minerals, and light woods that stay crisp in the heat." },
      { key: "sensual", title: "Intimate dinners & close gatherings", desc: "Warm vanilla blossom, honeyed amber, and soft golden resins." },
      { key: "romantic", title: "Daytime outings & weekends", desc: "Fresh dewy florals, blooming petals, and bright fruits." }
    ]
  },
  {
    stepName: "Fragrance Profile",
    title: "What scent profile do you naturally enjoy?",
    desc: "Think about the candles, soaps, or perfumes you've liked before.",
    options: [
      { key: "woody", title: "Woody & Resinous", desc: "Rich oud, cedar, sandalwood, and gentle warm spice." },
      { key: "amber", title: "Warm Amber & Gourmand", desc: "Madagascar vanilla, roasted tonka bean, and sweet amber." },
      { key: "floral", title: "Fresh Rose & White Florals", desc: "Centifolia roses, soft peony, and dewy magnolia." },
      { key: "fresh", title: "Citrus, Marine & Herbal", desc: "Italian bergamot, coastal breezes, and clean green notes." }
    ]
  },
  {
    stepName: "Presence & Wear",
    title: "How noticeable should your scent trail be?",
    desc: "Choose the kind of presence you feel comfortable carrying throughout the day.",
    options: [
      { key: "monumental", title: "Noticeable & Long-lasting", desc: "Commands attention when you walk in and lingers easily all day." },
      { key: "radiant", title: "Balanced & Polished", desc: "Clear scent trail when you greet people without overpowering the room." },
      { key: "intimate", title: "Subtle & Close to Skin", desc: "A soft, personal skin scent for those standing next to you." }
    ]
  }
];

let QUIZ_STATE = {
  currentStep: 0,
  answers: {},
  matchedProduct: null
};

window.openScentQuiz = () => {
  if (typeof window.closeConciergePanel === "function") {
    window.closeConciergePanel();
  }
  QUIZ_STATE.currentStep = 0;
  QUIZ_STATE.answers = {};
  QUIZ_STATE.matchedProduct = null;
  const modal = document.getElementById("scentQuizModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    renderQuiz();
  }
};

window.closeScentQuiz = () => {
  const modal = document.getElementById("scentQuizModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
};

window.renderQuiz = () => {
  const stepContainer = document.getElementById("quizStepContainer");
  if (!stepContainer) return;

  const currentStep = QUIZ_STATE.currentStep;

  // Update Progress bars
  for (let i = 0; i < 3; i++) {
    const bar = document.getElementById(`quizBarStep${i + 1}`);
    if (bar) {
      bar.classList.toggle("active", i <= currentStep);
    }
  }

  // Check if finished
  if (currentStep >= QUIZ_QUESTIONS.length) {
    renderQuizResult();
    return;
  }

  const q = QUIZ_QUESTIONS[currentStep];
  const selectedKey = QUIZ_STATE.answers[currentStep];

  stepContainer.innerHTML = `
    <div class="human-quiz-header">
      <div class="human-quiz-step-label">Step ${currentStep + 1} of 3 — ${q.stepName}</div>
      <h3 class="human-quiz-title">${q.title}</h3>
      <p class="human-quiz-sub">${q.desc}</p>
    </div>

    <div class="human-quiz-cards">
      ${q.options
        .map(
          (opt) => `
        <button type="button" class="human-quiz-card ${selectedKey === opt.key ? "selected" : ""}" onclick="selectQuizOption('${opt.key}')">
          <div class="human-quiz-radio">
            <span class="human-quiz-radio-inner"></span>
          </div>
          <div class="human-quiz-text">
            <h4>${opt.title}</h4>
            <p>${opt.desc}</p>
          </div>
        </button>
      `
        )
        .join("")}
    </div>

    <div class="human-quiz-actions">
      ${currentStep > 0 ? `<button type="button" class="btn btn-outline human-quiz-back-btn" onclick="prevQuizStep()">Back</button>` : `<span></span>`}
      <button type="button" class="btn btn-primary human-quiz-next-btn" id="quizNextBtn" ${!selectedKey ? "disabled style='opacity:0.4; cursor:not-allowed;'" : ""} onclick="nextQuizStep()">
        ${currentStep === QUIZ_QUESTIONS.length - 1 ? "See Recommendation" : "Continue"}
      </button>
    </div>
  `;
};

window.selectQuizOption = (key) => {
  QUIZ_STATE.answers[QUIZ_STATE.currentStep] = key;
  renderQuiz();
};

window.nextQuizStep = () => {
  if (!QUIZ_STATE.answers[QUIZ_STATE.currentStep]) return;
  QUIZ_STATE.currentStep++;
  renderQuiz();
};

window.prevQuizStep = () => {
  if (QUIZ_STATE.currentStep > 0) {
    QUIZ_STATE.currentStep--;
    renderQuiz();
  }
};

window.renderQuizResult = () => {
  const stepContainer = document.getElementById("quizStepContainer");
  if (!stepContainer) return;

  const ans0 = QUIZ_STATE.answers[0];
  const ans1 = QUIZ_STATE.answers[1];

  let matched = PRODUCTS.find((p) => p.id === "velora-midnight-oud");

  if (ans0 === "fresh" || ans1 === "fresh") {
    matched = PRODUCTS.find((p) => p.id === "velora-ocean-breeze") || matched;
  } else if (ans0 === "romantic" || ans1 === "floral") {
    matched = PRODUCTS.find((p) => p.id === "velora-blush-petals") || matched;
  } else if (ans0 === "sensual" || ans1 === "amber") {
    matched = PRODUCTS.find((p) => p.id === "velora-amber-bliss") || matched;
  } else if (ans0 === "regal" || ans1 === "woody") {
    matched = PRODUCTS.find((p) => p.id === "velora-midnight-oud") || matched;
  }

  QUIZ_STATE.matchedProduct = matched;

  stepContainer.innerHTML = `
    <div class="human-quiz-result-top">
      <div class="human-result-tag">Recommended for Your Preferences</div>
      <h3 class="human-result-heading">We think you'll love ${matched.name}</h3>
      <p class="human-result-subtext">Based on when and how you plan to wear it, this fragrance matches your desired profile and wear time.</p>
    </div>

    <div class="human-result-card">
      <div class="human-result-img-box">
        <img src="${matched.image}" alt="${matched.name}" class="human-result-img" />
      </div>
      <div class="human-result-details">
        <div class="human-result-meta">
          <span class="human-result-family">${matched.category || "Extrait de Parfum"}</span>
          <span class="meta-dot">·</span>
          <span>100ml</span>
        </div>
        <h4 class="human-result-name">${matched.name}</h4>
        <div class="human-result-price">${formatGHC(matched.price)}</div>
        <p class="human-result-desc">${matched.description}</p>
        
        <div class="human-result-notes-grid">
          <div><strong>Top:</strong> ${matched.topNotes}</div>
          <div><strong>Heart:</strong> ${matched.heartNotes}</div>
          <div><strong>Base:</strong> ${matched.baseNotes}</div>
        </div>
      </div>
    </div>

    <div class="human-result-actions">
      <button type="button" class="btn btn-primary" onclick="addQuizMatchToBag()">Add to Bag</button>
      <button type="button" class="btn btn-outline" style="border-color:#d5cfc5; color:var(--text-dark);" onclick="closeScentQuiz(); openProductModal('${matched.id}')">View Bottle Details</button>
      <button type="button" class="human-retake-btn" onclick="openScentQuiz()">Start Over</button>
    </div>
  `;
};

window.addQuizMatchToBag = () => {
  if (!QUIZ_STATE.matchedProduct) return;
  quickAddToCart(QUIZ_STATE.matchedProduct.id);
  closeScentQuiz();
  openCartDrawer();
};

// 16D. LIVE ORDER TRACKER MODAL
window.openOrderTrackerModal = (orderRef) => {
  window.closeConciergePanel();
  const modal = document.getElementById("orderTrackerModal");
  if (!modal) return;

  const lastOrder = safeParseJSON("velora_last_order", null);
  const input = document.getElementById("trackerOrderInput");

  if (orderRef) {
    if (input) input.value = orderRef;
    window.trackOrderLookup(orderRef);
  } else if (lastOrder && lastOrder.ref) {
    if (input) input.value = lastOrder.ref;
    window.trackOrderLookup(lastOrder.ref);
  } else {
    if (input) input.value = "";
    const results = document.getElementById("trackerResultsArea");
    if (results) results.innerHTML = `<p style="text-align:center; color:var(--text-muted); padding:1.5rem;">Enter your Order Reference (e.g. VEL-123456) to track its atelier status.</p>`;
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeOrderTrackerModal = () => {
  const modal = document.getElementById("orderTrackerModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
};

window.trackOrderLookup = (refOverride) => {
  const input = document.getElementById("trackerOrderInput");
  const ref = (refOverride || (input ? input.value.trim().toUpperCase() : "")).replace("#", "");
  const results = document.getElementById("trackerResultsArea");
  if (!results) return;

  if (!ref) {
    results.innerHTML = `<p style="color:#d9534f; text-align:center;">Please enter a valid order reference number.</p>`;
    return;
  }

  const lastOrder = safeParseJSON("velora_last_order", null);
  const isMatchingSaved = lastOrder && lastOrder.ref === ref;

  const customerName = isMatchingSaved ? lastOrder.customer.fullName : "VIP Client";
  const address = isMatchingSaved ? `${lastOrder.customer.address}, ${lastOrder.customer.region}` : "Accra Metropolitan Area, Ghana";
  const total = isMatchingSaved ? formatGHC(lastOrder.grandTotal) : "GH₵ 1,450";

  results.innerHTML = `
    <div class="tracker-info-card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
        <span style="font-size:0.75rem; text-transform:uppercase; color:var(--text-muted); font-weight:600;">Reference: <strong>#${ref}</strong></span>
        <span style="display:inline-block; padding:2px 8px; background:rgba(37,211,102,0.12); color:#25d366; font-size:0.72rem; font-weight:700; border-radius:4px;">IN TRANSIT</span>
      </div>
      <div style="font-size:0.9rem; margin-bottom:0.3rem;"><strong>Recipient:</strong> ${customerName}</div>
      <div style="font-size:0.85rem; color:var(--text-body); margin-bottom:0.3rem;"><strong>Destination:</strong> ${address}</div>
      <div style="font-size:0.85rem; color:var(--text-body);"><strong>Total on Delivery:</strong> <span style="color:var(--gold-dark); font-weight:700;">${total}</span> (Cash / MoMo on Arrival)</div>
    </div>

    <div class="tracker-steps">
      <div class="tracker-step-item completed">
        <div class="tracker-step-dot">•</div>
        <div class="tracker-step-name">1. Order Confirmed & Concierge Assigned</div>
        <div class="tracker-step-desc">Order recorded in our central atelier database.</div>
      </div>
      <div class="tracker-step-item completed">
        <div class="tracker-step-dot">•</div>
        <div class="tracker-step-name">2. Hand-Poured & Batch Inspected</div>
        <div class="tracker-step-desc">30% Extrait flacon filled, inspected, and atomized.</div>
      </div>
      <div class="tracker-step-item completed">
        <div class="tracker-step-dot">•</div>
        <div class="tracker-step-name">3. Velvet Presentation Casket Sealed</div>
        <div class="tracker-step-desc">Hand-packed with luxury gold wax seal and greeting card.</div>
      </div>
      <div class="tracker-step-item active">
        <div class="tracker-step-dot">•</div>
        <div class="tracker-step-name">4. Dispatched with Private Accra Courier</div>
        <div class="tracker-step-desc">In transit with dedicated courier rider for doorstep handover.</div>
      </div>
      <div class="tracker-step-item">
        <div class="tracker-step-dot">5</div>
        <div class="tracker-step-name">5. Concierge Delivery & Payment Collection</div>
        <div class="tracker-step-desc">Unboxing inspection & payment via Cash or Mobile Money.</div>
      </div>
    </div>

    <div style="text-align:center;">
      <a href="https://wa.me/233245550192?text=${encodeURIComponent(`Hello Velora Concierge, I would like an update on delivery for Order #${ref}.`)}" 
         target="_blank" rel="noopener" class="btn btn-primary" style="display:inline-block; text-decoration:none; width:100%; text-align:center;">
        Inquire via WhatsApp Concierge (+233 24 555 0192)
      </a>
    </div>
  `;
};

// 16E. SCENT LAYERING LAB
window.openLayeringLab = () => {
  window.closeConciergePanel();
  const modal = document.getElementById("layeringLabModal");
  if (!modal) return;

  const baseSelect = document.getElementById("layeringBaseSelect");
  const accentSelect = document.getElementById("layeringAccentSelect");

  if (baseSelect && accentSelect) {
    const optionsHtml = PRODUCTS.map((p) => `<option value="${p.id}">${p.name} (${p.scentFamily})</option>`).join("");
    baseSelect.innerHTML = optionsHtml;
    accentSelect.innerHTML = optionsHtml;

    baseSelect.value = "velora-midnight-oud";
    accentSelect.value = "velora-blush-petals";
  }

  updateLayeringSimulation();
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeLayeringLab = () => {
  const modal = document.getElementById("layeringLabModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
};

window.updateLayeringSimulation = () => {
  const baseSelect = document.getElementById("layeringBaseSelect");
  const accentSelect = document.getElementById("layeringAccentSelect");
  const slider = document.getElementById("layeringRatioSlider");

  if (!baseSelect || !accentSelect || !slider) return;

  const baseP = PRODUCTS.find((p) => p.id === baseSelect.value) || PRODUCTS[0];
  const accentP = PRODUCTS.find((p) => p.id === accentSelect.value) || PRODUCTS[1];
  const basePercent = Number(slider.value);
  const accentPercent = 100 - basePercent;

  const ratioText = document.getElementById("layeringRatioText");
  if (ratioText) {
    ratioText.textContent = `${basePercent}% Base (${baseP.name.replace("Velora ", "")}) · ${accentPercent}% Accent (${accentP.name.replace("Velora ", "")})`;
  }

  const combinedPrice = baseP.price + accentP.price;
  const bundleDiscounted = Math.round(combinedPrice * 0.9); // 10% Duo Privilege
  const savings = combinedPrice - bundleDiscounted;

  const resultCard = document.getElementById("layeringResultCard");
  if (resultCard) {
    resultCard.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
        <span style="font-size:0.75rem; letter-spacing:0.15em; color:var(--gold-accent); text-transform:uppercase; font-weight:700;">ALCHEMICAL FUSION RESULT</span>
        <span style="font-size:0.75rem; color:#25d366; font-weight:700; background:rgba(37,211,102,0.15); padding:2px 8px; border-radius:50px;">97% Olfactory Harmony</span>
      </div>
      <h4 style="font-family:var(--font-serif); font-size:1.25rem; color:#fff; margin-bottom:0.4rem;">
        ${baseP.name.replace("Velora ", "")} × ${accentP.name.replace("Velora ", "")}
      </h4>
      <p style="font-size:0.82rem; color:#cfcac0; line-height:1.45; margin-bottom:0.8rem;">
        An opulent, multidimensional sillage. The deep foundation of <em>${baseP.scentFamily}</em> provides lingering staying power while the bright projection of <em>${accentP.scentFamily}</em> lifts the fragrance into an unforgettable signature.
      </p>
      <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid rgba(255,255,255,0.1); padding-top:0.6rem;">
        <div>
          <span style="font-size:0.75rem; color:#888; text-decoration:line-through;">${formatGHC(combinedPrice)}</span>
          <strong style="font-family:var(--font-display); font-size:1.15rem; color:var(--gold-light); margin-left:6px;">${formatGHC(bundleDiscounted)}</strong>
          <span style="font-size:0.72rem; color:var(--gold-accent); margin-left:4px;">(Save ${formatGHC(savings)})</span>
        </div>
        <button class="btn btn-primary" onclick="addLayeringDuoToCart('${baseP.id}', '${accentP.id}')">Add Duo to Bag</button>
      </div>
    `;
  }
};

window.addLayeringDuoToCart = (baseId, accentId) => {
  const p1 = PRODUCTS.find((p) => p.id === baseId);
  const p2 = PRODUCTS.find((p) => p.id === accentId);
  if (!p1 || !p2) return;

  const p1Discounted = Math.round(p1.price * 0.9);
  const p2Discounted = Math.round(p2.price * 0.9);

  addToCart({ id: p1.id, name: `${p1.name} (Duo Privilege)`, image: p1.image, size: "100ml", price: p1Discounted, quantity: 1 });
  addToCart({ id: p2.id, name: `${p2.name} (Duo Privilege)`, image: p2.image, size: "100ml", price: p2Discounted, quantity: 1 });

  closeLayeringLab();
  openCartDrawer();
  showToast("Layering Duo added with 10% Maison privilege!", "");
};

// 16F. BESPOKE DISCOVERY SET BUILDER
let DISCOVERY_STATE = {
  slots: [null, null, null]
};

window.openDiscoverySetModal = () => {
  window.closeConciergePanel();
  const modal = document.getElementById("discoverySetModal");
  if (!modal) return;

  renderDiscoverySlots();
  renderDiscoveryPickerGrid();
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeDiscoverySetModal = () => {
  const modal = document.getElementById("discoverySetModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
};

window.renderDiscoverySlots = () => {
  const container = document.getElementById("discoveryBoxPreview");
  if (!container) return;

  container.innerHTML = DISCOVERY_STATE.slots
    .map((slot, idx) => {
      if (slot) {
        return `
          <div class="discovery-slot filled">
            <button onclick="removeDiscoverySlot(${idx})" style="position:absolute; top:6px; right:6px; background:rgba(0,0,0,0.5); border:none; color:#fff; border-radius:50%; width:20px; height:20px; cursor:pointer; font-size:11px;">×</button>
            <img src="${slot.image}" alt="${slot.name}" class="discovery-slot-img" />
            <div style="font-weight:600; font-size:0.75rem; color:#fff;">${slot.name.replace("Velora ", "")}</div>
            <div style="font-size:0.65rem; color:var(--gold-accent);">10ml Extrait</div>
          </div>
        `;
      } else {
        return `
          <div class="discovery-slot">
            <span style="font-size:1.5rem; color:rgba(197,152,88,0.5); margin-bottom:4px;">+</span>
            <div style="font-size:0.75rem; color:#cfcac0;">Slot ${idx + 1}</div>
            <div style="font-size:0.65rem; color:#888;">Select below</div>
          </div>
        `;
      }
    })
    .join("");

  const filledCount = DISCOVERY_STATE.slots.filter(Boolean).length;
  const addBtn = document.getElementById("discoveryAddBtn");
  if (addBtn) {
    addBtn.disabled = filledCount < 3;
    addBtn.style.opacity = filledCount === 3 ? "1" : "0.5";
    addBtn.textContent = filledCount === 3 ? "Add Bespoke Coffret to Bag (GH₵ 480)" : `Select ${3 - filledCount} More Flacon${3 - filledCount > 1 ? "s" : ""}`;
  }
};

window.renderDiscoveryPickerGrid = () => {
  const grid = document.getElementById("discoveryPickerGrid");
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(
    (p) => `
    <div class="discovery-choice-card" onclick="selectDiscoveryPerfume('${p.id}')">
      <img src="${p.image}" alt="${p.name}" style="width:40px; height:50px; object-fit:cover; border-radius:3px; margin:0 auto 4px; display:block;" />
      <div style="font-weight:600; color:#fff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${p.name.replace("Velora ", "")}</div>
      <div style="font-size:0.68rem; color:var(--gold-accent);">${p.category.toUpperCase()}</div>
    </div>
  `
  ).join("");
};

window.selectDiscoveryPerfume = (productId) => {
  const emptyIndex = DISCOVERY_STATE.slots.findIndex((s) => s === null);
  if (emptyIndex === -1) {
    showToast("All 3 slots are full. Remove one to change.", "ℹ");
    return;
  }
  const product = PRODUCTS.find((p) => p.id === productId);
  if (product) {
    DISCOVERY_STATE.slots[emptyIndex] = product;
    renderDiscoverySlots();
  }
};

window.removeDiscoverySlot = (index) => {
  DISCOVERY_STATE.slots[index] = null;
  renderDiscoverySlots();
};

window.addDiscoverySetToCart = () => {
  const filled = DISCOVERY_STATE.slots.filter(Boolean);
  if (filled.length < 3) return;

  const names = filled.map((p) => p.name.replace("Velora ", "")).join(", ");
  addToCart({
    id: "bespoke-discovery-set",
    name: `Bespoke Discovery Coffret (3 × 10ml)`,
    image: filled[0].image,
    size: "30ml (3×10ml)",
    price: 480,
    quantity: 1,
    engraving: { text: names, style: "Set" }
  });

  closeDiscoverySetModal();
  openCartDrawer();
  showToast("Bespoke Discovery Coffret added to bag!", "");
};

// ==========================================================================
// 18. SPRINT 3: VIP PRIVÉ, CONNOISSEUR REVIEWS, PASS & UNIVERSAL A11Y
// ==========================================================================

// Global state additions for reviews and currency
const REVIEW_FORM_STATE = {
  rating: 5,
  longevity: "Eternal (14+ hrs)",
  sillage: "Intense / Enormous"
};

const CURRENCY_RATES = {
  GHS: { symbol: "GH₵", rate: 1, label: "GH₵ GHS (Ghana)" },
  USD: { symbol: "$", rate: 0.065, label: "$ USD (International)" },
  EUR: { symbol: "€", rate: 0.060, label: "€ EUR (Europe)" },
  GBP: { symbol: "£", rate: 0.051, label: "£ GBP (UK)" }
};

STATE.currency = localStorage.getItem("velora_currency") || "GHS";

// Curated seed reviews for luxury perfumes
const SEED_REVIEWS = {
  "velora-midnight-oud": [
    {
      author: "Nana Kwesi O.",
      location: "Cantonments, Accra",
      rating: 5,
      date: "2 days ago",
      longevity: "Eternal (16+ hrs)",
      sillage: "Intense / Enormous",
      text: "Midnight Oud is simply peerless. The Cambodian agarwood smolders with an opulent leather and rose undertone that lingered well past dawn at our gala. Compliments were non-stop."
    },
    {
      author: "Edward B.",
      location: "Airport Residential, Accra",
      rating: 5,
      date: "1 week ago",
      longevity: "Eternal (14+ hrs)",
      sillage: "Magnetic",
      text: "True 30% Extrait de Parfum concentration. Two sprays lasted through an entire flight and evening dinner. The bottle engraving made it feel truly bespoke."
    }
  ],
  "velora-amber-bliss": [
    {
      author: "Abena M.",
      location: "East Legon, Accra",
      rating: 5,
      date: "3 days ago",
      longevity: "Long Lasting (12 hrs)",
      sillage: "Moderate / Alluring",
      text: "The golden honey nectar and Bourbon vanilla wrap around you like pure cashmere. It is warm, sensual, and completely irresistible."
    },
    {
      author: "Yvette K.",
      location: "Labone, Accra",
      rating: 5,
      date: "2 weeks ago",
      longevity: "Long Lasting (10 hrs)",
      sillage: "Intimate / Romantic",
      text: "My absolute signature scent. The dry down is powdery, sweet amber perfection. Velora's concierge delivery in Accra arrived within hours."
    }
  ],
  "creed-aventus": [
    {
      author: "Fiifi A.",
      location: "Ridge, Accra",
      rating: 5,
      date: "Yesterday",
      longevity: "Eternal (14+ hrs)",
      sillage: "Commanding / Magnetic",
      text: "The definitive king of luxury fragrances. Smoky birch and juicy blackcurrant with unmatched silage. Arrived in pristine condition with gold ribbon wrapping."
    }
  ],
  "tom-ford-ombre-leather": [
    {
      author: "Kwabena D.",
      location: "Airport Residential, Accra",
      rating: 5,
      date: "3 days ago",
      longevity: "Eternal (16+ hrs)",
      sillage: "Enveloping & Sophisticated",
      text: "Pure decadent leather with cardamom and jasmine. It exudes effortless authority and sophistication. Highest recommendation."
    }
  ],
  "valentino-uomo-born-in-roma": [
    {
      author: "Yaw S.",
      location: "Cantonments, Accra",
      rating: 5,
      date: "5 days ago",
      longevity: "Long Lasting (10+ hrs)",
      sillage: "Radiant & Modern",
      text: "The mineral salt note with violet leaf and smoked vetiver is sublime. Perfectly suited for evening dinners in Accra."
    }
  ],
  "versace-eros-flame": [
    {
      author: "Kojo P.",
      location: "Osu, Accra",
      rating: 5,
      date: "1 week ago",
      longevity: "Long Lasting (12+ hrs)",
      sillage: "Potent & Magnetic",
      text: "Fiery citrus and pepper balanced by smooth vanilla and cedar. An absolute magnet for compliments."
    }
  ],
  "viktor-rolf-spicebomb-infrared": [
    {
      author: "Derick M.",
      location: "Spintex, Accra",
      rating: 5,
      date: "4 days ago",
      longevity: "Long Lasting (12+ hrs)",
      sillage: "Warm & Seductive",
      text: "Incredible red habanero chili warmth that settles into sweet cinnamon and rich tobacco. Addictive scent profile."
    }
  ],
  "givenchy-gentleman-reserve-privee": [
    {
      author: "Dr. Mensah",
      location: "Airport Hills, Accra",
      rating: 5,
      date: "2 days ago",
      longevity: "Eternal (14+ hrs)",
      sillage: "Intimate & Aristocratic",
      text: "The whisky barrel essence and powdery iris accord create a scent of sheer nobility. True master perfumery."
    }
  ],
  "lattafa-asad-elixir": [
    {
      author: "Ibrahim T.",
      location: "Madina, Accra",
      rating: 5,
      date: "3 days ago",
      longevity: "Eternal (15+ hrs)",
      sillage: "Potent & Room-Filling",
      text: "Incredible value and performance. Rich coffee, tobacco, and dark amber that easily rivals fragrances three times its price."
    }
  ],
  "tom-ford-black-orchid": [
    {
      author: "Naa Borley E.",
      location: "Roman Ridge, Accra",
      rating: 5,
      date: "6 days ago",
      longevity: "Eternal (14+ hrs)",
      sillage: "Intoxicating & Sensual",
      text: "Dark, sultry, enigmatic. The black truffle and dark floral spices make a statement everywhere I go."
    }
  ],
  "default": [
    {
      author: "Kofi A.",
      location: "Ridge, Accra",
      rating: 5,
      date: "4 days ago",
      longevity: "Eternal (14+ hrs)",
      sillage: "Intense / Magnetic",
      text: "Exceptional craftsmanship. You immediately detect the Grasse raw materials and pure oil concentration. Exceeded all my expectations."
    },
    {
      author: "Esi D.",
      location: "Dzorwulu, Accra",
      rating: 5,
      date: "1 week ago",
      longevity: "Long Lasting (12 hrs)",
      sillage: "Moderate",
      text: "An unforgettable fragrance flacon. The packaging and complimentary velvet box make this a true haute parfumerie experience."
    }
  ]
};

// --- FEAT-07: Universal Modal & Drawer Dismissal ---
window.closeAllModals = () => {
  const modalIds = [
    "productModal",
    "searchModal",
    "checkoutModal",
    "confirmationModal",
    "scentQuizModal",
    "orderTrackerModal",
    "layeringLabModal",
    "discoverySetModal",
    "conciergePassModal"
  ];
  modalIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("active");
  });
  if (window.closeCartDrawer) window.closeCartDrawer();
  if (window.closeWishlistDrawer) window.closeWishlistDrawer();
  if (window.closeMobileNav) window.closeMobileNav();
  if (window.closeConciergePanel) window.closeConciergePanel();
  if (window.closePriveDrawer) window.closePriveDrawer();
  document.body.style.overflow = "";
};

// Global Escape Key Listener
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    window.closeAllModals();
  }
});

// Global Backdrop Click Dismissal
document.addEventListener("click", (e) => {
  if (e.target && e.target.classList && e.target.classList.contains("modal-overlay") && e.target.classList.contains("active")) {
    e.target.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// --- FEAT-12: International Currency Preview Converter ---
window.changeCurrency = (code) => {
  if (!CURRENCY_RATES[code]) return;
  STATE.currency = code;
  localStorage.setItem("velora_currency", code);
  
  // Synchronize all currency select dropdowns
  document.querySelectorAll(".velora-currency-select").forEach((sel) => {
    sel.value = code;
  });

  const rateInfo = CURRENCY_RATES[code];
  if (code !== "GHS") {
    showToast(`Currency preview: ${rateInfo.symbol} ${code}. Orders checkout in GH₵.`, "ℹ");
  } else {
    showToast(`Currency set to Ghana Cedis (GH₵).`, "ℹ");
  }

  // Update product cards & bestsellers if on page
  if (window.renderBestSellers) window.renderBestSellers();
  if (window.renderShop) window.renderShop();
  if (window.renderCartDrawer) window.renderCartDrawer();
};

// --- FEAT-08: Maison Velora Privé (VIP Drawer & Multi-Order History) ---
window.openPriveDrawer = () => {
  if (window.closeConciergePanel) window.closeConciergePanel();
  if (window.closeMobileNav) window.closeMobileNav();
  window.renderPriveDrawer();
  const drawer = document.getElementById("priveDrawer");
  const overlay = document.getElementById("priveDrawerOverlay");
  if (drawer) drawer.classList.add("active");
  if (overlay) overlay.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closePriveDrawer = () => {
  const drawer = document.getElementById("priveDrawer");
  const overlay = document.getElementById("priveDrawerOverlay");
  if (drawer) drawer.classList.remove("active");
  if (overlay) overlay.classList.remove("active");
  document.body.style.overflow = "";
};

window.renderPriveDrawer = () => {
  let allOrders = [];
  try {
    allOrders = JSON.parse(localStorage.getItem("velora_all_orders") || "[]");
  } catch (err) {
    allOrders = [];
  }

  // Check fallback to velora_last_order if allOrders is empty
  if (allOrders.length === 0) {
    try {
      const last = JSON.parse(localStorage.getItem("velora_last_order") || "null");
      if (last) {
        allOrders = [last];
        localStorage.setItem("velora_all_orders", JSON.stringify(allOrders));
      }
    } catch (e) {}
  }

  const orderCount = allOrders.length;
  const totalSpend = allOrders.reduce((sum, o) => sum + (o.grandTotal || 0), 0);

  // Determine VIP Tier
  let tierName = "Atelier Guest";
  let tierBadge = "Atelier Guest";
  let tierDesc = "Welcome to Maison Velora. Place your first concierge order to unlock complimentary bottle engraving and priority atelier dispatch.";
  let progressLabel = "Next: Velora Connoisseur";
  let progressCount = `${orderCount} / 1 Orders`;
  let progressPercent = Math.min(100, Math.round((orderCount / 1) * 100));

  if (orderCount >= 1 && orderCount < 3) {
    tierName = "Velora Connoisseur";
    tierBadge = "Velora Connoisseur";
    tierDesc = "Distinguished patron. You enjoy complimentary hand-engraved flacons, priority doorstep courier dispatch, and exclusive private seasonal previews.";
    progressLabel = "Next: Grand Parfumeur Privé";
    progressCount = `${orderCount} / 3 Orders`;
    progressPercent = Math.min(100, Math.round((orderCount / 3) * 100));
  } else if (orderCount >= 3) {
    tierName = "Grand Parfumeur Privé";
    tierBadge = "Grand Parfumeur Privé";
    tierDesc = "Our highest circle of connoisseurs. You have unlocked 10% private reserve allocations, direct Maître Parfumeur curation, and bespoke vintage blendings.";
    progressLabel = "Highest Tier Achieved";
    progressCount = `${orderCount} Orders Placed`;
    progressPercent = 100;
  }

  // Update Tier UI elements
  const tierNameEl = document.getElementById("priveTierName");
  if (tierNameEl) tierNameEl.textContent = tierName;
  const tierBadgeEl = document.getElementById("priveTierBadge");
  if (tierBadgeEl) tierBadgeEl.textContent = tierBadge;
  const tierDescEl = document.getElementById("priveTierDesc");
  if (tierDescEl) tierDescEl.textContent = tierDesc;
  const spendEl = document.getElementById("priveSpendBadge");
  if (spendEl) spendEl.textContent = `Lifetime: ${formatGHC(totalSpend)}`;
  const progressLabelEl = document.getElementById("priveProgressLabel");
  if (progressLabelEl) progressLabelEl.textContent = progressLabel;
  const progressCountEl = document.getElementById("priveProgressCount");
  if (progressCountEl) progressCountEl.textContent = progressCount;
  const progressFillEl = document.getElementById("priveProgressFill");
  if (progressFillEl) progressFillEl.style.width = `${progressPercent}%`;

  const countBadge = document.getElementById("priveOrderCountBadge");
  if (countBadge) countBadge.textContent = `${orderCount} ${orderCount === 1 ? "Order" : "Orders"}`;

  // Render Loyalty Rewards Hub
  if (window.renderRewardsHub) {
    window.renderRewardsHub();
  }

  // Render Orders Ledger
  const ordersListEl = document.getElementById("priveOrdersList");
  if (!ordersListEl) return;

  if (allOrders.length === 0) {
    ordersListEl.innerHTML = `
      <div class="prive-empty-state">
        <svg class="prive-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <h4 style="font-family:var(--font-serif); font-size:1.1rem; color:#fff; margin-bottom:0.4rem;">No Orders Placed Yet</h4>
        <p style="font-size:0.8rem; color:#9c978f; line-height:1.45; margin-bottom:1rem;">Your bespoke orders and hand-poured flacons will be recorded here with live courier tracking and printable certificates.</p>
        <button class="btn btn-primary" style="font-size:0.8rem; padding:0.6rem 1.2rem;" onclick="closePriveDrawer(); window.location.href='shop.html';">Explore Atelier Catalog</button>
      </div>
    `;
    return;
  }

  ordersListEl.innerHTML = allOrders
    .map((ord) => {
      const itemsSummary = (ord.items || [])
        .map((i) => `${i.name} (${i.size})${i.engraving && i.engraving.text ? ` · [Engraved: "${i.engraving.text}"]` : ""} × ${i.quantity}`)
        .join("<br />");

      return `
        <div class="prive-order-card">
          <div class="prive-order-header">
            <span class="prive-order-ref">#${ord.ref}</span>
            <span class="prive-order-date">${ord.date}</span>
          </div>
          <div class="prive-order-items">${itemsSummary}</div>
          <div style="font-size:0.75rem; color:#25d366; display:flex; align-items:center; gap:5px; margin-bottom:0.4rem;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Verified · Atelier Concierge Dispatch</span>
          </div>
          <div class="prive-order-footer">
            <span class="prive-order-total">${formatGHC(ord.grandTotal)}</span>
            <div class="prive-order-actions">
              <button class="prive-btn-action" onclick="closePriveDrawer(); openOrderTrackerModal('${ord.ref}')">Track</button>
              <button class="prive-btn-action" onclick="closePriveDrawer(); openConciergePassModal('${ord.ref}')">VIP Pass</button>
              <button class="prive-btn-action" onclick="reorderPriveOrder('${ord.ref}')">Re-Order</button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
};

window.reorderPriveOrder = (orderRef) => {
  let allOrders = [];
  try {
    allOrders = JSON.parse(localStorage.getItem("velora_all_orders") || "[]");
  } catch (e) {}

  const order = allOrders.find((o) => o.ref === orderRef);
  if (!order || !order.items || order.items.length === 0) {
    showToast("Unable to reorder items from this pass.", "ℹ");
    return;
  }

  order.items.forEach((item) => {
    addToCart({
      id: item.id,
      name: item.name,
      image: item.image,
      size: item.size,
      price: item.price,
      quantity: item.quantity || 1,
      engraving: item.engraving || null
    });
  });

  window.closePriveDrawer();
  window.openCartDrawer();
  showToast(`Items from #${order.ref} re-added to your bag!`, "");
};

// --- FEAT-09: Printable Luxury Concierge Pass & Certificate ---
window.openConciergePassModal = (orderRef) => {
  let order = null;
  let allOrders = [];
  try {
    allOrders = JSON.parse(localStorage.getItem("velora_all_orders") || "[]");
  } catch (e) {}

  if (orderRef) {
    order = allOrders.find((o) => o.ref === orderRef);
  }
  if (!order) {
    try {
      order = JSON.parse(localStorage.getItem("velora_last_order") || "null");
    } catch (e) {}
  }

  // If still no order, generate a VIP Certificate preview
  if (!order) {
    order = {
      ref: "VEL-PREVIEW",
      date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
      customer: {
        fullName: "Distinguished Maison Connoisseur",
        whatsapp: "+233 24 555 0192",
        address: "Airport Hills",
        region: "Greater Accra"
      },
      items: [
        {
          id: "velora-midnight-oud",
          name: "Velora Midnight Oud",
          size: "100ml",
          price: 1450,
          quantity: 1,
          engraving: { text: "VELORA VIP", style: "serif" }
        }
      ],
      grandTotal: 1450
    };
  }

  const modal = document.getElementById("conciergePassModal");
  if (!modal) return;

  const passRefEl = document.getElementById("passOrderRef");
  if (passRefEl) passRefEl.textContent = `#${order.ref}`;
  const passDateEl = document.getElementById("passOrderDate");
  if (passDateEl) passDateEl.textContent = order.date;
  const passNameEl = document.getElementById("passCustomerName");
  if (passNameEl) passNameEl.textContent = order.customer ? order.customer.fullName : "Privileged Connoisseur";
  const passLocEl = document.getElementById("passDeliveryLocation");
  if (passLocEl) passLocEl.textContent = order.customer ? `${order.customer.address}, ${order.customer.region}` : "Accra Metropolitan Area, Ghana";
  const passCodeEl = document.getElementById("passVerificationCode");
  if (passCodeEl) passCodeEl.textContent = `VEL-AUTH-${order.ref.replace("VEL-", "")}-ACCRA`;

  const tbody = document.getElementById("passManifestItems");
  if (tbody) {
    tbody.innerHTML = (order.items || [])
      .map(
        (i) => `
        <tr>
          <td><strong>${i.name}</strong><br /><span style="font-size:0.72rem; color:#7a7672;">Extrait de Parfum · 30% Artisan Essence</span></td>
          <td>${i.size || "100ml"} × ${i.quantity || 1}</td>
          <td><span style="font-size:0.75rem; color:var(--gold-dark);">${i.engraving && i.engraving.text ? `“${i.engraving.text}” (${i.engraving.style || "Serif"})` : "Atelier Wax Seal"}</span></td>
          <td style="text-align:right; font-weight:600;">${formatGHC(i.price * (i.quantity || 1))}</td>
        </tr>
      `
      )
      .join("");
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeConciergePassModal = () => {
  const modal = document.getElementById("conciergePassModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
};

window.printConciergePass = () => {
  window.print();
};

window.verifyConciergePassWhatsApp = () => {
  const passRefEl = document.getElementById("passOrderRef");
  const ref = passRefEl ? passRefEl.textContent : "#VEL-CONCIERGE";
  const msg = encodeURIComponent(`Hello Velora Concierge, I would like to verify my VIP Flacon Pass ${ref} with your Accra atelier.`);
  window.open(`https://wa.me/233245550192?text=${msg}`, "_blank");
};

// --- FEAT-10: Interactive Connoisseur Reviews & Olfactory Form ---
window.toggleReviewForm = () => {
  const formWrap = document.getElementById("reviewFormWrap");
  if (formWrap) {
    formWrap.classList.toggle("active");
  }
};

window.selectReviewStars = (starCount) => {
  REVIEW_FORM_STATE.rating = starCount;
  const starsContainer = document.getElementById("ratingStarsPicker");
  if (!starsContainer) return;
  const stars = starsContainer.querySelectorAll(".star-opt");
  stars.forEach((s, idx) => {
    if (idx < starCount) {
      s.classList.add("selected");
    } else {
      s.classList.remove("selected");
    }
  });
};

window.selectReviewLongevity = (val, btn) => {
  REVIEW_FORM_STATE.longevity = val;
  const parent = btn.parentElement;
  if (parent) {
    parent.querySelectorAll(".olfactory-pill-btn").forEach((b) => b.classList.remove("active"));
  }
  btn.classList.add("active");
};

window.selectReviewSillage = (val, btn) => {
  REVIEW_FORM_STATE.sillage = val;
  const parent = btn.parentElement;
  if (parent) {
    parent.querySelectorAll(".olfactory-pill-btn").forEach((b) => b.classList.remove("active"));
  }
  btn.classList.add("active");
};

window.renderProductReviews = (productId) => {
  const section = document.getElementById("modalReviewsSection");
  if (!section) return;

  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  // Retrieve user submitted reviews from localStorage
  let userReviews = [];
  try {
    const allUserReviews = JSON.parse(localStorage.getItem("velora_user_reviews") || "{}");
    userReviews = allUserReviews[productId] || [];
  } catch (e) {
    userReviews = [];
  }

  const seed = SEED_REVIEWS[productId] || SEED_REVIEWS["default"];
  const combinedReviews = [...userReviews, ...seed];

  // Render Reviews section
  section.innerHTML = `
    <div class="reviews-section-header">
      <div>
        <span style="font-size:0.75rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--gold-accent); font-weight:700;">COMMUNITY IMPRESSIONS</span>
        <h3 style="font-family:var(--font-serif); font-size:1.45rem; color:var(--text-title); margin:0.2rem 0;">The Connoisseurs' Ledger</h3>
      </div>
      <button class="review-form-toggle-btn" onclick="toggleReviewForm()">+ Leave a Review</button>
    </div>

    <!-- Rating Consensus Card -->
    <div class="reviews-aggregate-summary">
      <div class="reviews-big-score">${product.rating || "4.9"}</div>
      <div>
        <div class="reviews-stars-gold"></div>
        <div style="font-size:0.76rem; color:var(--text-muted);">${product.reviewsCount + userReviews.length} Verified Connoisseur Reviews</div>
      </div>
      <div class="reviews-metrics-consensus">
        <div>
          <div>Longevity:</div>
          <div class="reviews-metric-val">96% Eternal (14+ hrs)</div>
        </div>
        <div>
          <div>Sillage:</div>
          <div class="reviews-metric-val">92% Magnetic</div>
        </div>
      </div>
    </div>

    <!-- Collapsible Review Form -->
    <div class="review-form-wrap" id="reviewFormWrap">
      <h4 style="font-family:var(--font-serif); font-size:1.15rem; margin-bottom:0.75rem; color:var(--text-title);">Share Your Olfactory Impression</h4>
      
      <label style="display:block; font-size:0.75rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--text-muted); margin-bottom:0.3rem; font-weight:600;">Overall Rating</label>
      <div class="rating-stars-picker" id="ratingStarsPicker">
        <span class="star-opt selected" onclick="selectReviewStars(1)"></span>
        <span class="star-opt selected" onclick="selectReviewStars(2)"></span>
        <span class="star-opt selected" onclick="selectReviewStars(3)"></span>
        <span class="star-opt selected" onclick="selectReviewStars(4)"></span>
        <span class="star-opt selected" onclick="selectReviewStars(5)"></span>
      </div>

      <div class="review-form-grid">
        <div>
          <label style="display:block; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--text-muted); margin-bottom:0.3rem; font-weight:600;">Longevity on Skin</label>
          <div class="olfactory-pills-row">
            <button type="button" class="olfactory-pill-btn" onclick="selectReviewLongevity('Moderate (4-6 hrs)', this)">Moderate</button>
            <button type="button" class="olfactory-pill-btn" onclick="selectReviewLongevity('Long Lasting (8-12 hrs)', this)">Long Lasting</button>
            <button type="button" class="olfactory-pill-btn active" onclick="selectReviewLongevity('Eternal (14+ hrs)', this)">Eternal (14+ hrs)</button>
          </div>
        </div>
        <div>
          <label style="display:block; font-size:0.72rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--text-muted); margin-bottom:0.3rem; font-weight:600;">Sillage / Projection</label>
          <div class="olfactory-pills-row">
            <button type="button" class="olfactory-pill-btn" onclick="selectReviewSillage('Intimate', this)">Intimate</button>
            <button type="button" class="olfactory-pill-btn" onclick="selectReviewSillage('Moderate', this)">Moderate</button>
            <button type="button" class="olfactory-pill-btn active" onclick="selectReviewSillage('Intense / Enormous', this)">Intense / Enormous</button>
          </div>
        </div>
      </div>

      <div style="margin-bottom:0.75rem;">
        <input type="text" id="reviewAuthorName" class="review-input-field" placeholder="Your Name & Neighborhood (e.g. Ama B., Cantonments)" />
      </div>

      <div style="margin-bottom:0.75rem;">
        <textarea id="reviewCommentText" class="review-input-field" rows="3" placeholder="Describe the opening notes, sillage, dry down, and how it felt to wear this flacon..."></textarea>
      </div>

      <button type="button" class="btn btn-primary" style="font-size:0.8rem; padding:0.6rem 1.4rem;" onclick="submitConnoisseurReview('${product.id}')">Submit Olfactory Review</button>
    </div>

    <!-- Reviews List -->
    <div class="reviews-list-container">
      ${combinedReviews
        .map(
          (r) => `
        <div class="review-item-card">
          <div class="review-item-top">
            <div class="review-author-name">
              <span>${r.author}</span>
              <span class="review-verified-badge">Verified Buyer</span>
              <span style="font-size:0.75rem; color:#8c8880; font-weight:normal;">· ${r.location || "Accra"}</span>
            </div>
            <div style="font-size:0.78rem; color:#d4af6e;">${"".repeat(r.rating || 5)}</div>
          </div>
          <div class="review-item-text">${r.text}</div>
          <div class="review-badges-tagline">
            <span style="font-size:0.75rem; color:#8c8880;">Longevity: ${r.longevity}</span>
            <span>·</span>
            <span style="font-size:0.75rem; color:#8c8880;">Sillage: ${r.sillage}</span>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
};

window.submitConnoisseurReview = (productId) => {
  const nameInput = document.getElementById("reviewAuthorName");
  const commentInput = document.getElementById("reviewCommentText");
  const author = nameInput ? nameInput.value.trim() : "";
  const comment = commentInput ? commentInput.value.trim() : "";

  if (!author || !comment) {
    showToast("Please provide your name and olfactory impression.", "ℹ");
    return;
  }

  const newReview = {
    author,
    location: "Accra, Ghana",
    rating: REVIEW_FORM_STATE.rating,
    date: "Just now",
    longevity: REVIEW_FORM_STATE.longevity,
    sillage: REVIEW_FORM_STATE.sillage,
    text: comment
  };

  try {
    const allUserReviews = JSON.parse(localStorage.getItem("velora_user_reviews") || "{}");
    if (!allUserReviews[productId]) {
      allUserReviews[productId] = [];
    }
    allUserReviews[productId].unshift(newReview);
    localStorage.setItem("velora_user_reviews", JSON.stringify(allUserReviews));
  } catch (err) {
    console.error("Error saving review:", err);
  }

  showToast("Your review has been added to the Connoisseurs' Ledger!", "");
  window.renderProductReviews(productId);
};

// 17. INITIALIZATION & LISTENERS
document.addEventListener("DOMContentLoaded", () => {
  updateBadges();
  renderBestSellers();
  renderShop();

  // Sync saved currency selector
  const savedCurrency = localStorage.getItem("velora_currency") || "GHS";
  document.querySelectorAll(".velora-currency-select").forEach((sel) => {
    sel.value = savedCurrency;
  });

  // Sticky Navigation scroll listener
  const header = document.querySelector(".velora-header") || document.querySelector(".header-nav");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // Hash change routing
  const handleHash = () => {
    const hash = window.location.hash.toLowerCase();
    if (hash === "#men") {
      setCategoryFilter("men");
    } else if (hash === "#women") {
      setCategoryFilter("women");
    } else if (hash === "#unisex") {
      setCategoryFilter("unisex");
    } else if (hash === "#shop") {
      setCategoryFilter("all");
    } else if (hash === "#scent-finder") {
      openScentQuiz();
    } else if (hash === "#track-order") {
      openOrderTrackerModal();
    } else if (hash === "#layering-lab") {
      openLayeringLab();
    } else if (hash === "#discovery-set") {
      openDiscoverySetModal();
    } else if (hash === "#prive" || hash === "#vip") {
      openPriveDrawer();
    } else if (hash === "#pass" || hash === "#certificate") {
      openConciergePassModal();
    } else if (hash.startsWith("#product-")) {
      const pId = hash.replace("#product-", "");
      openProductModal(pId);
    }
  };
  window.addEventListener("hashchange", handleHash);
  handleHash();

  // Initialize Comparison Dock
  if (window.renderCompareDock) window.renderCompareDock();
});

/* ==========================================================================
   19. SPRINT 5: PERFUME COMPARISON & CONNOISSEUR LOYALTY REWARDS
   ========================================================================== */

/* ------------------------------------------------------------------ */
/* 19A. PERFUME COMPARISON BENCHMARK MATRIX                           */
/* ------------------------------------------------------------------ */
window.toggleCompareProduct = (productId, event) => {
  if (event) event.stopPropagation();

  if (!STATE.compareList) STATE.compareList = [];
  const idx = STATE.compareList.indexOf(productId);

  if (idx > -1) {
    STATE.compareList.splice(idx, 1);
    showToast("Removed from comparison", "");
  } else {
    if (STATE.compareList.length >= 4) {
      showToast("Maximum 4 perfumes can be compared at once", "");
      return;
    }
    STATE.compareList.push(productId);
    const prod = PRODUCTS.find((p) => p.id === productId);
    showToast(`Added ${prod ? prod.name : "perfume"} to comparison`, "");
  }

  localStorage.setItem("velora_compare", JSON.stringify(STATE.compareList));
  window.renderCompareDock();
  if (window.renderShop) window.renderShop();
};

window.removeCompareProduct = (productId) => {
  if (!STATE.compareList) return;
  STATE.compareList = STATE.compareList.filter((id) => id !== productId);
  localStorage.setItem("velora_compare", JSON.stringify(STATE.compareList));
  window.renderCompareDock();
  if (window.renderShop) window.renderShop();
  if (document.getElementById("compareModalOverlay") && document.getElementById("compareModalOverlay").classList.contains("active")) {
    window.renderCompareMatrix();
  }
};

window.clearComparison = () => {
  STATE.compareList = [];
  localStorage.setItem("velora_compare", JSON.stringify([]));
  window.renderCompareDock();
  if (window.renderShop) window.renderShop();
  window.closeCompareModal();
  showToast("Comparison cleared", "");
};

window.renderCompareDock = () => {
  const dock = document.getElementById("veloraCompareDock");
  const countEl = document.getElementById("compareDockCount");
  const slotsEl = document.getElementById("compareDockSlots");
  if (!dock) return;

  const list = STATE.compareList || [];
  if (countEl) countEl.textContent = list.length;

  if (list.length > 0) {
    dock.classList.add("visible");
  } else {
    dock.classList.remove("visible");
  }

  if (slotsEl) {
    let slotsHTML = "";
    for (let i = 0; i < 4; i++) {
      if (i < list.length) {
        const prod = PRODUCTS.find((p) => p.id === list[i]);
        if (prod) {
          slotsHTML += `
            <div class="compare-dock-item" title="${prod.name}">
              <img src="${prod.image}" alt="${prod.name}" />
              <button type="button" class="remove-btn" onclick="removeCompareProduct('${prod.id}')" title="Remove">×</button>
            </div>
          `;
        }
      } else {
        slotsHTML += `<div class="compare-dock-empty" title="Empty slot">+</div>`;
      }
    }
    slotsEl.innerHTML = slotsHTML;
  }
};

window.openCompareModal = () => {
  const list = STATE.compareList || [];
  if (list.length < 2) {
    showToast("Select at least 2 perfumes to compare", "");
    return;
  }

  window.renderCompareMatrix();
  const modal = document.getElementById("compareModalOverlay");
  if (modal) modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeCompareModal = () => {
  const modal = document.getElementById("compareModalOverlay");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
};

window.renderCompareMatrix = () => {
  const container = document.getElementById("compareMatrixContainer");
  if (!container) return;

  const list = (STATE.compareList || []).map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
  if (list.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding:2rem; color:#888;">No perfumes in comparison.</p>`;
    return;
  }

  let tableHTML = `
    <table class="compare-matrix-table">
      <thead>
        <tr>
          <th>Attribute</th>
          ${list.map((p) => `
            <th class="compare-product-header">
              <img src="${p.image}" alt="${p.name}" class="compare-product-img" />
              <div class="compare-product-title">${p.name}</div>
              <div class="compare-product-price">${formatGHC(p.price)}</div>
              <button class="btn btn-primary" style="font-size:0.7rem; padding:0.4rem 0.8rem; letter-spacing:0.05em;" onclick="closeCompareModal(); quickAddToCart('${p.id}'); openCartDrawer();">Add To Cart</button>
            </th>
          `).join("")}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Fragrance Family</th>
          ${list.map((p) => `<td class="highlight-cell">${p.scentFamily}</td>`).join("")}
        </tr>
        <tr>
          <th>Starting Price</th>
          ${list.map((p) => `<td><strong>${formatGHC(p.sizes ? p.sizes[0].price : p.price)}</strong></td>`).join("")}
        </tr>
        <tr>
          <th>Available Sizes</th>
          ${list.map((p) => `<td>${(p.sizes || []).map((s) => `${s.size} (${formatGHC(s.price)})`).join("<br />") || "100ml"}</td>`).join("")}
        </tr>
        <tr>
          <th>Olfactory Longevity</th>
          ${list.map((p) => `<td><span style="color:#25d366; font-weight:600;">${p.longevity || "12+ Hours"}</span></td>`).join("")}
        </tr>
        <tr>
          <th>Sillage Projection</th>
          ${list.map((p) => `<td>${p.sillage || "Strong & Radiant"}</td>`).join("")}
        </tr>
        <tr>
          <th>Top Notes</th>
          ${list.map((p) => `<td>${p.topNotes || "Bergamot, Citrus"}</td>`).join("")}
        </tr>
        <tr>
          <th>Heart Notes</th>
          ${list.map((p) => `<td>${p.heartNotes || "Floral Accords, Spices"}</td>`).join("")}
        </tr>
        <tr>
          <th>Base Notes</th>
          ${list.map((p) => `<td>${p.baseNotes || "Amber, Woods, Musk"}</td>`).join("")}
        </tr>
        <tr>
          <th>Best Season & Wear</th>
          ${list.map((p) => `<td>${p.season || "All Seasons / Evening"}</td>`).join("")}
        </tr>
        <tr>
          <th>Connoisseur Rating</th>
          ${list.map((p) => `<td><strong>${p.rating} / 5.0</strong> <span style="font-size:0.75rem; color:#888;">(${p.reviewsCount} reviews)</span></td>`).join("")}
        </tr>
      </tbody>
    </table>
  `;

  container.innerHTML = tableHTML;
};

/* ------------------------------------------------------------------ */
/* 19B. LOYALTY POINTS & EXCLUSIVE REWARDS SYSTEM                     */
/* ------------------------------------------------------------------ */
const REWARD_OFFERS = [
  {
    id: "reward-100",
    name: "GH₵ 100 Privé Voucher",
    desc: "Redeem 200 points for GH₵ 100 off your next delivery order.",
    cost: 200,
    type: "fixed",
    value: 100
  },
  {
    id: "reward-10-percent",
    name: "10% Connoisseur Privilege",
    desc: "Redeem 350 points for 10% off entire order (up to GH₵ 350 savings).",
    cost: 350,
    type: "percent",
    value: 10
  },
  {
    id: "reward-free-discovery",
    name: "Complimentary Discovery Coffret",
    desc: "Redeem 500 points for a free luxury 3-flacon discovery sample set.",
    cost: 500,
    type: "fixed",
    value: 480
  }
];

window.earnBonusPoints = (pts) => {
  STATE.rewardsPoints = (STATE.rewardsPoints || 0) + pts;
  localStorage.setItem("velora_rewards_points", STATE.rewardsPoints.toString());
  window.renderRewardsHub();
  showToast(`+${pts} Connoisseur Privilege Points added to your balance!`, "");
};

window.redeemRewardOffer = (rewardId) => {
  const offer = REWARD_OFFERS.find((o) => o.id === rewardId);
  if (!offer) return;

  if ((STATE.rewardsPoints || 0) < offer.cost) {
    showToast(`Insufficient privilege points. Need ${offer.cost} pts.`, "");
    return;
  }

  STATE.rewardsPoints -= offer.cost;
  STATE.activeDiscount = {
    id: offer.id,
    name: offer.name,
    type: offer.type,
    value: offer.value
  };

  localStorage.setItem("velora_rewards_points", STATE.rewardsPoints.toString());
  localStorage.setItem("velora_active_discount", JSON.stringify(STATE.activeDiscount));

  window.renderRewardsHub();
  showToast(`Unlocked: ${offer.name}! Applied automatically at concierge checkout.`, "");
};

window.renderRewardsHub = () => {
  const ptsEl = document.getElementById("rewardsPointsDisplay");
  const container = document.getElementById("rewardsOffersContainer");
  const currentPts = STATE.rewardsPoints || 0;

  if (ptsEl) ptsEl.textContent = `${currentPts.toLocaleString()} pts`;

  // Render Referral Box if container exists
  const referralBox = document.getElementById("priveReferralBox");
  if (referralBox) {
    let referralCode = localStorage.getItem("velora_user_referral_code");
    if (!referralCode) {
      referralCode = "VELVIP" + Math.floor(1000 + Math.random() * 9000);
      localStorage.setItem("velora_user_referral_code", referralCode);
    }
    const referralLink = `${window.location.origin}/shop.html?ref=${referralCode}`;
    referralBox.innerHTML = `
      <div class="referral-share-card">
        <h5>Share Privé Invitation Link</h5>
        <p>Give friends GH₵ 50 off their first flacon. When they order, you earn <strong>+50 Connoisseur Points</strong>!</p>
        <div class="referral-input-row">
          <input type="text" readonly class="referral-code-input" id="referralLinkInput" value="${referralLink}" />
          <button type="button" class="referral-copy-btn" onclick="copyReferralLink()">Copy</button>
        </div>
      </div>
    `;
  }

  if (!container) return;

  container.innerHTML = REWARD_OFFERS.map((offer) => {
    const isApplied = STATE.activeDiscount && STATE.activeDiscount.id === offer.id;
    const canAfford = currentPts >= offer.cost;

    return `
      <div class="reward-offer-item">
        <div class="reward-offer-info">
          <h5>${offer.name} ${isApplied ? '<span style="color:#25d366; font-size:0.7rem; font-weight:700;">[APPLIED ✓]</span>' : ""}</h5>
          <p>${offer.desc}</p>
        </div>
        <div>
          ${isApplied
            ? `<button type="button" class="reward-redeem-btn" style="background:#25d366; color:#22080f;" disabled>Active</button>`
            : `<button type="button" class="reward-redeem-btn" onclick="redeemRewardOffer('${offer.id}')" ${!canAfford ? "disabled" : ""}>${offer.cost} pts</button>`
          }
        </div>
      </div>
    `;
  }).join("");
};

// ==========================================================================
// 20. SPRINT 6: REFERRAL LINK, SOCIAL SHARING & PWA LOGIC
// ==========================================================================

window.copyReferralLink = () => {
  const input = document.getElementById("referralLinkInput");
  if (input) {
    input.select();
    navigator.clipboard.writeText(input.value).then(() => {
      showToast("VIP Invitation link copied to clipboard!", "");
    }).catch(() => {
      document.execCommand("copy");
      showToast("VIP Invitation link copied!", "");
    });
  }
};

// Check for incoming referral code in URL
(function checkReferralQuery() {
  try {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    if (ref && !localStorage.getItem("velora_applied_ref")) {
      localStorage.setItem("velora_applied_ref", ref);
      // Give 50 welcome privilege points
      STATE.rewardsPoints = (STATE.rewardsPoints || 0) + 50;
      localStorage.setItem("velora_rewards_points", STATE.rewardsPoints.toString());
      setTimeout(() => {
        showToast(`VIP Referral ${ref} Applied! You received 50 bonus privilege points.`, "");
      }, 1000);
    }
  } catch (err) {}
})();

// Social Sharing from Product Modal
window.shareCurrentProduct = (channel) => {
  const product = STATE.selectedProduct;
  if (!product) return;

  const pageUrl = `${window.location.origin}/shop.html#product-${product.id}`;
  const shareText = `Discover ${product.name} (${product.tagline}) at Velora Perfumes Haute Parfumerie. Notes of ${product.topNotes}. ${formatGHC(product.price)}: ${pageUrl}`;

  if (channel === "whatsapp") {
    const encoded = encodeURIComponent(shareText);
    window.open(`https://wa.me/?text=${encoded}`, "_blank");
  } else if (channel === "copy") {
    navigator.clipboard.writeText(pageUrl).then(() => {
      showToast(`Link for ${product.name} copied!`, "");
    }).catch(() => {
      showToast(pageUrl, "");
    });
  } else if (channel === "native") {
    if (navigator.share) {
      navigator.share({
        title: `${product.name} | Velora Perfumes`,
        text: `Handcrafted Haute Parfumerie: ${product.name}`,
        url: pageUrl
      }).catch(() => {});
    } else {
      window.shareCurrentProduct("copy");
    }
  }
};

// PWA Service Worker Registration
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").then((reg) => {
      console.log("Velora Perfumes PWA service worker registered:", reg.scope);
    }).catch((err) => {
      console.log("PWA service worker registration failed:", err);
    });
  });
}



