import type { CropSolution, PageId } from '../types';

/* -------------------------------------------------------------------------
 * Company
 * ---------------------------------------------------------------------- */

export const COMPANY = {
  name: 'Crop Care Bio Solutions',
  tagline: 'Caring for Farmers. Caring for Nature.',
  descriptor: 'Manufacturer & Exporter · Pheromone Lures & Insect Traps',
} as const;

/**
 * TODO — replace with the company's live details before launch.
 * These are placeholders; every phone number, address and email on the site
 * reads from this one object, so there is a single place to change.
 */
export const CONTACT = {
  phonePrimary: { display: '+91 00000 00000', dial: '+910000000000' },
  phoneSecondary: { display: '+91 00000 00000', dial: '+910000000000' },
  whatsapp: '910000000000',
  email: 'info@cropcarebiosolutions.com',
  addressLines: ['Crop Care Bio Solutions', 'India'],
  hours: 'Monday to Saturday, 9:00 am – 6:00 pm IST',
} as const;

export const buildWhatsAppUrl = (message: string): string =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

/* -------------------------------------------------------------------------
 * Navigation
 * ---------------------------------------------------------------------- */

export interface NavItem {
  id: PageId;
  label: string;
  children?: { id: PageId | null; label: string; note?: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  {
    id: 'products',
    label: 'Products',
    children: [
      { id: 'products', label: 'Pheromone Lures' },
      { id: 'traps', label: 'Insect Traps' },
      { id: null, label: 'Active Ingredients', note: 'Coming soon' },
    ],
  },
  { id: 'crop-solutions', label: 'Crop Solutions' },
  { id: 'contact', label: 'Contact' },
];

export const PAGE_TITLES: Record<PageId, string> = {
  home: 'Crop Care Bio Solutions',
  about: 'About',
  products: 'Pheromone Lures',
  traps: 'Insect Traps',
  'crop-solutions': 'Crop Solutions',
  contact: 'Contact',
};

/* -------------------------------------------------------------------------
 * Homepage copy — from the company content sheet
 * ---------------------------------------------------------------------- */

export const HOME = {
  heroCaption: 'Eco-friendly solutions to protect crops naturally and empower farmers.',
  welcome: [
    'At Crop Care Bio Solutions, we believe that every seed a farmer plants carries hope, and every harvest is the Earth’s gracious blessing.',
    'Together, farmers and nature nurture life, resilience, and the dreams of a brighter tomorrow.',
  ],
  missionVision:
    'Empowering farmers with eco-friendly, effective solutions that protect crops naturally — creating a future where farmers thrive, nature flourishes, and every crop grows in harmony with the Earth.',
  closing:
    'Every drop of sweat, every seed of hope — together, we grow not just crops, but life itself.',
} as const;

export const WHY_CROP_CARE = [
  {
    title: 'Eco-Friendly',
    body: 'Protects crops naturally, reducing chemical dependency.',
  },
  {
    title: 'Affordable',
    body: 'Solutions made for every farmer, big or small.',
  },
  {
    title: 'Effective',
    body: 'Scientifically developed for real, lasting results.',
  },
  {
    title: 'Trusted',
    body: 'Growing relationships with farmers and partners worldwide.',
  },
] as const;

/**
 * The six products the content sheet names for the homepage rail:
 * fruit fly trap, solar trap, sticky sheets, dorsalis lure,
 * rhinoceros beetle lure and Tuta absoluta lure.
 */
export const FEATURED: {
  id: string;
  kind: 'lure' | 'hardware';
  label: string;
}[] = [
  { id: 'fruit-fly-trap', kind: 'hardware', label: 'Insect Trap' },
  { id: 'solar-trap', kind: 'hardware', label: 'Insect Trap' },
  { id: 'sticky-sheets', kind: 'hardware', label: 'Sticky Trap' },
  { id: 'oriental-fruit-fly', kind: 'lure', label: 'Pheromone Lure' },
  { id: 'rhinoceros-beetle', kind: 'lure', label: 'Pheromone Lure' },
  { id: 'tuta-absoluta', kind: 'lure', label: 'Pheromone Lure' },
];

/**
 * The photographs that run across the top of the homepage.
 *
 * `src` is the strip-sized file the band renders; `full` is fetched only when
 * a visitor opens one in the lightbox. `caption` is the editorial line shown
 * on hover, `alt` describes the picture for anyone who cannot see it.
 */
export const FIELD_GALLERY = [
  {
    src: '/images/field/field-01.webp',
    full: '/images/field/field-01-full.webp',
    caption: 'A trap in the mango canopy at sundown',
    alt: 'A yellow pheromone trap hanging among ripening mangoes in an orchard at golden hour',
  },
  {
    src: '/images/field/field-02.webp',
    full: '/images/field/field-02-full.webp',
    caption: 'Morning inspection, before the heat sets in',
    alt: 'A farmer crouching in a brinjal field at sunrise, turning a leaf to check its underside',
  },
  {
    src: '/images/field/field-03.webp',
    full: '/images/field/field-03-full.webp',
    caption: 'A funnel trap staked above the cotton canopy',
    alt: 'A yellow funnel trap tied to a bamboo stake above flowering cotton at first light',
  },
  {
    src: '/images/field/field-04.webp',
    full: '/images/field/field-04-full.webp',
    caption: 'Bitter gourd and cucumber on a bamboo trellis',
    alt: 'Looking up through a bamboo trellis at bitter gourd and cucumber hanging among the vines',
  },
  {
    src: '/images/field/field-05.webp',
    full: '/images/field/field-05-full.webp',
    caption: 'Counting the week’s catch',
    alt: 'Two weathered hands opening the collection cup of a funnel trap, moths visible inside',
  },
  {
    src: '/images/field/field-06.webp',
    full: '/images/field/field-06-full.webp',
    caption: 'Coconut grove, trap fixed at trunk height',
    alt: 'A bucket trap strapped to a coconut palm trunk, the grove receding in low evening sun',
  },
  {
    src: '/images/field/field-07.webp',
    full: '/images/field/field-07-full.webp',
    caption: 'Cotton at flowering',
    alt: 'Rows of cotton in flower, white and pink blooms among green foliage on a clear morning',
  },
  {
    src: '/images/field/field-08.webp',
    full: '/images/field/field-08-full.webp',
    caption: 'Paddy after the rain',
    alt: 'Young paddy standing in flooded rows, an overcast sky reflected in the water',
  },
  {
    src: '/images/field/field-09.webp',
    full: '/images/field/field-09-full.webp',
    caption: 'Mangoes picked clean and unblemished',
    alt: 'A woven basket of freshly picked mangoes with leaves, seen from directly above',
  },
  {
    src: '/images/field/field-10.webp',
    full: '/images/field/field-10-full.webp',
    caption: 'Lures sealed and packed for dispatch',
    alt: 'Sealed foil pheromone lure sachets laid out on a table beside a packing carton',
  },
  {
    src: '/images/field/field-11.webp',
    full: '/images/field/field-11-full.webp',
    caption: 'Talking through the season ahead',
    alt: 'An agronomist and a farmer standing at the edge of a cotton field, mid-conversation',
  },
] as const;

/* -------------------------------------------------------------------------
 * About copy — from the company content sheet
 * ---------------------------------------------------------------------- */

export const ABOUT = {
  welcome:
    'Welcome to Crop Care Bio Solutions — empowering farmers everywhere and honoring the Earth that gives life to us.',
  company: [
    'Crop Care Bio Solutions is a manufacturer and exporter of eco-friendly pest management solutions, specializing in pheromone lures and insect traps designed to help farmers protect their crops naturally and effectively.',
    'At Crop Care Bio Solutions, we care deeply for both farmers and nature. Every product we create is simple, effective, and affordable — developed with a passion to empower farmers through science that works with nature, not against it.',
    'Our goal is not just to sell products, but to build awareness, trust, and confidence among farmers, helping them adopt sustainable and nature-friendly farming practices that preserve soil, water, and the environment for future generations.',
  ],
  mission:
    'At Crop Care Bio Solutions, our mission is to empower farmers with eco-friendly, safe, and effective crop protection solutions that work in harmony with nature. We strive to reduce chemical dependency, preserve soil and water, and provide scientifically-backed, affordable products that help every farmer cultivate healthy and productive crops.',
  vision:
    'Our vision is to create a future where farmers thrive, nature flourishes, and every crop grows in harmony with the Earth. We aim to be a trusted partner for farmers worldwide, promoting sustainability, nurturing communities, and contributing to a greener, healthier planet for generations to come.',
  closing: 'Every harvest tells a story of hope — written by farmers, nurtured by nature.',
} as const;

export const WE_STAND_FOR = [
  {
    title: 'Crop Care Bio Solutions',
    body: 'Caring for Farmers. Caring for Nature.',
  },
  {
    title: 'Farmer First',
    body: 'Every decision begins with the farmer’s needs and ends with their satisfaction.',
  },
  {
    title: 'Care for Nature',
    body: 'Dedicated to working with nature, not against it.',
  },
  {
    title: 'Eco-Innovation',
    body: 'Sustainable, effective, and residue-free technologies that protect crops and the environment.',
  },
  {
    title: 'Trust & Togetherness',
    body: 'Growing together with farmers, partners, and communities through trust, respect, and shared success.',
  },
] as const;

/* -------------------------------------------------------------------------
 * Crop Solutions
 * ---------------------------------------------------------------------- */

export const CROP_SOLUTIONS: CropSolution[] = [
  {
    id: 'vegetables',
    name: 'Vegetables & Cucurbits',
    crops: [
      'Cucumber',
      'Bitter Gourd',
      'Bottle Gourd',
      'Ridge Gourd',
      'Snake Gourd',
      'Pumpkin',
      'Zucchini',
      'Watermelon',
      'Muskmelon',
      'Tomato',
      'Potato',
      'Brinjal',
      'Cabbage',
      'Cauliflower',
      'Broccoli',
    ],
    threat: 'Melon fly, tomato leaf miner, shoot borer and diamondback moth',
    symptoms:
      'Puncture marks and oozing on fruit, maggots inside the pulp, pale mines and pinholes on leaves, bored shoots that droop and dry.',
    lureIds: ['melon-fly', 'tuta-absoluta', 'shoot-borer', 'diamondback-moth'],
  },
  {
    id: 'orchards',
    name: 'Fruit Orchards',
    crops: ['Mango', 'Guava', 'Citrus', 'Papaya', 'Avocado', 'Passion Fruit'],
    threat: 'Oriental fruit fly',
    symptoms:
      'Sting marks on ripening fruit, soft brown patches under the skin, early fruit drop and maggots in the flesh.',
    lureIds: ['oriental-fruit-fly', 'melon-fly'],
  },
  {
    id: 'palms',
    name: 'Coconut & Palm Groves',
    crops: ['Coconut', 'Arecanut', 'Date Palm', 'Oil Palm'],
    threat: 'Red palm weevil and rhinoceros beetle',
    symptoms:
      'Holes in the trunk with chewed fibre and fermented ooze, cut fronds in a V-notch, a crown that wilts from the centre.',
    lureIds: ['red-palm-weevil', 'rpw-magnet', 'rhinoceros-beetle'],
  },
  {
    id: 'field-crops',
    name: 'Cotton, Pulses & Field Crops',
    crops: [
      'Cotton',
      'Gram / Chickpea',
      'Pigeon Pea',
      'Maize',
      'Sugarcane',
      'Sorghum',
      'Rice',
      'Soybean',
      'Groundnut',
      'Sunflower',
      'Chilli',
      'Tobacco',
    ],
    threat: 'Bollworm, pink bollworm, cutworm, armyworm and stem borer',
    symptoms:
      'Bored bolls and shed squares, rosetted flowers, ragged windowed leaves, dead hearts and white ears in paddy.',
    lureIds: [
      'cotton-bollworm',
      'pink-bollworm',
      'tobacco-cutworm',
      'fall-armyworm',
      'yellow-stem-borer',
    ],
  },
];

export const ENQUIRER_TYPES = [
  'Farmer / Grower',
  'Dealer / Distributor',
  'Plantation owner',
  'FPO / Cooperative',
  'Exporter',
  'Other',
] as const;
