import type { PageId, Product } from '../types';
import { PRODUCTS } from './products';
import { TRAPS, BIO_TOOLS } from './traps';
import { COMPANY, CONTACT, SERVICE_AREAS, ABOUT, HOME } from './site';
import { PAGE_ORDER, PAGE_PATHS, productPath, type Route } from '../lib/routes';

/**
 * Search engine settings for every page — the one place to edit titles,
 * descriptions and structured data.
 *
 * Used twice: in the browser to keep the <head> in step as visitors move
 * around, and by vite.config.ts at build time to write a finished HTML file
 * per page plus sitemap.xml and robots.txt. Nothing here may touch the DOM.
 *
 * Titles stay near 60 characters and descriptions near 155, which is what
 * Google shows before truncating. Place names appear where they are true —
 * the company is in Hyderabad and supplies across India — rather than being
 * repeated for every state, which Google treats as keyword stuffing.
 */

export const SITE_URL = 'https://cropcarebiosolutions.com';
export const OG_IMAGE = `${SITE_URL}/brand/og-image.png`;
export const LOGO_URL = `${SITE_URL}/brand/logo-mark@2x.png`;

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  /** Breadcrumb trail after "Home". */
  trail: { name: string; path: string }[];
  image?: string;
  imageAlt?: string;
  ogType?: 'website' | 'product';
  noindex?: boolean;
}

const absolute = (path: string) => (path.startsWith('http') ? path : `${SITE_URL}${path}`);

const BASE_KEYWORDS = [
  'Crop Care Bio Solutions',
  'pheromone lures',
  'insect traps',
  'pheromone lure manufacturer Hyderabad',
  'eco-friendly pest control',
];

export const PAGE_META: Record<PageId, PageMeta> = {
  home: {
    path: PAGE_PATHS.home,
    title: 'Crop Care Bio Solutions | Pheromone Lures & Insect Traps, Hyderabad',
    description:
      'Hyderabad manufacturer & exporter of pheromone lures, fruit fly traps, funnel traps and sticky traps. Eco-friendly pest control for farmers across India.',
    keywords: [
      ...BASE_KEYWORDS,
      'bio solutions Hyderabad',
      'pheromone traps Telangana',
      'pheromone traps Andhra Pradesh',
      'fruit fly trap',
      'organic pest control India',
    ],
    trail: [],
  },
  about: {
    path: PAGE_PATHS.about,
    title: 'About Crop Care Bio Solutions | Eco-Friendly Pest Management',
    description:
      'Crop Care Bio Solutions is a Hyderabad-based manufacturer and exporter of pheromone lures and insect traps, helping farmers protect crops naturally and sustainably.',
    keywords: [...BASE_KEYWORDS, 'about Crop Care Bio Solutions', 'biological pest control company'],
    trail: [{ name: 'About', path: PAGE_PATHS.about }],
  },
  products: {
    path: PAGE_PATHS.products,
    title: 'Pheromone Lures Manufacturer in India | Crop Care Bio Solutions',
    description:
      'Pheromone lures for fruit fly, melon fly, Tuta absoluta, bollworm, fall armyworm, stem borer, red palm weevil and rhinoceros beetle. Made in Hyderabad, India.',
    keywords: [
      ...BASE_KEYWORDS,
      'fruit fly lure',
      'melon fly lure',
      'Tuta absoluta lure',
      'cotton bollworm pheromone',
      'red palm weevil lure',
      'fall armyworm lure',
    ],
    trail: [{ name: 'Pheromone Lures', path: PAGE_PATHS.products }],
  },
  traps: {
    path: PAGE_PATHS.traps,
    title: 'Insect Traps: Fruit Fly, Funnel, Delta & Sticky Traps | Crop Care',
    description:
      'Fruit fly traps, vertical fruit fly traps, glass traps, funnel traps, water traps, delta traps, palm traps, solar light traps, yellow and blue sticky traps. Manufacturer in Hyderabad, India.',
    keywords: [
      ...BASE_KEYWORDS,
      'fruit fly trap',
      'funnel trap',
      'sticky traps',
      'yellow sticky trap',
      'solar light trap',
      'delta trap',
      'vertical fruit fly trap',
    ],
    trail: [{ name: 'Insect Traps', path: PAGE_PATHS.traps }],
  },
  'crop-solutions': {
    path: PAGE_PATHS['crop-solutions'],
    title: 'Crop-wise Pest Solutions: Lures & Traps by Crop | Crop Care',
    description:
      'Find the right pheromone lure and trap for your crop — vegetables, mango and fruit orchards, coconut and palms, cotton, paddy, maize and pulses.',
    keywords: [
      ...BASE_KEYWORDS,
      'pest control for tomato',
      'mango fruit fly control',
      'coconut red palm weevil control',
      'cotton pink bollworm control',
      'paddy stem borer trap',
    ],
    trail: [{ name: 'Crop Solutions', path: PAGE_PATHS['crop-solutions'] }],
  },
  contact: {
    path: PAGE_PATHS.contact,
    title: 'Contact Crop Care Bio Solutions, Hyderabad | Dealer Enquiries',
    description: `Call ${CONTACT.phonePrimary.display} or WhatsApp for pheromone lures and insect traps. Supplying farmers, dealers and FPOs in Telangana, Andhra Pradesh and across India.`,
    keywords: [
      ...BASE_KEYWORDS,
      'pheromone lure dealer',
      'insect trap supplier Hyderabad',
      'pheromone traps Telangana',
      'pheromone traps Andhra Pradesh',
    ],
    trail: [{ name: 'Contact', path: PAGE_PATHS.contact }],
  },
};

