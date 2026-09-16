import type { PageId } from '../../types';
import { HOME } from '../../data/site';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import fieldInspection from '../../assets/images/farm_field_inspection_1787649146636.webp';

interface MissionVisionProps {
  onNavigate: (page: PageId) => void;
}

export function MissionVision({ onNavigate }: MissionVisionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-pine text-paper">
      <img
        src={fieldInspection}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-pine/88" aria-hidden />
      <div className="blueprint absolute inset-0 -z-10 opacity-50" aria-hidden />

      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-sage">
            <span>02</span>
            <span aria-hidden className="h-px w-6 bg-current opacity-40" />
            <span>Mission &amp; Vision</span>
          </p>

          <blockquote className="mt-9 max-w-5xl">
            <p className="font-display text-[clamp(1.75rem,4.2vw,3.3rem)] leading-[1.14] text-paper">
              {HOME.missionVision}
            </p>
          </blockquote>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-white/12 pt-8">
            <Button variant="onDark" size="sm" onClick={() => onNavigate('about')} withArrow>
              Read our full mission
            </Button>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/45">
              Caring for farmers. Caring for nature.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
