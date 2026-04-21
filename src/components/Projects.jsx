import React, { useState } from 'react';
import { Folder, ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    nombre: 'FinanceCore',
    tipo: 'Backend',
    descripcion: 'Sistema ETL financiero de nivel empresarial con Clean Architecture, CQRS y Domain-Driven Design.',
    tecnologias: ['.NET', 'PostgreSQL', 'Clean Architecture', 'CQRS', 'DDD'],
    github: 'https://github.com/GabrielGarciaRodri/FinanceCore',
  },
  {
    nombre: 'Core_in',
    tipo: 'Backend',
    descripcion: 'Microservicio de autenticación centralizado con JWT y control de acceso para múltiples aplicaciones.',
    tecnologias: ['NestJS', 'MongoDB', 'JWT', 'API RESTful'],
    github: 'https://github.com/GabrielGarciaRodri/Core_in',
  },
  {
    nombre: 'AWS Pipeline Project',
    tipo: 'DevOps',
    descripcion: 'Infraestructura cloud completa con pipeline CI/CD automatizado, Docker y servicios escalables en AWS.',
    tecnologias: ['Terraform', 'AWS EC2', 'ECS', 'RDS', 'Docker'],
    github: 'https://github.com/GabrielGarciaRodri/aws-pipeline-project',
  },
];

const BADGE_COLORS = {
  Backend:      'bg-emerald-500/15 text-emerald-400',
  DevOps:       'bg-orange-500/15 text-orange-400',
  Frontend:     'bg-blue-500/15 text-blue-400',
  'Full Stack':  'bg-purple-500/15 text-purple-400',
};

function ProjectCard({ project, isDark }) {
  const [hovered, setHovered] = useState(false);

  const bg     = isDark ? 'bg-slate-800' : 'bg-white';
  const border = hovered
    ? 'border-indigo-500'
    : isDark ? 'border-slate-700' : 'border-gray-200';
  const shadow = hovered
    ? isDark
      ? '0 0 0 1px #6366f1, 0 16px 40px rgba(99,102,241,0.12)'
      : '0 16px 40px rgba(99,102,241,0.1)'
    : isDark ? 'none' : '0 2px 8px rgba(0,0,0,0.06)';
  const divider = isDark ? 'border-slate-700' : 'border-gray-100';
  const desc    = isDark ? 'text-slate-400' : 'text-gray-500';
  const chipBg  = isDark ? 'bg-slate-700 text-slate-300' : 'bg-indigo-50 text-indigo-700';

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`rounded-xl overflow-hidden border transition-all duration-300 ${bg} ${border}`}
      style={{ boxShadow: shadow, transform: hovered ? 'translateY(-6px)' : 'none' }}
    >
      {/* Header */}
      <div className={`p-5 border-b ${divider} flex items-start justify-between`}>
        <div className={`p-2.5 rounded-lg ${isDark ? 'bg-slate-700' : 'bg-gray-100'}`}>
          <Folder size={20} className="text-indigo-500" />
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-1.5 rounded-lg transition-colors ${isDark ? 'text-slate-500 hover:text-indigo-400' : 'text-gray-400 hover:text-indigo-600'}`}
        >
          <ExternalLink size={16} />
        </a>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <h3 className={`font-semibold text-[16px] ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
            {project.nombre}
          </h3>
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${BADGE_COLORS[project.tipo] || 'bg-gray-200 text-gray-600'}`}>
            {project.tipo}
          </span>
        </div>
        <p className={`text-sm leading-relaxed mb-4 ${desc}`}>{project.descripcion}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tecnologias.map((t) => (
            <span key={t} className={`text-xs px-2.5 py-1 rounded-full font-medium ${chipBg}`}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ isDark }) {
  const fg   = isDark ? 'text-slate-100' : 'text-gray-900';
  const muted = isDark ? 'text-slate-500' : 'text-gray-500';
  const bg    = isDark ? 'bg-slate-900' : 'bg-slate-50';

  return (
    <section id="proyectos" className={`py-20 ${bg} transition-colors duration-300`}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-3 ${fg} reveal`}>
          Proyectos Destacados
        </h2>
        <p className={`text-center text-sm mb-12 ${muted} reveal`}>
          Una selección de proyectos personales que demuestran mis habilidades técnicas
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <div key={p.nombre} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <ProjectCard project={p} isDark={isDark} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
