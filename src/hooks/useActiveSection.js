import { useState, useEffect } from 'react';

const SECTIONS = ['inicio', 'sobre-mi', 'experiencia', 'proyectos', 'aprendiendo', 'habilidades', 'contacto'];

/**
 * Tracks which section is currently in view based on scroll position.
 * Returns the active section id string.
 */
export function useActiveSection() {
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY + 120;
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return active;
}
