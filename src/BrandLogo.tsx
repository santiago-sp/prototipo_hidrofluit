import { motion } from 'framer-motion';

export const BrandLogo = ({ name, i, key }: { name: string; i: number; key?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: i * 0.05 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, filter: 'grayscale(0%)', opacity: 1 }}
    className="h-16 px-8 bg-bg-card rounded-2xl border border-accent/5 flex items-center justify-center grayscale opacity-60 transition-all duration-300 shadow-sm hover:shadow-md group"
  >
    <span className="text-primary font-black tracking-tighter text-[16px] group-hover:text-accent transition-colors">{name}</span>
  </motion.div>
);