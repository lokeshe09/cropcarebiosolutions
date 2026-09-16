import React from 'react';
import { Product, PageId } from '../types';
import { HeroSection } from '../components/HeroSection';
import { TrustCertificationBar } from '../components/TrustCertificationBar';
import { HomeDocumentSections } from '../components/HomeDocumentSections';
import { EditorialPillarsStrip } from '../components/EditorialPillarsStrip';
import { AgriculturalNarrativeSection } from '../components/AgriculturalNarrativeSection';
import { RealFieldGallerySection } from '../components/RealFieldGallerySection';
import { InteractiveCropMatcher } from '../components/InteractiveCropMatcher';
import { PestDisruptionDiagram } from '../components/PestDisruptionDiagram';
import { HowItWorksTimeline } from '../components/HowItWorksTimeline';
import { ChemicalVsBioComparison } from '../components/ChemicalVsBioComparison';
import { FarmEconomicsSection } from '../components/FarmEconomicsSection';
import { QuickDoseEstimator } from '../components/QuickDoseEstimator';
import { FinalContactInvitation } from '../components/FinalContactInvitation';

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
    <div className="space-y-16 lg:space-y-20 pb-12 relative overflow-hidden bg-stone-50/40">
      {/* 1. Page 1 Hero Section with Real Agricultural Photography & Caption */}
      <HeroSection 
        onExploreProducts={() => onNavigate('products')}
        onOpenContact={() => onNavigate('contact')}
      />

      {/* 2. Page 1 Core Content: Why Crop Care, Mission & Vision, Scrolling Featured Products, Closing Message */}
      <HomeDocumentSections
        onNavigate={onNavigate}
        onSelectProduct={onSelectProduct}
        onInquireProduct={onInquireProduct}
      />

      {/* 3. Editorial Horizontal Trust & Certification Strip */}
      <TrustCertificationBar />

      {/* 4. The Bio-Rational Science: Residue-Free & Ecological Integrity */}
      <EditorialPillarsStrip onNavigate={onNavigate} />

      {/* 5. Agricultural Narrative: Problem → Science → Clean Harvest Result */}
      <AgriculturalNarrativeSection onNavigate={onNavigate} />

      {/* 6. Real Field Gallery & Visual Installations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RealFieldGallerySection 
          onNavigate={onNavigate}
          onZoomImage={onZoomImage}
        />
      </section>

      {/* 7. Interactive Crop-to-Pest Diagnostic Matcher */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveCropMatcher onNavigate={onNavigate} />
      </section>

      {/* 8. Biological Mating Disruption Diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PestDisruptionDiagram 
          onNavigate={onNavigate}
          onExploreProducts={() => onNavigate('products')}
        />
      </section>

      {/* 9. Biological Process Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HowItWorksTimeline onNavigate={onNavigate} />
      </section>

      {/* 10. Chemical Sprays vs. Bio-Trapping Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChemicalVsBioComparison onNavigate={onNavigate} />
      </section>

      {/* 11. Farm Economics & Grower Proof */}
      <FarmEconomicsSection onNavigate={onNavigate} />

      {/* 12. Quick Acreage Field Dose Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickDoseEstimator onNavigate={onNavigate} />
      </section>

      {/* 13. Final Farmer Invitation & Agronomist Support */}
      <FinalContactInvitation onNavigate={onNavigate} />
    </div>
  );
};
