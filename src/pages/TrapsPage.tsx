import { useState } from 'react';
import type { PageId, TrapFamily } from '../types';
import { BIO_TOOLS, TRAPS } from '../data/traps';
import { PageIntro } from '../components/layout/PageIntro';
import { PageHandoff } from '../components/layout/PageHandoff';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Figure } from '../components/ui/Figure';
import { Reveal } from '../components/ui/Reveal';

interface TrapsPageProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: (itemName: string) => void;
  onZoom: (src: string, alt: string) => void;
}

const FAMILIES: { id: TrapFamily | 'all'; label: string }[] = [
  { id: 'all', label: 'All traps' },
  { id: 'fruit-fly', label: 'Fruit fly' },
  { id: 'funnel', label: 'Funnel & bucket' },
  { id: 'water', label: 'Water' },
  { id: 'delta', label: 'Delta' },
  { id: 'palm', label: 'Palm' },
  { id: 'solar', label: 'Solar' },
];

/** Practice notes drawn from the application instructions on the product sheets. */
const FIELD_NOTES = [
  {
    title: 'Hang in shade',
    body: 'Direct midday sun shortens the life of a lure. Put traps in the shaded part of the canopy, or on the shaded side of a pole.',
  },
  {
    title: 'Keep above the crop',
    body: 'Moth traps work at 30–45 cm above the canopy. Raise the stake as the crop grows, or the trap disappears into the foliage.',
  },
  {
    title: 'One lure per trap',
    body: 'Two lures in one trap do not double the catch. Spread traps across the field instead, and keep the spacing even.',
  },
  {
    title: 'Replace on the calendar',
    body: 'A lure that has run out looks exactly like one that is working. Note the date it went in and change it on schedule.',
  },
  {
    title: 'Empty and count',
    body: 'Clear the catch every week or two. The count is what tells you whether pressure is rising and action is needed.',
  },
  {
    title: 'Top up water traps',
    body: 'Check the level after hot spells and heavy rain, and keep a thin film of oil or soap on the surface.',
  },
];

