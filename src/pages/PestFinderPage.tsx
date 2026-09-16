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
    <div className="space-y-8 bg-stone-50/50 pb-8">
      {/* 1. Page Header */}
      <PageHeader
        badge="Agronomic Guidance & IPM"
        title="Crop Solutions"
        highlightText="Information"
        subtitle="Select your crop family or search by crop to diagnose damaging pest threats, symptoms, and the exact lure & trap hardware pairing required."
        currentPage="pest-finder"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* 2. Filter & Search Bar */}
        <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs space-y-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
              {CATEGORIES_FILTER.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleFilterClick(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    selectedFilter === cat.id
                      ? 'bg-[#073B20] text-white font-semibold shadow-xs'
                      : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search crop (Tomato, Mango, Maize)..."
                value={cropSearchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-lg text-xs bg-stone-50 border border-stone-300 focus:bg-white focus:border-[#073B20] focus:ring-1 focus:ring-[#073B20] text-stone-900 placeholder-stone-400 outline-none transition-colors"
              />
              {cropSearchQuery && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>

        {/* 3. Crop Family Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CROP_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveGroupIndex(idx)}
              className={`p-4 rounded-xl text-left transition-all duration-200 flex flex-col justify-between cursor-pointer border ${
                activeGroupIndex === idx
                  ? 'bg-white border-[#073B20] shadow-sm ring-1 ring-[#073B20]'
                  : 'bg-white hover:bg-stone-50 border-stone-200 shadow-xs'
              }`}
            >
              <span className="text-2xl mb-1.5">{cat.icon}</span>
              <div>
                <span className="text-xs font-bold text-stone-900 leading-tight block">
                  {cat.name}
                </span>
                <span className="text-[11px] text-stone-500 font-medium mt-0.5 block">
                  {cat.recommendedLures.length} Solutions
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* 3. Selected Crop Group Diagnostic Overview */}
        <div className="rounded-xl bg-white border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{activeGroup.icon}</span>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                  {activeGroup.name} Diagnostic Profile
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-stone-600">
                Primary Bio Threat: <strong className="text-stone-900 font-semibold">{activeGroup.keyThreat}</strong>
              </p>
            </div>

            {/* Covered Crops Badges */}
            <div className="flex flex-wrap items-center gap-1.5 max-w-lg">
              {activeGroup.crops.map((c) => (
                <span
                  key={c}
                  className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Damage Symptoms Warning Box */}
          <div className="p-4 rounded-lg bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900">
                Infestation Symptoms & Economic Damage Profile
              </h3>
              <p className="text-xs text-stone-700 mt-1 leading-relaxed">
                {activeGroup.symptoms}
              </p>
            </div>
          </div>

          {/* Targeted Biological Countermeasures Grid with Dual Lure + Trap Images */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Targeted Countermeasures (Pouch + Hardware Pairing)</span>
              </h3>
              <span className="text-xs font-medium text-stone-500">
                {relevantProducts.length} Compatible Formulations
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {relevantProducts.map((product) => (
                <div
                  key={product.id}
                  className="rounded-xl bg-stone-50/70 border border-stone-200 p-5 shadow-xs hover:bg-white hover:border-stone-300 hover:shadow-md transition-all duration-200 space-y-4"
                >
                  {/* Top Product Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-100 inline-block mb-1">
                        {product.category.replace('_', ' ')}
                      </span>
                      <h4 className="text-base font-bold text-stone-900">
                        {product.name}
                      </h4>
                      <p className="text-xs text-emerald-800 font-medium mt-0.5">
                        Target: <span className="font-semibold text-stone-800">{product.pestCommonName}</span>
                      </p>
                    </div>

                    <button
                      onClick={() => onInquireProduct(product.name)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#073B20] hover:bg-[#126B35] shadow-xs shrink-0 cursor-pointer transition-colors"
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
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800 text-center">
                        Pheromone Lure
                      </div>
                      <div className="rounded-lg overflow-hidden border border-stone-200 bg-white">
                        <SafeImage
                          src={product.imageUrl}
                          alt={product.name}
                          aspectRatio="aspect-[4/3]"
                          enableZoom
                          onZoom={onZoomImage}
                        />
                      </div>
                    </div>

                    {/* 2. Paired Trap Hardware Image */}
                    <div 
                      className="space-y-1.5 cursor-pointer"
                      onClick={() => product.trapImageUrl && onZoomImage(product.trapImageUrl, `${product.name} Compatible Trap`)}
                    >
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-amber-800 text-center">
                        Compatible Trap
                      </div>
                      <div className="rounded-lg overflow-hidden border border-stone-200 bg-white">
                        <SafeImage
                          src={product.trapImageUrl || '/images/Fruit Fly Trap.jpg'}
                          alt={`${product.name} Compatible Trap`}
                          aspectRatio="aspect-[4/3]"
                          enableZoom
                          onZoom={onZoomImage}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Specs Strip */}
                  <div className="grid grid-cols-2 gap-2 text-xs bg-white p-2.5 rounded-lg border border-stone-200">
                    <div className="flex items-center gap-1.5 text-stone-600">
                      <Clock className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{product.fieldLife.split('(')[0]}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-stone-800 font-semibold justify-end">
                      <Layers className="w-3.5 h-3.5 text-amber-700" />
                      <span>{product.trapsPerAcre}</span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-1 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="text-xs font-semibold text-[#073B20] hover:text-[#126B35] inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-emerald-700" />
                      <span>View Full Application Protocol →</span>
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

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
