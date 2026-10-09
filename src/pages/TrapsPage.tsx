import { useCallback, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { PageId } from '../types';
import { BIO_TOOLS, STICKY_INTRO, TRAPS } from '../data/traps';
import { TRAP_PROTOCOLS } from '../data/trapProtocols';
import { TrapSheet, type TrapSheetItem } from '../components/product/TrapSheet';
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

/** Field practice notes supplied by the company. */
const FIELD_NOTES = [
  {
    title: 'Choose the Right Location',
    body: 'Keep pheromone lures away from direct, strong sunlight. Place the trap in the shaded part of the crop canopy or on the shaded side of a support pole to help maintain lure performance.',
  },
  {
    title: 'Maintain the Recommended Height',
    body: 'Install traps at the appropriate height according to the target pest, crop growth stage, and recommended application guidelines.',
  },
  {
    title: 'Use the Recommended Lure',
    body: 'Use the appropriate lure for the target pest and follow the recommended lure-to-trap combination for effective monitoring and trapping.',
  },
  {
    title: 'Replace Lures on Schedule',
    body: 'Lures have a defined active life. Replace them at the recommended interval to maintain consistent attraction.',
  },
  {
    title: 'Empty and Monitor Regularly',
    body: 'Check and clear trapped insects regularly. Recording the catch helps monitor pest activity, identify increasing pest pressure, and decide when further action may be needed.',
  },
  {
    title: 'Keep Traps Clean & Functional',
    body: 'Remove trapped insects and debris regularly. For water-based traps, maintain the required water level and replace the trapping solution as needed.',
  },
];

export function TrapsPage({ onNavigate, onRequestQuote, onZoom }: TrapsPageProps) {
  const traps = TRAPS;
  const [sheet, setSheet] = useState<TrapSheetItem | null>(null);

  const closeSheet = useCallback(() => setSheet(null), []);

  const openProtocol = (id: string, name: string, label: string, imageUrl: string) => {
    const protocol = TRAP_PROTOCOLS[id];
    if (protocol) setSheet({ name, label, imageUrl, protocol });
  };

  return (
    <>
      <PageIntro
        breadcrumb="Insect Traps"
        eyebrow="Insect Traps"
        title="The housing the lure works from."
        lead="A lure is only as good as the trap around it. Each of these is built for a particular flight habit, crop height and weather."
        onNavigate={onNavigate}
      />

      <section className="bg-paper pb-20 pt-12 lg:pb-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <ul className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {traps.map((trap, index) => (
              <Reveal as="li" key={trap.id} delay={(index % 3) * 0.06}>
                <article id={trap.id} className="group flex h-full scroll-mt-28 flex-col">
                  <Figure
                    src={trap.imageUrl}
                    alt={trap.name}
                    ratio="aspect-[4/3]"
                    onZoom={onZoom}
                  />

                  <div className="mt-5 flex flex-1 flex-col border-t border-line pt-4">
                    <p className="eyebrow">{trap.family.replace('-', ' ')}</p>

                    <h2 className="mt-3 font-display text-[22px] leading-tight text-pine">
                      <button
                        type="button"
                        onClick={() =>
                          openProtocol(trap.id, trap.name, trap.family.replace('-', ' '), trap.imageUrl)
                        }
                        className="link-rule text-left"
                      >
                        {trap.name}
                      </button>
                    </h2>

                    {TRAP_PROTOCOLS[trap.id] && (
                      <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                        {TRAP_PROTOCOLS[trap.id].heading}
                      </p>
                    )}

                    <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
                      <button
                        type="button"
                        onClick={() =>
                          openProtocol(trap.id, trap.name, trap.family.replace('-', ' '), trap.imageUrl)
                        }
                        className="inline-flex items-center gap-2 rounded-full bg-pine px-5 py-2.5 text-[13px] font-medium text-paper transition-colors hover:bg-pine-soft"
                      >
                        View protocol
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                      </button>
                      <button
                        type="button"
                        onClick={() => onRequestQuote(trap.name)}
                        className="link-rule text-[13px] text-clay"
                      >
                        Request a quote
                      </button>
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
            eyebrow={STICKY_INTRO.eyebrow}
            title={STICKY_INTRO.title}
            lead={STICKY_INTRO.lead}
          />

          <ul className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {BIO_TOOLS.map((tool, index) => (
              <Reveal as="li" key={tool.id} delay={(index % 3) * 0.06}>
                <article id={tool.id} className="group flex h-full scroll-mt-28 flex-col">
                  <Figure
                    src={tool.imageUrl}
                    alt={tool.name}
                    ratio="aspect-[4/3]"
                    className="bg-paper"
                    onZoom={onZoom}
                  />

                  <div className="mt-5 flex flex-1 flex-col border-t border-line-strong pt-4">
                    <h3 className="font-display text-[20px] leading-tight text-pine">
                      <button
                        type="button"
                        onClick={() => openProtocol(tool.id, tool.name, 'Sticky trap', tool.imageUrl)}
                        className="link-rule text-left"
                      >
                        {tool.name}
                      </button>
                    </h3>

                    {TRAP_PROTOCOLS[tool.id] && (
                      <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                        {TRAP_PROTOCOLS[tool.id].heading}
                      </p>
                    )}

                    <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
                      <button
                        type="button"
                        onClick={() => openProtocol(tool.id, tool.name, 'Sticky trap', tool.imageUrl)}
                        className="inline-flex items-center gap-2 rounded-full bg-pine px-5 py-2.5 text-[13px] font-medium text-paper transition-colors hover:bg-pine-soft"
                      >
                        View protocol
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                      </button>
                      <button
                        type="button"
                        onClick={() => onRequestQuote(tool.name)}
                        className="link-rule text-[13px] text-clay"
                      >
                        Request a quote
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Field practice */}
      <section className="bg-pine py-14 text-paper lg:py-16">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="In the field"
            title="Six factors that help traps work effectively"
            tone="dark"
          />

          <ol className="mt-8 grid gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-3">
            {FIELD_NOTES.map((note, index) => (
              <li key={note.title} className="bg-pine p-6">
                <span className="font-mono text-[12px] text-clay-soft">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2.5 font-display text-[21px] text-paper">{note.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-paper/65">{note.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <TrapSheet
        item={sheet}
        onClose={closeSheet}
        onRequestQuote={onRequestQuote}
        onZoom={onZoom}
      />

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
