import { motion } from 'framer-motion';
import { CheckCircle2, PhoneCall, ArrowRight } from 'lucide-react';
import { FloatingParticles } from './FloatingParticles';

export const Hero = ({ onNavigate }: { onNavigate: (id: string) => void }) => (
  <section id="inicio" className="relative min-h-screen flex items-center pt-[120px] pb-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920" alt="Mantenimiento Industrial" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#001c36]/95 via-[#001c36]/85 to-[#001c36]/60"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
    </div>

    <FloatingParticles />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
      <div className="max-w-[800px]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[13px] font-medium mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
          </span>
          Empresa técnica industrial · Lima, Perú · +10 años
        </motion.div>
        
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-[42px] md:text-[62px] lg:text-[72px] font-extrabold !text-white leading-[1.05] tracking-tight mb-8">
          Especialistas en{' '}
          <span className="relative">
            <span className="text-highlight">Mantenimiento</span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
              <motion.path d="M2 10C50 2 150 2 198 10" stroke="#0096c7" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.8 }} />
            </svg>
          </span>{' '}
          y Servicio Técnico <span className="text-highlight">Industrial</span>
        </motion.h1>
        
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[18px] md:text-[20px] text-white/80 font-normal leading-[1.7] max-w-[600px] mb-10">
          Tu socio estratégico en soluciones integrales de mantenimiento, reparación y venta de equipos de alta presión, motores eléctricos y sistemas industriales en Lima.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-4 mb-10">
          {[
            { icon: <CheckCircle2 size={20} />, text: 'Servicio Técnico Multimarca' },
            { icon: <CheckCircle2 size={20} />, text: 'Atención Especializada' },
            { icon: <CheckCircle2 size={20} />, text: 'Garantía Incluida' }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white/90 text-[15px] font-medium bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <span className="text-accent">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/51946897942?text=Hola%20necesito%20cotizar" className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-highlight hover:from-highlight hover:to-accent text-white px-10 py-4 rounded-full text-[15px] font-bold uppercase tracking-[0.04em] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-accent/30">
            <PhoneCall size={20} />
            SOLICITAR COTIZACIÓN
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button onClick={() => onNavigate('servicios')} className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-[15px] font-semibold transition-all duration-300 border border-white/20">
            Ver Servicios
          </button>
        </motion.div>
      </div>
    </div>
    
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
      <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
        <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
      </motion.div>
    </motion.div>
  </section>
);