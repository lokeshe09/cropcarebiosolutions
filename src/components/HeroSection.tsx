import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  Phone,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import heroOrchardImg from '../assets/images/hero_orchard_trap_1787640485280.jpg';
import orchardPanoramicBg from '../assets/images/orchard_panoramic_bg_1787649127220.jpg';

interface HeroSectionProps {
  onExploreProducts: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onExploreProducts, 
  onOpenContact,
}) => {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-[#073B20]">
      {/* Real Agricultural Photography Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <img
          src={orchardPanoramicBg}
          alt="Green agricultural fields and crops"
          className="w-full h-full object-cover object-center brightness-[0.45] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#073B20] via-[#073B20]/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Exact Content from Page 1 */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Caption on Image (Direct from PDF Page 1) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-emerald-900/60 border border-emerald-500/30 text-emerald-200 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>&ldquo;Eco-friendly solutions to protect crops naturally and empower farmers.&rdquo;</span>
            </div>

            {/* Dominant Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Crop Care Bio Solutions
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-emerald-300">
                Pheromone Lures &amp; Organic Insect Traps
              </p>
            </div>

            {/* WELCOME (Word-for-Word from PDF Page 1) */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Welcome to Crop Care Bio Solutions
              </div>
              <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl font-normal">
                At <strong className="text-white font-semibold">Crop Care Bio Solutions</strong>, we believe that every seed a farmer plants carries hope, and every harvest is the Earth’s gracious blessing.
              </p>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-2xl">
                Together, farmers and nature nurture life, resilience, and the dreams of a brighter tomorrow.
              </p>
            </div>

            {/* Actions: [Contact Us] | [Know More] (from Page 1) */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                id="hero-contact-btn"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-stone-950 bg-emerald-400 hover:bg-emerald-300 shadow-sm transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact Us</span>
              </button>

              <button
                type="button"
                id="hero-know-more-btn"
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors cursor-pointer"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </button>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-xs font-semibold text-stone-300 hover:text-white bg-stone-900/60 border border-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono">+91 98765 43210</span>
              </a>
            </div>

            {/* Verified Field Values */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-stone-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Residue-Free Harvests
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 60–90 Day Active Field Life
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Safe for Bees &amp; Soil
              </span>
            </div>

          </div>

          {/* Right Column: Clean Photographic Product Frame */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#04170D] shadow-xl">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={heroOrchardImg}
                  alt="Farmer inspecting pheromone trap in commercial orchard"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04170D] via-transparent to-black/20" />
              </div>

              {/* Technical Caption Box */}
              <div className="p-5 text-left space-y-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-400 uppercase tracking-wider">Field Installation</span>
                  <span className="text-stone-400 font-mono">10–15 Traps / Acre</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  Species-Specific Pheromone Trapping
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Scientifically proven male mating disruption and mass monitoring for clean, pesticide-reduced agriculture.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
