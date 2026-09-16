import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Sparkles, Layers, Bug, Sprout, ArrowRight, ShieldCheck, FlaskConical, Info } from 'lucide-react';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [activeIngredientsModalOpen, setActiveIngredientsModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Editorial Biotech Tagline */}
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            id="nav-logo"
            className="flex items-center gap-3 text-left focus:outline-none cursor-pointer group shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center rounded-lg bg-emerald-50 border border-emerald-100 group-hover:border-emerald-300 transition-colors">
              <svg viewBox="0 0 100 100" className="w-7 h-7 sm:w-8 sm:h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 86C50 86 18 68 16 38C14 16 36 10 50 14C50 14 50 86 50 86Z" fill="#073B20" />
                <path d="M50 86C50 86 82 68 84 38C86 16 64 10 50 14C50 14 50 86 50 86Z" fill="#22C55E" />
                <path d="M50 84V20" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                <path d="M50 48C58 42 66 42 70 38" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M50 62C42 56 34 56 30 52" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-baseline gap-1.5 whitespace-nowrap leading-none">
                <span className="font-bold text-base sm:text-lg lg:text-xl text-stone-900 tracking-tight">
                  Crop Care
                </span>
                <span className="font-bold text-base sm:text-lg lg:text-xl text-[#073B20] tracking-tight">
                  Bio Solutions
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-medium tracking-normal whitespace-nowrap mt-1 hidden xs:block">
                Agricultural Biotechnology &bull; IPM Systems
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Home */}
            <button
              type="button"
              onClick={() => handleLinkClick('home')}
              className={`px-3 py-2 text-sm font-medium transition-colors cursor-pointer rounded-md ${
                currentPage === 'home'
                  ? 'text-[#073B20] bg-emerald-50/80 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
              }`}
            >
              Home
            </button>

            {/* About Us */}
            <button
              type="button"
              onClick={() => handleLinkClick('about')}
              className={`px-3 py-2 text-sm font-medium transition-colors cursor-pointer rounded-md ${
                currentPage === 'about'
                  ? 'text-[#073B20] bg-emerald-50/80 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
              }`}
            >
              About Us
            </button>

            {/* Our Products Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => handleLinkClick('products')}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors cursor-pointer rounded-md ${
                  currentPage === 'products'
                    ? 'text-[#073B20] bg-emerald-50/80 font-semibold'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                <span>Our Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${productsDropdownOpen ? 'rotate-180 text-[#073B20]' : 'text-stone-400'}`} />
              </button>

              {/* Clean Structured Dropdown Panel */}
              <div 
                className={`absolute top-full left-0 mt-1.5 w-72 bg-white border border-stone-200 rounded-xl shadow-lg p-1.5 transition-all duration-150 z-50 ${
                  productsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                }`}
              >
                <div className="px-3 py-1.5 border-b border-stone-100 mb-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                    Product Categories
                  </span>
                </div>

                {/* 1. Pheromone Lures */}
                <button
                  type="button"
                  onClick={() => handleLinkClick('products')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-stone-700 hover:bg-stone-50 hover:text-[#073B20] transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-emerald-50 text-[#073B20] flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span>1. Pheromone Lures</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#073B20]" />
                </button>

                {/* 2. Insect Traps */}
                <button
                  type="button"
                  onClick={() => handleLinkClick('trap-guide')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-stone-700 hover:bg-stone-50 hover:text-[#073B20] transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-amber-50 text-amber-800 flex items-center justify-center">
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                    <span>2. Insect Traps</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#073B20]" />
                </button>

                {/* 3. Active Ingredients */}
                <button
                  type="button"
                  onClick={() => {
                    setProductsDropdownOpen(false);
                    setActiveIngredientsModalOpen(true);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-stone-700 hover:bg-stone-50 hover:text-[#073B20] transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center">
                      <FlaskConical className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span>3. Active Ingredients</span>
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                        Upcoming
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#073B20]" />
                </button>
              </div>
            </div>

            {/* Crop Solutions */}
            <button
              type="button"
              onClick={() => handleLinkClick('pest-finder')}
              className={`px-3 py-2 text-sm font-medium transition-colors cursor-pointer rounded-md ${
                currentPage === 'pest-finder'
                  ? 'text-[#073B20] bg-emerald-50/80 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
              }`}
            >
              Crop Solutions
            </button>

            {/* Gallery */}
            <button
              type="button"
              onClick={() => handleLinkClick('trap-guide')}
              className={`px-3 py-2 text-sm font-medium transition-colors cursor-pointer rounded-md ${
                currentPage === 'trap-guide'
                  ? 'text-[#073B20] bg-emerald-50/80 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
              }`}
            >
              Gallery
            </button>

            {/* Contact Us */}
            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className={`px-3.5 py-2 text-sm font-medium transition-colors cursor-pointer rounded-md ${
                currentPage === 'contact'
                  ? 'text-[#073B20] bg-emerald-50/80 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#073B20] hover:bg-[#126B35] transition-colors shadow-xs cursor-pointer"
            >
              Get Field Advice
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Clean Structured Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-1 shadow-md">
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${currentPage === 'home' ? 'bg-emerald-50 text-[#073B20] font-semibold' : 'text-stone-700 hover:bg-stone-50'}`}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('about')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${currentPage === 'about' ? 'bg-emerald-50 text-[#073B20] font-semibold' : 'text-stone-700 hover:bg-stone-50'}`}
          >
            About Us
          </button>

          {/* Product Categories */}
          <div className="pt-3 pb-1 px-3 border-t border-stone-100">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
              Product Categories
            </span>
          </div>

          <button
            type="button"
            onClick={() => handleLinkClick('products')}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${currentPage === 'products' ? 'bg-emerald-50 text-[#073B20]' : 'text-stone-700 hover:bg-stone-50'}`}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#073B20]" />
              <span>1. Pheromone Lures</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('trap-guide')}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${currentPage === 'trap-guide' ? 'bg-emerald-50 text-[#073B20]' : 'text-stone-700 hover:bg-stone-50'}`}
          >
            <div className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-amber-700" />
              <span>2. Insect Traps</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
          </button>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              setActiveIngredientsModalOpen(true);
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between text-stone-700 hover:bg-stone-50"
          >
            <div className="flex items-center gap-2">
              <FlaskConical className="w-3.5 h-3.5 text-blue-700" />
              <span>3. Active Ingredients</span>
            </div>
            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
              Upcoming
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('pest-finder')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${currentPage === 'pest-finder' ? 'bg-emerald-50 text-[#073B20] font-semibold' : 'text-stone-700 hover:bg-stone-50'}`}
          >
            Crop Solutions
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('trap-guide')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${currentPage === 'trap-guide' ? 'bg-emerald-50 text-[#073B20] font-semibold' : 'text-stone-700 hover:bg-stone-50'}`}
          >
            Gallery &amp; Hardware
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('contact')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${currentPage === 'contact' ? 'bg-emerald-50 text-[#073B20] font-semibold' : 'text-stone-700 hover:bg-stone-50'}`}
          >
            Contact &amp; Field Advisory
          </button>
        </div>
      )}

      {/* Active Ingredients Modal - Clean Professional Dialog */}
      {activeIngredientsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl max-w-md w-full p-6 sm:p-7 shadow-xl border border-stone-200 space-y-5 relative">
            <button
              onClick={() => setActiveIngredientsModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-md hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <FlaskConical className="w-5 h-5 text-blue-700" />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                Category 3 &bull; Technical Portfolio
              </div>
              <h3 className="text-xl font-bold text-stone-900">
                Active Ingredients
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Technical active compounds, isomer purity ratings, formulation intermediates, and custom synthesis specifications are currently being updated and will be published shortly.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-1.5">
              <div className="flex items-center gap-2 font-semibold text-[#073B20]">
                <Info className="w-4 h-4 text-[#073B20]" />
                <span>Need Technical Specifications Today?</span>
              </div>
              <p className="text-stone-600 leading-relaxed">
                For commercial inquiries regarding bulk technical grade semiochemicals, certificate of analysis (COA), or contract synthesis, please connect directly with our technical laboratory team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  setActiveIngredientsModalOpen(false);
                  handleLinkClick('contact');
                }}
                className="flex-1 py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-[#073B20] hover:bg-[#126B35] transition-colors text-center cursor-pointer"
              >
                Contact Technical Team
              </button>
              <button
                type="button"
                onClick={() => setActiveIngredientsModalOpen(false)}
                className="py-2.5 px-4 rounded-lg text-xs font-medium text-stone-600 hover:bg-stone-100 transition-colors text-center cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
