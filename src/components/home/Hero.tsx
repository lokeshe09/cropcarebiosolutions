import { ArrowDown } from 'lucide-react';
import type { PageId } from '../../types';
import { COMPANY, HOME } from '../../data/site';
import { Button } from '../ui/Button';
import { PhotoColumns } from './PhotoColumns';

interface HeroProps {
  onNavigate: (page: PageId) => void;
  onZoom: (src: string, alt: string) => void;
}

/**
 * The masthead: the company's welcome held steady on the left, the field
 * photography drifting past on the right. Both are on screen the moment the
 * page opens.
 */
export function Hero({ onNavigate, onZoom }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-pine-deep text-paper">
      {/* A low warm light behind the type, so the panel has depth rather than
          sitting as one flat field of green. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle,rgba(180,85,45,0.20),transparent_68%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/3 -z-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(63,107,78,0.35),transparent_70%)] blur-3xl"
      />
      <div className="grain absolute inset-0 z-10 opacity-20" aria-hidden />

      <div className="relative mx-auto grid max-w-[1560px] grid-cols-1 lg:min-h-[calc(100svh-112px)] lg:grid-cols-12">
        {/* Welcome */}
        <div className="relative z-20 flex flex-col justify-center px-5 pb-12 pt-14 sm:px-8 lg:col-span-6 lg:py-20 lg:pl-14 lg:pr-12 xl:col-span-5 xl:pl-20">
          <p className="eyebrow flex items-center gap-3 text-sage">
            <span aria-hidden className="h-px w-8 bg-current opacity-50" />
            Welcome
          </p>

          <h1 className="mt-7 max-w-[13ch] text-[clamp(2.5rem,5.4vw,4.4rem)] leading-[0.98] tracking-[-0.032em] text-paper">
            Every seed a farmer plants{' '}
            <span className="italic text-clay-soft">carries hope.</span>
          </h1>

          <div className="mt-8 max-w-md space-y-4 text-[17px] leading-relaxed text-paper/75">
            {HOME.welcome.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button variant="onDark" onClick={() => onNavigate('contact')} withArrow>
              Contact us
            </Button>
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="link-rule px-2 py-3.5 text-sm text-paper/80 transition-colors hover:text-paper"
            >
              Know more
            </button>
          </div>

          <figure className="mt-12 max-w-sm border-t border-white/12 pt-6">
            <blockquote className="flex items-start gap-3 text-[14px] italic leading-snug text-paper/70">
              <span aria-hidden className="mt-2.5 h-px w-6 shrink-0 bg-clay-soft" />
              <span>&ldquo;{HOME.heroCaption}&rdquo;</span>
            </blockquote>
            <figcaption className="mt-3 pl-9 font-mono text-[10px] uppercase tracking-[0.18em] text-sage">
              {COMPANY.tagline}
            </figcaption>
          </figure>
        </div>

        {/* Photography */}
        <div className="relative h-[64svh] min-h-[400px] lg:col-span-6 lg:h-auto xl:col-span-7">
          <PhotoColumns onZoom={onZoom} />
        </div>
      </div>

      <div className="relative z-20 border-t border-white/12">
        <div className="mx-auto flex max-w-[1560px] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-14 xl:px-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/45">
            Pheromone lures · Insect traps · Sticky traps
          </p>
          <a
            href="#why"
            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/45 transition-colors hover:text-paper"
          >
            Scroll
            <ArrowDown className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
