import React, { useRef } from 'react';
import { 
  Sprout, 
  Droplet, 
  Cog, 
  Users, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  MessageSquare,
  FileText
} from 'lucide-react';
import { PageId, Product } from '../types';
import { PRODUCTS_DATA } from '../data/productsData';

interface HomeDocumentSectionsProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onInquireProduct: (productName: string) => void;
}

export const HomeDocumentSections: React.FC<HomeDocumentSectionsProps> = ({
  onNavigate,
  onSelectProduct,
  onInquireProduct,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // The exact 6 Featured Products specified in PDF Page 1:
  // Fruit fly trap, Solar trap, Sticky sheets, Dorsalis lure, Rhinoceros beet lure & Tuta absoluta lure
  const featuredProducts = [
    {
      id: 'fruit-fly-trap',
      name: 'Fruit Fly Trap',
      category: 'Insect Trap',
      type: 'trap',
      image: '/images/Fruit Fly Trap.jpg',
      description: 'UV-stabilized inverted funnel trap for monitoring and mass trapping fruit flies in mango and guava orchards.',
      crops: 'Mango, Guava, Citrus, Papaya',
      actionLabel: 'View Trap Guide',
      targetPage: 'trap-guide' as PageId,
    },
    {
      id: 'solar-trap',
      name: 'Solar Trap',
      category: 'Insect Trap',
      type: 'trap',
      image: '/images/SOLAR TRAP.jpeg',
      description: 'Self-powered solar LED trap for phototactic night flying pests like bollworms and armyworms.',
      crops: 'Paddy, Cotton, Vegetables, Pulses',
      actionLabel: 'View Trap Guide',
      targetPage: 'trap-guide' as PageId,
    },
    {
      id: 'sticky-sheets',
      name: 'Sticky Sheets',
      category: 'Bio-Monitoring Tool',
      type: 'sheet',
      image: '/images/Sticky Sheets.png',
      description: 'Yellow and blue high-tack adhesive boards for sucking pests: thrips, whiteflies, aphids, and jassids.',
      crops: 'Polyhouse, Vegetables, Chilli, Cotton',
      actionLabel: 'View Trap Guide',
      targetPage: 'trap-guide' as PageId,
    },
    {
      id: 'bactrocera-dorsalis',
      name: 'Bactrocera dorsalis (Oriental Fruit Fly Lure)',
      category: 'Pheromone Lure',
      type: 'lure',
      image: '/images/OFF.jpeg',
      description: 'Methyl Eugenol lure matrix safe for environment, reducing chemical sprays in fruit orchards.',
      crops: 'Mango, Guava, Citrus, Papaya, Avocado',
      productRefId: 'bactrocera-dorsalis',
    },
    {
      id: 'rhinoceros-beetle',
      name: 'Rhinoceros Beetle Pheromone Lure',
      category: 'Pheromone Lure',
      type: 'lure',
      image: '/images/RB.jpeg',
      description: 'Aggregation pheromone attracting male & female Oryctes rhinoceros to protect coconut and oil palms.',
      crops: 'Coconut, Oil Palm, Date Palm',
      productRefId: 'rhinoceros-beetle',
    },
    {
      id: 'tuta-absoluta',
      name: 'Tuta absoluta Pheromone Lure',
      category: 'Pheromone Lure',
      type: 'lure',
      image: '/images/TLM.jpeg',
      description: 'Safe and eco-friendly solution to protect tomato and potato crops from Tuta absoluta leaf miner moths.',
      crops: 'Tomato, Potato',
      productRefId: 'tuta-absoluta',
    }
  ];

  const handleProductClick = (item: typeof featuredProducts[0]) => {
    if (item.productRefId) {
      const matched = PRODUCTS_DATA.find(p => p.id === item.productRefId);
      if (matched) {
        onSelectProduct(matched);
        return;
      }
    }
    if (item.targetPage) {
      onNavigate(item.targetPage);
    } else {
      onNavigate('products');
    }
  };

  return (
    <div className="space-y-16 lg:space-y-20">
      
      {/* 1. WHY CROP CARE (Directly from Page 1 of PDF) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-2xl mb-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Why Crop Care
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
            Sustainable Farming, Proven Results
          </h2>
          <p className="text-sm text-stone-600">
            Developed with a commitment to protect crops naturally and empower farmers big and small.
          </p>
        </div>

        {/* 4 Pillars from PDF Page 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          
          {/* Pillar 1: Eco-Friendly */}
          <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs space-y-3 hover:border-emerald-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <Sprout className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-900">Eco-Friendly</h3>
              <p className="text-xs font-semibold text-emerald-800 mt-0.5">Natural Protection</p>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              Protects crops naturally, reducing chemical dependency. Safe for soil, water, beneficial pollinators, and farming communities.
            </p>
          </div>

          {/* Pillar 2: Affordable */}
          <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs space-y-3 hover:border-emerald-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <Droplet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-900">Affordable</h3>
              <p className="text-xs font-semibold text-emerald-800 mt-0.5">Farmer-Centric Cost</p>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              Solutions made for every farmer, big or small. Lowers input costs by reducing repeated expensive chemical spray applications.
            </p>
          </div>

          {/* Pillar 3: Effective */}
          <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs space-y-3 hover:border-emerald-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <Cog className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-900">Effective</h3>
              <p className="text-xs font-semibold text-emerald-800 mt-0.5">Scientifically Backed</p>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              Scientifically developed for real, lasting results. Delivers species-specific attraction and mass suppression in open fields and orchards.
            </p>
          </div>

          {/* Pillar 4: Trusted */}
          <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs space-y-3 hover:border-emerald-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-900">Trusted</h3>
              <p className="text-xs font-semibold text-emerald-800 mt-0.5">Growing Relationships</p>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              Growing relationships with farmers and partners worldwide through transparency, reliable quality, and shared harvest success.
            </p>
          </div>

        </div>
      </section>

      {/* 2. MISSION & VISION STATEMENT (Directly from Page 1 of PDF) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#073B20] text-white shadow-xs border border-emerald-900 text-left">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              <ShieldCheck className="w-4 h-4" />
              <span>Mission &amp; Vision 🌱🌍</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Empowering farmers with eco-friendly, effective solutions that protect crops naturally.
            </h2>
            <p className="text-sm sm:text-base text-stone-200 leading-relaxed">
              Creating a future where farmers thrive, nature flourishes, and every crop grows in harmony with the Earth.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-stone-950 bg-emerald-400 hover:bg-emerald-300 transition-colors cursor-pointer"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS (Directly from Page 1: "Idea of scrolling the products") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="text-left space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Featured Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              Featured Products
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Fruit fly trap, Solar trap, Sticky sheets, Dorsalis lure, Rhinoceros beetle lure &amp; Tuta absoluta lure.
            </p>
          </div>

          {/* Scroll Navigation Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={scrollLeft}
              className="p-2 rounded-lg border border-stone-300 bg-white text-stone-700 hover:bg-stone-50 transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              className="p-2 rounded-lg border border-stone-300 bg-white text-stone-700 hover:bg-stone-50 transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('products')}
              className="ml-2 text-xs font-semibold text-emerald-800 hover:text-emerald-900 inline-flex items-center gap-1 cursor-pointer"
            >
              <span>View All 12 Lures</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto pb-4 pt-1 snap-x scrollbar-thin scrollbar-thumb-stone-300"
        >
          {featuredProducts.map((item) => (
            <div
              key={item.id}
              className="w-72 sm:w-80 shrink-0 snap-start p-5 rounded-xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between text-left hover:border-stone-300 transition-colors"
            >
              <div className="space-y-3">
                {/* Product Image */}
                <div 
                  className="aspect-[4/3] rounded-lg overflow-hidden bg-stone-100 border border-stone-200 cursor-pointer"
                  onClick={() => handleProductClick(item)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                    {item.category}
                  </div>
                  <h3 
                    className="text-base font-bold text-stone-900 line-clamp-1 hover:text-emerald-800 cursor-pointer"
                    onClick={() => handleProductClick(item)}
                  >
                    {item.name}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 text-[11px] text-stone-500">
                  <span className="font-semibold text-stone-700">Target: </span>
                  {item.crops}
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-stone-200 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => handleProductClick(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-900 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{item.actionLabel || 'View Protocol'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onInquireProduct(item.name)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-200 cursor-pointer"
                >
                  <MessageSquare className="w-3 h-3 text-emerald-800" />
                  <span>Inquire</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CLOSING MESSAGE (Directly from Page 1 of PDF) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-stone-100 border border-stone-300 text-center space-y-6">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Closing Message
            </span>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 tracking-tight leading-snug">
              &ldquo;Every drop of sweat, every seed of hope — together, we grow not just crops, but life itself.&rdquo;
            </blockquote>
            <p className="text-xs sm:text-sm text-stone-600">
              Crop Care Bio Solutions &bull; Partnering with farmers across open fields, orchards, and plantations.
            </p>
          </div>

          {/* CONTACT US / [Contact Us] | [Know More] from PDF Page 1 */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#073B20] hover:bg-[#126B35] shadow-xs transition-colors cursor-pointer"
            >
              Contact Us
            </button>
            <span className="text-stone-400">|</span>
            <button
              type="button"
              onClick={() => onNavigate('products')}
              className="px-6 py-3 rounded-lg text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 shadow-xs transition-colors cursor-pointer"
            >
              Know More
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
