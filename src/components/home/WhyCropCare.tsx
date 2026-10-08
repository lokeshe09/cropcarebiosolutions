import type { PageId } from '../../types';
import { WHY_CROP_CARE } from '../../data/site';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import macroLeaf from '../../assets/images/macro_leaf_botanical_1787652599609.webp';

interface WhyCropCareProps {
  onNavigate: (page: PageId) => void;
}

export function WhyCropCare({ onNavigate }: WhyCropCareProps) {
  return (
    <section id="why" className="scroll-mt-24 bg-paper py-10 lg:py-12">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <SectionHeading
          index="01"
          eyebrow="Crop Care Bio Solutions"
          title="Why Crop Care"
          action={
            <Button variant="outline" size="sm" onClick={() => onNavigate('about')} withArrow>
              About the company
            </Button>
          }
        />

        <div className="mt-6 grid items-center gap-6 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <img
              src={macroLeaf}
              alt="Close-up of a healthy leaf surface"
              className="aspect-[16/10] w-full rounded-lg object-cover"
            />
          </Reveal>

          {/* Two by two rather than a stacked list, so all four points sit in
              one screen and nobody has to scroll to find the fourth. */}
          <ol className="grid gap-x-8 sm:grid-cols-2 lg:col-span-7">
            {WHY_CROP_CARE.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 0.05}
                className="group border-t border-line py-3"
              >
                <div className="flex gap-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                  <span className="pt-1.5 font-mono text-[11px] text-ink-3 transition-colors group-hover:text-clay">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-[clamp(1.25rem,1.9vw,1.5rem)] text-pine">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[15px] leading-snug text-ink-2">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
