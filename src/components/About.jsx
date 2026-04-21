import React from 'react';

export default function About({ isDark }) {
  const bg   = isDark ? 'bg-slate-800' : 'bg-slate-50';
  const fg   = isDark ? 'text-slate-100' : 'text-gray-900';
  const body = isDark ? 'text-slate-400' : 'text-gray-600';

  const paragraphs = [
    "Soy un Desarrollador Full Stack apasionado por crear soluciones tecnológicas que generen impacto real. Con experiencia integral en desarrollo de software y administración de sistemas TI, me especializo en la creación de APIs RESTful escalables y aplicaciones web empresariales.",
    "Mi enfoque se centra en la optimización de procesos y la resolución proactiva de problemas técnicos, siempre buscando entregar soluciones de alto impacto que mejoren la eficiencia operacional.",
    "Cuento con experiencia en gestión de infraestructura cloud (GCP, AWS), configuración de plataformas CRM como Salesforce, y la implementación de sistemas de seguridad robustos. Mi nivel avanzado de inglés me permite colaborar efectivamente en equipos multiculturales.",
  ];

  return (
    <section id="sobre-mi" className={`py-20 ${bg} transition-colors duration-300`}>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-10 ${fg} reveal`}>
          Sobre Mí
        </h2>
        <div className="space-y-5">
          {paragraphs.map((p, i) => (
            <p key={i} className={`text-[17px] leading-relaxed ${body} reveal`} style={{ transitionDelay: `${i * 80}ms` }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
