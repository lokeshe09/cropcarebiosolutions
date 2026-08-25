import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Phone, Sparkles, Layers, Bug, Sprout, ArrowRight, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
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

                <button
                  type="button"
                  onClick={() => handleLinkClick('products')}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-[#34443B] hover:bg-[#F3F8F3] hover:text-[#073B20] transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-emerald-50 text-[#073B20] flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span>All Pheromone Lures</span>
                  </div>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#073B20]" />
                </button>

                <button
                  type="button"
                  onClick={() => handleLinkClick('trap-guide')}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-[#34443B] hover:bg-[#F3F8F3] hover:text-[#073B20] transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center">
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                    <span>Fruit Fly Traps</span>
                  </div>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#073B20]" />
                </button>

                <button
                  type="button"
                  onClick={() => handleLinkClick('products')}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-[#34443B] hover:bg-[#F3F8F3] hover:text-[#073B20] transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-green-50 text-[#126B35] flex items-center justify-center">
                      <Sprout className="w-3.5 h-3.5" />
                    </div>
                    <span>Funnel &amp; Sticky Traps</span>
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

            {/* How It Works */}
            <button
              type="button"
              onClick={() => handleLinkClick('why-us')}
              className={`px-3.5 py-1.5 text-[13px] xl:text-[13.5px] font-bold transition-all duration-200 relative whitespace-nowrap cursor-pointer rounded-full ${
                currentPage === 'why-us'
                  ? 'text-[#073B20] bg-white shadow-xs border border-gray-200'
                  : 'text-[#34443B] hover:text-[#073B20] hover:bg-white/80'
              }`}
            >
              How It Works
            </button>

            {/* Dose Calculator */}
            <button
              type="button"
              onClick={() => handleLinkClick('calculator')}
              className={`px-3.5 py-1.5 text-[13px] xl:text-[13.5px] font-bold transition-all duration-200 relative whitespace-nowrap cursor-pointer rounded-full ${
                currentPage === 'calculator'
                  ? 'text-[#073B20] bg-white shadow-xs border border-gray-200'
                  : 'text-[#34443B] hover:text-[#073B20] hover:bg-white/80'
              }`}
            >
              Dose Calculator
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
          <button
            type="button"
            onClick={() => handleLinkClick('products')}
            className={`w-full text-left px-4 py-2.5 rounded-2xl text-sm font-bold transition-colors ${currentPage === 'products' ? 'bg-[#E8F5E9] text-[#073B20]' : 'text-[#34443B] hover:bg-gray-50'}`}
          >
            Our Products (Pheromones &amp; Traps)
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('pest-finder')}
            className={`w-full text-left px-4 py-2.5 rounded-2xl text-sm font-bold transition-colors ${currentPage === 'pest-finder' ? 'bg-[#E8F5E9] text-[#073B20]' : 'text-[#34443B] hover:bg-gray-50'}`}
          >
            Crop &amp; Pest Solutions
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('why-us')}
            className={`w-full text-left px-4 py-2.5 rounded-2xl text-sm font-bold transition-colors ${currentPage === 'why-us' ? 'bg-[#E8F5E9] text-[#073B20]' : 'text-[#34443B] hover:bg-gray-50'}`}
          >
            How It Works (Biocontrol Timeline)
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
            onClick={() => handleLinkClick('calculator')}
            className={`w-full text-left px-4 py-2.5 rounded-2xl text-sm font-bold transition-colors ${currentPage === 'calculator' ? 'bg-[#E8F5E9] text-[#073B20]' : 'text-[#34443B] hover:bg-gray-50'}`}
          >
            Acreage Dose Calculator
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
    </header>
  );
};
