import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId, Product } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingAgronomistTrigger } from './components/FloatingAgronomistTrigger';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';

// Dedicated Section Pages
import { HomePage } from './pages/HomePage';
import { WhyUsPage } from './pages/WhyUsPage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { PestFinderPage } from './pages/PestFinderPage';
import { TrapGuidePage } from './pages/TrapGuidePage';
import { CalculatorPage } from './pages/CalculatorPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Quotation pre-fill state
  const [preFilledProduct, setPreFilledProduct] = useState<string>('');
  const [preFilledAcreage, setPreFilledAcreage] = useState<string>('');

  // Lightbox Modal state
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxSrc, setLightboxSrc] = useState<string>('');
  const [lightboxAlt, setLightboxAlt] = useState<string>('');

  // Handle URL hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'why-us',
        'about',
        'products',
        'pest-finder',
        'trap-guide',
        'calculator',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProductModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  const handleInquireProduct = (productName: string) => {
    setPreFilledProduct(productName);
    handleNavigate('contact');
  };

  const handlePreFillInquiry = (productName: string, acreage: string) => {
    setPreFilledProduct(productName);
    setPreFilledAcreage(acreage);
    handleNavigate('contact');
  };

  const handleOpenLightbox = (src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#3C3C3C] flex flex-col font-sans selection:bg-[#606C38] selection:text-white relative">
      
      {/* Sticky Global Glassmorphic Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area with Smooth Page Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onSelectProduct={handleOpenProductModal}
                onInquireProduct={handleInquireProduct}
                onZoomImage={handleOpenLightbox}
              />
            )}

            {currentPage === 'why-us' && (
              <WhyUsPage
                onNavigate={handleNavigate}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage
                onNavigate={handleNavigate}
              />
            )}

            {currentPage === 'products' && (
              <ProductsPage
                onNavigate={handleNavigate}
                onSelectProduct={handleOpenProductModal}
                onInquireProduct={handleInquireProduct}
                onZoomImage={handleOpenLightbox}
              />
            )}

            {currentPage === 'pest-finder' && (
              <PestFinderPage
                onNavigate={handleNavigate}
                onSelectProduct={handleOpenProductModal}
                onInquireProduct={handleInquireProduct}
                onZoomImage={handleOpenLightbox}
              />
            )}

            {currentPage === 'trap-guide' && (
              <TrapGuidePage
                onNavigate={handleNavigate}
                onInquireItem={handleInquireProduct}
                onZoomImage={handleOpenLightbox}
              />
            )}

            {currentPage === 'calculator' && (
              <CalculatorPage
                onNavigate={handleNavigate}
                onPreFillInquiry={handlePreFillInquiry}
                onZoomImage={handleOpenLightbox}
              />
            )}

            {currentPage === 'contact' && (
              <ContactPage
                onNavigate={handleNavigate}
                preFilledProduct={preFilledProduct}
                preFilledAcreage={preFilledAcreage}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Comprehensive Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Persistent Floating Agronomist & Mobile Action Bar */}
      <FloatingAgronomistTrigger onNavigate={handleNavigate} />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={handleCloseProductModal}
        onSelectForInquiry={handleInquireProduct}
        onZoomImage={handleOpenLightbox}
      />

      {/* Full-Screen Image Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightboxOpen}
        imageSrc={lightboxSrc}
        imageAlt={lightboxAlt}
        onClose={handleCloseLightbox}
      />

    </div>
  );
}

export default App;
