import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { STATS } from './data';

const AnimatedCounter = ({ end, suffix = '' }: { end: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      const num = parseInt(end.replace(/\D/g, ''));
      const duration = 2000;
      const steps = 60;
      const increment = num / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= num) {
          setCount(num);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }
  }, [isInView, end]);
  
  return <span ref={ref}>{count}{suffix}</span>;
};

export const StatsBar = () => (
  <section className="py-8 bg-gradient-to-r from-primary via-highlight to-primary relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {STATS.map((stat, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
            <div className="flex justify-center mb-2 text-white/80">{stat.icon}</div>
            <div className="text-[36px] md:text-[44px] font-extrabold text-white leading-none mb-1">
              <AnimatedCounter end={stat.num} />
            </div>
            <div className="text-[11px] text-white/70 uppercase tracking-[0.15em] font-semibold">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);