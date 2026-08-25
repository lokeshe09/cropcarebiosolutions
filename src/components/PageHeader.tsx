import React from 'react';
import { ChevronRight, Home, Sparkles } from 'lucide-react';
import { PageId } from '../types';

interface PageHeaderProps {
  badge: string;
  title: string;
  highlightText?: string;
  subtitle: string;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  highlightText,
  subtitle,
  currentPage,
  onNavigate,
}) => {
  return (
    <div className="pt-28 pb-10 sm:pb-12 text-center max-w-4xl mx-auto px-4 relative z-10 space-y-4">
      {/* Breadcrumbs */}
      <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-gray-300 text-xs text-[#34443B] font-bold shadow-xs">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-[#073B20] flex items-center gap-1 cursor-pointer font-bold transition-colors"
        >
          <Home className="w-3.5 h-3.5 text-[#073B20]" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-[#073B20] font-black capitalize">
          {currentPage.replace('-', ' ')}
        </span>
      </div>

      {/* Category Eyebrow Badge */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F5E9] border border-[#C8E6C9] shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#126B35]" />
          <span className="text-xs font-black text-[#073B20] tracking-[0.2em] uppercase">
            {badge}
          </span>
        </div>
      </div>

      {/* Main Page Title with absolute contrast */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#073B20] leading-[1.1] tracking-tight">
        {title}{' '}
        {highlightText && (
          <span className="text-[#126B35] font-black block sm:inline">
            {highlightText}
          </span>
        )}
      </h1>

      {/* Page Subtitle */}
      <p className="text-sm sm:text-base text-[#34443B] max-w-2xl mx-auto font-medium leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};
