import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import type { PageId } from '../../types';

interface PageIntroProps {
  eyebrow: string;
  title: string;
  lead?: string;
  breadcrumb: string;
  onNavigate: (page: PageId) => void;
  /** Optional trailing slot, e.g. a count or a filter control. */
  aside?: ReactNode;
}

/**
 * The header every inner page opens with. Deliberately plain: a breadcrumb, a
 * label, the title, one line of orientation — no banner artwork competing with
 * the products below it.
 */
export function PageIntro({
  eyebrow,
  title,
  lead,
  breadcrumb,
  onNavigate,
  aside,
}: PageIntroProps) {
  return (
    <header className="bg-paper pt-12 lg:pt-16">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <nav aria-label="Breadcrumb" className="eyebrow flex items-center gap-2">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="transition-colors hover:text-pine"
          >
            Home
          </button>
          <ChevronRight className="h-3 w-3 opacity-50" aria-hidden />
          <span className="text-ink">{breadcrumb}</span>
        </nav>

        <div className="mt-10 flex flex-col gap-8 pb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <p className="eyebrow text-clay">{eyebrow}</p>
            <h1 className="mt-4 text-[clamp(2.2rem,5.2vw,3.8rem)] leading-[1.02] text-pine">
              {title}
            </h1>
            {lead && (
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-2">{lead}</p>
            )}
          </div>

          {aside && <div className="w-full lg:w-auto lg:max-w-sm lg:shrink-0">{aside}</div>}
        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="h-px w-full bg-line" />
      </div>
    </header>
  );
}
