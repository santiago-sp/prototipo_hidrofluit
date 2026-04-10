import { 
  ShieldCheck, 
  Zap, 
  Clock, 
  Cog, 
  Wrench,
  Package,
  Headphones,
  CheckCircle2,
  Settings,
  Award,
  Users,
  TrendingUp,
  Image as ImageIcon,
  Star,
  MapPinned,
  PhoneCall,
  Mail,
  Send,
  ChevronRight,
  Facebook,
  Instagram
} from 'lucide-react';
import React from 'react';

export const BRANDS = [
  'KÄRCHER', 'WEG', 'MOTOVARIO', 'DELCROSA', 'SACAMI', 'STM TEAM', 'SITI', 'SIEMENS', 'SNAP-ON', 'CHICAGO PNEUMATIC'
];

export const ADVANTAGES = [
  { 
    icon: <ShieldCheck size={28} />, 
    title: 'Calidad Certificada', 
    desc: 'Especialistas certificados en el mantenimiento de equipos de limpieza industrial Kärcher y marcas líderes del mercado.' 
  },
  { 
    icon: <Zap size={28} />, 
    title: 'Respuesta Rápida', 
    desc: 'Servicio de emergencia inmediata. Llegamos a sus instalaciones en el menor tiempo posible para minimizar paros.' 
  },
  { 
    icon: <Clock size={28} />, 
    title: 'Disponibilidad Total', 
    desc: 'Soporte técnico preventivo y correctivo para garantizar la continuidad de sus operaciones en horario laboral.' 
  },
  { 
    icon: <Cog size={28} />, 
    title: 'Técnicos Especializados', 
    desc: 'Equipo técnico con más de 10 años de experiencia en hidrolavadoras, motores y bombas industriales.' 
  }
];

export const SERVICES = [
  { 
    icon: <Wrench size={32} />, 
    title: 'Mantenimiento y Reparación', 
    desc: 'Servicio técnico especializado para hidrolavadoras, motores, bombas y herramientas industriales con repuestos originales.',
    features: ['Diagnóstico gratuito', 'Repuestos originales', 'Garantía escrita'],
    link: 'https://wa.me/51946897942?text=Hola%20necesito%20mantenimiento%20y%20reparación'
  },
  { 
    icon: <Package size={32} />, 
    title: 'Venta de Equipos', 
    desc: 'Hidrolavadoras, motores eléctricos, bombas de alta presión y herramientas industriales de las mejores marcas.',
    features: ['Marcas originales', 'Asesoría técnica', 'Envío a nivel nacional'],
    link: 'https://wa.me/51946897942?text=Hola%20necesito%20comprar%20equipos'
  },
  { 
    icon: <Headphones size={32} />, 
    title: 'Soporte Técnico Especializado', 
    desc: 'Atención de emergencias y consultas técnicas en nuestro horario de oficina.',
    features: ['Atención Rápida', 'Consultas remotas', 'Seguimiento post-servicio'],
    link: 'https://wa.me/51946897942?text=Hola%20necesito%20soporte%20t%C3%A9cnico'
  }
];

