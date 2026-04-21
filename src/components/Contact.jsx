import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const CONTACTS = [
  { icon: Mail,     label: 'garcia.roga02@gmail.com',              href: 'mailto:garcia.roga02@gmail.com' },
  { icon: Phone,    label: '+57 315 576 5423',                      href: 'tel:+573155765423' },
  { icon: Github,   label: 'github.com/GabrielGarciaRodri',         href: 'https://github.com/GabrielGarciaRodri' },
  { icon: Linkedin, label: 'linkedin.com/in/gabriel-garcia-rodri-/', href: 'https://www.linkedin.com/in/gabriel-garcia-rodri-/' },
];

export default function Contact({ isDark }) {
  const bg      = isDark ? 'bg-slate-900' : 'bg-slate-50';
  const fg      = isDark ? 'text-slate-100' : 'text-gray-900';
  const muted   = isDark ? 'text-slate-400' : 'text-gray-600';
  const cardBg  = isDark ? 'bg-slate-800' : 'bg-white';
  const border  = isDark ? 'border-slate-700' : 'border-gray-200';
  const hoverBg = isDark ? 'hover:bg-indigo-500/10' : 'hover:bg-indigo-50';
  const hoverBorder = isDark ? 'hover:border-indigo-500' : 'hover:border-indigo-400';

  return (
    <section id="contacto" className={`py-20 ${bg} transition-colors duration-300`}>
      <div className="max-w-lg mx-auto px-6 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${fg} reveal`}>
          ¿Hablemos?
        </h2>
        <p className={`text-[16px] leading-relaxed mb-10 ${muted} reveal`}>
          Estoy siempre abierto a nuevas oportunidades y proyectos interesantes.
          Si tienes algo en mente, no dudes en contactarme.
        </p>
        <div className="flex flex-col gap-3 reveal">
          {CONTACTS.map(({ icon: Icon, label, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-5 py-3 rounded-lg border text-left transition-all duration-200 ${cardBg} ${border} ${hoverBg} ${hoverBorder} ${muted} hover:text-indigo-500`}
            >
              <Icon size={17} className="flex-shrink-0" />
              <span className="text-sm">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
