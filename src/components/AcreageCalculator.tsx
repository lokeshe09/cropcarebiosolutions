import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA, TRAP_TYPES } from '../data/productsData';
import { Calculator, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, RefreshCw, Send, DollarSign } from 'lucide-react';

interface AcreageCalculatorProps {
  onPreFillInquiry?: (productName: string, acreage: string) => void;
}

export const AcreageCalculator: React.FC<AcreageCalculatorProps> = ({ onPreFillInquiry }) => {
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
    return 10; // 8-10 per acre average for Tuta, Leucinodes, Helicoverpa, Spodoptera
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
    if (onPreFillInquiry) {
      onPreFillInquiry(selectedProduct.name, `${acres} Acre(s)`);
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="calculator" className="py-20 relative overflow-hidden bg-[#FAF9F6]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#E9EDC9] rounded-full filter blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FEFAE0] rounded-full filter blur-[120px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-white/70 backdrop-blur-md shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-[#606C38]" />
            <span className="text-[11px] font-semibold text-[#606C38] tracking-[0.2em] uppercase">
              Smart Farm Planning Tool
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#283618] leading-[1.15]">
            ACREAGE & <span className="text-gradient-natural italic">TRAP DOSE CALCULATOR</span>
          </h2>

          <p className="text-base text-[#555] font-light leading-relaxed">
            Estimate your exact trap requirements, lure replacement schedule, and residue-free IPM protection for any land size.
          </p>
        </div>

        {/* Interactive Calculator Card Layout */}
        <div className="max-w-5xl mx-auto rounded-[32px] bg-white/50 backdrop-blur-xl border border-white/80 shadow-xl p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls Column */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Product / Crop Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#283618]">
                  1. Select Target Pest / Crop Solution:
                </label>
                <select
                  value={selectedProductId}
                  onChange={(e) => setSelectedProductId(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl glass-input text-xs sm:text-sm font-semibold text-[#283618] border border-[#606C38]/20 focus:border-[#606C38] shadow-2xs"
                >
                  {PRODUCTS_DATA.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.pestCommonName})
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-[#666]">
                  Target Crops: {selectedProduct.targetCrops.slice(0, 5).join(', ')}...
                </p>
              </div>

              {/* Acreage Slider & Number Input */}
              <div className="space-y-2">
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
                  className="w-full h-2 bg-[#E9EDC9] rounded-lg appearance-none cursor-pointer accent-[#606C38]"
                />

                <div className="flex justify-between text-[10px] text-[#888] font-medium">
                  <span>0.5 Acre</span>
                  <span>10 Acres</span>
                  <span>25 Acres</span>
                  <span>50 Acres</span>
                </div>
              </div>

              {/* Crop Duration Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#283618]">
                    3. Total Crop / Season Duration:
                  </label>
                  <span className="text-sm font-extrabold text-[#283618] bg-[#E9EDC9] px-3.5 py-1 rounded-full border border-[#606C38]/20">
                    {seasonMonths} Months
                  </span>
                </div>

                <input
                  type="range"
                  min="2"
                  max="12"
                  step="1"
                  value={seasonMonths}
                  onChange={(e) => setSeasonMonths(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-[#E9EDC9] rounded-lg appearance-none cursor-pointer accent-[#606C38]"
                />

                <div className="flex justify-between text-[10px] text-[#888] font-medium">
                  <span>2 Months</span>
                  <span>4 Months</span>
                  <span>6 Months</span>
                  <span>12 Months (Perennial)</span>
                </div>
              </div>

            </div>

            {/* Right Output Dashboard Column */}
            <div className="lg:col-span-6 space-y-4">
              
              <div className="p-7 rounded-[28px] bg-gradient-to-br from-[#283618] via-[#354620] to-[#283618] text-white shadow-2xl relative overflow-hidden border border-white/20">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#606C38]/30 rounded-full filter blur-xl" />
                
                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between border-b border-white/15 pb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#E9EDC9] block">
                        Estimated Calculation
                      </span>
                      <h4 className="text-base font-serif font-bold text-white leading-tight">
                        {acres} Acre(s) • {selectedProduct.pestCommonName}
                      </h4>
                    </div>
                    <Sparkles className="w-5 h-5 text-[#FEFAE0]" />
                  </div>

                  {/* 2 Big Counter Tiles */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-[20px] bg-white/10 backdrop-blur-md border border-white/15">
                      <span className="text-[11px] text-[#E9EDC9] font-medium block">Total Traps Required</span>
                      <span className="text-3xl font-serif font-extrabold text-white mt-1 block">{totalTraps}</span>
                      <span className="text-[10px] text-[#E9EDC9]/80 block mt-0.5">Hardware installed once</span>
                    </div>

                    <div className="p-4 rounded-[20px] bg-white/10 backdrop-blur-md border border-white/15">
                      <span className="text-[11px] text-[#FEFAE0] font-medium block">Total Lures for Season</span>
                      <span className="text-3xl font-serif font-extrabold text-[#FEFAE0] mt-1 block">{totalLuresNeeded}</span>
                      <span className="text-[10px] text-[#FEFAE0]/80 block mt-0.5">{cyclesPerSeason} change cycles</span>
                    </div>
                  </div>

                  {/* Operational Notes */}
                  <div className="space-y-2 text-xs text-white/90 font-light">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E9EDC9] shrink-0" />
                      <span><strong>Replacement Cycle:</strong> Every {lureFieldLifeDays} days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E9EDC9] shrink-0" />
                      <span><strong>Recommended Hardware:</strong> {selectedProduct.recommendedTraps[0]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FEFAE0] shrink-0" />
                      <span><strong>Chemical Spray Reduction:</strong> ~75% to 90%</span>
                    </div>
                  </div>

                  {/* Action CTA */}
                  <button
                    onClick={handleApplyToQuote}
                    className="w-full py-3.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#283618] bg-[#FEFAE0] hover:bg-white shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#606C38]" />
                    <span>Apply This Calculation to Inquiry Quote</span>
                  </button>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
