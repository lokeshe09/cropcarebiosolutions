import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Target, 
  Clock, 
  Layers, 
  ChevronRight, 
  TrendingUp, 
  Flame 
} from 'lucide-react';
import { PageId } from '../types';

interface CropMatcherItem {
  id: string;
  name: string;
  emoji: string;
  image: string;
  pestName: string;
  scientificName: string;
  pestImage: string;
  damageType: string;
  trapType: string;
  lureName: string;
  lureLifespan: string;
  trapsPerAcre: string;
  yieldBoost: string;
  color: string;
}

const CROP_MATCH_DATA: CropMatcherItem[] = [
  {
    id: 'mango',
    name: 'Mango',
    emoji: '🥭',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80',
    pestName: 'Oriental Fruit Fly',
    scientificName: 'Bactrocera dorsalis',
    pestImage: '/images/MF .jpeg',
    damageType: 'Maggots bore into ripening pulp causing rotting & premature fruit drop',
    trapType: 'Fruit Fly Dome Trap (Yellow Base)',
    lureName: 'Methyl Eugenol High Purity Lure',
    lureLifespan: '60 Days Active Field Life',
    trapsPerAcre: '6–8 Traps / Acre',
    yieldBoost: '+35% Blemish-Free Harvest',
    color: '#EAB308'
  },
  {
    id: 'pomegranate',
    name: 'Pomegranate',
    emoji: '🍎',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
    pestName: 'Fruit Borer (Anar Butterfly)',
    scientificName: 'Deudorix isocrates',
    pestImage: '/images/EPB.jpeg',
    damageType: 'Caterpillar bores into developing fruit, producing dark excreta holes',
    trapType: 'Delta Sticky Trap / Funnel Trap',
    lureName: 'Isocrates Specific Pheromone Lure',
    lureLifespan: '45–60 Days Diffusion',
    trapsPerAcre: '8–10 Traps / Acre',
    yieldBoost: '+40% Export-Grade Fruit',
    color: '#DC2626'
  },
  {
    id: 'cotton',
    name: 'Cotton',
    emoji: '🌿',
    image: 'https://images.unsplash.com/photo-1594488500204-627798a698b6?auto=format&fit=crop&w=600&q=80',
    pestName: 'Pink Bollworm (PBW)',
    scientificName: 'Pectinophora gossypiella',
    pestImage: '/images/PBW.jpeg',
    damageType: 'Larvae burrow inside cotton bolls destroying lint & seed development',
    trapType: 'Green Funnel Sleeve Trap',
    lureName: 'Gossyplure Slow-Release Septa',
    lureLifespan: '60–75 Days Potency',
    trapsPerAcre: '5–6 Traps / Acre',
    yieldBoost: '+30% Lint Quality & Yield',
    color: '#16A34A'
  },
  {
    id: 'guava',
    name: 'Guava',
    emoji: '🍈',
    image: 'https://images.unsplash.com/photo-1536511135899-73f8b030b62e?auto=format&fit=crop&w=600&q=80',
    pestName: 'Guava Fruit Fly',
    scientificName: 'Bactrocera correcta',
    pestImage: '/images/MF .jpeg',
    damageType: 'Females oviposit under soft skin causing soft brown rot and maggots',
    trapType: 'Fruit Fly Eco Trap',
    lureName: 'Methyl Eugenol Polymer Matrix',
    lureLifespan: '60 Days Active Field Life',
    trapsPerAcre: '6–8 Traps / Acre',
    yieldBoost: '+45% Marketable Yield',
    color: '#84CC16'
  },
  {
    id: 'brinjal',
    name: 'Brinjal (Eggplant)',
    emoji: '🍆',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
    pestName: 'Shoot & Fruit Borer (ESFB)',
    scientificName: 'Leucinodes orbonalis',
    pestImage: '/images/EPB.jpeg',
    damageType: 'Wilting shoots and bored fruits packed with larval excreta',
    trapType: 'Water Pan Trap / Funnel Trap',
    lureName: 'Lucin-Lure (E-11-hexadecenyl acetate)',
    lureLifespan: '45–60 Days Active',
    trapsPerAcre: '10–12 Traps / Acre',
    yieldBoost: '+50% Spray Cost Reduction',
    color: '#9333EA'
  },
  {
    id: 'coconut',
    name: 'Coconut & Palm',
    emoji: '🌴',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    pestName: 'Red Palm Weevil (RPW)',
    scientificName: 'Rhynchophorus ferrugineus',
    pestImage: '/images/RPW.jpeg',
    damageType: 'Grubs feed on internal palm crown fibers leading to trunk collapse & tree death',
    trapType: 'Bucket Aggregation Trap (Rough Outer Surface)',
    lureName: 'Ferrolure+ Aggregation Lure',
    lureLifespan: '90 Days High Potency',
    trapsPerAcre: '1–2 Traps / Acre (Orchard border)',
    yieldBoost: 'Prevents 100% Tree Mortality',
    color: '#D97706'
  }
];

interface InteractiveCropMatcherProps {
  onNavigate: (page: PageId) => void;
}

