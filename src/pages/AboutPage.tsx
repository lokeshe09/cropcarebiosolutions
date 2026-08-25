import React from 'react';
import { 
  Sprout, 
  Leaf, 
  HeartHandshake, 
  Target, 
  Eye, 
  ShieldCheck, 
  Award, 
  FlaskConical, 
  Users, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PageFooterBanner } from '../components/PageFooterBanner';
import { WE_STAND_FOR_PILLARS } from '../data/productsData';
import { AnimatedCard } from '../components/AnimatedCard';
import { AboutFaqAccordion } from '../components/AboutFaqAccordion';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12">
      {/* 1. Page Header */}
      <PageHeader
        badge="About Crop Care Bio Solutions"
        title="CARING FOR FARMERS."
        highlightText="CARING FOR NATURE."
        subtitle="Bridging the gap between cutting-edge insect pheromone chemistry and sustainable, regenerative agriculture."
        currentPage="about"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 2. Mission & Vision Statements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <AnimatedCard
            delay={0.1}
            distance={28}
            className="p-8 sm:p-10 rounded-[32px] bg-white/50 backdrop-blur-xl border border-white/80 shadow-lg space-y-4 relative overflow-hidden group hover:bg-white/80 transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#E9EDC9] text-[#606C38] flex items-center justify-center shadow-xs">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#606C38] bg-[#E9EDC9]/70 px-3 py-1 rounded-full border border-[#606C38]/20 inline-block">
              Our Mission
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#283618]">
              Empower Every Farmer with Residue-Free Solutions
            </h2>
            <p className="text-xs sm:text-sm text-[#555] font-light leading-relaxed">
              To provide accessible, scientifically synthesized pheromone lures and bio-pest management systems that replace harmful chemical pesticides, lower production costs for farmers, and ensure clean, healthy harvests for communities worldwide.
            </p>
          </AnimatedCard>

          {/* Vision Card */}
          <AnimatedCard
            delay={0.2}
            distance={28}
            className="p-8 sm:p-10 rounded-[32px] bg-white/50 backdrop-blur-xl border border-white/80 shadow-lg space-y-4 relative overflow-hidden group hover:bg-white/80 transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#FEFAE0] text-[#BC6C25] flex items-center justify-center shadow-xs">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#BC6C25] bg-[#FEFAE0] px-3 py-1 rounded-full border border-[#DDA15E]/30 inline-block">
              Our Vision
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#283618]">
              A Resilient World of Regenerative Agriculture
            </h2>
            <p className="text-xs sm:text-sm text-[#555] font-light leading-relaxed">
              To lead the global transition toward bio-rational pest management where crops flourish in harmony with nature, pollinators thrive unthreatened, and farmers achieve lasting financial prosperity through healthy, sustainable yields.
            </p>
          </AnimatedCard>

        </div>

        {/* 3. "We Stand For" - 5 Core Commitments */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#606C38] bg-[#E9EDC9] px-3 py-1 rounded-full border border-[#606C38]/20">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#283618]">
              We Stand For
            </h2>
            <p className="text-xs sm:text-sm text-[#666] font-light">
              5 guiding pillars behind every formulation, trap design, and farmer interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WE_STAND_FOR_PILLARS.map((pillar, idx) => (
              <AnimatedCard
                key={idx}
                delay={idx * 0.08}
                distance={24}
                hoverEffect
                className="p-7 rounded-[28px] bg-white/50 backdrop-blur-xl border border-white/80 shadow-md space-y-3.5 hover:bg-white/85 hover:border-[#606C38]/40 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl p-2.5 rounded-2xl bg-[#E9EDC9]/60 border border-white/80 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#283618]">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#555] font-light leading-relaxed bg-white/60 p-3.5 rounded-2xl border border-white/80">
                  {pillar.description}
                </p>
              </AnimatedCard>
            ))}

            {/* Quality Commitment Box */}
            <AnimatedCard
              delay={WE_STAND_FOR_PILLARS.length * 0.08}
              distance={24}
              hoverEffect
              className="p-7 rounded-[28px] bg-gradient-to-br from-[#606C38] to-[#283618] text-white shadow-xl space-y-3.5 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[10px] font-bold uppercase tracking-wider text-[#FEFAE0]">
                  <Award className="w-3.5 h-3.5" />
                  <span>Quality Assured</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-white">
                  Scientific Synthesis Standards
                </h3>
                <p className="text-xs text-white/85 font-light leading-relaxed">
                  Every batch of pheromone is synthesized to 99%+ isomeric purity and hermetically sealed to ensure guaranteed field attraction for up to 2 full years.
                </p>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#FEFAE0] font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Laboratory & Field Batch Tested</span>
              </div>
            </AnimatedCard>
          </div>
        </div>

        {/* 4. Agronomy & Technical Support */}
        <AnimatedCard
          delay={0.15}
          distance={30}
          className="p-8 sm:p-12 rounded-[36px] bg-white/50 backdrop-blur-2xl border border-white/80 shadow-xl space-y-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEFAE0] text-[#BC6C25] text-[10px] font-bold uppercase tracking-wider border border-[#DDA15E]/30">
                <FlaskConical className="w-3.5 h-3.5" />
                <span>Dedicated Technical Field Advisory</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#283618]">
                Agronomic Guidance for Farmers & Commercial Orchards
              </h2>
              <p className="text-xs sm:text-sm text-[#555] font-light leading-relaxed">
                Crop Care Bio Solutions is not just a product supplier; we are agronomic partners to thousands of farmers, FPOs, and plantation managers. We assist in calculating exact trap densities, synchronizing lure deployment with crop flowering schedules, and integrating sticky traps for total pest suppression.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="w-full py-4 px-6 rounded-full text-center text-xs font-bold uppercase tracking-wider text-white bg-[#606C38] hover:bg-[#283618] shadow-md transition-all cursor-pointer"
              >
                Connect with an Agronomist
              </button>
              <button
                type="button"
                onClick={() => onNavigate('calculator')}
                className="w-full py-4 px-6 rounded-full text-center text-xs font-bold uppercase tracking-wider text-[#283618] bg-white/80 hover:bg-[#E9EDC9] border border-white/90 transition-all cursor-pointer"
              >
                Calculate Trap Requirements
              </button>
            </div>
          </div>
        </AnimatedCard>

        {/* 5. Frequently Asked Questions (Accordion) */}
        <AboutFaqAccordion onContactClick={() => onNavigate('contact')} />

      </div>

      {/* Page Footer Navigation */}
      <PageFooterBanner
        nextPageId="products"
        nextPageTitle="Pheromone Lures Catalog"
        nextPageDescription="Browse our complete collection of 13+ species-specific pheromones, field life specs, and dosage guides."
        onNavigate={onNavigate}
      />
    </div>
  );
};
