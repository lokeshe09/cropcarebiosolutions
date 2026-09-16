import type { BioToolItem, TrapType } from '../types';

/** Trap hardware the lures are designed to sit in. */
export const TRAPS: TrapType[] = [
  {
    id: 'fruit-fly-trap',
    name: 'Fruit Fly Trap',
    family: 'fruit-fly',
    bestFor: 'Melon Fly and Oriental Fruit Fly in orchards and vegetable vines',
    suitableLures: ['MF', 'OFF'],
    description:
      'A dome trap with inverted cone openings around the body and a lure basket under the hood. Flies follow the scent in through the cones and cannot find their way back out. The lower chamber is clear, so the catch can be checked without opening the trap.',
    features: [
      'Entry cones on all sides, so flies come in from any direction',
      'Hooded top keeps rain off the lure',
      'Clear reservoir for checking the catch at a glance',
      'Reusable across seasons',
    ],
    imageUrl: '/images/trap-fruit-fly.webp',
    setupAdvice:
      'Hang inside the shaded part of the canopy. On vegetable vines, suspend about a metre above the ground on a bamboo pole.',
    recommendedHeight: '1.5–2 m in trees, 1 m on vines',
    trapsPerAcre: '10–15 per acre',
    servicing: 'Empty every 10–14 days. Rinse if dust builds up. Replace the lure at 90 days.',
  },
  {
    id: 'vertical-fruit-fly-trap',
    name: 'Vertical Fruit Fly Trap',
    family: 'fruit-fly',
    bestFor: 'Trellised vines, polyhouses and dense orchard canopies',
    suitableLures: ['MF', 'OFF'],
    description:
      'A tall cylindrical version of the fruit fly trap with entry ports along its height. The narrow body sits inside dense foliage without catching on branches, which suits gourd trellises and close-planted orchards.',
    features: [
      'Slim profile that hangs cleanly inside foliage',
      'Entry ports at several heights',
      'Twist-off base for quick emptying',
      'Clear body for visible catch counts',
    ],
    imageUrl: '/images/trap-fruit-fly.webp',
    setupAdvice: 'Suspend along trellis posts or in a branch fork, in the shaded middle canopy.',
    recommendedHeight: '1.2–1.8 m from the ground',
    trapsPerAcre: '10–15 per acre',
    servicing: 'Twist the base off to empty; takes a few seconds per trap.',
  },
  {
    id: 'funnel-trap',
    name: 'Funnel Trap',
    family: 'funnel',
    bestFor: 'Bollworm, cutworm, armyworm, pink bollworm and stem borer',
    suitableLures: ['CBW', 'TCW', 'FAW', 'PBW', 'YSB'],
    description:
      'A canopy cap holding the lure, a smooth funnel below it, and a clear sleeve bag at the bottom. Moths fly towards the lure, hit the canopy, and drop through the funnel into the sleeve. It runs dry, so there is no water to top up.',
    features: [
      'No water and no daily upkeep',
      'Holds a large catch of big moths',
      'Reusable body with replaceable sleeve bags',
      'Suits large acreages of cotton, maize, soybean, pulses and paddy',
    ],
    imageUrl: '/images/trap-funnel.webp',
    setupAdvice:
      'Tie to a bamboo stake by the top loop and keep the funnel mouth above the crop canopy. Raise the stake as the crop grows.',
    recommendedHeight: '30–45 cm above the crop canopy',
    trapsPerAcre: '8–15 per acre, depending on the lure',
    servicing: 'Untie the bottom cord and empty weekly. Check that the lure sits in the top cage.',
  },
  {
    id: 'bucket-trap',
    name: 'Bucket / Pheroglo Trap',
    family: 'funnel',
    bestFor: 'General moth trapping where a high-capacity dry trap is wanted',
    suitableLures: ['CBW', 'TCW', 'TLM', 'DBM', 'EPB'],
    description:
      'A wide bucket body with a coloured lid and a lure holder beneath it. Moths drawn to the lure drop into the deep chamber. The generous volume means it can be left for longer between visits.',
    features: [
      'Deep chamber holds a heavy catch',
      'Coloured lid adds a visual cue to the scent',
      'Strong hook for hanging from a branch or stake',
      'Simple to wash out and re-bait',
    ],
    imageUrl: '/images/trap-bucket.webp',
    setupAdvice: 'Hang from a branch or stake so the lid sits just above the crop canopy.',
    recommendedHeight: 'Just above the crop canopy',
    trapsPerAcre: '8–10 per acre',
    servicing: 'Empty every 7–10 days and rinse before re-baiting.',
  },
  {
    id: 'water-trap-tuta',
    name: 'Water Trap — Tuta',
    family: 'water',
    bestFor: 'Tomato Leaf Miner in open fields and polyhouses',
    suitableLures: ['TLM'],
    description:
      'A wide water pan with the lure held on a central clip above the surface and overflow slots at the rim. Moths drawn to the lure land on the water and cannot lift off again.',
    features: [
      'Pan area and clip height set for small Tuta moths',
      'No insecticide involved',
      'High capacity during peak moth flights',
      'UV-stabilised body for long outdoor use',
    ],
    imageUrl: '/images/trap-water-tuta.webp',
    setupAdvice:
      'Fill with clean water to about 2 cm below the rim and add a little oil or mild detergent so moths do not float off.',
    recommendedHeight: '20–30 cm above the crop canopy',
    trapsPerAcre: '8–10 per acre',
    servicing: 'Top up water weekly and skim the catch every 5–7 days.',
  },
  {
    id: 'water-trap-luci',
    name: 'Water Trap — Shoot Borer',
    family: 'water',
    bestFor: 'Brinjal Fruit & Shoot Borer',
    suitableLures: ['EPB'],
    description:
      'A yellow water pan built for brinjal fields, with a central clip that keeps the lure dry while the scent carries across the plot. Overflow slits hold the water level through rain.',
    features: [
      'Yellow pan adds a visual cue alongside the lure',
      'Bracket for mounting on a wooden or bamboo pole',
      'Overflow slits that do not clog',
      'Protects tender growing shoots',
    ],
    imageUrl: '/images/trap-water-luci.webp',
    setupAdvice: 'Mount on poles across the field, roughly 15 m apart.',
    recommendedHeight: 'Level with the upper third of the plant',
    trapsPerAcre: '8–10 per acre',
    servicing: 'Keep a thin film of oil or soapy water on the surface.',
  },
  {
    id: 'water-trap-dbm',
    name: 'Water Trap — Diamondback Moth',
    family: 'water',
    bestFor: 'Diamondback Moth in cabbage, cauliflower and mustard',
    suitableLures: ['DBM'],
    description:
      'A low water basin for cole crop beds. It catches male moths during evening flights, which interrupts egg laying on young leaves and curds.',
    features: [
      'Low profile that stays steady in open fields',
      'Central clip holds the lure just above the water',
      'Drain plug for quick washing and refilling',
      'Helps prevent windowing damage on leaves',
    ],
    imageUrl: '/images/trap-water-dbm.webp',
    setupAdvice: 'Install about 15–20 days after transplanting and keep the water topped up.',
    recommendedHeight: '15–20 cm above the crop head',
    trapsPerAcre: '8–10 per acre',
    servicing: 'Check the water level after heavy rain and in dry spells.',
  },
  {
    id: 'palm-trap',
    name: 'Palm Trap',
    family: 'palm',
    bestFor: 'Coconut, arecanut, date palm and oil palm plantations',
    suitableLures: ['RPW', 'RPW-M', 'RB'],
    description:
      'A bucket trap with entry openings around the rim and a rough outer surface that weevils and beetles can climb. It takes the aggregation lure and the RPW Magnet bottle together on the same hanger.',
    features: [
      'Textured outside so weevils can climb in',
      'Holds both the lure and the Magnet bottle',
      'Can be buried halfway into the soil or hung on the trunk',
      'Built for long spells in the open',
    ],
    imageUrl: '/images/trap-palm.webp',
    setupAdvice:
      'Bury to the side openings or hang on the trunk at 1–1.5 m. Place in shaded spots in the grove.',
    recommendedHeight: '1–1.5 m on the trunk, or half-buried',
    trapsPerAcre: '3–4 per acre',
    servicing: 'Empty the catch every two weeks and refresh the bait liquid monthly.',
  },
  {
    id: 'glass-trap',
    name: 'Glass Trap',
    family: 'fruit-fly',
    bestFor: 'Fruit fly monitoring in orchards',
    suitableLures: ['OFF', 'MF'],
    description:
      'A transparent dome trap with an invaginated base entrance. Light passes through the walls, which keeps trapped flies moving upward and away from the opening they came in by.',
    features: [
      'Clear walls for immediate catch counts',
      'Sealed against rain and long sun exposure',
      'Twist-lock base for cleaning and re-baiting',
      'A steady reference trap for weekly records',
    ],
    imageUrl: '/images/trap-glass.webp',
    setupAdvice: 'Hang on shaded inner branches, on the north-eastern side of the tree.',
    recommendedHeight: '1.5–2 m from the ground',
    trapsPerAcre: '8–12 per acre',
    servicing: 'Clear weekly so the count stays comparable week to week.',
  },
  {
    id: 'solar-trap',
    name: 'Solar Light Trap',
    family: 'solar',
    bestFor: 'Night-flying pests in field crops, vegetables and horticulture',
    suitableLures: ['CBW', 'TCW', 'TLM', 'FAW', 'YSB'],
    description:
      'A solar panel, a dusk-to-dawn LED, a lure holder and a collection basin in one unit. Light and pheromone work together, and the trap switches itself on at dusk with no cabling to run.',
    features: [
      'Light and pheromone attraction in one trap',
      'Solar panel and rechargeable battery, no mains wiring',
      'Automatic dusk-to-dawn switching',
      'Large basin for heavy night catches',
    ],
    imageUrl: '/images/trap-solar.webp',
    setupAdvice: 'Mount on a firm pole near the middle of the field where the panel gets full sun.',
    recommendedHeight: '1.5 m above ground',
    trapsPerAcre: '1–2 per acre',
    servicing: 'Wipe the panel monthly and empty the basin weekly.',
  },
  {
    id: 'delta-trap',
    name: 'Delta Trap',
    family: 'delta',
    bestFor: 'Close monitoring in polyhouses and orchards',
    suitableLures: ['TLM', 'DBM', 'PBW', 'CBW'],
    description:
      'A triangular housing in waterproof corrugated polypropylene, with a replaceable sticky liner on the floor and the lure hanging from the ridge. The shape shelters the glue from dust and rain.',
    features: [
      'Sheltered interior keeps the glue working',
      'Non-drying glue holds moths where they land',
      'Easy to count, so it suits weekly records',
      'Light enough to hang anywhere in the crop',
    ],
    imageUrl: '/images/trap-delta.webp',
    setupAdvice:
      'Fold into the triangle, lay the sticky liner face up, hang the lure from the ridge hook and suspend in the crop row.',
    recommendedHeight: 'Trellis height, or about 1 m above ground',
    trapsPerAcre: '6–8 per acre for monitoring',
    servicing: 'Replace the liner when it is about two-thirds covered, or every 4–6 weeks.',
  },
];

