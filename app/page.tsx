'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { Language } from '@/lib/translations';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState<Language>('az');

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen transition-colors duration-500 dark:bg-[#0B0B0F] bg-white dark:text-white text-gray-900 relative overflow-hidden">
        {/* Emergent.sh Style Animated Background - DARK MODE */}
        {darkMode && (
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Large Animated Gradient Orbs */}
            <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-br from-violet-600/20 via-fuchsia-600/20 to-pink-600/20 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute top-1/4 -right-40 w-[900px] h-[900px] bg-gradient-to-br from-cyan-500/15 via-blue-600/15 to-indigo-600/15 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-40 left-1/3 w-[700px] h-[700px] bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-6000"></div>
            
            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000,transparent)]"></div>
            
            {/* Glowing Dots */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400/60 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-fuchsia-400/60 rounded-full blur-sm animate-pulse animation-delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-violet-400/60 rounded-full blur-sm animate-pulse animation-delay-2000"></div>
            <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-pink-400/60 rounded-full blur-sm animate-pulse animation-delay-3000"></div>
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-400/60 rounded-full blur-sm animate-pulse animation-delay-4000"></div>
          </div>
        )}

        {/* Light Mode Background */}
        {!darkMode && (
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Soft Pastel Gradients for Light Mode */}
            <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-br from-violet-200/40 via-fuchsia-200/40 to-pink-200/40 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute top-1/4 -right-40 w-[900px] h-[900px] bg-gradient-to-br from-cyan-200/30 via-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-40 left-1/3 w-[700px] h-[700px] bg-gradient-to-br from-pink-200/40 via-purple-200/40 to-blue-200/40 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
            
            {/* Light Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000,transparent)]"></div>
            
            {/* Subtle Dots */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-400/40 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-400/40 rounded-full blur-sm animate-pulse animation-delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-400/40 rounded-full blur-sm animate-pulse animation-delay-2000"></div>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10">
          <Header 
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            language={language}
            setLanguage={setLanguage}
          />
          <Hero language={language} darkMode={darkMode} />
          <About language={language} darkMode={darkMode} />
          <Skills language={language} darkMode={darkMode} />
          <Experience language={language} darkMode={darkMode} />
          <Projects language={language} darkMode={darkMode} />
          <Contact language={language} darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}