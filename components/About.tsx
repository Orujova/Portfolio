'use client';

import { translations, Language } from '@/lib/translations';
import { useState, useEffect, useRef } from 'react';
import { Download, Sparkles, GraduationCap } from 'lucide-react';

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
    { name: 'Problem Solving', icon: '🧩', color: 'from-purple-500 to-pink-500' },
    { name: 'Team Collaboration', icon: '🤝', color: 'from-blue-500 to-cyan-500' },
    { name: 'Critical Thinking', icon: '🧠', color: 'from-green-500 to-emerald-500' },
    { name: 'Time Management', icon: '⏰', color: 'from-orange-500 to-amber-500' },
    { name: 'Attention to Detail', icon: '🔍', color: 'from-red-500 to-rose-500' },
    { name: 'Adaptability', icon: '🎯', color: 'from-indigo-500 to-purple-500' },
    { name: 'Communication', icon: '💬', color: 'from-teal-500 to-cyan-500' },
    { name: 'Leadership', icon: '👑', color: 'from-yellow-500 to-orange-500' }
  ];

  const languages = [
    { name: 'Azerbaijani', level: 100, label: 'Native', gradient: 'from-purple-500 to-blue-500' },
    { name: 'English', level: 85, label: 'Professional', gradient: 'from-blue-500 to-cyan-500' },
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
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${
            isVisible ? 'animate-fadeInDown' : 'opacity-0'
          } bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent`}>
            {t.about.title}
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          } ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'} flex items-center justify-center gap-2`}>
            <Sparkles className="w-5 h-5 text-purple-500" />
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Profile Card */}
          <div className={`lg:col-span-4 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <div className={`sticky top-24 rounded-2xl p-8 backdrop-blur-sm border ${
              darkMode 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white border-gray-200 shadow-xl'
            }`}>
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-full aspect-square rounded-2xl overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-8xl backdrop-blur-sm">
                    👩‍💻
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-xl opacity-50 animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-xl opacity-50 animate-float-delayed"></div>
              </div>

              {/* Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Narmin Orujova</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                  Full Stack Developer
                </p>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
                  darkMode 
                    ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                    : 'bg-green-50 border-green-200 text-green-600'
                }`}>
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium">Available for hire</span>
                </div>
              </div>

              {/* Download CV Button */}
              <button 
                onClick={handleDownloadCV}
                className="w-full group relative px-6 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition-all overflow-hidden shadow-lg hover:shadow-purple-500/50"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 font-semibold text-white">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download CV
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`lg:col-span-8 space-y-8 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
            {/* Bio Section */}
            <div className={`rounded-2xl p-8 backdrop-blur-sm border ${
              darkMode 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white border-gray-200 shadow-xl'
            }`}>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-6 h-6 text-purple-500" />
                    <h3 className="text-2xl font-bold">About Me</h3>
                  </div>
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.about.description}
                  </p>
                </div>

                <div className={`p-5 rounded-xl border-l-4 border-purple-500 ${
                  darkMode ? 'bg-purple-500/10' : 'bg-purple-50'
                }`}>
                  <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.about.currentRole}
                  </p>
                </div>

                <div className={`p-5 rounded-xl border-l-4 border-blue-500 ${
                  darkMode ? 'bg-blue-500/10' : 'bg-blue-50'
                }`}>
                  <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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
                  className={`flex-1 px-6 py-4 font-semibold transition-all ${
                    activeTab === 'skills'
                      ? 'text-purple-500 border-b-2 border-purple-500'
                      : darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Soft Skills
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('languages')}
                  className={`flex-1 px-6 py-4 font-semibold transition-all ${
                    activeTab === 'languages'
                      ? 'text-purple-500 border-b-2 border-purple-500'
                      : darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    🌍
                    Languages
                  </span>
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-8">
                {activeTab === 'skills' ? (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {softSkills.map((skill, index) => (
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
                          <div className="text-3xl group-hover:scale-125 transition-transform duration-300">
                            {skill.icon}
                          </div>
                          <div className="text-xs font-medium leading-tight">
                            {skill.name}
                          </div>
                        </div>
                        
                        {/* Hover gradient effect */}
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity -z-10`}></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {languages.map((lang, index) => (
                      <div 
                        key={index}
                        className="space-y-3"
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-lg">{lang.name}</span>
                          <span className={`text-sm px-3 py-1 rounded-full ${
                            darkMode ? 'bg-white/10' : 'bg-gray-100'
                          }`}>
                            {lang.label}
                          </span>
                        </div>
                        <div className={`relative w-full h-4 rounded-full overflow-hidden ${
                          darkMode ? 'bg-white/10' : 'bg-gray-200'
                        }`}>
                          <div 
                            className={`h-full bg-gradient-to-r ${lang.gradient} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{ 
                              width: isVisible ? `${lang.level}%` : '0%',
                              transitionDelay: `${index * 200}ms`
                            }}
                          >
                            <div className="absolute inset-0 shimmer"></div>
                          </div>
                        </div>
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