const clip = (text: string, max = 158) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
};

export function productMeta(product: Product): PageMeta {
  // Name the pest the way it is searched: the Latin name when the product
  // name is common, the common name when the product name is Latin.
  const companion = product.companionTo && PRODUCTS.find((item) => item.id === product.companionTo);
  const latin = companion
    ? ` for ${companion.pestCommonName}`
    : product.scientificName && !product.name.includes(product.scientificName)
      ? ` (${product.scientificName})`
      : ` (${product.pestCommonName})`;
  const firstSentence = product.description[0]?.split('. ')[0] ?? '';

  return {
    path: productPath(product),
    title: `${product.name}${latin} | Crop Care Bio Solutions`,
    description: clip(
      `${firstSentence}. For ${product.targetCrops.slice(0, 4).join(', ')}. Made in Hyderabad, India.`,
    ),
    keywords: [
      product.name,
      `${product.pestCommonName} lure`,
      `${product.pestCommonName} trap`,
      ...(product.scientificName ? [`${product.scientificName} pheromone`] : []),
      ...product.targetCrops.slice(0, 4).map((crop) => `${crop} pest control`),
      'Crop Care Bio Solutions',
    ],
    trail: [
      { name: 'Pheromone Lures', path: PAGE_PATHS.products },
      { name: product.name, path: productPath(product) },
    ],
    image: product.imageUrl || undefined,
    imageAlt: product.imageAlt,
    ogType: 'product',
  };
}

export const NOT_FOUND_META: PageMeta = {
  path: '/404',
  title: 'Page not found | Crop Care Bio Solutions',
  description: PAGE_META.home.description,
  keywords: [],
  trail: [],
  noindex: true,
};

export function metaForRoute(route: Route): PageMeta {
  if (route.notFound) return NOT_FOUND_META;
  if (route.product) return productMeta(route.product);
  return PAGE_META[route.page];
}

/* -------------------------------------------------------------------------
 * Structured data (schema.org JSON-LD)
 * ---------------------------------------------------------------------- */

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

const areaServed = [
  { '@type': 'Country', name: 'India' },
  ...[...SERVICE_AREAS.states, ...SERVICE_AREAS.unionTerritories].map((name) => ({
    '@type': 'State',
    name,
  })),
];

function organization() {
  return {
    '@type': 'LocalBusiness',
    '@id': ORG_ID,
    name: COMPANY.name,
    alternateName: ['Crop Care', 'CropCare Bio Solutions'],
    url: `${SITE_URL}/`,
    logo: { '@type': 'ImageObject', url: LOGO_URL, width: 512, height: 512 },
    image: OG_IMAGE,
    description: COMPANY.descriptorFull,
    slogan: COMPANY.slogan,
    telephone: CONTACT.phonePrimary.dial,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.streetAddress,
      addressLocality: SERVICE_AREAS.home.city,
      addressRegion: SERVICE_AREAS.home.state,
      postalCode: SERVICE_AREAS.home.postalCode,
      addressCountry: 'IN',
    },
    areaServed,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT.phonePrimary.dial,
      contactType: 'sales',
      areaServed: 'IN',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    knowsAbout: [
      'Pheromone lures',
      'Insect traps',
      'Integrated pest management',
      'Fruit fly control',
      'Red palm weevil control',
      'Sticky traps',
      'Eco-friendly crop protection',
    ],
    makesOffer: {
      '@type': 'OfferCatalog',
      name: 'Pheromone lures and insect traps',
      itemListElement: [
        { '@type': 'OfferCatalog', name: 'Pheromone Lures', url: absolute(PAGE_PATHS.products) },
        { '@type': 'OfferCatalog', name: 'Insect Traps', url: absolute(PAGE_PATHS.traps) },
      ],
    },
  };
}

function website() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: `${SITE_URL}/`,
    name: COMPANY.name,
    description: HOME.heroCaption,
    inLanguage: 'en-IN',
    publisher: { '@id': ORG_ID },
  };
}

