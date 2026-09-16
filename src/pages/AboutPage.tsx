import React from 'react';
import { 
  Target, 
  Eye, 
  Heart, 
  Sprout, 
  Leaf, 
  Lightbulb, 
  Users, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { PageId } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PageFooterBanner } from '../components/PageFooterBanner';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 bg-stone-50/50 pb-8">
      {/* 1. Page Header */}
      <PageHeader
        badge="About Us"
        title="Crop Care Bio Solutions"
        highlightText="Caring for Farmers. Caring for Nature."
        subtitle="Manufacturer and exporter of eco-friendly pest management solutions, specializing in pheromone lures and insect traps."
        currentPage="about"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* 2. Welcome Banner (Directly from PDF Page 2) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-stone-200 shadow-xs text-left space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Welcome
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
            Welcome to Crop Care Bio Solutions
          </h2>
          <p className="text-lg text-emerald-900 font-medium leading-relaxed">
            &ldquo;Empowering farmers everywhere and honoring the Earth that gives life to us.&rdquo;
          </p>
        </div>

        {/* 3. About the Company (Word-for-Word from PDF Page 2) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-stone-200 shadow-xs text-left space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Company Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              About the Company
            </h2>
          </div>

          <div className="space-y-4 text-base text-stone-700 leading-relaxed max-w-4xl">
            <p>
              <strong className="text-stone-900 font-semibold">Crop Care Bio Solutions</strong> is a manufacturer and exporter of eco-friendly pest management solutions, specializing in pheromone lures and insect traps designed to help farmers protect their crops naturally and effectively.
            </p>
            <p>
              At Crop Care Bio Solutions, we care deeply for both farmers and nature. Every product we create is simple, effective, and affordable — developed with a passion to empower farmers through science that works with nature, not against it.
            </p>
            <p>
              Our goal is not just to sell products, but to build awareness, trust, and confidence among farmers, helping them adopt sustainable and nature-friendly farming practices that preserve soil, water, and the environment for future generations.
            </p>
          </div>

          <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-6 text-xs text-stone-600">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" /> Manufacturer &amp; Exporter
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" /> Pheromone Lures &amp; Traps
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" /> Preserving Soil &amp; Water
            </span>
          </div>
        </div>

        {/* 4. Mission & Vision (Word-for-Word from PDF Page 2) */}
        <div className="space-y-6">
          <div className="text-left space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Strategic Purpose
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              Mission &amp; Vision 🌱🌍
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            
            {/* Mission Card */}
            <div className="p-8 rounded-xl bg-white border border-stone-200 shadow-xs space-y-4 hover:border-emerald-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <Target className="w-5 h-5 text-emerald-800" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Mission
                </span>
                <h3 className="text-xl font-bold text-stone-900 mt-1 mb-2">
                  Empowering Farmers in Harmony with Nature
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                At Crop Care Bio Solutions, our mission is to empower farmers with eco-friendly, safe, and effective crop protection solutions that work in harmony with nature. We strive to reduce chemical dependency, preserve soil and water, and provide scientifically-backed, affordable products that help every farmer cultivate healthy and productive crops.
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-8 rounded-xl bg-white border border-stone-200 shadow-xs space-y-4 hover:border-emerald-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center">
                <Eye className="w-5 h-5 text-amber-800" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  Vision
                </span>
                <h3 className="text-xl font-bold text-stone-900 mt-1 mb-2">
                  A Greener, Healthier Planet
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Our vision is to create a future where farmers thrive, nature flourishes, and every crop grows in harmony with the Earth. We aim to be a trusted partner for farmers worldwide, promoting sustainability, nurturing communities, and contributing to a greener, healthier planet for generations to come.
              </p>
            </div>

          </div>
        </div>

        {/* 5. We Stand For (Word-for-Word from PDF Page 2) */}
        <div className="space-y-6">
          <div className="text-left space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              We Stand For
            </h2>
            <p className="text-sm text-stone-600">
              The 5 foundational values that guide our research, manufacturing, and farmer relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            
            {/* Pillar 1 */}
            <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900">
                Crop Care Bio Solutions
              </h3>
              <p className="text-sm font-semibold text-emerald-800">
                Caring for Farmers. Caring for Nature.
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                Dedicated to balanced solutions that protect farmers&apos; livelihoods while preserving biodiversity.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <Sprout className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900">
                Farmer First
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Every decision begins with the farmer’s needs and ends with their satisfaction.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900">
                Care for Nature
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Dedicated to working with nature, not against it. Safe for non-target fauna, honeybees, and soil microbes.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900">
                Eco-Innovation
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Sustainable, effective, and residue-free technologies that protect crops and the environment.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs space-y-3 md:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-stone-900">
                Trust &amp; Togetherness
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Growing together with farmers, partners, and communities through trust, respect, and shared success.
              </p>
            </div>

          </div>
        </div>

        {/* 6. Closing Message (Word-for-Word from PDF Page 2) */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#073B20] text-white border border-emerald-900 text-center space-y-6">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Closing Message 🌾
            </span>
            <blockquote className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-snug">
              &ldquo;Every harvest tells a story of hope — written by farmers, nurtured by nature.&rdquo;
            </blockquote>
            <p className="text-sm text-emerald-200">
              Crop Care Bio Solutions &bull; Empowering Farmers Everywhere
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-lg text-sm font-semibold text-stone-950 bg-emerald-400 hover:bg-emerald-300 shadow-xs transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('products')}
              className="px-6 py-3 rounded-lg text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 shadow-xs transition-colors cursor-pointer"
            >
              Explore Pheromone Lures
            </button>
          </div>
        </div>

      </div>

      {/* Page Footer Navigation */}
      <PageFooterBanner
        nextPageId="products"
        nextPageTitle="Pheromone Lures"
        nextPageDescription="Browse the 12 species-specific pheromone lures with field life specs, target crops, and application instructions."
        onNavigate={onNavigate}
      />
    </div>
  );
};
