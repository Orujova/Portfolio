'use client';

import { ExternalLink, Github } from 'lucide-react';
import { translations, Language } from '@/lib/translations';

interface ProjectsProps {
  language: Language;
  darkMode: boolean;
}

export default function Projects({ language, darkMode }: ProjectsProps) {
  const t = translations[language];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      image: '🛍️',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com/Orujova',
      live: '#',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Task Management',
      description: 'Real-time collaborative task management system with AI-powered suggestions and analytics.',
      image: '🤖',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'OpenAI API'],
      github: 'https://github.com/Orujova',
      live: '#',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Portfolio Builder',
      description: 'Drag-and-drop portfolio website builder with customizable templates and export functionality.',
      image: '🎨',
      tech: ['React', 'Redux', 'Tailwind CSS', 'Firebase'],
      github: 'https://github.com/Orujova',
      live: '#',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with real-time data visualization and reports.',
      image: '📊',
      tech: ['Next.js', 'TypeScript', 'Chart.js', 'API Integration'],
      github: 'https://github.com/Orujova',
      live: '#',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with 7-day forecast, location search, and weather alerts.',
      image: '🌤️',
      tech: ['React', 'TypeScript', 'OpenWeather API', 'Tailwind CSS'],
      github: 'https://github.com/Orujova',
      live: '#',
      gradient: 'from-sky-500 to-blue-500'
    },
    {
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support, comments, and user authentication.',
      image: '📝',
      tech: ['Next.js', 'Django', 'PostgreSQL', 'AWS S3'],
      github: 'https://github.com/Orujova',
      live: '#',
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          {t.projects.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group dark:bg-white/5 bg-gray-50 rounded-2xl overflow-hidden border dark:border-white/10 border-gray-200 hover:scale-105 transition-all duration-300"
            >
              {/* Project Image/Icon */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <span className="relative z-10 group-hover:scale-110 transition-transform">
                  {project.image}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm dark:text-gray-400 text-gray-600 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full dark:bg-white/10 bg-gray-200 dark:text-gray-300 text-gray-700"
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
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border dark:border-white/20 border-gray-300 hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">{t.projects.viewCode}</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} hover:opacity-90 transition-opacity`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">{t.projects.viewLive}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Orujova"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition-transform"
          >
            <Github className="w-5 h-5" />
            <span className="font-semibold">View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}