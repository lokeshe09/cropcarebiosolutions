import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  MessageCircle,
} from 'lucide-react';
import { PageId } from '../types';
import agronomistImg from '../assets/images/agronomist_field_inspection_1787652581807.jpg';
import harvestImg from '../assets/images/export_mango_harvest_1787652565787.jpg';
import farmInspectionImg from '../assets/images/farm_field_inspection_1787649146636.jpg';

interface AgriculturalNarrativeSectionProps {
  onNavigate: (page: PageId) => void;
}

export const AgriculturalNarrativeSection: React.FC<AgriculturalNarrativeSectionProps> = ({ onNavigate }) => {
  const [activeStoryStage, setActiveStoryStage] = useState<number>(0);

  const narrativeStages = [
    {
      id: 0,
      title: "The Silent Orchard Threat",
      subtitle: "Why conventional spraying fails against cryptic pests",
      tagline: "Oviposition Beneath The Fruit Rind",
      description: "Female fruit flies and boring moths do not feed openly on leaves; they pierce unripened fruit skin to deposit hundreds of microscopic eggs inside the pulp. Once eggs hatch into internal maggots, chemical contact pesticides cannot penetrate inside the fruit without leaving toxic residues.",
      impact: "Up to 40% premature fruit drop and 100% loss of export value.",
      badge: "The Problem",
      badgeColor: "bg-red-100 text-red-900 border-red-300 font-bold",
      image: farmInspectionImg,
      stats: "30-40% Crop Loss in Unprotected Orchards"
    },
    {
      id: 1,
      title: "The Semiochemical Breakthrough",
      subtitle: "Harnessing nature's volatile communication channels",
      tagline: "Ultra-Pure Synthetic Pheromone Mimics",
      description: "Crop Care Bio Solutions synthesizes isomerically pure female sex pheromones (≥99.5% purity) embedded in UV-stabilized polymer matrix blocks. These dispensers continuously emit an invisible olfactory plume across 400+ meters, irresistible to males of the targeted pest species.",
      impact: "Zero toxic contact sprays required; completely safe for humans & pollinators.",
      badge: "The Science",
      badgeColor: "bg-emerald-100 text-[#073B20] border-[#C8E6C9] font-bold",
      image: agronomistImg,
      stats: "≥99.5% Pheromone Isomer Purity"
    },
    {
      id: 2,
      title: "Clean Harvest & Market Premium",
      subtitle: "Blemish-free produce commanding maximum market prices",
      tagline: "Export-Grade & Zero Residue Certified",
      description: "By capturing male pests before fertilization occurs, female flies lay sterile or no eggs. Fruits develop naturally, free from internal punctures or secondary fungal rot. Farmers harvest export-grade, residue-free produce that satisfies APEDA and GlobalGAP export standards.",
      impact: "Grade-A market packout jumps by over 35% with ₹8,000+ per acre spray savings.",
      badge: "The Result",
      badgeColor: "bg-lime-100 text-[#073B20] border-lime-300 font-bold",
      image: harvestImg,
      stats: "+35% Export Grade Harvest Volume"
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F4F7F2] relative overflow-hidden border-y border-gray-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title & Subheading with Crisp Contrast */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#126B35]">
            <Sparkles className="w-4 h-4 text-[#126B35]" />
            <span>THE BIOTECHNOLOGY STORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#073B20] tracking-tight leading-[1.12]">
            From Pest Crisis to Export Triumph: How Bio-Trapping Works.
          </h2>
          <p className="text-base sm:text-lg text-[#34443B] font-medium leading-relaxed">
            Understanding why conventional pesticides fail against boring pests — and how species-specific semiochemicals permanently break the reproductive cycle.
          </p>
        </div>

        {/* Narrative Interactive Storyboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Stage Selector Tabs & Content */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            
            {/* 3 Step Stage Selectors */}
            <div className="space-y-3">
              {narrativeStages.map((stage, idx) => {
                const isActive = activeStoryStage === idx;
                return (
                  <div
                    key={stage.id}
                    onClick={() => setActiveStoryStage(idx)}
                    className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                      isActive 
                        ? 'bg-white border-[#073B20] shadow-xl scale-[1.01]' 
                        : 'bg-white/80 hover:bg-white border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs ${
                          isActive 
                            ? 'bg-[#073B20] text-[#8BE52A]' 
                            : 'bg-gray-200 text-[#34443B]'
                        }`}>
                          0{idx + 1}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-[#59675F] uppercase tracking-wider">{stage.badge}</div>
                          <h3 className={`text-base sm:text-lg font-black leading-tight ${isActive ? 'text-[#073B20]' : 'text-[#34443B]'}`}>
                            {stage.title}
                          </h3>
                        </div>
                      </div>
                      <span className={`text-[11px] font-black px-3 py-1 rounded-full border hidden sm:inline ${stage.badgeColor}`}>
                        {stage.tagline}
                      </span>
                    </div>

                    {/* Active Expanded Details */}
                    {isActive && (
                      <div className="mt-4 pt-3 border-t border-gray-200 space-y-3 animate-in fade-in duration-300">
                        <p className="text-xs sm:text-sm text-[#34443B] leading-relaxed font-medium">
                          {stage.description}
                        </p>
                        <div className="p-3.5 rounded-xl bg-[#E8F5E9] border border-[#C8E6C9] flex items-center justify-between text-xs font-bold text-[#073B20]">
                          <span className="text-[#34443B] font-semibold">Core Field Impact:</span>
                          <span className="text-[#073B20] font-black">{stage.impact}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Direct Agronomist Consultation Bar */}
            <div className="p-5 rounded-2xl bg-[#04170D] text-white shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-white/20">
              <div>
                <div className="text-sm font-black text-[#8BE52A]">Need help identifying pest damage?</div>
                <div className="text-xs text-[#E6EFE9] font-medium">Send a crop photo to our agronomists for instant analysis.</div>
              </div>
              <a
                href="https://wa.me/919876543210?text=Hello%20Crop%20Care%2C%20I%20have%20sent%20a%20photo%20of%20my%20crop%20damage%20for%20diagnosis."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#8BE52A] text-[#04170D] text-xs font-black hover:bg-[#9cf53b] transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Photo</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Stage Showcase with Real Photography & High Contrast Overlay */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border border-gray-300 min-h-[440px] flex flex-col justify-end p-6 sm:p-8 group bg-[#04170D]">
            
            {/* Background Stage Photograph */}
            <img 
              src={narrativeStages[activeStoryStage].image} 
              alt={narrativeStages[activeStoryStage].title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 scale-100 group-hover:scale-105 -z-20 brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04170D] via-[#04170D]/60 to-transparent -z-10" />

            {/* Top Floating Badge */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between gap-3">
              <span className="px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/30 text-white text-xs font-black shadow-lg">
                Phase 0{activeStoryStage + 1} / 03
              </span>
              <span className="px-4 py-1.5 rounded-full bg-[#8BE52A] text-[#04170D] text-xs font-black shadow-lg">
                {narrativeStages[activeStoryStage].stats}
              </span>
            </div>

            {/* Bottom High Contrast Information Plate */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-3 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-[#126B35]">
                  {narrativeStages[activeStoryStage].tagline}
                </span>
                <span className="text-xs text-[#59675F] font-bold">Bio-Rational Protocol</span>
              </div>
              <h4 className="text-xl font-black text-[#073B20] leading-tight">
                {narrativeStages[activeStoryStage].title}
              </h4>
              <p className="text-xs sm:text-sm text-[#34443B] leading-relaxed font-medium">
                {narrativeStages[activeStoryStage].description}
              </p>
              
              <div className="pt-2 flex items-center justify-between border-t border-gray-200">
                <span className="text-xs font-black text-[#073B20]">
                  {activeStoryStage === 0 ? "⚠️ High Risk Period" : activeStoryStage === 1 ? "🧪 Active Diffusion" : "🏆 Certified Harvest"}
                </span>
                <button
                  type="button"
                  onClick={() => onNavigate('pest-finder')}
                  className="text-xs font-black text-[#073B20] hover:text-[#126B35] flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Target Pests</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
