import { Mail, MapPin, Phone } from 'lucide-react';
import type { PageId, Product } from '../../types';
import { COMPANY, CONTACT } from '../../data/site';
import { PRODUCTS } from '../../data/products';
import { PAGE_PATHS, productPath } from '../../lib/routes';
import { RouteLink } from '../ui/RouteLink';
import { Logo, LogoText } from './Logo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenProduct: (product: Product) => void;
}

export function Footer({ onNavigate, onOpenProduct }: FooterProps) {
  const year = new Date().getFullYear();
  /* "Our Products", in the order the company asked for: four lures, then
     three traps and the sticky traps. */
  const productLinks = ['melon-fly', 'oriental-fruit-fly', 'tuta-absoluta', 'rhinoceros-beetle']
    .map((id) => PRODUCTS.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product));

  const trapLinks = [
    { anchor: 'fruit-fly-trap', label: 'Fruit Fly Trap' },
    { anchor: 'funnel-trap', label: 'Funnel Trap' },
    { anchor: 'solar-trap', label: 'Solar Light Trap' },
    { anchor: 'sticky-sheets', label: 'Sticky Traps' },
  ];

  /** Opens the Insect Traps page and brings the chosen trap into view. */
  const goToTrap = (anchor: string) => {
    onNavigate('traps');
    window.setTimeout(() => {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 450);
  };

  const siteLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'products', label: 'Pheromone Lures' },
    { id: 'traps', label: 'Insect Traps' },
    { id: 'crop-solutions', label: 'Crop Solutions' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="relative overflow-hidden bg-pine text-paper">
      <div className="blueprint absolute inset-0 opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-12 border-t border-white/12 py-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Logo className="h-12 w-12 shrink-0" tone="dark" />
              <LogoText className="h-9" tone="dark" />
            </div>

            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-paper/65">
              {COMPANY.descriptorFull}
            </p>
          </div>

          <nav className="lg:col-span-2">
            <h3 className="eyebrow text-sage">Site</h3>
            <ul className="mt-5 space-y-3">
              {siteLinks.map((item) => (
                <li key={item.id}>
                  <RouteLink
                    to={item.id}
                    onNavigate={() => onNavigate(item.id)}
                    className="link-rule text-[15px] text-paper/70 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </RouteLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-3">
            <h3 className="eyebrow text-sage">Our Products</h3>
            <ul className="mt-5 space-y-3">
              {productLinks.map((product) => (
                <li key={product.id}>
                  <RouteLink
                    to={{ path: productPath(product) }}
                    onNavigate={() => onOpenProduct(product)}
                    className="link-rule text-left text-[15px] text-paper/70 transition-colors hover:text-paper"
                  >
                    {product.name}
                  </RouteLink>
                </li>
              ))}
              {trapLinks.map((trap) => (
                <li key={trap.anchor}>
                  <RouteLink
                    to={{ path: `${PAGE_PATHS.traps}#${trap.anchor}` }}
                    onNavigate={() => goToTrap(trap.anchor)}
                    className="link-rule text-left text-[15px] text-paper/70 transition-colors hover:text-paper"
                  >
                    {trap.label}
                  </RouteLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="eyebrow text-sage">Get in touch</h3>
            <ul className="mt-5 space-y-4 text-[15px] text-paper/70">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-clay-soft" aria-hidden />
                <span className="flex flex-col gap-1">
                  {[CONTACT.phonePrimary, CONTACT.phoneSecondary].map((phone) => (
                    <a
                      key={phone.dial}
                      href={`tel:${phone.dial}`}
                      className="link-rule self-start transition-colors hover:text-paper"
                    >
                      {phone.display}
                    </a>
                  ))}
                </span>
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
              {CONTACT.addresses
                .filter((address) => address.lines.length > 0)
                .map((address) => (
                  <li key={address.label} className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-clay-soft" aria-hidden />
                    <span>
                      <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.14em] text-sage">
                        {address.label}
                      </span>
                      {address.lines.map((line) => (
                        <span key={line} className="block text-[14px] leading-snug">
                          {line}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
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
