import { ArrowRight } from 'lucide-react';
import type { PageId } from '../../types';

interface PageHandoffProps {
  nextPage: PageId;
  label: string;
  title: string;
  description: string;
  onNavigate: (page: PageId) => void;
}

/** The link that carries a reader from the end of one page to the next. */
export function PageHandoff({
  nextPage,
  label,
  title,
  description,
  onNavigate,
}: PageHandoffProps) {
  return (
    <section className="bg-paper pb-20 pt-4 lg:pb-28">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <button
          type="button"
          onClick={() => onNavigate(nextPage)}
          className="group flex w-full flex-col gap-6 border-t border-line py-10 text-left transition-colors hover:border-pine sm:flex-row sm:items-center sm:justify-between lg:py-14"
        >
          <div>
            <p className="eyebrow">{label}</p>
            <h2 className="mt-4 font-display text-[clamp(1.6rem,3.4vw,2.5rem)] text-pine">
              {title}
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-2">{description}</p>
          </div>

          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-line-strong text-pine transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-pine group-hover:bg-pine group-hover:text-paper">
            <ArrowRight className="h-5 w-5" aria-hidden />
          </span>
        </button>
      </div>
    </section>
  );
}