/** Sticky traps and adhesives sold alongside the lures and traps. */
export const BIO_TOOLS: BioToolItem[] = [
  {
    id: 'sticky-sheets',
    name: 'Sticky Sheets',
    tagline: 'Yellow and blue boards for sucking pests',
    description:
      'Non-drying sticky boards in two colours — yellow for whiteflies, aphids and leaf miners, blue for thrips. Both faces are coated, and the glue stays tacky in sun and rain.',
    targetPests: ['Whiteflies', 'Thrips', 'Aphids', 'Jassids', 'Leaf miners'],
    suitableCrops: ['Polyhouses', 'Tomato & capsicum', 'Chilli & onion', 'Floriculture', 'Nurseries'],
    specs: [
      { label: 'Colours', value: 'Yellow and blue' },
      { label: 'Sizes', value: '15 × 20 cm, 20 × 30 cm' },
      { label: 'Field life', value: '45–60 days' },
      { label: 'Rate', value: '15–20 sheets per acre' },
    ],
    imageUrl: '/images/tool-sticky-sheets.webp',
    highlights: [
      'Glue on both faces',
      'Non-drying and rainproof',
      'Brings down sucking pest numbers quickly',
      'Pre-punched holes and ties included',
    ],
  },
  {
    id: 'sticky-rolls',
    name: 'Sticky Rolls',
    tagline: 'Continuous ribbon barriers for polyhouses and orchards',
    description:
      'Long ribbons of the same sticky film, unrolled along polyhouse vents, boundaries or between orchard rows. They catch flying pests at the edge of the crop rather than inside it.',
    targetPests: ['Thrips', 'Whiteflies', 'Fungus gnats', 'Flying aphids', 'Leafhoppers'],
    suitableCrops: ['Polyhouses', 'Net houses', 'Orchards', 'Vegetable tunnels'],
    specs: [
      { label: 'Colours', value: 'Yellow and blue' },
      { label: 'Length', value: '100 m and 150 m' },
      { label: 'Width', value: '15 cm and 30 cm' },
      { label: 'Field life', value: 'A full crop cycle' },
    ],
    imageUrl: '/images/tool-sticky-rolls.webp',
    highlights: [
      'Unbroken run along the perimeter',
      'Tough film that does not tear in wind',
      'Large catching surface per acre',
      'Cuts down on foliar sprays',
    ],
  },
  {
    id: 'sticky-pouches',
    name: 'Sticky Pouches',
    tagline: 'Sealed, peel-and-hang sticky traps',
    description:
      'Individually sealed sticky traps for quick setup. Tear the pouch, peel the release paper and hang — no sticky fingers and no cutting to size in the field.',
    targetPests: ['Whitefly', 'Thrips', 'Fruit flies', 'Leaf miners', 'Moths'],
    suitableCrops: ['Vegetables', 'Flowers', 'Kitchen gardens', 'Plantations'],
    specs: [
      { label: 'Packing', value: 'Individually sealed' },
      { label: 'Shelf life', value: '2 years sealed' },
      { label: 'Field life', value: 'About 60 days' },
      { label: 'Rate', value: '15–25 per acre' },
    ],
    imageUrl: '/images/tool-sticky-pouches.webp',
    highlights: [
      'Moisture-sealed until the day of use',
      'Clean peel-off film',
      'Convenient dealer packing',
      'Works for smallholdings and large clusters alike',
    ],
  },
  {
    id: 'glue-bottle',
    name: 'Insect Trapping Glue',
    tagline: 'Brush-on adhesive for custom traps and trunk bands',
    description:
      'A brush-on sticky adhesive in a pour bottle. Use it on recycled bottles, painted boards or as a band around fruit tree trunks to stop crawling insects, ants and mealybug crawlers.',
    targetPests: ['Crawling insects', 'Mealybug crawlers', 'Ants', 'Whiteflies', 'Thrips'],
    suitableCrops: ['Mango, citrus and guava orchards', 'Coconut and palm groves', 'Custom farm traps'],
    specs: [
      { label: 'Form', value: 'Clear, viscous' },
      { label: 'Bottles', value: '500 ml and 1000 ml' },
      { label: 'Field life', value: 'Up to 3 months on surface' },
      { label: 'Coverage', value: '40–50 boards per bottle' },
    ],
    imageUrl: '/images/tool-glue-bottle.webp',
    highlights: [
      'Apply by brush or roller',
      'Holds up to rain and heat',
      'Non-poisonous',
      'Cost-effective for on-farm traps',
    ],
  },
];

export const getTrap = (id: string): TrapType | undefined =>
  TRAPS.find((trap) => trap.id === id);
