/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  ChevronLeft,
  ChevronDown,
  Menu, 
  X, 
  Zap,
  Star,
  Check,
  Clock,
  ShieldCheck,
  Wrench,
  UserCheck,
  Settings,
  Droplets,
  Wind,
  Facebook,
  Instagram,
  Image as ImageIcon,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Product {
  name: string;
  brand: string;
  desc: string;
  category: string;
}

// --- Data ---
const BRANDS = [
  'KÄRCHER', 'WEG', 'SIEMENS', 'SNAP-ON', 'CHICAGO PNEUMATIC', 
  'DELCROSA', 'MOTOVARIO', 'SACAMI', 'STM', 'SITI'
];
const PRODUCTS: Product[] = [
  // MOTORES ELÉCTRICOS
  { name: 'Motores Trifásicos WEG', brand: 'WEG', desc: 'Motores de alta eficiencia para aplicaciones industriales pesadas.', category: 'Motores Eléctricos' },
  { name: 'Motores Monofásicos', brand: 'Siemens / Delcrosa', desc: 'Soluciones confiables para equipos menores y talleres.', category: 'Motores Eléctricos' },
  // EQUIPOS DE LEVANTE
  { name: 'Plumas Hidráulicas', brand: 'Snap-on · Chicago Pneumatic', desc: 'Equipos de alta resistencia para izaje de motores.', category: 'Equipos de Levante' },
  { name: 'Gatos de Transmisión', brand: 'Tipo botella y lagarto', desc: 'Soporte robusto para transmisiones y cajas.', category: 'Equipos de Levante' },
  // LAVADO Y LIMPIEZA
  { name: 'Hidrolavadoras Kärcher HD', brand: 'Kärcher', desc: 'Limpieza profunda con tecnología alemana de alta presión.', category: 'Lavado y Limpieza' },
  { name: 'Aspiradoras Industriales', brand: 'Kärcher', desc: 'Equipos de succión potente para sólidos y líquidos.', category: 'Lavado y Limpieza' },
  // CARROCERÍA
  { name: 'Sistemas de Lijado', brand: 'Mirka / 3M', desc: 'Equipos neumáticos y eléctricos para acabado de superficies.', category: 'Carrocería' },
  // ALMACENAJE
  { name: 'Gabinetes Porta Herramientas', brand: 'Snap-on', desc: 'Organización profesional y seguridad para su taller.', category: 'Almacenaje' },
  // ENGRASE Y LUBRICACIÓN
  { name: 'Bombas de Engrase Neumáticas', brand: 'Groeneveld', desc: 'Sistemas automáticos y manuales de lubricación.', category: 'Engrase y Lubricación' },
  // TORQUE E IZAJE
  { name: 'Torquímetros de Precisión', brand: 'Snap-on', desc: 'Herramientas de ajuste crítico con certificación.', category: 'Torque e Izaje' },
  // HERRAMIENTAS NEUMÁTICAS
  { name: 'Llaves de Impacto', brand: 'Chicago Pneumatic', desc: 'Potencia y durabilidad para trabajos exigentes.', category: 'Herramientas Neumáticas' },
  // SOLDADURA
  { name: 'Máquinas de Soldar Inverter', brand: 'Miller / Lincoln', desc: 'Equipos compactos de alta tecnología para soldadura.', category: 'Soldadura' },
];

const CATEGORIES = [
  'Todos', 'Motores Eléctricos', 'Equipos de Levante', 'Lavado y Limpieza', 
  'Carrocería', 'Almacenaje', 'Engrase y Lubricación', 'Torque e Izaje', 
  'Herramientas Neumáticas', 'Soldadura'
];

const ADVANTAGES = [
  { icon: <Clock size={24} />, title: 'Experiencia Técnica', desc: 'Más de 10 años brindando soluciones especializadas a la industria peruana.' },
  { icon: <ShieldCheck size={24} />, title: 'Marcas Líderes', desc: 'Trabajamos con repuestos originales y equipos de las mejores marcas mundiales.' },
  { icon: <Wrench size={24} />, title: 'Garantía Real', desc: 'Todos nuestros servicios y equipos cuentan con respaldo técnico post-venta garantizado.' },
  { icon: <UserCheck size={24} />, title: 'Atención Especializada', desc: 'Técnicos certificados que brindan diagnósticos precisos y soluciones eficientes.' },
  { icon: <Settings size={24} />, title: 'Equipamiento Moderno', desc: 'Contamos con herramientas de última generación para diagnósticos y reparaciones.' }
];

