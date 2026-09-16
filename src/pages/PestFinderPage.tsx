import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/productsData';
import { Product, PageId } from '../types';
import { 
  Sprout, 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle,
  Eye,
  Send,
  HelpCircle,
  Layers,
  Clock
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { PageFooterBanner } from '../components/PageFooterBanner';
import { SafeImage } from '../components/SafeImage';
import { AnimatedCard } from '../components/AnimatedCard';

interface PestFinderPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onInquireProduct: (productName: string) => void;
  onZoomImage: (src: string, alt: string) => void;
}

const CROP_CATEGORIES = [
  {
    id: 'cucurbits',
    name: 'Cucurbits & Gourds',
    crops: ['Cucumber', 'Bitter Gourd', 'Bottle Gourd', 'Ridge Gourd', 'Snake Gourd', 'Pumpkin', 'Zucchini', 'Watermelon', 'Muskmelon'],
    recommendedLures: ['bactrocera-cucurbitae'],
    keyThreat: 'Melon Fruit Fly (Bactrocera cucurbitae)',
    symptoms: 'Fruit puncture marks, watery resin oozing, premature fruit rotting, and white larval maggots feeding inside pulp.',
    icon: '🥒'
  },
  {
    id: 'solanaceous',
    name: 'Tomatoes & Potatoes',
    crops: ['Tomato', 'Potato', 'Polyhouse Solanaceous Crops'],
    recommendedLures: ['tuta-absoluta', 'helicoverpa-armigera', 'bactrocera-cucurbitae'],
    keyThreat: 'Tomato Leafminer (Tuta absoluta) & Fruit Borer',
    symptoms: 'Blotch-like translucent leaf mines, black frass pellets, pinholes in tomato calyx, and decaying fruit flesh.',
    icon: '🍅'
  },
  {
    id: 'brinjal',
    name: 'Brinjal / Eggplant',
    crops: ['Brinjal / Eggplant (All Varieties)'],
    recommendedLures: ['leucinodes-orbonalis', 'bactrocera-cucurbitae'],
    keyThreat: 'Fruit & Shoot Borer (Leucinodes orbonalis)',
    symptoms: 'Wilting and drooping of tender terminal shoots, internal boring in marketable fruits with sealed exit holes.',
    icon: '🍆'
  },
  {
    id: 'orchards',
    name: 'Fruit Orchards',
    crops: ['Mango', 'Guava', 'Citrus', 'Papaya', 'Avocado', 'Passion Fruit', 'Peach', 'Plum'],
    recommendedLures: ['bactrocera-dorsalis'],
    keyThreat: 'Oriental Fruit Fly (Bactrocera dorsalis)',
    symptoms: 'Female ovipositor pinpricks on mature fruit skin, brown sunken patches, and internal pulp liquefaction.',
    icon: '🥭'
  },
  {
    id: 'field-crops',
    name: 'Cotton, Pulses & Maize',
    crops: ['Cotton', 'Gram / Chickpea', 'Pigeon Pea', 'Maize / Corn', 'Soybean', 'Paddy / Rice'],
    recommendedLures: ['helicoverpa-armigera', 'spodoptera-litura', 'spodoptera-frugiperda', 'pectinophora-gossypiella', 'scirpophaga-incertulas'],
    keyThreat: 'Cotton Bollworm, Fall Armyworm & Stem Borers',
    symptoms: 'Windowed leaf chewing, central whorl destruction in maize, hollow bolls with stained lint, and dead hearts in rice tillers.',
    icon: '🌾'
  },
  {
    id: 'palm',
    name: 'Coconut & Palm Groves',
    crops: ['Coconut', 'Arecanut', 'Date Palm', 'Oil Palm'],
    recommendedLures: ['red-palm-weevil', 'rpw-magnet', 'rhinoceros-beetle'],
    keyThreat: 'Red Palm Weevil (RPW) & Rhinoceros Beetle',
    symptoms: 'V-shaped geometrical cuts on fronds, gnawing sounds inside palm trunks, brownish sap oozing, and lethal crown toppling.',
    icon: '🌴'
  }
];

const CATEGORIES_FILTER = [
  { id: 'all', label: 'All Solutions' },
  { id: 'vegetables', label: 'Vegetables & Cucurbits' },
  { id: 'fruits', label: 'Fruit Orchards' },
  { id: 'plantation', label: 'Coconut & Palm Groves' },
  { id: 'field_crops', label: 'Cotton, Pulses & Field Crops' },
  { id: 'enhancers', label: 'Synergists & Magnets' }
];

