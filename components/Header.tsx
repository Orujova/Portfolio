'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Globe, Menu, X, Sparkles } from 'lucide-react';
import { translations, Language } from '@/lib/translations';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  language: Language;
  setLanguage: (value: Language) => void;
}

export default function Header({ darkMode, setDarkMode, language, setLanguage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? darkMode 
          ? 'backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-2xl shadow-purple-500/10' 
          : 'backdrop-blur-xl bg-white/70 border-b border-gray-200 shadow-xl'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with animation */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Sparkles className="w-6 h-6 text-purple-500 group-hover:rotate-180 transition-transform duration-500" />
            <span className="animate-gradient bg-200%">Narmin.dev</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative group transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-purple-500 font-semibold scale-110'
                    : darkMode 
                      ? 'text-gray-300 hover:text-cyan-400' 
                      : 'text-gray-700 hover:text-violet-600'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 animate-shimmer"></span>
                )}
                
                {/* Hover underline */}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-400' 
                    : 'bg-gradient-to-r from-violet-500 to-fuchsia-500'
                } group-hover:w-full transition-all duration-300`}></span>
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Language Selector with dropdown animation */}
            <div className="relative group">
              <button className={`p-2 rounded-lg transition-all hover:scale-110 flex items-center gap-2 ${
                darkMode 
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
                  : 'bg-gray-100 hover:bg-gray-200 border border-gray-200'
              } backdrop-blur-sm`}>
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium uppercase">{language}</span>
              </button>
              
              <div className={`absolute right-0 mt-2 w-40 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 ${
                darkMode 
                  ? 'bg-black/90 border border-white/10' 
                  : 'bg-white border border-gray-200'
              } backdrop-blur-xl overflow-hidden`}>
                <button
                  onClick={() => setLanguage('az')}
                  className={`w-full px-4 py-3 text-left flex items-center gap-2 ${
                    darkMode ? 'hover:bg-cyan-500/20' : 'hover:bg-violet-100'
                  } transition-all ${
                    language === 'az' 
                      ? (darkMode ? 'text-cyan-400 bg-cyan-500/10' : 'text-violet-600 bg-violet-50') + ' font-semibold' 
                      : ''
                  }`}
                >
                  Azərbaycan
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`w-full px-4 py-3 text-left flex items-center gap-2 ${
                    darkMode ? 'hover:bg-cyan-500/20' : 'hover:bg-violet-100'
                  } transition-all ${
                    language === 'en' 
                      ? (darkMode ? 'text-cyan-400 bg-cyan-500/10' : 'text-violet-600 bg-violet-50') + ' font-semibold' 
                      : ''
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('ru')}
                  className={`w-full px-4 py-3 text-left flex items-center gap-2 ${
                    darkMode ? 'hover:bg-cyan-500/20' : 'hover:bg-violet-100'
                  } transition-all ${
                    language === 'ru' 
                      ? (darkMode ? 'text-cyan-400 bg-cyan-500/10' : 'text-violet-600 bg-violet-50') + ' font-semibold' 
                      : ''
                  }`}
                >
                  Русский
                </button>
              </div>
            </div>

            {/* Dark Mode Toggle with rotation animation */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all hover:scale-110 hover:rotate-180 duration-500 ${
                darkMode 
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
                  : 'bg-gray-100 hover:bg-gray-200 border border-gray-200'
              } backdrop-blur-sm`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:scale-110 transition-transform"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with slide animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${
        mobileMenuOpen ? 'max-h-96' : 'max-h-0'
      } ${
        darkMode 
          ? 'backdrop-blur-xl bg-black/90 border-t border-white/10' 
          : 'backdrop-blur-xl bg-white/90 border-t border-gray-200'
      }`}>
        <div className="px-4 py-4 space-y-3">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left py-3 px-4 rounded-lg transition-all ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold'
                  : darkMode
                    ? 'hover:bg-white/5 hover:text-cyan-400'
                    : 'hover:bg-gray-100 hover:text-violet-600'
              }`}
              style={{
                animation: mobileMenuOpen ? `fadeInLeft 0.3s ease-out ${index * 50}ms forwards` : 'none',
                opacity: mobileMenuOpen ? 1 : 0
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}