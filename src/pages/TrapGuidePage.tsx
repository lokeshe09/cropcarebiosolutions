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
    <div className="space-y-8 bg-stone-50/50 pb-8">
      {/* 1. Page Header */}
      <PageHeader
        badge="Field Mechanics & Trapping Protocols"
        title="Trap Hardware &"
        highlightText="Bio-Tools Guide"
        subtitle="Complete technical guide to installing water traps, sleeve funnels, delta prisms, solar traps, and high-tack sticky sheets for maximum catch rates."
        currentPage="trap-guide"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* 2. Hardware Category Tabs */}
        <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-stone-200 shadow-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#073B20] text-white font-semibold shadow-xs'
                    : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Trapping Hardware Grid */}
        {filteredTraps.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                Standard Pheromone Traps &amp; Dispensers
              </h2>
              <span className="text-xs text-stone-500 font-medium">
                {filteredTraps.length} Hardware Models
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTraps.map((trap) => (
                <div
                  key={trap.id}
                  className="rounded-xl bg-white border border-stone-200 p-5 sm:p-6 flex flex-col justify-between group hover:border-stone-300 hover:shadow-md transition-all duration-200 shadow-xs space-y-4"
                >
                  <div className="space-y-4">
                    
                    {/* Hardware Real Image with Zoom Trigger */}
                    <div 
                      className="cursor-pointer rounded-lg overflow-hidden border border-stone-200 bg-stone-50"
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
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-100 inline-block mb-1.5">
                        {trap.dosagePerAcre || 'IPM Hardware'}
                      </span>
                      <h3 className="text-base font-bold text-stone-900 group-hover:text-[#073B20] transition-colors leading-snug">
                        {trap.name}
                      </h3>
                      <p className="text-xs text-amber-800 font-medium mt-1">
                        Best For: {trap.bestFor}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {trap.description}
                    </p>

                    {/* Recommended Height / Setup Specs */}
                    {trap.recommendedHeight && (
                      <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200/80 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-900">
                          <Ruler className="w-3.5 h-3.5 text-amber-700" />
                          <span>Installation Height:</span>
                        </div>
                        <p className="text-xs text-stone-700 pl-5">{trap.recommendedHeight}</p>
                      </div>
                    )}

                    {/* Field Setup Advice */}
                    {trap.fieldSetupAdvice && (
                      <div className="text-xs text-stone-600 bg-stone-50 p-3 rounded-lg border border-stone-200">
                        <strong className="text-stone-800 block font-semibold mb-0.5">Field Setup Advice:</strong>
                        <span>{trap.fieldSetupAdvice}</span>
                      </div>
                    )}

                    {/* Advantages List */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                        Hardware Advantages:
                      </span>
                      {trap.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Bottom Action Bar */}
                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-2">
                    <button
                      onClick={() => onInquireItem(trap.name)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-[#073B20] hover:bg-[#126B35] shadow-xs transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Inquire Trap Hardware</span>
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Sticky Sheets, Rolls, & Eco Glue Bio-Tools Section */}
        {showBioTools && (
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-100 inline-block mb-1">
                  Sucking Pest Mass Trapping
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                  Sticky Trapping Aids, Ribbon Rolls &amp; Bio-Glues
                </h2>
              </div>
              <span className="text-xs text-stone-500 font-medium">
                {BIO_TOOLS_DATA.length} Formulations
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BIO_TOOLS_DATA.map((tool) => (
                <div
                  key={tool.id}
                  className="rounded-xl bg-white border border-stone-200 p-5 sm:p-6 flex flex-col justify-between group hover:border-stone-300 hover:shadow-md transition-all duration-200 shadow-xs space-y-4"
                >
                  <div className="space-y-4">
                    
                    {/* Tool Image with Zoom */}
                    <div 
                      className="cursor-pointer rounded-lg overflow-hidden border border-stone-200 bg-stone-50"
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
                      <h3 className="text-base font-bold text-stone-900 group-hover:text-[#073B20] transition-colors leading-snug">
                        {tool.name}
                      </h3>
                      <p className="text-xs text-emerald-800 font-medium mt-0.5">
                        {tool.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {tool.description}
                    </p>

                    {/* Target Pests & Crops */}
                    <div className="space-y-2 bg-stone-50 p-3.5 rounded-lg border border-stone-200 text-xs">
                      <div>
                        <strong className="text-stone-900 block font-semibold mb-1">Target Sucking Pests:</strong>
                        <div className="flex flex-wrap gap-1">
                          {tool.targetPests.map((p) => (
                            <span key={p} className="px-2 py-0.5 rounded-md bg-white border border-stone-200 text-stone-800 text-[11px] font-medium">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>

                      {tool.specs.applicationRate && (
                        <div className="pt-2 border-t border-stone-200">
                          <strong className="text-stone-900 block font-semibold text-xs">Recommended Application Rate:</strong>
                          <span className="text-stone-600 text-xs">{tool.specs.applicationRate}</span>
                        </div>
                      )}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1">
                      {tool.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 border-t border-stone-100">
                    <button
                      onClick={() => onInquireItem(tool.name)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-[#073B20] hover:bg-[#126B35] shadow-xs transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Quote for {tool.name.split('(')[0]}</span>
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. Golden Rules for Field Trap Installation */}
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-stone-200 shadow-xs space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
              Agronomist Field Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              4 Golden Rules of Trap Installation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 space-y-2 text-left">
              <span className="w-7 h-7 rounded-md bg-emerald-100 text-emerald-900 font-bold inline-flex items-center justify-center text-xs">
                1
              </span>
              <h3 className="text-sm font-bold text-stone-900">Canopy Height Level</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Mount traps 15–30 cm above vegetative crop canopy to allow the pheromone plume to disperse with ambient wind currents.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 space-y-2 text-left">
              <span className="w-7 h-7 rounded-md bg-emerald-100 text-emerald-900 font-bold inline-flex items-center justify-center text-xs">
                2
              </span>
              <h3 className="text-sm font-bold text-stone-900">Shaded Tree Canopy</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                In fruit orchards, position fruit fly traps inside northern or shaded branches to avoid extreme midday direct sunlight.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 space-y-2 text-left">
              <span className="w-7 h-7 rounded-md bg-emerald-100 text-emerald-900 font-bold inline-flex items-center justify-center text-xs">
                3
              </span>
              <h3 className="text-sm font-bold text-stone-900">Water Basin Oil Layer</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                For water traps, add 5–10 ml of neem oil, kerosene, or liquid soap on water surface to break surface tension and capture moths.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 space-y-2 text-left">
              <span className="w-7 h-7 rounded-md bg-emerald-100 text-emerald-900 font-bold inline-flex items-center justify-center text-xs">
                4
              </span>
              <h3 className="text-sm font-bold text-stone-900">Timely Lure Renewal</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Renew lures every 30–45 days (or 2–3 months for RPW/Fruit Fly) to guarantee uninterrupted reproductive disruption.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Page Footer Navigation */}
      <PageFooterBanner
        nextPageId="contact"
        nextPageTitle="Agronomic Advisory & Quotations"
        nextPageDescription="Speak directly with our technical team, request bulk pricing for FPOs, or get a customized trap quote for your farm."
        onNavigate={onNavigate}
      />
    </div>
  );
};
