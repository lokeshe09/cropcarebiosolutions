import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/productsData';
import { InquiryFormData } from '../types';
import { 
  Phone, 
  Mail, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  HeartHandshake, 
  ShieldCheck, 
} from 'lucide-react';

interface ContactSectionProps {
  preFilledProduct?: string;
  preFilledAcreage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preFilledProduct = '',
  preFilledAcreage = ''
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    email: '',
    stateOrRegion: '',
    farmerType: 'individual_farmer',
    selectedProduct: preFilledProduct || PRODUCTS_DATA[0].name,
    acreage: preFilledAcreage || '2 Acres',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if props change
  React.useEffect(() => {
    if (preFilledProduct) {
      setFormData((prev) => ({ ...prev, selectedProduct: preFilledProduct }));
    }
    if (preFilledAcreage) {
      setFormData((prev) => ({ ...prev, acreage: preFilledAcreage }));
    }
  }, [preFilledProduct, preFilledAcreage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Crop Care Bio Solutions! My name is ${formData.name || 'a farmer/grower'}. I am inquiring about ${formData.selectedProduct} for ${formData.acreage || 'my farm'}. Please send catalog and price quote.`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-[#FAFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Closing Quote & CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#04170D] text-white text-center space-y-4 shadow-2xl border border-white/20 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8BE52A] text-[#04170D] text-xs font-black uppercase tracking-wider">
            <span>OUR SHARED PROMISE</span>
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-relaxed max-w-4xl mx-auto italic">
            &ldquo;Every drop of sweat, every seed of hope — together, we grow not just crops, but life itself.&rdquo;
          </p>

          <div className="pt-2 text-sm sm:text-base font-bold text-[#8BE52A] max-w-2xl mx-auto flex items-center justify-center gap-2">
            <span>Join our mission. Let&apos;s grow a greener, residue-free future together.</span>
          </div>
        </div>

        {/* Section Header with High Contrast */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F5E9] border border-[#C8E6C9] text-[#073B20] text-xs font-black uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5 text-[#126B35]" />
            <span>Get in Touch &amp; Price Quotation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#073B20] tracking-tight leading-[1.1]">
            Connect with Crop Care
          </h2>

          <p className="text-sm sm:text-base text-[#34443B] font-medium leading-relaxed">
            Whether you are a progressive farmer, commercial plantation owner, distributor, or agricultural retailer, our agronomy team is ready to assist you.
          </p>
        </div>

        {/* 2-Column Contact & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Support */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="p-7 rounded-3xl bg-white border border-gray-300 space-y-6 shadow-md">
              <h3 className="text-lg font-black text-[#073B20] flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-[#126B35]" />
                <span>Crop Care Bio Solutions Helpdesk</span>
              </h3>

              <p className="text-xs text-[#34443B] leading-relaxed font-medium">
                Contact us directly for bulk orders, dealership inquiries, dosage consultations, or customized trapping kits tailored to your regional pest pressures.
              </p>

              <div className="space-y-4">
                
                {/* Phone Contact */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-[#E8F5E9]/50 transition-colors">
                  <div className="p-2.5 rounded-xl bg-[#E8F5E9] text-[#073B20] shrink-0 border border-[#C8E6C9]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#59675F] block">Farmer Helpline &amp; Inquiries</span>
                    <a href="tel:+919876543210" className="text-sm font-black text-[#073B20] hover:text-[#126B35]">
                      +91 (Contact Support) / Direct Agronomy Line
                    </a>
                  </div>
                </div>

                {/* Email Contact */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-[#E8F5E9]/50 transition-colors">
                  <div className="p-2.5 rounded-xl bg-[#E8F5E9] text-[#073B20] shrink-0 border border-[#C8E6C9]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#59675F] block">Official Support &amp; Dealership</span>
                    <a href="mailto:info@cropcarebio.com" className="text-sm font-black text-[#073B20] hover:text-[#126B35]">
                      contact@cropcarebio.com / sales@cropcarebio.com
                    </a>
                  </div>
                </div>

                {/* Direct WhatsApp CTA Card */}
                <div className="p-5 rounded-2xl bg-[#04170D] text-white space-y-2.5 shadow-md border border-white/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#8BE52A]">
                      Instant WhatsApp Connect
                    </span>
                    <MessageSquare className="w-4 h-4 text-[#8BE52A]" />
                  </div>
                  <p className="text-xs text-[#E6EFE9] font-medium">
                    Chat directly with our technical team for instant product brochures and pricing.
                  </p>
                  <button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="mt-2 w-full py-2.5 px-4 rounded-full text-xs font-black uppercase tracking-wider text-[#04170D] bg-[#8BE52A] hover:bg-[#9cf53b] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-[#04170D]" />
                    <span>Open WhatsApp Chat</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Quick Guarantees Card */}
            <div className="p-6 rounded-3xl bg-white border border-gray-300 space-y-2.5 text-xs text-[#34443B] shadow-md">
              <div className="flex items-center gap-2 font-black text-[#073B20]">
                <ShieldCheck className="w-4 h-4 text-[#126B35]" />
                <span>Our Supply Assurance</span>
              </div>
              <ul className="space-y-1.5 text-[#34443B] font-medium pl-6 list-disc">
                <li>Factory-sealed moisture barrier pouches with 2-year shelf life</li>
                <li>Fast Pan-India dispatch via express agri-logistics</li>
                <li>Comprehensive field installation instruction guides included in every carton</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Interactive Quotation Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-gray-300 shadow-xl text-left">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#E8F5E9] text-[#073B20] mx-auto flex items-center justify-center border border-[#C8E6C9]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[#073B20]">
                    Thank You for Contacting Us!
                  </h3>
                  <p className="text-sm text-[#34443B] max-w-md mx-auto font-medium">
                    We have received your inquiry for <strong>{formData.selectedProduct}</strong>. Our agronomy specialist will connect with you via phone / WhatsApp within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-black text-white bg-[#073B20] hover:bg-[#126B35] cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <h3 className="text-base font-black text-[#073B20]">
                      Request Quotation &amp; Product Information
                    </h3>
                    <span className="text-xs text-[#073B20] font-black bg-[#E8F5E9] px-2.5 py-0.5 rounded-full border border-[#C8E6C9]">
                      Quick Response
                    </span>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-[#073B20]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-xs bg-gray-50 border border-gray-300 focus:border-[#073B20] text-[#073B20] font-medium focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-[#073B20]">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-xs bg-gray-50 border border-gray-300 focus:border-[#073B20] text-[#073B20] font-medium focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Email & State */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-[#073B20]">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="farmer@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-xs bg-gray-50 border border-gray-300 focus:border-[#073B20] text-[#073B20] font-medium focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-[#073B20]">
                        State / Region *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maharashtra, Karnataka, Punjab..."
                        value={formData.stateOrRegion}
                        onChange={(e) => setFormData({ ...formData, stateOrRegion: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-xs bg-gray-50 border border-gray-300 focus:border-[#073B20] text-[#073B20] font-medium focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Farmer Type & Acreage */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-[#073B20]">
                        I am a:
                      </label>
                      <select
                        value={formData.farmerType}
                        onChange={(e) => setFormData({ ...formData, farmerType: e.target.value as any })}
                        className="w-full px-4 py-2.5 rounded-xl text-xs bg-gray-50 border border-gray-300 focus:border-[#073B20] text-[#073B20] font-medium focus:outline-none"
                      >
                        <option value="individual_farmer">Individual Farmer / Grower</option>
                        <option value="dealer_distributor">Dealer / Retailer / Distributor</option>
                        <option value="plantation_owner">Commercial Plantation Owner</option>
                        <option value="fpo_cooperative">FPO / Farmers Cooperative</option>
                        <option value="other">Other Agriculture Professional</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-[#073B20]">
                        Farm Size / Quantity Required
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 5 Acres or 100 Lures"
                        value={formData.acreage}
                        onChange={(e) => setFormData({ ...formData, acreage: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-xs bg-gray-50 border border-gray-300 focus:border-[#073B20] text-[#073B20] font-medium focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Selected Product */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-[#073B20]">
                      Select Primary Product of Interest
                    </label>
                    <select
                      value={formData.selectedProduct}
                      onChange={(e) => setFormData({ ...formData, selectedProduct: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-gray-50 border border-gray-300 focus:border-[#073B20] text-[#073B20] font-medium focus:outline-none"
                    >
                      {PRODUCTS_DATA.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message / Additional Query */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-[#073B20]">
                      Message / Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify your crop, current pest challenge, or bulk dealership inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-gray-50 border border-gray-300 focus:border-[#073B20] text-[#073B20] font-medium focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#073B20] hover:bg-[#126B35] shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer active:scale-98"
                  >
                    {isSubmitting ? (
                      <span>Submitting Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Quotation &amp; Information Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
