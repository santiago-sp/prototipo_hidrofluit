import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ABOUT_ITEMS, MISSION_VISION } from './data';
import { SectionLabel } from './components/SectionTitles';

export const About = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  return (
    <section id="nosotros" className="py-28 bg-bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <SectionLabel>CONÓCENOS</SectionLabel>
            <h2 className="text-[42px] md:text-[52px] font-extrabold text-primary leading-tight">
              Más de 10 años <span className="text-highlight">respaldando</span> la industria
            </h2>
            <p className="text-[17px] text-gray leading-relaxed">
              En <strong className="text-primary">HIDROFLUID SERVICE S.A.C.</strong>, nuestra filosofía se basa en trabajar bajo un espíritu de compromiso, eficiencia y excelencia que nos permita exceder las expectativas de nuestros clientes y garantizar su satisfacción total.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {ABOUT_ITEMS.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-bg rounded-xl p-4 border border-accent/10">
                  <div className="text-accent">{item.icon}</div>
                  <span className="text-[14px] text-primary font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800" alt="Taller HIDROFLUID" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-accent to-highlight p-8 rounded-2xl shadow-2xl">
              <div className="text-white">
                <div className="text-[48px] font-extrabold">10+</div>
                <div className="text-[14px] font-medium uppercase tracking-wider">Soporte de Emergencia</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {MISSION_VISION.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`bg-bg rounded-3xl p-8 border transition-all cursor-pointer ${activeAccordion === i ? 'border-accent shadow-xl ring-1 ring-accent/20' : 'border-accent/10 hover:border-accent/30'}`} onClick={() => setActiveAccordion(i)}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${activeAccordion === i ? 'bg-accent text-white shadow-lg' : 'bg-accent/10 text-accent'}`}>
                  {item.icon}
                </div>
                <h3 className="text-[20px] font-bold text-primary">{item.title}</h3>
              </div>
              <motion.div initial={false} animate={{ height: activeAccordion === i ? 'auto' : '60px' }} className="overflow-hidden relative">
                <p className="text-[15px] text-gray leading-relaxed">{item.desc}</p>
                {activeAccordion !== i && <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-bg to-transparent"></div>}
              </motion.div>
              <button className={`mt-4 text-[13px] font-bold uppercase tracking-wider flex items-center gap-2 transition-colors ${activeAccordion === i ? 'text-accent' : 'text-primary'}`}>
                {activeAccordion === i ? 'Ver menos' : 'Leer más'} <ChevronDown size={14} className={`transition-transform duration-300 ${activeAccordion === i ? 'rotate-180' : ''}`} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};