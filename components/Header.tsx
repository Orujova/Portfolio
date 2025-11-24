'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
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

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'backdrop-blur-xl bg-black/40 border-b border-white/10' : 'backdrop-blur-xl bg-white/70 border-b border-gray-200 shadow-lg') : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Narmin.dev
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-violet-600'} transition-colors relative group`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${darkMode ? 'bg-gradient-to-r from-cyan-400 to-purple-400' : 'bg-gradient-to-r from-violet-500 to-fuchsia-500'} group-hover:w-full transition-all duration-300`}></span>
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative group">
              <button className={`p-2 rounded-lg transition-all hover:scale-110 flex items-center gap-2 ${darkMode ? 'bg-white/5 hover:bg-white/10 border border-white/10' : 'bg-gray-100 hover:bg-gray-200 border border-gray-200'} backdrop-blur-sm`}>
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium uppercase">{language}</span>
              </button>
              <div className={`absolute right-0 mt-2 w-40 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all ${darkMode ? 'bg-black/90 border border-white/10' : 'bg-white border border-gray-200'} backdrop-blur-xl`}>
                <button
                  onClick={() => setLanguage('az')}
                  className={`w-full px-4 py-2 text-left ${darkMode ? 'hover:bg-cyan-500/20' : 'hover:bg-violet-100'} transition-colors rounded-t-lg ${language === 'az' ? (darkMode ? 'text-cyan-400' : 'text-violet-600') + ' font-semibold' : ''}`}
                >
                  🇦🇿 Azərbaycan
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`w-full px-4 py-2 text-left ${darkMode ? 'hover:bg-cyan-500/20' : 'hover:bg-violet-100'} transition-colors ${language === 'en' ? (darkMode ? 'text-cyan-400' : 'text-violet-600') + ' font-semibold' : ''}`}
                >
                  🇬🇧 English
                </button>
                <button
                  onClick={() => setLanguage('ru')}
                  className={`w-full px-4 py-2 text-left ${darkMode ? 'hover:bg-cyan-500/20' : 'hover:bg-violet-100'} transition-colors rounded-b-lg ${language === 'ru' ? (darkMode ? 'text-cyan-400' : 'text-violet-600') + ' font-semibold' : ''}`}
                >
                  🇷🇺 Русский
                </button>
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all hover:scale-110 ${darkMode ? 'bg-white/5 hover:bg-white/10 border border-white/10' : 'bg-gray-100 hover:bg-gray-200 border border-gray-200'} backdrop-blur-sm`}
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-black/90 border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}