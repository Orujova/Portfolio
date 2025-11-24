'use client';

import { Code, Palette, Zap } from 'lucide-react';
import { translations, Language } from '@/lib/translations';

interface SkillsProps {
  language: Language;
  darkMode: boolean;
}

export default function Skills({ language, darkMode }: SkillsProps) {
  const t = translations[language];

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: t.skills.frontend,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS / Tailwind CSS', level: 90 },
        { name: 'JavaScript / TypeScript', level: 85 },
        { name: 'React JS', level: 90 },
        { name: 'Redux', level: 80 },
        { name: 'Next JS', level: 85 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Responsive Design', level: 90 }
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t.skills.backend,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 80 },
        { name: 'Django', level: 75 },
        { name: 'API Development', level: 85 },
        { name: 'Azure', level: 70 }
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: t.skills.tools,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git & Github', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 75 },
        { name: 'Docker', level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          {t.skills.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="dark:bg-white/5 bg-gray-50 rounded-2xl p-6 backdrop-blur-sm border dark:border-white/10 border-gray-200 hover:scale-105 transition-transform"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs dark:text-gray-400 text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 dark:bg-white/10 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}