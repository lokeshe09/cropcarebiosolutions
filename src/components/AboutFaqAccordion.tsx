import React, { useState, useMemo } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  Clock, 
  ShieldCheck, 
  Leaf, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ThermometerSnowflake, 
  SunMedium, 
  Wind,
  Layers,
  ArrowRight,
  Phone
} from 'lucide-react';

export interface FaqItem {
  id: string;
  category: 'longevity' | 'application' | 'safety' | 'general';
  categoryLabel: string;
  question: string;
  answer: string;
  highlights: string[];
  icon: React.ReactNode;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'field-longevity',
    category: 'longevity',
    categoryLabel: 'Pheromone Longevity',
    question: 'How long do Crop Care pheromone lures remain active in field conditions?',
    answer: 'Under standard orchard and open field conditions, Crop Care pheromone lures provide continuous, controlled release for 45 to 60 days. Heavy-duty dispenser formulations, such as the Red Palm Weevil (RPW) aggregation lure, are engineered with specialized slow-release polymer matrices to maintain peak potency for up to 90 days before requiring replacement.',
    highlights: [
      'Standard field life: 45–60 days of continuous attraction',
      'RPW & specialized orchard lures: 90 days active duration',
      'Micro-porous dispenser prevents sudden scent exhaustion'
    ],
    icon: <Clock className="w-5 h-5 text-[#2E7D32]" />
  },
  {
    id: 'shelf-life-storage',
    category: 'longevity',
    categoryLabel: 'Pheromone Longevity',
    question: 'What is the unopened shelf life and how should lures be stored safely?',
    answer: 'When preserved in their original, factory-sealed aluminum foil barrier pouches, Crop Care pheromones have a guaranteed shelf life of 2 years from the date of manufacture. For optimal preservation, store sealed packets in a cool, shaded room below 25°C away from chemical fumes. For prolonged storage beyond 6 months, refrigeration at 4°C to 10°C is recommended. Avoid freezing or leaving pouches inside hot vehicles.',
    highlights: [
      '2-Year shelf life in sealed airtight barrier pouches',
      'Store in a cool, dry area below 25°C away from direct sunlight',
      'Domestic refrigerator storage (4°C–10°C) extends freshness'
    ],
    icon: <ThermometerSnowflake className="w-5 h-5 text-[#2E7D32]" />
  },
  {
    id: 'safe-handling-application',
    category: 'application',
    categoryLabel: 'Safe Application',
    question: 'What are the safe handling and installation practices when placing lures?',
    answer: 'Always wash hands thoroughly before handling or wear clean disposable gloves. Human skin secretions and natural body oils can mask or alter the delicate volatile pheromone bouquet if touched repeatedly. Open the packet right at the trap site, insert the lure directly into the trap’s designated lure-holder basket, and secure the lid without puncturing or cutting the silicone/rubber dispenser membrane.',
    highlights: [
      'Wear disposable gloves or handle by dispenser edges only',
      'Do not cut, puncture, or alter the sealed dispenser matrix',
      'Install immediately upon opening the protective pouch'
    ],
    icon: <ShieldCheck className="w-5 h-5 text-[#2E7D32]" />
  },
  {
    id: 'trap-height-density',
    category: 'application',
    categoryLabel: 'Safe Application',
    question: 'What is the recommended trap height and placement density per acre?',
    answer: 'For fruit trees (Mango, Guava, Pomegranate, Citrus), install fruit fly traps 4 to 6 feet above ground level in the canopy foliage, in a semi-shaded zone facing away from scorching midday sun. For row crops (Cotton, Tomato, Brinjal), place funnel or sleeve traps 1 to 1.5 feet above the upper plant canopy. Use 4–6 traps per acre for pest monitoring, or 10–12 traps per acre for mass trapping and population suppression.',
    highlights: [
      'Fruit orchards: 4–6 ft height inside shaded canopy',
      'Field crops: 1–1.5 ft above top leaf canopy level',
      '4–6 traps/acre for monitoring; 10–12 traps/acre for mass trapping'
    ],
    icon: <Layers className="w-5 h-5 text-[#2E7D32]" />
  },
  {
    id: 'pollinator-crop-safety',
    category: 'safety',
    categoryLabel: 'Eco & Crop Safety',
    question: 'Are pheromone lures safe for honeybees, pollinators, and beneficial insects?',
    answer: 'Yes, 100% safe. Pheromones are species-specific biochemical signals that only attract the target male pest species. They contain zero synthetic neurotoxins, organophosphates, or contact poisons. Honeybees, ladybird beetles, parasitic wasps, earthworms, birds, and livestock remain completely unaffected, ensuring total biodiversity and pollinator protection.',
    highlights: [
      'Zero harm to honeybees, pollinators, or natural predatory insects',
      'No toxic residue on fruits, vegetables, or soil',
      'Certified compliant for organic and GlobalGAP export farming'
    ],
    icon: <Leaf className="w-5 h-5 text-[#2E7D32]" />
  },
  {
    id: 'weather-resilience',
    category: 'safety',
    categoryLabel: 'Eco & Crop Safety',
    question: 'How do high summer heat, rain, and heavy winds affect performance?',
    answer: 'Crop Care lures and traps are engineered specifically for demanding tropical and subtropical agro-climatic conditions. All trap bodies are crafted from 100% UV-stabilized virgin polypropylene to prevent yellowing or brittleness under intense sunlight. The lures feature rain-deflecting cap housings and temperature-buffered diffusion rates that prevent sudden evaporation during 40°C+ heatwaves.',
    highlights: [
      'UV-stabilized virgin polymer resists weathering and sun damage',
      'Built-in rain shields prevent trap flooding and lure degradation',
      'Maintains stable diffusion curve between 15°C and 45°C'
    ],
    icon: <SunMedium className="w-5 h-5 text-[#2E7D32]" />
  },
  {
    id: 'ipm-integration',
    category: 'general',
    categoryLabel: 'Integrated Pest Management',
    question: 'Can pheromone traps be combined with other organic or biological sprays?',
    answer: 'Absolutely. Pheromone trapping is the foundational pillar of Integrated Pest Management (IPM). Traps serve as an early warning radar by catching the very first emerging adult moths or fruit flies before egg-laying starts. This allows farmers to precisely time bio-pesticides (like Neem oil or Bacillus thuringiensis) only when necessary, eliminating blind chemical calendar spraying.',
    highlights: [
      'Provides accurate economic threshold level (ETL) data',
      'Reduces chemical pesticide costs by 60% to 80%',
      'Seamlessly pairs with yellow sticky cards and biocontrol agents'
    ],
    icon: <CheckCircle2 className="w-5 h-5 text-[#2E7D32]" />
  }
];

