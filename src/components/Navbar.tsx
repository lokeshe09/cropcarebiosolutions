import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Phone, Sparkles, Layers, Bug, Sprout, ArrowRight, ShieldCheck, FlaskConical, Info } from 'lucide-react';
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

  const handleWhatsAppCall = () => {
    window.open('https://wa.me/919876543210?text=Hello%20Crop%20Care%20Bio%20Solutions!%20I%20am%20interested%20in%20your%20insect%20traps%20and%20pheromone%20lures.', '_blank');
  };

  return (
    <header
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none px-3 sm:px-6 lg:px-8 pt-2.5 sm:pt-3.5"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`pointer-events-auto rounded-2xl lg:rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3 ${
            isScrolled
              ? 'glass-floating-nav-scrolled'
              : 'glass-floating-nav'
          }`}
        >
          {/* Brand Logo & Editorial Biotech Tagline */}
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            id="nav-logo"
            className="flex items-center gap-3 text-left focus:outline-none cursor-pointer group shrink-0"
          >
            {/* Precision Two-Tone Leaf Emblem with Ambient Glow */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-[#2E7D32]/15 rounded-full blur-md group-hover:bg-[#2E7D32]/25 transition-all" />
              <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 drop-shadow-xs" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Left Leaf (Deep Forest Green) */}
                <path d="M50 86C50 86 18 68 16 38C14 16 36 10 50 14C50 14 50 86 50 86Z" fill="#073B20" />
                {/* Right Leaf (Fresh Lime / Biotech Green) */}
                <path d="M50 86C50 86 82 68 84 38C86 16 64 10 50 14C50 14 50 86 50 86Z" fill="#84CC16" />
                {/* Center Stem & Veins */}
                <path d="M50 84V20" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                <path d="M50 48C58 42 66 42 70 38" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M50 62C42 56 34 56 30 52" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-baseline gap-1.5 whitespace-nowrap leading-none">
                <span className="font-extrabold text-base sm:text-lg lg:text-xl text-[#073B20] tracking-tight">
                  Crop Care
                </span>
                <span className="font-extrabold text-base sm:text-lg lg:text-xl text-[#126B35] tracking-tight">
                  Bio Solutions
                </span>
              </div>
              <p className="text-[10px] text-[#59675F] font-semibold tracking-tight whitespace-nowrap mt-0.5 hidden xs:block">
                Agricultural Biotechnology &bull; IPM Systems
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links with Crisp High-Contrast Frosted Glass Pills */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink">
            
            {/* Home */}
            <button
              type="button"
              onClick={() => handleLinkClick('home')}
              className={`px-3.5 py-1.5 text-[13px] xl:text-[13.5px] font-bold transition-all duration-200 relative whitespace-nowrap cursor-pointer rounded-full ${
                currentPage === 'home'
                  ? 'text-[#073B20] bg-white shadow-xs border border-gray-200'
                  : 'text-[#34443B] hover:text-[#073B20] hover:bg-white/80'
              }`}
            >
              Home
            </button>

            {/* About Us */}
            <button
              type="button"
              onClick={() => handleLinkClick('about')}
              className={`px-3.5 py-1.5 text-[13px] xl:text-[13.5px] font-bold transition-all duration-200 relative whitespace-nowrap cursor-pointer rounded-full ${
                currentPage === 'about'
                  ? 'text-[#073B20] bg-white shadow-xs border border-gray-200'
                  : 'text-[#34443B] hover:text-[#073B20] hover:bg-white/80'
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
                className={`flex items-center gap-1 px-3.5 py-1.5 text-[13px] xl:text-[13.5px] font-bold transition-all duration-200 relative whitespace-nowrap cursor-pointer rounded-full ${
                  currentPage === 'products'
                    ? 'text-[#073B20] bg-white shadow-xs border border-gray-200'
                    : 'text-[#34443B] hover:text-[#073B20] hover:bg-white/80'
                }`}
              >
                <span>Our Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-[#073B20]' : 'text-gray-500'}`} />
              </button>

              {/* Rich Frosted Glass Dropdown Panel */}
              <div 
                className={`absolute top-full left-0 mt-2.5 w-76 bg-white/98 backdrop-blur-3xl border border-gray-200 rounded-2xl shadow-2xl p-2 transition-all duration-200 z-50 ring-1 ring-black/5 ${
                  productsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="px-3 py-1.5 border-b border-gray-100 mb-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#073B20]">
                    Product Categories
                  </span>
                </div>

                {/* 1. Pheromone Lures */}
                <button
                  type="button"
                  onClick={() => handleLinkClick('products')}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-[#34443B] hover:bg-[#F3F8F3] hover:text-[#073B20] transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-emerald-50 text-[#073B20] flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span>1. Pheromone Lures</span>
                  </div>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#073B20]" />
                </button>

                {/* 2. Insect Traps */}
                <button
                  type="button"
                  onClick={() => handleLinkClick('trap-guide')}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-[#34443B] hover:bg-[#F3F8F3] hover:text-[#073B20] transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center">
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                    <span>2. Insect Traps</span>
                  </div>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#073B20]" />
                </button>

                {/* 3. Active Ingredients */}
                <button
                  type="button"
                  onClick={() => {
                    setProductsDropdownOpen(false);
                    setActiveIngredientsModalOpen(true);
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-[#34443B] hover:bg-[#F3F8F3] hover:text-[#073B20] transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                      <FlaskConical className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span>3. Active Ingredients</span>
                      <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800 uppercase tracking-tight">
                        Soon
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#073B20]" />
                </button>
              </div>
            </div>

            {/* Crop & Pest Solutions */}
            <button
              type="button"
              onClick={() => handleLinkClick('pest-finder')}
              className={`px-3.5 py-1.5 text-[13px] xl:text-[13.5px] font-bold transition-all duration-200 relative whitespace-nowrap cursor-pointer rounded-full ${
                currentPage === 'pest-finder'
                  ? 'text-[#073B20] bg-white shadow-xs border border-gray-200'
                  : 'text-[#34443B] hover:text-[#073B20] hover:bg-white/80'
              }`}
            >
              Crop Solutions
            </button>

            {/* Gallery */}
            <button
              type="button"
              onClick={() => handleLinkClick('trap-guide')}
              className={`px-3.5 py-1.5 text-[13px] xl:text-[13.5px] font-bold transition-all duration-200 relative whitespace-nowrap cursor-pointer rounded-full ${
                currentPage === 'trap-guide'
                  ? 'text-[#073B20] bg-white shadow-xs border border-gray-200'
                  : 'text-[#34443B] hover:text-[#073B20] hover:bg-white/80'
              }`}
            >
              Gallery
            </button>

            {/* Contact Us */}
            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className={`px-3.5 py-1.5 text-[13px] xl:text-[13.5px] font-bold transition-all duration-200 relative whitespace-nowrap cursor-pointer rounded-full ${
                currentPage === 'contact'
                  ? 'text-[#073B20] bg-white shadow-xs border border-gray-200'
                  : 'text-[#34443B] hover:text-[#073B20] hover:bg-white/80'
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Right Action: Call / WhatsApp Glass Button */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              type="button"
              onClick={handleWhatsAppCall}
              id="nav-whatsapp-btn"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-black text-white bg-[#073B20] hover:bg-[#126B35] shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer group active:scale-[0.98] border border-white/20"
            >
              <div className="w-2 h-2 rounded-full bg-[#8BE52A] animate-ping shrink-0" />
              <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] transition-colors">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.667-.699c.983.538 1.83.824 2.793.825h.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.769-5.766zm3.376 8.21c-.14.392-.711.758-1.025.795-.297.035-.67.049-1.074-.082-.249-.081-.568-.189-1.01-.38-1.874-.809-3.089-2.73-3.182-2.855-.094-.125-.768-1.021-.768-1.947s.484-1.381.656-1.57c.172-.188.375-.235.5-.235.125 0 .25.001.359.006.115.006.269-.044.422.325.156.375.531 1.296.578 1.39.047.094.078.204.016.329-.063.125-.094.203-.188.313-.094.109-.198.244-.282.329-.094.094-.192.196-.083.383.109.188.486.802 1.042 1.297.717.638 1.32.836 1.508.929.188.094.297.079.406-.047.109-.125.469-.547.594-.734.125-.188.25-.156.422-.094.172.062 1.094.516 1.281.609.188.094.313.141.359.219.047.078.047.453-.094.844z"/>
                </svg>
              </div>
              <span className="tracking-tight">Call / WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#073B20] hover:bg-white/80 focus:outline-none cursor-pointer shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Floating Frosted Glass Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto pointer-events-auto bg-white/98 backdrop-blur-3xl rounded-3xl border border-gray-200 p-4 space-y-1.5 shadow-2xl animate-in slide-in-from-top-2">
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className={`w-full text-left px-4 py-2.5 rounded-2xl text-sm font-bold transition-colors ${currentPage === 'home' ? 'bg-[#E8F5E9] text-[#073B20]' : 'text-[#34443B] hover:bg-gray-50'}`}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('about')}
            className={`w-full text-left px-4 py-2.5 rounded-2xl text-sm font-bold transition-colors ${currentPage === 'about' ? 'bg-[#E8F5E9] text-[#073B20]' : 'text-[#34443B] hover:bg-gray-50'}`}
          >
            About Us
          </button>

          {/* Product Categories */}
          <div className="pt-2 pb-1 px-3 border-t border-gray-100">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#073B20]">
              Product Categories
            </span>
          </div>

          <button
            type="button"
            onClick={() => handleLinkClick('products')}
            className={`w-full text-left px-4 py-2 rounded-2xl text-xs font-bold transition-colors flex items-center justify-between ${currentPage === 'products' ? 'bg-[#E8F5E9] text-[#073B20]' : 'text-[#34443B] hover:bg-gray-50'}`}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#073B20]" />
              <span>1. Pheromone Lures</span>
            </div>
            <ArrowRight className="w-3 h-3 text-[#073B20]" />
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('trap-guide')}
            className={`w-full text-left px-4 py-2 rounded-2xl text-xs font-bold transition-colors flex items-center justify-between ${currentPage === 'trap-guide' ? 'bg-[#E8F5E9] text-[#073B20]' : 'text-[#34443B] hover:bg-gray-50'}`}
          >
            <div className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-amber-800" />
              <span>2. Insect Traps</span>
            </div>
            <ArrowRight className="w-3 h-3 text-[#073B20]" />
          </button>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              setActiveIngredientsModalOpen(true);
            }}
            className="w-full text-left px-4 py-2 rounded-2xl text-xs font-bold transition-colors flex items-center justify-between text-[#34443B] hover:bg-gray-50"
          >
            <div className="flex items-center gap-2">
              <FlaskConical className="w-3.5 h-3.5 text-blue-700" />
              <span>3. Active Ingredients</span>
            </div>
            <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800 uppercase tracking-tight">
              Soon
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('pest-finder')}
            className={`w-full text-left px-4 py-2.5 rounded-2xl text-sm font-bold transition-colors ${currentPage === 'pest-finder' ? 'bg-[#E8F5E9] text-[#073B20]' : 'text-[#34443B] hover:bg-gray-50'}`}
          >
            Crop Solutions
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('trap-guide')}
            className={`w-full text-left px-4 py-2.5 rounded-2xl text-sm font-bold transition-colors ${currentPage === 'trap-guide' ? 'bg-[#E8F5E9] text-[#073B20]' : 'text-[#34443B] hover:bg-gray-50'}`}
          >
            Gallery &amp; Field Hardware
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('contact')}
            className={`w-full text-left px-4 py-2.5 rounded-2xl text-sm font-bold transition-colors ${currentPage === 'contact' ? 'bg-[#E8F5E9] text-[#073B20]' : 'text-[#34443B] hover:bg-gray-50'}`}
          >
            Contact Us &amp; Agronomist Support
          </button>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleWhatsAppCall}
              className="w-full py-3 rounded-2xl text-xs font-black text-white bg-[#073B20] flex items-center justify-center gap-2 shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call / WhatsApp +91 98765 43210</span>
            </button>
          </div>
        </div>
      )}

      {/* Active Ingredients Modal */}
      {activeIngredientsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-gray-200 space-y-6 relative">
            <button
              onClick={() => setActiveIngredientsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <FlaskConical className="w-6 h-6 text-blue-700" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block">
                Category 3 &bull; Information Coming Soon
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#073B20]">
                Active Ingredients
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Technical active compounds, isomer purity ratings, formulation intermediates, and custom synthesis specifications are currently being updated and will be published shortly.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F9FAF9] border border-gray-200 text-xs text-[#34443B] space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#073B20]">
                <Info className="w-4 h-4 text-[#073B20]" />
                <span>Need Technical Specifications Today?</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                For commercial inquiries regarding bulk technical grade semiochemicals, certificate of analysis (COA), or contract synthesis, please connect directly with our technical laboratory team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => {
                  setActiveIngredientsModalOpen(false);
                  handleLinkClick('contact');
                }}
                className="flex-1 py-3 px-4 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#073B20] hover:bg-[#126B35] transition-colors text-center cursor-pointer"
              >
                Contact Technical Team
              </button>
              <button
                type="button"
                onClick={() => setActiveIngredientsModalOpen(false)}
                className="py-3 px-5 rounded-full text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors text-center cursor-pointer"
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
