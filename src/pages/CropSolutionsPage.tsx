import { useMemo, useState } from 'react';
import { AlertTriangle, ArrowRight, Search, X } from 'lucide-react';
import type { PageId, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { CROP_SOLUTIONS } from '../data/site';
import { PageIntro } from '../components/layout/PageIntro';
import { PageHandoff } from '../components/layout/PageHandoff';
import { Figure } from '../components/ui/Figure';
import { Reveal } from '../components/ui/Reveal';

interface CropSolutionsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenProduct: (product: Product) => void;
  onRequestQuote: (productName: string) => void;
}

export function CropSolutionsPage({
  onNavigate,
  onOpenProduct,
  onRequestQuote,
}: CropSolutionsPageProps) {
  const [activeId, setActiveId] = useState(CROP_SOLUTIONS[0].id);
  const [query, setQuery] = useState('');

  const active = CROP_SOLUTIONS.find((group) => group.id === activeId) ?? CROP_SOLUTIONS[0];
  const needle = query.trim().toLowerCase();

  /* A crop search cuts across the families, so it answers above the tabs
     rather than inside the one that happens to be open. */
  const searchMatches = useMemo(() => {
    if (!needle) return [];
    return PRODUCTS.filter((product) =>
      [product.name, product.pestCommonName, ...product.targetCrops]
        .join(' ')
        .toLowerCase()
        .includes(needle),
    );
  }, [needle]);

  const activeProducts = active.lureIds
    .map((id) => PRODUCTS.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product));

  return (
    <>
      <PageIntro
        breadcrumb="Crop Solutions"
        eyebrow="Crop Solutions"
        title="Start from what you grow."
        lead="Pick your crop family to see the pest that costs you most, what its damage looks like, and the lure and trap that answer it."
        onNavigate={onNavigate}
        aside={
          <label className="block">
            <span className="sr-only">Search by crop</span>
            <span className="relative block">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-3"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search a crop"
                className="w-full rounded-full border border-line-strong bg-paper py-3.5 pl-11 pr-11 text-[14px] text-ink placeholder:text-ink-3 focus:border-pine focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-ink-3 transition-colors hover:text-pine"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </span>
          </label>
        }
      />

      {needle && (
        <section className="bg-paper-2 py-10">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
            <p className="eyebrow">
              {searchMatches.length} {searchMatches.length === 1 ? 'match' : 'matches'} for
              &ldquo;{query}&rdquo;
            </p>

            {searchMatches.length === 0 ? (
              <p className="mt-4 text-[15px] text-ink-2">
                We do not list a lure for that crop yet. Tell us what you grow and our team
                will advise directly.
              </p>
            ) : (
              <ul className="mt-5 flex flex-wrap gap-2">
                {searchMatches.map((product) => (
                  <li key={product.id}>
                    <button
                      type="button"
                      onClick={() => onOpenProduct(product)}
                      className="flex items-center gap-2 rounded-full border border-line-strong bg-paper px-4 py-2 text-[13px] text-pine transition-colors hover:border-pine"
                    >
                      <span className="font-mono text-[11px] text-clay">{product.code}</span>
                      {product.name}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* Crop family tabs — large, clearly a choice, always in reach. */}
      <section className="sticky top-[var(--header-offset,68px)] z-30 border-b border-line bg-paper/95 backdrop-blur-md transition-[top] duration-300 ease-out">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="rail flex gap-2 overflow-x-auto py-3.5" role="tablist" aria-label="Crop families">
            {CROP_SOLUTIONS.map((group) => {
              const isActive = group.id === activeId;
              return (
                <button
                  key={group.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(group.id)}
                  className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2.5 text-[14px] font-medium transition-colors ${
                    isActive
                      ? 'border-pine bg-pine text-paper shadow-[0_8px_20px_-12px_rgba(23,53,42,0.8)]'
                      : 'border-line-strong bg-white text-ink hover:border-pine hover:text-pine'
                  }`}
                >
                  {group.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-10 lg:py-14">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          {/* Overview of the chosen crop family: the threat, what the damage
              looks like and the crops it covers, side by side in one panel. */}
          <div className="grid overflow-hidden rounded-xl border border-line bg-white shadow-[0_20px_50px_-36px_rgba(20,33,26,0.45)] lg:grid-cols-12">
            <div className="p-6 sm:p-8 lg:col-span-5">
              <p className="eyebrow text-clay">Main threat</p>
              <h2 className="mt-3 font-display text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.2] text-pine">
                {active.threat}
              </h2>
            </div>

            <div className="border-t border-line bg-[#fbf3ee] p-6 sm:p-8 lg:col-span-4 lg:border-l lg:border-t-0">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-clay">
                <AlertTriangle className="h-4 w-4" aria-hidden />
                What the damage looks like
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">{active.symptoms}</p>
            </div>

            <div className="border-t border-line p-6 sm:p-8 lg:col-span-3 lg:border-l lg:border-t-0">
              <p className="eyebrow">Crops covered</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {active.crops.map((crop) => (
                  <li
                    key={crop}
                    className="rounded-full border border-line bg-paper px-3 py-1 text-[13px] text-ink"
                  >
                    {crop}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex items-end justify-between gap-4 border-b border-line pb-4">
            <h2 className="font-display text-[clamp(1.4rem,2.2vw,1.8rem)] text-pine">
              {activeProducts.length} Matching Pheromone {activeProducts.length === 1 ? 'lure and trap' : 'lures and traps'}
            </h2>
            <p className="hidden text-[13px] text-ink-3 sm:block">{active.name}</p>
          </div>

          {/* Lure cards: large photos of the lure and its trap on top, the
              description below, actions pinned to the bottom of every card. */}
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {activeProducts.map((product, index) => (
              <Reveal as="li" key={product.id} delay={(index % 2) * 0.06} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-[0_20px_50px_-38px_rgba(20,33,26,0.5)] transition-shadow hover:shadow-[0_26px_60px_-32px_rgba(20,33,26,0.55)]">
                  <div className="grid grid-cols-2 gap-px bg-line">
                    <figure className="relative m-0 bg-white">
                      <Figure
                        src={product.imageUrl}
                        alt={product.imageAlt}
                        ratio="aspect-[5/6]"
                        className="bg-white!"
                      />
                      <figcaption className="absolute left-3 top-3 rounded-full bg-pine/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-paper">
                        Lure
                      </figcaption>
                    </figure>
                    <figure className="relative m-0 bg-white">
                      <Figure
                        src={product.trapImageUrl}
                        alt={`Trap for ${product.name}`}
                        ratio="aspect-[5/6]"
                        className="bg-white!"
                      />
                      <figcaption className="absolute left-3 top-3 rounded-full bg-pine/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-paper">
                        Trap
                      </figcaption>
                    </figure>
                  </div>

                  <div className="flex flex-1 flex-col border-t border-line p-6 sm:p-7">
                    <p className="eyebrow flex items-center gap-2.5">
                      <span className="rounded bg-clay/10 px-1.5 py-0.5 text-clay">{product.code}</span>
                      <span className="truncate text-ink-2">{product.pestCommonName}</span>
                    </p>

                    <h3 className="mt-3 font-display text-[clamp(1.25rem,1.8vw,1.5rem)] leading-snug text-pine">
                      {product.cropSolution?.title ?? product.name}
                    </h3>

                    {product.cropSolution ? (
                      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink">
                        {product.cropSolution.body.map((paragraph) => (
                          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                        ))}
                        <p className="rounded-lg border-l-[3px] border-moss bg-[#eef3ec] px-4 py-3 font-display text-[16px] italic text-pine">
                          {product.cropSolution.tagline}
                        </p>
                      </div>
                    ) : (
                      <p className="mt-3 text-[15px] leading-relaxed text-ink">
                        {product.description[0]}
                      </p>
                    )}

                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                      <button
                        type="button"
                        onClick={() => onRequestQuote(product.name)}
                        className="rounded-full border border-line-strong px-5 py-2.5 text-[13px] font-medium text-ink transition-colors hover:border-clay hover:text-clay"
                      >
                        Request a quote
                      </button>
                      {product.trapsPerAcre && (
                        <span className="ml-auto rounded-full bg-paper-2 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-2">
                          {product.trapsPerAcre}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <PageHandoff
        nextPage="contact"
        label="Next"
        title="Talk to our team"
        description="Tell us the crop, the acreage and the pest you are seeing. We will come back with a protocol and a price."
        onNavigate={onNavigate}
      />
    </>
  );
}
