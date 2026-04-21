import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to every .reveal / .reveal-left element
 * and adds the 'visible' class when they enter the viewport.
 * Re-runs on every render so newly mounted elements are picked up.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}
