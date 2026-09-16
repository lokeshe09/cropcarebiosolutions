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
    <section id="why" className="scroll-mt-24 bg-paper py-20 lg:py-28">
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

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* A single close-up carries the whole section; four icons would not. */}
          <Reveal className="lg:col-span-5">
            <figure className="sticky top-28">
              <img
                src={macroLeaf}
                alt="Close-up of a healthy leaf surface"
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
          </Reveal>

          <ol className="lg:col-span-7">
            {WHY_CROP_CARE.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 0.06}
                className="group border-t border-line last:border-b"
              >
                <div className="flex gap-6 py-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 sm:gap-10 lg:py-10">
                  <span className="pt-2 font-mono text-[12px] text-ink-3 transition-colors group-hover:text-clay">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] text-pine">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-md text-[16px] leading-relaxed text-ink-2">
                      {item.body}
                    </p>
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
