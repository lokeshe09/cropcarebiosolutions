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
    <div className="pt-10 sm:pt-14 pb-8 sm:pb-10 text-center max-w-4xl mx-auto px-4 relative z-10 space-y-3 sm:space-y-4">
      {/* Clean Minimal Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-stone-500 font-medium">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="hover:text-stone-900 transition-colors cursor-pointer flex items-center gap-1"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-stone-300" />
        <span className="text-stone-800 font-semibold capitalize">
          {currentPage.replace('-', ' ')}
        </span>
      </nav>

      {/* Refined Category Eyebrow */}
      <div className="text-xs font-semibold tracking-wider uppercase text-emerald-800">
        {badge}
      </div>

      {/* Main Page Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
        {title}{' '}
        {highlightText && (
          <span className="text-[#073B20] block sm:inline">
            {highlightText}
          </span>
        )}
      </h1>

      {/* Page Subtitle */}
      <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};
