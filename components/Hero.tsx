'use client';

import { Github, Linkedin, Mail, ChevronDown, Code2, Rocket,Download } from 'lucide-react';
import { translations, Language } from '@/lib/translations';
import { useState, useEffect } from 'react';

interface HeroProps {
  language: Language;
  darkMode: boolean;
}

export default function Hero({ language, darkMode }: HeroProps) {
  const t = translations[language];
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'AI Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[loopNum % titles.length];
      const updatedText = isDeleting
        ? currentTitle.substring(0, typedText.length - 1)
        : currentTitle.substring(0, typedText.length + 1);

      setTypedText(updatedText);

      if (!isDeleting && updatedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(100);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

   const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'Narmin.cv.pdf';
    link.download = 'Narmin.cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Greeting with fade in animation */}
        <div className="space-y-4">
          <p className={`text-lg animate-fadeInDown ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} style={{ animationFillMode: 'both' }}>
            {t.hero.greeting}
          </p>
          
          {/* Name with gradient animation */}
          <h1 className={`text-5xl sm:text-7xl font-bold animate-fadeInUp delay-200 ${
            darkMode 
              ? 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400' 
              : 'bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600'
          } bg-clip-text text-transparent animate-gradient`} style={{ animationFillMode: 'both' }}>
            Narmin Orujova
          </h1>
          
          {/* Typing animation title */}
          <div className="h-16 flex items-center justify-center animate-fadeInUp delay-300" style={{ animationFillMode: 'both' }}>
            <h2 className={`text-3xl sm:text-4xl font-semibold flex items-center gap-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
               <Code2 className="w-8 h-8 text-purple-500" />
              <span className="min-w-[300px] text-left">{typedText}</span>
              <span className="inline-block w-1 h-8 bg-purple-500 animate-pulse ml-1"></span>
            </h2>
          </div>
          
          <p className={`text-xl animate-fadeInUp delay-500 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`} style={{ animationFillMode: 'both' }}>
            {t.hero.subtitle}
          </p>
        </div>

        {/* Action buttons with hover effects */}
        <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp delay-700" style={{ animationFillMode: 'both' }}>
          <button
            onClick={() => scrollToSection('projects')}
            className={`group relative px-8 py-3 rounded-full font-semibold overflow-hidden transition-all hover:scale-105 ${
              darkMode 
                ? 'bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500' 
                : 'bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white'
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.hero.cta}
              <Rocket className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        
          <button
            onClick={() => scrollToSection('contact')}
            className={`px-8 py-3 rounded-full font-semibold border-2 backdrop-blur-sm transition-all hover:scale-105 ${
              darkMode 
                ? 'border-white/20 hover:border-cyan-400/50 hover:bg-white/5' 
                : 'border-violet-300 hover:border-violet-500 hover:bg-violet-50'
            }`}
          >
            {t.hero.contact}
          </button>
        </div>

        {/* Social links with stagger animation */}
        {/* Social links and CV download */}
        <div className="flex flex-col items-center gap-6 pt-8 animate-fadeInUp delay-1000" style={{ animationFillMode: 'both' }}>
          {/* Social Links */}
          <div className="flex gap-6">
            <a 
              href="https://github.com/Orujova" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`group p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 ${
                darkMode 
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50' 
                  : 'bg-gray-100 hover:bg-gray-200 border border-gray-200 hover:border-violet-400'
              }`}
            >
              <Github className={`w-6 h-6 transition-all group-hover:rotate-12 ${
                darkMode ? 'group-hover:text-cyan-400' : 'group-hover:text-violet-600'
              }`} />
            </a>
            
            <a 
              href="https://linkedin.com/in/narmin-orujova-0941b8256" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`group p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 ${
                darkMode 
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/50' 
                  : 'bg-gray-100 hover:bg-gray-200 border border-gray-200 hover:border-fuchsia-400'
              }`}
            >
              <Linkedin className={`w-6 h-6 transition-all group-hover:rotate-12 ${
                darkMode ? 'group-hover:text-purple-400' : 'group-hover:text-fuchsia-600'
              }`} />
            </a>
            
            <a 
              href="mailto:nermnorucova2004@gmail.com"
              className={`group p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 ${
                darkMode 
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-400/50' 
                  : 'bg-gray-100 hover:bg-gray-200 border border-gray-200 hover:border-pink-400'
              }`}
            >
              <Mail className={`w-6 h-6 transition-all group-hover:rotate-12 ${
                darkMode ? 'group-hover:text-pink-400' : 'group-hover:text-pink-600'
              }`} />
            </a>
          </div>

          {/* CV Download Button */}
          {/* <button 
            onClick={handleDownloadCV}
            className={`group relative px-8 py-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 border-2 ${
              darkMode 
                ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/50 hover:border-purple-400' 
                : 'bg-gradient-to-r from-purple-100 to-blue-100 border-purple-300 hover:border-purple-500'
            } shadow-lg hover:shadow-purple-500/30`}
          >
            <span className="flex items-center justify-center gap-2 font-semibold">
              <Download className={`w-5 h-5 group-hover:animate-bounce ${
                darkMode ? 'text-purple-400' : 'text-purple-600'
              }`} />
              Download CV
            </span>
          </button> */}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fadeInUp delay-1000" style={{ animationFillMode: 'both' }}>
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Scroll Down
            </span>
            <ChevronDown className={`w-6 h-6 animate-bounce-slow ${
              darkMode ? 'text-purple-400' : 'text-violet-600'
            }`} />
          </button>
        </div>
      </div>
    </section>
  );
}