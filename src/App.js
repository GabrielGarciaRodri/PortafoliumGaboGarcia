import React, { useState, useEffect } from 'react';

import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Experience from './components/Experience';
import Projects   from './components/Projects';
import Learning   from './components/Learning';
import Skills     from './components/Skills';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

import { useScrollReveal } from './hooks/useScrollReveal';
import { useActiveSection } from './hooks/useActiveSection';

// Load Inter from Google Fonts
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
document.head.appendChild(link);

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
};

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    try { return localStorage.getItem('ggr-dark') !== 'false'; } // dark by default
    catch { return true; }
  });

  const active = useActiveSection();
  useScrollReveal();

  // Persist dark mode preference
  useEffect(() => {
    try { localStorage.setItem('ggr-dark', isDark); } catch {}
    document.body.style.background     = isDark ? '#0f172a' : '#ffffff';
    document.body.style.color          = isDark ? '#f1f5f9' : '#111827';
    document.body.style.fontFamily     = "'Inter', system-ui, sans-serif";
    document.body.style.transition     = 'background 0.3s, color 0.3s';
  }, [isDark]);

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        active={active}
        onNav={scrollToSection}
      />

      <main style={{ paddingTop: 64 }}>
        <Hero
          isDark={isDark}
          onScrollDown={() => scrollToSection('sobre-mi')}
        />
        <About      isDark={isDark} />
        <Experience isDark={isDark} />
        <Projects   isDark={isDark} />
        <Learning   isDark={isDark} />
        <Skills     isDark={isDark} />
        <Contact    isDark={isDark} />
      </main>

      <Footer isDark={isDark} />
    </div>
  );
}
