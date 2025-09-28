import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Github, Linkedin, Globe, ChevronDown, Code, Server, Database, Cloud, Smartphone } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Navegación suave
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Detectar sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'experiencia', 'habilidades', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Datos de experiencia
  const experiencia = [
    {
      empresa: "Fundación Soluciones Colombia",
      cargo: "Desarrollador Full Stack",
      periodo: "Octubre 2024 - Presente",
      descripcion: "Desarrollo de aplicaciones web empresariales y soluciones móviles. Implementación de sistemas de autenticación robustos y gestión de infraestructura cloud.",
      logros: [
        "Aplicación web que redujo errores de datos en 35%",
        "App móvil que aumentó engagement en 40%",
        "Sistema de autenticación centralizado"
      ]
    },
    {
      empresa: "RedBubble",
      cargo: "Asistente T.I",
      periodo: "Noviembre 2023 - Diciembre 2024",
      descripcion: "Administración de aplicaciones corporativas y plataformas CRM. Optimización de servicios cloud y soporte técnico especializado.",
      logros: [
        "Sistema de tickets que redujo tiempo de resolución en 45%",
        "Optimización de CRM mejorando eficiencia en 30%"
      ]
    }
  ];

  // Datos de habilidades
  const habilidades = {
    frontend: ["React", "React Native", "Vue.js 3", "Quasar", "HTML/CSS", "JavaScript"],
    backend: ["Node.js", "NestJS", "Java", "Spring Boot", "APIs RESTful"],
    database: ["MongoDB", "MySQL", "PostgreSQL"],
    cloud: ["Google Cloud Platform", "AWS S3", "Lambda", "API Gateway"],
    tools: ["Git", "GitHub", "GitLab", "Swagger", "Postman", "Jest"]
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      {/* Header */}
      <header className={`fixed top-0 w-full ${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm z-50 border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">GGR</h1>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8">
              {['inicio', 'sobre-mi', 'experiencia', 'habilidades', 'contacto'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors ${
                      activeSection === item 
                        ? 'text-blue-600' 
                        : isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
                    }`}
                  >
                    {item.replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <ul className={`md:hidden mt-4 space-y-4 pb-4 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} pt-4`}>
              {['inicio', 'sobre-mi', 'experiencia', 'habilidades', 'contacto'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="capitalize block w-full text-left"
                  >
                    {item.replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Gabriel García Rodríguez
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            Desarrollador Full Stack
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="mailto:garcia.roga02@gmail.com" className="hover:scale-110 transition-transform">
              <Mail size={24} />
            </a>
            <a href="tel:+573155765423" className="hover:scale-110 transition-transform">
              <Phone size={24} />
            </a>
            <a href="https://github.com/GabrielGarciaRodri" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-garcia-rodri-/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Linkedin size={24} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('sobre-mi')}
            className="animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* Sobre Mí */}
      <section id="sobre-mi" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Sobre Mí</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              Soy un Desarrollador Full Stack apasionado por crear soluciones tecnológicas que generen impacto real. 
              Con experiencia integral en desarrollo de software y administración de sistemas TI, me especializo en 
              la creación de APIs RESTful escalables y aplicaciones web empresariales.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Mi enfoque se centra en la optimización de procesos y la resolución proactiva de problemas técnicos, 
              siempre buscando entregar soluciones de alto impacto que mejoren la eficiencia operacional. 
              Disfruto trabajar con tecnologías modernas como Node.js, NestJS, React y bases de datos NoSQL.
            </p>
            <p className="text-lg leading-relaxed">
              Cuento con experiencia en gestión de infraestructura cloud (GCP, AWS), configuración de plataformas 
              CRM como Salesforce, y la implementación de sistemas de seguridad robustos. Mi nivel avanzado de 
              inglés me permite colaborar efectivamente en equipos multiculturales y mantenerme actualizado con 
              las últimas tendencias tecnológicas.
            </p>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Experiencia Laboral</h3>
          <div className="max-w-4xl mx-auto">
            {experiencia.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                {/* Timeline line */}
                {index !== experiencia.length - 1 && (
                  <div className={`absolute left-8 top-16 bottom-0 w-0.5 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                )}
                
                <div className="flex items-start">
                  <div className={`w-16 h-16 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center flex-shrink-0`}>
                    <Server size={24} />
                  </div>
                  
                  <div className="ml-8 flex-grow">
                    <h4 className="text-xl font-semibold">{exp.cargo}</h4>
                    <p className="text-blue-600 font-medium">{exp.empresa}</p>
                    <p className="text-sm text-gray-500 mb-4">{exp.periodo}</p>
                    <p className="mb-4">{exp.descripcion}</p>
                    
                    <div className="space-y-2">
                      {exp.logros.map((logro, i) => (
                        <div key={i} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-sm">{logro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Habilidades Técnicas</h3>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
              <div className="flex items-center mb-4">
                <Code className="text-blue-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold">Frontend</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {habilidades.frontend.map((skill) => (
                  <span key={skill} className={`px-3 py-1 text-sm rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
              <div className="flex items-center mb-4">
                <Server className="text-blue-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold">Backend</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {habilidades.backend.map((skill) => (
                  <span key={skill} className={`px-3 py-1 text-sm rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
              <div className="flex items-center mb-4">
                <Database className="text-blue-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold">Bases de Datos</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {habilidades.database.map((skill) => (
                  <span key={skill} className={`px-3 py-1 text-sm rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud */}
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
              <div className="flex items-center mb-4">
                <Cloud className="text-blue-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold">Cloud & DevOps</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {habilidades.cloud.map((skill) => (
                  <span key={skill} className={`px-3 py-1 text-sm rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
              <div className="flex items-center mb-4">
                <Globe className="text-blue-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold">Herramientas</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {habilidades.tools.map((skill) => (
                  <span key={skill} className={`px-3 py-1 text-sm rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile */}
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
              <div className="flex items-center mb-4">
                <Smartphone className="text-blue-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold">Desarrollo Móvil</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["iOS", "Android", "React Native", "App Store", "Google Play"].map((skill) => (
                  <span key={skill} className={`px-3 py-1 text-sm rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">¿Hablemos?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. 
            Si tienes algo en mente, no dudes en contactarme.
          </p>
          
          <div className="flex justify-center space-x-8 flex-wrap gap-4">
            <a 
              href="mailto:garcia.roga02@gmail.com"
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
            >
              <Mail size={20} />
              <span>garcia.roga02@gmail.com</span>
            </a>
            
            <a 
              href="tel:+573155765423"
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
            >
              <Phone size={20} />
              <span>+57 315 576 5423</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <p className="text-sm text-gray-500">
          © 2024 Gabriel García Rodríguez. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;