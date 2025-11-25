'use client';

import { Code, Palette, Zap, Star } from 'lucide-react';
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
      icon: <Code className="w-8 h-8" />,
      title: t.skills.frontend,
      color: 'from-purple-500 to-pink-500',
      bgColor: darkMode ? 'from-purple-500/20 to-pink-500/20' : 'from-purple-500/10 to-pink-500/10',
      skills: [
        { name: 'HTML', level: 95, icon: '🎯' },
        { name: 'CSS / Tailwind CSS', level: 90, icon: '🎨' },
        { name: 'JavaScript / TypeScript', level: 85, icon: '⚡' },
        { name: 'React JS', level: 90, icon: '⚛️' },
        { name: 'Redux', level: 80, icon: '🔄' },
        { name: 'Next JS', level: 85, icon: '▲' },
        { name: 'Bootstrap', level: 85, icon: '📱' },
        { name: 'Responsive Design', level: 90, icon: '📐' }
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t.skills.backend,
      color: 'from-blue-500 to-cyan-500',
      bgColor: darkMode ? 'from-blue-500/20 to-cyan-500/20' : 'from-blue-500/10 to-cyan-500/10',
      skills: [
        { name: 'Python', level: 80, icon: '🐍' },
        { name: 'Django', level: 75, icon: '🎸' },
        { name: 'API Development', level: 85, icon: '🔌' },
        { name: 'Azure', level: 70, icon: '☁️' }
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: t.skills.tools,
      color: 'from-orange-500 to-red-500',
      bgColor: darkMode ? 'from-orange-500/20 to-red-500/20' : 'from-orange-500/10 to-red-500/10',
      skills: [
        { name: 'Git & Github', level: 90, icon: '📦' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Figma', level: 75, icon: '🎨' },
        { name: 'Docker', level: 65, icon: '🐳' }
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-4 ${
          isVisible ? 'animate-fadeInDown' : 'opacity-0'
        } bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent`}>
          {t.skills.title}
        </h2>
        
        <p className={`text-center mb-12 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        } ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
          Technologies and tools I use to build amazing projects
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`group relative rounded-2xl p-6 backdrop-blur-sm border transition-all duration-500 card-hover ${
                darkMode 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
              } ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              } hover:scale-105 hover:shadow-2xl`}
              style={{ 
                animationDelay: `${categoryIndex * 200}ms`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
              
              <div className="relative z-10">
                {/* Icon with animation */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-scale`}>
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  {category.title}
                  {hoveredCategory === categoryIndex && (
                    <Star className="w-5 h-5 text-yellow-500 animate-pulse" />
                  )}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="space-y-2"
                      style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium flex items-center gap-2">
                          <span className="group-hover:scale-125 transition-transform duration-300">
                            {skill.icon}
                          </span>
                          {skill.name}
                        </span>
                        <span className={`text-xs ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        } font-semibold`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Animated progress bar */}
                      <div className={`relative w-full h-2 rounded-full overflow-hidden ${
                        darkMode ? 'bg-white/10' : 'bg-gray-200'
                      }`}>
                        <div 
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 shimmer"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating particles on hover */}
              {hoveredCategory === categoryIndex && (
                <>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full animate-float"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-blue-500 rounded-full animate-float-delayed"></div>
                  <div className="absolute top-1/2 left-2 w-2 h-2 bg-pink-500 rounded-full animate-float-slow"></div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Additional info section */}
        <div className={`mt-12 text-center ${
          isVisible ? 'animate-fadeInUp delay-700' : 'opacity-0'
        }`}>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Always learning and exploring new technologies 🚀
          </p>
        </div>
      </div>
    </section>
  );
}