function breadcrumb(meta: PageMeta) {
  const items = [{ name: 'Home', path: '/' }, ...meta.trail];
  return {
    '@type': 'BreadcrumbList',
    '@id': `${absolute(meta.path)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

function webPage(meta: PageMeta, type = 'WebPage') {
  return {
    '@type': type,
    '@id': `${absolute(meta.path)}#webpage`,
    url: absolute(meta.path),
    name: meta.title,
    description: meta.description,
    inLanguage: 'en-IN',
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    ...(meta.trail.length ? { breadcrumb: { '@id': `${absolute(meta.path)}#breadcrumb` } } : {}),
    ...(meta.image ? { primaryImageOfPage: absolute(meta.image) } : {}),
  };
}

function productNode(product: Product) {
  return {
    '@type': 'Product',
    '@id': `${absolute(productPath(product))}#product`,
    name: product.name,
    url: absolute(productPath(product)),
    description: product.description.join(' '),
    sku: product.code,
    category: product.companionTo ? 'Pheromone lure attractant' : 'Pheromone lure',
    ...(product.imageUrl ? { image: absolute(product.imageUrl) } : {}),
    brand: { '@type': 'Brand', name: COMPANY.name },
    manufacturer: { '@id': ORG_ID },
    countryOfOrigin: 'IN',
    ...(product.activeIngredient
      ? {
          additionalProperty: [
            { '@type': 'PropertyValue', name: 'Active ingredient', value: product.activeIngredient },
          ],
        }
      : {}),
  };
}

function itemList(name: string, entries: { name: string; url: string }[]) {
  return {
    '@type': 'ItemList',
    name,
    numberOfItems: entries.length,
    itemListElement: entries.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      url: entry.url,
    })),
  };
}

