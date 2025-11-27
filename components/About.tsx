'use client';

import { translations, Language } from '@/lib/translations';
import { useState, useEffect, useRef } from 'react';
import { Download, User, Award, Globe2, MessageSquare, Users, Target, Lightbulb, Clock, Eye } from 'lucide-react';

interface AboutProps {
  language: Language;
  darkMode: boolean;
}

export default function About({ language, darkMode }: AboutProps) {
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'skills' | 'languages'>('skills');
  const sectionRef = useRef<HTMLElement>(null);

  const softSkills = [
    { name: 'Problem Solving', icon: Lightbulb, color: 'from-purple-500 to-pink-500' },
    { name: 'Team Collaboration', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { name: 'Critical Thinking', icon: Target, color: 'from-green-500 to-emerald-500' },
    { name: 'Time Management', icon: Clock, color: 'from-orange-500 to-amber-500' },
    { name: 'Attention to Detail', icon: Eye, color: 'from-red-500 to-rose-500' },
    { name: 'Adaptability', icon: Globe2, color: 'from-indigo-500 to-purple-500' },
    { name: 'Communication', icon: MessageSquare, color: 'from-teal-500 to-cyan-500' },
    { name: 'Leadership', icon: Award, color: 'from-yellow-500 to-orange-500' }
  ];

  const languages = [
    { name: 'Azerbaijani', label: 'Native' },
    { name: 'English', label: 'Professional' },
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

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'Narmin.cv.pdf';
    link.download = 'Narmin.cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-3 ${
            isVisible ? 'animate-fadeInDown' : 'opacity-0'
          } bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent`}>
            {t.about.title}
          </h2>
          <p className={`text-base ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          } ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
            {t.about.subtitle}
          </p>
        </div>

        <div className=" ">
        

          {/* Right Column - Content */}
          {/* Right Column - Content */}
          <div className={`lg:col-span-8 space-y-8 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
            {/* Bio Section */}
            <div className={`rounded-2xl p-8 backdrop-blur-sm border ${
              darkMode 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white border-gray-200 shadow-xl'
            }`}>
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <p className={`text-base leading-relaxed flex-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.about.description}
                  </p>
                  
                  {/* CV Download Button */}
                  <button 
                    onClick={handleDownloadCV}
                    className={`group relative px-6 py-3 rounded-xl backdrop-blur-sm transition-all hover:scale-105 border ${
                      darkMode 
                        ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/50 hover:border-purple-400' 
                        : 'bg-gradient-to-r from-purple-100 to-blue-100 border-purple-300 hover:border-purple-500'
                    } shadow-lg hover:shadow-purple-500/30 whitespace-nowrap self-start sm:self-center`}
                  >
                    <span className="flex items-center gap-2 font-semibold text-sm">
                      <Download className={`w-4 h-4 group-hover:animate-bounce ${
                        darkMode ? 'text-purple-400' : 'text-purple-600'
                      }`} />
                      Download CV
                    </span>
                  </button>
                </div>
                <div className={`p-5 rounded-xl border-l-4 border-purple-500 ${
                  darkMode ? 'bg-purple-500/10' : 'bg-purple-50'
                }`}>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.about.currentRole}
                  </p>
                </div>

                <div className={`p-5 rounded-xl border-l-4 border-blue-500 ${
                  darkMode ? 'bg-blue-500/10' : 'bg-blue-50'
                }`}>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.about.achievements}
                  </p>
                </div>
              </div>
            </div>

            {/* Skills & Languages Tabs */}
            <div className={`rounded-2xl backdrop-blur-sm border ${
              darkMode 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white border-gray-200 shadow-xl'
            }`}>
              {/* Tab Headers */}
              <div className={`flex border-b ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`flex-1 px-6 py-3 text-sm font-semibold transition-all ${
                    activeTab === 'skills'
                      ? 'text-purple-500 border-b-2 border-purple-500'
                      : darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Award className="w-4 h-4" />
                    Soft Skills
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('languages')}
                  className={`flex-1 px-6 py-3 text-sm font-semibold transition-all ${
                    activeTab === 'languages'
                      ? 'text-purple-500 border-b-2 border-purple-500'
                      : darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Globe2 className="w-4 h-4" />
                    Languages
                  </span>
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-8">
                {activeTab === 'skills' ? (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {softSkills.map((skill, index) => {
                      const Icon = skill.icon;
                      return (
                        <div
                          key={index}
                          className={`group relative p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-110 cursor-pointer ${
                            darkMode 
                              ? 'bg-white/5 border-white/10 hover:border-purple-500/50' 
                              : 'bg-gray-50 border-gray-200 hover:border-purple-500/50 hover:shadow-lg'
                          }`}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className="text-center space-y-2">
                            
                            <div className="text-xs font-medium leading-tight">
                              {skill.name}
                            </div>
                          </div>
                          
                          {/* Hover gradient effect */}
                          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity -z-10`}></div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {languages.map((lang, index) => (
                      <div 
                        key={index}
                        className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                          darkMode 
                            ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                            : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                        }`}
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className="flex items-center gap-3">
                          <Globe2 className="w-5 h-5 text-purple-500" />
                          <span className="font-semibold text-base">{lang.name}</span>
                        </div>
                        <span className={`text-sm px-3 py-1 rounded-full ${
                          darkMode ? 'bg-white/10' : 'bg-gray-200'
                        }`}>
                          {lang.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}