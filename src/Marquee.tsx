import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { BRANDS } from './data';
import { BrandLogo } from './BrandLogo';

export const Marquee = () => (
  <section className="py-8 bg-bg-card border-b border-accent/10 overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
      <span className="text-[12px] text-gray font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
        <ShieldCheck size={16} className="text-accent" />
        MARCAS QUE NOS RESPALDAN
      </span>
    </div>
    <div className="relative flex overflow-x-hidden">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
        {[...BRANDS, ...BRANDS].map((brand, i) => (
          <React.Fragment key={i}>
            <span className="text-[16px] font-black text-primary/40 uppercase tracking-tighter hover:text-accent transition-colors cursor-default">{brand}</span>
            <span className="text-accent/30 font-bold">/</span>
          </React.Fragment>
        ))}
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-12 hidden lg:grid grid-cols-5 gap-4">
      {BRANDS.slice(0, 5).map((brand, i) => (
        <BrandLogo key={`brand-logo-1-${i}`} name={brand} i={i} />
      ))}
      {BRANDS.slice(5, 10).map((brand, i) => (
        <BrandLogo key={`brand-logo-2-${i}`} name={brand} i={i + 5} />
      ))}
    </div>
  </section>
);