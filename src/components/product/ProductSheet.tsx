import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { MessageCircle, Send, X } from 'lucide-react';
import type { Product } from '../../types';
import { buildWhatsAppUrl } from '../../data/site';
import { useDismissable } from '../../hooks/useDismissable';
import { Figure } from '../ui/Figure';
import { Button, ButtonLink } from '../ui/Button';

interface ProductSheetProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
  onZoom: (src: string, alt: string) => void;
}

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="border-t border-line pt-7">
      <h3 className="eyebrow">{label}</h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}

/**
 * The product protocol, opened from a card. A side sheet rather than a centred
 * dialog: the content is long, and a single scrolling column reads better than
 * a box that has to fight the viewport.
 *
 * It shows only what the company product sheet states — description, life,
 * crops, how to apply, storage and disposal, and the traps it fits.
 */
export function ProductSheet({
  product,
  onClose,
  onRequestQuote,
  onZoom,
}: ProductSheetProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = product !== null;

  useDismissable(open, onClose);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  return (
    <AnimatePresence>
      {product && (
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
            aria-label={product.name}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-full w-full max-w-[680px] flex-col bg-paper shadow-[0_0_80px_-20px_rgba(14,36,28,0.5)]"
          >
            <header className="flex items-start justify-between gap-6 border-b border-line px-6 py-5 sm:px-9">
              <div>
                <p className="eyebrow flex items-center gap-2.5">
                  <span className="text-clay">{product.code}</span>
                  <span aria-hidden className="h-px w-4 bg-line-strong" />
                  <span>{product.pestCommonName}</span>
                </p>
                <h2 className="mt-2.5 font-display text-[clamp(1.5rem,3.4vw,2rem)] leading-tight text-pine">
                  {product.name}
                </h2>
                {product.scientificName && (
                  <p className="mt-1 font-display text-[15px] italic text-ink-3">
                    {product.scientificName}
                  </p>
                )}
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
              <div className="grid grid-cols-2 gap-3">
                <figure className="group m-0">
                  <Figure
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    ratio="aspect-[4/3]"
                    onZoom={product.imageUrl ? onZoom : undefined}
                  />
                  <figcaption className="eyebrow mt-2.5">The lure</figcaption>
                </figure>

                <figure className="group m-0">
                  <Figure
                    src={product.trapImageUrl}
                    alt={`Trap used with the ${product.name}`}
                    ratio="aspect-[4/3]"
                    onZoom={product.trapImageUrl ? onZoom : undefined}
                  />
                  <figcaption className="eyebrow mt-2.5">Fits this trap</figcaption>
                </figure>
              </div>

              <div className="mt-8 space-y-4 text-[16px] leading-relaxed text-ink-2">
                {product.description.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>

              <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
                {product.fieldLife && (
                  <div className="bg-paper p-5">
                    <dt className="eyebrow">Field life</dt>
                    <dd className="mt-2 text-[15px] leading-snug text-pine">
                      {product.fieldLife}
                    </dd>
                  </div>
                )}
                {product.shelfLife && (
                  <div className="bg-paper p-5">
                    <dt className="eyebrow">Shelf life</dt>
                    <dd className="mt-2 text-[15px] leading-snug text-pine">
                      {product.shelfLife}
                    </dd>
                  </div>
                )}
                {product.trapsPerAcre && (
                  <div className="bg-paper p-5">
                    <dt className="eyebrow">Traps</dt>
                    <dd className="mt-2 text-[15px] leading-snug text-pine">
                      {product.trapsPerAcre}
                    </dd>
                  </div>
                )}
                {product.activeIngredient && (
                  <div className="bg-paper p-5">
                    <dt className="eyebrow">Active ingredient</dt>
                    <dd className="mt-2 text-[15px] leading-snug text-pine">
                      {product.activeIngredient}
                    </dd>
                  </div>
                )}
              </dl>

              <div className="mt-9 space-y-7">
                {product.modeOfAction && (
                  <Block label="Mode of action">
                    <p className="text-[15px] leading-relaxed text-ink-2">
                      {product.modeOfAction}
                    </p>
                  </Block>
                )}

                <Block label="Target crops">
                  {product.cropGroups ? (
                    <div className="space-y-5">
                      {product.cropGroups.map((group) => (
                        <div key={group.label}>
                          <p className="text-[13px] font-semibold text-pine">{group.label}</p>
                          <ul className="mt-2 flex flex-wrap gap-1.5">
                            {group.crops.map((crop) => (
                              <li
                                key={crop}
                                className="border border-line bg-paper-2 px-2.5 py-1 text-[13px] text-ink-2"
                              >
                                {crop}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="flex flex-wrap gap-1.5">
                      {product.targetCrops.map((crop) => (
                        <li
                          key={crop}
                          className="border border-line bg-paper-2 px-2.5 py-1 text-[13px] text-ink-2"
                        >
                          {crop}
                        </li>
                      ))}
                    </ul>
                  )}

                  {product.cropNote && (
                    <p className="mt-5 border-l-2 border-clay pl-4 text-[15px] leading-relaxed text-ink-2">
                      {product.cropNote}
                    </p>
                  )}
                </Block>

                <Block label="How to apply">
                  <ol className="space-y-3.5">
                    {product.application.map((step, index) => (
                      <li key={step} className="flex gap-4 text-[15px] leading-relaxed text-ink-2">
                        <span className="pt-0.5 font-mono text-[12px] text-clay">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </Block>

                {product.storage.length > 0 && (
                  <Block label="Storage & disposal">
                    <ul className="space-y-3">
                      {product.storage.map((rule) => (
                        <li
                          key={rule}
                          className="flex gap-4 text-[15px] leading-relaxed text-ink-2"
                        >
                          <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-line-strong" />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </Block>
                )}

                <Block label="Use with">
                  <ul className="flex flex-wrap gap-2">
                    {product.recommendedTraps.map((trap) => (
                      <li
                        key={trap}
                        className="rounded-full border border-line-strong px-3.5 py-1.5 text-[13px] text-pine"
                      >
                        {trap}
                      </li>
                    ))}
                  </ul>
                </Block>
              </div>
            </div>

            <footer className="flex flex-col gap-2.5 border-t border-line bg-paper-2 px-6 py-5 sm:flex-row sm:px-9">
              <Button
                className="flex-1"
                onClick={() => {
                  onClose();
                  onRequestQuote(product.name);
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
                  `Hello Crop Care Bio Solutions, I would like details and pricing for the ${product.name}.`,
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
