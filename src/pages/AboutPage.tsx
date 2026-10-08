import { useReducedMotion } from 'motion/react';
import type { PageId } from '../types';
import { ABOUT, COMPANY, WE_STAND_FOR } from '../data/site';
import { PageIntro } from '../components/layout/PageIntro';
import { PageHandoff } from '../components/layout/PageHandoff';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import agronomist from '../assets/images/agronomist_field_inspection_1787652581807.webp';
import harvest from '../assets/images/export_mango_harvest_1787652565787.webp';
import farmer from '../assets/images/indian_farmer_field_1787640498872.webp';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <PageIntro
        breadcrumb="About"
        eyebrow="About us"
        title={COMPANY.promise}
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
                  <dd className="mt-2.5 text-[15px] text-pine">Crops, soil, water &amp; the environment</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative isolate overflow-hidden bg-pine py-20 text-paper lg:py-28">
        {/* Aerial loop of the fields behind the statements, or its first frame
            for visitors who ask for reduced motion. */}
        {reduceMotion ? (
          <img
            src="/videos/about-mission-poster.webp"
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/about-mission-poster.webp"
            aria-hidden
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          >
            <source src="/videos/about-mission.webm" type="video/webm" />
            <source src="/videos/about-mission.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 -z-10 bg-pine-deep/45" aria-hidden />

        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <SectionHeading index="02" eyebrow="Crop Care Bio Solutions" title="Mission & Vision" tone="dark" />

          <div className="mt-14 grid gap-px overflow-hidden border border-white/15 bg-white/15 lg:grid-cols-2">
            <article className="bg-pine-deep/70 p-8 backdrop-blur-sm lg:p-12">
              <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-clay-soft">
                Mission
              </p>
              <p className="mt-5 text-[16px] leading-relaxed text-paper/90">{ABOUT.mission}</p>
            </article>

            <article className="bg-pine-deep/70 p-8 backdrop-blur-sm lg:p-12">
              <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-clay-soft">
                Vision
              </p>
              <p className="mt-5 text-[16px] leading-relaxed text-paper/90">{ABOUT.vision}</p>
            </article>
          </div>
        </div>
      </section>

      {/* We stand for */}
      <section className="bg-paper py-14 lg:py-16">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <SectionHeading index="03" eyebrow="Crop Care Bio Solutions" title="We Stand For" />

          <div className="mt-9 grid gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Two across rather than a stacked list, so all five values sit in
                one screen without scrolling. */}
            <ol className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
              {WE_STAND_FOR.map((value, index) => (
                <Reveal
                  as="li"
                  key={value.title}
                  delay={index * 0.04}
                  className="group border-t border-line py-4"
                >
                  <div className="flex gap-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                    <span className="pt-1.5 font-mono text-[11px] text-ink-3 transition-colors group-hover:text-clay">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-[clamp(1.2rem,1.9vw,1.5rem)] text-pine">
                        {value.title}
                      </h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">
                        {value.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
                <img
                  src={agronomist}
                  alt="An agronomist inspecting a trap in the field"
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
                <img
                  src={harvest}
                  alt="Harvested fruit, clean and unblemished"
                  className="aspect-[4/3] w-full rounded-lg object-cover"
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