const EQUIPMENT_TYPES = [
  { icon: <Zap size={32} />, title: 'Motores Eléctricos', desc: 'Venta y mantenimiento de motores trifásicos y monofásicos.' },
  { icon: <Settings size={32} />, title: 'Equipos de Levante', desc: 'Gatos hidráulicos, plumas y elevadores industriales.' },
  { icon: <Droplets size={32} />, title: 'Lavado y Limpieza', desc: 'Hidrolavadoras profesionales y sistemas de limpieza industrial.' },
  { icon: <Wrench size={32} />, title: 'Herramientas Industriales', desc: 'Equipos neumáticos, de torque y herramientas especializadas.' }
];

const PROJECTS_DATA = [
  {
    title: 'Mantenimiento de Hidrolavadoras Industriales',
    client: 'Empresa de Transportes',
    desc: 'Overhaul completo de 5 hidrolavadoras Kärcher HD 10/25, incluyendo cambio de sellos, válvulas y mantenimiento de motores.',
    equipment: ['Hidrolavadoras Kärcher HD 10/25', 'Bombas de alta presión', 'Motores trifásicos'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Instalación de Sistema de Bombeo',
    client: 'Planta Industrial Santa Anita',
    desc: 'Montaje y puesta en marcha de sistema de bombeo para lavado de flota pesada, con control automatizado.',
    equipment: ['Bombas centrífugas', 'Tableros de control', 'Tuberías de alta presión'],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Reparación de Motores Eléctricos',
    client: 'Minera del Centro',
    desc: 'Rebobinado y cambio de rodamientos de motores de 50HP, garantizando eficiencia energética y durabilidad.',
    equipment: ['Motores de 50HP', 'Rodamientos SKF', 'Barniz dieléctrico'],
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Mantenimiento de Equipos de Levante',
    client: 'Taller Mecánico Autorizado',
    desc: 'Certificación y mantenimiento preventivo de elevadores de 4 columnas y plumas hidráulicas.',
    equipment: ['Elevadores de 4 columnas', 'Plumas hidráulicas', 'Gatos de fosa'],
    image: 'https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Suministro de Herramientas Neumáticas',
    client: 'Línea de Ensamblaje Automotriz',
    desc: 'Implementación de llaves de impacto y sistemas de torque para línea de producción continua.',
    equipment: ['Llaves de impacto CP', 'Torquímetros Snap-on', 'Filtros de aire'],
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Servicio Técnico de Compresoras',
    client: 'Fábrica de Alimentos',
    desc: 'Mantenimiento integral de compresoras de tornillo, asegurando aire comprimido libre de impurezas.',
    equipment: ['Compresoras de tornillo', 'Secadores de aire', 'Filtros coalescentes'],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800'
  }
];

// --- Components ---

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[12px] text-accent font-semibold uppercase tracking-[0.2em] block mb-4">
    {children}
  </span>
);

