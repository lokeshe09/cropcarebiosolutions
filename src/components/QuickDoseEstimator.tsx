import React, { useState } from 'react';
import { 
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  Phone
} from 'lucide-react';
import { PageId } from '../types';

interface QuickDoseEstimatorProps {
  onNavigate: (page: PageId) => void;
}

const CROPS = [
  { id: 'mango', name: 'Mango (Fruit Fly)', trapsPerAcre: 6, lureName: 'Methyl Eugenol Lure', trapModel: 'Fruit Fly Dome Trap' },
  { id: 'guava', name: 'Guava (Fruit Fly)', trapsPerAcre: 6, lureName: 'Methyl Eugenol Lure', trapModel: 'Fruit Fly Dome Trap' },
  { id: 'pomegranate', name: 'Pomegranate (Fruit Borer)', trapsPerAcre: 8, lureName: 'Deudorix Isocrates Lure', trapModel: 'Delta / Funnel Trap' },
  { id: 'cotton', name: 'Cotton (Pink Bollworm)', trapsPerAcre: 5, lureName: 'Gossyplure Pheromone Septa', trapModel: 'Green Funnel Sleeve Trap' },
  { id: 'brinjal', name: 'Brinjal / Eggplant (Shoot & Fruit Borer)', trapsPerAcre: 10, lureName: 'Lucin-Lure', trapModel: 'Water Pan / Funnel Trap' },
  { id: 'tomato', name: 'Tomato (Tuta Absoluta / Fruit Borer)', trapsPerAcre: 10, lureName: 'Helilure / Tuta Lure', trapModel: 'Water Pan / Delta Trap' },
  { id: 'cucurbits', name: 'Cucurbits / Melons (Melon Fly)', trapsPerAcre: 8, lureName: 'Cue-Lure Matrix', trapModel: 'Fruit Fly Dome Trap' }
];

export const QuickDoseEstimator: React.FC<QuickDoseEstimatorProps> = ({ onNavigate }) => {
  const [selectedCrop, setSelectedCrop] = useState(CROPS[0]);
  const [acres, setAcres] = useState<number>(4);

  const totalTraps = acres * selectedCrop.trapsPerAcre;
  const totalLures = totalTraps; // 1 lure per trap per 60-day cycle

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Crop Care Bio Solutions! I calculated my farm dosage for ${acres} Acres of ${selectedCrop.name}. ` +
      `Recommended: ${totalTraps} x ${selectedCrop.trapModel} and ${totalLures} x ${selectedCrop.lureName}. ` +
      `Please provide quotation and doorstep delivery details.`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section className="rounded-3xl bg-[#04170D] text-white p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden border border-white/20">
      
      <div className="relative z-10 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/20">
          <div className="space-y-1.5 max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 border border-white/30 text-[#8BE52A] text-xs font-black uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" />
              <span>INSTANT FIELD DOSING CALCULATOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Calculate Traps &amp; Lures for Your Acreage
            </h2>
            <p className="text-xs sm:text-sm text-[#E6EFE9] font-medium leading-relaxed">
              Get scientifically validated trap density, lure replenishment cycles, and direct farm quotation in seconds.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('calculator')}
            className="inline-flex items-center gap-1.5 text-xs font-black text-[#8BE52A] hover:text-[#9cf53b] cursor-pointer shrink-0 px-4 py-2 rounded-full bg-white/15 border border-white/30 hover:bg-white/25 transition-all"
          >
            <span>Open Advanced Farm Tool</span>
            <ArrowRight className="w-4 h-4 text-[#8BE52A]" />
          </button>
        </div>

        {/* Interactive Calculator Inputs & Outputs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Inputs Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Step 1: Crop Select */}
            <div className="space-y-2.5">
              <label className="block text-xs font-black uppercase tracking-wider text-[#8BE52A]">
                1. Select Your Crop &amp; Target Pest
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {CROPS.map((crop) => {
                  const isSelected = crop.id === selectedCrop.id;
                  return (
                    <button
                      key={crop.id}
                      type="button"
                      onClick={() => setSelectedCrop(crop)}
                      className={`p-3 rounded-2xl text-left text-xs font-black transition-all duration-200 cursor-pointer border ${
                        isSelected
                          ? 'bg-[#8BE52A] text-[#04170D] border-[#8BE52A] shadow-lg scale-102'
                          : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                      }`}
                    >
                      {crop.name.split(' (')[0]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Acreage Slider */}
            <div className="space-y-3 p-5 rounded-2xl bg-white/10 border border-white/20 shadow-inner">
              <div className="flex items-center justify-between">
                <label className="text-xs font-black uppercase tracking-wider text-[#E6EFE9]">
                  2. Farm Land Area (Acres)
                </label>
                <span className="text-xl font-black text-[#8BE52A] font-mono">
                  {acres} {acres === 1 ? 'Acre' : 'Acres'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={acres}
                onChange={(e) => setAcres(Number(e.target.value))}
                className="w-full accent-[#8BE52A] cursor-pointer h-2.5 bg-black/60 rounded-lg"
              />
              <div className="flex justify-between text-xs text-[#C7D8CC] font-mono font-bold">
                <span>1 Acre</span>
                <span>10 Acres</span>
                <span>25 Acres</span>
                <span>50 Acres</span>
              </div>
            </div>

          </div>

          {/* Output Results Box (5 cols) in High Contrast Solid Card */}
          <div className="lg:col-span-5 rounded-3xl bg-white text-[#073B20] p-6 sm:p-8 space-y-5 shadow-2xl border border-gray-200 text-left">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <span className="text-xs font-black uppercase tracking-wider text-[#073B20]">
                Recommended Field Dosage
              </span>
              <span className="text-[11px] font-black bg-[#E8F5E9] text-[#073B20] px-3 py-0.5 rounded-full border border-[#C8E6C9]">
                60-Day Protection
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-[#F4F9F4] border border-[#D5E7D5] text-center shadow-xs">
                <span className="text-xs text-[#59675F] font-bold block">Total Traps Needed</span>
                <span className="text-3xl font-black text-[#073B20] font-mono">
                  {totalTraps} <span className="text-xs font-sans font-bold text-[#59675F]">Units</span>
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F4F9F4] border border-[#D5E7D5] text-center shadow-xs">
                <span className="text-xs text-[#59675F] font-bold block">Pheromone Lures</span>
                <span className="text-3xl font-black text-[#126B35] font-mono">
                  {totalLures} <span className="text-xs font-sans font-bold text-[#59675F]">Packs</span>
                </span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-[#34443B] font-medium pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#126B35] shrink-0" />
                <span><strong className="text-[#073B20]">Trap Type:</strong> {selectedCrop.trapModel}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#126B35] shrink-0" />
                <span><strong className="text-[#073B20]">Lure Active:</strong> {selectedCrop.lureName} (60 Days)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#126B35] shrink-0" />
                <span><strong className="text-[#073B20]">Density:</strong> {selectedCrop.trapsPerAcre} Traps / Acre</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleWhatsAppInquiry}
              className="w-full py-3.5 px-4 rounded-2xl bg-[#073B20] hover:bg-[#126B35] text-white text-xs font-black transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Phone className="w-4 h-4 text-[#8BE52A]" />
              <span>Get Quotation for {acres} Acres on WhatsApp</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
