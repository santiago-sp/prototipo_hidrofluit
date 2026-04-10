import { motion } from 'framer-motion';

export const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-accent/20 rounded-full"
        initial={{ 
          x: Math.random() * 100 + '%', 
          y: Math.random() * 100 + '%',
          scale: Math.random() * 0.5 + 0.5
        }}
        animate={{ 
          y: [null, Math.random() * -200 - 100 + 'px'],
          opacity: [0.2, 0, 0.2]
        }}
        transition={{ 
          duration: Math.random() * 10 + 15,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
      />
    ))}
  </div>
);