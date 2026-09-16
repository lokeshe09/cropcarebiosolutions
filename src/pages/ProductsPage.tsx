import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import type { PageId, Product, ProductFamily } from '../types';
import { PRODUCTS } from '../data/products';
import { PageIntro } from '../components/layout/PageIntro';
import { PageHandoff } from '../components/layout/PageHandoff';
import { Figure } from '../components/ui/Figure';
import { Reveal } from '../components/ui/Reveal';

interface ProductsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenProduct: (product: Product) => void;
  onRequestQuote: (productName: string) => void;
}

const FAMILIES: { id: ProductFamily | 'all'; label: string }[] = [
  { id: 'all', label: 'All lures' },
  { id: 'fruit-flies', label: 'Fruit flies' },
  { id: 'moths-borers', label: 'Moths & borers' },
  { id: 'palm-weevils', label: 'Palm pests' },
  { id: 'synergist', label: 'Companion' },
];

export function ProductsPage({
  onNavigate,
  onOpenProduct,
  onRequestQuote,
}: ProductsPageProps) {
  const [query, setQuery] = useState('');
  const [family, setFamily] = useState<ProductFamily | 'all'>('all');

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return PRODUCTS.filter((product) => {
      if (family !== 'all' && product.family !== family) return false;
      if (!needle) return true;

      return [
        product.name,
        product.pestCommonName,
        product.scientificName ?? '',
        product.code,
        product.description.join(' '),
        ...product.targetCrops,
      ]
        .join(' ')
        .toLowerCase()
        .includes(needle);
    });
  }, [query, family]);

  return (
    <>
      <PageIntro
        breadcrumb="Pheromone Lures"
        eyebrow="Pheromone Lures"
        title="Targeted Attraction for Smarter Pest Management"
        onNavigate={onNavigate}
        aside={
          <label className="block">
            <span className="sr-only">Search lures by name, pest or crop</span>
            <span className="relative block">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-3"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search a pest or crop"
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

      <section className="bg-paper pb-8 pt-8">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-5">
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

            <p className="tnum font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
              {results.length} {results.length === 1 ? 'product' : 'products'}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper pb-16 lg:pb-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          {results.length === 0 ? (
            <div className="border border-dashed border-line-strong bg-paper-2 px-8 py-20 text-center">
              <p className="font-display text-[22px] text-pine">
                No lure matches &ldquo;{query}&rdquo;.
              </p>
              <p className="mt-3 text-[15px] text-ink-2">
                Try a crop name — tomato, mango, cotton, coconut, paddy or cabbage.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setFamily('all');
                }}
                className="mt-6 rounded-full border border-line-strong px-5 py-2.5 text-[13px] text-pine transition-colors hover:border-pine"
              >
                Reset
              </button>
            </div>
          ) : (
            <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((product, index) => (
                <Reveal as="li" key={product.id} delay={(index % 3) * 0.06}>
                  <article className="group flex h-full flex-col">
                    <button
                      type="button"
                      onClick={() => onOpenProduct(product)}
                      className="block text-left"
                      aria-label={`Open the protocol for ${product.name}`}
                    >
                      <div className="relative">
                        <Figure
                          src={product.imageUrl}
                          alt={product.imageAlt}
                          ratio="aspect-[4/3]"
                        />
                        <span className="absolute left-0 top-0 bg-paper px-3 py-1.5 font-mono text-[11px] tracking-[0.12em] text-clay">
                          {product.code}
                        </span>
                      </div>
                    </button>

                    <div className="mt-5 flex flex-1 flex-col border-t border-line pt-4">
                      <p className="eyebrow">{product.pestCommonName}</p>

                      <h2 className="mt-3 font-display text-[22px] leading-tight text-pine">
                        <button
                          type="button"
                          onClick={() => onOpenProduct(product)}
                          className="link-rule text-left"
                        >
                          {product.name}
                        </button>
                      </h2>

                      {product.scientificName && (
                        <p className="mt-1 font-display text-[14px] italic text-ink-3">
                          {product.scientificName}
                        </p>
                      )}

                      <p className="mt-3 line-clamp-4 text-[14px] leading-relaxed text-ink-2">
                        {product.description[0]}
                      </p>

                      <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-line pt-4 text-[13px]">
                        {product.fieldLife && (
                          <div>
                            <dt className="eyebrow">Field life</dt>
                            <dd className="mt-1.5 text-ink">
                              {product.fieldLife.split(',')[0]}
                            </dd>
                          </div>
                        )}
                        {product.trapsPerAcre && (
                          <div>
                            <dt className="eyebrow">Traps</dt>
                            <dd className="mt-1.5 text-ink">{product.trapsPerAcre}</dd>
                          </div>
                        )}
                      </dl>

                      <ul className="mt-5 flex flex-wrap gap-1.5">
                        {product.targetCrops.slice(0, 3).map((crop) => (
                          <li
                            key={crop}
                            className="border border-line bg-paper-2 px-2.5 py-1 text-[12px] text-ink-2"
                          >
                            {crop}
                          </li>
                        ))}
                        {product.targetCrops.length > 3 && (
                          <li className="px-1 py-1 text-[12px] text-ink-3">
                            +{product.targetCrops.length - 3} more
                          </li>
                        )}
                      </ul>

                      <div className="mt-auto flex items-center gap-5 pt-6">
                        <button
                          type="button"
                          onClick={() => onOpenProduct(product)}
                          className="rounded-full bg-pine px-5 py-2.5 text-[13px] font-medium text-paper transition-colors hover:bg-pine-soft"
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
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </section>

      <PageHandoff
        nextPage="traps"
        label="Next"
        title="Insect Traps"
        description="The housings the lures sit in — fruit fly traps, funnel traps, water traps, delta traps, palm traps and the solar light trap."
        onNavigate={onNavigate}
      />
    </>
  );
}
