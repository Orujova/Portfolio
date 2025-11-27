'use client';

import { ExternalLink, Github, Star, Eye } from 'lucide-react';
import { translations, Language } from '@/lib/translations';
import { useState, useEffect, useRef } from 'react';

interface ProjectsProps {
  language: Language;
  darkMode: boolean;
}

export default function Projects({ language, darkMode }: ProjectsProps) {
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
  {
  title: 'HeaRead (Startup project)',
  description: 'Award-winning accessibility platform converting speech to text in real-time. Features include transcript archive, user management, and multi-language support. 2nd place in Education Innovation Competition.',
    image: '🎙️',
  tech: ['React', 'Django',  'REST API', 'JWT', 'Speech Recognition'],
  github: 'https://github.com/Orujova/React_Django_HeaRead',

  gradient: 'from-indigo-500 to-purple-600',
  category: 'fullstack',
  featured: false
},
   {
  title: 'EcoTrack - Carbon Footprint Tracker (Hackathon project)',
  description: 'Comprehensive web application for tracking and analyzing personal carbon emissions across transportation, shopping, and lifestyle choices with interactive visualizations and community events.',
  image: '🌍',
  tech: ['Django', 'React', 'Google Maps API', 'Chart.js', 'Tailwind CSS', 'REST API', 'JWT'],
  github: 'https://github.com/Orujova/Carbon_Footprint',

  gradient: 'from-green-500 to-teal-500',
  category: 'fullstack',
  featured: false
},
 {
  title: 'QR Generator',
  description: 'Serverless QR code generator with branded templates and PDF export. Built with Azure Functions, generates professional planogram documentation with custom metadata and print-ready PDFs.',
  image: '📱',
  tech: ['Node.js', 'Azure Functions', 'Puppeteer', 'QRCode.js', 'HTML/CSS'],
  github: 'https://github.com/Orujova/QR_Generator',

  gradient: 'from-emerald-500 to-teal-600',
  category: 'backend',
  featured: false
},
    {
  title: 'HR Uniform Management System',
  description: 'Enterprise-level uniform distribution and inventory management system for Almet Holding with multi-tenant architecture, 3-tier approval workflows, and real-time stock tracking across multiple projects.',
  image: '👔',
  tech: ['React.js', 'Redux', 'Styled Components', 'Material-UI'],
  github: 'https://github.com/Orujova/Uniform-app',

  gradient: 'from-blue-500 to-cyan-500',
  category: 'frontend',
  featured: false
},
   {
  title: 'ER Request Management System',
  description: 'Enterprise HR case management platform with real-time chat, integrated email client, rich document handling, and role-based workflows for employee relations tracking.',
  image: '🏢',
  tech: ['React', 'Redux Toolkit', 'Azure AD', 'TipTap Editor', 'Microsoft Graph API', 'Tailwind CSS'],
  github: 'https://github.com/Orujova/ER_Request',

  gradient: 'from-cyan-500 to-blue-600',
  category: 'frontend',
  featured: false
},{
  title: 'UPLMS - Corporate Learning Platform (Startup project)',
  description: 'Full-featured enterprise LMS with modular architecture: Dashboard with analytics, Course & Cluster management, Training scheduler, Communications hub (News, Announcements, Events), Data Collection surveys, Push Notifications, Internal Vacancies, User & Target Group management, and comprehensive Settings with branding customization.',
  image: '🎓',
  tech: ['Next.js', 'React', 'Redux Toolkit', 'TailwindCSS', 'EditorJS'],
  github: 'https://github.com/Orujova/UP_Lms',

  gradient: 'from-teal-400 via-cyan-500 to-emerald-600',
  category: 'fullstack',
  featured: true
}

,{
  title: ' HRIS - Enterprise HR Management System',
  description: 'Full-stack HRIS platform managing  employees with performance reviews, competency assessments, job descriptions, asset management, training programs, leave management, and organizational charts. Features Microsoft SSO, automated workflows, role-based permissions, and real-time dashboards.',
  image: '🏢',
  tech: [
    'Django REST Framework',
    'Dbeaver',
    'PostgreSQL',
    'Celery',
    'Redis',
    'Microsoft Graph API',
    'MSAL (Microsoft Authentication)',
    'JWT Authentication',
    'Django ORM',
    'Swagger/OpenAPI',
    'Docker',
    'DRF Spectacular',
    'Openpyxl (Excel Export)',
    'Django Signals',
    'Custom Middleware',
    'Django Cache Framework'
  ],
  github: 'https://github.com/Orujova',
  gradient: 'from-blue-600 to-indigo-600',
  category: 'backend',
  featured: true
},
{
  title: 'Enterprise HRIS & Performance Management Platform',
  description: 'Comprehensive HR management system with employee performance tracking, training modules, vacation management, business trip approvals, organizational charts, and real-time analytics dashboard.',
  image: '👥',
  tech: [
    'Next.js 14', 
    'React 18', 
    'Tailwind CSS',
    'Recharts',
    'React Flow',
    'MSAL (Microsoft Auth)',
    'Azure AD Integration',
    'Microsoft Graph API',
    'React Hook Form',
    'Zustand/Context API',
    'Dagre (Graph Layout)',
  ],
  github: 'https://github.com/Orujova/Almet_HRIS_front',

  gradient: 'from-blue-600 to-indigo-600',
  category: 'frontend',
  featured: true
}
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: '🎯' },
    { id: 'featured', label: 'Featured', icon: '⭐' },
    { id: 'fullstack', label: 'Full Stack', icon: '💻' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' }
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return project.category === filter;
  });

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-4 ${
          isVisible ? 'animate-fadeInDown' : 'opacity-0'
        } bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent`}>
          {t.projects.title}
        </h2>

        <p className={`text-center mb-8 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        } ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
          Some of my recent work and side projects
        </p>

        {/* Filter buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${
          isVisible ? 'animate-fadeInUp delay-300' : 'opacity-0'
        }`}>
          {filters.map((filterItem, index) => (
            <button
              key={filterItem.id}
              onClick={() => setFilter(filterItem.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                filter === filterItem.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white scale-110 shadow-lg'
                  : darkMode
                    ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                    : 'bg-gray-100 hover:bg-gray-200 border border-gray-200'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span>{filterItem.icon}</span>
              {filterItem.label}
            </button>
          ))}
        </div>

        {/* Projects grid with stagger animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 card-hover ${
                darkMode 
                  ? 'bg-white/5 border-white/10 hover:border-purple-500/50' 
                  : 'bg-gray-50 border-gray-200 hover:border-purple-500/50'
              } ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              } hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-xs font-bold flex items-center gap-1 animate-pulse-scale">
                  <Star className="w-3 h-3" />
                  Featured
                </div>
              )}

              {/* Project Image/Icon with parallax effect */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl overflow-hidden`}>
                <div className={`absolute inset-0 bg-black/20 transition-all duration-500 ${
                  hoveredProject === index ? 'bg-black/10' : ''
                }`}></div>
                
                <span className={`relative z-10 transition-all duration-500 ${
                  hoveredProject === index ? 'scale-125 rotate-12' : ''
                }`}>
                  {project.image}
                </span>

                {/* Hover overlay */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center gap-4 animate-fadeInUp">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                   
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className={`text-sm line-clamp-3 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs rounded-full transition-all hover:scale-110 ${
                        darkMode 
                          ? 'bg-white/10 text-gray-300 hover:bg-white/20' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-all hover:scale-105 ${
                      darkMode 
                        ? 'border-white/20 hover:bg-white/10' 
                        : 'border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">{t.projects.viewCode}</span>
                  </a>
                  {/* <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">{t.projects.viewLive}</span>
                  </a> */}
                </div>
              </div>

              {/* Floating particles on hover */}
              {hoveredProject === index && (
                <>
                  <div className="absolute top-4 left-4 w-2 h-2 bg-purple-500 rounded-full animate-float"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-blue-500 rounded-full animate-float-delayed"></div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* GitHub Link with animation */}
        <div className={`text-center mt-12 ${
          isVisible ? 'animate-fadeInUp delay-700' : 'opacity-0'
        }`}>
          <a
            href="https://github.com/Orujova"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition-all hover:shadow-lg hover:shadow-purple-500/50 group"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span className="font-semibold">View More on GitHub</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}