import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import type { PageId, Product } from './types';
import { PAGE_TITLES } from './data/site';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ProductSheet } from './components/product/ProductSheet';
import { Lightbox } from './components/ui/Lightbox';
import { WhatsAppTab } from './components/layout/WhatsAppTab';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { TrapsPage } from './pages/TrapsPage';
import { CropSolutionsPage } from './pages/CropSolutionsPage';
import { ContactPage } from './pages/ContactPage';

const PAGES: PageId[] = ['home', 'about', 'products', 'traps', 'crop-solutions', 'contact'];

/** Hashes used by the earlier version of the site, kept working. */
const LEGACY_HASHES: Record<string, PageId> = {
  'trap-guide': 'traps',
  'pest-finder': 'crop-solutions',
};

const readHash = (): PageId => {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (PAGES.includes(hash as PageId)) return hash as PageId;
  return LEGACY_HASHES[hash] ?? 'home';
};

export default function App() {
  // Resolved before first paint, so a deep link renders its page directly
  // instead of mounting home and transitioning away from it.
  const [page, setPage] = useState<PageId>(readHash);
  const [sheetProduct, setSheetProduct] = useState<Product | null>(null);
  const [quoteProduct, setQuoteProduct] = useState('');
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sync = () => setPage(readHash());
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  /* Keep the tab title in step with the route, for history and bookmarks. */
  useEffect(() => {
    document.title =
      page === 'home'
        ? 'Crop Care Bio Solutions — Pheromone Lures & Insect Traps'
        : `${PAGE_TITLES[page]} — Crop Care Bio Solutions`;
  }, [page]);

  const navigate = useCallback(
    (next: PageId) => {
      window.location.hash = next;
      setPage(next);
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    },
    [reduceMotion],
  );

  const requestQuote = useCallback(
    (productName: string) => {
      setQuoteProduct(productName);
      navigate('contact');
    },
    [navigate],
  );

  const openZoom = useCallback((src: string, alt: string) => setLightbox({ src, alt }), []);
  const closeSheet = useCallback(() => setSheetProduct(null), []);

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-pine focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>

      <Navbar currentPage={page} onNavigate={navigate} />

      <main id="main" className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={page}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {page === 'home' && (
              <HomePage
                onNavigate={navigate}
                onOpenProduct={setSheetProduct}
                onZoom={openZoom}
              />
            )}

            {page === 'about' && <AboutPage onNavigate={navigate} />}

            {page === 'products' && (
              <ProductsPage
                onNavigate={navigate}
                onOpenProduct={setSheetProduct}
                onRequestQuote={requestQuote}
              />
            )}

            {page === 'traps' && (
              <TrapsPage
                onNavigate={navigate}
                onRequestQuote={requestQuote}
                onZoom={openZoom}
              />
            )}

            {page === 'crop-solutions' && (
              <CropSolutionsPage
                onNavigate={navigate}
                onOpenProduct={setSheetProduct}
                onRequestQuote={requestQuote}
              />
            )}

            {page === 'contact' && (
              <ContactPage onNavigate={navigate} prefillProduct={quoteProduct} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigate} />

      <WhatsAppTab />

      <ProductSheet
        product={sheetProduct}
        onClose={closeSheet}
        onRequestQuote={requestQuote}
        onZoom={openZoom}
      />

      <Lightbox
        open={lightbox !== null}
        src={lightbox?.src ?? ''}
        alt={lightbox?.alt ?? ''}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
}
