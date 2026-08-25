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
    <div className="rounded-3xl bg-white border border-gray-300 p-6 sm:p-10 shadow-xl space-y-6 relative overflow-hidden text-left">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 relative z-10 border-b border-gray-200 pb-4">
        <div className="space-y-1.5 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#073B20] text-xs font-black uppercase tracking-wider border border-[#C8E6C9]">
            <Sparkles className="w-3.5 h-3.5 text-[#126B35]" />
            <span>INSTANT CROP-TO-PEST MATCHER</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#073B20]">
            Select Your Crop to See the Bio Solution
          </h3>
          <p className="text-xs sm:text-sm text-[#34443B] font-medium">
            Click any crop below to instantly reveal the target destructive pest, certified lure, and trap setup.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('pest-finder')}
          className="inline-flex items-center gap-1.5 text-xs font-black text-[#073B20] hover:text-[#126B35] transition-colors cursor-pointer shrink-0 self-start md:self-auto px-4 py-2 rounded-full bg-[#E8F5E9] border border-[#C8E6C9] shadow-xs"
        >
          <span>View All Crops in Pest Finder</span>
          <ArrowRight className="w-4 h-4 text-[#073B20]" />
        </button>
      </div>

      {/* Crop Pills Selector */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-thin relative z-10">
        {CROP_MATCH_DATA.map((crop) => {
          const isSelected = crop.id === selectedCropId;
          return (
            <button
              key={crop.id}
              type="button"
              onClick={() => setSelectedCropId(crop.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all duration-200 shrink-0 flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? 'bg-[#073B20] text-white shadow-md border border-[#073B20]'
                  : 'bg-gray-100 text-[#34443B] border border-gray-300 hover:border-[#073B20] hover:bg-gray-200'
              }`}
            >
              <span className="text-base">{crop.emoji}</span>
              <span>{crop.name}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Match Result Showcase Card */}
      <div className="rounded-3xl bg-[#FAFBF9] border border-gray-300 p-6 sm:p-8 shadow-md relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Pest Profile */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#073B20] shadow-md shrink-0 bg-gray-100 relative group">
                <img
                  src={activeItem.pestImage}
                  alt={activeItem.pestName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black/85 text-white text-[9px] font-black text-center py-0.5 uppercase tracking-wider">
                  Target Pest
                </div>
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-rose-800 bg-rose-100 border border-rose-300 px-2 py-0.5 rounded-md">
                  <Flame className="w-3 h-3 text-rose-700" />
                  <span>Primary Pest</span>
                </div>
                <h4 className="text-lg sm:text-xl font-black text-[#073B20] leading-tight">
                  {activeItem.pestName}
                </h4>
                <p className="text-xs text-[#59675F] italic font-serif font-bold">
                  ({activeItem.scientificName})
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-950 leading-relaxed shadow-xs">
              <span className="font-black block text-amber-950 mb-0.5">Crop Damage Pattern:</span>
              <span className="font-medium">{activeItem.damageType}</span>
            </div>
          </div>

          {/* Middle Column: Bio-Pheromone Solution Match */}
          <div className="lg:col-span-4 space-y-3 border-y lg:border-y-0 lg:border-x border-gray-300 py-4 lg:py-0 lg:px-6">
            <div className="text-xs font-black uppercase tracking-wider text-[#126B35] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#126B35]" />
              <span>Recommended Bio-Trap Solution</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-gray-200">
                <Target className="w-4 h-4 text-[#073B20] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#59675F] block text-[11px] font-bold">Recommended Trap:</span>
                  <strong className="text-[#073B20] font-black">{activeItem.trapType}</strong>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-gray-200">
                <Clock className="w-4 h-4 text-[#073B20] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#59675F] block text-[11px] font-bold">Pheromone Lure:</span>
                  <strong className="text-[#073B20] font-black">{activeItem.lureName}</strong>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-gray-200">
                <Layers className="w-4 h-4 text-[#073B20] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#59675F] block text-[11px] font-bold">Field Dosing &amp; Longevity:</span>
                  <span className="text-[#34443B] font-black">{activeItem.trapsPerAcre} &bull; {activeItem.lureLifespan}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Guaranteed Benefit & Action CTA */}
          <div className="lg:col-span-3 space-y-3 bg-[#E8F5E9] p-5 rounded-2xl border border-[#C8E6C9] shadow-sm text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs font-black text-[#126B35]">
              <TrendingUp className="w-4 h-4 text-[#126B35]" />
              <span>Harvest Impact</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-[#073B20] leading-tight">
              {activeItem.yieldBoost}
            </div>
            <p className="text-xs text-[#34443B] leading-snug font-medium">
              Zero chemical residue, export compliant, and 100% bee-safe.
            </p>

            <button
              type="button"
              onClick={() => onNavigate('calculator')}
              className="w-full py-2.5 px-3 rounded-xl bg-[#073B20] hover:bg-[#126B35] text-white text-xs font-black transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer mt-2 active:scale-98"
            >
              <span>Calculate My Acreage Cost</span>
              <ChevronRight className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};
