import React from 'react';
import { Product, PageId } from '../types';
import { HeroSection } from '../components/HeroSection';
import { TrustCertificationBar } from '../components/TrustCertificationBar';
import { EditorialPillarsStrip } from '../components/EditorialPillarsStrip';
import { AgriculturalNarrativeSection } from '../components/AgriculturalNarrativeSection';
import { RealFieldGallerySection } from '../components/RealFieldGallerySection';
import { InteractiveCropMatcher } from '../components/InteractiveCropMatcher';
import { PestLifecycleDiagram } from '../components/PestLifecycleDiagram';
import { ProductsSection } from '../components/ProductsSection';
import { HowItWorksTimeline } from '../components/HowItWorksTimeline';
import { ChemicalVsBioComparison } from '../components/ChemicalVsBioComparison';
import { FarmEconomicsSection } from '../components/FarmEconomicsSection';
import { QuickDoseEstimator } from '../components/QuickDoseEstimator';
import { FinalContactInvitation } from '../components/FinalContactInvitation';
import { NatureParticleCanvas } from '../components/NatureParticleCanvas';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onInquireProduct: (productName: string) => void;
  onZoomImage: (src: string, alt: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onInquireProduct,
  onZoomImage,
}) => {
  return (
    <div className="space-y-16 lg:space-y-24 pb-12 relative overflow-hidden">
      {/* Subtle Atmospheric Nature Particle Canvas */}
      <NatureParticleCanvas density="low" />
      
      {/* 1. Cinematic Hero Section with Natural Orchard Photography & High-Contrast Typography */}
      <HeroSection 
        onExploreProducts={() => onNavigate('products')}
        onOpenContact={() => onNavigate('contact')}
        onOpenCalculator={() => onNavigate('calculator')}
      />

      {/* 2. Editorial Horizontal Trust & Certification Strip */}
      <TrustCertificationBar />

      {/* 3. The 3 Bio-Rational Pillars (Asymmetric Editorial Strip with Macro Photography - NOT 3 Generic Cards) */}
      <EditorialPillarsStrip onNavigate={onNavigate} />

      {/* 4. The Biotechnology Story: Problem → Science → Export Result Narrative */}
      <AgriculturalNarrativeSection onNavigate={onNavigate} />

      {/* 5. Real Field Gallery & Visual Installations Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RealFieldGallerySection 
          onNavigate={onNavigate}
          onZoomImage={onZoomImage}
        />
      </section>

      {/* 6. Interactive Crop-to-Pest Matcher Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveCropMatcher onNavigate={onNavigate} />
      </section>

      {/* 7. Interactive SVG Pest Lifecycle & Mating Disruption Diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PestLifecycleDiagram 
          onNavigate={onNavigate}
          onExploreProducts={() => onNavigate('products')}
        />
      </section>

      {/* 8. Editorial Alternating Product Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductsSection 
          onSelectProduct={onSelectProduct}
          onInquireProduct={onInquireProduct}
        />
      </section>

      {/* 9. Biological Process Timeline (IDENTIFY → DEPLOY → DISRUPT → PROTECT → HARVEST) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HowItWorksTimeline onNavigate={onNavigate} />
      </section>

      {/* 10. Chemical Sprays vs. Bio-Trapping Editorial Split Environment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChemicalVsBioComparison onNavigate={onNavigate} />
      </section>

      {/* 11. Farm Economics, Proof Statistics & Authentic Farmer Voices (Dark Section) */}
      <FarmEconomicsSection onNavigate={onNavigate} />

      {/* 12. Quick Acreage Field Dose Calculator Widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickDoseEstimator onNavigate={onNavigate} />
      </section>

      {/* 13. Final Full-Bleed Orchard Contact & Agronomist Invitation */}
      <FinalContactInvitation onNavigate={onNavigate} />

    </div>
  );
};
