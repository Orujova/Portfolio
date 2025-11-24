export const translations = {
  az: {
    nav: {
      about: 'Haqqımda',
      skills: 'Bacarıqlar',
      experience: 'Təcrübə',
      projects: 'Layihələr',
      contact: 'Əlaqə'
    },
    hero: {
      greeting: 'Salam, mən',
      title: 'Full Stack Developer',
      subtitle: 'Müasir veb tətbiqlər və AI həlləri yaradıram',
      cta: 'Layihələrə bax',
      cv: 'CV-yə bax',
      contact: 'Əlaqə'
    },
    about: {
      title: 'Haqqımda',
      description: 'Mən həssas, çevik, komanda yönümlü və ən əsası kodlaşdırmaya həvəsli biriyəm. İşləyəcəyim şirkətin və özümün inkişafı üçün çox çalışacağımdan əminəm. Nizam-intizamlı bir insan olaraq hər işə məsuliyyətlə yanaşıram.'
    },
    skills: {
      title: 'Texniki Bacarıqlar',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Alətlər & Digər'
    },
    experience: {
      title: 'İş Təcrübəsi',
      present: 'İndiki',
      education: 'Təhsil',
      achievements: 'Nailiyyətlər'
    },
    projects: {
      title: 'Layihələr',
      viewLive: 'Canlı bax',
      viewCode: 'Kodu gör',
      technologies: 'Texnologiyalar'
    },
    contact: {
      title: 'Əlaqə',
      description: 'Layihə və ya əməkdaşlıq üçün mənimlə əlaqə saxlayın',
      email: 'Email',
      phone: 'Telefon',
      location: 'Bakı, Azərbaycan'
    }
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi, I am',
      title: 'Full Stack Developer',
      subtitle: 'I create modern web applications and AI solutions',
      cta: 'View Projects',
      contact: 'Contact'
    },
    about: {
      title: 'About Me',
      description: 'I am sensitive, flexible, team-oriented and most importantly passionate about coding. I am sure that I will work hard for the development of the company I will work for and myself. As a disciplined person, I approach every job responsibly.'
    },
    skills: {
      title: 'Technical Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools & Others'
    },
    experience: {
      title: 'Experience',
      present: 'Present',
      education: 'Education',
      achievements: 'Achievements'
    },
    projects: {
      title: 'Projects',
      viewLive: 'View Live',
      viewCode: 'View Code',
      technologies: 'Technologies'
    },
    contact: {
      title: 'Contact',
      description: 'Get in touch for projects or collaboration',
      email: 'Email',
      phone: 'Phone',
      location: 'Baku, Azerbaijan'
    }
  },
  ru: {
    nav: {
      about: 'Обо мне',
      skills: 'Навыки',
      experience: 'Опыт',
      projects: 'Проекты',
      contact: 'Контакт'
    },
    hero: {
      greeting: 'Привет, я',
      title: 'Full Stack Developer',
      subtitle: 'Создаю современные веб-приложения и AI решения',
      cta: 'Смотреть проекты',
      contact: 'Контакт'
    },
    about: {
      title: 'Обо мне',
      description: 'Я чувствительный, гибкий, ориентированный на команду и самое главное увлечённый программированием человек. Я уверен, что буду усердно работать для развития компании, в которой буду работать, и себя. Как дисциплинированный человек, я подхожу к каждой работе ответственно.'
    },
    skills: {
      title: 'Технические навыки',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Инструменты и другое'
    },
    experience: {
      title: 'Опыт работы',
      present: 'Настоящее время',
      education: 'Образование',
      achievements: 'Достижения'
    },
    projects: {
      title: 'Проекты',
      viewLive: 'Смотреть Live',
      viewCode: 'Посмотреть код',
      technologies: 'Технологии'
    },
    contact: {
      title: 'Контакт',
      description: 'Свяжитесь со мной для проектов или сотрудничества',
      email: 'Email',
      phone: 'Телефон',
      location: 'Баку, Азербайджан'
    }
  }
};

export type Language = keyof typeof translations;