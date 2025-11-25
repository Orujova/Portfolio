'use client';

import { translations, Language } from '@/lib/translations';
import { useState, useEffect, useRef } from 'react';

interface AboutProps {
  language: Language;
  darkMode: boolean;
}

export default function About({ language, darkMode }: AboutProps) {
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const softSkills = [
    { name: 'Problem-solving', icon: '🧩' },
    { name: 'Creativity', icon: '🎨' },
    { name: 'Good Communication', icon: '💬' },
    { name: 'Time management', icon: '⏰' },
    { name: 'Critical Thinking', icon: '🧠' },
    { name: 'Leadership', icon: '👑' },
    { name: 'Collaboration', icon: '🤝' },
    { name: 'Attention to detail', icon: '🔍' }
  ];

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

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-12 ${
          isVisible ? 'animate-fadeInDown' : 'opacity-0'
        } bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent`}>
          {t.about.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image with floating animation */}
          <div className={`flex justify-center ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl shadow-purple-500/20 animate-pulse-scale">
                <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-6xl backdrop-blur-sm">
                  👩‍💻
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-xl opacity-50 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-xl opacity-50 animate-float-delayed"></div>
              
              {/* Orbiting dots */}
              <div className="absolute top-1/2 left-1/2 w-full h-full">
                <div className="absolute w-3 h-3 bg-purple-500 rounded-full animate-float" style={{top: '-10px', left: '50%'}}></div>
                <div className="absolute w-2 h-2 bg-blue-500 rounded-full animate-float-delayed" style={{bottom: '-5px', right: '20%'}}></div>
                <div className="absolute w-3 h-3 bg-pink-500 rounded-full animate-float-slow" style={{left: '-10px', top: '40%'}}></div>
              </div>
            </div>
          </div>

          {/* About Text with stagger animation */}
          <div className={`space-y-6 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {t.about.description}
            </p>

            {/* Soft Skills with hover effects */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <span className="text-purple-500">✨</span>
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`group flex items-center gap-3 p-3 rounded-lg ${
                      darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-100 hover:bg-gray-200'
                    } border ${
                      darkMode ? 'border-white/10' : 'border-gray-200'
                    } hover:scale-105 hover:border-purple-500/50 transition-all duration-300 cursor-pointer card-hover`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages with animated progress bars */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <span className="text-purple-500">🌍</span>
                Languages
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">🇦🇿 Azerbaijani</span>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Native</span>
                  </div>
                  <div className={`w-full h-3 rounded-full overflow-hidden ${
                    darkMode ? 'bg-white/10' : 'bg-gray-200'
                  }`}>
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out animate-shimmer"
                      style={{ width: isVisible ? '100%' : '0%' }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">🇬🇧 English</span>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Advanced</span>
                  </div>
                  <div className={`w-full h-3 rounded-full overflow-hidden ${
                    darkMode ? 'bg-white/10' : 'bg-gray-200'
                  }`}>
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out delay-200 animate-shimmer"
                      style={{ width: isVisible ? '80%' : '0%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download CV Button */}
            <div className="pt-4">
              <button className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition-all overflow-hidden">
                <span className="relative z-10 flex items-center gap-2 font-semibold">
                  📄 Download CV
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}