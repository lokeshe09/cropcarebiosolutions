import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { MessageCircle, Send, X } from 'lucide-react';
import type { Protocol, ProtocolBlock } from '../../types';
import { buildWhatsAppUrl } from '../../data/site';
import { useDismissable } from '../../hooks/useDismissable';
import { Figure } from '../ui/Figure';
import { Button, ButtonLink } from '../ui/Button';

export interface TrapSheetItem {
  name: string;
  /** Small label above the name, e.g. the trap family. */
  label: string;
  imageUrl: string;
  protocol: Protocol;
}

interface TrapSheetProps {
  item: TrapSheetItem | null;
  onClose: () => void;
  onRequestQuote: (itemName: string) => void;
  onZoom: (src: string, alt: string) => void;
}

/** "Lure: Replace …" → a bold "Lure:" followed by the rest. */
function LabelledLine({ text }: { text: string }) {
  const colon = text.indexOf(': ');
  if (colon > 0 && colon <= 28) {
    return (
      <>
        <strong className="font-medium text-ink">{text.slice(0, colon + 1)}</strong>
        {text.slice(colon + 1)}
      </>
    );
  }
  return <>{text}</>;
}

function Block({ block }: { block: ProtocolBlock }) {
  return (
    <section className="border-t border-line pt-6">
      <h3 className="eyebrow text-clay">{block.label}</h3>

      <div className="mt-3.5 space-y-3 text-[15px] leading-relaxed text-ink-2">
        {block.paragraphs?.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}

        {block.lead && <p className="text-ink">{block.lead}</p>}

        {block.items && (
          <ul className="space-y-2">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />
                <span>
                  <LabelledLine text={item} />
                </span>
              </li>
            ))}
          </ul>
        )}

        {block.rows && (
          <dl className="overflow-hidden rounded-lg border border-line">
            {block.rows.map((row, index) => (
              <div
                key={row.label}
                className={`grid grid-cols-[120px_1fr] gap-4 px-4 py-2.5 ${
                  index % 2 === 0 ? 'bg-paper-2' : 'bg-paper'
                }`}
              >
                <dt className="text-ink-3">{row.label}</dt>
                <dd className="text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {block.note && <p className="text-[13px] italic text-ink-3">{block.note}</p>}
      </div>
    </section>
  );
}

/**
 * The full protocol for an insect trap or sticky trap, opened from its card.
 * Same side-sheet pattern as the lure protocol, so the two read alike.
 */
export function TrapSheet({ item, onClose, onRequestQuote, onZoom }: TrapSheetProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = item !== null;

  useDismissable(open, onClose);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[80] flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-pine-deep/55 backdrop-blur-[2px]"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={item.name}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-full w-full max-w-[680px] flex-col bg-paper shadow-[0_0_80px_-20px_rgba(14,36,28,0.5)]"
          >
            <header className="flex items-start justify-between gap-6 border-b border-line px-6 py-5 sm:px-9">
              <div>
                <p className="eyebrow">{item.label}</p>
                <h2 className="mt-2.5 font-display text-[clamp(1.5rem,3.4vw,2rem)] leading-tight text-pine">
                  {item.name}
                </h2>
              </div>

              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line-strong text-ink transition-colors hover:border-pine hover:text-pine"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-6 pb-10 pt-7 sm:px-9">
              <figure className="group m-0">
                <Figure
                  src={item.imageUrl}
                  alt={item.name}
                  ratio="aspect-[16/10]"
                  className="rounded-lg"
                  onZoom={onZoom}
                />
              </figure>

              <p className="mt-7 font-display text-[clamp(1.2rem,2.2vw,1.45rem)] leading-snug text-pine">
                {item.protocol.heading}
              </p>

              <div className="mt-4 space-y-4 text-[16px] leading-relaxed text-ink-2">
                {item.protocol.intro.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 space-y-7">
                {item.protocol.blocks.map((block) => (
                  <Block key={block.label} block={block} />
                ))}
              </div>
            </div>

            <footer className="flex flex-col gap-2.5 border-t border-line bg-paper-2 px-6 py-5 sm:flex-row sm:px-9">
              <Button
                className="flex-1"
                onClick={() => {
                  onClose();
                  onRequestQuote(item.name);
                }}
              >
                <Send className="h-4 w-4" aria-hidden />
                Request a quote
              </Button>

              <ButtonLink
                className="flex-1"
                variant="outline"
                external
                href={buildWhatsAppUrl(
                  `Hello Crop Care Bio Solutions, I would like details and pricing for the ${item.name}.`,
                )}
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp
              </ButtonLink>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
