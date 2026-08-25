import React from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  Mail, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { PageId } from '../types';
import orchardPanoramicBg from '../assets/images/orchard_panoramic_bg_1787649127220.jpg';

interface FinalContactInvitationProps {
  onNavigate: (page: PageId) => void;
}

export const FinalContactInvitation: React.FC<FinalContactInvitationProps> = ({ onNavigate }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Editorial Deep Forest Invitation Card with Guaranteed High-Contrast Solid Canvas */}
      <div className="rounded-3xl bg-[#04170D] border-2 border-[#184E30] p-8 sm:p-12 lg:p-14 text-white shadow-2xl relative overflow-hidden text-left">
        
        {/* Subtle Organic Background Texture with 90% Dark Filter to Prevent Any Contrast Washout */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <img
            src={orchardPanoramicBg}
            alt="Orchard Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#04170D] via-[#04170D]/80 to-[#04170D]" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Bold Headline & Trust Commitments */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D3820] border border-[#276A42] text-xs font-black text-[#8BE52A] uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8BE52A]" />
              <span>DIRECT FIELD CONSULTATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Let&apos;s Protect <br />
              <span className="text-[#8BE52A]">Your Crop Today.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#E2EBE5] font-medium max-w-xl leading-relaxed">
              Connect with our certified agricultural biotechnologists to receive customized trap density mapping, seasonal lure replacement schedules, and direct farm dispatch.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-bold text-[#E2EBE5]">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#8BE52A] shrink-0" />
                <span className="text-white">100% Free Trap Density Mapping</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#8BE52A] shrink-0" />
                <span className="text-white">Pan-India Fast Farm Delivery</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#8BE52A] shrink-0" />
                <span className="text-white">Direct Agronomist Field Support</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#8BE52A] shrink-0" />
                <span className="text-white">MRL &amp; Export Compliance Guidance</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3 High-Impact Conversion Action Tiles */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Action 1: WhatsApp Specialist */}
            <a
              href="https://wa.me/919876543210?text=Hello%20Crop%20Care%20Bio%20Solutions%2C%20I%20want%20to%20consult%20an%20agronomist%20for%20my%20farm."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5a] text-white shadow-xl shadow-black/30 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-black/20 flex items-center justify-center font-bold">
                  <MessageCircle className="w-5 h-5 fill-white text-white" />
                </div>
                <div>
                  <div className="text-sm font-black text-white">WhatsApp Agronomist</div>
                  <div className="text-xs text-white/90 font-bold">Instant pest photo analysis &amp; advice</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white shrink-0" />
            </a>

            {/* Action 2: Direct Call Hotline */}
            <a
              href="tel:+919876543210"
              className="w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#0D3820] hover:bg-[#144F2E] border-2 border-[#276A42] text-white transition-all duration-200 group cursor-pointer shadow-md"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5 text-[#8BE52A]" />
                </div>
                <div>
                  <div className="text-sm font-black text-white">Call Toll-Free Hotline</div>
                  <div className="text-xs text-[#8BE52A] font-bold">+91 98765 43210 (Mon–Sat, 8am–7pm)</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>

            {/* Action 3: Custom Inquiry Form */}
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#0D3820] hover:bg-[#144F2E] border-2 border-[#276A42] text-white transition-all duration-200 group cursor-pointer shadow-md"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5 text-[#8BE52A]" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-black text-white">Submit Farm Inquiry</div>
                  <div className="text-xs text-[#E2EBE5] font-bold">Request formal quotation &amp; bulk orders</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
