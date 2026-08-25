import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA, TRAP_TYPES } from '../data/productsData';
import { Product, PageId } from '../types';
import { 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  RefreshCw, 
  Send, 
  DollarSign,
  Clock,
  Layers,
  Sprout
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { PageFooterBanner } from '../components/PageFooterBanner';
import { SafeImage } from '../components/SafeImage';
import { AnimatedCard } from '../components/AnimatedCard';

interface CalculatorPageProps {
  onNavigate: (page: PageId) => void;
  onPreFillInquiry: (productName: string, acreage: string) => void;
  onZoomImage: (src: string, alt: string) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({
  onNavigate,
  onPreFillInquiry,
  onZoomImage,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>('bactrocera-cucurbitae');
  const [acres, setAcres] = useState<number>(2);
  const [seasonMonths, setSeasonMonths] = useState<number>(4);

  const selectedProduct = useMemo(() => {
    return PRODUCTS_DATA.find((p) => p.id === selectedProductId) || PRODUCTS_DATA[0];
  }, [selectedProductId]);

  // Trap density calculation based on product specs
  const trapDensityPerAcre = useMemo(() => {
    if (selectedProduct.id.includes('palm') || selectedProduct.id.includes('rhinoceros')) {
      return 4; // 3-4 per acre
    }
    if (selectedProduct.id === 'bactrocera-cucurbitae' || selectedProduct.id === 'bactrocera-dorsalis') {
      return 12; // 10-15 per acre average
    }
    return 10; // 8-10 per acre average for Tuta, Leucinodes, Helicoverpa, Spodoptera, FAW, DBM, PBW, YSB
  }, [selectedProduct]);

  // Replacement frequency in days
  const lureFieldLifeDays = useMemo(() => {
    if (selectedProduct.fieldLife.includes('3 months')) return 90;
    if (selectedProduct.fieldLife.includes('2–3 months')) return 75;
    return 40; // 30-45 days
  }, [selectedProduct]);

  // Calculated totals
  const totalTraps = Math.max(1, Math.round(acres * trapDensityPerAcre));
  const cyclesPerSeason = Math.max(1, Math.ceil((seasonMonths * 30) / lureFieldLifeDays));
  const totalLuresNeeded = totalTraps * cyclesPerSeason;

  const handleApplyToQuote = () => {
    onPreFillInquiry(selectedProduct.name, `${acres} Acre(s) • ${seasonMonths} Months Season`);
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12">
      {/* 1. Page Header */}
      <PageHeader
        badge="Farm Planning & Dosing Protocol"
        title="ACREAGE & TRAP"
        highlightText="DOSE CALCULATOR"
        subtitle="Estimate required trap hardware, seasonal lure quantities, and pesticide savings tailored to your exact farm size and crop cycle."
        currentPage="calculator"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 2. Interactive Calculator Card */}
        <AnimatedCard delay={0.1} distance={28} className="max-w-5xl mx-auto rounded-[36px] bg-white/50 backdrop-blur-2xl border border-white/80 shadow-2xl p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Farm Parameters Inputs */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Product / Solution Dropdown with Image preview thumbnail */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#283618]">
                  1. Select Target Pest / Crop Solution:
                </label>
                <select
                  value={selectedProductId}
                  onChange={(e) => setSelectedProductId(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl glass-input text-xs sm:text-sm font-semibold text-[#283618] border border-[#606C38]/20 focus:border-[#606C38] shadow-xs cursor-pointer"
                >
                  {PRODUCTS_DATA.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.pestCommonName})
                    </option>
                  ))}
                </select>
                
                {/* Selected Product Miniature Info Card with Real Image */}
                <div className="p-3.5 rounded-2xl bg-white/70 border border-white/90 shadow-2xs flex items-center gap-3.5">
                  <div 
                    className="w-16 h-16 rounded-xl overflow-hidden shrink-0 cursor-pointer"
                    onClick={() => selectedProduct.imageUrl && onZoomImage(selectedProduct.imageUrl, selectedProduct.name)}
                  >
                    <SafeImage
                      src={selectedProduct.imageUrl}
                      alt={selectedProduct.name}
                      aspectRatio="aspect-square"
                      enableZoom
                      onZoom={onZoomImage}
                    />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#606C38] bg-[#E9EDC9] px-2 py-0.5 rounded-full">
                      {selectedProduct.category.replace('_', ' ')}
                    </span>
                    <h4 className="text-xs font-serif font-bold text-[#283618] mt-0.5 line-clamp-1">
                      {selectedProduct.name}
                    </h4>
                    <p className="text-[11px] text-[#666]">
                      Pest: {selectedProduct.pestCommonName}
                    </p>
                  </div>
                </div>
              </div>

              {/* Acreage Slider & Number Display */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#283618]">
                    2. Land Area (in Acres):
                  </label>
                  <span className="text-sm font-extrabold text-[#283618] bg-[#FEFAE0] px-3.5 py-1 rounded-full border border-[#DDA15E]/30">
                    {acres} {acres === 1 ? 'Acre' : 'Acres'}
                  </span>
                </div>

                <input
                  type="range"
                  min="0.5"
                  max="50"
                  step="0.5"
                  value={acres}
                  onChange={(e) => setAcres(parseFloat(e.target.value))}
                  className="w-full h-2.5 bg-[#E9EDC9] rounded-lg appearance-none cursor-pointer accent-[#606C38]"
                />

                <div className="flex justify-between text-[10px] text-[#888] font-medium">
                  <span>0.5 Acre</span>
                  <span>10 Acres</span>
                  <span>25 Acres</span>
                  <span>50 Acres</span>
                </div>
              </div>

              {/* Crop Duration Slider */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#283618]">
                    3. Total Crop / Season Duration:
                  </label>
                  <span className="text-sm font-extrabold text-[#283618] bg-[#E9EDC9] px-3.5 py-1 rounded-full border border-[#606C38]/20">
                    {seasonMonths} {seasonMonths === 1 ? 'Month' : 'Months'}
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={seasonMonths}
                  onChange={(e) => setSeasonMonths(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-[#E9EDC9] rounded-lg appearance-none cursor-pointer accent-[#606C38]"
                />

                <div className="flex justify-between text-[10px] text-[#888] font-medium">
                  <span>1 Month</span>
                  <span>4 Months (Standard Season)</span>
                  <span>8 Months</span>
                  <span>12 Months</span>
                </div>
              </div>

            </div>

            {/* Right Column: Calculated Results Panel */}
            <div className="lg:col-span-6 rounded-[28px] bg-gradient-to-br from-white/90 via-white/80 to-[#E9EDC9]/40 border border-white/95 p-6 sm:p-7 shadow-lg space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#606C38]/15 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#606C38]">
                    Agronomic Recommendation
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#283618]">
                    Calculation Summary
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-[#606C38] text-white flex items-center justify-center shadow-sm">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              {/* 2 Main Big Number Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-white/80 border border-white/90 text-center shadow-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#666] block">
                    Traps to Deploy
                  </span>
                  <span className="text-3xl sm:text-4xl font-serif font-extrabold text-[#283618] block mt-1">
                    {totalTraps}
                  </span>
                  <span className="text-[10px] text-[#606C38] font-medium block mt-0.5">
                    ({trapDensityPerAcre} traps / acre)
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 border border-white/90 text-center shadow-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#666] block">
                    Total Lures for Season
                  </span>
                  <span className="text-3xl sm:text-4xl font-serif font-extrabold text-[#BC6C25] block mt-1">
                    {totalLuresNeeded}
                  </span>
                  <span className="text-[10px] text-[#BC6C25] font-medium block mt-0.5">
                    ({cyclesPerSeason} lure cycles)
                  </span>
                </div>
              </div>

              {/* Details List */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/60 border border-white/80">
                  <span className="text-[#666]">Lure Field Lifespan:</span>
                  <span className="font-semibold text-[#283618]">{selectedProduct.fieldLife}</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/60 border border-white/80">
                  <span className="text-[#666]">Replacement Frequency:</span>
                  <span className="font-semibold text-[#283618]">Every {lureFieldLifeDays} Days</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/60 border border-white/80">
                  <span className="text-[#666]">Estimated Chemical Savings:</span>
                  <span className="font-bold text-[#606C38]">75% – 85% Spray Reduction</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FEFAE0]/80 border border-[#DDA15E]/30">
                  <span className="text-[#283618] font-semibold">Recommended Trap Hardware:</span>
                  <span className="font-bold text-[#BC6C25] text-right truncate max-w-[170px]">
                    {selectedProduct.recommendedTraps[0] || 'Standard Water/Funnel Trap'}
                  </span>
                </div>
              </div>

              {/* Action: Send to Quotation Form */}
              <button
                type="button"
                onClick={handleApplyToQuote}
                className="w-full py-4 px-6 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#606C38] hover:bg-[#283618] shadow-lg shadow-[#606C38]/25 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Apply to Quotation Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </AnimatedCard>

      </div>

      {/* Page Footer Navigation */}
      <PageFooterBanner
        nextPageId="contact"
        nextPageTitle="Contact & Request Official Quotation"
        nextPageDescription="Submit your acreage requirements for instant dealer pricing, bulk discounts, and agronomist support."
        onNavigate={onNavigate}
      />
    </div>
  );
};
