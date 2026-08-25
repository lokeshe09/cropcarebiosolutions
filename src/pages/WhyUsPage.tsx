import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Droplets,
  Trees,
  Sparkles
} from 'lucide-react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PageFooterBanner } from '../components/PageFooterBanner';
import { PILLARS_DATA } from '../data/productsData';
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
    <div className="space-y-12 relative bg-[#FAFBF9]">
      {/* Interactive Nature Bio-Particle Atmospheric Layer */}
      <NatureParticleCanvas density="low" />

      {/* 1. Page Header */}
      <PageHeader
        badge="Natural Biocontrol Philosophy"
        title="WHY CROP CARE"
        highlightText="BIO SOLUTIONS"
        subtitle="Empowering sustainable agriculture with scientifically validated, residue-free pheromone pest management."
        currentPage="why-us"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 2. Core Philosophy Narrative Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-gray-300 shadow-xl relative overflow-hidden text-left">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#073B20]" />
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#073B20] bg-[#E8F5E9] px-3.5 py-1 rounded-full border border-[#C8E6C9] inline-block">
              Our Core Belief
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#073B20] leading-tight">
              &ldquo;Every seed a farmer plants carries hope, and every harvest is the Earth&rsquo;s gracious blessing.&rdquo;
            </h2>
            <p className="text-sm sm:text-base text-[#34443B] font-medium leading-relaxed">
              At Crop Care Bio Solutions, we believe in a harmonious relationship between modern science and the natural rhythms of agriculture. Synthetic chemical pesticides have driven costs up and degraded soil biodiversity. Our pheromone technologies provide farmers with a natural, potent shield that stops pests without harming the Earth.
            </p>
          </div>
        </div>

        {/* 3. The 4 Pillars of Crop Care */}
        <div className="space-y-6 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-[#073B20]">
              The 4 Pillars of Crop Care
            </h2>
            <p className="text-sm text-[#34443B] font-medium">
              Built on uncompromising scientific rigor, ecological integrity, and farmer accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PILLARS_DATA.map((pillar, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-gray-300 shadow-md flex flex-col justify-between space-y-4 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl p-3 rounded-2xl bg-[#E8F5E9] border border-[#C8E6C9]">
                    {pillar.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-[#073B20]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-bold text-[#126B35]">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#34443B] font-medium leading-relaxed bg-[#FAFBF9] p-4 rounded-2xl border border-gray-200">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Interactive Pest Lifecycle & Biocontrol Disruption Diagram */}
        <PestLifecycleDiagram 
          onNavigate={onNavigate}
          onExploreProducts={() => onNavigate('products')}
        />

        {/* 5. Comparison Matrix */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-gray-300 shadow-xl space-y-6 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#073B20] bg-[#E8F5E9] px-3.5 py-1 rounded-full border border-[#C8E6C9]">
              Clear Value Differentiation
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#073B20]">
              Conventional Chemical Sprays vs. Crop Care Bio Solutions
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-300 text-[#073B20]">
                  <th className="py-3 px-4 font-black">Evaluation Factor</th>
                  <th className="py-3 px-4 font-black text-red-900 bg-red-100 rounded-tl-xl">Chemical Sprays</th>
                  <th className="py-3 px-4 font-black text-[#073B20] bg-[#E8F5E9] rounded-tr-xl">Crop Care Bio Solutions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-xs">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#073B20] max-w-[180px]">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 text-[#4A2020] bg-red-50 font-medium">
                      <div className="flex items-start gap-1.5">
                        <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{row.conventional}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-[#073B20] bg-[#F4F9F4] font-bold">
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#126B35] shrink-0 mt-0.5" />
                        <span>{row.cropCare}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 6. Ecological Impact Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-3xl bg-white border border-gray-300 shadow-md text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F5E9] text-[#073B20] flex items-center justify-center mx-auto">
              <Droplets className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-[#073B20]">Zero Water Runoff Poisoning</h3>
            <p className="text-xs text-[#34443B] font-medium leading-relaxed">
              Safe for irrigation canals, fish ponds, ground aquifers, and livestock watering holes.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-gray-300 shadow-md text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center mx-auto">
              <Trees className="w-6 h-6 text-amber-800" />
            </div>
            <h3 className="text-base font-black text-[#073B20]">Soil Microbial Protection</h3>
            <p className="text-xs text-[#34443B] font-medium leading-relaxed">
              Maintains natural mycorrhiza and nitrogen-fixing bacteria without synthetic chemical soil burns.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-gray-300 shadow-md text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F5E9] text-[#073B20] flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-[#073B20]">Export-Grade Harvest</h3>
            <p className="text-xs text-[#34443B] font-medium leading-relaxed">
              Helps growers achieve Maximum Residue Limit (MRL) compliance and earn premium export prices.
            </p>
          </div>
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
