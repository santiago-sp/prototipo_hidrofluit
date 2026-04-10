import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Facebook, Instagram, Zap, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from './data';
import { SectionLabel, SectionTitle } from './components/SectionTitles';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const whatsappMessage = `Hola! Soy ${formData.name}. ${formData.message}. Mi teléfono: ${formData.phone}`;
      window.open(`https://wa.me/51946897942?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      setIsSubmitting(false);
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 3000);
      setFormData({ name: '', phone: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contacto" className="py-28 bg-bg-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-10">
            <div>
              <SectionLabel>CONTÁCTANOS</SectionLabel>
              <h2 className="text-[42px] md:text-[52px] font-extrabold text-primary leading-tight mb-6">
                Estamos <span className="text-highlight">aquí</span> para ayudarte
              </h2>
              <p className="text-[17px] text-gray leading-relaxed">
                Complete el formulario y nos pondremos en contacto con usted en menos de 30 minutos durante horario laboral.
              </p>
            </div>

            <div className="space-y-5">
              {CONTACT_INFO.map((item, i) => (
                <div key={i} className="flex gap-5 p-5 bg-bg rounded-xl border border-accent/10 hover:border-accent/30 transition-all">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-[14px] font-bold text-primary uppercase tracking-wider mb-1">{item.title}</h4>
                    {item.lines.map((line, j) => (<p key={j} className="text-[15px] text-gray">{line}</p>))}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-[14px] font-bold text-primary uppercase tracking-wider mb-4">Síguenos</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Facebook size={24} />, link: 'https://www.facebook.com/share/18NGGMbf9v/', color: 'hover:bg-[#1877F2]' },
                  { icon: <Instagram size={24} />, link: 'https://www.instagram.com/hidrofluid1/', color: 'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]' },
                  { icon: <Zap size={24} />, link: 'https://www.tiktok.com/@hidrofluid.servic', color: 'hover:bg-[#000000]' }
                ].map((social, i) => (
                  <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className={`w-14 h-14 bg-bg rounded-2xl flex items-center justify-center text-primary border-2 border-accent/20 transition-all duration-300 shadow-lg hover:shadow-accent/20 hover:text-white hover:border-transparent hover:-translate-y-1 ${social.color}`}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-bg rounded-3xl p-10 shadow-2xl border border-accent/10">
            <h3 className="text-[26px] font-bold text-primary mb-8">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[13px] font-semibold text-primary uppercase tracking-wider mb-2">Nombre completo</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Ej: Carlos Mendoza" className="w-full px-5 py-4 bg-bg-card rounded-xl border border-accent/20 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-primary placeholder:text-gray/50" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-primary uppercase tracking-wider mb-2">Teléfono</label>
                <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Ej: 946 897 942" className="w-full px-5 py-4 bg-bg-card rounded-xl border border-accent/20 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-primary placeholder:text-gray/50" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-primary uppercase tracking-wider mb-2">Mensaje</label>
                <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Describe tu problema o necesidad..." className="w-full px-5 py-4 bg-bg-card rounded-xl border border-accent/20 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-primary placeholder:text-gray/50 resize-none" />
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-accent to-highlight hover:from-highlight hover:to-accent text-white py-5 rounded-xl font-bold uppercase tracking-wider transition-all shadow-lg disabled:opacity-50 flex items-center justify-center gap-3">
                {isSubmitting ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                ) : formSubmitted ? (<><CheckCircle2 size={22} />¡ENVIADO CON ÉXITO!</>) : (<><Send size={20} />ENVIAR POR WHATSAPP</>)}
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-accent/10">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.8724!2d-76.9600!3d-12.0400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAyJzI0LjAiUyA3NsKwNTcnMzYuMCJX!5e0!3m2!1sen!2spe!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación Hidrofluid" />
        </motion.div>
      </div>
    </section>
  );
};