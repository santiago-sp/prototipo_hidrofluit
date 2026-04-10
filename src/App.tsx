import { useState, useEffect } from 'react';

import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { StatsBar } from './StatsBar';
import { Marquee } from './Marquee';
import { Advantages } from './Advantages';
import { Process } from './Process';
import { Services } from './Services';
import { CTABanner } from './CTABanner';
import { Projects } from './Projects';
import { ToolsGallery } from './ToolsGallery';
import { About } from './About';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { FloatingButton } from './FloatingButton';
import { ScrollToTopButton } from './ScrollToTopButton';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-bg selection:bg-accent selection:text-white font-sans">
      <Navbar scrolled={scrolled} onNavigate={scrollToSection} />
      <Hero onNavigate={scrollToSection} />
      <StatsBar />
      <Marquee />
      <Advantages />
      <Process />
      <Services />
      <CTABanner />
      <Projects />
      <ToolsGallery />
      <About />
      <Contact />
      <Footer />
      <FloatingButton scrolled={scrolled} />
      <ScrollToTopButton show={showScrollTop} />
    </div>
  );
}