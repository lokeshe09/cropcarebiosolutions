import React from 'react';
import { 
  Sprout, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Leaf, 
  HeartHandshake, 
  Zap, 
  DollarSign, 
  Shield, 
  Bug,
  Droplets,
  Trees
} from 'lucide-react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PageFooterBanner } from '../components/PageFooterBanner';
import { PILLARS_DATA } from '../data/productsData';
import { AnimatedCard } from '../components/AnimatedCard';
import { PestLifecycleDiagram } from '../components/PestLifecycleDiagram';
import { NatureParticleCanvas } from '../components/NatureParticleCanvas';

interface WhyUsPageProps {
  onNavigate: (page: PageId) => void;
}

export const WhyUsPage: React.FC<WhyUsPageProps> = ({ onNavigate }) => {
  const comparisonData = [
    {
      feature: 'Residue & Chemical Toxicity',
      conventional: 'Leaves harmful synthetic residues on vegetables & fruits; export rejection risk',
      cropCare: '100% Residue-Free and completely non-toxic; ideal for organic & export certification',
      winner: 'cropCare'
    },
    {
      feature: 'Beneficial Insect Safety (Bees, Wasps)',
      conventional: 'Non-selective; kills natural predators, earthworms, and pollinating honeybees',
      cropCare: 'Species-specific target attraction; completely harmless to honeybees & natural fauna',
      winner: 'cropCare'
    },
    {
      feature: 'Pest Resistance Development',
      conventional: 'Pests build rapid immunity within 2–3 seasons requiring stronger, pricier doses',
      cropCare: 'Zero physiological resistance because attraction relies on natural sexual pheromones',
      winner: 'cropCare'
    },
    {
      feature: 'Farmer Health & Spray Inhalation',
      conventional: 'High occupational hazard from toxic skin contact and aerosol chemical inhalation',
      cropCare: 'Zero mask/PPE hazards; clean, safe trap placement without direct chemical exposure',
      winner: 'cropCare'
    },
    {
      feature: 'Field Longevity & Maintenance',
      conventional: 'Requires repeated weekly or bi-weekly foliar spraying after every rainfall',
      cropCare: 'Continuous slow-release vapor protection lasting 30 to 90 days with zero rain wash-off',
      winner: 'cropCare'
    }
  ];

  return (
    <div className="space-y-12 relative">
      {/* Interactive Nature Bio-Particle Atmospheric Layer */}
      <NatureParticleCanvas density="medium" />

      {/* 1. Page Header */}
      <PageHeader
        badge="Natural Tones Philosophy"
        title="WHY CROP CARE"
        highlightText="BIO SOLUTIONS"
        subtitle="Empowering sustainable agriculture with scientifically validated, residue-free pheromone pest management."
        currentPage="why-us"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 2. Core Philosophy Narrative Card */}
        <AnimatedCard
          delay={0.1}
          distance={28}
          className="p-8 sm:p-12 rounded-[36px] bg-white/50 backdrop-blur-2xl border border-white/80 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-[#606C38]" />
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#606C38] bg-[#E9EDC9] px-3.5 py-1 rounded-full border border-[#606C38]/20 inline-block">
              Our Core Belief
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#283618] leading-tight">
              “Every seed a farmer plants carries hope, and every harvest is the Earth’s gracious blessing.”
            </h2>
            <p className="text-sm sm:text-base text-[#444] font-light leading-relaxed">
              At Crop Care Bio Solutions, we believe in a harmonious relationship between modern science and the natural rhythms of agriculture. Synthetic chemical pesticides have driven costs up and degraded soil biodiversity. Our pheromone technologies provide farmers with a natural, potent shield that stops pests without harming the Earth.
            </p>
          </div>
        </AnimatedCard>

        {/* 3. The 4 Pillars of Crop Care */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#283618]">
              The 4 Pillars of Crop Care
            </h2>
            <p className="text-xs sm:text-sm text-[#666] font-light">
              Built on uncompromising scientific rigor, ecological integrity, and farmer accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PILLARS_DATA.map((pillar, idx) => (
              <AnimatedCard
                key={idx}
                delay={idx * 0.1}
                distance={28}
                hoverEffect
                className="p-7 sm:p-8 rounded-[32px] bg-white/50 backdrop-blur-xl border border-white/80 shadow-md flex flex-col justify-between space-y-4 hover:bg-white/80 hover:border-[#606C38]/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl p-3 rounded-2xl bg-[#E9EDC9]/70 border border-white/80 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#283618]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-medium text-[#606C38]">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#555] font-light leading-relaxed bg-white/60 p-4 rounded-2xl border border-white/80">
                  {pillar.detail}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* 4. Interactive Pest Lifecycle & Biocontrol Disruption Diagram */}
        <PestLifecycleDiagram 
          onNavigate={onNavigate}
          onExploreProducts={() => onNavigate('products')}
        />

        {/* 5. Comparison Matrix */}
        <AnimatedCard
          delay={0.15}
          distance={30}
          className="p-6 sm:p-10 rounded-[36px] bg-white/50 backdrop-blur-2xl border border-white/80 shadow-xl space-y-6"
        >
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#BC6C25] bg-[#FEFAE0] px-3 py-1 rounded-full border border-[#DDA15E]/30">
              Clear Value Differentiation
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#283618]">
              Conventional Chemical Sprays vs. Crop Care Bio Solutions
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#606C38]/20 text-[#283618] font-serif">
                  <th className="py-3 px-4 font-bold">Evaluation Factor</th>
                  <th className="py-3 px-4 font-bold text-[#b91c1c] bg-red-50/50 rounded-tl-xl">Chemical Sprays</th>
                  <th className="py-3 px-4 font-bold text-[#283618] bg-[#E9EDC9]/70 rounded-tr-xl">Crop Care Bio Solutions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#606C38]/10 text-xs">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/40 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-[#283618] max-w-[180px]">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 text-[#666] bg-red-50/30">
                      <div className="flex items-start gap-1.5">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{row.conventional}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-[#283618] bg-[#E9EDC9]/30 font-medium">
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#606C38] shrink-0 mt-0.5" />
                        <span>{row.cropCare}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedCard>

        {/* 5. Ecological Impact Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <AnimatedCard
            delay={0.1}
            distance={24}
            hoverEffect
            className="p-6 rounded-[28px] bg-white/50 backdrop-blur-xl border border-white/80 text-center space-y-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#E9EDC9] text-[#606C38] flex items-center justify-center mx-auto">
              <Droplets className="w-6 h-6" />
            </div>
            <h3 className="text-base font-serif font-bold text-[#283618]">Zero Water Runoff Poisoning</h3>
            <p className="text-xs text-[#666] font-light leading-relaxed">
              Safe for irrigation canals, fish ponds, ground aquifers, and livestock watering holes.
            </p>
          </AnimatedCard>

          <AnimatedCard
            delay={0.2}
            distance={24}
            hoverEffect
            className="p-6 rounded-[28px] bg-white/50 backdrop-blur-xl border border-white/80 text-center space-y-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#FEFAE0] text-[#DDA15E] flex items-center justify-center mx-auto">
              <Trees className="w-6 h-6 text-[#BC6C25]" />
            </div>
            <h3 className="text-base font-serif font-bold text-[#283618]">Soil Microbial Protection</h3>
            <p className="text-xs text-[#666] font-light leading-relaxed">
              Maintains natural mycorrhiza and nitrogen-fixing bacteria without synthetic chemical soil burns.
            </p>
          </AnimatedCard>

          <AnimatedCard
            delay={0.3}
            distance={24}
            hoverEffect
            className="p-6 rounded-[28px] bg-white/50 backdrop-blur-xl border border-white/80 text-center space-y-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#E9EDC9] text-[#606C38] flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-serif font-bold text-[#283618]">Export-Grade Harvest</h3>
            <p className="text-xs text-[#666] font-light leading-relaxed">
              Helps growers achieve Maximum Residue Limit (MRL) compliance and earn premium export prices.
            </p>
          </AnimatedCard>
        </div>

      </div>

      {/* Page Footer Navigation */}
      <PageFooterBanner
        nextPageId="about"
        nextPageTitle="About Us & 5 Commitments"
        nextPageDescription="Discover our company background, mission & vision, quality assurance, and grassroots farmer collaboration."
        onNavigate={onNavigate}
      />
    </div>
  );
};
