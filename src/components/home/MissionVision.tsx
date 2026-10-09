import type { PageId } from '../../types';
import { HOME } from '../../data/site';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

const MISSION_BACKGROUNDS = [
  '/images/photos/field-cotton-farmer.webp',
  '/images/photos/field-seedling.webp',
];

interface MissionVisionProps {
  onNavigate: (page: PageId) => void;
}

export function MissionVision({ onNavigate }: MissionVisionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-pine text-paper">
      {/* The company's crop photographs slide past behind the statement. The
          first frame is repeated at the end so the loop has no seam. */}
      <div aria-hidden className="absolute inset-0 -z-20 overflow-hidden">
        <div className="bg-slide flex h-full w-[300%]">
          {[...MISSION_BACKGROUNDS, MISSION_BACKGROUNDS[0]].map((src, index) => (
            <img
              key={`${src}-${index}`}
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-1/3 shrink-0 object-cover"
            />
          ))}
        </div>
      </div>
      {/* Dark enough to keep the statement legible, light enough that the
          crop still reads through. */}
      <div className="absolute inset-0 -z-10 bg-pine-deep/65" aria-hidden />

      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-sage">
            <span>02</span>
            <span aria-hidden className="h-px w-6 bg-current opacity-40" />
          </p>
          <h2 className="mt-4 text-[clamp(1.9rem,4vw,3.15rem)] text-paper">Mission &amp; Vision</h2>

          <blockquote className="mt-8 max-w-5xl">
            <p className="font-display text-[clamp(1.75rem,4.2vw,3.3rem)] leading-[1.14] text-paper">
              {HOME.missionVision}
            </p>
          </blockquote>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-white/12 pt-8">
            <Button variant="onDark" size="sm" onClick={() => onNavigate('about')} withArrow>
              Read our full mission
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
