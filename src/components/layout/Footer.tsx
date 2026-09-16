import { Mail, MapPin, Phone } from 'lucide-react';
import type { PageId } from '../../types';
import { COMPANY, CONTACT, NAV_ITEMS } from '../../data/site';
import { PRODUCTS } from '../../data/products';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();
  const lureLinks = PRODUCTS.filter((product) => !product.companionTo).slice(0, 6);

  return (
    <footer className="relative overflow-hidden bg-pine text-paper">
      <div className="blueprint absolute inset-0 opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-12 border-t border-white/12 py-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10" tone="dark" />
              <span>
                <span className="block font-display text-[20px]">{COMPANY.name}</span>
                <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-sage">
                  {COMPANY.tagline}
                </span>
              </span>
            </div>

            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-paper/65">
              Manufacturer and exporter of eco-friendly pest management solutions — pheromone
              lures and insect traps that help farmers protect their crops naturally.
            </p>
          </div>

          <nav className="lg:col-span-2">
            <h3 className="eyebrow text-sage">Site</h3>
            <ul className="mt-5 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className="link-rule text-[15px] text-paper/70 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('traps')}
                  className="link-rule text-[15px] text-paper/70 transition-colors hover:text-paper"
                >
                  Insect Traps
                </button>
              </li>
            </ul>
          </nav>

          <nav className="lg:col-span-3">
            <h3 className="eyebrow text-sage">Pheromone lures</h3>
            <ul className="mt-5 space-y-3">
              {lureLinks.map((product) => (
                <li key={product.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate('products')}
                    className="link-rule text-left text-[15px] text-paper/70 transition-colors hover:text-paper"
                  >
                    {product.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="link-rule text-[15px] text-clay-soft"
                >
                  View all lures
                </button>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="eyebrow text-sage">Get in touch</h3>
            <ul className="mt-5 space-y-4 text-[15px] text-paper/70">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-clay-soft" aria-hidden />
                <a
                  href={`tel:${CONTACT.phonePrimary.dial}`}
                  className="link-rule transition-colors hover:text-paper"
                >
                  {CONTACT.phonePrimary.display}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-clay-soft" aria-hidden />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="link-rule break-all transition-colors hover:text-paper"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-clay-soft" aria-hidden />
                <span>
                  {CONTACT.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            </ul>

            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-sage">
              {CONTACT.hours}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/12 py-7 text-[13px] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {COMPANY.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em]">
            Residue-free crop protection
          </p>
        </div>
      </div>
    </footer>
  );
}
