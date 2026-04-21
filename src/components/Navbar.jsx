import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = ['inicio', 'sobre-mi', 'experiencia', 'proyectos', 'aprendiendo', 'habilidades', 'contacto'];

export default function Navbar({ isDark, setIsDark, active, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const bg = scrolled
    ? isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-gray-200'
    : 'bg-transparent border-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm transition-all duration-300 ${bg}`}>
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <span className={`text-lg font-bold tracking-tight ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
          GGR
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-7 list-none">
          {NAV_ITEMS.map((s) => (
            <li key={s}>
              <button
                onClick={() => onNav(s)}
                className={`text-sm capitalize transition-colors duration-200 bg-transparent border-none cursor-pointer font-[inherit] ${
                  active === s
                    ? 'text-indigo-500'
                    : isDark ? 'text-slate-400 hover:text-slate-200' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {s.replace('-', ' ')}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-lg text-base transition-colors ${isDark ? 'hover:bg-slate-800' : 'hover:bg-gray-100'}`}
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden ${isDark ? 'text-slate-300' : 'text-gray-700'}`}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className={`md:hidden list-none px-6 pb-4 pt-2 border-t flex flex-col gap-3 ${
          isDark ? 'border-slate-800 bg-slate-900' : 'border-gray-200 bg-white'
        }`}>
          {NAV_ITEMS.map((s) => (
            <li key={s}>
              <button
                onClick={() => { onNav(s); setMenuOpen(false); }}
                className={`capitalize text-sm bg-transparent border-none cursor-pointer font-[inherit] ${
                  isDark ? 'text-slate-300' : 'text-gray-700'
                }`}
              >
                {s.replace('-', ' ')}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
