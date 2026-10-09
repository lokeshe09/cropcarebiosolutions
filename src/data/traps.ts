import type { BioToolItem, TrapType } from '../types';

/** Servicing note shared by the fruit fly, vertical fruit fly and glass traps. */
const FRUIT_FLY_SERVICING = 'Rinse when it is full and replace the lure at 90 days.';

/** Trap hardware the lures are designed to sit in. */
export const TRAPS: TrapType[] = [
  {
    id: 'fruit-fly-trap',
    name: 'Fruit Fly Trap',
    family: 'fruit-fly',
    bestFor: 'Melon Fly and Oriental Fruit Fly in orchards and vegetable vines',
    suitableLures: ['MF', 'OFF'],
    description:
      'A square-shaped fruit fly trap with openings on both sides and a lure holder inside. Flies are attracted by the scent of the lure and enter through the openings but cannot easily find their way back out. The transparent lower chamber allows the catch to be checked without opening the trap.',
    features: [
      'Openings on both sides allow fruit flies to enter from different directions',
      'Lure holder inside the trap releases the attractant scent to draw fruit flies in',
      'Transparent trap body allows easy checking of the captured flies',
      'Reusable trap for repeated use across growing seasons',
    ],
    imageUrl: '/images/photos/trap-fruit-fly-square.webp',
    trapsPerAcre: '10–15 per acre',
    servicing: FRUIT_FLY_SERVICING,
  },
  {
    id: 'vertical-fruit-fly-trap',
    name: 'Vertical Fruit Fly Trap',
    family: 'fruit-fly',
    bestFor: 'Fruit and vegetable crops in open fields, gardens and polyhouses',
    suitableLures: ['MF', 'OFF'],
    description:
      'The Vertical Fruit Fly Trap is a practical and space-saving solution for effective fruit fly management. Its vertical structure features entry openings at the top, allowing fruit flies to enter easily. Fruit flies are attracted by the lure’s scent and enter through the openings, where they are safely contained. The transparent body allows easy monitoring of the captured flies without opening the trap. Its simple, reusable design makes it convenient to clean, maintain, and use across seasons.',
    features: [
      'Vertical hanging design',
      'Top-entry openings',
      'Space-saving and convenient',
      'Transparent container for easy monitoring',
      'Suitable for fruit and vegetable crops in open fields, gardens, kitchen/terrace gardens, and greenhouses/polyhouses',
      'Reusable and easy to clean',
    ],
    imageUrl: '/images/photos/trap-vertical-fruit-fly.webp',
    trapsPerAcre: '10–15 per acre',
    servicing: FRUIT_FLY_SERVICING,
  },
  {
    id: 'glass-trap',
    name: 'Glass Fruit Fly Trap',
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
    imageUrl: '/images/photos/trap-glass.webp',
    trapsPerAcre: '8–12 per acre',
    servicing: FRUIT_FLY_SERVICING,
  },
  {
    id: 'water-trap',
    name: 'Water Trap',
    family: 'water',
    bestFor: 'Tomato leaf miner, brinjal fruit & shoot borer and diamondback moth',
    suitableLures: ['TLM', 'EPB', 'DBM'],
    description:
      'A wide water pan with the lure held on a central clip above the surface and overflow slots at the rim. Moths drawn to the lure land on the water and cannot lift off again.',
    features: [
      'Water-based trapping',
      'Wide trapping area',
      'Easy pest collection',
      'Easy to clean',
      'Simple to use',
      'Lightweight',
      'Low maintenance',
    ],
    imageUrl: '/images/photos/trap-water-v2.webp',
    setupAdvice:
      'Fill with clean water to about 2 cm below the rim and add a little oil or mild detergent so moths do not float off.',
    trapsPerAcre: '8–10 per acre',
    servicing: 'Top up water weekly and skim the catch every 5–7 days.',
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
      'Protective rain & sun canopy',
      'Transparent collection bag',
      'Easy pest monitoring',
      'Easy cleaning & replacement',
      'Reusable and durable',
      'Simple field installation',
    ],
    imageUrl: '/images/photos/trap-funnel-v2.webp',
    setupAdvice:
      'Tie to a bamboo stake by the top loop and keep the funnel mouth above the crop canopy. Raise the stake as the crop grows.',
    trapsPerAcre: '8–15 per acre, depending on the lure',
    servicing: 'Untie the bottom cord and empty weekly. Check that the lure sits in the top cage.',
  },
  {
    id: 'palm-trap',
    name: 'Palm Trap',
    family: 'palm',
    bestFor: 'Coconut, arecanut, date palm and oil palm plantations',
    suitableLures: ['RPW', 'RB'],
    description:
      'The Palm Trap is designed for monitoring and managing Red Palm Weevil and Rhinoceros Beetle in palm plantations. It is a durable bucket-shaped trap with a covered top and multiple entry openings. The pheromone lure is placed inside the trap to attract the target insects. Once attracted, the insects enter through the openings and are retained inside the trap. It is suitable for use in coconut, oil palm, date palm, and arecanut plantations.',
    features: [
      'Multiple entry holes',
      'Easy climbing access',
      'Hang or bury for installation',
      'Stable & durable design',
      'Reusable & easy to maintain',
    ],
    imageUrl: '/images/photos/trap-palm-v2.webp',
    setupAdvice:
      'Bury to the side openings or hang on the trunk at 1–1.5 m. Place in shaded spots in the grove.',
    trapsPerAcre: '3–4 per acre',
    servicing: 'Empty the catch every two weeks and refresh the bait liquid monthly.',
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
    imageUrl: '/images/photos/trap-delta.webp',
    setupAdvice:
      'Fold into the triangle, lay the sticky liner face up, hang the lure from the ridge hook and suspend in the crop row.',
    trapsPerAcre: '6–8 per acre for monitoring',
    servicing: 'Replace the liner when it is about two-thirds covered, or every 4–6 weeks.',
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
    trapsPerAcre: '1–2 per acre',
    servicing: 'Wipe the panel monthly and empty the basin weekly.',
  },
];

