export type Language = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      skills: "Mes Compétences",
      projects: "Mes Projets",
      cv: "Mon CV",
    },

    hero: {
      greeting: "Bonjour, je suis",
      role: "Développeur Full Stack",
      description:
        "Polyvalente et adaptable, je relève des défis, explore de nouvelles idées et m'investis pleinement dans chaque projet.",
      downloadCV: "Télécharger CV",
    },

    about: {
      title: "À propos de ",
      me: "Moi",
      p1_before:
        "Après plusieurs années dans la gestion de projets et les relations internationales, ",
      p1_highlight:
        "j'ai souhaité relever un nouveau défi professionnel. ",
      p1_after:
        "Aujourd'hui, je suis développeuse full-stack, motivée par la création d'applications web modernes, fiables et agréables à utiliser.",

      p2_before: "Avec un parcours mêlant ",
      p2_highlight:
        "management, business development et enseignement, ",
      p2_after:
        "j'ai appris à évoluer dans des environnements dynamiques et à collaborer avec des équipes variées. J'apprécie particulièrement les projets où sens, créativité et rigueur technique se rencontrent.",

      p3_before:
        "En dehors du code, je suis passionnée par les langues, les voyages et les défis en tous genres : puzzles, nouveaux hobbies, découvertes culturelles ou pratiques sportives. Ce ",
      p3_highlight: "goût de l'exploration ",
      p3_after:
        "se retrouve dans ma manière d'aborder le développement : apprendre, tester et évoluer en permanence.",
    },

  skills: {
    title: "Mes ",
    subtitle: "Compétences",
    technical: "Compétences techniques",
    soft: "Savoir-être",
    all: "Tous",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Outils & Design",
  },

  softSkills: {
    soft1: "Adaptabilité",
    soft2: "Résolution",
    soft3: "Collaboration",
    soft4: "Organisation",
    soft5: "Communication",
    soft6: "Précision"
  },

  projects: {
    title: "Mes ",
    subtitle: "Projets",
    noLinks: "Liens à venir",
    demo: "Démo",
    encours: "Projet en cours",
    description1:
      "Application web pour un bar à chats, initialement en React, en cours de refonte en Next.js et Tailwind avec l'ajoute d'un backend en Next.js.",
    description2:
      "Recommandations de films personnalisées via un quiz interactif, accompagnées d'un catalogue de films consultable.",
    description3:
      "Ce site. Présentation de mes projets, compétences et expérience en tant que développeur web.",
    description4:
      "Cahier de liaison numérique permettant les échanges entre parents et école, avec gestion des tickets, messages ciblés et annonces scolaires.",
      
  },

  footer: {
    title: "Restons en contact !",
    description: "Je suis toujours ouverte à discuter de nouveaux projets et opportunités.",
    rights: "© 2025 Clarissa Cardarelli. Tous droits réservés.",
  },
  },

  en: {
     nav: {
      skills: "My Skills",
      projects: "My Projects",
      cv: "My CV",
    },

    hero: {
      greeting: "Hi, I'm",
      role: "Full Stack Developer",
      description:
        "Versatile and adaptable, I embrace challenges, explore new ideas, and invest myself fully in every project.",
      downloadCV: "Download CV",
    },

    about: {
      title: "About ",
      me: "Me",
      p1_before:
        "After several years in project management and international relations, ",
      p1_highlight:
        "I decided to take on a new professional challenge. ",
      p1_after:
        "Today, I'm a Full Stack Developer driven by building modern, reliable, and user-friendly web applications.",

      p2_before: "With a background combining ",
      p2_highlight:
        "management, business development, and teaching, ",
      p2_after:
        "I learned to thrive in dynamic environments and collaborate with diverse teams. I especially enjoy projects that merge creativity, meaning, and technical skill.",

      p3_before:
        "Outside of coding, I'm passionate about languages, travel, and embracing diverse challenges, whether it's puzzles, exploring new hobbies, cultures, or sports. This ",
      p3_highlight: "love of exploration ",
      p3_after:
        "is reflected in the way I approach development: constantly learning, experimenting, and growing.",
    },

  skills: {
    title: "My ",
    subtitle: "Skills",
    technical: "Technical Skills",
    soft: "Soft Skills",
    all: "All",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools & Design",
  },

  softSkills: {
    soft1: "Adaptability",
    soft2: "Problem Solving",
    soft3: "Collaboration",
    soft4: "Organization",
    soft5: "Communication",
    soft6: "Precision"
  },

  projects: {
    title: "My ",
    subtitle: "Projects",
    noLinks: "Links coming soon",
    demo: "Demo",
    encours: "Work in progress",
    description1:
      "Web application for a cat café, originally built in React, currently being redeveloped in Next.js and Tailwind with the addition of a Next.js backend.",
    description2:
      "Personalized movie recommendations through an interactive quiz, along with a browsable movie catalog.",
    description3:
      "This website. Showcasing my projects, skills, and experience as a web developer.",
    description4:
      "Digital communication notebook allowing exchanges between parents and their kids' school, including ticket management, targeted messages, and school announcements.",
  },

    footer: {
    title: "Let's stay in touch!",
    description: "I'm always happy to discuss new projects and opportunities.",
    rights: "© 2025 Clarissa Cardarelli. All rights reserved.",
  },

  },
} as const;