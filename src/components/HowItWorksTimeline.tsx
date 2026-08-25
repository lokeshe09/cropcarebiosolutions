import React, { useState } from 'react';
import { 
  Search, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Clock, 
  Wind
} from 'lucide-react';
import { PageId } from '../types';

interface HowItWorksTimelineProps {
  onNavigate?: (page: PageId) => void;
}

export const HowItWorksTimeline: React.FC<HowItWorksTimelineProps> = ({ onNavigate }) => {
  const [activeDayIndex, setActiveDayIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'timeline' | 'fieldmap'>('timeline');

  const timelineDays = [
    {
      day: 'DAY 01',
      title: 'Canopy Deployment',
      subtitle: 'Trap Setup & Lure Activation',
      description: 'Hang traps at 1.5m height within the shady internal canopy before flowering and initial fruit setting.',
      metric: '10–12 Traps / Acre',
      icon: Layers,
      plumeStatus: 'Vapor initiation (99.8% pure isomer release begins)'
    },
    {
      day: 'DAY 15',
      title: 'Population Monitoring',
      subtitle: 'Catch Threshold Analysis',
      description: 'Weekly inspection reveals peak flight hours and species density. Catch numbers guide localized hot-spot management.',
      metric: '< 5 flies/trap/wk',
      icon: Search,
      plumeStatus: 'Plume stabilizes across entire 1-acre grid'
    },
    {
      day: 'DAY 30',
      title: 'Active Mating Disruption',
      subtitle: 'Peak Biological Intervention',
      description: 'Male fruit flies/moths are continuously trapped before locating calling females. Zero fertile eggs deposited beneath fruit rind.',
      metric: '95%+ Male Attracted',
      icon: Sparkles,
      plumeStatus: 'Max vapor density; zero skin puncture risk'
    },
    {
      day: 'DAY 45',
      title: 'Population Suppression',
      subtitle: 'Inter-Generational Collapse',
      description: 'Eliminating reproduction collapses subsequent generations, keeping orchards free from internal boring maggots.',
      metric: 'Zero Maggot Rot',
      icon: ShieldCheck,
      plumeStatus: 'Continuous residual vapor barrier active'
    },
    {
      day: 'DAY 60',
      title: 'Export-Grade Harvest',
      subtitle: 'Certified Residue-Free Crop',
      description: 'Blemish-free harvest with 0 ppm chemical residues ready for international export packing and maximum market value.',
      metric: '+35% Export Value',
      icon: Award,
      plumeStatus: 'Full 60-day longevity cycle complete'
    }
  ];

  return (
    <section className="space-y-12">
      
      {/* Editorial Section Header with High Contrast */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-300 pb-8">
        <div className="space-y-2 max-w-2xl">
          <div className="text-xs font-black uppercase tracking-[0.25em] text-[#126B35] flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#126B35]" />
            <span>CHAPTER 04 &bull; THE FIELD TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#073B20] tracking-tight leading-[1.1]">
            60-Day Protection &amp; Field Geometry.
          </h2>
        </div>
        
        {/* Toggle Switch between 60-Day Timeline & Orchard Topographic Map */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-gray-200 border border-gray-300 self-start md:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab('timeline')}
            className={`px-4 py-2 rounded-full text-xs font-black transition-all cursor-pointer ${
              activeTab === 'timeline'
                ? 'bg-[#073B20] text-white shadow-md'
                : 'text-[#34443B] hover:text-[#073B20]'
            }`}
          >
            60-Day Timeline
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('fieldmap')}
            className={`px-4 py-2 rounded-full text-xs font-black transition-all cursor-pointer ${
              activeTab === 'fieldmap'
                ? 'bg-[#073B20] text-white shadow-md'
                : 'text-[#34443B] hover:text-[#073B20]'
            }`}
          >
            Topographic Field Grid
          </button>
        </div>
      </div>

      {/* VIEW 1: ELEGANT HORIZONTAL 60-DAY PROTECTION TIMELINE */}
      {activeTab === 'timeline' && (
        <div className="rounded-3xl bg-[#04170D] text-white p-8 sm:p-12 shadow-2xl border border-white/20 space-y-10 relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/20">
            <div>
              <span className="text-xs font-mono uppercase text-[#8BE52A] tracking-widest block font-bold">
                CHRONOLOGICAL BIOCONTROL LIFECYCLE
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Sustained 60-Day Protection Pathway
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#E6EFE9] font-bold">
              <Clock className="w-4 h-4 text-[#8BE52A]" />
              <span>Controlled 60-Day Polymeric Evaporation</span>
            </div>
          </div>

          {/* Horizontal Step Progression Bar */}
          <div className="relative">
            {/* Background Line */}
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] bg-white/20 -translate-y-1/2" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
              {timelineDays.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = activeDayIndex === idx;
                return (
                  <button
                    key={item.day}
                    type="button"
                    onClick={() => setActiveDayIndex(idx)}
                    className={`p-5 rounded-2xl transition-all duration-300 text-left flex flex-col justify-between cursor-pointer border ${
                      isSelected 
                        ? 'bg-white/20 border-[#8BE52A] shadow-xl scale-102 ring-2 ring-[#8BE52A]/50' 
                        : 'bg-white/10 border-white/20 hover:bg-white/15'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-mono font-black ${isSelected ? 'text-[#8BE52A]' : 'text-white'}`}>
                          {item.day}
                        </span>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isSelected ? 'bg-[#8BE52A] text-[#04170D]' : 'bg-white/15 text-white'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-white leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#E6EFE9] line-clamp-2 mt-1 font-medium">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 mt-3 border-t border-white/20">
                      <span className="text-xs font-mono text-[#8BE52A] font-black">
                        {item.metric}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Day Detail Card */}
          <div className="p-6 rounded-2xl bg-white/10 border border-white/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="text-xs font-mono text-[#8BE52A] font-bold">
                ACTIVE STAGE DETAILS: {timelineDays[activeDayIndex].day} — {timelineDays[activeDayIndex].title.toUpperCase()}
              </div>
              <p className="text-sm text-[#E6EFE9] max-w-2xl leading-relaxed font-medium">
                {timelineDays[activeDayIndex].description} {timelineDays[activeDayIndex].plumeStatus}.
              </p>
            </div>
            <div className="px-5 py-3 rounded-xl bg-[#8BE52A] text-[#04170D] font-mono font-black text-xs shrink-0 shadow-md">
              Benchmark: {timelineDays[activeDayIndex].metric}
            </div>
          </div>

        </div>
      )}

      {/* VIEW 2: TOPOGRAPHIC ORCHARD FIELD MAP & CANOPY GEOMETRY */}
      {activeTab === 'fieldmap' && (
        <div className="rounded-3xl bg-[#04170D] text-white p-8 sm:p-12 shadow-2xl border border-white/20 space-y-8 relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/20">
            <div>
              <span className="text-xs font-mono uppercase text-[#8BE52A] tracking-widest block font-bold">
                TOPOGRAPHIC 1-ACRE INSTALLATION GEOMETRY
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Canopy Diffusion &amp; Trap Spacing
              </h3>
            </div>
            <span className="text-xs font-mono text-[#E6EFE9] font-bold">
              Optimal Windward Grid Pattern
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Topographic Visual Map */}
            <div className="lg:col-span-7 bg-[#020F08] rounded-2xl p-6 border border-white/20 relative overflow-hidden aspect-[16/10] flex flex-col justify-between">
              
              {/* Topographic Grid Lines */}
              <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#8BE52A_1px,transparent_1px)] [background-size:24px_24px]" />
              
              <div className="flex items-center justify-between relative z-10 text-xs font-mono text-[#E6EFE9] font-bold">
                <span className="flex items-center gap-1.5"><Wind className="w-4 h-4 text-[#8BE52A]" /> Wind (W to E)</span>
                <span>1 ACRE ORCHARD (64m × 64m)</span>
              </div>

              {/* Orchard Grid Rows with Overlapping Diffusion Pheromone Circles */}
              <div className="grid grid-cols-4 grid-rows-3 gap-6 relative z-10 py-4 my-auto">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="relative flex items-center justify-center">
                    {/* Overlapping Plume Halo */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#8BE52A]/20 border border-[#8BE52A]/40 flex items-center justify-center">
                      {/* Trap Pin Point */}
                      <span className="w-4 h-4 rounded-full bg-[#8BE52A] text-[#04170D] flex items-center justify-center text-[9px] font-black shadow-md ring-2 ring-white">
                        T{i + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between relative z-10 text-[11px] font-mono text-[#C7D8CC] font-bold border-t border-white/20 pt-2">
                <span>Spacing: 6m × 6m Tree Spacing</span>
                <span>Elevation: 1.5m Inside Canopy</span>
              </div>

            </div>

            {/* Technical Installation Directives */}
            <div className="lg:col-span-5 space-y-4 text-left">
              
              <div className="p-4 rounded-2xl bg-white/10 border border-white/20 space-y-1">
                <div className="text-xs font-mono text-[#8BE52A] uppercase font-black">1. Density Benchmark</div>
                <div className="text-base font-black text-white">10 to 12 Traps / Acre</div>
                <p className="text-xs text-[#E6EFE9] font-medium">Provides continuous 360° vapor cloud barrier overlapping across all orchard rows.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/20 space-y-1">
                <div className="text-xs font-mono text-[#8BE52A] uppercase font-black">2. Installation Height</div>
                <div className="text-base font-black text-white">1.5 Meters (Eye Level)</div>
                <p className="text-xs text-[#E6EFE9] font-medium">Hang inside shady inner tree branches away from direct sun exposure to maximize lure life.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/20 space-y-1">
                <div className="text-xs font-mono text-[#8BE52A] uppercase font-black">3. Timing of Deployment</div>
                <div className="text-base font-black text-white">Pre-Flowering &amp; Fruit Set</div>
                <p className="text-xs text-[#E6EFE9] font-medium">Deploy at initial flower panicle emergence to intercept migrating adult males before oviposition.</p>
              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  );
};