export function structuredData(route: Route): object {
  const meta = metaForRoute(route);
  const graph: object[] = [organization(), website()];

  if (route.notFound) return { '@context': 'https://schema.org', '@graph': graph };

  const pageType =
    route.page === 'about' ? 'AboutPage' : route.page === 'contact' ? 'ContactPage' : 'WebPage';
  graph.push(webPage(meta, route.product ? 'ItemPage' : pageType));
  if (meta.trail.length) graph.push(breadcrumb(meta));

  if (route.product) {
    graph.push(productNode(route.product));
  } else if (route.page === 'products') {
    graph.push(
      itemList(
        'Pheromone lures',
        PRODUCTS.map((product) => ({ name: product.name, url: absolute(productPath(product)) })),
      ),
    );
  } else if (route.page === 'traps') {
    graph.push(
      itemList(
        'Insect traps',
        [...TRAPS, ...BIO_TOOLS].map((item) => ({
          name: item.name,
          url: `${absolute(PAGE_PATHS.traps)}#${item.id}`,
        })),
      ),
    );
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

/* -------------------------------------------------------------------------
 * Build-time output
 * ---------------------------------------------------------------------- */

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** The tags the browser-side head sync keeps up to date, in the same shape. */
export function renderHead(route: Route): string {
  const meta = metaForRoute(route);
  const url = absolute(meta.path);
  const image = meta.image ? absolute(meta.image) : OG_IMAGE;
  const json = JSON.stringify(structuredData(route)).replace(/</g, '\\u003c');

  return [
    `<title data-seo>${escapeHtml(meta.title)}</title>`,
    `<meta data-seo name="description" content="${escapeHtml(meta.description)}" />`,
    `<meta data-seo name="keywords" content="${escapeHtml(meta.keywords.join(', '))}" />`,
    `<meta data-seo name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}" />`,
    meta.noindex ? '' : `<link data-seo rel="canonical" href="${url}" />`,
    meta.noindex ? '' : `<link data-seo rel="alternate" hreflang="en-IN" href="${url}" />`,
    meta.noindex ? '' : `<link data-seo rel="alternate" hreflang="x-default" href="${url}" />`,
    `<meta data-seo property="og:type" content="${meta.ogType ?? 'website'}" />`,
    `<meta data-seo property="og:site_name" content="${escapeHtml(COMPANY.name)}" />`,
    `<meta data-seo property="og:locale" content="en_IN" />`,
    `<meta data-seo property="og:url" content="${url}" />`,
    `<meta data-seo property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta data-seo property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta data-seo property="og:image" content="${image}" />`,
    meta.image ? '' : `<meta data-seo property="og:image:width" content="1200" />`,
    meta.image ? '' : `<meta data-seo property="og:image:height" content="630" />`,
    `<meta data-seo property="og:image:alt" content="${escapeHtml(meta.imageAlt ?? `${COMPANY.name} — ${COMPANY.slogan}`)}" />`,
    `<meta data-seo name="twitter:card" content="summary_large_image" />`,
    `<meta data-seo name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta data-seo name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<meta data-seo name="twitter:image" content="${image}" />`,
    `<script data-seo type="application/ld+json">${json}</script>`,
  ]
    .filter(Boolean)
    .join('\n    ');
}

/**
 * Plain HTML for crawlers and anyone without JavaScript. Visitors with
 * JavaScript never see it; it holds the same words the page renders.
 */
export function renderNoscript(route: Route): string {
  const meta = metaForRoute(route);
  const links = PAGE_ORDER.map(
    (id) => `<li><a href="${PAGE_PATHS[id]}">${escapeHtml(PAGE_META[id].trail[0]?.name ?? 'Home')}</a></li>`,
  ).join('');
  const productLinks = PRODUCTS.map(
    (product) => `<li><a href="${productPath(product)}">${escapeHtml(product.name)}</a></li>`,
  ).join('');

  let body = '';
  if (route.product) {
    const product = route.product;
    body = [
      `<h1>${escapeHtml(product.name)}</h1>`,
      product.scientificName ? `<p><em>${escapeHtml(product.scientificName)}</em></p>` : '',
      ...product.description.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`),
      `<h2>Target crops</h2><p>${escapeHtml(product.targetCrops.join(', '))}</p>`,
      product.application.length
        ? `<h2>How to apply</h2><ul>${product.application.map((step) => `<li>${escapeHtml(step)}</li>`).join('')}</ul>`
        : '',
      `<h2>Use with</h2><p>${escapeHtml(product.recommendedTraps.join(', '))}</p>`,
    ].join('');
  } else if (route.page === 'about') {
    body = `<h1>About ${escapeHtml(COMPANY.name)}</h1>${ABOUT.company.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}<h2>Mission</h2><p>${escapeHtml(ABOUT.mission)}</p><h2>Vision</h2><p>${escapeHtml(ABOUT.vision)}</p>`;
  } else if (route.page === 'traps') {
    body = `<h1>Insect Traps</h1><p>${escapeHtml(meta.description)}</p><ul>${[...TRAPS, ...BIO_TOOLS]
      .map((item) => `<li><strong>${escapeHtml(item.name)}</strong> — ${escapeHtml(item.description)}</li>`)
      .join('')}</ul>`;
  } else {
    body = `<h1>${escapeHtml(meta.title.split(' | ')[0])}</h1><p>${escapeHtml(meta.description)}</p><p>${escapeHtml(COMPANY.descriptorFull)}</p>`;
  }

  const address = `${COMPANY.name}, ${SERVICE_AREAS.home.city} – ${SERVICE_AREAS.home.postalCode}, ${SERVICE_AREAS.home.state}, India. Phone: ${CONTACT.phonePrimary.display}.`;

  return `<noscript><main>${body}<nav><h2>Pages</h2><ul>${links}</ul><h2>Pheromone lures</h2><ul>${productLinks}</ul></nav><address>${escapeHtml(address)}</address></main></noscript>`;
}

/** Every indexable address, for the sitemap and the per-page HTML files. */
export function allRoutes(): Route[] {
  return [
    ...PAGE_ORDER.map((page) => ({ page })),
    ...PRODUCTS.map((product) => ({ page: 'products' as PageId, product })),
  ];
}

export function renderSitemap(lastmod: string): string {
  const imageTag = (src: string, title: string) =>
    `\n    <image:image>\n      <image:loc>${absolute(src)}</image:loc>\n      <image:title>${escapeHtml(title)}</image:title>\n    </image:image>`;

  const priority: Record<PageId, string> = {
    home: '1.0',
    products: '0.9',
    traps: '0.9',
    'crop-solutions': '0.8',
    about: '0.7',
    contact: '0.8',
  };

  const entries = allRoutes().map((route) => {
    const meta = metaForRoute(route);
    let images = '';
    if (route.product?.imageUrl) images = imageTag(route.product.imageUrl, route.product.name);
    if (!route.product && route.page === 'traps') {
      const seen = new Set<string>();
      images = [...TRAPS, ...BIO_TOOLS]
        .filter((item) => !seen.has(item.imageUrl) && seen.add(item.imageUrl))
        .map((item) => imageTag(item.imageUrl, item.name))
        .join('');
    }
    if (!route.product && route.page === 'products') {
      images = PRODUCTS.filter((product) => product.imageUrl)
        .map((product) => imageTag(product.imageUrl, product.name))
        .join('');
    }

    return `  <url>
    <loc>${absolute(meta.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.product ? 'monthly' : 'weekly'}</changefreq>
    <priority>${route.product ? '0.8' : priority[route.page]}</priority>${images}
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join('\n')}
</urlset>
`;
}

export function renderRobots(): string {
  return `# Crop Care Bio Solutions — ${SITE_URL}
# Every page is open to search engines. The sitemap lists them all,
# including one page per pheromone lure.

User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}
