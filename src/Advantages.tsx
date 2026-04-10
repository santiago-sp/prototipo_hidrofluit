import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { ADVANTAGES } from './data';
import { SectionLabel, SectionTitle } from './components/SectionTitles';
import { FloatingParticles } from './FloatingParticles';

export const Advantages = () => (
  <section className="py-28 bg-bg relative overflow-hidden">
    <FloatingParticles />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <SectionLabel>NUESTRAS VENTAJAS</SectionLabel>
        <SectionTitle highlight="HIDROFLUID">¿Por Qué Elegir HIDROFLUID?</SectionTitle>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[17px] text-gray max-w-2xl mx-auto">
          Más que un proveedor, somos un socio estratégico comprometido con el éxito de sus operaciones industriales.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {ADVANTAGES.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8, scale: 1.02 }} className="bg-bg-card p-8 rounded-2xl border border-accent/10 shadow-lg hover:shadow-2xl transition-all duration-300 h-full group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/5 to-transparent rounded-bl-full"></div>
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-highlight rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-[20px] font-bold text-primary mb-4">{item.title}</h3>
            <p className="text-[15px] text-gray leading-relaxed">{item.desc}</p>
            <div className="mt-6 pt-4 border-t border-accent/10">
              <a href="https://wa.me/51946897942" className="inline-flex items-center text-accent font-semibold text-[13px] hover:gap-3 gap-2 transition-all">
                Conocer más <ChevronRight size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);