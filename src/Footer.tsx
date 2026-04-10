import { motion } from 'framer-motion';
import { Send, Mail, ChevronRight } from 'lucide-react';
import { NAV_ITEMS, FOOTER_SERVICES } from './data';

export const Footer = () => (
  <footer className="bg-gradient-to-b from-bg to-bg-footer pt-24 pb-10 border-t border-accent/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-highlight rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-extrabold text-xl">H</span>
            </div>
            <div className="leading-tight">
              <span className="text-[24px] font-extrabold tracking-tight text-primary block">HIDROFLUID</span>
              <span className="text-[11px] font-bold tracking-[0.25em] text-accent">SERVICE S.A.C.</span>
            </div>
          </div>
          <p className="text-[14px] text-gray leading-relaxed">
            RUC: 20556463680<br />
            Expertos en mantenimiento y reparación de equipos industriales en Lima.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-[14px] font-bold text-primary uppercase tracking-[0.1em]">Enlaces Rápidos</h4>
          <ul className="space-y-3 text-[14px] text-gray">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <button onClick={() => { const el = document.getElementById(item.id); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-accent transition-colors flex items-center gap-2">
                  <ChevronRight size={14} />{item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[14px] font-bold text-primary uppercase tracking-[0.1em]">Servicios</h4>
          <ul className="space-y-3 text-[14px] text-gray">
            {FOOTER_SERVICES.map((s) => (
              <li key={s}><a href="https://wa.me/51946897942" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronRight size={14} />{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[14px] font-bold text-primary uppercase tracking-[0.1em]">Contacto Directo</h4>
          <div className="space-y-4">
            <a href="https://wa.me/51946897942" target="_blank" className="flex items-center gap-3 text-[15px] text-gray hover:text-accent transition-colors">
              <div className="w-8 h-8 bg-whatsapp rounded-lg flex items-center justify-center text-white"><Send size={14} /></div>
              946 897 942
            </a>
            <a href="https://wa.me/51971537667" target="_blank" className="flex items-center gap-3 text-[15px] text-gray hover:text-accent transition-colors">
              <div className="w-8 h-8 bg-whatsapp rounded-lg flex items-center justify-center text-white"><Send size={14} /></div>
              971 537 667
            </a>
            <a href="mailto:hidrofluidmantenim@gmail.com" className="flex items-center gap-3 text-[15px] text-gray hover:text-accent transition-colors">
              <Mail size={18} className="text-accent" />hidrofluidmantenim@gmail.com
            </a>
          </div>
          <a href="https://wa.me/51946897942?text=Hola%20necesito%20cotizar" className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-highlight text-white px-6 py-3 rounded-xl font-bold text-[13px] uppercase tracking-wider hover:from-highlight hover:to-accent transition-all">
            <Send size={16} />CONTACTAR AHORA
          </a>
        </div>
      </div>

      <div className="pt-8 border-t border-accent/10 text-center">
        <p className="text-[13px] text-primary/50 font-medium">© 2025 HIDROFLUID SERVICE S.A.C. — Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);