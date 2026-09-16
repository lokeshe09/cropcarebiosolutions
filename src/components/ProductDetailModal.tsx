import React from 'react';
import { Product } from '../types';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  ShieldAlert, 
  Layers, 
  Sparkles, 
  Send, 
  PhoneCall, 
  ShieldCheck,
  Check
} from 'lucide-react';
import { SafeImage } from './SafeImage';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectForInquiry: (productName: string) => void;
  onZoomImage?: (src: string, alt: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onSelectForInquiry,
  onZoomImage,
}) => {
  if (!product) return null;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Crop Care Bio Solutions! I am interested in inquiring about ${product.name} (Pest: ${product.pestCommonName}). Please provide pricing and technical specifications.`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl rounded-2xl bg-white border border-stone-300 shadow-2xl p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto space-y-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar with Close Button */}
        <div className="flex items-start justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                {product.category.toUpperCase().replace('_', ' ')}
              </span>
              {product.badge && (
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                  {product.badge}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 leading-tight">
              {product.name}
            </h2>
            {product.pestCommonName && (
              <p className="text-xs text-stone-600 mt-0.5">
                Target Pest: <span className="font-semibold text-stone-800">{product.pestCommonName}</span>
                {product.scientificName && <span className="italic ml-1">({product.scientificName})</span>}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100 border border-stone-200 transition-colors shrink-0 cursor-pointer"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dual Visual Gallery (Lure Packaging + Compatible Hardware) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* 1. Lure Image */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-700 block">
              Pheromone Lure Pouch:
            </span>
            <div 
              className="cursor-pointer border border-stone-200 rounded-xl overflow-hidden bg-stone-50"
              onClick={() => product.imageUrl && onZoomImage && onZoomImage(product.imageUrl, product.name)}
            >
              <SafeImage
                src={product.imageUrl}
                alt={product.imageAlt || product.name}
                aspectRatio="aspect-[4/3]"
                enableZoom={!!onZoomImage}
                onZoom={onZoomImage}
              />
            </div>
          </div>

          {/* 2. Paired Trap Hardware */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-700 block">
              Compatible Field Trap:
            </span>
            <div 
              className="cursor-pointer border border-stone-200 rounded-xl overflow-hidden bg-stone-50"
              onClick={() => product.trapImageUrl && onZoomImage && onZoomImage(product.trapImageUrl, `${product.name} Compatible Trap`)}
            >
              <SafeImage
                src={product.trapImageUrl || '/images/Fruit Fly Trap.jpg'}
                alt={`${product.name} Compatible Trap`}
                aspectRatio="aspect-[4/3]"
                enableZoom={!!onZoomImage}
                onZoom={onZoomImage}
              />
            </div>
          </div>
        </div>

        {/* Quick Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200">
            <div className="flex items-center gap-1.5 text-xs text-stone-600 font-semibold mb-0.5">
              <Clock className="w-3.5 h-3.5 text-emerald-800" />
              <span>Field Life</span>
            </div>
            <p className="text-xs font-bold text-stone-900">{product.fieldLife}</p>
          </div>

          <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200">
            <div className="flex items-center gap-1.5 text-xs text-stone-600 font-semibold mb-0.5">
              <Calendar className="w-3.5 h-3.5 text-amber-800" />
              <span>Shelf Life</span>
            </div>
            <p className="text-xs font-bold text-stone-900">{product.shelfLife}</p>
          </div>

          <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200">
            <div className="flex items-center gap-1.5 text-xs text-stone-600 font-semibold mb-0.5">
              <Layers className="w-3.5 h-3.5 text-stone-700" />
              <span>Monitoring</span>
            </div>
            <p className="text-xs font-bold text-stone-900">{product.monitoringDensity || '4–6 / acre'}</p>
          </div>

          <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200">
            <div className="flex items-center gap-1.5 text-xs text-stone-600 font-semibold mb-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
              <span>Mass Trapping</span>
            </div>
            <p className="text-xs font-bold text-stone-900">{product.massTrappingDensity || product.trapsPerAcre}</p>
          </div>
        </div>

        {/* Target Crops */}
        <div className="space-y-2.5">
          <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-800" />
            Target Crops
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {product.targetCrops.map((crop) => (
              <span
                key={crop}
                className="px-2.5 py-1 rounded text-xs font-medium bg-stone-100 text-stone-800 border border-stone-200"
              >
                {crop}
              </span>
            ))}
          </div>
        </div>

        {/* How to Apply (From PDF) */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-800" />
            How to Apply
          </h3>
          <ol className="space-y-2">
            {product.applicationInstructions.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700">
                <span className="w-5 h-5 rounded bg-emerald-100 text-emerald-900 font-bold flex items-center justify-center shrink-0 text-[11px] border border-emerald-200">
                  {idx + 1}
                </span>
                <span className="pt-0.5 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* How to Storage & Disposal it (From PDF) */}
        <div className="space-y-2.5">
          <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-800" />
            How to Storage &amp; Disposal it
          </h3>
          <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/80 space-y-2">
            {product.storageAndDisposal.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                <span className="text-amber-800 font-bold">•</span>
                <span className="leading-relaxed">{rule}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Trap Types */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-stone-900">Recommended Traps</h3>
          <div className="flex flex-wrap gap-2">
            {product.recommendedTraps.map((trap) => (
              <span
                key={trap}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-100 text-stone-800 border border-stone-200 flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5 text-emerald-800" />
                {trap}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onSelectForInquiry(product.name);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#073B20] hover:bg-[#126B35] shadow-xs transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Inquire About This Product</span>
          </button>

          <button
            onClick={handleWhatsAppInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 transition-colors cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-emerald-800" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
