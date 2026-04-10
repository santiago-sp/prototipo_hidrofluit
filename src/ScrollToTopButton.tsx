import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export const ScrollToTopButton = ({ show }: { show: boolean }) => (
  <AnimatePresence>
    {show && (
      <motion.button initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 left-8 z-[998] w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:bg-accent transition-all">
        <ChevronUp size={24} />
      </motion.button>
    )}
  </AnimatePresence>
);