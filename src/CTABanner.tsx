import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const CTABanner = () => (
  <section className="py-20 bg-gradient-to-r from-primary via-highlight to-primary relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
    <motion.div animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }} transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }} className="absolute inset-0 bg-gradient-to-r from-primary via-highlight to-accent opacity-90" />
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
        <h2 className="text-[36px] md:text-[48px] font-extrabold text-white mb-6">
          ¿Problemas con su maquinaria industrial?
        </h2>
        <p className="text-[18px] text-white/90 mb-10 max-w-2xl mx-auto">
          Atención inmediata vía WhatsApp. Técnicos listos para intervenir en paros de planta y emergencias.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/51946897942?text=Emergencia%20industrial%20-%20necesito%20ayuda" className="inline-flex items-center justify-center gap-3 bg-white text-primary px-10 py-5 rounded-full text-[15px] font-bold uppercase tracking-wider hover:bg-whatsapp hover:text-white transition-all shadow-2xl group">
            <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            SOLICITAR AYUDA POR WHATSAPP
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);