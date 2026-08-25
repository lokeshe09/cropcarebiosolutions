import React, { useState } from 'react';
import { 
  Camera, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Maximize2, 
} from 'lucide-react';
import { PageId } from '../types';

import fruitFlyTrapImg from '../assets/images/fruit_fly_trap_clean_1787640517865.jpg';
import funnelTrapImg from '../assets/images/funnel_trap_clean_1787640530032.jpg';
import pheromoneLureImg from '../assets/images/pheromone_lure_clean_1787640541024.jpg';
import heroOrchardImg from '../assets/images/hero_orchard_trap_1787640485280.jpg';
import farmInspectionImg from '../assets/images/farm_field_inspection_1787649146636.jpg';
import indianFarmerImg from '../assets/images/indian_farmer_field_1787640498872.jpg';

interface RealFieldGallerySectionProps {
  onNavigate: (page: PageId) => void;
  onZoomImage?: (src: string, alt: string) => void;
}

interface GalleryItem {
  id: string;
  title: string;
  crop: string;
  location: string;
  trapType: string;
  pestControlled: string;
  image: string;
  tag: string;
  stat: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'field-1',
    title: 'Mango Orchard Fruit Fly Trapping',
    crop: 'Alphonso Mango',
    location: 'Ratnagiri, Maharashtra',
    trapType: 'Fruit Fly Dome Trap',
    pestControlled: 'Bactrocera dorsalis',
    image: heroOrchardImg,
    tag: 'Field Proven',
    stat: '0% Chemical Drops'
  },
  {
    id: 'field-2',
    title: 'Organic Cotton Pink Bollworm Control',
    crop: 'Hybrid Cotton',
    location: 'Warangal, Telangana',
    trapType: 'Green Funnel Sleeve Trap',
    pestControlled: 'Pectinophora gossypiella',
    image: farmInspectionImg,
    tag: 'Mass Trapping',
    stat: '₹8,000 Saved / Acre'
  },
  {
    id: 'field-3',
    title: 'Pheromone Lure 60-Day Field Active',
    crop: 'Multicrop Bio-Control',
    location: 'Research & Field Stations',
    trapType: 'Controlled Polymer Septa',
    pestControlled: 'Mating Disruption',
    image: pheromoneLureImg,
    tag: '99.8% Purity',
    stat: '60 Days Active Scent'
  },
  {
    id: 'field-4',
    title: 'Commercial Vegetable & Orchard Protection',
    crop: 'Tomato & Pomegranate',
    location: 'Kolar & Bagalkot, Karnataka',
    trapType: 'Water Pan & Delta Traps',
    pestControlled: 'Tuta Absoluta & Borers',
    image: indianFarmerImg,
    tag: 'Export Certified',
    stat: 'GlobalGAP Ready'
  },
  {
    id: 'field-5',
    title: 'Funnel Trap Catch Chamber Mechanics',
    crop: 'Pulses & Oilseeds',
    location: 'Indore, Madhya Pradesh',
    trapType: 'Funnel Trap + Sleeve',
    pestControlled: 'Helicoverpa armigera',
    image: funnelTrapImg,
    tag: 'Zero Escape',
    stat: '100% Trap Retention'
  },
  {
    id: 'field-6',
    title: 'Dome Trap Top Ingress & Lure Chamber',
    crop: 'Guava & Citrus',
    location: 'Nashik, Maharashtra',
    trapType: 'UV-Stabilized Dome Trap',
    pestControlled: 'Fruit Fly Species',
    image: fruitFlyTrapImg,
    tag: 'Heavy Duty',
    stat: '5+ Years Lifespan'
  }
];

export const RealFieldGallerySection: React.FC<RealFieldGallerySectionProps> = ({ 
  onNavigate,
  onZoomImage 
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'orchard' | 'field' | 'hardware'>('all');

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'orchard') return item.crop.includes('Mango') || item.crop.includes('Guava') || item.crop.includes('Pomegranate');
    if (activeFilter === 'field') return item.crop.includes('Cotton') || item.crop.includes('Vegetable') || item.crop.includes('Pulses');
    if (activeFilter === 'hardware') return item.tag.includes('Heavy Duty') || item.tag.includes('99.8% Purity');
    return true;
  });

  return (
    <section className="space-y-8">
      
      {/* Section Header with High Contrast */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-gray-300">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E8F5E9] text-[#073B20] text-xs font-black uppercase tracking-wider border border-[#C8E6C9]">
            <Camera className="w-3.5 h-3.5" />
            <span>REAL FIELD VISUALS &amp; INSTALLATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#073B20] tracking-tight">
            Proven Performance Across Indian Farms
          </h2>
          <p className="text-xs sm:text-sm text-[#34443B] font-medium leading-relaxed">
            Authentic photographs of Crop Care bio-traps and pheromones deployed in real mango orchards, cotton fields, and vegetable farms.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-gray-200 border border-gray-300 shrink-0">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#073B20] text-white shadow-xs'
                : 'text-[#34443B] hover:text-[#073B20]'
            }`}
          >
            All Visuals
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('orchard')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeFilter === 'orchard'
                ? 'bg-[#073B20] text-white shadow-xs'
                : 'text-[#34443B] hover:text-[#073B20]'
            }`}
          >
            Orchards
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('field')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeFilter === 'field'
                ? 'bg-[#073B20] text-white shadow-xs'
                : 'text-[#34443B] hover:text-[#073B20]'
            }`}
          >
            Field Crops
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('hardware')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeFilter === 'hardware'
                ? 'bg-[#073B20] text-white shadow-xs'
                : 'text-[#34443B] hover:text-[#073B20]'
            }`}
          >
            Trap Specs
          </button>
        </div>
      </div>

      {/* Grid of Real Field Images with High Contrast Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group rounded-3xl bg-white border border-gray-300 shadow-md hover:shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300"
          >
            <div>
              {/* Image Container with Ambient Hover & Quick Zoom */}
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#073B20] text-xs font-black shadow-md border border-gray-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#126B35]" />
                  <span>{item.tag}</span>
                </div>

                {/* Top Right Zoom Button */}
                {onZoomImage && (
                  <button
                    type="button"
                    onClick={() => onZoomImage(item.image, item.title)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white text-[#073B20] hover:bg-[#E8F5E9] flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    title="Enlarge photograph"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                )}

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1 text-xs font-bold text-white drop-shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-[#8BE52A]" />
                    <span>{item.location}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#8BE52A] text-[#04170D] text-xs font-black shadow-md">
                    {item.stat}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 space-y-2.5 text-left">
                <div className="text-xs font-black uppercase tracking-wider text-[#126B35]">
                  {item.crop}
                </div>
                <h3 className="text-base font-black text-[#073B20] leading-snug group-hover:text-[#126B35] transition-colors">
                  {item.title}
                </h3>
                
                <div className="pt-2 border-t border-gray-200 space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#59675F] font-bold">Trap Model:</span>
                    <span className="font-black text-[#073B20]">{item.trapType}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#59675F] font-bold">Target Pest:</span>
                    <span className="font-bold text-[#126B35] italic">{item.pestControlled}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="px-5 pb-5 pt-0">
              <button
                type="button"
                onClick={() => onNavigate('trap-guide')}
                className="w-full py-2.5 px-3.5 rounded-xl bg-[#E8F5E9] hover:bg-[#C8E6C9] text-[#073B20] text-xs font-black transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#C8E6C9]"
              >
                <span>View Full Specifications</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#073B20]" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
