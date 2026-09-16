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
    <div className="space-y-8 bg-stone-50/50 pb-8">
      {/* 1. Page Header */}
      <PageHeader
        badge="Agronomic Advisory &amp; Quotations"
        title="Contact &amp;"
        highlightText="Quotation Request"
        subtitle="Speak directly with our technical team, request bulk pricing for FPOs, or get a customized IPM trap quote for your farm."
        currentPage="contact"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Column: Contact Cards & Instant Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-xl bg-white border border-stone-200 shadow-xs space-y-6">
              
              <div className="space-y-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                  Direct Support Lines
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                  Crop Care Bio Solutions
                </h3>
                <p className="text-xs text-stone-600">
                  &ldquo;Caring for Farmers. Caring for Nature.&rdquo;
                </p>
              </div>

              {/* Contact item: Phone */}
              <div className="flex items-start gap-3.5 p-4 rounded-lg bg-stone-50 border border-stone-200">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-stone-500 block">
                    Customer &amp; Agronomist Helpline
                  </span>
                  <a href="tel:+919448000000" className="text-sm font-bold text-stone-900 hover:text-[#073B20] transition-colors">
                    +91 94480 00000 / +91 80000 00000
                  </a>
                  <p className="text-xs text-stone-500 mt-0.5">Mon–Sat: 8:00 AM – 7:00 PM IST</p>
                </div>
              </div>

              {/* Contact item: Email */}
              <div className="flex items-start gap-3.5 p-4 rounded-lg bg-stone-50 border border-stone-200">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-stone-500 block">
                    Sales &amp; Dealer Inquiries
                  </span>
                  <a href="mailto:info@cropcarebiosolutions.com" className="text-sm font-bold text-stone-900 hover:text-[#073B20] transition-colors">
                    info@cropcarebiosolutions.com
                  </a>
                  <p className="text-xs text-stone-500 mt-0.5">24-hour turnaround for quotes</p>
                </div>
              </div>

              {/* Contact item: Location */}
              <div className="flex items-start gap-3.5 p-4 rounded-lg bg-stone-50 border border-stone-200">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-stone-500 block">
                    Manufacturing &amp; Synthesis Center
                  </span>
                  <p className="text-xs text-stone-800 font-medium leading-relaxed mt-0.5">
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
                className="w-full py-3 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#1ebc59] shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Inquiry</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

            </div>

          </div>

          {/* Right Column: Interactive Quotation Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-white border border-stone-200 shadow-xs space-y-6">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                    Inquiry Submitted Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="font-semibold text-stone-900">{formData.name || 'valued partner'}</strong>. Our agronomy team will review your requirements for <span className="text-emerald-800 font-semibold">{formData.productOfInterest || 'our bio solutions'}</span> and contact you within 24 hours.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#073B20] hover:bg-[#126B35] shadow-xs cursor-pointer transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                      Custom Price Estimate
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                      Request Product or Farm Quote
                    </h3>
                  </div>

                  {/* 2-Column Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-stone-700">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 text-xs sm:text-sm text-stone-900 border border-stone-300 focus:bg-white focus:border-[#073B20] focus:ring-1 focus:ring-[#073B20] outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-stone-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 text-xs sm:text-sm text-stone-900 border border-stone-300 focus:bg-white focus:border-[#073B20] focus:ring-1 focus:ring-[#073B20] outline-none transition-colors"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-stone-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. farmer@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 text-xs sm:text-sm text-stone-900 border border-stone-300 focus:bg-white focus:border-[#073B20] focus:ring-1 focus:ring-[#073B20] outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-stone-700">
                        State / District *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maharashtra, Nashik"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 text-xs sm:text-sm text-stone-900 border border-stone-300 focus:bg-white focus:border-[#073B20] focus:ring-1 focus:ring-[#073B20] outline-none transition-colors"
                      />
                    </div>

                  </div>

                  {/* Farmer Type & Product Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-stone-700">
                        I Am A:
                      </label>
                      <select
                        value={formData.farmerType}
                        onChange={(e) => setFormData({ ...formData, farmerType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 text-xs sm:text-sm text-stone-900 border border-stone-300 focus:bg-white focus:border-[#073B20] focus:ring-1 focus:ring-[#073B20] outline-none transition-colors cursor-pointer"
                      >
                        <option value="Farmer / Grower">Individual Farmer / Grower</option>
                        <option value="Commercial Orchard / Plantation">Commercial Orchard / Plantation Manager</option>
                        <option value="FPO / Agri Cooperative">FPO / Farmer Producer Company</option>
                        <option value="Agri Retailer / Distributor">Agri Retailer / Distributor</option>
                        <option value="Agronomist / Researcher">Agronomist / University Researcher</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-stone-700">
                        Product / Solution of Interest
                      </label>
                      <select
                        value={formData.productOfInterest}
                        onChange={(e) => setFormData({ ...formData, productOfInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 text-xs sm:text-sm text-stone-900 border border-stone-300 focus:bg-white focus:border-[#073B20] focus:ring-1 focus:ring-[#073B20] outline-none transition-colors cursor-pointer"
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
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-stone-700">
                      Acreage / Farm Size (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 5 Acres Tomato or 1000 Coconut Palms"
                      value={formData.acreage}
                      onChange={(e) => setFormData({ ...formData, acreage: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 text-xs sm:text-sm text-stone-900 border border-stone-300 focus:bg-white focus:border-[#073B20] focus:ring-1 focus:ring-[#073B20] outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-stone-700">
                      Specific Requirements / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your pest symptoms, crop stages, or required delivery timelines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 text-xs sm:text-sm text-stone-900 border border-stone-300 focus:bg-white focus:border-[#073B20] focus:ring-1 focus:ring-[#073B20] outline-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-5 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#073B20] hover:bg-[#126B35] shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
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
