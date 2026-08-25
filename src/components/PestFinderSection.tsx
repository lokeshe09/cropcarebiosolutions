import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/productsData';
import { Product } from '../types';
import { Sprout, Search, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface PestFinderSectionProps {
  onSelectProduct: (product: Product) => void;
}

const CROP_CATEGORIES = [
  {
    name: 'Cucurbits & Gourds',
    crops: ['Cucumber', 'Bitter Gourd', 'Bottle Gourd', 'Ridge Gourd', 'Snake Gourd', 'Pumpkin', 'Zucchini', 'Watermelon', 'Muskmelon'],
    recommendedLures: ['bactrocera-cucurbitae'],
    keyThreat: 'Melon Fruit Fly (Bactrocera Cucurbitae)',
    icon: '🥒'
  },
  {
    name: 'Tomatoes & Potatoes',
    crops: ['Tomato', 'Potato', 'Polyhouse Solanaceous'],
    recommendedLures: ['tuta-absoluta', 'helicoverpa-armigera', 'bactrocera-cucurbitae'],
    keyThreat: 'Tuta absoluta (Leafminer) & Fruit Borer',
    icon: '🍅'
  },
  {
    name: 'Brinjal / Eggplant',
    crops: ['Brinjal', 'Eggplant (All Varieties)'],
    recommendedLures: ['leucinodes-orbonalis', 'bactrocera-cucurbitae'],
    keyThreat: 'Fruit & Shoot Borer (Leucinodes orbonalis)',
    icon: '🍆'
  },
  {
    name: 'Fruit Orchards',
    crops: ['Mango', 'Guava', 'Citrus', 'Papaya', 'Avocado', 'Passion Fruit', 'Peach', 'Plum'],
    recommendedLures: ['bactrocera-dorsalis'],
    keyThreat: 'Oriental Fruit Fly (Bactrocera dorsalis)',
    icon: '🥭'
  },
  {
    name: 'Cotton & Pulses',
    crops: ['Cotton', 'Gram / Chickpea', 'Pigeon Pea', 'Maize', 'Sunflower', 'Chilly / Capsicum'],
    recommendedLures: ['helicoverpa-armigera', 'spodoptera-litura'],
    keyThreat: 'Cotton Bollworm (Helicoverpa) & Spodoptera',
    icon: '🌾'
  },
  {
    name: 'Coconut & Palm Groves',
    crops: ['Coconut', 'Arecanut', 'Date Palm', 'Oil Palm'],
    recommendedLures: ['red-palm-weevil', 'rpw-magnet', 'rhinoceros-beetle'],
    keyThreat: 'Red Palm Weevil (RPW) & Rhinoceros Beetle',
    icon: '🌴'
  }
];

export const PestFinderSection: React.FC<PestFinderSectionProps> = ({ onSelectProduct }) => {
  const [activeGroupIndex, setActiveGroupIndex] = useState<number>(0);
  const activeGroup = CROP_CATEGORIES[activeGroupIndex];

  const relevantProducts = PRODUCTS_DATA.filter((p) =>
    activeGroup.recommendedLures.includes(p.id)
  );

  return (
    <section id="pest-finder" className="py-20 relative overflow-hidden bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-white/70 backdrop-blur-md shadow-xs">
            <Sprout className="w-3.5 h-3.5 text-[#606C38]" />
            <span className="text-[11px] font-semibold text-[#606C38] tracking-[0.2em] uppercase">
              Crop Protection Diagnostic Tool
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#283618] leading-[1.15]">
            CROP-TO-PEST <span className="text-gradient-natural italic">MATCH FINDER</span>
          </h2>

          <p className="text-base text-[#555] font-light leading-relaxed">
            Select your crop family to instantly uncover the primary biological threats and targeted pheromone countermeasures.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {CROP_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveGroupIndex(idx)}
              className={`p-4 rounded-[22px] text-left transition-all duration-200 flex flex-col justify-between ${
                activeGroupIndex === idx
                  ? 'bg-white/90 border border-[#606C38] shadow-md ring-2 ring-[#606C38]/20 backdrop-blur-xl'
                  : 'bg-white/45 hover:bg-white/75 border border-white/70 backdrop-blur-md shadow-2xs'
              }`}
            >
              <span className="text-2xl mb-1.5">{cat.icon}</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#283618] leading-tight">
                {cat.name}
              </span>
              <span className="text-[10px] text-[#606C38] font-medium mt-1">
                {cat.recommendedLures.length} Solutions
              </span>
            </button>
          ))}
        </div>

        {/* Selected Crop Group Overview Panel */}
        <div className="rounded-[32px] bg-white/50 backdrop-blur-xl border border-white/80 p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#606C38]/10 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{activeGroup.icon}</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#283618]">
                  {activeGroup.name}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#555] mt-1 font-light">
                Major Bio Threat: <strong className="text-[#283618] font-semibold">{activeGroup.keyThreat}</strong>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {activeGroup.crops.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#FEFAE0] text-[#283618] border border-[#DDA15E]/30"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Recommended Lures Grid for This Crop */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#606C38] mb-4">
              Recommended Crop Care Bio Solutions:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relevantProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="p-5 rounded-[24px] glass-refract-card flex flex-col justify-between group glass-hover-elevate shadow-xs"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#283618] bg-[#E9EDC9] px-2.5 py-0.5 rounded-full border border-[#606C38]/20">
                        {prod.category}
                      </span>
                      <span className="text-[10px] text-[#666] font-medium">
                        {prod.fieldLife.split('(')[0]}
                      </span>
                    </div>

                    <h5 className="text-sm font-serif font-bold text-[#283618] group-hover:text-[#606C38] leading-snug">
                      {prod.name}
                    </h5>

                    <p className="text-xs text-[#555] line-clamp-2 font-light">
                      {prod.shortDescription}
                    </p>

                    <div className="text-[11px] text-[#283618] font-medium">
                      <strong>Dosage:</strong> {prod.trapsPerAcre}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectProduct(prod)}
                    className="mt-4 w-full py-2.5 rounded-full text-xs font-semibold text-[#283618] bg-[#FEFAE0] hover:bg-[#E9EDC9] border border-[#606C38]/20 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>View Application Protocol</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#606C38]" />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
