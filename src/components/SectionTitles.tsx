import { motion } from 'framer-motion';
import React from 'react';

export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <motion.span 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-[12px] font-bold uppercase tracking-[0.2em] rounded-full mb-6"
  >
    <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
    {children}
  </motion.span>
);

export const SectionTitle = ({ children, highlight }: { children: string, highlight?: string }) => {
  if (!highlight) return <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-[40px] md:text-[48px] font-extrabold text-primary leading-[1.1] mb-8"
  >
    {children}
  </motion.h2>;
  
  const parts = children.split(highlight);
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-[40px] md:text-[48px] font-extrabold text-primary leading-[1.1] mb-8"
    >
      {parts[0]}<span className="text-highlight">{highlight}</span>{parts[1]}
    </motion.h2>
  );
};