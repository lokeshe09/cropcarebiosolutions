import React, { useState } from 'react';
import { Image as ImageIcon, ZoomIn } from 'lucide-react';

interface SafeImageProps {
  src?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
  enableZoom?: boolean;
  onZoom?: (src: string, alt: string) => void;
  priority?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = '',
  aspectRatio = 'aspect-square',
  enableZoom = false,
  onZoom,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (!src || hasError) {
    return (
      <div 
        className={`w-full ${aspectRatio} rounded-[20px] bg-[#E9EDC9]/40 border border-white/80 flex flex-col items-center justify-center p-4 text-[#606C38] ${containerClassName}`}
      >
        <ImageIcon className="w-8 h-8 text-[#606C38]/60 mb-2" />
        <span className="text-[11px] font-medium text-[#283618] text-center line-clamp-2">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div 
      className={`relative w-full ${aspectRatio} rounded-[20px] overflow-hidden bg-[#FAF9F6] border border-white/80 group ${containerClassName}`}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-[#E9EDC9]/30 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 rounded-full border-2 border-[#606C38] border-t-transparent animate-spin" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`${className} transition-transform duration-500 group-hover:scale-105 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {enableZoom && onZoom && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onZoom(src, alt);
          }}
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs shadow-md"
          title="Zoom image"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
