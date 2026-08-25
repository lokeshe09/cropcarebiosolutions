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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 relative z-10">
      <div className="rounded-[32px] bg-gradient-to-r from-white/70 via-white/55 to-[#E9EDC9]/50 backdrop-blur-2xl border border-white/90 p-6 sm:p-8 md:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9EDC9] text-[#283618] text-[10px] font-bold uppercase tracking-wider border border-[#606C38]/20">
            <Sprout className="w-3 h-3 text-[#606C38]" />
            <span>Continue Journey</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#283618]">
            Next Section: {nextPageTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#555] max-w-xl font-light">
            {nextPageDescription}
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            onNavigate(nextPageId);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#606C38] hover:bg-[#283618] shadow-lg shadow-[#606C38]/25 transition-all duration-300 hover:scale-[1.03] shrink-0 cursor-pointer"
        >
          <span>Explore {nextPageTitle}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
