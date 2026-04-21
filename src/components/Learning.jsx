import React, { useState } from 'react';
import { Server, BookOpen, Star } from 'lucide-react';

const LEARNING = [
  { icon: Server,   label: 'Kubernetes',         desc: 'Orquestación de contenedores a escala' },
  { icon: Star,     label: 'AI/ML Integration',  desc: 'Integrando modelos en APIs de producción' },
  { icon: BookOpen, label: 'System Design',       desc: 'Arquitecturas distribuidas de alto rendimiento' },
];

function LearningCard({ item, isDark }) {
  const [hovered, setHovered] = useState(false);
  const { icon: Icon, label, desc } = item;

  const bg     = isDark ? 'bg-slate-800' : 'bg-white';
  const border = hovered
    ? 'border-indigo-500'
    : isDark ? 'border-slate-700' : 'border-gray-200';
  const fg     = isDark ? 'text-slate-100' : 'text-gray-900';
  const muted  = isDark ? 'text-slate-400' : 'text-gray-500';

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`rounded-xl border p-5 transition-all duration-200 ${bg} ${border}`}
      style={{ transform: hovered ? 'translateY(-4px)' : 'none' }}
    >
      <Icon size={20} className="text-indigo-500 mb-3" />
      <h4 className={`font-semibold text-[15px] mb-1 ${fg}`}>{label}</h4>
      <p className={`text-sm leading-relaxed ${muted}`}>{desc}</p>
    </div>
  );
}

export default function Learning({ isDark }) {
  const fg  = isDark ? 'text-slate-100' : 'text-gray-900';
  const sub = isDark ? 'text-slate-500' : 'text-gray-400';

  return (
    <section id="aprendiendo" className="py-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-2 ${fg} reveal`}>
          Actualmente Aprendiendo
        </h2>
        <p className={`text-center text-sm mb-10 ${sub} reveal`}>
          Tecnologías en las que estoy invirtiendo tiempo ahora mismo
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LEARNING.map((item, i) => (
            <div key={item.label} className="reveal" style={{ transitionDelay: `${i * 70}ms` }}>
              <LearningCard item={item} isDark={isDark} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
