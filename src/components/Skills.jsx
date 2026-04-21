import React from 'react';
import { Code, Server, Database, Cloud, Wrench, Smartphone } from 'lucide-react';

const SKILL_GROUPS = [
  { title: 'Frontend',        icon: Code,       skills: ['React', 'React Native', 'Vue.js 3', 'Quasar', 'HTML/CSS', 'JavaScript'] },
  { title: 'Backend',         icon: Server,     skills: ['Node.js', 'NestJS', '.NET', 'APIs RESTful', 'SOAP'] },
  { title: 'Bases de Datos',  icon: Database,   skills: ['MongoDB', 'MySQL', 'PostgreSQL'] },
  { title: 'Cloud & DevOps',  icon: Cloud,      skills: ['GCP', 'AWS S3', 'Lambda', 'EC2', 'ECS', 'RDS', 'Terraform'] },
  { title: 'Herramientas',    icon: Wrench,     skills: ['Git', 'GitHub', 'GitLab', 'Docker', 'Swagger', 'Postman', 'Jest'] },
  { title: 'Desarrollo Móvil',icon: Smartphone, skills: ['iOS', 'Android', 'React Native', 'App Store', 'Google Play'] },
];

export default function Skills({ isDark }) {
  const bg      = isDark ? 'bg-slate-800' : 'bg-slate-50';
  const cardBg  = isDark ? 'bg-slate-900' : 'bg-white';
  const border  = isDark ? 'border-slate-700' : 'border-gray-200';
  const fg      = isDark ? 'text-slate-100' : 'text-gray-900';
  const chipBg  = isDark ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-600';

  return (
    <section id="habilidades" className={`py-20 ${bg} transition-colors duration-300`}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${fg} reveal`}>
          Habilidades Técnicas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map(({ title, icon: Icon, skills }, i) => (
            <div
              key={title}
              className={`p-5 rounded-xl border ${cardBg} ${border} reveal`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <Icon size={18} className="text-indigo-500" />
                <h3 className={`font-semibold text-[15px] ${fg}`}>{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className={`text-xs px-2.5 py-1 rounded-full font-medium ${chipBg}`}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
