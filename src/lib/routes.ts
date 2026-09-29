import type { PageId, Product } from '../types';
import { PRODUCTS } from '../data/products';

/**
 * Every page lives at a real path, so search engines can index each one on its
 * own. (A `#hash` address is treated as the homepage by Google.) The slugs
 * carry the words people actually search for.
 *
 * This module is also imported by vite.config.ts at build time, so it must not
 * touch `window` or `document` at the top level.
 */
export const PAGE_PATHS: Record<PageId, string> = {
  home: '/',
  about: '/about',
  products: '/pheromone-lures',
  traps: '/insect-traps',
  'crop-solutions': '/crop-solutions',
  contact: '/contact',
};

export const PAGE_ORDER: PageId[] = [
  'home',
  'about',
  'products',
  'traps',
  'crop-solutions',
  'contact',
];

export const slugify = (value: string): string =>
  value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const productSlug = (product: Product): string => slugify(product.name);

export const productPath = (product: Product): string =>
  `${PAGE_PATHS.products}/${productSlug(product)}`;

export const findProductBySlug = (slug: string): Product | undefined =>
  PRODUCTS.find((product) => productSlug(product) === slug);

/** Addresses used by earlier versions of the site, kept working. */
const LEGACY: Record<string, PageId> = {
  home: 'home',
  about: 'about',
  products: 'products',
  traps: 'traps',
  'trap-guide': 'traps',
  'crop-solutions': 'crop-solutions',
  'pest-finder': 'crop-solutions',
  contact: 'contact',
};

export interface Route {
  page: PageId;
  product?: Product;
  /** True when the path matched nothing; the page renders home but is not indexable. */
  notFound?: boolean;
}

const trimSlashes = (path: string) => path.replace(/\/+$/, '') || '/';

export function parseRoute(pathname: string, hash = ''): Route {
  const path = trimSlashes(pathname);

  // Old hash links (#about, #/products, #trap-guide …) from the previous build.
  if (path === '/' && hash) {
    const legacy = LEGACY[hash.replace(/^#\/?/, '')];
    if (legacy) return { page: legacy };
  }

  const page = PAGE_ORDER.find((id) => PAGE_PATHS[id] === path);
  if (page) return { page };

  const productPrefix = `${PAGE_PATHS.products}/`;
  if (path.startsWith(productPrefix)) {
    const product = findProductBySlug(path.slice(productPrefix.length));
    if (product) return { page: 'products', product };
  }

  const legacyPath = LEGACY[path.slice(1)];
  if (legacyPath) return { page: legacyPath };

  return { page: 'home', notFound: true };
}

export const routePath = (route: Route): string =>
  route.product ? productPath(route.product) : PAGE_PATHS[route.page];
