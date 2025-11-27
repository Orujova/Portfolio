'use client';

import { Code2, Database, Wrench } from 'lucide-react';
import { translations, Language } from '@/lib/translations';
import { useState, useEffect, useRef } from 'react';

interface SkillsProps {
  language: Language;
  darkMode: boolean;
}

export default function Skills({ language, darkMode }: SkillsProps) {
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
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

  const skillCategories = [
    {
      icon: Code2,
      title: t.skills.frontend,
      color: 'from-purple-600 to-pink-600',
      skills: [
        'HTML',
        'CSS / Tailwind CSS',
        'Bootstrap',
        'JavaScript',
        'React JS',
        'Next JS',
        'TypeScript',
        'Redux Toolkit & Zustand',
        'Material-UI & Styled Components',
        'React Hook Form',
        'Recharts & Data Visualization',
        'Responsive Design'
      ]
    },
    {
      icon: Database,
      title: t.skills.backend,
      color: 'from-blue-600 to-cyan-600',
      skills: [
        'API Development',
        'Azure Functions',
        'Django REST Framework',
        'PostgreSQL & DBeaver',
        'RESTful API Design',
        'JWT & MSAL Authentication',
        'Celery & Redis',
        'Microsoft Graph API',
        'Node.js',
        'Swagger/OpenAPI'
      ]
    },
    {
      icon: Wrench,
      title: t.skills.tools,
      color: 'from-orange-600 to-red-600',
      skills: [
        'Git & GitHub',
        'Docker & Containerization',
        'Azure AD & Cloud Services',
        'VS Code',
        'UI/UX Design',
        'Working with Figma',
        'CI/CD & Deployment'
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-4 ${
          isVisible ? 'animate-fadeInDown' : 'opacity-0'
        } bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent`}>
          {t.skills.title}
        </h2>
        
        <p className={`text-center mb-16 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        } ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
          {t.skills.description}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={categoryIndex}
                onMouseEnter={() => setHoveredCategory(categoryIndex)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`group relative rounded-2xl p-8 backdrop-blur-sm border transition-all duration-500 ${
                  darkMode 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/30' 
                    : 'bg-white border-gray-200 hover:shadow-2xl hover:border-purple-500/30'
                } ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                } hover:scale-[1.02]`}
                style={{ 
                  animationDelay: `${categoryIndex * 200}ms`
                }}
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className={`group/item flex items-center gap-3 py-2 px-3 rounded-lg transition-all duration-300 ${
                          darkMode 
                            ? 'hover:bg-white/5' 
                            : 'hover:bg-gray-50'
                        }`}
                        style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 50)}ms` }}
                      >
                        {/* Dot indicator */}
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} group-hover/item:scale-150 transition-transform duration-300`}></div>
                        
                        {/* Skill name */}
                        <span className={`text-sm font-medium ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        } group-hover/item:text-purple-600 transition-colors duration-300`}>
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative corner accents */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.color} opacity-10 rounded-2xl blur-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${category.color} opacity-10 rounded-2xl blur-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className={`mt-16 text-center ${
          isVisible ? 'animate-fadeInUp delay-700' : 'opacity-0'
        }`}>
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border ${
            darkMode 
              ? 'bg-purple-500/10 border-purple-500/30 text-purple-400' 
              : 'bg-purple-50 border-purple-200 text-purple-600'
          }`}>
            <Code2 className="w-5 h-5" />
            <span className="text-sm font-medium">{t.skills.learning}</span>
          </div>
        </div>
      </div>
    </section>
  );
}