/** Section copy for the sticky traps on the Insect Traps page. */
export const STICKY_INTRO = {
  eyebrow: 'Sticky Traps',
  title: 'Integrated Sticky Pest Monitoring',
  lead: 'Yellow and blue sticky solutions help monitor pests such as whiteflies, aphids, leaf miners and thrips. Available as sticky sheets, sticky rolls and sticky pouches with glue, they offer practical and versatile solutions for crop protection.',
} as const;

/** Sticky traps and adhesives sold alongside the lures and traps. */
export const BIO_TOOLS: BioToolItem[] = [
  {
    id: 'sticky-sheets',
    name: 'Sticky Sheets',
    tagline: 'Yellow and blue PVC sticky sheets for sucking pests',
    description:
      'Not all pests rely on pheromone cues. Colour-based sticky boards complement pheromone lures for other target pests, providing a comprehensive approach to Integrated Pest Management (IPM). Available in yellow for whiteflies, aphids and leaf miners, and blue for thrips, our double-sided, non-drying sticky boards remain tacky in sun and rain.',
    targetPests: ['Whiteflies', 'Thrips', 'Aphids', 'Jassids'],
    suitableCrops: ['Polyhouses', 'Tomato & capsicum', 'Chilli & onion', 'Floriculture', 'Nurseries'],
    specs: [
      { label: 'Colours', value: 'Yellow and blue' },
      { label: 'Recommended', value: '15–20 sheets per acre' },
    ],
    imageUrl: '/images/tool-sticky-sheets.webp',
    highlights: [],
  },
  {
    id: 'sticky-rolls',
    name: 'Sticky Rolls',
    tagline: 'Continuous sticky strips for effective pest monitoring in polyhouses and greenhouses',
    description:
      'Ready-to-use sticky ribbons can be installed along openings and boundaries or suspended between crop rows, providing extended coverage for monitoring and capturing flying pests.',
    targetPests: ['Thrips', 'Whiteflies', 'Fungus gnats', 'Flying aphids', 'Leafhoppers'],
    suitableCrops: ['Polyhouses', 'Net houses', 'Orchards', 'Vegetable tunnels'],
    specs: [
      { label: 'Colours', value: 'Yellow and blue' },
      { label: 'Length', value: '100 m' },
      { label: 'Width', value: '15 cm and 30 cm' },
      { label: 'Recommended', value: '2–3 per acre' },
    ],
    imageUrl: '/images/tool-sticky-rolls.webp',
    highlights: [],
  },
  {
    id: 'sticky-pouches',
    name: 'Sticky Pouches',
    tagline: 'Convenient, reusable sticky pouches with ready-to-use glue',
    description:
      'Reusable Sticky Pouches are supplied with a ready-to-use sticky adhesive for easy pest monitoring. One side of the pouch is open for applying the adhesive, while the other side remains sealed. Simply apply the adhesive using the supplied pour bottle and place or hang the pouch in the crop.\n\nThe adhesive is provided in a convenient pour bottle for easy brush-on application. Each pouch can be reused twice, making it a practical and economical solution for pest monitoring.',
    targetPests: [],
    suitableCrops: ['Vegetables', 'Flowers', 'Kitchen gardens', 'Plantations'],
    specs: [],
    imageUrl: '/images/photos/tool-sticky-pouches.webp',
    highlights: [],
  },
];

export const getTrap = (id: string): TrapType | undefined =>
  TRAPS.find((trap) => trap.id === id);
