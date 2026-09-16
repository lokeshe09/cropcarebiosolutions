import type { PageId } from '../types';
import { ABOUT, WE_STAND_FOR } from '../data/site';
import { PageIntro } from '../components/layout/PageIntro';
import { PageHandoff } from '../components/layout/PageHandoff';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import agronomist from '../assets/images/agronomist_field_inspection_1787652581807.webp';
import harvest from '../assets/images/export_mango_harvest_1787652565787.webp';
import farmer from '../assets/images/indian_farmer_field_1787640498872.webp';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <>
      <PageIntro
        breadcrumb="About"
        eyebrow="About us"
        title="Caring for farmers. Caring for nature."
        lead={ABOUT.welcome}
        onNavigate={onNavigate}
      />

      {/* About the company */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <figure className="sticky top-28">
                <img
                  src={farmer}
                  alt="A farmer walking through a standing crop"
                  className="aspect-[4/5] w-full object-cover"
                />
              </figure>
            </Reveal>

            <div className="lg:col-span-7">
              <SectionHeading index="01" eyebrow="Crop Care Bio Solutions" title="About the Company" />

              <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-ink-2">
                {ABOUT.company.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>

              <dl className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
                <div className="bg-paper p-6">
                  <dt className="eyebrow">What we do</dt>
                  <dd className="mt-2.5 text-[15px] text-pine">Manufacturer &amp; exporter</dd>
                </div>
                <div className="bg-paper p-6">
                  <dt className="eyebrow">What we make</dt>
                  <dd className="mt-2.5 text-[15px] text-pine">Pheromone lures &amp; insect traps</dd>
                </div>
                <div className="bg-paper p-6">
                  <dt className="eyebrow">What it protects</dt>
                  <dd className="mt-2.5 text-[15px] text-pine">Soil, water and the harvest</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-pine py-20 text-paper lg:py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <SectionHeading index="02" eyebrow="Crop Care Bio Solutions" title="Mission & Vision" tone="dark" />

          <div className="mt-14 grid gap-px overflow-hidden border border-white/12 bg-white/12 lg:grid-cols-2">
            <article className="bg-pine p-8 lg:p-12">
              <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-clay-soft">
                Mission
              </p>
              <p className="mt-5 text-[16px] leading-relaxed text-paper/70">{ABOUT.mission}</p>
            </article>

            <article className="bg-pine p-8 lg:p-12">
              <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-clay-soft">
                Vision
              </p>
              <p className="mt-5 text-[16px] leading-relaxed text-paper/70">{ABOUT.vision}</p>
            </article>
          </div>
        </div>
      </section>

      {/* We stand for */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <SectionHeading
            index="03"
            eyebrow="Crop Care Bio Solutions"
            title="We Stand For"
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <ol className="lg:col-span-7">
              {WE_STAND_FOR.map((value, index) => (
                <Reveal
                  as="li"
                  key={value.title}
                  delay={index * 0.05}
                  className="group border-t border-line last:border-b"
                >
                  <div className="flex gap-6 py-7 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 sm:gap-10">
                    <span className="pt-1.5 font-mono text-[12px] text-ink-3 transition-colors group-hover:text-clay">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-[clamp(1.3rem,2.2vw,1.65rem)] text-pine">
                        {value.title}
                      </h3>
                      <p className="mt-2.5 max-w-lg text-[15px] leading-relaxed text-ink-2">
                        {value.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal className="lg:col-span-5">
              <div className="grid gap-4">
                <img
                  src={agronomist}
                  alt="An agronomist inspecting a trap in the field"
                  className="aspect-[4/3] w-full object-cover"
                />
                <img
                  src={harvest}
                  alt="Harvested fruit, clean and unblemished"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing message */}
      <section className="bg-paper-3 py-20 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Closing Message</p>
            <blockquote className="mt-8">
              <p className="font-display text-[clamp(1.7rem,4vw,2.9rem)] leading-[1.16] text-pine">
                &ldquo;{ABOUT.closing}&rdquo;
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Reserved: content supplied by the company. */}
      <section className="bg-paper-2 py-16 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="flex flex-col gap-6 border border-dashed border-line-strong p-8 sm:flex-row sm:items-center sm:justify-between lg:p-12">
            <div className="max-w-2xl">
              <p className="eyebrow text-clay">In preparation</p>
              <h2 className="mt-4 font-display text-[clamp(1.5rem,3vw,2.1rem)] text-pine">
                Pheromone Longevity &amp; Safe Application Guide
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                A practical guide to how long a lure stays active, what shortens it, and how
                to handle and store lures safely on the farm. Being written now.
              </p>
            </div>

            <Button variant="outline" size="sm" onClick={() => onNavigate('contact')} withArrow>
              Ask our team meanwhile
            </Button>
          </div>
        </div>
      </section>

      <PageHandoff
        nextPage="products"
        label="Next"
        title="Pheromone Lures"
        description="Twelve species-specific lures, with field life, target crops, how to apply them and how to store them."
        onNavigate={onNavigate}
      />
    </>
  );
}
