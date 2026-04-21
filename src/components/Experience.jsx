import React from 'react';
import { Server } from 'lucide-react';

const EXPERIENCE = [
  {
    cargo: 'Desarrollador Full Stack',
    empresa: 'Fundación Soluciones Colombia',
    periodo: 'Octubre 2024 – Noviembre 2025',
    descripcion: 'Desarrollo de aplicaciones web empresariales y soluciones móviles. Implementación de sistemas de autenticación robustos y gestión de infraestructura cloud.',
    logros: [
      'Aplicación web que redujo errores de datos en 35%',
      'App móvil que aumentó engagement en 40%',
      'Sistema de autenticación centralizado',
    ],
  },
  {
    cargo: 'Asistente T.I',
    empresa: 'RedBubble',
    periodo: 'Enero 2023 – Noviembre 2023',
    descripcion: 'Administración de aplicaciones corporativas y plataformas CRM. Optimización de servicios cloud y soporte técnico especializado.',
    logros: [
      'Sistema de tickets que redujo tiempo de resolución en 45%',
      'Optimización de CRM mejorando eficiencia en 30%',
    ],
  },
];

export default function Experience({ isDark }) {
  const fg      = isDark ? 'text-slate-100' : 'text-gray-900';
  const muted   = isDark ? 'text-slate-400' : 'text-gray-600';
  const sub     = isDark ? 'text-slate-500' : 'text-gray-400';
  const dotBg   = isDark ? 'bg-slate-800 border-slate-700' : 'bg-gray-100 border-gray-200';
  const lineBg  = isDark ? 'bg-slate-700' : 'bg-gray-200';
  const divider = isDark ? 'border-slate-800' : 'border-gray-100';

  return (
    <section id="experiencia" className="py-20 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${fg} reveal`}>
          Experiencia Laboral
        </h2>

        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="flex gap-6 mb-12 relative reveal" style={{ transitionDelay: `${index * 100}ms` }}>
            {/* Vertical line */}
            {index < EXPERIENCE.length - 1 && (
              <div className={`absolute left-5 top-12 bottom-[-48px] w-px ${lineBg}`} />
            )}

            {/* Dot */}
            <div className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 mt-1 ${dotBg}`}>
              <Server size={16} className="text-indigo-500" />
            </div>

            {/* Content */}
            <div className={`flex-1 pb-8 ${index < EXPERIENCE.length - 1 ? `border-b ${divider}` : ''}`}>
              <h3 className={`text-[17px] font-semibold ${fg}`}>{exp.cargo}</h3>
              <p className="text-indigo-500 font-medium text-sm mt-0.5">{exp.empresa}</p>
              <p className={`text-xs mb-3 mt-1 ${sub}`}>{exp.periodo}</p>
              <p className={`text-sm leading-relaxed mb-3 ${muted}`}>{exp.descripcion}</p>
              <ul className="space-y-1.5">
                {exp.logros.map((l, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-indigo-500 leading-relaxed mt-px">→</span>
                    <span className={`text-sm ${muted}`}>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
