import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, CheckCircle, ArrowUp, Send } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nav = (page: PageId) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.hash = page;
    }
  };

  return (
    <footer className="bg-[#04170D] text-[#E6EFE9] border-t border-white/20 pt-16 pb-12 shadow-2xl relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#8BE52A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-white/20 text-left">
          
          {/* Col 1: Brand & Tagline (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-2xl bg-[#073B20] border border-[#8BE52A]/40 shadow-md p-2">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 85C50 85 20 68 18 38C16 18 36 12 50 15C64 12 84 18 82 38C80 68 50 85 50 85Z" fill="#8BE52A" />
                  <path d="M50 85C50 85 54 55 78 35C86 28 85 18 78 15C70 12 58 20 50 35C42 20 30 12 22 15C15 18 14 28 22 35C46 55 50 85 50 85Z" fill="#FFFFFF" />
                  <path d="M50 85V30" stroke="#04170D" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="flex items-baseline gap-1 leading-none">
                  <span className="font-black text-lg text-white">Crop Care</span>
                  <span className="font-black text-lg text-[#8BE52A]">Bio Solutions</span>
                </div>
                <div className="text-[10px] text-[#C7D8CC] font-bold tracking-wider uppercase mt-0.5">
                  Bio-Protection &amp; Lures
                </div>
              </div>
            </div>

            <p className="text-xs text-[#8BE52A] font-bold leading-relaxed">
              Your Problem, Your Solution with High Benefits
            </p>

            <p className="text-xs text-[#C7D8CC] leading-relaxed font-medium">
              Manufacturer of botanical pheromone lures &amp; precision insect traps empowering farmers with 100% residue-free biocontrol.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1 text-white">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 hover:bg-[#8BE52A] hover:text-[#04170D] flex items-center justify-center transition-all shadow-xs cursor-pointer"
                title="Chat on WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.667-.699c.983.538 1.83.824 2.793.825h.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.769-5.766zm3.376 8.21c-.14.392-.711.758-1.025.795-.297.035-.67.049-1.074-.082-.249-.081-.568-.189-1.01-.38-1.874-.809-3.089-2.73-3.182-2.855-.094-.125-.768-1.021-.768-1.947s.484-1.381.656-1.57c.172-.188.375-.235.5-.235.125 0 .25.001.359.006.115.006.269-.044.422.325.156.375.531 1.296.578 1.39.047.094.078.204.016.329-.063.125-.094.203-.188.313-.094.109-.198.244-.282.329-.094.094-.192.196-.083.383.109.188.486.802 1.042 1.297.717.638 1.32.836 1.508.929.188.094.297.079.406-.047.109-.125.469-.547.594-.734.125-.188.25-.156.422-.094.172.062 1.094.516 1.281.609.188.094.313.141.359.219.047.078.047.453-.094.844z"/></svg>
              </a>
              {/* Phone */}
              <a 
                href="tel:+919876543210" 
                className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 hover:bg-[#8BE52A] hover:text-[#04170D] flex items-center justify-center transition-all shadow-xs cursor-pointer"
                title="Call Agronomist"
              >
                <Phone className="w-4 h-4" />
              </a>
              {/* Email */}
              <a 
                href="mailto:info@cropcarebiosolutions.com" 
                className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 hover:bg-[#8BE52A] hover:text-[#04170D] flex items-center justify-center transition-all shadow-xs cursor-pointer"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#8BE52A]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#E6EFE9] font-medium">
              <li>
                <button type="button" onClick={() => nav('home')} className="hover:text-[#8BE52A] transition-colors cursor-pointer text-left">
                  Home Overview
                </button>
              </li>
              <li>
                <button type="button" onClick={() => nav('why-us')} className="hover:text-[#8BE52A] transition-colors cursor-pointer text-left">
                  Why Bio Solutions
                </button>
              </li>
              <li>
                <button type="button" onClick={() => nav('about')} className="hover:text-[#8BE52A] transition-colors cursor-pointer text-left">
                  About &amp; Quality Lab
                </button>
              </li>
              <li>
                <button type="button" onClick={() => nav('products')} className="hover:text-[#8BE52A] transition-colors cursor-pointer text-left">
                  Product Catalog
                </button>
              </li>
              <li>
                <button type="button" onClick={() => nav('pest-finder')} className="hover:text-[#8BE52A] transition-colors cursor-pointer text-left">
                  Crop &amp; Pest Matcher
                </button>
              </li>
              <li>
                <button type="button" onClick={() => nav('trap-guide')} className="hover:text-[#8BE52A] transition-colors cursor-pointer text-left">
                  Trap Specs &amp; Gallery
                </button>
              </li>
              <li>
                <button type="button" onClick={() => nav('calculator')} className="hover:text-[#8BE52A] transition-colors cursor-pointer text-left">
                  Acreage Dose Calculator
                </button>
              </li>
              <li>
                <button type="button" onClick={() => nav('contact')} className="hover:text-[#8BE52A] transition-colors cursor-pointer text-left">
                  Contact &amp; Dealer Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Bio Trap Categories (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#8BE52A]">
              Trap Categories
            </h4>
            <ul className="space-y-2 text-xs text-[#E6EFE9] font-medium">
              <li>
                <button type="button" onClick={() => nav('trap-guide')} className="hover:text-[#8BE52A] transition-colors cursor-pointer text-left">
                  Fruit Fly Traps (Bactrocera)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => nav('trap-guide')} className="hover:text-[#8BE52A] transition-colors cursor-pointer text-left">
                  Funnel Traps &amp; Sleeves
                </button>
              </li>
              <li>
                <button type="button" onClick={() => nav('products')} className="hover:text-[#8BE52A] transition-colors cursor-pointer text-left">
                  Synthetic Pheromone Lures
                </button>
              </li>
              <li>
                <button type="button" onClick={() => nav('products')} className="hover:text-[#8BE52A] transition-colors cursor-pointer text-left">
                  Red Palm Weevil Traps
                </button>
              </li>
              <li>
                <button type="button" onClick={() => nav('trap-guide')} className="hover:text-[#8BE52A] transition-colors cursor-pointer text-left">
                  Yellow / Blue Sticky Traps
                </button>
              </li>
              <li>
                <button type="button" onClick={() => nav('contact')} className="hover:text-[#8BE52A] transition-colors cursor-pointer text-left">
                  OEM / Custom Branding
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#8BE52A]">
              Headquarters &amp; Plant
            </h4>
            <div className="space-y-2.5 text-xs text-[#C7D8CC] font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8BE52A] shrink-0 mt-0.5" />
                <span>Crop Care Bio Solutions, 123 Green Valley, Agriculture Hub Road, Coimbatore – 641 0XX, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8BE52A] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white font-bold text-white">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8BE52A] shrink-0" />
                <a href="mailto:info@cropcarebiosolutions.com" className="hover:text-white font-bold text-white">info@cropcarebiosolutions.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#8BE52A] shrink-0" />
                <span className="font-bold text-white">www.cropcarebiosolutions.com</span>
              </div>
            </div>
          </div>

          {/* Col 5: Stay Updated (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#8BE52A]">
              Stay Connected
            </h4>
            <p className="text-xs text-[#C7D8CC] leading-relaxed font-medium">
              Receive seasonal pest alerts and new lure release notices.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter farmer email"
                  className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder:text-white/60 focus:outline-none focus:border-[#8BE52A] font-medium"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-[#04170D] bg-[#8BE52A] hover:bg-[#9cf53b] transition-all cursor-pointer shadow-md flex items-center justify-center gap-1.5 active:scale-98"
              >
                <span>Subscribe</span>
                <Send className="w-3 h-3 text-[#04170D]" />
              </button>
              {subscribed && (
                <p className="text-xs text-[#8BE52A] font-bold flex items-center gap-1 mt-1">
                  <CheckCircle className="w-3 h-3" />
                  <span>Subscribed successfully!</span>
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C7D8CC]">
          <p>© {new Date().getFullYear()} Crop Care Bio Solutions. All Rights Reserved. 100% Organic &amp; GlobalGAP Certified.</p>
          
          <button
            onClick={scrollToTop}
            className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs font-bold"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#8BE52A]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