const SectionTitle = ({ children, highlight }: { children: string, highlight?: string }) => {
  if (!highlight) return <h2 className="text-[38px] font-extrabold text-primary mb-6">{children}</h2>;
  
  const parts = children.split(highlight);
  return (
    <h2 className="text-[38px] font-extrabold text-primary mb-6">
      {parts[0]}
      <span className="text-highlight">{highlight}</span>
      {parts[1]}
    </h2>
  );
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Todos');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS_DATA[0] | null>(null);
  const [projectCarouselIndex, setProjectCarouselIndex] = useState(0);

  const isProductsPage = typeof window !== 'undefined' && window.location.pathname.includes('productos.html');

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

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const maxIndex = ADVANTAGES.length - itemsToShow;
      setCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, itemsToShow]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 68;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const filteredProducts = activeTab === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-bg selection:bg-accent selection:text-white font-sans">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-[100] h-[68px] transition-all duration-300 ${scrolled ? 'bg-bg/95 backdrop-blur-xl shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="leading-tight">
                <span className={`text-[20px] font-extrabold tracking-tight block ${scrolled ? "text-primary" : "text-white"}`}>HIDROFLUID</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-accent">SERVICE S.A.C.</span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-10">
              {[
                { name: 'INICIO', href: 'index.html#inicio' },
                { name: 'SERVICIOS', href: 'index.html#servicios' },
                { name: 'PRODUCTOS', href: 'productos.html' },
                { name: 'NOSOTROS', href: 'index.html#nosotros' },
                { name: 'CONTACTO', href: 'index.html#contacto' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.name === 'PRODUCTOS' && window.location.pathname.includes('productos.html') ? '#' : item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('index.html#')) {
                      if (window.location.pathname.includes('productos.html')) {
                        // Let the link navigate to index.html
                      } else {
                        e.preventDefault();
                        scrollToSection(item.href.split('#')[1]);
                      }
                    }
                  }}
                  className={`text-[13px] font-medium uppercase tracking-[0.06em] transition-colors ${item.name === 'PRODUCTOS' && isProductsPage ? 'text-accent' : (scrolled ? 'text-primary hover:text-highlight' : 'text-white hover:text-white/80')}`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center">
              <a 
                href="https://wa.me/51946897942?text=Hola%20necesito%20cotizar" 
                className="bg-primary hover:bg-accent text-white px-6 py-2.5 rounded-full text-[13px] font-bold uppercase tracking-[0.04em] transition-all duration-300"
              >
                COTIZAR
              </a>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 ${scrolled ? "text-primary" : "text-white"}`}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden fixed inset-0 top-[68px] bg-bg shadow-xl z-[90] p-6 space-y-8"
            >
              <div className="flex flex-col space-y-6">
                {[
                  { name: 'INICIO', href: 'index.html#inicio' },
                  { name: 'SERVICIOS', href: 'index.html#servicios' },
                  { name: 'PRODUCTOS', href: 'productos.html' },
                  { name: 'NOSOTROS', href: 'index.html#nosotros' },
                  { name: 'CONTACTO', href: 'index.html#contacto' }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith('index.html#') && !window.location.pathname.includes('productos.html')) {
                        e.preventDefault();
                        scrollToSection(item.href.split('#')[1]);
                      }
                    }}
                    className={`text-[18px] font-semibold text-left ${item.name === 'PRODUCTOS' && isProductsPage ? 'text-accent' : 'text-primary'}`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a 
                href="https://wa.me/51946897942?text=Hola%20necesito%20cotizar"
                className="block w-full bg-primary text-white py-4 rounded-full text-center font-bold uppercase tracking-wider"
              >
                COTIZAR POR WHATSAPP
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      {!isProductsPage && (
        <section id="inicio" className="relative min-h-screen flex items-center pt-[160px] pb-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920" 
              alt="Mantenimiento Industrial" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001c36]/95 via-[#001c36]/80 to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="max-w-[700px] space-y-8">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-accent/12 border border-accent/30 text-accent text-[13px] font-medium tracking-wide">
                Empresa técnica industrial · Lima, Perú
              </div>
              
              <h1 className="text-[38px] md:text-[64px] font-extrabold !text-white leading-[1.1] tracking-tight">
                Equipos industriales y mantenimiento <span className="text-highlight">especializado</span>
              </h1>
              
              <p className="text-[17px] text-gray font-normal leading-[1.7]">
                Especialistas en mantenimiento, reparación y venta de equipos de alta presión, motores y sistemas de bombeo en Lima.
              </p>

              <div className="space-y-3">
                {[
                  'Servicio Técnico Multimarca',
                  'Atención Especializada a Industrias',
                  'Garantía y Respaldo Técnico'
                ].map((bullet, i) => (
                  <div key={i} className="flex items-center gap-3 !text-white text-[14px] font-normal">
                    <Check size={16} className="text-accent" />
                    {bullet}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="productos.html"
                  className="inline-flex items-center justify-center bg-primary hover:bg-accent text-white px-8 py-3.5 rounded-full text-[14px] font-bold uppercase tracking-[0.04em] transition-all duration-300"
                >
                  VER PRODUCTOS
                </a>
                <a 
                  href="https://wa.me/51946897942?text=Hola%20necesito%20cotizar"
                  className="inline-flex items-center justify-center bg-transparent border border-white/30 hover:border-white text-white px-8 py-3.5 rounded-full text-[14px] font-bold uppercase tracking-[0.04em] transition-all duration-300"
                >
                  SOLICITAR COTIZACIÓN
                </a>
              </div>

              <div className="flex items-center gap-2 pt-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-[13px] text-gray font-medium">Más de 10 años de trayectoria técnica</span>
              </div>
            </div>
          </div>
          
          {/* Transition Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none"></div>
        </section>
      )}

      {/* Marquee Section */}
      {!isProductsPage && (
        <section className="py-6 bg-bg-card border-y border-border overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
            <span className="text-[12px] text-gray font-medium uppercase tracking-[0.15em]">MARCAS QUE NOS RESPALDAN</span>
          </div>
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
              {[...BRANDS, ...BRANDS].map((brand, i) => (
                <React.Fragment key={i}>
                  <span className="text-[15px] font-semibold text-primary opacity-50 uppercase tracking-wider">
                    {brand}
                  </span>
                  {i < BRANDS.length * 2 - 1 && <span className="text-primary opacity-30">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      {!isProductsPage && (
        <section id="ventajas" className="py-24 bg-bg relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <SectionLabel>NUESTRAS VENTAJAS</SectionLabel>
              <SectionTitle highlight="HIDROFLUID">¿Por Qué Elegir HIDROFLUID?</SectionTitle>
            </div>

            <div 
              className="relative px-4 sm:px-12"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <motion.div 
                  className="flex gap-6"
                  animate={{ x: `calc(-${carouselIndex * (100 / itemsToShow)}% - ${carouselIndex * (24 / itemsToShow)}px)` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {ADVANTAGES.map((item, i) => (
                    <div 
                      key={i} 
                      className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0"
                    >
                      <motion.div 
                        whileHover={{ y: -4, borderColor: 'var(--color-primary)' }}
                        className="bg-bg-card p-8 rounded-xl border border-gray/10 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                      >
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6">
                          {item.icon}
                        </div>
                        <h3 className="text-[18px] font-semibold text-primary mb-4">{item.title}</h3>
                        <p className="text-[15px] text-gray font-normal leading-[1.7] flex-grow">{item.desc}</p>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={() => setCarouselIndex(prev => prev === 0 ? ADVANTAGES.length - itemsToShow : prev - 1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/5 hover:bg-primary text-accent hover:text-accent rounded-full flex items-center justify-center transition-all z-10"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setCarouselIndex(prev => prev >= ADVANTAGES.length - itemsToShow ? 0 : prev + 1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/5 hover:bg-primary text-accent hover:text-accent rounded-full flex items-center justify-center transition-all z-10"
              >
                <ChevronRight size={20} />
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-10">
                {Array.from({ length: ADVANTAGES.length - itemsToShow + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${carouselIndex === i ? 'bg-accent w-6' : 'bg-white/20'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {!isProductsPage && (
        <section id="servicios" className="py-24 bg-bg-card relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <SectionLabel>LO QUE HACEMOS</SectionLabel>
              <SectionTitle highlight="Servicios">Nuestros Servicios</SectionTitle>
              <p className="text-[16px] text-gray font-normal max-w-2xl mx-auto">
                Soluciones integrales para la industria, desde el mantenimiento especializado hasta el suministro de equipos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Wrench size={24} />, 
                  title: 'Mantenimiento y Reparación', 
                  desc: 'Servicio técnico especializado para hidrolavadoras, motores, bombas y herramientas industriales con repuestos originales.',
                  link: 'https://wa.me/51946897942?text=Hola%20necesito%20mantenimiento%20y%20reparación'
                },
                { 
                  icon: <Settings size={24} />, 
                  title: 'Alquiler de Máquinas y Herramientas', 
                  desc: 'Disponemos de una flota de equipos de alta presión y herramientas para trabajos temporales o de emergencia.',
                  link: 'https://wa.me/51946897942?text=Hola%20necesito%20alquilar%20equipos'
                },
                { 
                  icon: <Droplets size={24} />, 
                  title: 'Reposición de Stock', 
                  desc: 'Venta directa de equipos nuevos, repuestos y consumibles industriales de las mejores marcas del mercado.',
                  link: 'https://wa.me/51946897942?text=Hola%20necesito%20comprar%20repuestos%20o%20equipos'
                }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -4 }}
                  className="bg-bg-card p-8 rounded-xl shadow-md border border-gray/10 border-l-[4px] border-l-accent hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-[18px] font-semibold text-primary mb-4">{service.title}</h3>
                  <p className="text-[15px] text-gray font-normal leading-[1.7] mb-6">{service.desc}</p>
                  <a href={service.link} className="inline-flex items-center text-[14px] font-medium text-accent hover:underline">
                    Solicitar información <ChevronRight size={14} className="ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      {!isProductsPage && (
        <section id="productos" className="py-24 bg-bg relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="text-left">
                <SectionLabel>NUESTROS EQUIPOS</SectionLabel>
                <SectionTitle highlight="Destacados">Productos Destacados</SectionTitle>
                <p className="text-[16px] text-gray font-normal max-w-2xl">
                  También ofrecemos equipos y herramientas industriales de marcas reconocidas para complementar las necesidades de mantenimiento de nuestros clientes.
                </p>
              </div>
              <a 
                href="productos.html"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-accent text-accent rounded-full text-[14px] font-bold hover:bg-primary hover:text-accent transition-all duration-300"
              >
                Ver Catálogo Completo <ChevronRight size={18} />
              </a>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.slice(0, 6).map((product, i) => (
                <motion.div 
                  key={product.name}
                  whileHover={{ y: -4 }}
                  className="bg-bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray/10 transition-all group"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-10 group-hover:scale-110 transition-transform duration-700"></div>
                    <Settings size={48} className="text-primary opacity-20 group-hover:scale-110 transition-transform duration-500 relative z-10" />
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[13px] font-bold text-accent uppercase tracking-widest">{product.brand}</span>
                      <h3 className="text-[16px] font-semibold text-primary mt-1">{product.name}</h3>
                      <p className="text-[14px] text-gray font-normal mt-2">{product.desc}</p>
                    </div>
                    <a 
                      href="https://wa.me/51946897942"
                      className="block w-full bg-primary hover:bg-accent text-white text-center py-3 rounded-lg text-[13px] font-bold uppercase tracking-wider transition-all"
                    >
                      Consultar Precio
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section (Proyectos Realizados) */}
      {!isProductsPage && (
        <section id="proyectos" className="py-24 bg-bg-card relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <SectionLabel>NUESTROS TRABAJOS</SectionLabel>
              <SectionTitle highlight="Realizados">Proyectos Realizados</SectionTitle>
              <p className="text-[16px] text-gray font-normal max-w-2xl mx-auto">
                Comprometidos con la excelencia técnica en cada intervención. Conozca algunos de nuestros casos de éxito.
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden px-4">
                <motion.div 
                  className="flex gap-6"
                  animate={{ x: `calc(-${projectCarouselIndex * (100 / itemsToShow)}% - ${projectCarouselIndex * (24 / itemsToShow)}px)` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {PROJECTS_DATA.map((project, i) => (
                    <div 
                      key={i} 
                      className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0"
                    >
                      <motion.div 
                        whileHover={{ y: -8 }}
                        className="bg-bg-card rounded-xl overflow-hidden border border-gray/10 shadow-lg hover:shadow-xl group transition-all duration-300 h-full flex flex-col"
                      >
                        <div className="aspect-video relative overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A]/90 via-[#0A0F1A]/50 to-transparent opacity-80"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <span className="text-[12px] font-bold text-accent uppercase tracking-widest mb-2">{project.client}</span>
                          <h3 className="text-[18px] font-bold text-primary mb-4 line-clamp-2">{project.title}</h3>
                          <p className="text-[14px] text-gray font-normal line-clamp-3 mb-6 flex-grow">{project.desc}</p>
                          <button 
                            onClick={() => setSelectedProject(project)}
                            className="inline-flex items-center text-[14px] font-bold text-accent hover:text-accent transition-colors"
                          >
                            VER DETALLES <ChevronRight size={16} className="ml-1" />
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={() => setProjectCarouselIndex(prev => prev === 0 ? PROJECTS_DATA.length - itemsToShow : prev - 1)}
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-bg-card border border-gray/30 hover:bg-primary text-accent hover:text-accent rounded-full flex items-center justify-center transition-all z-10 shadow-xl"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => setProjectCarouselIndex(prev => prev >= PROJECTS_DATA.length - itemsToShow ? 0 : prev + 1)}
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-bg-card border border-gray/30 hover:bg-primary text-accent hover:text-accent rounded-full flex items-center justify-center transition-all z-10 shadow-xl"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute inset-0 bg-bg/90 backdrop-blur-sm"
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="relative w-full max-w-3xl bg-bg-card border border-gray/30 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
                >
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-bg/50 backdrop-blur-md rounded-full flex items-center justify-center text-primary hover:bg-primary transition-all"
                  >
                    <X size={20} />
                  </button>

                  <div className="aspect-video w-full">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="p-8 space-y-6">
                    <div className="p-8 space-y-6">
                      <div>
                        <span className="text-accent font-bold text-[13px] uppercase tracking-widest">{selectedProject.client}</span>
                        <h2 className="text-[28px] font-extrabold text-primary mt-2">{selectedProject.title}</h2>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-primary font-bold text-[16px] flex items-center gap-2">
                          <Check size={18} className="text-accent" /> Descripción del Proyecto
                        </h4>
                        <p className="text-gray text-[15px] leading-relaxed">
                          {selectedProject.desc}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-primary font-bold text-[16px] flex items-center gap-2">
                          <Settings size={18} className="text-accent" /> Equipos Intervenidos
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedProject.equipment.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray text-[14px]">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6 border-t border-gray/20 flex flex-col sm:flex-row gap-4">
                        <a 
                          href={`https://wa.me/51946897942?text=Hola%20estoy%20interesado%20en%20un%20servicio%20similar%20al%20proyecto:%20${selectedProject.title}`}
                          className="flex-grow bg-primary hover:bg-accent text-white text-center py-4 rounded-xl font-bold uppercase tracking-wider transition-all"
                        >
                          SOLICITAR SERVICIO SIMILAR
                        </a>
                        <button 
                          onClick={() => setSelectedProject(null)}
                          className="px-8 py-4 border border-gray/30 text-primary rounded-xl font-bold uppercase tracking-wider hover:bg-white/5 transition-all"
                        >
                          CERRAR
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </section>
      )}

      {/* Stats Section */}
      {!isProductsPage && (
        <section className="py-16 bg-gradient-to-br from-primary to-highlight relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-3 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {[
                { num: '10', label: 'AÑOS DE EXPERIENCIA' },
                { num: '500', label: 'CLIENTES ATENDIDOS' },
                { num: '1500', label: 'EQUIPOS REPARADOS' }
              ].map((stat, i) => (
                <div key={i} className="text-center px-8">
                  <div className="text-[52px] font-extrabold text-white leading-none mb-2">
                    {stat.num}<span className="text-accent">+</span>
                  </div>
                  <div className="text-[12px] text-white/80 uppercase tracking-[0.15em] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Nosotros (Filosofía, Misión, Visión) Section */}
      {!isProductsPage && (
        <section id="nosotros" className="py-24 bg-bg relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                  <Star size={24} />
                </div>
                <h3 className="text-[24px] font-bold text-primary">Nuestra Filosofía</h3>
                <p className="text-gray text-[15px] leading-relaxed">
                  En HIDROFLUID SERVICE S.A.C., nuestra filosofía se basa en la excelencia técnica y el compromiso inquebrantable con la calidad. Creemos que cada equipo que intervenimos es vital para la productividad de nuestros clientes, por lo que aplicamos precisión y ética en cada servicio.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                  <Zap size={24} />
                </div>
                <h3 className="text-[24px] font-bold text-primary">Nuestra Misión</h3>
                <p className="text-gray text-[15px] leading-relaxed">
                  Brindar soluciones integrales de mantenimiento y suministro de equipos industriales de alta calidad, superando las expectativas de nuestros clientes mediante un servicio técnico especializado, eficiente y oportuno que garantice la continuidad de sus operaciones.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                  <ImageIcon size={24} />
                </div>
                <h3 className="text-[24px] font-bold text-primary">Nuestra Visión</h3>
                <p className="text-gray text-[15px] leading-relaxed">
                  Consolidarnos como la empresa líder en el sector técnico industrial a nivel nacional, siendo reconocidos por nuestra innovación, confiabilidad y por ser el socio estratégico preferido de las principales industrias del país en soluciones de fluidos y potencia.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Catálogo Completo Section */}
      {isProductsPage && (
        <section id="catalogo" className="py-24 bg-bg relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <SectionLabel>LISTADO DE EQUIPOS</SectionLabel>
              <SectionTitle highlight="Completo">Catálogo Completo</SectionTitle>
              <p className="text-[16px] text-gray font-normal max-w-2xl mx-auto mt-4">
                Explore nuestra amplia gama de equipos y herramientas industriales de las mejores marcas.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar Filter */}
              <aside className="lg:w-1/4">
                <div className="sticky top-[100px] space-y-6">
                  <h4 className="text-primary font-bold text-[16px] mb-6 hidden lg:block">Categorías</h4>
                  
                  {/* Mobile Dropdown */}
                  <div className="lg:hidden relative mb-8">
                    <button 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center justify-between w-full bg-bg-card border border-gray/30 text-primary px-5 py-3 rounded-lg text-[14px] font-medium"
                    >
                      {activeTab === 'Todos' ? 'Todas las categorías' : activeTab}
                      <ChevronDown size={18} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-full bg-bg-card border border-gray/30 rounded-lg shadow-2xl z-50 overflow-hidden"
                        >
                          {CATEGORIES.map((cat) => (
                            <button
                              key={cat}
                              onClick={() => {
                                setActiveTab(cat);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full text-left px-5 py-3 text-[14px] transition-colors hover:bg-accent/10 ${activeTab === cat ? 'text-accent font-bold' : 'text-gray'}`}
                            >
                              {cat}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Desktop List */}
                  <div className="hidden lg:flex flex-col gap-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`text-left px-4 py-3 rounded-lg text-[14px] transition-all duration-300 ${activeTab === cat ? 'bg-primary text-white font-bold shadow-lg' : 'text-gray hover:bg-white/5'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Grid */}
              <div className="lg:w-3/4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <AnimatePresence mode="popLayout">
                    {filteredProducts.map((product) => (
                      <motion.div 
                        key={product.name}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="bg-bg-card rounded-xl overflow-hidden border border-gray/20 group"
                      >
                        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-10 group-hover:scale-110 transition-transform duration-700"></div>
                          <Settings size={40} className="text-accent/50 relative z-10" />
                        </div>
                        <div className="p-6">
                          <span className="text-[12px] font-bold text-accent uppercase tracking-widest">{product.brand}</span>
                          <h3 className="text-[16px] font-semibold text-primary mt-1">{product.name}</h3>
                          <p className="text-[14px] text-gray font-normal mt-2 mb-6">{product.desc}</p>
                          <a 
                            href="https://wa.me/51946897942"
                            className="block w-full bg-primary hover:bg-accent text-white text-center py-2.5 rounded-lg text-[13px] font-bold uppercase tracking-wider transition-all"
                          >
                            Consultar Precio
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-[36px] font-extrabold text-primary leading-tight">
                Encuentra a<br />
                <span className="text-highlight">HIDROFLUID</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin size={24} className="text-accent flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="text-primary font-semibold uppercase text-[13px] tracking-wider">LOCAL COMERCIAL</h4>
                  <p className="text-[14px] text-gray leading-relaxed">
                    Av. Colectora Mz C Lt 01,<br />
                    Urb. Sucre, Santa Anita, Lima
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock size={24} className="text-accent flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-[14px] text-gray">Lunes - Sábado</p>
                  <p className="text-[14px] text-gray">9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone size={24} className="text-accent flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="text-primary font-semibold uppercase text-[13px] tracking-wider">MÁS INFORMACIÓN</h4>
                  <div className="space-y-1">
                    <a href="tel:946897942" className="text-[14px] text-gray hover:text-accent block">946 897 942</a>
                    <a href="tel:971537667" className="text-[14px] text-gray hover:text-accent block">971 537 667</a>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail size={24} className="text-accent flex-shrink-0" />
                <div className="space-y-1">
                  <a href="mailto:hidrofluidmantenim@gmail.com" className="text-[14px] text-gray hover:text-accent block">hidrofluidmantenim@gmail.com</a>
                  <a href="mailto:hidrofluid@hotmail.com" className="text-[14px] text-gray hover:text-accent block">hidrofluid@hotmail.com</a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-primary font-semibold uppercase text-[13px] tracking-wider">REDES SOCIALES</h4>
              <div className="flex gap-3">
                {[
                  { icon: <Facebook size={20} />, link: 'https://www.facebook.com/share/18NGGMbf9v/' },
                  { icon: <Zap size={20} />, link: 'https://www.tiktok.com/@hidrofluid.servic' },
                  { icon: <Instagram size={20} />, link: 'https://www.instagram.com/hidrofluid1' }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.link} 
                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-primary hover:bg-primary transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-[1000px] mx-auto h-[380px] rounded-xl overflow-hidden border border-gray/30 shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.872456789!2d-76.96!3d-12.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAyJzI0LjAiUyA3NsKwNTcnMzYuMCJX!5e0!3m2!1sen!2spe!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Hidrofluid"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg-footer pt-20 pb-10 border-t border-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="space-y-6">
              <div className="leading-tight">
                <span className="text-[22px] font-extrabold tracking-tight text-primary block">HIDROFLUID</span>
                <span className="text-[11px] font-bold tracking-[0.2em] text-accent">SERVICE S.A.C.</span>
              </div>
              <p className="text-[14px] text-gray font-normal leading-[1.7]">
                RUC: 20556463680<br />
                Expertos en mantenimiento y reparación de equipos industriales en Lima.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-[14px] font-bold text-primary uppercase tracking-[0.1em]">ENLACES RÁPIDOS</h4>
              <ul className="space-y-3 text-[14px] text-gray">
                {[
                  { name: 'Inicio', href: 'index.html#inicio' },
                  { name: 'Servicios', href: 'index.html#servicios' },
                  { name: 'Productos', href: 'productos.html' },
                  { name: 'Nosotros', href: 'index.html#nosotros' },
                  { name: 'Contacto', href: 'index.html#contacto' }
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith('index.html#') && !window.location.pathname.includes('productos.html')) {
                          e.preventDefault();
                          scrollToSection(item.href.split('#')[1]);
                        }
                      }}
                      className="hover:text-accent transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[14px] font-bold text-primary uppercase tracking-[0.1em]">SERVICIOS</h4>
              <ul className="space-y-3 text-[14px] text-gray">
                {[
                  'Mantenimiento Industrial',
                  'Servicio Técnico Kärcher',
                  'Bombas de Agua',
                  'Compresoras'
                ].map((s) => (
                  <li key={s}>
                    <a href="https://wa.me/51946897942" className="hover:text-accent transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray/20 text-center">
            <p className="text-[12px] text-primary/60 font-medium">
              © 2025 HIDROFLUID SERVICE S.A.C. — Todos los derechos reservados. | Desarrollado por Gerardo
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/51946897942"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999] w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center text-primary shadow-[0_4px_20px_rgba(37,211,102,0.35)] whatsapp-pulse transition-transform hover:scale-110"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}
