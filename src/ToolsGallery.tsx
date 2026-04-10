import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TOOLS_GALLERY } from './data';
import { SectionLabel, SectionTitle } from './components/SectionTitles';

export const ToolsGallery = () => {
  const filteredTools = TOOLS_GALLERY.filter(t => t.image);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTools = () => setCarouselIndex(prev => (prev + 1) % (filteredTools.length + 1));
  const prevTools = () => setCarouselIndex(prev => (prev - 1 + filteredTools.length) % filteredTools.length);

  useEffect(() => {
    if (carouselIndex >= filteredTools.length) {
      const timer = setTimeout(() => setCarouselIndex(0), 0);
      return () => clearTimeout(timer);
    }
  }, [carouselIndex, filteredTools.length]);

  return (
    <section className="py-28 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel>TECNOLOGÍA</SectionLabel>
          <SectionTitle highlight="Equipamiento">Herramientas que usamos</SectionTitle>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[17px] text-gray max-w-2xl mx-auto">
            Invertimos en maquinaria de última generación para asegurar resultados milimétricos y una eficiencia superior en cada intervención técnica.
          </motion.p>
        </div>

        <div className="relative">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing">
            <motion.div className="flex gap-6" drag="x" dragConstraints={{ left: 0, right: 0 }} onDragEnd={(_, info) => { if (info.offset.x > 100) prevTools(); else if (info.offset.x < -100) nextTools(); }} animate={{ x: `calc(-${carouselIndex * (100 / itemsToShow)}% - ${carouselIndex * (24 / itemsToShow)}px)` }} transition={{ type: "spring", stiffness: 200, damping: 25 }}>
              {[...filteredTools, ...filteredTools.slice(0, itemsToShow)].map((tool, i) => (
                <div key={i} className={`w-full ${itemsToShow === 1 ? '' : itemsToShow === 2 ? 'sm:w-[calc(50%-12px)]' : 'sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]'} flex-shrink-0 select-none flex justify-center`}>
                  <motion.div whileHover={{ scale: 1.02 }} className="aspect-[590/443] rounded-2xl overflow-hidden border border-accent/10 shadow-lg relative group bg-bg-card w-full flex items-center justify-center p-8 sm:p-10">
                    <img src={tool.image} alt={tool.title || `Herramienta ${i + 1}`} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 pointer-events-none object-center" referrerPolicy="no-referrer" draggable={false} />
                    {tool.title && tool.title.length > 2 && (
                      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-white font-bold text-[14px]">{tool.title}</p>
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={prevTools} className="absolute -left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-bg/80 backdrop-blur-md border border-accent/20 hover:bg-accent text-accent hover:text-white rounded-full flex items-center justify-center shadow-xl transition-all z-10">
            <ChevronLeft size={28} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={nextTools} className="absolute -right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-bg/80 backdrop-blur-md border border-accent/20 hover:bg-accent text-accent hover:text-white rounded-full flex items-center justify-center shadow-xl transition-all z-10">
            <ChevronRight size={28} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};