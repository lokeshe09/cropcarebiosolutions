import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import type { PageId } from '../../types';
import { CONTACT, COMPANY, NAV_ITEMS } from '../../data/site';
import { useDismissable } from '../../hooks/useDismissable';
import { Logo } from './Logo';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef(0);

  useDismissable(menuOpen, () => setMenuOpen(false));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!dropdownOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) setDropdownOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [dropdownOpen]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const go = (page: PageId) => {
    onNavigate(page);
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      {/* Masthead strip — the tagline, and the number farmers actually call. */}
      <div className="hidden bg-pine-deep text-paper/70 lg:block">
        <div className="mx-auto flex h-9 max-w-[1320px] items-center justify-between px-8 text-[12px]">
          <p className="tracking-wide">{COMPANY.descriptor}</p>
          <a
            href={`tel:${CONTACT.phonePrimary.dial}`}
            className="link-rule inline-flex items-center gap-2 transition-colors hover:text-paper"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            {CONTACT.phonePrimary.display}
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b bg-paper/92 backdrop-blur-md transition-shadow duration-300 supports-[backdrop-filter]:bg-paper/85 ${
          scrolled
            ? 'border-line shadow-[0_10px_30px_-24px_rgba(20,33,26,0.7)]'
            : 'border-line'
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-[76px]">
          <button
            type="button"
            onClick={() => go('home')}
            className="flex items-center gap-3 text-left"
          >
            <Logo className="h-9 w-9 shrink-0" />
            <span className="leading-none">
              <span className="block font-display text-[19px] tracking-tight text-pine">
                Crop Care
              </span>
              <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3">
                Bio Solutions
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active =
                currentPage === item.id ||
                (item.id === 'products' && currentPage === 'traps');

              if (!item.children) {
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => go(item.id)}
                    aria-current={active ? 'page' : undefined}
                    className={`relative px-3.5 py-2 text-[14px] transition-colors hover:text-pine ${
                      active ? 'text-pine' : 'text-ink-2'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3.5 -bottom-0.5 h-px bg-clay"
                      />
                    )}
                  </button>
                );
              }

              return (
                <div
                  key={item.id}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => {
                    window.clearTimeout(closeTimer.current);
                    setDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    closeTimer.current = window.setTimeout(() => setDropdownOpen(false), 140);
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setDropdownOpen((open) => !open)}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="menu"
                    className={`relative flex items-center gap-1.5 px-3.5 py-2 text-[14px] transition-colors hover:text-pine ${
                      active ? 'text-pine' : 'text-ink-2'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden
                    />
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3.5 -bottom-0.5 h-px bg-clay"
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        role="menu"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.16, ease: 'easeOut' }}
                        className="absolute left-0 top-full w-[280px] border border-line bg-paper p-2 shadow-[0_24px_60px_-28px_rgba(20,33,26,0.45)]"
                      >
                        {item.children.map((child, index) => (
                          <button
                            key={child.label}
                            type="button"
                            role="menuitem"
                            disabled={child.id === null}
                            onClick={() => child.id && go(child.id)}
                            className="flex w-full items-center justify-between gap-3 px-3.5 py-3 text-left transition-colors hover:bg-paper-2 disabled:cursor-default disabled:hover:bg-transparent"
                          >
                            <span className="flex items-baseline gap-3">
                              <span className="font-mono text-[11px] text-ink-3">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <span
                                className={`text-[14px] ${
                                  child.id === null ? 'text-ink-3' : 'text-ink'
                                }`}
                              >
                                {child.label}
                              </span>
                            </span>
                            {child.note && (
                              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-clay">
                                {child.note}
                              </span>
                            )}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go('contact')}
              className="hidden rounded-full bg-pine px-5 py-2.5 text-[13px] font-medium text-paper transition-colors hover:bg-pine-soft lg:inline-flex"
            >
              Request a quote
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center text-ink lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — large type, one tap per destination. */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-pine text-paper lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex h-[68px] items-center justify-between px-5">
              <div className="flex items-center gap-3">
                <Logo className="h-9 w-9" tone="dark" />
                <span className="font-display text-[19px]">Crop Care</span>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 pb-10 pt-6">
              {NAV_ITEMS.map((item, index) => (
                <div key={item.id} className="border-t border-white/12 py-1">
                  <button
                    type="button"
                    onClick={() => go(item.id)}
                    className="flex w-full items-baseline gap-4 py-4 text-left"
                  >
                    <span className="font-mono text-[11px] text-sage">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-[28px] leading-none">{item.label}</span>
                  </button>

                  {item.children && (
                    <div className="pb-3 pl-9">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          type="button"
                          disabled={child.id === null}
                          onClick={() => child.id && go(child.id)}
                          className="flex w-full items-center gap-2 py-1.5 text-left text-[15px] text-paper/70 disabled:text-paper/35"
                        >
                          {child.label}
                          {child.note && (
                            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-clay-soft">
                              {child.note}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-8 space-y-3 border-t border-white/12 pt-8">
                <a
                  href={`tel:${CONTACT.phonePrimary.dial}`}
                  className="flex items-center gap-2 text-[15px] text-paper/80"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {CONTACT.phonePrimary.display}
                </a>
                <button
                  type="button"
                  onClick={() => go('contact')}
                  className="w-full rounded-full bg-paper px-6 py-3.5 text-sm font-medium text-pine"
                >
                  Request a quote
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
