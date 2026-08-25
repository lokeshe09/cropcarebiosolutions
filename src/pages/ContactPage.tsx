import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Sprout, 
  ShieldCheck, 
  ExternalLink,
  HelpCircle
} from 'lucide-react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PageFooterBanner } from '../components/PageFooterBanner';
import { PRODUCTS_DATA } from '../data/productsData';
import { AnimatedCard } from '../components/AnimatedCard';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  preFilledProduct?: string;
  preFilledAcreage?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  preFilledProduct = '',
  preFilledAcreage = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    farmerType: 'Farmer / Grower',
    productOfInterest: preFilledProduct,
    acreage: preFilledAcreage,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preFilledProduct) {
      setFormData((prev) => ({ ...prev, productOfInterest: preFilledProduct }));
    }
    if (preFilledAcreage) {
      setFormData((prev) => ({ ...prev, acreage: preFilledAcreage }));
    }
  }, [preFilledProduct, preFilledAcreage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = `Hello Crop Care Bio Solutions, I would like to inquire about:
*Product/Solution*: ${formData.productOfInterest || 'Pheromone Lures & Traps'}
*Farm Area*: ${formData.acreage || 'Not specified'}
*Name*: ${formData.name || 'Farmer / Partner'}
*Location*: ${formData.location || 'India'}
*Type*: ${formData.farmerType}
*Message*: ${formData.message || 'Please share pricing, dosage protocol and bulk supply details.'}`;

    return `https://wa.me/919448000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="space-y-12">
      {/* 1. Page Header */}
      <PageHeader
        badge="Agronomic Advisory & Quotations"
        title="CONTACT &"
        highlightText="QUOTATION REQUEST"
        subtitle="Speak directly with our technical team, request bulk pricing for FPOs, or get a customized IPM trap quote for your farm."
        currentPage="contact"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Instant Channels */}
          <AnimatedCard delay={0.1} distance={28} className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-[36px] bg-white/50 backdrop-blur-2xl border border-white/80 shadow-xl space-y-6">
              
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#606C38] bg-[#E9EDC9] px-3 py-1 rounded-full border border-[#606C38]/20">
                  Direct Support Lines
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#283618]">
                  Crop Care Bio Solutions
                </h3>
                <p className="text-xs text-[#555] font-light">
                  “Caring for Farmers. Caring for Nature.”
                </p>
              </div>

              {/* Contact item: Phone */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/70 border border-white/90 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#E9EDC9] text-[#606C38] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#888] block">
                    Customer & Agronomist Helpline
                  </span>
                  <a href="tel:+919448000000" className="text-sm font-bold text-[#283618] hover:text-[#606C38] transition-colors">
                    +91 94480 00000 / +91 80000 00000
                  </a>
                  <p className="text-[11px] text-[#666] mt-0.5">Mon–Sat: 8:00 AM – 7:00 PM IST</p>
                </div>
              </div>

              {/* Contact item: Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/70 border border-white/90 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#FEFAE0] text-[#BC6C25] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#888] block">
                    Sales & Dealer Inquiries
                  </span>
                  <a href="mailto:info@cropcarebiosolutions.com" className="text-sm font-bold text-[#283618] hover:text-[#606C38] transition-colors">
                    info@cropcarebiosolutions.com
                  </a>
                  <p className="text-[11px] text-[#666] mt-0.5">24-hour turnaround for quotes</p>
                </div>
              </div>

              {/* Contact item: Location */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/70 border border-white/90 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#E9EDC9] text-[#283618] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#888] block">
                    Manufacturing & Synthesis Center
                  </span>
                  <p className="text-xs text-[#283618] font-medium leading-snug">
                    Crop Care Bio Solutions Agricultural Complex,<br />
                    Industrial Bio-Chemical Park, Karnataka / All-India Distribution.
                  </p>
                </div>
              </div>

              {/* WhatsApp Quick Connect Button */}
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#1ebc59] shadow-lg shadow-[#25D366]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Inquiry</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

            </div>

          </AnimatedCard>

          {/* Right Column: Interactive Quotation Form */}
          <AnimatedCard delay={0.2} distance={28} className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[36px] bg-white/50 backdrop-blur-2xl border border-white/80 shadow-2xl space-y-6">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#E9EDC9] text-[#606C38] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#283618]">
                    Inquiry Submitted Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555] max-w-md mx-auto font-light leading-relaxed">
                    Thank you, <strong className="font-semibold text-[#283618]">{formData.name || 'valued partner'}</strong>. Our agronomy team will review your requirements for <span className="text-[#606C38] font-semibold">{formData.productOfInterest || 'our bio solutions'}</span> and contact you within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#283618] bg-white/80 hover:bg-[#E9EDC9] border border-white/90 shadow-xs cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#606C38]">
                      Custom Price Estimate
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#283618]">
                      Request Product or Farm Quote
                    </h3>
                  </div>

                  {/* 2-Column Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#283618]">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl glass-input text-xs sm:text-sm text-[#283618] border border-[#606C38]/20 focus:border-[#606C38]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#283618]">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl glass-input text-xs sm:text-sm text-[#283618] border border-[#606C38]/20 focus:border-[#606C38]"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#283618]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. farmer@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl glass-input text-xs sm:text-sm text-[#283618] border border-[#606C38]/20 focus:border-[#606C38]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#283618]">
                        State / District *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maharashtra, Nashik"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl glass-input text-xs sm:text-sm text-[#283618] border border-[#606C38]/20 focus:border-[#606C38]"
                      />
                    </div>

                  </div>

                  {/* Farmer Type & Product Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#283618]">
                        I Am A:
                      </label>
                      <select
                        value={formData.farmerType}
                        onChange={(e) => setFormData({ ...formData, farmerType: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl glass-input text-xs sm:text-sm text-[#283618] border border-[#606C38]/20 focus:border-[#606C38] cursor-pointer"
                      >
                        <option value="Farmer / Grower">Individual Farmer / Grower</option>
                        <option value="Commercial Orchard / Plantation">Commercial Orchard / Plantation Manager</option>
                        <option value="FPO / Agri Cooperative">FPO / Farmer Producer Company</option>
                        <option value="Agri Retailer / Distributor">Agri Retailer / Distributor</option>
                        <option value="Agronomist / Researcher">Agronomist / University Researcher</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#283618]">
                        Product / Solution of Interest
                      </label>
                      <select
                        value={formData.productOfInterest}
                        onChange={(e) => setFormData({ ...formData, productOfInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl glass-input text-xs sm:text-sm text-[#283618] border border-[#606C38]/20 focus:border-[#606C38] cursor-pointer"
                      >
                        <option value="">-- Select Specific Product --</option>
                        {PRODUCTS_DATA.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name} ({p.pestCommonName})
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Acreage / Land Area */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#283618]">
                      Acreage / Farm Size (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 5 Acres Tomato or 1000 Coconut Palms"
                      value={formData.acreage}
                      onChange={(e) => setFormData({ ...formData, acreage: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl glass-input text-xs sm:text-sm text-[#283618] border border-[#606C38]/20 focus:border-[#606C38]"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#283618]">
                      Specific Requirements / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your pest symptoms, crop stages, or required delivery timelines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl glass-input text-xs sm:text-sm text-[#283618] border border-[#606C38]/20 focus:border-[#606C38]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#606C38] hover:bg-[#283618] shadow-lg shadow-[#606C38]/25 transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Official Quote Request</span>
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              )}

            </div>
          </AnimatedCard>

        </div>

      </div>

      {/* Page Footer Navigation */}
      <PageFooterBanner
        nextPageId="home"
        nextPageTitle="Home Overview"
        nextPageDescription="Return to the main overview, featured biological products, and farm metrics."
        onNavigate={onNavigate}
      />
    </div>
  );
};