export const PestFinderPage: React.FC<PestFinderPageProps> = ({
  onNavigate,
  onSelectProduct,
  onInquireProduct,
  onZoomImage,
}) => {
  const [activeGroupIndex, setActiveGroupIndex] = useState<number>(0);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [cropSearchQuery, setCropSearchQuery] = useState<string>('');

  const activeGroup = CROP_CATEGORIES[activeGroupIndex];

  const handleFilterClick = (filterId: string) => {
    setSelectedFilter(filterId);
    if (filterId === 'vegetables') setActiveGroupIndex(0);
    else if (filterId === 'fruits') setActiveGroupIndex(3);
    else if (filterId === 'plantation') setActiveGroupIndex(5);
    else if (filterId === 'field_crops') setActiveGroupIndex(4);
    else if (filterId === 'enhancers') setActiveGroupIndex(5);
  };

  const handleSearchChange = (query: string) => {
    setCropSearchQuery(query);
    const q = query.toLowerCase().trim();
    if (!q) return;

    const foundIndex = CROP_CATEGORIES.findIndex((cat) =>
      cat.crops.some((c) => c.toLowerCase().includes(q)) ||
      cat.name.toLowerCase().includes(q) ||
      cat.keyThreat.toLowerCase().includes(q)
    );
    if (foundIndex !== -1) {
      setActiveGroupIndex(foundIndex);
    }
  };

  const relevantProducts = PRODUCTS_DATA.filter((p) => {
    const isRecommended = activeGroup.recommendedLures.includes(p.id);
    if (!cropSearchQuery.trim()) return isRecommended;

    const q = cropSearchQuery.toLowerCase().trim();
    return (
      (isRecommended && (
        p.name.toLowerCase().includes(q) ||
        p.pestCommonName.toLowerCase().includes(q) ||
        p.targetCrops.some((c) => c.toLowerCase().includes(q))
      )) ||
      p.targetCrops.some((c) => c.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-12">
      {/* 1. Page Header */}
      <PageHeader
        badge="Agronomic Guidance & IPM"
        title="CROP SOLUTIONS"
        highlightText="INFORMATION"
        subtitle="Select your crop family or search by crop to diagnose damaging pest threats, symptoms, and the exact lure & trap hardware pairing required."
        currentPage="pest-finder"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* 2. Filter & Search Glass Bar (Kept in Crop Solutions Information per Item 5) */}
        <div className="p-4 sm:p-5 rounded-[28px] bg-white/60 backdrop-blur-xl border border-white/90 shadow-md space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES_FILTER.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleFilterClick(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    selectedFilter === cat.id
                      ? 'bg-[#073B20] text-white shadow-md shadow-[#073B20]/20 border border-white/30 tracking-wide'
                      : 'bg-white/80 text-[#3C3C3C] hover:bg-[#E9EDC9]/60 border border-white/70 hover:text-[#283618]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#888] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by crop (Tomato, Mango, Maize)..."
                value={cropSearchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 rounded-full text-xs glass-input border border-[#606C38]/20 focus:border-[#606C38] text-[#283618] placeholder-[#888] bg-white/90"
              />
              {cropSearchQuery && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#888] hover:text-[#283618] cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>

        {/* 3. Crop Family Selector Tabs */}
        <AnimatedCard delay={0.05} distance={20} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CROP_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveGroupIndex(idx)}
              className={`p-4 sm:p-5 rounded-[24px] text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                activeGroupIndex === idx
                  ? 'bg-white/95 border-2 border-[#606C38] shadow-xl ring-2 ring-[#606C38]/20 backdrop-blur-xl scale-[1.02]'
                  : 'bg-white/50 hover:bg-white/80 border border-white/80 backdrop-blur-md shadow-xs'
              }`}
            >
              <span className="text-3xl mb-2">{cat.icon}</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#283618] leading-tight block">
                {cat.name}
              </span>
              <span className="text-[10px] text-[#606C38] font-semibold mt-1">
                {cat.recommendedLures.length} Solutions
              </span>
            </button>
          ))}
        </AnimatedCard>

        {/* 3. Selected Crop Group Diagnostic Overview */}
        <AnimatedCard delay={0.12} distance={28} className="rounded-[36px] bg-white/50 backdrop-blur-2xl border border-white/80 p-6 sm:p-8 lg:p-10 shadow-xl space-y-8">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#606C38]/10 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-3xl">{activeGroup.icon}</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#283618]">
                  {activeGroup.name} Diagnostic Profile
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#555] font-light">
                Primary Bio Threat: <strong className="text-[#283618] font-semibold">{activeGroup.keyThreat}</strong>
              </p>
            </div>

            {/* Covered Crops Badges */}
            <div className="flex flex-wrap items-center gap-1.5 max-w-lg">
              {activeGroup.crops.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#FEFAE0] text-[#283618] border border-[#DDA15E]/30"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Damage Symptoms Warning Box */}
          <div className="p-4 sm:p-5 rounded-[24px] bg-[#FEFAE0]/80 border border-[#DDA15E]/40 flex items-start gap-3.5">
            <AlertTriangle className="w-5 h-5 text-[#BC6C25] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#283618]">
                Infestation Symptoms & Economic Damage Profile:
              </h3>
              <p className="text-xs text-[#555] mt-1 font-light leading-relaxed">
                {activeGroup.symptoms}
              </p>
            </div>
          </div>

          {/* Targeted Biological Countermeasures Grid with Dual Lure + Trap Images */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#606C38] flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Targeted Countermeasures (Pouch + Hardware Pairing)</span>
              </h3>
              <span className="text-xs font-semibold text-[#666]">
                {relevantProducts.length} Compatible Formulations
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relevantProducts.map((product, idx) => (
                <AnimatedCard
                  key={product.id}
                  delay={idx * 0.1}
                  distance={24}
                  hoverEffect
                  className="rounded-[28px] bg-white/70 backdrop-blur-xl border border-white/90 p-5 sm:p-6 shadow-md hover:bg-white hover:border-[#606C38]/40 hover:shadow-xl transition-all duration-300 space-y-4"
                >
                  {/* Top Product Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E9EDC9] text-[#283618] border border-[#606C38]/20 inline-block mb-1">
                        {product.category.replace('_', ' ')}
                      </span>
                      <h4 className="text-base font-serif font-bold text-[#283618]">
                        {product.name}
                      </h4>
                      <p className="text-xs text-[#606C38] font-medium mt-0.5">
                        Target: {product.pestCommonName}
                      </p>
                    </div>

                    <button
                      onClick={() => onInquireProduct(product.name)}
                      className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#606C38] hover:bg-[#283618] shadow-xs shrink-0 cursor-pointer"
                    >
                      Quote
                    </button>
                  </div>

                  {/* Dual Image Presentation: Lure Pouch + Paired Trap Hardware */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    {/* 1. Lure Pouch Image */}
                    <div 
                      className="space-y-1.5 cursor-pointer"
                      onClick={() => product.imageUrl && onZoomImage(product.imageUrl, product.name)}
                    >
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#606C38] text-center">
                        Pheromone Lure
                      </div>
                      <SafeImage
                        src={product.imageUrl}
                        alt={product.name}
                        aspectRatio="aspect-[4/3]"
                        enableZoom
                        onZoom={onZoomImage}
                      />
                    </div>

                    {/* 2. Paired Trap Hardware Image */}
                    <div 
                      className="space-y-1.5 cursor-pointer"
                      onClick={() => product.trapImageUrl && onZoomImage(product.trapImageUrl, `${product.name} Compatible Trap`)}
                    >
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#BC6C25] text-center">
                        Compatible Trap
                      </div>
                      <SafeImage
                        src={product.trapImageUrl || '/images/Fruit Fly Trap.jpg'}
                        alt={`${product.name} Compatible Trap`}
                        aspectRatio="aspect-[4/3]"
                        enableZoom
                        onZoom={onZoomImage}
                      />
                    </div>
                  </div>

                  {/* Specs Strip */}
                  <div className="grid grid-cols-2 gap-2 text-xs bg-white/60 p-3 rounded-2xl border border-white/80">
                    <div className="flex items-center gap-1 text-[#555]">
                      <Clock className="w-3.5 h-3.5 text-[#606C38]" />
                      <span>{product.fieldLife.split('(')[0]}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#283618] font-semibold justify-end">
                      <Layers className="w-3.5 h-3.5 text-[#BC6C25]" />
                      <span>{product.trapsPerAcre}</span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="text-xs font-bold text-[#283618] hover:text-[#606C38] inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#606C38]" />
                      <span>View Full Application Protocol →</span>
                    </button>
                  </div>

                </AnimatedCard>
              ))}
            </div>
          </div>

        </AnimatedCard>

      </div>

      {/* Page Footer Navigation */}
      <PageFooterBanner
        nextPageId="trap-guide"
        nextPageTitle="Traps & Hardware Installation Guide"
        nextPageDescription="Learn exact mounting heights, placement patterns, maintenance protocols, and sticky trap integrations."
        onNavigate={onNavigate}
      />
    </div>
  );
};
