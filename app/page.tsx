'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Language } from '@/lib/translations';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState<Language>('az');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen transition-colors duration-500 dark:bg-[#0B0B0F] bg-white dark:text-white text-gray-900 relative overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground darkMode={darkMode} />

        {/* Mouse Follow Effect */}
        <div 
          className="fixed w-96 h-96 rounded-full pointer-events-none z-0 blur-3xl transition-all duration-300 ease-out"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
            background: darkMode 
              ? 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)'
          }}
        />

        {/* Floating Shapes */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float-slow" />
        </div>

        {/* Main Content */}
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

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center hover:scale-110 transition-transform z-50 shadow-lg"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
}