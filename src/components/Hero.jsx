import React from 'react';
import { Mail, Github, Linkedin, Phone, ChevronDown } from 'lucide-react';

const SOCIALS = [
  { icon: Mail,     href: 'mailto:garcia.roga02@gmail.com',                    label: 'Email' },
  { icon: Github,   href: 'https://github.com/GabrielGarciaRodri',             label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/gabriel-garcia-rodri-/', label: 'LinkedIn' },
  { icon: Phone,    href: 'tel:+573155765423',                                  label: 'Teléfono' },
];

export default function Hero({ isDark, onScrollDown }) {
  const mutedText = isDark ? 'text-slate-400' : 'text-gray-500';
  const iconBorder = isDark ? 'border-slate-700 hover:border-indigo-500 hover:text-indigo-400' : 'border-gray-200 hover:border-indigo-400 hover:text-indigo-600';
  const iconBg    = isDark ? 'bg-slate-800/50 hover:bg-indigo-500/10' : 'bg-gray-50 hover:bg-indigo-50';

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative px-6">
      {/* Subtle radial glow */}
      <div className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(99,102,241,0.06)_0%,transparent_70%)]' : ''} pointer-events-none`} />

      <div className="text-center relative z-10">
        {/* Name */}
        <h1
          className={`text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-4 animate-fade-up ${isDark ? 'text-slate-50' : 'text-gray-900'}`}
          style={{ animationDelay: '0ms' }}
        >
          Gabriel García Rodríguez
        </h1>

        {/* Role */}
        <p
          className={`text-xl md:text-2xl font-normal mb-10 animate-fade-up ${mutedText}`}
          style={{ animationDelay: '150ms', opacity: 0, animationFillMode: 'forwards' }}
        >
          Desarrollador Full Stack
        </p>

        {/* Social icons */}
        <div
          className="flex justify-center gap-3 mb-14 animate-fade-up"
          style={{ animationDelay: '300ms', opacity: 0, animationFillMode: 'forwards' }}
        >
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`p-2.5 rounded-lg border transition-all duration-200 ${iconBorder} ${iconBg} ${isDark ? 'text-slate-400' : 'text-gray-500'}`}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Scroll chevron */}
        <button
          onClick={onScrollDown}
          className={`animate-bounce-slow bg-transparent border-none cursor-pointer ${mutedText}`}
          aria-label="Scroll hacia abajo"
        >
          <ChevronDown size={28} />
        </button>
      </div>
    </section>
  );
}
