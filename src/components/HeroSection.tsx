import React from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Phone,
  CheckCircle2
} from 'lucide-react';
import heroOrchardImg from '../assets/images/hero_orchard_trap_1787640485280.jpg';
import orchardPanoramicBg from '../assets/images/orchard_panoramic_bg_1787649127220.jpg';

interface HeroSectionProps {
  onExploreProducts: () => void;
  onOpenContact: () => void;
  onOpenCalculator?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onExploreProducts, 
  onOpenContact,
}) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#04170D]">
      
      {/* 1. Immersive Full-Bleed Real Agricultural Photography Background with Bulletproof Dark Botanical Contrast Layer */}
      <div className="absolute inset-0 -z-30 overflow-hidden pointer-events-none">
        <img
          src={orchardPanoramicBg}
          alt="Lush Commercial Mango Orchard"
          className="w-full h-full object-cover object-center scale-105 transform brightness-[0.75] contrast-[1.10]"
        />
        {/* Solid & Deep Botanical Gradient Overlay for 100% Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04170D] via-[#04170D]/95 via-50% to-[#04170D]/50 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04170D] via-transparent to-[#04170D]/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Bold Editorial Typography & Brand Statement */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Category Tracker */}
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#8BE52A]" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#8BE52A]">
                AGRICULTURAL BIOTECHNOLOGY &bull; IPM SYSTEMS
              </span>
            </div>

            {/* Dominant Editorial Headline with Absolute Contrast */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.02] drop-shadow-sm">
                PROTECT YOUR CROP.
              </h1>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#8BE52A] leading-[1.05] drop-shadow-sm">
                GROW WITH CONFIDENCE.
              </h2>
            </div>

            {/* Crisp High-Contrast Supporting Body Text */}
            <p className="text-lg sm:text-xl text-[#E6EFE9] font-medium max-w-xl leading-relaxed drop-shadow-xs">
              Species-specific pheromone protection for healthier crops, nil harvest withholding intervals, and certified residue-free production.
            </p>

            {/* Direct High-Contrast Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                id="hero-explore-products-btn"
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-black text-[#04170D] bg-[#8BE52A] hover:bg-[#9cf53b] shadow-2xl shadow-[#8BE52A]/40 hover:scale-102 transition-all duration-300 cursor-pointer active:scale-98"
              >
                <span>EXPLORE SOLUTIONS</span>
                <ArrowRight className="w-4 h-4 text-[#04170D] stroke-[3]" />
              </button>

              <button
                type="button"
                id="hero-contact-btn"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-sm font-bold text-white bg-white/15 hover:bg-white/25 backdrop-blur-xl border border-white/30 transition-all duration-300 cursor-pointer shadow-lg active:scale-98"
              >
                <MessageCircle className="w-4 h-4 text-[#8BE52A]" />
                <span>TALK TO AN AGRONOMIST</span>
              </button>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-white bg-[#04170D] hover:bg-[#072615] border border-[#8BE52A]/50 transition-colors cursor-pointer shadow-md"
              >
                <Phone className="w-3.5 h-3.5 text-[#8BE52A]" />
                <span className="font-mono">+91 98765 43210</span>
              </a>
            </div>

            {/* Trust Sub-line */}
            <div className="pt-4 flex items-center gap-6 text-xs text-[#C7D8CC] font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8BE52A]" /> 100% Organic Certified
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8BE52A]" /> 60-Day Active Pheromone Matrix
              </span>
              <span className="flex items-center gap-1.5 hidden sm:flex">
                <CheckCircle2 className="w-4 h-4 text-[#8BE52A]" /> Zero Chemical Residues
              </span>
            </div>

          </div>

          {/* Right Column: ONE Strong Photographic Composition with Documentary Technical Annotations */}
          <div className="lg:col-span-5 relative">
            
            {/* Primary Visual Documentary Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/80 border border-white/25 group bg-[#04170D]">
              
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={heroOrchardImg}
                  alt="Pheromone Trap Field Installation in Mango Orchard"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04170D] via-transparent to-black/40 pointer-events-none" />

                {/* Technical Pointer Annotation 01: Pheromone Lure Core */}
                <div className="absolute top-[34%] left-[45%] z-20 pointer-events-none hidden sm:block">
                  <div className="relative">
                    {/* Pulsing Pin */}
                    <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#8BE52A] rounded-full animate-ping opacity-75" />
                    <span className="w-2 h-2 bg-[#8BE52A] rounded-full block ring-4 ring-black/70" />
                    
                    {/* SVG Pointer Line */}
                    <svg className="absolute top-1 left-2 w-28 h-12 overflow-visible" fill="none">
                      <path d="M 0 0 L 40 -20 L 100 -20" stroke="rgba(139, 229, 42, 0.95)" strokeWidth="1.5" strokeDasharray="3 3" />
                    </svg>

                    {/* Technical Annotation Tag */}
                    <div className="absolute -top-9 left-28 bg-[#04170D]/95 backdrop-blur-xl border border-white/30 rounded-lg px-2.5 py-1 text-[11px] font-mono text-white whitespace-nowrap shadow-2xl">
                      <span className="text-[#8BE52A] font-bold">LURE CORE:</span> Methyl Eugenol 99.8%
                    </div>
                  </div>
                </div>

                {/* Technical Pointer Annotation 02: Weatherproof Canopy */}
                <div className="absolute top-[18%] left-[30%] z-20 pointer-events-none hidden sm:block">
                  <div className="relative">
                    <span className="w-2 h-2 bg-white rounded-full block ring-4 ring-black/70" />
                    <svg className="absolute top-1 right-2 w-28 h-12 overflow-visible" fill="none">
                      <path d="M 0 0 L -30 -15 L -80 -15" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="1.5" strokeDasharray="3 3" />
                    </svg>
                    <div className="absolute -top-8 -left-36 bg-[#04170D]/95 backdrop-blur-xl border border-white/30 rounded-lg px-2.5 py-1 text-[11px] font-mono text-white whitespace-nowrap shadow-2xl">
                      <span className="text-white font-bold">CANOPY:</span> UV-Stabilized Poly
                    </div>
                  </div>
                </div>

                {/* Single Smoked Glass Technical Information Plate at Bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#04170D]/95 backdrop-blur-2xl rounded-2xl p-4 border border-white/25 text-white space-y-2 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#8BE52A] font-bold">
                      SPECIES MONITORING &bull; ACTIVE TRAP
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-[#8BE52A]/20 text-[#8BE52A] text-[10px] font-black border border-[#8BE52A]/40">
                      60-DAY LONGEVITY
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white">
                    Field Proven in Commercial Mango Orchards
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#C7D8CC] pt-1 border-t border-white/15 font-mono">
                    <span>Density: 10–12 Traps / Acre</span>
                    <span>Elevation: 1.5m Canopy</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
