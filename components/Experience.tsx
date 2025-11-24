'use client';

import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { translations, Language } from '@/lib/translations';

interface ExperienceProps {
  language: Language;
  darkMode: boolean;
}

export default function Experience({ language, darkMode }: ExperienceProps) {
  const t = translations[language];

  const experiences = [
    {
      title: 'Digital Transformation Specialist',
      company: 'Almet Holding',
      period: '05/2025 - Present',
      type: 'work',
      description: 'Leading digital transformation initiatives and implementing modern solutions.'
    },
    {
      title: 'Human Resources Information System Assistant',
      company: 'Azərbaycan Supermarket MMC',
      period: '11/2024 - 04/2025',
      type: 'work',
      description: 'Assisted in HR information system management and optimization.'
    },
    {
      title: 'Junior IT Administrator',
      company: 'Azərbaycan Supermarket MMC',
      period: '04/2025 - 05/2025',
      type: 'work',
      description: 'Managed IT infrastructure and provided technical support.'
    },
    {
      title: 'AI Coordinator',
      company: 'Uniting World Azerbaijani Youth',
      period: '09/2024 - 11/2024',
      type: 'internship',
      description: 'Coordinated AI-related projects and initiatives for youth development.'
    },
    {
      title: 'Frontend Developer',
      company: 'Erasmus Student Network Azerbaijan',
      period: '05/2024 - 09/2024',
      type: 'internship',
      description: 'Developed responsive web applications using modern frontend technologies.'
    }
  ];

  const education = [
    {
      institution: 'French-Azerbaijani University',
      degree: 'Data Sciences and Artificial Intelligence',
      period: '09/2025 - Present',
      icon: '🎓'
    },
    {
      institution: 'Azerbaijan State Oil And Industrial University',
      degree: 'Information Security - Sabah Groups',
      period: '09/2021 - 06/2025',
      score: 'Entrance score: 646.7',
      icon: '🎓'
    },
    {
      institution: 'Coders Azerbaijan Bootcamp',
      degree: 'Full Stack Developer',
      period: '12/2022 - 08/2023',
      achievement: '🏆 Final Project Winner',
      icon: '💻'
    }
  ];

  const achievements = [
    {
      title: '3rd Place - Digieduhack',
      team: 'Team HeaRead',
      role: 'Full Stack Developer',
      icon: '🥉'
    },
    {
      title: '3rd Place - Secure Tomorrow Hackathon',
      team: 'Team Futurist',
      role: 'Full Stack Developer',
      icon: '🥉'
    },
    {
      title: 'Google AI Hackathon',
      role: 'Full Stack Developer',
      icon: '🤖'
    },
    {
      title: 'Hack4World Baku Hackathon',
      role: 'Full Stack Developer',
      icon: '🌍'
    },
    {
      title: 'Pasha Insurance & BANM Hackathon',
      role: 'Full Stack Developer',
      icon: '💼'
    },
    {
      title: '2024 Chain Reaction - FARI Solutions',
      role: 'Volunteer',
      icon: '⛓️'
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          {t.experience.title}
        </h2>

        {/* Work Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-purple-500" />
            <h3 className="text-2xl font-semibold">Work Experience</h3>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="dark:bg-white/5 bg-gray-50 rounded-xl p-6 border dark:border-white/10 border-gray-200 hover:scale-[1.02] transition-transform"
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                  <div>
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                    <p className="text-purple-500">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {exp.type === 'internship' && (
                      <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-500">
                        Internship
                      </span>
                    )}
                    <span className="text-sm dark:text-gray-400 text-gray-600">{exp.period}</span>
                  </div>
                </div>
                <p className="dark:text-gray-400 text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-purple-500" />
            <h3 className="text-2xl font-semibold">{t.experience.education}</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="dark:bg-white/5 bg-gray-50 rounded-xl p-6 border dark:border-white/10 border-gray-200 hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{edu.icon}</span>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                      <div>
                        <h4 className="text-xl font-semibold">{edu.institution}</h4>
                        <p className="text-purple-500">{edu.degree}</p>
                      </div>
                      <span className="text-sm dark:text-gray-400 text-gray-600">{edu.period}</span>
                    </div>
                    {edu.score && (
                      <p className="text-sm dark:text-gray-400 text-gray-600">{edu.score}</p>
                    )}
                    {edu.achievement && (
                      <p className="text-sm text-yellow-500 font-semibold mt-2">{edu.achievement}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-purple-500" />
            <h3 className="text-2xl font-semibold">{t.experience.achievements}</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="dark:bg-white/5 bg-gray-50 rounded-xl p-4 border dark:border-white/10 border-gray-200 hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{achievement.icon}</span>
                  <div>
                    <h4 className="font-semibold">{achievement.title}</h4>
                    {achievement.team && (
                      <p className="text-sm text-purple-500">{achievement.team}</p>
                    )}
                    <p className="text-sm dark:text-gray-400 text-gray-600">{achievement.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}