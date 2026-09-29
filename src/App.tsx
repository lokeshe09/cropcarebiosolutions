import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import type { PageId, Product } from './types';
import { PAGE_PATHS, parseRoute, productPath, routePath } from './lib/routes';
import { syncHead } from './lib/head';
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

/** History entries for an open product carry the page it was opened over. */
interface SheetState {
  sheet: true;
  bg: PageId;
}

const sheetState = (): SheetState | null => {
  const state = window.history.state as SheetState | null;
  return state?.sheet ? state : null;
};

export default function App() {
  // Resolved before first paint, so a deep link renders its page directly
  // instead of mounting home and transitioning away from it.
  const [initial] = useState(() => parseRoute(window.location.pathname, window.location.hash));
  const [page, setPage] = useState<PageId>(initial.page);
  const [notFound, setNotFound] = useState(Boolean(initial.notFound));
  const [sheetProduct, setSheetProduct] = useState<Product | null>(initial.product ?? null);
  const [quoteProduct, setQuoteProduct] = useState('');
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const reduceMotion = useReducedMotion();

  /* Closing a sheet steps back through history, which lands asynchronously;
     a navigation asked for in the meantime waits for it. */
  const closingSheet = useRef(false);
  const pendingPage = useRef<PageId | null>(null);

  const navigate = useCallback(
    (next: PageId) => {
      const path = PAGE_PATHS[next];
      if (sheetState()) window.history.replaceState(null, '', path);
      else if (window.location.pathname !== path) window.history.pushState(null, '', path);

      setSheetProduct(null);
      setNotFound(false);
      setPage(next);
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    },
    [reduceMotion],
  );

  /* Old #hash links become clean paths, so bookmarks keep working. */
  useEffect(() => {
    if (initial.notFound) return;
    const target = routePath(initial);
    if (window.location.pathname !== target || parseRoute(window.location.pathname).page !== initial.page) {
      window.history.replaceState(null, '', target);
    }
  }, [initial]);

  useEffect(() => {
    const onPopState = () => {
      closingSheet.current = false;

      if (pendingPage.current) {
        const next = pendingPage.current;
        pendingPage.current = null;
        navigate(next);
        return;
      }

      const route = parseRoute(window.location.pathname, window.location.hash);
      setNotFound(Boolean(route.notFound));

      if (route.product) {
        setSheetProduct(route.product);
        setPage(sheetState()?.bg ?? 'products');
      } else {
        setSheetProduct(null);
        setPage(route.page);
      }
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [navigate]);

  /* Title, description, canonical and structured data follow the screen. */
  useEffect(() => {
    syncHead(
      notFound
        ? { page, notFound: true }
        : { page: sheetProduct ? 'products' : page, product: sheetProduct ?? undefined },
    );
  }, [page, sheetProduct, notFound]);

  /** Each product has its own address, so it can be shared and indexed. */
  const openProduct = useCallback(
    (product: Product) => {
      const state: SheetState = { sheet: true, bg: page };
      if (sheetState()) window.history.replaceState(state, '', productPath(product));
      else window.history.pushState(state, '', productPath(product));
      setSheetProduct(product);
    },
    [page],
  );

  const closeSheet = useCallback(() => {
    setSheetProduct(null);
    if (sheetState()) {
      closingSheet.current = true;
      window.history.back();
    } else {
      // Arrived straight on a product address: settle on its page instead.
      window.history.replaceState(null, '', PAGE_PATHS[page]);
    }
  }, [page]);

  const requestQuote = useCallback(
    (productName: string) => {
      setQuoteProduct(productName);
      if (closingSheet.current) pendingPage.current = 'contact';
      else navigate('contact');
    },
    [navigate],
  );

  const openZoom = useCallback((src: string, alt: string) => setLightbox({ src, alt }), []);

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
                onOpenProduct={openProduct}
                onZoom={openZoom}
              />
            )}

            {page === 'about' && <AboutPage onNavigate={navigate} />}

            {page === 'products' && (
              <ProductsPage
                onNavigate={navigate}
                onOpenProduct={openProduct}
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
                onOpenProduct={openProduct}
                onRequestQuote={requestQuote}
              />
            )}

            {page === 'contact' && (
              <ContactPage onNavigate={navigate} prefillProduct={quoteProduct} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigate} onOpenProduct={openProduct} />

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
