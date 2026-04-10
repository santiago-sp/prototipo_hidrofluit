import { motion } from 'framer-motion';
import { PROCESS_STEPS } from './data';
import { SectionLabel, SectionTitle } from './components/SectionTitles';

export const Process = () => (
  <section className="py-28 bg-bg-card border-y border-accent/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <SectionLabel>NUESTRO MÉTODO</SectionLabel>
        <SectionTitle highlight="Paso a Paso">Cómo Trabajamos</SectionTitle>
      </div>
      <div className="grid md:grid-cols-4 gap-8 relative">
        <div className="hidden md:block absolute top-[60px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
        {PROCESS_STEPS.map((step, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="relative text-center group">
            <div className="w-24 h-24 bg-bg rounded-3xl border border-accent/10 flex items-center justify-center text-accent mb-8 mx-auto shadow-xl group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500 z-10 relative">
              <span className="absolute -top-3 -right-3 w-8 h-8 bg-highlight text-white rounded-full flex items-center justify-center text-[14px] font-bold border-4 border-bg-card">
                {i + 1}
              </span>
              {step.icon}
            </div>
            <h3 className="text-[20px] font-bold text-primary mb-3">{step.title}</h3>
            <p className="text-[14px] text-gray leading-relaxed px-4">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);