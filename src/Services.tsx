import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from './data';
import { SectionLabel, SectionTitle } from './components/SectionTitles';

export const Services = () => (
  <section id="servicios" className="py-28 bg-gradient-to-b from-bg to-bg-card relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <SectionLabel>LO QUE HACEMOS</SectionLabel>
        <SectionTitle highlight="Servicios">Nuestros Servicios</SectionTitle>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[17px] text-gray max-w-2xl mx-auto">
          Soluciones integrales para la industria, desde el mantenimiento especializado hasta el suministro de equipos.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES.map((service, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} whileHover={{ y: -8 }} className="bg-bg-card p-10 rounded-3xl shadow-xl border border-accent/10 hover:shadow-2xl hover:border-accent/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-[100px] group-hover:scale-150 transition-transform duration-500"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-highlight rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg">
              {service.icon}
            </div>
            <h3 className="text-[22px] font-bold text-primary mb-4">{service.title}</h3>
            <p className="text-[15px] text-gray leading-relaxed mb-6">{service.desc}</p>
            <ul className="space-y-2 mb-8">
              {service.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2 text-[14px] text-gray">
                  <CheckCircle2 size={16} className="text-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <a href={service.link} className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary to-highlight text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:from-accent hover:to-highlight transition-all">
              Solicitar <ArrowRight size={18} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);