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

      {/* Crop family tabs */}
      <section className="sticky top-[68px] z-30 border-b border-line bg-paper/95 backdrop-blur-md lg:top-[76px]">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="rail flex gap-1 overflow-x-auto py-3">
            {CROP_SOLUTIONS.map((group) => {
              const isActive = group.id === activeId;
              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => setActiveId(group.id)}
                  aria-pressed={isActive}
                  className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-[13px] transition-colors ${
                    isActive
                      ? 'bg-pine text-paper'
                      : 'text-ink-2 hover:bg-paper-2 hover:text-pine'
                  }`}
                >
                  {group.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-clay">Main threat</p>
              <h2 className="mt-4 font-display text-[clamp(1.8rem,3.6vw,2.6rem)] leading-tight text-pine">
                {active.threat}
              </h2>

              <div className="mt-8 border-l-2 border-clay bg-paper-2 p-6">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-clay">
                  <AlertTriangle className="h-3.5 w-3.5" aria-hidden />
                  What the damage looks like
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{active.symptoms}</p>
              </div>

              <div className="mt-8">
                <p className="eyebrow">Crops covered</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {active.crops.map((crop) => (
                    <li
                      key={crop}
                      className="border border-line bg-paper-2 px-2.5 py-1 text-[13px] text-ink-2"
                    >
                      {crop}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="eyebrow">
                {activeProducts.length} matching {activeProducts.length === 1 ? 'lure' : 'lures'}
              </p>

              <ul className="mt-6 space-y-px bg-line">
                {activeProducts.map((product, index) => (
                  <Reveal as="li" key={product.id} delay={index * 0.05}>
                    <article className="group bg-paper p-5 transition-colors hover:bg-paper-2 sm:p-6">
                      <div className="flex flex-col gap-5 sm:flex-row">
                        <div className="flex shrink-0 gap-2">
                          <Figure
                            src={product.imageUrl}
                            alt={product.imageAlt}
                            ratio="aspect-square"
                            className="w-24 sm:w-28"
                          />
                          <Figure
                            src={product.trapImageUrl}
                            alt={`Trap for ${product.name}`}
                            ratio="aspect-square"
                            className="w-24 sm:w-28"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="eyebrow flex items-center gap-2.5">
                            <span className="text-clay">{product.code}</span>
                            <span aria-hidden className="h-px w-4 bg-line-strong" />
                            <span className="truncate">{product.pestCommonName}</span>
                          </p>

                          <h3 className="mt-2 font-display text-[20px] leading-tight text-pine">
                            {product.name}
                          </h3>

                          <p className="mt-2 line-clamp-3 text-[14px] leading-relaxed text-ink-2">
                            {product.description[0]}
                          </p>

                          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                            <button
                              type="button"
                              onClick={() => onOpenProduct(product)}
                              className="link-rule text-[13px] font-medium text-pine"
                            >
                              View protocol
                            </button>
                            <button
                              type="button"
                              onClick={() => onRequestQuote(product.name)}
                              className="link-rule text-[13px] text-clay"
                            >
                              Request a quote
                            </button>
                            {product.trapsPerAcre && (
                              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
                                {product.trapsPerAcre}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
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
