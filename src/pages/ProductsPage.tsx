import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA } from '../data/productsData';
import { Product, PageId } from '../types';
import { 
  Search, 
  Clock, 
  Layers, 
  Eye, 
  Send, 
  Sparkles, 
  Leaf, 
  CheckCircle2, 
  Zap,
  ZoomIn
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { PageFooterBanner } from '../components/PageFooterBanner';
import { SafeImage } from '../components/SafeImage';
import { AnimatedCard } from '../components/AnimatedCard';

interface ProductsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onInquireProduct: (productName: string) => void;
  onZoomImage: (src: string, alt: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
  onSelectProduct,
  onInquireProduct,
  onZoomImage,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;

      return (
        p.name.toLowerCase().includes(q) ||
        p.pestCommonName.toLowerCase().includes(q) ||
        (p.scientificName && p.scientificName.toLowerCase().includes(q)) ||
        p.targetCrops.some((c) => c.toLowerCase().includes(q)) ||
        p.shortDescription.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  return (
    <div className="space-y-10">
      {/* 1. Header: Exactly as requested in PDF Point 3 (with navbar clearance) */}
      <div className="pt-24 sm:pt-32 pb-4 text-center max-w-4xl mx-auto px-4 relative z-10 space-y-2.5">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#073B20] tracking-tight">
          PHEROMONE LURES
        </h1>
        <p className="text-base sm:text-lg text-[#34443B] font-medium">
          Targeted Attraction for Smarter Pest Management
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* 2. Direct Lures Top Bar with Quick Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-[24px] bg-white/70 backdrop-blur-xl border border-white/90 shadow-xs">
          <div className="text-xs sm:text-sm text-[#34443B] font-semibold">
            Showing <span className="text-[#073B20] font-black">{filteredProducts.length}</span> Field-Tested Pheromone Lures
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#888] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by lure name or target pest..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-8 py-2 rounded-full text-xs glass-input border border-[#073B20]/20 focus:border-[#073B20] text-[#073B20] placeholder-[#888] bg-white/80"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#888] hover:text-[#073B20] cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* 3. Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="p-12 text-center rounded-[28px] bg-white/45 backdrop-blur-xl border border-white/70 space-y-3">
            <p className="text-base font-semibold text-[#283618]">
              No lures found matching &quot;{searchQuery}&quot;.
            </p>
            <p className="text-xs text-[#666] font-light">
              Try searching by crop name (e.g. Tomato, Cotton, Brinjal, Paddy) or reset filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-full text-xs font-semibold bg-[#606C38] text-white hover:bg-[#283618] transition-colors cursor-pointer"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, idx) => (
              <AnimatedCard
                key={product.id}
                id={`product-card-${product.id}`}
                delay={(idx % 3) * 0.08}
                distance={28}
                hoverEffect
                className="rounded-[32px] bg-white/50 backdrop-blur-xl border border-white/80 p-6 flex flex-col justify-between group hover:bg-white/85 hover:border-[#606C38]/30 hover:shadow-2xl transition-all duration-300 relative overflow-hidden shadow-xs"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#606C38] via-[#DDA15E] to-[#606C38] opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  
                  {/* Category & Badge Header */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E9EDC9] text-[#283618] border border-[#606C38]/20">
                      {product.category.replace('_', ' ')}
                    </span>
                    {product.badge && (
                      <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FEFAE0] text-[#BC6C25] border border-[#DDA15E]/30">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Lure Image with Zoom Lightbox Trigger */}
                  <div 
                    className="cursor-pointer"
                    onClick={() => product.imageUrl && onZoomImage(product.imageUrl, product.name)}
                  >
                    <SafeImage
                      src={product.imageUrl}
                      alt={product.imageAlt || product.name}
                      aspectRatio="aspect-[4/3]"
                      enableZoom
                      onZoom={onZoomImage}
                    />
                  </div>

                  {/* Product Title & Pest Information */}
                  <div>
                    <h3 className="text-base font-serif font-bold text-[#283618] group-hover:text-[#606C38] transition-colors leading-snug line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-xs font-medium text-[#606C38] mt-1">
                      Pest: <strong className="font-semibold">{product.pestCommonName}</strong>
                    </p>
                    {product.scientificName && (
                      <p className="text-[11px] text-[#777] italic">
                        {product.scientificName}
                      </p>
                    )}
                  </div>

                  {/* Short Narrative */}
                  <p className="text-xs text-[#555] leading-relaxed line-clamp-2 font-light">
                    {product.shortDescription}
                  </p>

                  {/* Key Metrics Quick Box */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="p-2.5 rounded-[18px] bg-white/60 border border-white/80 text-left shadow-2xs">
                      <div className="flex items-center gap-1 text-[10px] text-[#666] font-medium">
                        <Clock className="w-3 h-3 text-[#606C38]" />
                        <span>Field Life</span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#283618] block truncate mt-0.5">
                        {product.fieldLife.split('(')[0]}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-[18px] bg-white/60 border border-white/80 text-left shadow-2xs">
                      <div className="flex items-center gap-1 text-[10px] text-[#666] font-medium">
                        <Layers className="w-3 h-3 text-[#BC6C25]" />
                        <span>Trap Density</span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#283618] block truncate mt-0.5">
                        {product.trapsPerAcre}
                      </span>
                    </div>
                  </div>

                  {/* Target Crops Preview Chips */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-bold text-[#666] uppercase tracking-wider block">
                      Target Crops:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.targetCrops.slice(0, 4).map((crop) => (
                        <span
                          key={crop}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#FEFAE0] text-[#283618] border border-[#DDA15E]/30"
                        >
                          {crop}
                        </span>
                      ))}
                      {product.targetCrops.length > 4 && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium text-[#666] bg-white/80 border border-white/90">
                          +{product.targetCrops.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-5 mt-5 border-t border-[#606C38]/10 flex items-center gap-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-semibold text-[#283618] bg-white/70 hover:bg-[#E9EDC9] border border-white/90 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#606C38]" />
                    <span>View Protocol</span>
                  </button>

                  <button
                    onClick={() => onInquireProduct(product.name)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-semibold text-white bg-[#606C38] hover:bg-[#283618] shadow-sm shadow-[#606C38]/20 transition-all uppercase tracking-wider cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Get Quote</span>
                  </button>
                </div>

              </AnimatedCard>
            ))}
          </div>
        )}

      </div>

      {/* Page Footer Navigation */}
      <PageFooterBanner
        nextPageId="trap-guide"
        nextPageTitle="Insect Traps"
        nextPageDescription="Explore field-grade insect traps, delta traps, funnel traps, and water traps engineered for optimal lure deployment."
        onNavigate={onNavigate}
      />
    </div>
  );
};
