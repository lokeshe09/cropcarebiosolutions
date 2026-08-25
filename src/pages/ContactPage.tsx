import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ExternalLink,
} from 'lucide-react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PageFooterBanner } from '../components/PageFooterBanner';
import { PRODUCTS_DATA } from '../data/productsData';

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
    <div className="space-y-12 bg-[#FAFBF9]">
      {/* 1. Page Header */}
      <PageHeader
        badge="Agronomic Advisory &amp; Quotations"
        title="CONTACT &amp;"
        highlightText="QUOTATION REQUEST"
        subtitle="Speak directly with our technical team, request bulk pricing for FPOs, or get a customized IPM trap quote for your farm."
        currentPage="contact"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Column: Contact Cards & Instant Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-white border border-gray-300 shadow-xl space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#073B20] bg-[#E8F5E9] px-3.5 py-1 rounded-full border border-[#C8E6C9]">
                  Direct Support Lines
                </span>
                <h3 className="text-2xl font-black text-[#073B20]">
                  Crop Care Bio Solutions
                </h3>
                <p className="text-xs text-[#34443B] font-medium">
                  &ldquo;Caring for Farmers. Caring for Nature.&rdquo;
                </p>
              </div>

              {/* Contact item: Phone */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F4F9F4] border border-[#D5E7D5]">
                <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] text-[#073B20] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#59675F] block">
                    Customer &amp; Agronomist Helpline
                  </span>
                  <a href="tel:+919448000000" className="text-sm font-black text-[#073B20] hover:text-[#126B35] transition-colors">
                    +91 94480 00000 / +91 80000 00000
                  </a>
                  <p className="text-xs text-[#59675F] mt-0.5">Mon–Sat: 8:00 AM – 7:00 PM IST</p>
                </div>
              </div>

              {/* Contact item: Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-amber-900 block">
                    Sales &amp; Dealer Inquiries
                  </span>
                  <a href="mailto:info@cropcarebiosolutions.com" className="text-sm font-black text-[#073B20] hover:text-[#126B35] transition-colors">
                    info@cropcarebiosolutions.com
                  </a>
                  <p className="text-xs text-[#59675F] mt-0.5">24-hour turnaround for quotes</p>
                </div>
              </div>

              {/* Contact item: Location */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F4F9F4] border border-[#D5E7D5]">
                <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] text-[#073B20] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#59675F] block">
                    Manufacturing &amp; Synthesis Center
                  </span>
                  <p className="text-xs text-[#073B20] font-bold leading-snug">
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
                className="w-full py-4 px-5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#1ebc59] shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Inquiry</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

            </div>

          </div>

          {/* Right Column: Interactive Quotation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-300 shadow-xl space-y-6">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#E8F5E9] text-[#073B20] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[#073B20]">
                    Inquiry Submitted Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#34443B] max-w-md mx-auto font-medium leading-relaxed">
                    Thank you, <strong className="font-bold text-[#073B20]">{formData.name || 'valued partner'}</strong>. Our agronomy team will review your requirements for <span className="text-[#126B35] font-bold">{formData.productOfInterest || 'our bio solutions'}</span> and contact you within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#073B20] hover:bg-[#126B35] shadow-xs cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-[#126B35]">
                      Custom Price Estimate
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#073B20]">
                      Request Product or Farm Quote
                    </h3>
                  </div>

                  {/* 2-Column Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="space-y-1">
                      <label className="block text-xs font-black uppercase tracking-wider text-[#073B20]">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-gray-50 text-xs sm:text-sm text-[#073B20] border border-gray-300 focus:border-[#073B20] focus:bg-white outline-none font-medium"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-black uppercase tracking-wider text-[#073B20]">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-gray-50 text-xs sm:text-sm text-[#073B20] border border-gray-300 focus:border-[#073B20] focus:bg-white outline-none font-medium"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="space-y-1">
                      <label className="block text-xs font-black uppercase tracking-wider text-[#073B20]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. farmer@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-gray-50 text-xs sm:text-sm text-[#073B20] border border-gray-300 focus:border-[#073B20] focus:bg-white outline-none font-medium"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-black uppercase tracking-wider text-[#073B20]">
                        State / District *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maharashtra, Nashik"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-gray-50 text-xs sm:text-sm text-[#073B20] border border-gray-300 focus:border-[#073B20] focus:bg-white outline-none font-medium"
                      />
                    </div>

                  </div>

                  {/* Farmer Type & Product Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="space-y-1">
                      <label className="block text-xs font-black uppercase tracking-wider text-[#073B20]">
                        I Am A:
                      </label>
                      <select
                        value={formData.farmerType}
                        onChange={(e) => setFormData({ ...formData, farmerType: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-gray-50 text-xs sm:text-sm text-[#073B20] border border-gray-300 focus:border-[#073B20] focus:bg-white outline-none font-medium cursor-pointer"
                      >
                        <option value="Farmer / Grower">Individual Farmer / Grower</option>
                        <option value="Commercial Orchard / Plantation">Commercial Orchard / Plantation Manager</option>
                        <option value="FPO / Agri Cooperative">FPO / Farmer Producer Company</option>
                        <option value="Agri Retailer / Distributor">Agri Retailer / Distributor</option>
                        <option value="Agronomist / Researcher">Agronomist / University Researcher</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-black uppercase tracking-wider text-[#073B20]">
                        Product / Solution of Interest
                      </label>
                      <select
                        value={formData.productOfInterest}
                        onChange={(e) => setFormData({ ...formData, productOfInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-gray-50 text-xs sm:text-sm text-[#073B20] border border-gray-300 focus:border-[#073B20] focus:bg-white outline-none font-medium cursor-pointer"
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
                    <label className="block text-xs font-black uppercase tracking-wider text-[#073B20]">
                      Acreage / Farm Size (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 5 Acres Tomato or 1000 Coconut Palms"
                      value={formData.acreage}
                      onChange={(e) => setFormData({ ...formData, acreage: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-gray-50 text-xs sm:text-sm text-[#073B20] border border-gray-300 focus:border-[#073B20] focus:bg-white outline-none font-medium"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="block text-xs font-black uppercase tracking-wider text-[#073B20]">
                      Specific Requirements / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your pest symptoms, crop stages, or required delivery timelines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-gray-50 text-xs sm:text-sm text-[#073B20] border border-gray-300 focus:border-[#073B20] focus:bg-white outline-none font-medium"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#073B20] hover:bg-[#126B35] shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Official Quote Request</span>
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              )}

            </div>
          </div>

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
