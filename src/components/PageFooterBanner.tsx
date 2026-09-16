import React from 'react';
import { ArrowRight, Sparkles, Sprout } from 'lucide-react';
import { PageId } from '../types';

interface PageFooterBannerProps {
  nextPageId: PageId;
  nextPageTitle: string;
  nextPageDescription: string;
  onNavigate: (page: PageId) => void;
}

export const PageFooterBanner: React.FC<PageFooterBannerProps> = ({
  nextPageId,
  nextPageTitle,
  nextPageDescription,
  onNavigate,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative z-10">
      <div className="rounded-xl bg-white border border-stone-200 p-6 sm:p-8 md:p-10 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 text-left">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            Next Section
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
            {nextPageTitle}
          </h3>
          <p className="text-sm text-stone-600 max-w-xl leading-relaxed">
            {nextPageDescription}
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            onNavigate(nextPageId);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#073B20] hover:bg-[#126B35] transition-colors shrink-0 cursor-pointer shadow-xs"
        >
          <span>Explore {nextPageTitle}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
