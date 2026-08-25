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
    <section className="rounded-3xl bg-gradient-to-br from-[#164E24] via-[#155327] to-[#0A2E13] text-white p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden border border-emerald-600/30">
      
      {/* Decorative luminous orbs */}
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-lime-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/15">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#A3E635] text-xs font-bold uppercase tracking-wider shadow-inner">
              <Calculator className="w-3.5 h-3.5" />
              <span>INSTANT FIELD DOSING CALCULATOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Calculate Traps & Lures for Your Acreage
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 font-light">
              Get scientifically validated trap density, lure replenishment cycles, and direct farm quotation in 3 seconds.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('calculator')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A3E635] hover:underline cursor-pointer shrink-0 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 hover:bg-white/20 transition-all"
          >
            <span>Open Advanced Farm Tool</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Calculator Inputs & Outputs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Inputs Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Crop Select */}
            <div className="space-y-2.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200">
                1. Select Your Crop & Target Pest
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {CROPS.map((crop) => {
                  const isSelected = crop.id === selectedCrop.id;
                  return (
                    <button
                      key={crop.id}
                      type="button"
                      onClick={() => setSelectedCrop(crop)}
                      className={`p-2.5 rounded-2xl text-left text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#A3E635] to-[#84CC16] text-[#164E24] border-white font-bold shadow-lg scale-102'
                          : 'bg-white/10 backdrop-blur-md text-emerald-100 border-white/15 hover:bg-white/20'
                      }`}
                    >
                      {crop.name.split(' (')[0]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Acreage Slider */}
            <div className="space-y-3 p-4.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-inner">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                  2. Farm Land Area (Acres)
                </label>
                <span className="text-lg font-black text-[#A3E635]">
                  {acres} {acres === 1 ? 'Acre' : 'Acres'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={acres}
                onChange={(e) => setAcres(Number(e.target.value))}
                className="w-full accent-[#A3E635] cursor-pointer h-2 bg-emerald-950 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-emerald-300 font-medium">
                <span>1 Acre</span>
                <span>10 Acres</span>
                <span>25 Acres</span>
                <span>50 Acres</span>
              </div>
            </div>

          </div>

          {/* Output Results Box (5 cols) in Frosted Glass Container */}
          <div className="lg:col-span-5 rounded-3xl bg-white/95 backdrop-blur-2xl text-[#164E24] p-6 sm:p-7 space-y-5 shadow-2xl border border-white">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#2E7D32]">
                Recommended Field Dosage
              </span>
              <span className="text-[10px] font-bold bg-[#E8F5E9] text-[#2E7D32] px-2.5 py-0.5 rounded-full border border-emerald-200">
                60-Day Protection
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-[#F4F9F4] border border-[#D5E7D5] text-center shadow-xs">
                <span className="text-[11px] text-gray-500 font-medium block">Total Traps Needed</span>
                <span className="text-2xl sm:text-3xl font-black text-[#164E24]">
                  {totalTraps} <span className="text-xs font-normal">Units</span>
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F4F9F4] border border-[#D5E7D5] text-center shadow-xs">
                <span className="text-[11px] text-gray-500 font-medium block">Pheromone Lures</span>
                <span className="text-2xl sm:text-3xl font-black text-[#2E7D32]">
                  {totalLures} <span className="text-xs font-normal">Packs</span>
                </span>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-gray-600 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span><strong>Trap Type:</strong> {selectedCrop.trapModel}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span><strong>Lure Active:</strong> {selectedCrop.lureName} (60 Days)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span><strong>Density:</strong> {selectedCrop.trapsPerAcre} Traps / Acre</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleWhatsAppInquiry}
              className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#164E24] to-[#2E7D32] hover:from-[#0E3517] hover:to-[#164E24] text-white text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Phone className="w-4 h-4 text-[#A3E635]" />
              <span>Get Quotation for {acres} Acres on WhatsApp</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
