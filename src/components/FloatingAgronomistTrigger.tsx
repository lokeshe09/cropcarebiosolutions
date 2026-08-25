import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Calculator, 
  X, 
  Sparkles, 
  ChevronRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { PageId } from '../types';

interface FloatingAgronomistTriggerProps {
  onNavigate: (page: PageId) => void;
}

export const FloatingAgronomistTrigger: React.FC<FloatingAgronomistTriggerProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. Desktop Floating Glass Capsule (Right Side) */}
      <div className={`fixed right-5 bottom-8 z-40 hidden md:block transition-all duration-500 ${hasScrolled ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-90'}`}>
        
        {/* Expanded Glass Quick Action Menu */}
        {isOpen && (
          <div className="mb-3 w-80 rounded-3xl bg-white/95 backdrop-blur-3xl border border-white p-5 shadow-2xl shadow-emerald-950/20 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F5E9] text-[#1E562B] flex items-center justify-center font-bold">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0B2412]">Agronomist Online</h4>
                  <p className="text-[10px] text-gray-500 font-medium">Free Field Trap Guidance</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              <a
                href="https://wa.me/919876543210?text=Hello%20Crop%20Care%2C%20I%20need%20advice%20on%20pheromone%20traps%20for%20my%20crop."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-[#E8F5E9] hover:bg-[#C8E6C9] text-[#0B2412] transition-all group shadow-xs cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-[#0B2412]">WhatsApp Specialist</div>
                    <div className="text-[10px] text-emerald-800 font-medium">Instant reply in &lt; 5 mins</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+919876543210"
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-[#F8FAF7] hover:bg-gray-100 border border-gray-200/80 text-[#0B2412] transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0B2412] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-[#0B2412]">Call Field Hotline</div>
                    <div className="text-[10px] text-gray-500 font-medium">+91 98765 43210</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onNavigate('calculator');
                }}
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-[#F8FAF7] hover:bg-gray-100 border border-gray-200/80 text-[#0B2412] transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-[#0B2412]">Calculate Acreage Dose</div>
                    <div className="text-[10px] text-gray-500 font-medium">Get exact trap quantities</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-medium">
              <span className="flex items-center gap-1 text-[#1E562B] font-bold">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Free Advice
              </span>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onNavigate('contact');
                }}
                className="text-[#1E562B] font-bold hover:underline cursor-pointer"
              >
                Open Full Form →
              </button>
            </div>
          </div>
        )}

        {/* Trigger Pill Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#0B2412] hover:bg-[#143D1F] text-white shadow-2xl shadow-emerald-950/40 border border-emerald-700/60 hover:scale-105 transition-all duration-300 cursor-pointer group"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-[#A3E635]">
              <MessageCircle className="w-4 h-4" />
            </div>
            <span className="absolute 0 top-0 right-0 w-2.5 h-2.5 bg-[#A3E635] rounded-full animate-ping" />
            <span className="absolute 0 top-0 right-0 w-2.5 h-2.5 bg-[#A3E635] rounded-full" />
          </div>
          <div className="text-left pr-1">
            <div className="text-xs font-extrabold text-white leading-tight">Talk to Agronomist</div>
            <div className="text-[10px] text-emerald-200 font-medium">Instant WhatsApp &amp; Call</div>
          </div>
        </button>
      </div>

      {/* 2. Mobile Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-2xl border-t border-gray-200/90 px-3 py-2.5 shadow-2xl flex items-center justify-between gap-2">
        <a
          href="tel:+919876543210"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gray-100 active:bg-gray-200 text-[#0B2412] text-xs font-bold transition-colors shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-[#1E562B]" />
          <span>Call Us</span>
        </a>

        <a
          href="https://wa.me/919876543210?text=Hello%20Crop%20Care%2C%20I%20need%20expert%20guidance%20on%20pheromone%20traps."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.3] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] active:bg-[#1EBE5D] text-white text-xs font-bold transition-all shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => onNavigate('calculator')}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#0B2412] active:bg-[#143D1F] text-white text-xs font-bold transition-colors shadow-sm"
        >
          <Calculator className="w-3.5 h-3.5 text-[#A3E635]" />
          <span>Dose Calc</span>
        </button>
      </div>
    </>
  );
};
