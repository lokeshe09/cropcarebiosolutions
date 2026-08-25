import React from 'react';
import { PILLARS_DATA } from '../data/productsData';
import { Target, Compass, Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { AnimatedCard } from './AnimatedCard';

export const WelcomeVisionSection: React.FC = () => {
  return (
    <section id="why-us" className="py-20 relative overflow-hidden bg-[#FAF9F6]/60">
      {/* Soft background ambient blurs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#E9EDC9] filter blur-[100px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#FEFAE0] filter blur-[100px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-white/70 backdrop-blur-md shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#606C38]" />
            <span className="text-[11px] font-semibold text-[#606C38] tracking-[0.2em] uppercase">
              Our Core Philosophy
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#283618] leading-[1.15]">
            WHY <span className="text-gradient-natural italic">CROP CARE BIO SOLUTIONS</span>
          </h2>

          <p className="text-base text-[#555] leading-relaxed font-light">
            We bridge modern entomological science with sustainable agricultural stewardship to provide real, lasting protection for fields and orchards.
          </p>
        </div>

        {/* 4 Core Pillars Grid with Natural Tones Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {PILLARS_DATA.map((pillar, idx) => (
            <AnimatedCard
              key={pillar.title}
              id={`pillar-card-${idx}`}
              delay={idx * 0.1}
              distance={28}
              hoverEffect
              className="p-7 rounded-[28px] bg-white/45 backdrop-blur-xl border border-white/70 shadow-sm flex flex-col justify-between group hover:bg-white/75 hover:border-[#606C38]/30 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#E9EDC9]/80 border border-[#606C38]/20 flex items-center justify-center text-2xl shadow-xs group-hover:scale-110 group-hover:bg-[#E9EDC9] transition-all duration-300">
                    {pillar.icon}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#FEFAE0] flex items-center justify-center text-xs font-bold text-[#606C38] border border-[#606C38]/15">
                    0{idx + 1}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-bold uppercase tracking-wider text-[#283618] group-hover:text-[#606C38] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#606C38] leading-snug">
                    {pillar.subtitle}
                  </p>
                </div>

                <p className="text-xs text-[#666] leading-relaxed pt-1">
                  {pillar.detail}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#606C38]/10 flex items-center justify-between text-[11px] font-semibold text-[#606C38]">
                <span>Scientifically Proven</span>
                <span className="w-2 h-2 rounded-full bg-[#606C38]" />
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Mission & Vision Section 🌱🌍 */}
        <div id="mission-vision" className="mt-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-4xl font-serif text-[#283618]">
              MISSION & VISION <span className="text-2xl">🌱🌍</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#666] mt-1 font-light tracking-wide">
              Building a harmonious future where agriculture flourishes hand in hand with natural ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <AnimatedCard
              delay={0.1}
              distance={30}
              className="p-8 sm:p-9 rounded-[32px] bg-white/50 backdrop-blur-xl border border-white/80 shadow-md relative overflow-hidden group hover:border-[#606C38]/40 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#E9EDC9]/50 rounded-full filter blur-2xl pointer-events-none" />
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[#E9EDC9] text-[#606C38] border border-[#606C38]/20 flex items-center justify-center shrink-0 group-hover:bg-[#606C38] group-hover:text-white transition-colors duration-300 shadow-xs">
                  <Target className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#606C38] bg-[#E9EDC9]/70 px-3 py-1 rounded-full border border-[#606C38]/20">
                      Our Purpose
                    </span>
                    <h4 className="text-xl font-serif font-bold text-[#283618]">Mission</h4>
                  </div>
                  <p className="text-sm text-[#444] leading-relaxed font-light">
                    At <strong className="font-semibold text-[#283618]">Crop Care Bio Solutions</strong>, our mission is to empower farmers with eco-friendly, safe, and effective crop protection solutions that work in harmony with nature. We strive to reduce chemical dependency, preserve soil and water, and provide scientifically-backed, affordable products that help every farmer cultivate healthy and productive crops.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            {/* Vision Card */}
            <AnimatedCard
              delay={0.2}
              distance={30}
              className="p-8 sm:p-9 rounded-[32px] bg-white/50 backdrop-blur-xl border border-white/80 shadow-md relative overflow-hidden group hover:border-[#DDA15E]/50 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#FEFAE0]/70 rounded-full filter blur-2xl pointer-events-none" />
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[#FEFAE0] text-[#BC6C25] border border-[#DDA15E]/30 flex items-center justify-center shrink-0 group-hover:bg-[#BC6C25] group-hover:text-white transition-colors duration-300 shadow-xs">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#BC6C25] bg-[#FEFAE0] px-3 py-1 rounded-full border border-[#DDA15E]/30">
                      Our Horizon
                    </span>
                    <h4 className="text-xl font-serif font-bold text-[#283618]">Vision</h4>
                  </div>
                  <p className="text-sm text-[#444] leading-relaxed font-light">
                    Our vision is to create a future where farmers thrive, nature flourishes, and every crop grows in harmony with the Earth. We aim to be a trusted partner for farmers worldwide, promoting sustainability, nurturing communities, and contributing to a greener, healthier planet for generations to come.
                  </p>
                </div>
              </div>
            </AnimatedCard>

          </div>
        </div>

      </div>
    </section>
  );
};
