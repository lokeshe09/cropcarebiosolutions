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
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/60 border border-white/80 backdrop-blur-md text-[11px] text-[#666]">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-[#283618] flex items-center gap-1 cursor-pointer font-medium"
        >
          <Home className="w-3 h-3 text-[#606C38]" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3 h-3 text-[#aaa]" />
        <span className="text-[#283618] font-bold capitalize">
          {currentPage.replace('-', ' ')}
        </span>
      </div>

      {/* Category Eyebrow Badge */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-white/70 backdrop-blur-md shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#606C38]" />
          <span className="text-[11px] font-semibold text-[#606C38] tracking-[0.2em] uppercase">
            {badge}
          </span>
        </div>
      </div>

      {/* Main Page Title */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#283618] leading-[1.15] tracking-tight">
        {title}{' '}
        {highlightText && (
          <span className="text-gradient-natural italic font-medium">
            {highlightText}
          </span>
        )}
      </h1>

      {/* Page Subtitle */}
      <p className="text-sm sm:text-base text-[#555] max-w-2xl mx-auto font-light leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};
