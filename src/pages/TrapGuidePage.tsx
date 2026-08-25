import React, { useState, useMemo } from 'react';
import { TRAP_TYPES, BIO_TOOLS_DATA } from '../data/productsData';
import { TrapType, BioToolItem, PageId } from '../types';
import { 
  Droplet, 
  Filter, 
  Triangle, 
  Sun, 
  Palmtree, 
  CheckCircle2, 
  ShieldCheck, 
  HelpCircle, 
  Layers, 
  Ruler, 
  ArrowUpRight, 
  Sparkles,
  Send,
  Eye,
  StickyNote
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { PageFooterBanner } from '../components/PageFooterBanner';
import { SafeImage } from '../components/SafeImage';
import { AnimatedCard } from '../components/AnimatedCard';

interface TrapGuidePageProps {
  onNavigate: (page: PageId) => void;
  onInquireItem: (itemName: string) => void;
  onZoomImage: (src: string, alt: string) => void;
}

export const TrapGuidePage: React.FC<TrapGuidePageProps> = ({
  onNavigate,
  onInquireItem,
  onZoomImage,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All Trapping Systems' },
    { id: 'water_traps', label: 'Water Basin Traps' },
    { id: 'funnel_delta', label: 'Funnel & Delta Traps' },
    { id: 'fruit_fly', label: 'Fruit Fly & Glass Traps' },
    { id: 'solar', label: 'Solar Light Traps' },
    { id: 'sticky_tools', label: 'Sticky Sheets & Bio-Glues' }
  ];

  const filteredTraps = useMemo(() => {
    if (activeTab === 'all') return TRAP_TYPES;
    if (activeTab === 'water_traps') {
      return TRAP_TYPES.filter((t) => t.category === 'water_trap');
    }
    if (activeTab === 'funnel_delta') {
      return TRAP_TYPES.filter((t) => t.category === 'funnel_trap' || t.category === 'delta_trap');
    }
    if (activeTab === 'fruit_fly') {
      return TRAP_TYPES.filter((t) => t.category === 'fruit_fly_trap' || t.category === 'palm_trap');
    }
    if (activeTab === 'solar') {
      return TRAP_TYPES.filter((t) => t.category === 'solar_trap');
    }
    return [];
  }, [activeTab]);

  const showBioTools = activeTab === 'all' || activeTab === 'sticky_tools';

  return (
    <div className="space-y-12">
      {/* 1. Page Header */}
      <PageHeader
        badge="Field Mechanics & Trapping Protocols"
        title="TRAP HARDWARE &"
        highlightText="BIO-TOOLS GUIDE"
        subtitle="Complete technical guide to installing water traps, sleeve funnels, delta prisms, solar traps, and high-tack sticky sheets for maximum catch rates."
        currentPage="trap-guide"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 2. Hardware Category Tabs */}
        <div className="p-4 rounded-[28px] bg-white/50 backdrop-blur-xl border border-white/80 shadow-md">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#606C38] text-white shadow-md shadow-[#606C38]/20 border border-white/30 tracking-wide'
                    : 'bg-white/60 text-[#3C3C3C] hover:bg-[#E9EDC9]/60 border border-white/70 hover:text-[#283618]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Trapping Hardware Grid */}
        {filteredTraps.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#283618]">
                Standard Pheromone Traps & Dispensers
              </h2>
              <span className="text-xs text-[#606C38] font-semibold">
                {filteredTraps.length} Hardware Models
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTraps.map((trap, idx) => (
                <AnimatedCard
                  key={trap.id}
                  delay={(idx % 3) * 0.08}
                  distance={28}
                  hoverEffect
                  className="rounded-[32px] bg-white/50 backdrop-blur-xl border border-white/80 p-6 flex flex-col justify-between group hover:bg-white/85 hover:border-[#606C38]/30 hover:shadow-2xl transition-all duration-300 shadow-xs space-y-4"
                >
                  <div className="space-y-4">
                    
                    {/* Hardware Real Image with Zoom Trigger */}
                    <div 
                      className="cursor-pointer"
                      onClick={() => onZoomImage(trap.imageUrl, trap.name)}
                    >
                      <SafeImage
                        src={trap.imageUrl}
                        alt={trap.name}
                        aspectRatio="aspect-[4/3]"
                        enableZoom
                        onZoom={onZoomImage}
                      />
                    </div>

                    {/* Title & Best For */}
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E9EDC9] text-[#283618] border border-[#606C38]/20 inline-block mb-1.5">
                        {trap.dosagePerAcre || 'IPM Hardware'}
                      </span>
                      <h3 className="text-base font-serif font-bold text-[#283618] group-hover:text-[#606C38] transition-colors leading-snug">
                        {trap.name}
                      </h3>
                      <p className="text-xs text-[#BC6C25] font-medium mt-1">
                        Best For: {trap.bestFor}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#555] leading-relaxed font-light">
                      {trap.description}
                    </p>

                    {/* Recommended Height / Setup Specs */}
                    {trap.recommendedHeight && (
                      <div className="p-3 rounded-2xl bg-[#FEFAE0]/70 border border-[#DDA15E]/30 space-y-1">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#283618]">
                          <Ruler className="w-3.5 h-3.5 text-[#606C38]" />
                          <span>Installation Height:</span>
                        </div>
                        <p className="text-xs text-[#555] pl-5">{trap.recommendedHeight}</p>
                      </div>
                    )}

                    {/* Field Setup Advice */}
                    {trap.fieldSetupAdvice && (
                      <div className="text-[11px] text-[#666] bg-white/60 p-3 rounded-2xl border border-white/80 font-light">
                        <strong className="text-[#283618] block font-semibold mb-0.5">Field Setup Advice:</strong>
                        <span>{trap.fieldSetupAdvice}</span>
                      </div>
                    )}

                    {/* Advantages List */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-bold text-[#666] uppercase tracking-wider block">
                        Hardware Advantages:
                      </span>
                      {trap.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#3C3C3C]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#606C38] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Bottom Action Bar */}
                  <div className="pt-4 mt-4 border-t border-[#606C38]/10 flex items-center gap-2">
                    <button
                      onClick={() => onInquireItem(trap.name)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full text-xs font-semibold text-white bg-[#606C38] hover:bg-[#283618] shadow-sm shadow-[#606C38]/20 transition-all uppercase tracking-wider cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Inquire Trap Hardware</span>
                    </button>
                  </div>

                </AnimatedCard>
              ))}
            </div>
          </div>
        )}

        {/* 4. Sticky Sheets, Rolls, & Eco Glue Bio-Tools Section */}
        {showBioTools && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#606C38] bg-[#E9EDC9] px-3 py-1 rounded-full border border-[#606C38]/20 inline-block mb-1">
                  Sucking Pest Mass Trapping
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#283618]">
                  Sticky Trapping Aids, Ribbon Rolls & Bio-Glues
                </h2>
              </div>
              <span className="text-xs text-[#606C38] font-semibold">
                {BIO_TOOLS_DATA.length} Formulations
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BIO_TOOLS_DATA.map((tool, idx) => (
                <AnimatedCard
                  key={tool.id}
                  delay={idx * 0.1}
                  distance={28}
                  hoverEffect
                  className="rounded-[32px] bg-white/50 backdrop-blur-xl border border-white/80 p-6 sm:p-7 flex flex-col justify-between group hover:bg-white/85 hover:border-[#606C38]/30 hover:shadow-2xl transition-all duration-300 shadow-xs space-y-4"
                >
                  <div className="space-y-4">
                    
                    {/* Tool Image with Zoom */}
                    <div 
                      className="cursor-pointer"
                      onClick={() => onZoomImage(tool.imageUrl, tool.name)}
                    >
                      <SafeImage
                        src={tool.imageUrl}
                        alt={tool.name}
                        aspectRatio="aspect-[16/9]"
                        enableZoom
                        onZoom={onZoomImage}
                      />
                    </div>

                    {/* Header info */}
                    <div>
                      <h3 className="text-base font-serif font-bold text-[#283618] group-hover:text-[#606C38] transition-colors leading-snug">
                        {tool.name}
                      </h3>
                      <p className="text-xs text-[#606C38] font-medium mt-0.5">
                        {tool.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-[#555] leading-relaxed font-light">
                      {tool.description}
                    </p>

                    {/* Target Pests & Crops */}
                    <div className="space-y-2 bg-white/60 p-3.5 rounded-2xl border border-white/80 text-xs">
                      <div>
                        <strong className="text-[#283618] block font-semibold mb-1">Target Sucking Pests:</strong>
                        <div className="flex flex-wrap gap-1">
                          {tool.targetPests.map((p) => (
                            <span key={p} className="px-2 py-0.5 rounded-full bg-[#E9EDC9] text-[#283618] text-[10px] font-medium">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>

                      {tool.specs.applicationRate && (
                        <div className="pt-2 border-t border-[#606C38]/10">
                          <strong className="text-[#283618] block font-semibold text-[11px]">Recommended Application Rate:</strong>
                          <span className="text-[#555] text-[11px]">{tool.specs.applicationRate}</span>
                        </div>
                      )}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1">
                      {tool.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-[#3C3C3C]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#606C38] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 border-t border-[#606C38]/10">
                    <button
                      onClick={() => onInquireItem(tool.name)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full text-xs font-semibold text-white bg-[#606C38] hover:bg-[#283618] shadow-sm transition-all uppercase tracking-wider cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Quote for {tool.name.split('(')[0]}</span>
                    </button>
                  </div>

                </AnimatedCard>
              ))}
            </div>
          </div>
        )}

        {/* 5. Golden Rules for Field Trap Installation */}
        <AnimatedCard
          delay={0.15}
          distance={30}
          className="p-8 sm:p-10 rounded-[36px] bg-white/50 backdrop-blur-2xl border border-white/80 shadow-xl space-y-6"
        >
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#BC6C25] bg-[#FEFAE0] px-3 py-1 rounded-full border border-[#DDA15E]/30">
              Agronomist Field Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#283618]">
              4 Golden Rules of Trap Installation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <AnimatedCard delay={0.1} distance={20} className="p-5 rounded-[24px] bg-white/60 border border-white/80 space-y-2 text-center">
              <span className="w-8 h-8 rounded-full bg-[#E9EDC9] text-[#283618] font-bold inline-flex items-center justify-center text-xs">
                1
              </span>
              <h3 className="text-sm font-serif font-bold text-[#283618]">Canopy Height Level</h3>
              <p className="text-xs text-[#555] font-light leading-relaxed">
                Mount traps 15–30 cm above vegetative crop canopy to allow the pheromone plume to disperse with ambient wind currents.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.2} distance={20} className="p-5 rounded-[24px] bg-white/60 border border-white/80 space-y-2 text-center">
              <span className="w-8 h-8 rounded-full bg-[#E9EDC9] text-[#283618] font-bold inline-flex items-center justify-center text-xs">
                2
              </span>
              <h3 className="text-sm font-serif font-bold text-[#283618]">Shaded Tree Canopy</h3>
              <p className="text-xs text-[#555] font-light leading-relaxed">
                In fruit orchards, position fruit fly traps inside the northern or shaded branches to avoid extreme midday direct sunlight.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.3} distance={20} className="p-5 rounded-[24px] bg-white/60 border border-white/80 space-y-2 text-center">
              <span className="w-8 h-8 rounded-full bg-[#E9EDC9] text-[#283618] font-bold inline-flex items-center justify-center text-xs">
                3
              </span>
              <h3 className="text-sm font-serif font-bold text-[#283618]">Water Basin Oil Layer</h3>
              <p className="text-xs text-[#555] font-light leading-relaxed">
                For water traps, add 5–10 ml of neem oil, kerosene, or liquid soap on the water surface to break surface tension and immobilize moths.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.4} distance={20} className="p-5 rounded-[24px] bg-white/60 border border-white/80 space-y-2 text-center">
              <span className="w-8 h-8 rounded-full bg-[#E9EDC9] text-[#283618] font-bold inline-flex items-center justify-center text-xs">
                4
              </span>
              <h3 className="text-sm font-serif font-bold text-[#283618]">Timely Lure Renewal</h3>
              <p className="text-xs text-[#555] font-light leading-relaxed">
                Renew lures every 30–45 days (or 2–3 months for RPW/Fruit Fly) to guarantee uninterrupted reproductive disruption.
              </p>
            </AnimatedCard>
          </div>
        </AnimatedCard>

      </div>

      {/* Page Footer Navigation */}
      <PageFooterBanner
        nextPageId="calculator"
        nextPageTitle="Acreage & Dose Calculator"
        nextPageDescription="Calculate your farm's required trap units, lure replacements, and estimated chemical savings in seconds."
        onNavigate={onNavigate}
      />
    </div>
  );
};