export const InteractiveCropMatcher: React.FC<InteractiveCropMatcherProps> = ({ onNavigate }) => {
  const [selectedCropId, setSelectedCropId] = useState<string>('mango');

  const activeItem = CROP_MATCH_DATA.find(c => c.id === selectedCropId) || CROP_MATCH_DATA[0];

  return (
    <div className="rounded-3xl glass-panel-glow p-6 sm:p-10 shadow-xl space-y-6 relative overflow-hidden border border-white/90">
      
      {/* Ambient background glow accents */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-lime-400/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 relative z-10">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5E9]/80 backdrop-blur-xs text-[#2E7D32] text-xs font-bold uppercase tracking-wider border border-[#C8E6C9]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INSTANT CROP-TO-PEST MATCHER</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#164E24]">
            Select Your Crop to See the Bio Solution
          </h3>
          <p className="text-xs sm:text-sm text-[#4B5563]">
            Click any crop below to instantly reveal the target destructive pest, certified lure, and trap setup.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('pest-finder')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2E7D32] hover:text-[#164E24] transition-colors cursor-pointer shrink-0 self-start md:self-auto px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-xs border border-emerald-200/60 shadow-xs hover:shadow-sm"
        >
          <span>View All 20+ Crops in Pest Finder</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Glassmorphic Crop Pills Selector */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-thin relative z-10">
        {CROP_MATCH_DATA.map((crop) => {
          const isSelected = crop.id === selectedCropId;
          return (
            <button
              key={crop.id}
              type="button"
              onClick={() => setSelectedCropId(crop.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 shrink-0 flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-[#164E24] to-[#2E7D32] text-white shadow-lg shadow-emerald-950/20 scale-105 border border-white/40'
                  : 'bg-white/80 backdrop-blur-md text-[#374151] border border-white/90 hover:border-[#2E7D32] hover:bg-white shadow-xs'
              }`}
            >
              <span className="text-base">{crop.emoji}</span>
              <span>{crop.name}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Match Result Frosted Showcase Card */}
      <div className="rounded-3xl glass-refract-card p-5 sm:p-8 shadow-md relative z-10 glass-hover-elevate">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Pest Profile */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#2E7D32] shadow-md shrink-0 bg-gray-50 relative group">
                <img
                  src={activeItem.pestImage}
                  alt={activeItem.pestName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-xs text-white text-[9px] font-bold text-center py-0.5 uppercase tracking-wider">
                  Target Pest
                </div>
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50/90 border border-rose-200/60 px-2 py-0.5 rounded-md">
                  <Flame className="w-3 h-3 text-rose-600" />
                  <span>Primary Pest</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#164E24] leading-tight">
                  {activeItem.pestName}
                </h4>
                <p className="text-xs text-gray-500 italic font-serif">
                  ({activeItem.scientificName})
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50/80 backdrop-blur-xs border border-amber-200/80 text-xs text-amber-900 leading-relaxed shadow-xs">
              <span className="font-bold block text-amber-950 mb-0.5">Crop Damage Pattern:</span>
              {activeItem.damageType}
            </div>
          </div>

          {/* Middle Column: Bio-Pheromone Solution Match */}
          <div className="lg:col-span-4 space-y-3 border-y lg:border-y-0 lg:border-x border-gray-200/70 py-4 lg:py-0 lg:px-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#2E7D32] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
              <span>Recommended Bio-Trap Solution</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white/60 border border-white/80">
                <Target className="w-4 h-4 text-[#164E24] shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-500 block text-[11px]">Recommended Trap:</span>
                  <strong className="text-[#164E24] font-bold">{activeItem.trapType}</strong>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white/60 border border-white/80">
                <Clock className="w-4 h-4 text-[#164E24] shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-500 block text-[11px]">Pheromone Lure:</span>
                  <strong className="text-[#164E24] font-bold">{activeItem.lureName}</strong>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white/60 border border-white/80">
                <Layers className="w-4 h-4 text-[#164E24] shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-500 block text-[11px]">Field Dosing & Longevity:</span>
                  <span className="text-[#374151] font-semibold">{activeItem.trapsPerAcre} • {activeItem.lureLifespan}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Guaranteed Benefit & Action CTA */}
          <div className="lg:col-span-3 space-y-3 bg-gradient-to-br from-[#F4F9F4] to-[#E8F5E9] p-5 rounded-2xl border border-white shadow-sm text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs font-bold text-[#2E7D32]">
              <TrendingUp className="w-4 h-4" />
              <span>Harvest Impact</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-[#164E24] leading-tight">
              {activeItem.yieldBoost}
            </div>
            <p className="text-[11px] text-gray-600 leading-tight">
              Zero chemical residue, export compliant, and 100% bee-safe.
            </p>

            <button
              type="button"
              onClick={() => onNavigate('calculator')}
              className="w-full py-2.5 px-3 rounded-xl bg-[#164E24] hover:bg-[#0E3517] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer mt-2 active:scale-98"
            >
              <span>Calculate My Acreage Cost</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};
