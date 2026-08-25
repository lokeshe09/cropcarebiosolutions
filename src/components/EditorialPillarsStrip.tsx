import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { PageId } from '../types';
import macroLeafImg from '../assets/images/macro_leaf_botanical_1787652599609.jpg';
import exportMangoImg from '../assets/images/export_mango_harvest_1787652565787.jpg';

interface EditorialPillarsStripProps {
  onNavigate: (page: PageId) => void;
}

export const EditorialPillarsStrip: React.FC<EditorialPillarsStripProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      
      {/* Editorial Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header: Bold Typographic Statement with High Contrast */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-300 pb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-black uppercase tracking-widest text-[#126B35] flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#126B35]" />
              <span>THE BIO-RATIONAL DIFFERENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#073B20] tracking-tight leading-[1.1]">
              Engineered for Clean Fields &amp; Premium Harvests.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#34443B] max-w-md font-medium leading-relaxed">
            By shifting from indiscriminate pesticide spraying to species-specific semiochemical trapping, farmers protect fruit quality from the inside out.
          </p>
        </div>

        {/* 3 Asymmetric Editorial Pillars: NOT 3 Identical Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Pillar 01: Large Highlight with Macro Photography & High Contrast Text */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl min-h-[400px] flex flex-col justify-between p-8 text-white group bg-[#04170D]">
            {/* Background Photography with Atmospheric Overlay */}
            <img 
              src={macroLeafImg} 
              alt="Lush Botanical Leaf with Dew"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 -z-20 brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04170D] via-[#04170D]/90 to-[#04170D]/40 -z-10" />

            {/* Top Stat */}
            <div className="flex items-center justify-between">
              <span className="text-4xl sm:text-5xl font-black tracking-tighter text-[#8BE52A]">01</span>
              <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-black tracking-wide uppercase text-white">
                100% Residue-Free
              </span>
            </div>

            {/* Bottom Content */}
            <div className="space-y-3 pt-12">
              <h3 className="text-2xl sm:text-3xl font-black leading-tight text-white">
                Zero Chemical Residues. <br />
                Nil Harvest Interval.
              </h3>
              <p className="text-xs sm:text-sm text-[#E6EFE9] leading-relaxed font-medium">
                No toxic spray drifts or chemical traces on edible skins. Crops pass strict APEDA, GlobalGAP, and European export MRL laboratory audits with zero withholding periods.
              </p>
              <div className="flex items-center gap-2 pt-2 text-[#8BE52A] text-xs font-black">
                <CheckCircle2 className="w-4 h-4" />
                <span>Certified for Organic &amp; Export Farming</span>
              </div>
            </div>
          </div>

          {/* Pillar 02 & 03: Split Right Editorial Stack */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Pillar 02: Species-Specific Molecular Lures */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl shadow-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:shadow-2xl transition-all duration-300">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-[#073B20] tracking-tighter">02</span>
                  <span className="text-xs font-black uppercase tracking-wider text-[#073B20] bg-[#E8F5E9] px-3 py-1 rounded-md border border-[#C8E6C9]">
                    Pure Semiochemicals
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#073B20]">
                  Species-Specific Olfactory Attraction
                </h3>
                <p className="text-xs sm:text-sm text-[#34443B] leading-relaxed font-medium">
                  Targeted exclusively at economic pest species (e.g. <em>Bactrocera dorsalis</em>, Pink Bollworm). Zero harm to honeybees, ladybird beetles, earthworms, or pollination cycles.
                </p>
              </div>

              <div className="shrink-0 p-4 rounded-2xl bg-[#F6F9F5] border border-gray-300 text-center sm:text-right space-y-1">
                <div className="text-2xl font-black text-[#073B20]">≥ 99.5%</div>
                <div className="text-[11px] font-bold text-[#59675F]">Isomeric Purity</div>
                <div className="text-[10px] text-[#126B35] font-black">60–90 Day Active Field Life</div>
              </div>
            </div>

            {/* Pillar 03: Export Quality & Harvest Returns */}
            <div className="p-8 rounded-3xl bg-[#04170D] text-white shadow-2xl relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group border border-white/20">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-25 group-hover:opacity-35 transition-opacity pointer-events-none hidden sm:block">
                <img src={exportMangoImg} alt="Harvest" className="w-full h-full object-cover object-center brightness-75" />
              </div>

              <div className="space-y-3 flex-1 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-[#8BE52A] tracking-tighter">03</span>
                  <span className="text-xs font-black uppercase tracking-wider text-[#8BE52A] bg-white/15 px-3 py-1 rounded-md border border-white/30">
                    Maximized Market Price
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Export-Grade Protection &amp; Higher ROI
                </h3>
                <p className="text-xs sm:text-sm text-[#E6EFE9] leading-relaxed font-medium">
                  Prevents premature fruit drops and internal maggot rot. Orchardists achieve up to 35% higher Grade-A packout while slashing chemical pesticide spray budgets by ₹6,000–₹12,000/acre.
                </p>
              </div>

              <div className="shrink-0 relative z-10">
                <button
                  type="button"
                  onClick={() => onNavigate('calculator')}
                  className="px-6 py-3.5 rounded-full text-xs font-black text-[#04170D] bg-[#8BE52A] hover:bg-[#9cf53b] transition-all flex items-center gap-2 cursor-pointer shadow-lg active:scale-95"
                >
                  <span>Estimate Your Savings</span>
                  <ArrowRight className="w-4 h-4 text-[#04170D]" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
