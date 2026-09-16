import type { PageId, Product } from '../types';
import { Hero } from '../components/home/Hero';
import { WhyCropCare } from '../components/home/WhyCropCare';
import { MissionVision } from '../components/home/MissionVision';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { ClosingInvitation } from '../components/home/ClosingInvitation';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenProduct: (product: Product) => void;
  onZoom: (src: string, alt: string) => void;
}

/**
 * Section order follows the company homepage sheet: the field photography and
 * welcome, why crop care, mission & vision, featured products, closing message
 * and contact. The photography runs across the top of the hero, so it is
 * already moving when the page opens.
 */
export function HomePage({ onNavigate, onOpenProduct, onZoom }: HomePageProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} onZoom={onZoom} />
      <WhyCropCare onNavigate={onNavigate} />
      <MissionVision onNavigate={onNavigate} />
      <FeaturedProducts onNavigate={onNavigate} onOpenProduct={onOpenProduct} />
      <ClosingInvitation onNavigate={onNavigate} />
    </>
  );
}
