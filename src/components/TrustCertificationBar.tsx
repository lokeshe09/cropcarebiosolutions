import React from 'react';
import { ShieldCheck, Award, Leaf, CheckCircle2, Heart } from 'lucide-react';

export const TrustCertificationBar: React.FC = () => {
  const certifications = [
    {
      id: 'bio-prot',
      icon: Award,
      title: 'Certified Bio Protection',
      subtitle: 'Meets National & Export Bio Standards',
    },
    {
      id: 'organic',
      icon: Leaf,
      title: '100% Organic Biocontrol',
      subtitle: 'Zero Synthetic Chemicals',
    },
    {
      id: 'export-grade',
      icon: ShieldCheck,
      title: 'Export Grade Produce',
      subtitle: 'Zero Quarantine Rejections',
    },
    {
      id: 'residue-free',
      icon: CheckCircle2,
      title: '0 ppm Residue-Free',
      subtitle: 'Nil Toxic Pre-Harvest Interval',
    },
    {
      id: 'bee-safe',
      icon: Heart,
      title: 'Honeybee & Pollinator Safe',
      subtitle: 'Species-Specific Olfactory Action',
    }
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Horizontal Frosted Glass Editorial Strip with Solid High-Contrast Styling */}
      <div className="rounded-3xl bg-white/98 backdrop-blur-2xl border border-gray-200/90 p-4 sm:p-6 lg:p-7 shadow-2xl shadow-black/10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-0 lg:divide-x lg:divide-gray-200">
          {certifications.map((item) => {
            const IconComp = item.icon;
            return (
              <div 
                key={item.id} 
                className="flex items-center gap-3.5 lg:px-5 group cursor-default transition-all"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#E8F5E9] text-[#073B20] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:bg-[#C8E6C9] transition-all">
                  <IconComp className="w-5 h-5 text-[#073B20]" />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-[13px] font-black text-[#073B20] tracking-tight leading-tight block">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#59675F] font-semibold leading-tight line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