export const PROJECTS_DATA = [
  {
    title: 'Mantenimiento de Motores y Bombas',
    client: 'Industrias Alimentarias',
    desc: 'Servicio técnico especializado en mantenimiento preventivo de electrobombas y motores industriales para garantizar la presión de trabajo.',
    equipment: ['Motores Trifásicos', 'Bombas de agua', 'Tableros de control'],
    image: 'https://jfrserviciosgenerales.pe/wp-content/uploads/2026/02/12.1-1.jpeg',
    category: 'mantenimiento'
  },
  {
    title: 'Instalación de Tableros Eléctricos',
    client: 'Centro Logístico Santa Anita',
    desc: 'Montaje y cableado de tableros de transferencia automática y control de pozos a tierra para sistemas industriales.',
    equipment: ['Tableros Eléctricos', 'Pozos a tierra', 'Sistemas de control'],
    image: 'https://jfrserviciosgenerales.pe/wp-content/uploads/2026/02/poso-1.png',
    category: 'instalacion'
  },
  {
    title: 'Mantenimiento de Estructuras Industriales',
    client: 'Almacenes del Callao',
    desc: 'Trabajos de mantenimiento correctivo y preventivo en estructuras metálicas y soportes de maquinaria pesada.',
    equipment: ['Estructuras metálicas', 'Soportes industriales', 'Soldadura técnica'],
    image: 'https://jfrserviciosgenerales.pe/wp-content/uploads/2026/02/11.1-1.jpeg',
    category: 'reparacion'
  },
  {
    title: 'Remodelación con Drywall y Acabados',
    client: 'Sedes Corporativas Lima',
    desc: 'Transformación de espacios con sistemas de Drywall, divisiones acústicas y acabados de pintura epóxica para alta durabilidad.',
    equipment: ['Sistemas Drywall', 'Pintura Epóxica', 'Herramientas de nivelación láser'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    category: 'obras-civiles'
  },
  {
    title: 'Enchapado de Pisos y Revestimientos',
    client: 'Planta de Producción Textil',
    desc: 'Instalación especializada de porcelanato y mayólicas de alto tránsito para entornos industriales exigentes.',
    equipment: ['Cortadoras de diamante', 'Niveladores industriales', 'Adesivos de alta resistencia'],
    image: 'https://images.unsplash.com/photo-1581093196277-9f668102377b?auto=format&fit=crop&q=80&w=800',
    category: 'obras-civiles'
  }
];

export const STATS = [
  { num: '12', label: 'Años de Experiencia', icon: <Award size={24} /> },
  { num: '1800', label: 'Equipos Intervenidos', icon: <Cog size={24} /> },
  { num: '500', label: 'Clientes Felices', icon: <Users size={24} /> },
  { num: '99', label: 'Tasa de Éxito', icon: <TrendingUp size={24} /> }
];

export const TOOLS_GALLERY = [
  { title: '1', image: 'https://res.cloudinary.com/dv5xr5pyk/image/upload/v1774991026/IMAGENES%20HIDROFLUID/u3zeIw4sk86CrvjaO98a92g8ZclPVyBa.jpg_1_kqdwam.jpg' },
  { title: '2', image: 'https://res.cloudinary.com/dv5xr5pyk/image/upload/v1774991026/IMAGENES%20HIDROFLUID/tecle-rachet-se%C3%B1orita-trico-de-palanca.jpg_1_t0yjcz.jpg' },
  { title: '3', image: 'https://res.cloudinary.com/dv5xr5pyk/image/upload/v1774991025/IMAGENES%20HIDROFLUID/made-in-china_1_rkr9kq.webp' },
  { title: '4', image: 'https://res.cloudinary.com/dv5xr5pyk/image/upload/v1774991024/IMAGENES%20HIDROFLUID/images_1_1_an1mud.jpg' },
  { title: '5', image: 'https://res.cloudinary.com/dv5xr5pyk/image/upload/v1774991023/IMAGENES%20HIDROFLUID/Frame-73-9_1_bpavko.webp' },
  { title: '6', image: 'https://res.cloudinary.com/dv5xr5pyk/image/upload/v1774991020/IMAGENES%20HIDROFLUID/880f2e9e-2c97-41f6-a40b-a5ac50214b66_pyecgf.jpg' },
  { title: '7', image: 'https://res.cloudinary.com/dv5xr5pyk/image/upload/v1774991019/IMAGENES%20HIDROFLUID/798ca8d3-3344-4685-b146-9accd7fc9cfc_okxzte.jpg' },
  { title: '8', image: 'https://res.cloudinary.com/dv5xr5pyk/image/upload/v1774991018/IMAGENES%20HIDROFLUID/17718_1_ia420w.webp' },
  { title: '9', image: 'https://res.cloudinary.com/dv5xr5pyk/image/upload/v1774991018/IMAGENES%20HIDROFLUID/666fa3a9-beda-414a-9070-b4da61c7eb1d_f3h49o.jpg' },
  { title: '10', image: 'https://res.cloudinary.com/dv5xr5pyk/image/upload/v1774991025/IMAGENES%20HIDROFLUID/mdmoWyu3dq7Ch4gemu6RqU95Z5a3pPfm.jpg_1_alfdki.jpg' },
  { title: '11', image: 'https://res.cloudinary.com/dv5xr5pyk/image/upload/v1774991017/IMAGENES%20HIDROFLUID/16c8f567-29d3-49db-87ff-1c8c1c3645cd_izzrhm.jpg' },
  { title: '12', image: 'https://res.cloudinary.com/dv5xr5pyk/image/upload/v1774991017/IMAGENES%20HIDROFLUID/1444fd0d-cd1c-4f9b-88c2-061dbce0384c_hgqbjm.jpg' }
];

export const PROCESS_STEPS = [
  { title: 'Auditoría Inicial', desc: 'Evaluamos el estado de sus equipos sin compromiso.', icon: <CheckCircle2 size={32} /> },
  { title: 'Cotización Técnica', desc: 'Presupuesto detallado con repuestos originales.', icon: <Package size={32} /> },
  { title: 'Ejecución y Testeo', desc: 'Mantenimiento especializado bajo normas de calidad.', icon: <Settings size={32} /> },
  { title: 'Certificación', desc: 'Entrega de informe técnico y garantía post-servicio.', icon: <ShieldCheck size={32} /> }
];

export const NAV_ITEMS = [
  { name: 'Inicio', id: 'inicio' },
  { name: 'Servicios', id: 'servicios' },
  { name: 'Proyectos', id: 'proyectos' },
  { name: 'Nosotros', id: 'nosotros' },
  { name: 'Contacto', id: 'contacto' }
];

export const SOCIAL_LINKS = [
  { icon: <Facebook size={14} />, link: 'https://www.facebook.com/share/18NGGMbf9v/' },
  { icon: <Instagram size={14} />, link: 'https://www.instagram.com/hidrofluid1' },
  { icon: <Zap size={14} />, link: 'https://www.tiktok.com/@hidrofluid.servic' }
];

export const CONTACT_INFO = [
  { icon: <MapPinned size={24} />, title: 'Dirección', lines: ['Av. Colectora Mz C Lt 01,', 'Urb. Sucre, Santa Anita, Lima'] },
  { icon: <Clock size={24} />, title: 'Horario de Atención', lines: ['Lunes - Sábado', '9:00 AM - 6:00 PM'] },
  { icon: <PhoneCall size={24} />, title: 'Teléfono', lines: ['946 897 942', '971 537 667'] },
  { icon: <Mail size={24} />, title: 'Email', lines: ['hidrofluidmantenim@gmail.com', 'hidrofluid@hotmail.com'] }
];

export const ABOUT_ITEMS = [
  { icon: <Award size={24} />, text: 'RUC: 20556463680' },
  { icon: <MapPinned size={24} />, text: 'Santa Anita, Lima' },
  { icon: <Clock size={24} />, text: 'Lunes - Sábado: 9:00 AM - 6:00 PM' },
  { icon: <Send size={24} />, text: 'Atención vía WhatsApp' }
];

export const MISSION_VISION = [
  { icon: <Zap size={32} />, title: 'Nuestra Misión', desc: 'Ser líderes en la importación y distribución de productos de alta calidad y solucionar las necesidades de nuestros clientes mediante un soporte técnico especializado, eficiente y oportuno.' },
  { icon: <ImageIcon size={32} />, title: 'Nuestra Visión', desc: 'Mantener un sólido posicionamiento y liderazgo brindando oportunidades de negocios a nuestros clientes en sus mercados, a través de la competitividad y excelencia técnica.' },
  { icon: <Star size={32} />, title: 'Nuestros Valores', desc: 'Compromiso, Honestidad, Excelencia Técnica, Orientación al Cliente y Mejora Continua son los pilares que guían cada una de nuestras operaciones.' }
];

export const FOOTER_SERVICES = [
  'Mantenimiento Industrial',
  'Servicio Técnico Kärcher',
  'Bombas de Agua',
  'Motores Eléctricos',
  'Compresoras'
];