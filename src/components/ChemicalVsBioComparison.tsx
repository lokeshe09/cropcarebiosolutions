import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Leaf, 
  AlertTriangle, 
  Coins, 
  ArrowRight,
} from 'lucide-react';
import { PageId } from '../types';

interface ChemicalVsBioComparisonProps {
  onNavigate: (page: PageId) => void;
}

export const ChemicalVsBioComparison: React.FC<ChemicalVsBioComparisonProps> = ({ onNavigate }) => {
  const [acreage, setAcreage] = useState<number>(5);

  const chemicalCost = acreage * 2400;
  const bioCost = acreage * 550;
  const directSavings = chemicalCost - bioCost;
  const percentSaved = Math.round(((chemicalCost - bioCost) / chemicalCost) * 100);

  return (
    <section className="space-y-12">
      
      {/* Editorial Section Header with High Contrast */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-300 pb-8">
        <div className="space-y-2 max-w-2xl">
          <div className="text-xs font-black uppercase tracking-[0.25em] text-[#126B35] flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#126B35]" />
            <span>FARM ECONOMICS &amp; ECOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#073B20] tracking-tight leading-[1.1]">
            Chemical Pesticides vs. Bio-Trapping.
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#34443B] max-w-md font-medium leading-relaxed">
          A side-by-side comparison of recurring chemical spray expenditure versus species-specific semiochemical mass trapping.
        </p>
      </div>

      {/* Cinematic Editorial Split-Screen Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Traditional Chemical Approach */}
        <div className="lg:col-span-6 rounded-3xl bg-[#1F110B] text-white p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-2xl border border-red-900/40 relative overflow-hidden group">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            
            {/* Header Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 text-[#FF8A80] border border-red-500/40 flex items-center justify-center font-bold">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Traditional Chemical Sprays</h3>
                  <p className="text-xs text-[#FFCDD2] font-mono font-bold">Repeated 8–10 Day Spray Cycles</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-red-500/20 text-[#FF8A80] text-[10px] font-mono font-black uppercase tracking-wider border border-red-500/40">
                High Risk
              </span>
            </div>

            {/* Big Stat */}
            <div className="p-4 rounded-2xl bg-white/10 border border-white/20 space-y-1">
              <div className="text-xs text-[#FFCDD2] font-mono uppercase tracking-wider font-bold">Average Seasonal Expenditure</div>
              <div className="text-3xl sm:text-4xl font-black text-[#FF8A80]">₹2,400 – ₹3,500 <span className="text-xs font-normal text-white">/ acre</span></div>
              <div className="text-xs text-[#FFCDD2] font-medium">Requires 8 to 12 hazardous labor spraying passes per season</div>
            </div>

            {/* Key Comparison Points */}
            <ul className="space-y-4 text-xs sm:text-sm text-[#E0E0E0] font-medium">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500/30 text-[#FF8A80] flex items-center justify-center shrink-0 mt-0.5 border border-red-500/50">
                  <X className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-white block font-bold">Toxic Residues &amp; MRL Rejections:</strong>
                  Chemical traces on edible skins violate export testing thresholds, risking total shipment rejection.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500/30 text-[#FF8A80] flex items-center justify-center shrink-0 mt-0.5 border border-red-500/50">
                  <X className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-white block font-bold">Harms Beneficial Honeybees:</strong>
                  Non-selective synthetic poisons decimate pollinators and predatory beneficial bugs.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500/30 text-[#FF8A80] flex items-center justify-center shrink-0 mt-0.5 border border-red-500/50">
                  <X className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-white block font-bold">Rapid Pest Resistance:</strong>
                  Target moths and flies mutate tolerance within 2 seasons, demanding costlier chemical cocktails.
                </div>
              </li>
            </ul>

          </div>

          <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs text-[#FFCDD2] font-mono font-bold">
            <span>Harvest Withholding: 14–21 Days</span>
            <span>Safety: Hazardous Gear Required</span>
          </div>

        </div>

        {/* Right Side: Crop Care Bio-Trapping */}
        <div className="lg:col-span-6 rounded-3xl bg-[#04170D] text-white p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-2xl border border-[#8BE52A]/40 relative overflow-hidden group">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8BE52A]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            
            {/* Header Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#8BE52A]/20 text-[#8BE52A] border border-[#8BE52A]/40 flex items-center justify-center font-bold">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Crop Care Bio-Trapping</h3>
                  <p className="text-xs text-[#8BE52A] font-mono font-bold">24/7 Species-Specific Attractant</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#8BE52A] text-[#04170D] text-[10px] font-black uppercase tracking-wider shadow-md">
                Recommended Bio-Control
              </span>
            </div>

            {/* Big Stat */}
            <div className="p-4 rounded-2xl bg-white/10 border border-white/20 space-y-1">
              <div className="text-xs text-[#8BE52A] font-mono uppercase tracking-wider font-bold">Average Seasonal Expenditure</div>
              <div className="text-3xl sm:text-4xl font-black text-[#8BE52A]">~ ₹550 <span className="text-xs font-normal text-[#E6EFE9]">/ acre / 60 days</span></div>
              <div className="text-xs text-[#E6EFE9] font-medium">Single installation covers 60 full days of continuous monitoring &amp; mass trapping</div>
            </div>

            {/* Key Comparison Points */}
            <ul className="space-y-4 text-xs sm:text-sm text-[#E6EFE9] font-medium">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#8BE52A]/30 text-[#8BE52A] flex items-center justify-center shrink-0 mt-0.5 border border-[#8BE52A]/50">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-white block font-bold">100% Residue-Free Export Grade:</strong>
                  Zero chemical residues on produce; fully compliant with APEDA, USDA, and GlobalGAP organic protocols.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#8BE52A]/30 text-[#8BE52A] flex items-center justify-center shrink-0 mt-0.5 border border-[#8BE52A]/50">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-white block font-bold">Zero Harm to Honeybees &amp; Soil:</strong>
                  Semiochemicals attract exclusively targeted economic pest species without disrupting pollinators.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#8BE52A]/30 text-[#8BE52A] flex items-center justify-center shrink-0 mt-0.5 border border-[#8BE52A]/50">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-white block font-bold">Permanent Reproductive Collapse:</strong>
                  Captures male adults before fertilization occurs, halting the laying of billions of destructive maggots.
                </div>
              </li>
            </ul>

          </div>

          <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs text-[#8BE52A] font-mono font-bold">
            <span>Harvest Withholding: 0 Days</span>
            <span>Safety: 100% Non-Toxic</span>
          </div>

        </div>

      </div>

      {/* Interactive Acreage Economics Visualizer */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#04170D] text-white space-y-8 shadow-2xl border border-white/20 relative overflow-hidden">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-widest text-[#8BE52A] flex items-center gap-2 font-bold">
              <Coins className="w-4 h-4" />
              <span>LIVE ACREAGE COST REDUCTION MODEL</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Calculate Your Seasonal Savings
            </h3>
            <p className="text-xs sm:text-sm text-[#E6EFE9] font-medium">
              Adjust farm size to compare chemical spray budgets vs. bio-rational pheromone protection.
            </p>
          </div>

          {/* Slider Control */}
          <div className="flex items-center gap-4 bg-white/10 px-5 py-3 rounded-2xl border border-white/20">
            <span className="text-xs font-mono text-[#E6EFE9] font-bold">Acreage:</span>
            <input
              type="range"
              min="1"
              max="50"
              value={acreage}
              onChange={(e) => setAcreage(Number(e.target.value))}
              className="w-32 sm:w-48 accent-[#8BE52A] cursor-pointer"
            />
            <span className="text-sm font-black text-[#8BE52A] min-w-[70px] text-right font-mono">
              {acreage} {acreage === 1 ? 'Acre' : 'Acres'}
            </span>
          </div>
        </div>

        {/* 3 Large Editorial Data Outputs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          
          <div className="p-6 rounded-2xl bg-white/10 border border-white/20 text-left space-y-2">
            <span className="text-xs font-mono text-[#E6EFE9] uppercase tracking-wider block font-bold">
              Chemical Spray Budget
            </span>
            <span className="text-2xl sm:text-3xl font-black text-[#FF8A80] font-mono">
              ₹{chemicalCost.toLocaleString()}
            </span>
            <span className="text-xs text-[#C7D8CC] block font-medium">Based on ₹2,400/acre standard spray regimen</span>
          </div>

          <div className="p-6 rounded-2xl bg-white/10 border border-white/20 text-left space-y-2">
            <span className="text-xs font-mono text-[#8BE52A] uppercase tracking-wider block font-bold">
              Bio-Trapping Budget
            </span>
            <span className="text-2xl sm:text-3xl font-black text-[#8BE52A] font-mono">
              ₹{bioCost.toLocaleString()}
            </span>
            <span className="text-xs text-[#E6EFE9] block font-medium">Based on ~₹550/acre 60-day protection</span>
          </div>

          <div className="p-6 rounded-2xl bg-[#8BE52A] text-[#04170D] text-left space-y-2 shadow-xl">
            <span className="text-xs font-mono uppercase tracking-wider font-black block">
              Net Farm Cost Savings ({percentSaved}%)
            </span>
            <span className="text-3xl sm:text-4xl font-black font-mono">
              + ₹{directSavings.toLocaleString()}
            </span>
            <span className="text-xs font-bold block text-[#04170D]">
              Plus up to +35% higher price from export grade quality
            </span>
          </div>

        </div>

        <div className="pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-[#E6EFE9] font-medium">
            Ready to convert your acreage to residue-free bio-protection?
          </span>
          <button
            type="button"
            onClick={() => onNavigate('calculator')}
            className="px-6 py-3 rounded-full bg-white hover:bg-[#E8F5E9] text-[#04170D] font-black text-xs transition-all cursor-pointer flex items-center gap-2 shadow-lg active:scale-95"
          >
            <span>Open Comprehensive Acreage Calculator</span>
            <ArrowRight className="w-4 h-4 text-[#04170D]" />
          </button>
        </div>

      </div>

    </section>
  );
};
