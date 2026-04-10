import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Send, ChevronRight, Facebook, Instagram, Zap } from 'lucide-react';
import { NAV_ITEMS, SOCIAL_LINKS } from './data';

interface NavbarProps {
  scrolled: boolean;
  onNavigate: (id: string) => void;
}

export const Navbar = ({ scrolled, onNavigate }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className={`fixed top-0 w-full z-[110] h-10 border-b hidden md:block transition-all duration-500 ${scrolled ? 'bg-primary border-white/10 -translate-y-10' : 'bg-transparent border-white/10 translate-y-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center text-white/70 text-[12px] font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="text-accent">🕐</span> Lunes - Sábado: 9:00 AM - 6:00 PM
            </span>
            <span className="flex items-center gap-2">
              <span className="text-accent">📍</span> Santa Anita, Lima
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Síguenos:</span>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social, i) => (
                <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors p-1">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <nav className={`fixed top-0 w-full z-[100] h-[80px] transition-all duration-500 ${scrolled ? 'bg-bg/95 backdrop-blur-2xl shadow-2xl border-b border-accent/10' : 'bg-transparent md:mt-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-highlight rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-white font-extrabold text-lg">H</span>
              </div>
              <div className="leading-tight hidden sm:block">
                <span className={`text-[22px] font-extrabold tracking-tight block transition-colors ${scrolled ? "text-primary" : "text-white"}`}>HIDROFLUID</span>
                <span className="text-[10px] font-bold tracking-[0.25em] text-accent">SERVICE S.A.C.</span>
              </div>
            </motion.div>
            
            <div className="hidden lg:flex items-center space-x-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.a key={item.name} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} onClick={(e) => { e.preventDefault(); onNavigate(item.id); }} className={`text-[13px] font-semibold uppercase tracking-[0.08em] transition-all cursor-pointer relative group ${scrolled ? 'text-primary hover:text-accent' : 'text-white/90 hover:text-white'}`}>
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${scrolled ? 'bg-accent' : 'bg-white'}`}></span>
                </motion.a>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="hidden lg:flex items-center gap-4">
              <a href="https://wa.me/51946897942?text=Hola%20necesito%20informaci%C3%B3n" className={`flex items-center gap-2 text-[14px] font-medium transition-colors ${scrolled ? 'text-primary hover:text-accent' : 'text-white/90 hover:text-white'}`}>
                <div className="w-8 h-8 bg-whatsapp rounded-full flex items-center justify-center text-white">
                  <Send size={14} />
                </div>
                946 897 942
              </a>
              <a href="https://wa.me/51946897942?text=Hola%20necesito%20cotizar" className="bg-gradient-to-r from-primary to-highlight hover:from-highlight hover:to-accent text-white px-6 py-2.5 rounded-full text-[13px] font-bold uppercase tracking-[0.04em] transition-all duration-300 shadow-lg hover:shadow-xl">
                COTIZAR AHORA
              </a>
            </motion.div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-primary hover:bg-accent/10" : "text-white hover:bg-white/10"}`}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden absolute top-full left-0 right-0 bg-bg/98 backdrop-blur-2xl shadow-2xl border-t border-accent/10 overflow-hidden">
                <div className="p-6 space-y-4">
                  {NAV_ITEMS.map((item) => (
                    <a key={item.name} onClick={() => { onNavigate(item.id); setIsMenuOpen(false); }} className="block text-[18px] font-semibold text-primary py-2 border-b border-accent/10 hover:text-accent transition-colors">
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-4 flex items-center gap-4">
                    <span className="text-[12px] font-bold text-gray uppercase tracking-widest">Síguenos:</span>
                    <div className="flex gap-4">
                      {SOCIAL_LINKS.map((social, i) => (
                        <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                  <a href="https://wa.me/51946897942?text=Hola%20necesito%20cotizar" className="block w-full bg-gradient-to-r from-primary to-highlight text-white py-4 rounded-xl text-center font-bold uppercase tracking-wider mt-4">
                    COTIZAR POR WHATSAPP
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};