import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { PageId, Product } from '../../types';
import { FEATURED } from '../../data/site';
import { PRODUCTS } from '../../data/products';
import { BIO_TOOLS, TRAPS } from '../../data/traps';
import { Figure } from '../ui/Figure';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface FeaturedProductsProps {
  onNavigate: (page: PageId) => void;
  onOpenProduct: (product: Product) => void;
}

interface Card {
  key: string;
  label: string;
  name: string;
  blurb: string;
  image: string;
  alt: string;
  open: () => void;
  cta: string;
}

export function FeaturedProducts({ onNavigate, onOpenProduct }: FeaturedProductsProps) {
  const railRef = useRef<HTMLDivElement>(null);

  /** Companion products are not counted as lures in their own right. */
  const lureCount = PRODUCTS.filter((product) => !product.companionTo).length;

  const scrollRail = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * (rail.clientWidth * 0.8), behavior: 'smooth' });
  };

  /* Resolve the six names from the content sheet against the real catalogue,
     so a card can never drift out of sync with the product data. */
  const cards = FEATURED.reduce<Card[]>((acc, entry) => {
    if (entry.kind === 'lure') {
      const product = PRODUCTS.find((item) => item.id === entry.id);
      if (product) {
        acc.push({
          key: product.id,
          label: entry.label,
          name: product.name,
          blurb: product.description[0] ?? '',
          image: product.imageUrl,
          alt: product.imageAlt,
          open: () => onOpenProduct(product),
          cta: 'View details',
        });
      }
      return acc;
    }

    const trap = TRAPS.find((item) => item.id === entry.id);
    if (trap) {
      acc.push({
        key: trap.id,
        label: entry.label,
        name: trap.name,
        blurb: trap.bestFor,
        image: trap.imageUrl,
        alt: trap.name,
        open: () => onNavigate('traps'),
        cta: 'See traps',
      });
      return acc;
    }

    const tool = BIO_TOOLS.find((item) => item.id === entry.id);
    if (tool) {
      acc.push({
        key: tool.id,
        label: entry.label,
        name: tool.name,
        blurb: tool.tagline,
        image: tool.imageUrl,
        alt: tool.name,
        open: () => onNavigate('traps'),
        cta: 'See traps',
      });
    }
    return acc;
  }, []);

  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Crop Care Bio Solutions"
          title="Featured Products"
          action={
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollRail(-1)}
                aria-label="Previous products"
                className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-ink transition-colors hover:border-pine hover:text-pine"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollRail(1)}
                aria-label="Next products"
                className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-ink transition-colors hover:border-pine hover:text-pine"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          }
        />
      </div>

      {/* Aligned to the container on the left, running off the edge on the
          right, so the rail reads as continuing past the screen. */}
      <div className="mx-auto mt-14 max-w-[1320px] px-5 sm:px-8">
        <div ref={railRef} className="rail -mr-5 flex gap-5 overflow-x-auto pb-2 sm:-mr-8">
          {cards.map((card) => (
            <article key={card.key} className="group w-[280px] shrink-0 sm:w-[320px]">
              <button type="button" onClick={card.open} className="block w-full text-left">
                <Figure src={card.image} alt={card.alt} ratio="aspect-[4/5]" />

                <div className="mt-5 border-t border-line pt-4">
                  <p className="eyebrow">{card.label}</p>
                  <h3 className="mt-3 font-display text-[22px] leading-tight text-pine">
                    {card.name}
                  </h3>
                  <p className="mt-2.5 line-clamp-3 text-[14px] leading-relaxed text-ink-2">
                    {card.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-clay">
                    {card.cta}
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </div>
              </button>
            </article>
          ))}

          {/* Rail end-cap doubles as the route into the full catalogue. */}
          <div className="flex w-[280px] shrink-0 items-center sm:w-[320px]">
            <div className="w-full border border-line bg-paper-2 p-8">
              <p className="eyebrow">Full range</p>
              <p className="mt-3 font-display text-[22px] leading-tight text-pine">
                {lureCount} lures, {TRAPS.length} traps and {BIO_TOOLS.length} sticky tools.
              </p>
              <div className="mt-6 flex flex-col gap-2.5">
                <Button size="sm" onClick={() => onNavigate('products')} withArrow>
                  Pheromone lures
                </Button>
                <Button variant="outline" size="sm" onClick={() => onNavigate('traps')} withArrow>
                  Insect traps
                </Button>
              </div>
            </div>
          </div>

          <div className="w-2 shrink-0 sm:w-6" aria-hidden />
        </div>
      </div>
    </section>
  );
}
