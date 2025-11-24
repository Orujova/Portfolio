'use client';

import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { translations, Language } from '@/lib/translations';
import { useState } from 'react';

interface ContactProps {
  language: Language;
  darkMode: boolean;
}

export default function Contact({ language, darkMode }: ContactProps) {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    const mailtoLink = `mailto:nermnorucova2004@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: t.contact.email,
      value: 'nermnorucova2004@gmail.com',
      link: 'mailto:nermnorucova2004@gmail.com',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: t.contact.phone,
      value: '+994 55 931 01 65',
      link: 'tel:+994559310165',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: t.contact.location,
      value: 'Baku, Azerbaijan',
      link: '#',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      link: 'https://github.com/Orujova',
      color: 'hover:text-purple-500'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/narmin-orujova-0941b8256',
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          {t.contact.title}
        </h2>
        <p className="text-center dark:text-gray-400 text-gray-600 mb-12 text-lg">
          {t.contact.description}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="block dark:bg-white/5 bg-gray-50 rounded-xl p-4 border dark:border-white/10 border-gray-200 hover:scale-105 transition-transform"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.gradient}`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm dark:text-gray-400 text-gray-600">{info.label}</p>
                      <p className="font-semibold">{info.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-xl font-semibold mb-4">Social Media</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 hover:scale-110 transition-all ${social.color}`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
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
                  className="w-full px-4 py-3 rounded-lg dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
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
                  className="w-full px-4 py-3 rounded-lg dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t dark:border-white/10 border-gray-200 text-center">
          <p className="dark:text-gray-400 text-gray-600">
            © 2025 Narmin Orujova. Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}