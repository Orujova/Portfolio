'use client';

import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Heart } from 'lucide-react';
import { translations, Language } from '@/lib/translations';
import { useState, useEffect, useRef } from 'react';

interface ContactProps {
  language: Language;
  darkMode: boolean;
}

export default function Contact({ language, darkMode }: ContactProps) {
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      const mailtoLink = `mailto:nermnorucova2004@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
      window.location.href = mailtoLink;
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: t.contact.email,
      value: 'nermnorucova2004@gmail.com',
      link: 'mailto:nermnorucova2004@gmail.com',
      gradient: 'from-purple-500 to-pink-500',
      hoverIcon: '✉️'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: t.contact.phone,
      value: '+994 55 931 01 65',
      link: 'tel:+994559310165',
      gradient: 'from-blue-500 to-cyan-500',
      hoverIcon: '📱'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: t.contact.location,
      value: 'Baku, Azerbaijan',
      link: '#',
      gradient: 'from-orange-500 to-red-500',
      hoverIcon: '📍'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      link: 'https://github.com/Orujova',
      color: 'from-purple-500 to-pink-500',
      hoverText: 'Check my code'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/narmin-orujova-0941b8256',
      color: 'from-blue-500 to-cyan-500',
      hoverText: 'Connect with me'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fadeInDown' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <p className={`text-lg flex items-center justify-center gap-2 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <MessageCircle className="w-5 h-5" />
            {t.contact.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`space-y-6 ${isVisible ? 'animate-fadeInLeft delay-200' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-purple-500">💬</span>
              Get in Touch
            </h3>
            
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`block group rounded-xl p-4 border transition-all duration-500 card-hover ${
                    darkMode 
                      ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/50' 
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-purple-500/50'
                  } hover:scale-105 hover:shadow-xl`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`relative p-3 rounded-lg bg-gradient-to-r ${info.gradient} group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      {hoveredCard === index ? (
                        <span className="text-2xl">{info.hoverIcon}</span>
                      ) : (
                        info.icon
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {info.label}
                      </p>
                      <p className="font-semibold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500 group-hover:bg-clip-text transition-all">
                        {info.value}
                      </p>
                    </div>
                  </div>
                  
                  {/* Floating particles on hover */}
                  {hoveredCard === index && (
                    <>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full animate-float"></div>
                      <div className="absolute bottom-2 left-2 w-2 h-2 bg-blue-500 rounded-full animate-float-delayed"></div>
                    </>
                  )}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-purple-500">🌐</span>
                Social Media
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-4 rounded-xl border transition-all duration-500 hover:scale-110 ${
                      darkMode 
                        ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    }`}
                    title={social.label}
                  >
                    <div className="relative z-10">
                      {social.icon}
                    </div>
                    
                    {/* Hover tooltip */}
                    <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                      darkMode ? 'bg-white text-black' : 'bg-black text-white'
                    }`}>
                      {social.hoverText}
                    </div>
                    
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Fun Stats */}
            {/* <div className={`mt-8 p-6 rounded-xl border ${
              darkMode 
                ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/30' 
                : 'bg-gradient-to-br from-purple-100 to-blue-100 border-purple-300'
            }`}>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    5+
                  </div>
                  <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    20+
                  </div>
                  <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Projects Done
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    6+
                  </div>
                  <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Hackathons
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className={isVisible ? 'animate-fadeInRight delay-200' : 'opacity-0'}>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-purple-500">📨</span>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:scale-[1.02] ${
                    darkMode 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-gray-50 border-gray-200'
                  }`}
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:scale-[1.02] ${
                    darkMode 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-gray-50 border-gray-200'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:scale-[1.02] resize-none ${
                    darkMode 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-gray-50 border-gray-200'
                  }`}
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:scale-105 transition-all overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-16 pt-8 border-t ${
          darkMode ? 'border-white/10' : 'border-gray-200'
        } text-center ${isVisible ? 'animate-fadeInUp delay-700' : 'opacity-0'}`}>
          <p className={`flex items-center justify-center gap-2 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © 2025 Narmin Orujova. Built with 
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            using Next.js, TypeScript & Tailwind CSS
          </p>
          <p className={`text-sm mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Made with passion and lots of ☕
          </p>
        </div>
      </div>
    </section>
  );
}