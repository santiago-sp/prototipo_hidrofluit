import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, CheckCircle2, Cog, Send } from 'lucide-react';
import { PROJECTS_DATA } from './data';
import { SectionLabel, SectionTitle } from './components/SectionTitles';

export const Projects = () => {
  const [itemsToShow, setItemsToShow] = useState(3);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS_DATA[0] | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextProject = () => setCarouselIndex(prev => (prev + 1) % (PROJECTS_DATA.length + 1));
  const prevProject = () => setCarouselIndex(prev => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);

  useEffect(() => {
    if (carouselIndex >= PROJECTS_DATA.length) {
      const timer = setTimeout(() => setCarouselIndex(0), 0);
      return () => clearTimeout(timer);
    }
  }, [carouselIndex]);

  return (
    <section id="proyectos" className="py-28 bg-bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel>NUESTROS PROYECTOS</SectionLabel>
          <SectionTitle highlight="Acabados">Obras Civiles y Acabados</SectionTitle>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[17px] text-gray max-w-3xl mx-auto leading-relaxed">
            Visualice la calidad de nuestros acabados. Somos expertos en demolición, construcción, remodelaciones con Drywall y enchapado de pisos con mayólicas y porcelanato. Transformamos sus espacios con precisión y materiales de primera.
          </motion.p>
        </div>

        <div className="relative">
          <div className="overflow-hidden px-4 cursor-grab active:cursor-grabbing">
            <motion.div className="flex gap-8" drag="x" dragConstraints={{ left: 0, right: 0 }} onDragEnd={(_, info) => { if (info.offset.x > 100) prevProject(); else if (info.offset.x < -100) nextProject(); }} animate={{ x: `calc(-${carouselIndex * (100 / itemsToShow)}% - ${carouselIndex * (32 / itemsToShow)}px)` }} transition={{ type: "spring", stiffness: 200, damping: 25 }}>
              {[...PROJECTS_DATA, ...PROJECTS_DATA.slice(0, itemsToShow)].map((project, i) => (
                <div key={i} className={`w-full ${itemsToShow === 1 ? '' : itemsToShow === 2 ? 'sm:w-[calc(50%-16px)]' : 'sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.33px)]'} flex-shrink-0 select-none flex justify-center`}>
                  <motion.div whileHover={{ y: -12 }} className="bg-bg rounded-2xl overflow-hidden border border-accent/10 shadow-xl hover:shadow-2xl group transition-all duration-300 h-full flex flex-col w-full">
                    <div className="aspect-video relative overflow-hidden pointer-events-none flex items-center justify-center">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 object-center" referrerPolicy="no-referrer" draggable={false} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A]/90 via-[#0A0F1A]/40 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-accent/90 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider rounded-full">{project.category}</span>
                      </div>
                    </div>
                    <div className="p-7 flex flex-col flex-grow">
                      <span className="text-[12px] font-bold text-accent uppercase tracking-widest mb-2">{project.client}</span>
                      <h3 className="text-[19px] font-bold text-primary mb-4 line-clamp-2">{project.title}</h3>
                      <p className="text-[14px] text-gray leading-relaxed line-clamp-3 mb-6 flex-grow">{project.desc}</p>
                      <button onClick={() => setSelectedProject(project)} className="group/btn inline-flex items-center text-[14px] font-bold text-accent hover:text-highlight transition-colors">
                        VER DETALLES <ChevronRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={prevProject} className="absolute -left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-bg-card border-2 border-accent/30 hover:bg-accent text-accent hover:text-white rounded-full flex items-center justify-center shadow-xl transition-all z-10">
            <ChevronLeft size={28} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={nextProject} className="absolute -right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-bg-card border-2 border-accent/30 hover:bg-accent text-accent hover:text-white rounded-full flex items-center justify-center shadow-xl transition-all z-10">
            <ChevronRight size={28} />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-bg/95 backdrop-blur-md" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 40 }} className="relative w-full max-w-4xl bg-bg-card rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto border border-accent/10">
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-20 w-12 h-12 bg-bg/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-lg">
                <X size={22} />
              </button>
              <div className="aspect-video w-full relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent"></div>
              </div>
              <div className="p-10 space-y-8">
                <div>
                  <span className="text-accent font-bold text-[13px] uppercase tracking-widest">{selectedProject.client}</span>
                  <h2 className="text-[32px] font-extrabold text-primary mt-3">{selectedProject.title}</h2>
                </div>
                <div className="bg-bg rounded-2xl p-6">
                  <h4 className="text-primary font-bold text-[17px] flex items-center gap-3 mb-4">
                    <CheckCircle2 size={22} className="text-accent" /> Descripción del Proyecto
                  </h4>
                  <p className="text-gray text-[16px] leading-relaxed">{selectedProject.desc}</p>
                </div>
                <div>
                  <h4 className="text-primary font-bold text-[17px] flex items-center gap-3 mb-5">
                    <Cog size={22} className="text-accent" /> Equipos Intervenidos
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedProject.equipment.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-bg rounded-xl p-4 border border-accent/10">
                        <div className="w-2.5 h-2.5 bg-accent rounded-full"></div>
                        <span className="text-gray text-[14px] font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-6 border-t border-accent/10 flex flex-col sm:flex-row gap-4">
                  <a href={`https://wa.me/51946897942?text=Hola%20estoy%20interesado%20en%20un%20servicio%20similar%20al%20proyecto:%20${selectedProject.title}`} className="flex-grow flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-highlight hover:from-highlight hover:to-accent text-white text-center py-5 rounded-xl font-bold uppercase tracking-wider transition-all shadow-lg">
                    <Send size={20} />
                    SOLICITAR SERVICIO SIMILAR
                  </a>
                  <button onClick={() => setSelectedProject(null)} className="px-8 py-5 border-2 border-accent/30 text-primary rounded-xl font-bold uppercase tracking-wider hover:bg-accent/5 transition-all">
                    CERRAR
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};