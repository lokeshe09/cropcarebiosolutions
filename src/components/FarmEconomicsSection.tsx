import React, { useState } from 'react';
import { 
  Quote, 
  Star, 
  TrendingUp, 
  Phone, 
} from 'lucide-react';
import { PageId } from '../types';
import farmerFieldImg from '../assets/images/indian_farmer_field_1787640498872.jpg';

interface FarmEconomicsSectionProps {
  onNavigate: (page: PageId) => void;
}

export const FarmEconomicsSection: React.FC<FarmEconomicsSectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const testimonials = [
    {
      id: 0,
      name: "Rameshwar Patil",
      location: "Ratnagiri, Maharashtra",
      crop: "Alphonso Mango Orchard",
      acreage: "12 Acres",
      quote: "Fruit fly damage used to destroy 30% of our premium mangoes right before harvest. Since installing Crop Care Fruit Fly Traps with Methyl Eugenol lures 45 days prior to harvest, our export grade packout reached 94%. We completely eliminated chemical sprays in the final month.",
      result: "+35% Export Yield",
      savings: "₹10,500 / Acre Spray Savings",
      rating: 5
    },
    {
      id: 1,
      name: "Venkatesh Rao",
      location: "Warangal, Telangana",
      crop: "Bt Cotton",
      acreage: "8 Acres",
      quote: "Pink Bollworm was developing chemical resistance, forcing us to spray every 8 days. Switching to Phero-Sensor Funnel Traps and Gossyplure lures trapped thousands of moths before egg laying. Our spray frequency dropped from 12 sprays down to just 3.",
      result: "-75% Spray Costs",
      savings: "₹8,200 / Acre Cost Reduction",
      rating: 5
    },
    {
      id: 2,
      name: "Nagaraj Gowda",
      location: "Bagalkot, Karnataka",
      crop: "Pomegranate (Bhagwa)",
      acreage: "6 Acres",
      quote: "Fruit borer punctures were causing severe fungal stains and fruit cracking. Crop Care agronomists mapped our trap placement. The harvested arils were crystal clear and deep red, fetching top auction prices in the Bengaluru market.",
      result: "Grade-A Export Quality",
      savings: "₹14,000 / Acre Premium Returns",
      rating: 5
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#04170D] text-white relative overflow-hidden">
      
      {/* Ambient Botanical Glow Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#8BE52A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header with Large Editorial Typographic Scale */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/20 pb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#8BE52A]">
              <TrendingUp className="w-4 h-4" />
              <span>FIELD PROOF &amp; ECONOMICS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Proven in 5,000+ Orchards Across India.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#E6EFE9] max-w-md font-medium leading-relaxed">
            Real farm outcomes from commercial growers who replaced hazardous chemical sprays with species-specific pheromone mass trapping.
          </p>
        </div>

        {/* 4 Large Editorial Proof Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          <div className="p-6 rounded-3xl bg-white/10 border border-white/20 space-y-2 shadow-lg">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#8BE52A] tracking-tight font-mono">5,000+</div>
            <div className="text-base font-black text-white">Commercial Orchards</div>
            <div className="text-xs text-[#C7D8CC] font-medium">Active field deployments in 12 states</div>
          </div>

          <div className="p-6 rounded-3xl bg-white/10 border border-white/20 space-y-2 shadow-lg">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#8BE52A] tracking-tight font-mono">-70%</div>
            <div className="text-base font-black text-white">Chemical Spray Costs</div>
            <div className="text-xs text-[#C7D8CC] font-medium">Massive reduction in pesticide labor &amp; toxins</div>
          </div>

          <div className="p-6 rounded-3xl bg-white/10 border border-white/20 space-y-2 shadow-lg">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#8BE52A] tracking-tight font-mono">+35%</div>
            <div className="text-base font-black text-white">Grade-A Export Packout</div>
            <div className="text-xs text-[#C7D8CC] font-medium">Zero internal maggot punctures or blemish drops</div>
          </div>

          <div className="p-6 rounded-3xl bg-white/10 border border-white/20 space-y-2 shadow-lg">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#8BE52A] tracking-tight font-mono">99.8%</div>
            <div className="text-base font-black text-white">Pheromone Isomer Purity</div>
            <div className="text-xs text-[#C7D8CC] font-medium">Zero contamination; specific to target pests</div>
          </div>

        </div>

        {/* Farmer Testimonial Split Showcase with Real Indian Farmer Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-white/10 border border-white/20 p-6 sm:p-10 lg:p-12 shadow-2xl">
          
          {/* Left: Authentic Indian Farmer Photography */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-square sm:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden border-2 border-white/30 shadow-2xl relative">
              <img 
                src={farmerFieldImg} 
                alt="Farmer in Field" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-[#04170D]/90 backdrop-blur-md rounded-2xl p-3.5 border border-white/30 flex items-center justify-between">
                <div>
                  <div className="text-sm font-black text-white">{testimonials[activeTab].name}</div>
                  <div className="text-xs text-[#8BE52A] font-bold">{testimonials[activeTab].location}</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#8BE52A] text-[#04170D] text-xs font-black">
                  {testimonials[activeTab].acreage}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Farmer Words & Tab Switchers */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            
            {/* 3 Farmer Tabs */}
            <div className="flex flex-wrap gap-2">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-black transition-all cursor-pointer ${
                    activeTab === idx 
                      ? 'bg-[#8BE52A] text-[#04170D] shadow-md scale-102' 
                      : 'bg-white/15 hover:bg-white/25 text-white border border-white/20'
                  }`}
                >
                  {t.name} ({t.crop})
                </button>
              ))}
            </div>

            {/* Quote Block */}
            <div className="space-y-4">
              <Quote className="w-10 h-10 text-[#8BE52A]/60" />
              <p className="text-base sm:text-lg text-white leading-relaxed font-medium italic">
                &ldquo;{testimonials[activeTab].quote}&rdquo;
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20">
                  <div className="text-xs text-[#8BE52A] font-bold uppercase">Harvest Outcome</div>
                  <div className="text-base font-black text-white mt-0.5">{testimonials[activeTab].result}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20">
                  <div className="text-xs text-[#8BE52A] font-bold uppercase">Financial Impact</div>
                  <div className="text-base font-black text-white mt-0.5">{testimonials[activeTab].savings}</div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-black text-white ml-2">Verified Field Audit</span>
              </div>

              <a
                href="https://wa.me/919876543210?text=Hello%20Crop%20Care%2C%20I%20want%20to%20know%20more%20about%20your%20farmer%20success%20stories."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black text-[#04170D] bg-[#8BE52A] hover:bg-[#9cf53b] transition-all cursor-pointer shadow-lg active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Talk to Field Expert</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
