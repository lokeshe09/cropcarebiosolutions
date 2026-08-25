import React from 'react';
import { WE_STAND_FOR_PILLARS } from '../data/productsData';
import { ShieldCheck, Factory, Award, Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import { AnimatedCard } from './AnimatedCard';

export const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-[#FAF9F6]">
      {/* Background soft lighting */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#E9EDC9] rounded-full filter blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FEFAE0] rounded-full filter blur-[100px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-white/70 backdrop-blur-md shadow-xs">
            <Factory className="w-3.5 h-3.5 text-[#606C38]" />
            <span className="text-[11px] font-semibold text-[#606C38] tracking-[0.2em] uppercase">
              Manufacturer • Supplier • Trader
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#283618] leading-[1.15]">
            ABOUT <span className="text-gradient-natural italic">US</span>
          </h2>

          <p className="text-base sm:text-lg font-serif text-[#283618] italic">
            “Welcome to Crop Care Bio Solutions — empowering farmers everywhere and honoring the Earth that gives life to us.”
          </p>
        </div>

        {/* Company Bio + Trust Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Bio Text Column */}
          <div className="lg:col-span-7 space-y-5">
            <AnimatedCard
              delay={0.1}
              distance={28}
              className="p-7 sm:p-8 rounded-[32px] bg-white/45 backdrop-blur-xl border border-white/80 shadow-[0_10px_30px_rgba(40,54,24,0.03)] space-y-4"
            >
              <h3 className="text-xl font-serif font-bold text-[#283618] flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#606C38] inline-block" />
                About the Company
              </h3>

              <p className="text-sm sm:text-base text-[#444] leading-relaxed font-light">
                We are a <strong className="text-[#283618] font-semibold">manufacturer, supplier, and trader</strong> of eco-friendly pest management solutions such as pheromone lures and insect traps, designed to protect crops naturally.
              </p>

              <p className="text-sm sm:text-base text-[#444] leading-relaxed font-light">
                At <strong className="font-semibold text-[#283618]">Crop Care Bio Solutions</strong>, we care deeply for both farmers and nature. Every product we create is simple, effective, and affordable — developed with a passion to empower farmers through science that works with nature, not against it.
              </p>

              <p className="text-sm sm:text-base text-[#444] leading-relaxed font-light">
                Our goal is not just to sell products, but to build awareness, trust, and confidence among farmers, helping them adopt sustainable and nature-friendly farming practices that preserve soil, water, and the environment for future generations.
              </p>

              <div className="pt-4 border-t border-[#606C38]/10 flex flex-wrap gap-4 text-xs font-semibold text-[#606C38]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#606C38]" />
                  ISO Compliant Quality Control
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#606C38]" />
                  Direct Factory-Fresh Batches
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#606C38]" />
                  Agricultural University Calibrated
                </span>
              </div>
            </AnimatedCard>
          </div>

          {/* Quick Metrics & Role Card */}
          <div className="lg:col-span-5 space-y-4">
            
            <AnimatedCard
              delay={0.15}
              distance={24}
              hoverEffect
              className="p-6 rounded-[28px] bg-white/45 backdrop-blur-xl border border-white/70 space-y-3 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#E9EDC9] text-[#606C38] border border-[#606C38]/20 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#283618]">Pheromone Lure Specialists</h4>
                  <p className="text-xs text-[#666]">End-to-End Synthesis & Trap Assemblies</p>
                </div>
              </div>
              <p className="text-xs text-[#555] leading-relaxed">
                From micro-encapsulated slow-release rubber septa to rugged UV-stabilized traps, we engineer full IPM bio-defenses for orchards, plantations, polyhouses, and open fields.
              </p>
            </AnimatedCard>

            <AnimatedCard
              delay={0.25}
              distance={24}
              hoverEffect
              className="p-6 rounded-[28px] bg-white/45 backdrop-blur-xl border border-white/70 space-y-3 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FEFAE0] text-[#BC6C25] border border-[#DDA15E]/30 flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#283618]">Pan-India & Global Supply Chain</h4>
                  <p className="text-xs text-[#666]">Farmer Orders, Dealer Networks, FPO Partnerships</p>
                </div>
              </div>
              <p className="text-xs text-[#555] leading-relaxed">
                Fast, reliable dispatch directly to farm gates, distributor counters, and cooperative associations with dedicated technical dosage support.
              </p>
            </AnimatedCard>

          </div>

        </div>

        {/* WE STAND FOR: 5 Pillars */}
        <div className="mt-12 space-y-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-4xl font-serif text-[#283618]">
              WE STAND FOR
            </h3>
            <p className="text-xs sm:text-sm text-[#666] mt-1 font-light tracking-wide">
              Five core commitments driving every formula, package, and field conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {WE_STAND_FOR_PILLARS.map((item, idx) => (
              <AnimatedCard
                key={item.title}
                id={`stand-for-${idx}`}
                delay={idx * 0.08}
                distance={24}
                hoverEffect={false}
                className="p-5 rounded-[24px] glass-refract-card flex flex-col justify-between group glass-hover-elevate shadow-xs"
              >
                <div className="space-y-3">
                  <div className="text-3xl filter drop-shadow-xs group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#283618] group-hover:text-[#606C38]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#666] mt-1.5 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-[#606C38]/10 text-[10px] uppercase font-bold tracking-wider text-[#606C38]">
                  Core Principle
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* About Us Closing Message Box */}
        <AnimatedCard
          delay={0.15}
          distance={20}
          className="mt-14 p-6 sm:p-8 rounded-[32px] bg-[#FEFAE0]/80 border border-[#DDA15E]/30 text-center relative overflow-hidden shadow-sm"
        >
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-2xl">🌾</span>
            <p className="text-base sm:text-xl font-serif text-[#283618] italic font-semibold">
              “Every harvest tells a story of hope — written by farmers, nurtured by nature.”
            </p>
            <p className="text-xs text-[#606C38] font-medium tracking-wide">
              Crop Care Bio Solutions — Caring for Farmers. Caring for Nature.
            </p>
          </div>
        </AnimatedCard>

      </div>
    </section>
  );
};
