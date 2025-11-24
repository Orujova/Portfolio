'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { translations, Language } from '@/lib/translations';

interface HeroProps {
  language: Language;
  darkMode: boolean;
}

export default function Hero({ language, darkMode }: HeroProps) {
  const t = translations[language];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <p className={`text-lg animate-slide-down ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.hero.greeting}
          </p>
          <h1 className={`text-5xl sm:text-7xl font-bold animate-slide-up ${darkMode ? 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400' : 'bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600'} bg-clip-text text-transparent`}>
            Narmin Orujova
          </h1>
          <h2 className={`text-3xl sm:text-4xl font-semibold animate-slide-up delay-200 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {t.hero.title}
          </h2>
          <p className={`text-xl animate-slide-up delay-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.hero.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-500">
          <button
            onClick={() => scrollToSection('projects')}
            className={`group px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all relative overflow-hidden ${darkMode ? 'bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500' : 'bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white'}`}
          >
            <span className="relative z-10">{t.hero.cta}</span>
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500' : 'bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600'}`}></div>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`px-8 py-3 rounded-full font-semibold border-2 backdrop-blur-sm transition-all ${darkMode ? 'border-white/20 hover:border-cyan-400/50 hover:bg-white/5' : 'border-violet-300 hover:border-violet-500 hover:bg-violet-50'}`}
          >
            {t.hero.contact}
          </button>
        </div>

        <div className="flex justify-center gap-6 pt-8 animate-slide-up delay-700">
          <a 
            href="https://github.com/Orujova" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 group ${darkMode ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50' : 'bg-gray-100 hover:bg-gray-200 border border-gray-200 hover:border-violet-400'}`}
          >
            <Github className={`w-6 h-6 transition-colors ${darkMode ? 'group-hover:text-cyan-400' : 'group-hover:text-violet-600'}`} />
          </a>
          <a 
            href="https://linkedin.com/in/narmin-orujova-0941b8256" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 group ${darkMode ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/50' : 'bg-gray-100 hover:bg-gray-200 border border-gray-200 hover:border-fuchsia-400'}`}
          >
            <Linkedin className={`w-6 h-6 transition-colors ${darkMode ? 'group-hover:text-purple-400' : 'group-hover:text-fuchsia-600'}`} />
          </a>
          <a 
            href="mailto:nermnorucova2004@gmail.com"
            className={`p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 group ${darkMode ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-400/50' : 'bg-gray-100 hover:bg-gray-200 border border-gray-200 hover:border-pink-400'}`}
          >
            <Mail className={`w-6 h-6 transition-colors ${darkMode ? 'group-hover:text-pink-400' : 'group-hover:text-pink-600'}`} />
          </a>
        </div>
      </div>
    </section>
  );
}