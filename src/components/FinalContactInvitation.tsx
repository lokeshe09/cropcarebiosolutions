import React from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  Calculator, 
  Mail, 
  ShieldCheck, 
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin
} from 'lucide-react';
import { PageId } from '../types';
import orchardPanoramicBg from '../assets/images/orchard_panoramic_bg_1787649127220.jpg';

interface FinalContactInvitationProps {
  onNavigate: (page: PageId) => void;
}

export const FinalContactInvitation: React.FC<FinalContactInvitationProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      
      {/* Full-Bleed Panoramic Agricultural Background */}
      <div className="absolute inset-0 -z-30 pointer-events-none">
        <img
          src={orchardPanoramicBg}
          alt="Panoramic Mango Orchard"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Controlled Deep Forest Atmospheric Smoked Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04140A]/95 via-[#082414]/90 to-[#051A0D]/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Editorial Smoked Glass Invitation Card */}
        <div className="rounded-3xl bg-white/10 backdrop-blur-3xl border border-white/20 p-8 sm:p-12 lg:p-16 text-white shadow-2xl shadow-emerald-950/40 relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#A3E635]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Bold Headline & Trust Commitments */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-[#A3E635] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>DIRECT FIELD CONSULTATION</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
                Let's Protect <br />
                <span className="text-[#A3E635]">Your Crop Today.</span>
              </h2>

              <p className="text-base sm:text-lg text-emerald-100/90 font-light max-w-xl leading-relaxed">
                Connect with our certified agricultural biotechnologists to receive a customized trap density mapping, seasonal lure replacement schedule, and direct farm dispatch.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-emerald-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A3E635] shrink-0" />
                  <span>100% Free Trap Density Mapping</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A3E635] shrink-0" />
                  <span>Pan-India Fast Farm Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A3E635] shrink-0" />
                  <span>Direct Agronomist Field Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A3E635] shrink-0" />
                  <span>MRL &amp; Export Compliance Guidance</span>
                </div>
              </div>

            </div>

            {/* Right Column: 3 High-Impact Conversion Action Tiles */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Action 1: WhatsApp Specialist */}
              <a
                href="https://wa.me/919876543210?text=Hello%20Crop%20Care%20Bio%20Solutions%2C%20I%20want%20to%20consult%20an%20agronomist%20for%20my%20farm."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-black/20 hover:scale-102 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-bold">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold">WhatsApp Agronomist</div>
                    <div className="text-xs text-emerald-100 font-medium">Instant pest photo analysis &amp; advice</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Action 2: Direct Call Hotline */}
              <a
                href="tel:+919876543210"
                className="w-full flex items-center justify-between p-5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center font-bold">
                    <Phone className="w-5 h-5 text-[#A3E635]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Call Toll-Free Hotline</div>
                    <div className="text-xs text-emerald-200 font-medium">+91 98765 43210 (Mon–Sat, 8am–7pm)</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Action 3: Custom Inquiry Form */}
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="w-full flex items-center justify-between p-5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center font-bold">
                    <Mail className="w-5 h-5 text-[#A3E635]" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold">Submit Farm Inquiry</div>
                    <div className="text-xs text-emerald-200 font-medium">Request formal quotation &amp; bulk orders</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
