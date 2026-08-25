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
  FileText, 
  Send, 
  PhoneCall, 
  FlaskConical,
  Activity,
  Award,
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
      `Hello Crop Care Bio Solutions! I am interested in inquiring about ${product.name} (Pest: ${product.pestCommonName}). Please provide pricing, trap recommendations, and technical specifications.`
    );
    window.open(`https://wa.me/919448000000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl rounded-[32px] bg-[#FAF9F6] border border-white/90 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar with Close Button */}
        <div className="flex items-start justify-between gap-4 border-b border-[#606C38]/10 pb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E9EDC9] text-[#283618] border border-[#606C38]/20">
                {product.category.toUpperCase().replace('_', ' ')}
              </span>
              {product.badge && (
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FEFAE0] text-[#BC6C25] border border-[#DDA15E]/30">
                  {product.badge}
                </span>
              )}
              {product.isomericPurity && (
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {product.isomericPurity}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#283618] leading-tight">
              {product.name}
            </h2>
            {product.scientificName && (
              <p className="text-xs text-[#606C38] italic mt-0.5">
                Target Pest: {product.pestCommonName} ({product.scientificName})
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full text-[#666] hover:text-[#283618] hover:bg-white/80 border border-white/80 transition-colors shrink-0 shadow-2xs cursor-pointer"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dual Visual Gallery (Lure Packaging + Compatible Hardware) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* 1. Lure Image */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#606C38] block">
              Manufactured Lure Pouch:
            </span>
            <div 
              className="cursor-pointer"
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
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#BC6C25] block">
              Compatible Field Trapping Hardware:
            </span>
            <div 
              className="cursor-pointer"
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

        {/* Quick Specs Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-[20px] bg-white/70 border border-white/90 shadow-2xs">
            <div className="flex items-center gap-1.5 text-xs text-[#606C38] font-semibold mb-0.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Field Longevity</span>
            </div>
            <p className="text-xs font-medium text-[#283618]">{product.fieldLife}</p>
          </div>

          <div className="p-3.5 rounded-[20px] bg-white/70 border border-white/90 shadow-2xs">
            <div className="flex items-center gap-1.5 text-xs text-[#BC6C25] font-semibold mb-0.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>Pouch Shelf Life</span>
            </div>
            <p className="text-xs font-medium text-[#283618]">{product.shelfLife}</p>
          </div>

          <div className="p-3.5 rounded-[20px] bg-white/70 border border-white/90 shadow-2xs">
            <div className="flex items-center gap-1.5 text-xs text-[#283618] font-semibold mb-0.5">
              <Layers className="w-3.5 h-3.5 text-[#606C38]" />
              <span>Monitoring</span>
            </div>
            <p className="text-xs font-medium text-[#283618]">{product.monitoringDensity || '4–6 / acre'}</p>
          </div>

          <div className="p-3.5 rounded-[20px] bg-white/70 border border-white/90 shadow-2xs">
            <div className="flex items-center gap-1.5 text-xs text-[#BC6C25] font-semibold mb-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#BC6C25]" />
              <span>Mass Trapping</span>
            </div>
            <p className="text-xs font-medium text-[#283618]">{product.massTrappingDensity || product.trapsPerAcre}</p>
          </div>
        </div>

        {/* Product Full Description */}
        <div className="space-y-2">
          <h3 className="text-sm font-serif font-bold text-[#283618] flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#606C38]" />
            Agronomic & Biological Summary
          </h3>
          <p className="text-xs sm:text-sm text-[#555] leading-relaxed bg-white/60 p-4 rounded-[20px] border border-white/80 font-light">
            {product.fullDescription}
          </p>
        </div>

        {/* Semiochemical Profile & Technical Specifications */}
        <div className="p-4 rounded-[24px] bg-white/80 border border-[#606C38]/20 shadow-2xs space-y-3">
          <h3 className="text-sm font-serif font-bold text-[#283618] flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-[#606C38]" />
            Semiochemical & Technical Chemistry Profile
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {product.activeIngredient && (
              <div className="bg-[#FEFAE0]/50 p-2.5 rounded-[14px] border border-[#DDA15E]/20">
                <span className="text-[#606C38] font-bold block text-[10px] uppercase">Active Semiochemical</span>
                <span className="text-[#283618] font-medium">{product.activeIngredient}</span>
              </div>
            )}
            {product.chemicalStructure && (
              <div className="bg-[#FEFAE0]/50 p-2.5 rounded-[14px] border border-[#DDA15E]/20">
                <span className="text-[#606C38] font-bold block text-[10px] uppercase">Formula / Structure</span>
                <span className="text-[#283618] font-mono text-[11px]">{product.chemicalStructure}</span>
              </div>
            )}
            {product.casNumber && (
              <div className="bg-[#FAF9F6] p-2.5 rounded-[14px] border border-gray-200">
                <span className="text-[#606C38] font-bold block text-[10px] uppercase">CAS Registry Number</span>
                <span className="text-[#283618] font-mono text-[11px]">{product.casNumber}</span>
              </div>
            )}
            {product.dispenserType && (
              <div className="bg-[#FAF9F6] p-2.5 rounded-[14px] border border-gray-200">
                <span className="text-[#606C38] font-bold block text-[10px] uppercase">Dispenser Technology</span>
                <span className="text-[#283618] font-medium">{product.dispenserType}</span>
              </div>
            )}
          </div>

          {product.modeOfAction && (
            <div className="bg-[#E9EDC9]/30 p-3 rounded-[16px] border border-[#606C38]/20">
              <span className="text-[#283618] font-bold block text-[11px] mb-0.5">Mode of Action:</span>
              <p className="text-xs text-[#555] leading-relaxed">{product.modeOfAction}</p>
            </div>
          )}

          {/* MRL & Ecological Safety */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {product.mrlStatus && (
              <div className="flex items-start gap-2 text-xs text-emerald-800 bg-emerald-50/80 p-2.5 rounded-[14px] border border-emerald-200">
                <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[10px] uppercase">MRL & Export Compliance:</strong>
                  <span>{product.mrlStatus}</span>
                </div>
              </div>
            )}
            {product.beneficialSafety && (
              <div className="flex items-start gap-2 text-xs text-[#283618] bg-[#E9EDC9]/60 p-2.5 rounded-[14px] border border-[#606C38]/20">
                <ShieldCheck className="w-4 h-4 text-[#606C38] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[10px] uppercase">Pollinator & Beneficial Safety:</strong>
                  <span>{product.beneficialSafety}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Economic Threshold Levels (ETLs) for IPM Decision-Making */}
        {product.economicThreshold && (
          <div className="p-4 rounded-[24px] bg-[#FEFAE0]/80 border border-[#DDA15E]/40 space-y-2.5">
            <h3 className="text-sm font-serif font-bold text-[#283618] flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#BC6C25]" />
              Integrated Pest Management (IPM) Action Thresholds
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="bg-white/80 p-3 rounded-[16px] border border-[#DDA15E]/30">
                <span className="text-[10px] font-bold text-[#606C38] uppercase block mb-1">01. Surveillance Trigger</span>
                <p className="text-[#333] leading-snug">{product.economicThreshold.monitoringTrigger}</p>
              </div>
              <div className="bg-white/80 p-3 rounded-[16px] border border-[#DDA15E]/30">
                <span className="text-[10px] font-bold text-[#BC6C25] uppercase block mb-1">02. Mass Trapping Grid</span>
                <p className="text-[#333] leading-snug">{product.economicThreshold.massTrappingTrigger}</p>
              </div>
              <div className="bg-white/80 p-3 rounded-[16px] border border-[#DDA15E]/30">
                <span className="text-[10px] font-bold text-red-700 uppercase block mb-1">03. Critical Intervention</span>
                <p className="text-[#333] leading-snug">{product.economicThreshold.criticalIntervention}</p>
              </div>
            </div>
          </div>
        )}

        {/* Target Crops */}
        <div className="space-y-3">
          <h3 className="text-sm font-serif font-bold text-[#283618] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#606C38]" />
            Target Crops & Horticultural Applications
          </h3>

          <div className="flex flex-wrap gap-1.5">
            {product.targetCrops.map((crop) => (
              <span
                key={crop}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[#FEFAE0] text-[#283618] border border-[#DDA15E]/30"
              >
                {crop}
              </span>
            ))}
          </div>
        </div>

        {/* Application Protocol */}
        <div className="space-y-3">
          <h3 className="text-sm font-serif font-bold text-[#283618] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#606C38]" />
            Standard Field Deployment Protocol
          </h3>
          <ul className="space-y-2">
            {product.applicationInstructions.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-[#555]">
                <span className="w-5 h-5 rounded-full bg-[#E9EDC9] text-[#283618] font-bold flex items-center justify-center shrink-0 text-[11px] border border-[#606C38]/20">
                  {idx + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Storage & Safe Disposal */}
        <div className="space-y-3">
          <h3 className="text-sm font-serif font-bold text-[#283618] flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#BC6C25]" />
            Storage & Quality Preservation Protocol
          </h3>
          <div className="p-4 rounded-[20px] bg-[#FEFAE0]/70 border border-[#DDA15E]/30 space-y-2">
            {product.storageAndDisposal.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#555]">
                <span className="text-[#BC6C25] font-bold">•</span>
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Trap Types */}
        <div className="space-y-2">
          <h3 className="text-sm font-serif font-bold text-[#283618]">Recommended Compatible Traps</h3>
          <div className="flex flex-wrap gap-2">
            {product.recommendedTraps.map((trap) => (
              <span
                key={trap}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/70 text-[#283618] border border-white/90 shadow-2xs flex items-center gap-1.5"
              >
                <Check className="w-3 h-3 text-[#606C38]" />
                {trap}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#606C38]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onSelectForInquiry(product.name);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#606C38] hover:bg-[#283618] shadow-md shadow-[#606C38]/20 transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Request Commercial Quotation</span>
          </button>

          <button
            onClick={handleWhatsAppInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs font-semibold text-[#283618] bg-white/70 hover:bg-[#E9EDC9] border border-white/90 transition-colors shadow-2xs cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#606C38]" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
