import React from 'react';
import { 
  Target, 
  Eye, 
  Award, 
  FlaskConical, 
  CheckCircle2,
} from 'lucide-react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PageFooterBanner } from '../components/PageFooterBanner';
import { WE_STAND_FOR_PILLARS } from '../data/productsData';
import { AboutFaqAccordion } from '../components/AboutFaqAccordion';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 bg-[#FAFBF9]">
      {/* 1. Page Header */}
      <PageHeader
        badge="About Crop Care Bio Solutions"
        title="CARING FOR FARMERS."
        highlightText="CARING FOR NATURE."
        subtitle="Bridging the gap between cutting-edge insect pheromone chemistry and sustainable, residue-free agriculture."
        currentPage="about"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 2. Mission & Vision Statements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-300 shadow-xl space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F5E9] text-[#073B20] flex items-center justify-center shadow-xs">
              <Target className="w-6 h-6 text-[#073B20]" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-[#073B20] bg-[#E8F5E9] px-3.5 py-1 rounded-full border border-[#C8E6C9] inline-block">
              Our Mission
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#073B20]">
              Empower Every Farmer with Residue-Free Solutions
            </h2>
            <p className="text-sm text-[#34443B] font-medium leading-relaxed">
              To provide accessible, scientifically synthesized pheromone lures and bio-pest management systems that replace harmful chemical pesticides, lower production costs for farmers, and ensure clean, healthy harvests for communities worldwide.
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-300 shadow-xl space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center shadow-xs">
              <Eye className="w-6 h-6 text-amber-800" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-amber-900 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300 inline-block">
              Our Vision
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#073B20]">
              A Resilient World of Regenerative Agriculture
            </h2>
            <p className="text-sm text-[#34443B] font-medium leading-relaxed">
              To lead the global transition toward bio-rational pest management where crops flourish in harmony with nature, pollinators thrive unthreatened, and farmers achieve lasting financial prosperity through healthy, sustainable yields.
            </p>
          </div>

        </div>

        {/* 3. "We Stand For" - 5 Core Commitments */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#073B20] bg-[#E8F5E9] px-3.5 py-1 rounded-full border border-[#C8E6C9]">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#073B20]">
              We Stand For
            </h2>
            <p className="text-sm text-[#34443B] font-medium">
              5 guiding pillars behind every formulation, trap design, and farmer interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {WE_STAND_FOR_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-gray-300 shadow-md space-y-3.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl p-2.5 rounded-2xl bg-[#E8F5E9] border border-[#C8E6C9]">
                      {pillar.icon}
                    </span>
                    <h3 className="text-lg font-black text-[#073B20]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#34443B] font-medium leading-relaxed bg-[#FAFBF9] p-4 rounded-2xl border border-gray-200">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Quality Commitment Box */}
            <div className="p-7 rounded-3xl bg-[#04170D] text-white shadow-xl space-y-3.5 flex flex-col justify-between border border-white/20">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-black uppercase tracking-wider text-[#8BE52A] border border-white/20">
                  <Award className="w-3.5 h-3.5" />
                  <span>Quality Assured</span>
                </div>
                <h3 className="text-xl font-black text-white">
                  Scientific Synthesis Standards
                </h3>
                <p className="text-xs text-[#E6EFE9] font-medium leading-relaxed">
                  Every batch of pheromone is synthesized to ≥99.5% isomeric purity and hermetically sealed in multi-layer foil to guarantee maximum field longevity and stability.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#8BE52A] font-black pt-2 border-t border-white/15">
                <CheckCircle2 className="w-4 h-4" />
                <span>Laboratory &amp; Field Tested</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Agronomy & Technical Support */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#04170D] text-white shadow-2xl space-y-6 border border-white/20 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-[#8BE52A] text-xs font-black uppercase tracking-wider border border-white/20">
                <FlaskConical className="w-3.5 h-3.5" />
                <span>Dedicated Technical Field Advisory</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Agronomic Guidance for Farmers &amp; Commercial Orchards
              </h2>
              <p className="text-xs sm:text-sm text-[#E6EFE9] font-medium leading-relaxed">
                Crop Care Bio Solutions is not just a product supplier; we are agronomic partners to thousands of farmers, FPOs, and plantation managers. We assist in calculating exact trap densities, synchronizing lure deployment with crop flowering schedules, and integrating sticky traps for total pest suppression.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="w-full py-4 px-6 rounded-full text-center text-xs font-black uppercase tracking-wider text-[#04170D] bg-[#8BE52A] hover:bg-[#9cf53b] shadow-lg transition-all cursor-pointer"
              >
                Connect with an Agronomist
              </button>
              <button
                type="button"
                onClick={() => onNavigate('calculator')}
                className="w-full py-4 px-6 rounded-full text-center text-xs font-black uppercase tracking-wider text-white bg-white/15 hover:bg-white/25 border border-white/30 transition-all cursor-pointer"
              >
                Calculate Trap Requirements
              </button>
            </div>
          </div>
        </div>

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
