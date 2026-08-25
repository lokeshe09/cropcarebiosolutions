import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA } from '../data/productsData';
import { Product } from '../types';
import { 
  Search, 
  ArrowRight, 
} from 'lucide-react';
import fruitFlyTrapImg from '../assets/images/fruit_fly_trap_clean_1787640517865.jpg';
import funnelTrapImg from '../assets/images/funnel_trap_clean_1787640530032.jpg';
import pheromoneLureImg from '../assets/images/pheromone_lure_clean_1787640541024.jpg';

interface ProductsSectionProps {
  onSelectProduct: (product: Product) => void;
  onInquireProduct: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onInquireProduct
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeHeroIndex, setActiveHeroIndex] = useState<number>(0);

  const categories = [
    { id: 'all', label: 'All Solutions' },
    { id: 'vegetables', label: 'Vegetables & Cucurbits' },
    { id: 'fruits', label: 'Fruit Orchards' },
    { id: 'plantation', label: 'Coconut & Palm Groves' },
    { id: 'field_crops', label: 'Cotton, Pulses & Field' },
    { id: 'enhancers', label: 'Synergists & Sticky' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      const matchesCategory =
        selectedCategory === 'all' || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        p.name.toLowerCase().includes(q) ||
        p.pestCommonName.toLowerCase().includes(q) ||
        (p.scientificName && p.scientificName.toLowerCase().includes(q)) ||
        p.targetCrops.some((c) => c.toLowerCase().includes(q)) ||
        p.shortDescription.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured flagship solutions for editorial spotlight
  const flagshipProducts = useMemo(() => {
    return PRODUCTS_DATA.slice(0, 3);
  }, []);

  const currentFlagship = flagshipProducts[activeHeroIndex] || flagshipProducts[0];

  const getProductImage = (product: Product) => {
    if (product.id.includes('fruit-fly') || product.id.includes('bactro') || product.id.includes('mango')) {
      return fruitFlyTrapImg;
    }
    if (product.id.includes('funnel') || product.id.includes('faw') || product.id.includes('armyworm') || product.id.includes('bollworm')) {
      return funnelTrapImg;
    }
    return pheromoneLureImg;
  };

  return (
    <section id="products" className="py-20 relative overflow-hidden bg-[#FAFBF9]">
      
      {/* Background subtle tinting */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Editorial Section Header with High Contrast */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-300 pb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-black uppercase tracking-[0.25em] text-[#126B35] flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#126B35]" />
              <span>CHAPTER 03 &bull; THE BIOCONTROL SUITE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#073B20] tracking-tight leading-[1.05]">
              Biotechnology Hardware &amp; Pheromone Chemistry.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#34443B] max-w-md font-medium leading-relaxed">
            Engineered polymers and high-potency isomer lures calibrated to international IPM standards. 100% zero chemical residue.
          </p>
        </div>

        {/* 1. HERO PRODUCT SPOTLIGHT (Industrial Tech Presentation) */}
        <div className="rounded-3xl bg-[#04170D] text-white p-8 sm:p-12 shadow-2xl border border-white/20 relative overflow-hidden">
          
          {/* Background Ambient Radial */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8BE52A]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Spotlight Header Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/20 relative z-10">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-[#8BE52A] text-[#04170D] text-xs font-black uppercase tracking-wider">
                FLAGSHIP BIOCONTROL
              </span>
              <span className="text-xs font-mono text-[#C7D8CC] font-semibold hidden sm:inline">
                IPM CERTIFIED &bull; UV-STABILIZED
              </span>
            </div>

            {/* Product Switcher Tabs */}
            <div className="flex items-center gap-2">
              {flagshipProducts.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveHeroIndex(idx)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    activeHeroIndex === idx 
                      ? 'bg-white text-[#04170D] font-black shadow-md' 
                      : 'bg-white/15 text-[#E6EFE9] hover:bg-white/25'
                  }`}
                >
                  0{idx + 1}. {p.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Flagship Hero Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8 relative z-10">
            
            {/* Left: Product Technical Specifications & Visual Badges */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#8BE52A] font-bold">
                  SPECIES TARGET: {currentFlagship.pestCommonName.toUpperCase()}
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                  {currentFlagship.name}
                </h3>
                <p className="text-sm text-[#C7D8CC] italic font-serif">
                  {currentFlagship.scientificName}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#E6EFE9] leading-relaxed font-medium">
                {currentFlagship.shortDescription}
              </p>

              {/* Technical Spec Matrix (Documentary Style) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20">
                  <div className="text-[10px] font-mono text-[#8BE52A] uppercase font-bold">Active Longevity</div>
                  <div className="text-sm font-black text-white mt-0.5">{currentFlagship.activePeriod}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20">
                  <div className="text-[10px] font-mono text-[#8BE52A] uppercase font-bold">Field Density</div>
                  <div className="text-sm font-black text-white mt-0.5">{currentFlagship.dosagePerAcre}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 col-span-2 sm:col-span-1">
                  <div className="text-[10px] font-mono text-[#8BE52A] uppercase font-bold">Purity Matrix</div>
                  <div className="text-sm font-black text-white mt-0.5">{currentFlagship.isomericPurity || '≥99.8% Purity'}</div>
                </div>
              </div>

              {/* Target Crops Chips */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-mono uppercase text-[#C7D8CC] font-bold">Verified Field Deployments:</div>
                <div className="flex flex-wrap gap-1.5">
                  {currentFlagship.targetCrops.map((crop, i) => (
                    <span key={i} className="px-3 py-1 rounded-md bg-white/15 text-white text-xs font-mono font-bold border border-white/20">
                      {crop}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => onSelectProduct(currentFlagship)}
                  className="px-6 py-3.5 rounded-full bg-[#8BE52A] hover:bg-[#9cf53b] text-[#04170D] font-black text-xs transition-all flex items-center gap-2 cursor-pointer shadow-lg active:scale-95"
                >
                  <span>VIEW TECHNICAL DATASHEET</span>
                  <ArrowRight className="w-4 h-4 text-[#04170D]" />
                </button>
                <button
                  type="button"
                  onClick={() => onInquireProduct(currentFlagship.name)}
                  className="px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-xs border border-white/30 transition-all cursor-pointer active:scale-95"
                >
                  <span>ORDER FIELD SAMPLES</span>
                </button>
              </div>

            </div>

            {/* Right: Large Product Photograph with Technical Pointer Annotations */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl bg-gradient-to-b from-white/15 to-white/5 p-6 border border-white/20 shadow-2xl flex items-center justify-center min-h-[380px] group overflow-hidden">
                
                <img
                  src={getProductImage(currentFlagship)}
                  alt={currentFlagship.name}
                  className="max-h-[320px] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-700"
                />

                {/* Technical Graphic Annotation 1 */}
                <div className="absolute top-6 left-6 bg-[#04170D]/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/30 text-xs font-mono text-white">
                  <span className="text-[#8BE52A] font-black">CALIBRATION:</span> 60–90 Day Sustained Vapor
                </div>

                {/* Technical Graphic Annotation 2 */}
                <div className="absolute bottom-6 right-6 bg-[#04170D]/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/30 text-xs font-mono text-white">
                  <span className="text-[#8BE52A] font-black">MATERIAL:</span> 100% UV-Protected Polymer
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* 2. CATEGORY & FILTER EXPLORER */}
        <div className="space-y-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-gray-300 shadow-sm">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#073B20] text-white shadow-md'
                      : 'bg-gray-100 text-[#34443B] hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Live Search */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search crop, pest, or trap..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs font-medium rounded-full bg-gray-50 border border-gray-300 focus:border-[#073B20] text-[#073B20] focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-[#073B20] cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

          </div>

          {/* Product Cards: Editorial Photo-Driven Presentation */}
          {filteredProducts.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-white border border-gray-300">
              <p className="text-base font-black text-[#073B20]">
                No bio solutions found matching &quot;{searchQuery}&quot;.
              </p>
              <button
                type="button"
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="mt-4 px-6 py-2.5 rounded-full text-xs font-black bg-[#073B20] text-white cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="rounded-3xl bg-white border border-gray-300 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-[#073B20]"
                >
                  {/* Visual Photographic Header */}
                  <div className="relative aspect-[16/10] bg-[#F4F7F4] overflow-hidden flex items-center justify-center p-6 border-b border-gray-200">
                    <img
                      src={getProductImage(product)}
                      alt={product.name}
                      className="max-h-[160px] w-auto object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                    />
                    <div className="absolute top-3 left-3 bg-white px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-[#073B20] border border-gray-200 shadow-xs">
                      {product.category.replace('_', ' ').toUpperCase()}
                    </div>
                    {product.isomericPurity && (
                      <div className="absolute top-3 right-3 bg-[#073B20] text-[#8BE52A] px-2.5 py-1 rounded-full text-[10px] font-mono font-bold shadow-xs">
                        {product.isomericPurity}
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between text-left">
                    <div className="space-y-2">
                      <h4 className="text-base font-black text-[#073B20] group-hover:text-[#126B35] transition-colors leading-snug">
                        {product.name}
                      </h4>
                      <p className="text-xs font-bold text-[#126B35] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#126B35]" />
                        <span>Target: {product.pestCommonName}</span>
                      </p>
                      <p className="text-xs text-[#34443B] line-clamp-2 leading-relaxed font-medium">
                        {product.shortDescription}
                      </p>
                    </div>

                    {/* Spec Mini Bar */}
                    <div className="pt-3 border-t border-gray-200 grid grid-cols-2 gap-2 text-[11px] font-mono text-[#34443B]">
                      <div>
                        <span className="text-[#59675F] block text-[9px] uppercase font-bold">Active Period</span>
                        <span className="font-bold text-[#073B20]">{product.activePeriod}</span>
                      </div>
                      <div>
                        <span className="text-[#59675F] block text-[9px] uppercase font-bold">Dosage</span>
                        <span className="font-bold text-[#073B20]">{product.dosagePerAcre}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-3 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectProduct(product)}
                        className="flex-1 py-2.5 rounded-xl bg-[#073B20] hover:bg-[#126B35] text-white text-xs font-black transition-all text-center cursor-pointer shadow-xs active:scale-98"
                      >
                        Datasheet
                      </button>
                      <button
                        type="button"
                        onClick={() => onInquireProduct(product.name)}
                        className="py-2.5 px-4 rounded-xl bg-[#E8F5E9] hover:bg-[#C8E6C9] text-[#073B20] text-xs font-black border border-[#C8E6C9] transition-all cursor-pointer active:scale-98"
                        title="Inquire on WhatsApp"
                      >
                        Inquire
                      </button>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
