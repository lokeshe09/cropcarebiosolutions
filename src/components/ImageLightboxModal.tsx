import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  imageSrc,
  imageAlt,
  onClose,
}) => {
  if (!isOpen || !imageSrc) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-[90vh] w-full rounded-[28px] bg-[#FAF9F6] border border-white/80 p-4 sm:p-6 shadow-2xl flex flex-col items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#283618] border border-white shadow-md transition-all z-10"
          aria-label="Close Preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-full flex-1 flex items-center justify-center overflow-hidden rounded-[20px] bg-white p-2">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-w-full max-h-[72vh] object-contain rounded-[16px] drop-shadow-md"
          />
        </div>

        <div className="mt-3 text-center">
          <p className="text-sm font-serif font-bold text-[#283618]">{imageAlt}</p>
          <p className="text-[11px] text-[#606C38] font-medium">Crop Care Bio Solutions • Authentic Product & Trapping Hardware</p>
        </div>
      </div>
    </div>
  );
};