interface AboutFaqAccordionProps {
  onContactClick?: () => void;
}

export const AboutFaqAccordion: React.FC<AboutFaqAccordionProps> = ({ onContactClick }) => {
  const [openIds, setOpenIds] = useState<string[]>(['field-longevity', 'safe-handling-application']);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleItem = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(FAQ_DATA.map(item => item.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesQuery = 
        searchQuery.trim() === '' ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="faq-section" className="rounded-3xl bg-white border border-gray-200/80 shadow-xs p-6 sm:p-10 lg:p-12 space-y-8">
      
      {/* Header Block */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-100">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#164E24] tracking-tight">
            Pheromone Longevity & Safe Application Guide
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
            Essential agronomic answers on lure active duration, storage guidelines, safe handling protocols, and optimal trap placement to maximize your crop protection.
          </p>
        </div>

        {/* Expand / Collapse buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={expandAll}
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#164E24] bg-[#F2F7F2] hover:bg-[#E2EFE2] transition-colors cursor-pointer"
          >
            Expand All
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#6B7280] bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        
        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#164E24] text-white shadow-xs'
                : 'bg-gray-100 text-[#4B5563] hover:bg-gray-200'
            }`}
          >
            All Questions ({FAQ_DATA.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('longevity')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeCategory === 'longevity'
                ? 'bg-[#164E24] text-white shadow-xs'
                : 'bg-gray-100 text-[#4B5563] hover:bg-gray-200'
            }`}
          >
            Longevity & Storage
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('application')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeCategory === 'application'
                ? 'bg-[#164E24] text-white shadow-xs'
                : 'bg-gray-100 text-[#4B5563] hover:bg-gray-200'
            }`}
          >
            Safe Application & Height
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('safety')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeCategory === 'safety'
                ? 'bg-[#164E24] text-white shadow-xs'
                : 'bg-gray-100 text-[#4B5563] hover:bg-gray-200'
            }`}
          >
            Crop & Eco Safety
          </button>
        </div>

        {/* Live Search Input */}
        <div className="relative min-w-[220px] sm:w-64">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g., storage, height)..."
            className="w-full pl-9 pr-3 py-1.5 rounded-full text-xs bg-gray-50 border border-gray-200 text-[#374151] placeholder-gray-400 focus:outline-none focus:border-[#2E7D32] focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Accordion Items List */}
      <div className="space-y-4 pt-2">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 px-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
            <HelpCircle className="w-8 h-8 text-gray-400 mx-auto" />
            <h4 className="text-sm font-bold text-[#164E24]">No matching questions found</h4>
            <p className="text-xs text-[#6B7280]">
              Try searching with different keywords or switch back to "All Questions".
            </p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-2 text-xs font-bold text-[#2E7D32] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#B8D8BA] bg-[#FAFCF9] shadow-xs'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                {/* Accordion Header / Trigger Button */}
                <button
                  type="button"
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#E8F5E9] text-[#164E24]' : 'bg-gray-100 text-gray-600 group-hover:bg-[#E8F5E9] group-hover:text-[#164E24]'
                    }`}>
                      {faq.icon}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded-md">
                          {faq.categoryLabel}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#164E24] group-hover:text-[#2E7D32] transition-colors leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#164E24] text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content Body */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4B5563] space-y-4 border-t border-[#E8F1E7]/70">
                    <p className="leading-relaxed font-normal text-[#374151]">
                      {faq.answer}
                    </p>

                    {/* Key Takeaways Box */}
                    <div className="p-4 rounded-xl bg-white border border-[#D3E5D4] space-y-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#164E24] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#2E7D32]" />
                        <span>Key Agronomic Takeaways</span>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4B5563]">
                        {faq.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still Have Questions Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#164E24] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-1.5 text-center sm:text-left">
          <h4 className="text-base sm:text-lg font-bold text-white">
            Have specific crop pest questions or need custom advisory?
          </h4>
          <p className="text-xs sm:text-sm text-emerald-100/90 font-light">
            Our agronomy specialists provide free field placement calculations and lure pairing recommendations.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {onContactClick ? (
            <button
              type="button"
              onClick={onContactClick}
              className="px-5 py-2.5 rounded-full text-xs font-bold text-[#164E24] bg-white hover:bg-emerald-50 transition-all cursor-pointer flex items-center gap-2 shadow-xs"
            >
              <span>Ask Our Agronomist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-xs font-bold text-[#164E24] bg-white hover:bg-emerald-50 transition-all cursor-pointer flex items-center gap-2 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#2E7D32]" />
              <span>WhatsApp Us</span>
            </a>
          )}
        </div>
      </div>

    </section>
  );
};