export function TrapsPage({ onNavigate, onRequestQuote, onZoom }: TrapsPageProps) {
  const [family, setFamily] = useState<TrapFamily | 'all'>('all');
  const traps = family === 'all' ? TRAPS : TRAPS.filter((trap) => trap.family === family);

  return (
    <>
      <PageIntro
        breadcrumb="Insect Traps"
        eyebrow="Insect Traps"
        title="The housing the lure works from."
        lead="A lure is only as good as the trap around it. Each of these is built for a particular flight habit, crop height and weather."
        onNavigate={onNavigate}
      />

      <section className="bg-paper py-10">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <ul className="flex flex-wrap gap-2">
            {FAMILIES.map((item) => {
              const active = family === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setFamily(item.id)}
                    aria-pressed={active}
                    className={`rounded-full border px-4 py-2 text-[13px] transition-colors ${
                      active
                        ? 'border-pine bg-pine text-paper'
                        : 'border-line-strong text-ink-2 hover:border-pine hover:text-pine'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-paper pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <ul className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {traps.map((trap, index) => (
              <Reveal as="li" key={trap.id} delay={(index % 3) * 0.06}>
                <article className="group flex h-full flex-col">
                  <Figure
                    src={trap.imageUrl}
                    alt={trap.name}
                    ratio="aspect-[4/3]"
                    onZoom={onZoom}
                  />

                  <div className="mt-5 flex flex-1 flex-col border-t border-line pt-4">
                    <p className="eyebrow">{trap.family.replace('-', ' ')}</p>

                    <h2 className="mt-3 font-display text-[22px] leading-tight text-pine">
                      {trap.name}
                    </h2>

                    <p className="mt-2 text-[13px] leading-relaxed text-ink-3">
                      Best for {trap.bestFor.toLowerCase()}
                    </p>

                    <p className="mt-4 text-[14px] leading-relaxed text-ink-2">
                      {trap.description}
                    </p>

                    <dl className="mt-5 space-y-2.5 border-t border-line pt-4 text-[13px]">
                      {trap.recommendedHeight && (
                        <div className="flex gap-3">
                          <dt className="w-24 shrink-0 text-ink-3">Height</dt>
                          <dd className="text-ink">{trap.recommendedHeight}</dd>
                        </div>
                      )}
                      {trap.trapsPerAcre && (
                        <div className="flex gap-3">
                          <dt className="w-24 shrink-0 text-ink-3">Density</dt>
                          <dd className="text-ink">{trap.trapsPerAcre}</dd>
                        </div>
                      )}
                      {trap.servicing && (
                        <div className="flex gap-3">
                          <dt className="w-24 shrink-0 text-ink-3">Servicing</dt>
                          <dd className="text-ink">{trap.servicing}</dd>
                        </div>
                      )}
                    </dl>

                    <ul className="mt-5 space-y-2">
                      {trap.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-3 text-[13px] leading-relaxed text-ink-2"
                        >
                          <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-clay" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex items-center gap-5 pt-6">
                      <button
                        type="button"
                        onClick={() => onRequestQuote(trap.name)}
                        className="rounded-full bg-pine px-5 py-2.5 text-[13px] font-medium text-paper transition-colors hover:bg-pine-soft"
                      >
                        Request a quote
                      </button>
                      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
                        {trap.suitableLures.join(' · ')}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Sticky traps and adhesives */}
      <section className="bg-paper-2 py-20 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Sticky traps & adhesives"
            title="For the pests a pheromone will not call."
            lead="Thrips, whiteflies and aphids answer to colour rather than scent. These sit alongside the lures in the same programme."
          />

          <ul className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {BIO_TOOLS.map((tool, index) => (
              <Reveal as="li" key={tool.id} delay={(index % 4) * 0.06}>
                <article className="group flex h-full flex-col">
                  <Figure
                    src={tool.imageUrl}
                    alt={tool.name}
                    ratio="aspect-[4/3]"
                    className="bg-paper"
                    onZoom={onZoom}
                  />

                  <div className="mt-5 flex flex-1 flex-col border-t border-line-strong pt-4">
                    <h3 className="font-display text-[20px] leading-tight text-pine">
                      {tool.name}
                    </h3>
                    <p className="mt-1.5 text-[13px] text-ink-3">{tool.tagline}</p>
                    <p className="mt-4 text-[14px] leading-relaxed text-ink-2">
                      {tool.description}
                    </p>

                    <dl className="mt-5 space-y-2 border-t border-line pt-4 text-[13px]">
                      {tool.specs.map((spec) => (
                        <div key={spec.label} className="flex gap-3">
                          <dt className="w-20 shrink-0 text-ink-3">{spec.label}</dt>
                          <dd className="text-ink">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>

                    <p className="mt-5 text-[13px] leading-relaxed text-ink-2">
                      <span className="text-ink-3">Catches:</span>{' '}
                      {tool.targetPests.join(', ')}
                    </p>

                    <button
                      type="button"
                      onClick={() => onRequestQuote(tool.name)}
                      className="link-rule mt-auto pt-6 text-left text-[13px] text-clay"
                    >
                      Request a quote
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Field practice */}
      <section className="bg-pine py-20 text-paper lg:py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="In the field"
            title="Six things that decide whether a trap works."
            tone="dark"
          />

          <ol className="mt-14 grid gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-3">
            {FIELD_NOTES.map((note, index) => (
              <li key={note.title} className="bg-pine p-8">
                <span className="font-mono text-[12px] text-clay-soft">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-[21px] text-paper">{note.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-paper/65">{note.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PageHandoff
        nextPage="crop-solutions"
        label="Next"
        title="Crop Solutions"
        description="Start from the crop you grow, see what attacks it, and find the lure and trap that answer it."
        onNavigate={onNavigate}
      />
    </>
  );
}
