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
    <div className="space-y-8 bg-stone-50/50 pb-8">
      {/* 1. Header */}
      <div className="pt-10 sm:pt-14 pb-2 text-center max-w-4xl mx-auto px-4 relative z-10 space-y-2">
        <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
          Bio-Rational Semiochemicals
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
          Pheromone Lures
        </h1>
        <p className="text-base text-stone-600 max-w-2xl mx-auto">
          Targeted attraction for smarter, residue-free pest management.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* 2. Direct Lures Top Bar with Quick Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
          <div className="text-xs sm:text-sm text-stone-600 font-medium">
            Showing <span className="text-[#073B20] font-bold">{filteredProducts.length}</span> Field-Tested Pheromone Lures
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by lure name or pest..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-lg text-xs bg-stone-50 border border-stone-300 focus:bg-white focus:border-[#073B20] focus:ring-1 focus:ring-[#073B20] text-stone-900 placeholder-stone-400 outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* 3. Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="p-12 text-center rounded-xl bg-white border border-stone-200 space-y-3">
            <p className="text-base font-semibold text-stone-800">
              No lures found matching &quot;{searchQuery}&quot;.
            </p>
            <p className="text-xs text-stone-500">
              Try searching by crop name (e.g. Tomato, Cotton, Brinjal, Paddy) or reset filters.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#073B20] text-white hover:bg-[#126B35] transition-colors cursor-pointer"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, idx) => (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="rounded-xl bg-white border border-stone-200 p-5 sm:p-6 flex flex-col justify-between group hover:border-stone-300 hover:shadow-md transition-all duration-200 shadow-xs"
              >
                <div className="space-y-4">
                  
                  {/* Category & Badge Header */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-100">
                      {product.category.replace('_', ' ')}
                    </span>
                    {product.badge && (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Lure Image with Zoom Lightbox Trigger */}
                  <div 
                    className="cursor-pointer rounded-lg overflow-hidden border border-stone-100 bg-stone-50"
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
                    <h3 className="text-base font-bold text-stone-900 group-hover:text-[#073B20] transition-colors leading-snug line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-xs font-medium text-emerald-800 mt-1">
                      Pest: <span className="font-semibold text-stone-800">{product.pestCommonName}</span>
                    </p>
                    {product.scientificName && (
                      <p className="text-[11px] text-stone-500 italic mt-0.5">
                        {product.scientificName}
                      </p>
                    )}
                  </div>

                  {/* Short Narrative */}
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                    {product.shortDescription}
                  </p>

                  {/* Key Metrics Quick Box */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200/80 text-left">
                      <div className="flex items-center gap-1 text-[11px] text-stone-500 font-medium">
                        <Clock className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Field Life</span>
                      </div>
                      <span className="text-xs font-semibold text-stone-800 block truncate mt-0.5">
                        {product.fieldLife.split('(')[0]}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200/80 text-left">
                      <div className="flex items-center gap-1 text-[11px] text-stone-500 font-medium">
                        <Layers className="w-3.5 h-3.5 text-amber-700" />
                        <span>Trap Density</span>
                      </div>
                      <span className="text-xs font-semibold text-stone-800 block truncate mt-0.5">
                        {product.trapsPerAcre}
                      </span>
                    </div>
                  </div>

                  {/* Target Crops Preview Chips */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                      Target Crops:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.targetCrops.slice(0, 4).map((crop) => (
                        <span
                          key={crop}
                          className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-stone-100 text-stone-700 border border-stone-200"
                        >
                          {crop}
                        </span>
                      ))}
                      {product.targetCrops.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded-md text-[10px] font-medium text-stone-500 bg-stone-50 border border-stone-200">
                          +{product.targetCrops.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-stone-600" />
                    <span>View Protocol</span>
                  </button>

                  <button
                    onClick={() => onInquireProduct(product.name)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-white bg-[#073B20] hover:bg-[#126B35] shadow-xs transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Get Quote</span>
                  </button>
                </div>

              </div>
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
