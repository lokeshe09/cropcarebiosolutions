import React from 'react';
import { TRAP_TYPES } from '../data/productsData';
import { Droplet, Filter, Triangle, Sun, Palmtree, CheckCircle2, ShieldCheck, HelpCircle, Wind, Wrench, Compass } from 'lucide-react';
import { AnimatedCard } from './AnimatedCard';

export const TrapGuideSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Droplet': return <Droplet className="w-5 h-5" />;
      case 'Filter': return <Filter className="w-5 h-5" />;
      case 'Triangle': return <Triangle className="w-5 h-5" />;
      case 'Sun': return <Sun className="w-5 h-5" />;
      case 'Palmtree': return <Palmtree className="w-5 h-5" />;
      default: return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="trap-guide" className="py-20 relative overflow-hidden bg-[#FAF9F6]">
      {/* Ambient background */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#E9EDC9] rounded-full filter blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FEFAE0] rounded-full filter blur-[120px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-white/70 backdrop-blur-md shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#606C38]" />
            <span className="text-[11px] font-semibold text-[#606C38] tracking-[0.2em] uppercase">
              Field Engineering & IPM Protocols
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#283618] leading-[1.15]">
            TRAP HARDWARE & <span className="text-gradient-natural italic">DEPLOYMENT GUIDE</span>
          </h2>

          <p className="text-base text-[#555] font-light leading-relaxed">
            Optimized aerodynamic profiles, optical wavelengths, and height placements calibrated according to international biocontrol benchmarks.
          </p>
        </div>

        {/* Trap Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAP_TYPES.map((trap, idx) => (
            <AnimatedCard
              key={trap.id}
              id={`trap-guide-card-${idx}`}
              delay={(idx % 3) * 0.08}
              distance={24}
              hoverEffect={false}
              className="p-6 rounded-[28px] glass-refract-card flex flex-col justify-between group glass-hover-elevate shadow-md"
            >
              <div className="space-y-4">
                
                {/* Top Icon & Title */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-[18px] bg-[#E9EDC9] text-[#283618] border border-[#606C38]/20 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {getIcon(trap.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-bold text-[#283618] group-hover:text-[#606C38]">
                      {trap.name}
                    </h3>
                    <span className="text-[10px] font-semibold text-[#BC6C25] bg-[#FEFAE0] px-2.5 py-0.5 rounded-full border border-[#DDA15E]/30">
                      {trap.dosagePerAcre || '8–12 / Acre'}
                    </span>
                  </div>
                </div>

                {/* Best For Tag */}
                <div className="p-3 rounded-[18px] bg-[#FEFAE0]/80 border border-[#DDA15E]/30 text-xs">
                  <strong className="text-[#283618] block font-semibold text-[10px] uppercase tracking-wider mb-0.5">
                    Target Species:
                  </strong>
                  <span className="text-[#3C3C3C]">{trap.bestFor}</span>
                </div>

                {/* Trap Description */}
                <p className="text-xs text-[#555] leading-relaxed font-light">
                  {trap.description}
                </p>

                {/* Aerodynamic Profile & Mounting Height */}
                <div className="grid grid-cols-2 gap-2 text-xs bg-white/60 p-3 rounded-[18px] border border-white/80">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-[#606C38] flex items-center gap-1 uppercase">
                      <Compass className="w-3 h-3" /> Height
                    </span>
                    <span className="text-[11px] text-[#283618] font-medium block leading-tight">
                      {trap.recommendedHeight || '1.0–1.5m from ground'}
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-[#BC6C25] flex items-center gap-1 uppercase">
                      <Wind className="w-3 h-3" /> Mechanics
                    </span>
                    <span className="text-[11px] text-[#283618] font-medium block leading-tight">
                      {trap.aerodynamicProfile || 'Omnidirectional Plume'}
                    </span>
                  </div>
                </div>

                {/* Servicing Protocol */}
                {trap.servicingProtocol && (
                  <div className="flex items-start gap-2 text-[11px] text-[#555] bg-[#FAF9F6] p-2.5 rounded-[14px] border border-gray-200">
                    <Wrench className="w-3.5 h-3.5 text-[#606C38] shrink-0 mt-0.5" />
                    <span><strong>Servicing:</strong> {trap.servicingProtocol}</span>
                  </div>
                )}

                {/* Features List */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-bold text-[#666] uppercase tracking-wider block">
                    Key Advantages:
                  </span>
                  {trap.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-[11px] text-[#3C3C3C]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#606C38] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Lure Compatibility */}
              <div className="pt-4 mt-4 border-t border-[#606C38]/10 flex items-center justify-between text-[11px] text-[#606C38] font-medium">
                <span>Compatible with CCBS Lures</span>
                <span className="w-2 h-2 rounded-full bg-[#606C38]" />
              </div>
            </AnimatedCard>
          ))}
        </div>

      </div>
    </section>
  );
};
