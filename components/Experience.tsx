'use client';

import { Briefcase, GraduationCap, Award, Calendar, MapPin, TrendingUp, Building2, Rocket } from 'lucide-react';
import { translations, Language } from '@/lib/translations';
import { useState, useEffect, useRef } from 'react';

interface ExperienceProps {
  language: Language;
  darkMode: boolean;
}

export default function Experience({ language, darkMode }: ExperienceProps) {
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'work' | 'education' | 'achievements'>('work');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
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

  const experiences = [
    {
      title: 'Digital Transformation Specialist',
      company: 'Almet Holding',
      location: 'Baku, Azerbaijan',
      period: '05/2025 - Present',
      type: 'work',
      description: 'Leading digital transformation initiatives and implementing modern solutions.',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Junior IT Administrator',
      company: 'Azərbaycan Supermarket MMC',
      location: 'Baku, Azerbaijan',
      period: '04/2025 - 05/2025',
      type: 'work',
      description: 'Managed IT infrastructure and provided technical support.',
      icon: Building2,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Human Resources Information System Assistant',
      company: 'Azərbaycan Supermarket MMC',
      location: 'Baku, Azerbaijan',
      period: '11/2024 - 04/2025',
      type: 'work',
      description: 'Assisted in HR information system management and optimization.',
      icon: Briefcase,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Coordinator',
      company: 'Uniting World Azerbaijani Youth',
      location: 'Baku, Azerbaijan',
      period: '09/2024 - 11/2024',
      type: 'internship',
      description: 'Coordinated AI-related projects and initiatives for youth development.',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Frontend Developer',
      company: 'Erasmus Student Network Azerbaijan',
      location: 'Baku, Azerbaijan',
      period: '05/2024 - 09/2024',
      type: 'internship',
      description: 'Developed responsive web applications using modern frontend technologies.',
      icon: Briefcase,
      color: 'from-violet-500 to-purple-500'
    }
  ];

  const education = [
    {
      institution: 'French-Azerbaijani University - UFAZ (University of Strasbourg & ASOIU)',
      degree: 'Data Sciences and Artificial Intelligence',
      period: '09/2025 - Present',
      icon: GraduationCap,
      status: 'current',
      color: 'from-purple-500 to-pink-500'
    },
    {
      institution: 'Azerbaijan State Oil And Industrial University',
      degree: 'Information Security - Sabah Groups',
      period: '09/2021 - 06/2025',
      score: 'Entrance score: 646.7 / GPA: 91.7',
      icon: GraduationCap,
      status: 'completed',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      institution: 'Coders Azerbaijan Bootcamp',
      degree: 'Full Stack Developer',
      period: '12/2022 - 08/2023',
      achievement: '🏆 Final Project Winner',
      icon: Award,
      status: 'completed',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const achievements = [
    { title: '3rd Place - Digieduhack', team: 'Team HeaRead', role: 'Full Stack Developer', icon: Award, color: 'from-orange-500 to-red-500' },
    { title: '3rd Place - Secure Tomorrow Hackathon', team: 'Team Futurist', role: 'Full Stack Developer', icon: Award, color: 'from-purple-500 to-pink-500' },
    { title: 'Google AI Hackathon', role: 'Full Stack Developer', icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
    { title: 'Hack4World Baku Hackathon', role: 'Full Stack Developer', icon: Rocket, color: 'from-green-500 to-emerald-500' },
    { title: 'Pasha Insurance & BANM Hackathon', role: 'Full Stack Developer', icon: Building2, color: 'from-violet-500 to-purple-500' },
    { title: '2024 Chain Reaction - FARI Solutions', role: 'Volunteer', icon: Briefcase, color: 'from-pink-500 to-red-500' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-4 ${
          isVisible ? 'animate-fadeInDown' : 'opacity-0'
        } bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent`}>
          {t.experience.title}
        </h2>

        <p className={`text-center mb-12 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        } ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
          My professional journey and accomplishments
        </p>

        {/* Tab Navigation */}
        <div className={`flex justify-center gap-4 mb-12 ${
          isVisible ? 'animate-fadeInUp delay-300' : 'opacity-0'
        }`}>
          <button
            onClick={() => setActiveTab('work')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'work'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white scale-110 shadow-lg'
                : darkMode
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                  : 'bg-gray-100 hover:bg-gray-200 border border-gray-200'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'education'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white scale-110 shadow-lg'
                : darkMode
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                  : 'bg-gray-100 hover:bg-gray-200 border border-gray-200'
            }`}
          >
            <GraduationCap className="w-5 h-5" />
            {t.experience.education}
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'achievements'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white scale-110 shadow-lg'
                : darkMode
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                  : 'bg-gray-100 hover:bg-gray-200 border border-gray-200'
            }`}
          >
            <Award className="w-5 h-5" />
            {t.experience.achievements}
          </button>
        </div>

        {/* Work Experience Timeline */}
        {activeTab === 'work' && (
          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`group relative rounded-2xl p-6 border transition-all duration-500 card-hover ${
                    darkMode 
                      ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/50' 
                      : 'bg-white border-gray-200 hover:bg-gray-100 hover:border-purple-500/50'
                  } ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'} hover:scale-[1.02] hover:shadow-xl`}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border-4 border-white dark:border-[#0B0B0F] animate-pulse-scale"></div>

                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} ${
                        hoveredItem === index ? 'scale-110 rotate-12' : ''
                      } transition-all duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                        <p className="text-purple-500 font-medium flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          {exp.company}
                        </p>
                        <p className={`text-sm flex items-center gap-2 mt-1 ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {exp.type === 'internship' && (
                        <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-500 font-semibold">
                          Internship
                        </span>
                      )}
                      <span className={`text-sm flex items-center gap-2 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {exp.description}
                  </p>

                  {/* Hover particles */}
                  {hoveredItem === index && (
                    <>
                      <div className="absolute top-4 right-4 w-2 h-2 bg-purple-500 rounded-full animate-float"></div>
                      <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-500 rounded-full animate-float-delayed"></div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Education */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl p-6 border transition-all duration-500 card-hover ${
                    darkMode 
                      ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/50' 
                      : 'bg-white border-gray-200 hover:bg-gray-100 hover:border-purple-500/50'
                  } ${isVisible ? 'animate-fadeInRight' : 'opacity-0'} hover:scale-[1.02] hover:shadow-xl`}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.color} group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                        <div>
                          <h4 className="text-xl font-semibold">{edu.institution}</h4>
                          <p className="text-purple-500 font-medium">{edu.degree}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          {edu.status === 'current' && (
                            <span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-500 font-semibold animate-pulse">
                              Current
                            </span>
                          )}
                          <span className={`text-sm flex items-center gap-2 ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </span>
                        </div>
                      </div>
                      {edu.score && (
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {edu.score}
                        </p>
                      )}
                      {edu.achievement && (
                        <p className="text-sm text-yellow-500 font-semibold mt-2 flex items-center gap-2">
                          {edu.achievement}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Achievements Grid */}
        {activeTab === 'achievements' && (
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className={`group relative rounded-xl p-6 border transition-all duration-500 card-hover ${
                    darkMode 
                      ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/50' 
                      : 'bg-white border-gray-200 hover:bg-gray-100 hover:border-purple-500/50'
                  } ${isVisible ? 'animate-fadeInUp' : 'opacity-0'} hover:scale-105 hover:shadow-xl`}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{achievement.title}</h4>
                      {achievement.team && (
                        <p className="text-sm text-purple-500 font-medium">{achievement.team}</p>
                      )}
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {achievement.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}