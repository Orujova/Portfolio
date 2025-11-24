'use client';

import { translations, Language } from '@/lib/translations';

interface AboutProps {
  language: Language;
  darkMode: boolean;
}

export default function About({ language, darkMode }: AboutProps) {
  const t = translations[language];

  const softSkills = [
    'Problem-solving',
    'Creativity', 
    'Good Communication',
    'Time management',
    'Critical Thinking',
    'Leadership',
    'Collaboration',
    'Attention to detail'
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          {t.about.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl shadow-purple-500/20">
                <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-6xl">
                  👩‍💻
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg dark:text-gray-300 text-gray-600 leading-relaxed">
              {t.about.description}
            </p>

            {/* Soft Skills */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-lg dark:bg-white/5 bg-gray-100 hover:scale-105 transition-transform"
                  >
                    <span className="text-purple-500">✓</span>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Languages</h3>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>🇦🇿 Azerbaijani</span>
                    <span className="text-sm dark:text-gray-400 text-gray-600">Native</span>
                  </div>
                  <div className="w-full h-2 dark:bg-white/10 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 w-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>🇬🇧 English</span>
                    <span className="text-sm dark:text-gray-400 text-gray-600">Advanced</span>
                  </div>
                  <div className="w-full h-2 dark:bg-white/10 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}