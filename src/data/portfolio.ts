export const personalInfo = {
  name: "Joan Brunel",
  surname: "TAKAMTE KAMGA",
  title: "Ingénieur Logiciel",
  subtitle: "Systèmes Embarqués · IoT · Full-Stack",
  tagline: "Diplômé ingénieur en juil. 2026 · Actuellement en stage fin d'études chez Construct Services BTP",
  email: "joantakamte19@gmail.com",
  phone: "00237 657 434 515",
  location: "Douala, Cameroun",
  linkedin: "https://www.linkedin.com/in/joan-takamte-638576313",
  github: "https://github.com/ashtag10",
  heroBgDesktop: "/images/hero-bg-desktop.jpeg",
  heroBgMobile: "/images/hero-bg-mobile.jpeg",
  logo: "/images/logo.png",
  avatar: "/images/avatar.jpeg",
};

export const techStack = [
  "Next.js", "React", "Java", "Spring Boot", "Django", "Python",
  "PHP", "Arduino", "MySQL", "PostgreSQL", "Git", "Figma",
  "HTML/CSS", "IoT", "UML", "Docker", "REST API", "Agile",
];

export const skills = [
  { category: "Développement Web", items: [
    { name: "HTML / CSS", level: 85 },
    { name: "PHP (OOP)", level: 75 },
    { name: "Django / Python", level: 80 },
    { name: "Java / Spring Boot", level: 80 },
    { name: "Next.js / React", level: 75 },
  ]},
  { category: "Systèmes & Embarqué", items: [
    { name: "Arduino", level: 80 },
    { name: "LabVIEW / Proteus", level: 70 },
    { name: "IoT (Cisco Certified)", level: 75 },
  ]},
  { category: "Base de données", items: [
    { name: "MySQL", level: 85 },
    { name: "PostgreSQL", level: 75 },
    { name: "PhpMyAdmin / DB Browser", level: 80 },
  ]},
  { category: "Outils & Méthodes", items: [
    { name: "Git / GitHub", level: 90 },
    { name: "Figma / UML", level: 80 },
    { name: "Développement Agile", level: 75 },
  ]},
];

export const experiences = [
  {
    role: "Développeur Full-Stack Stagiaire (Fin d'études)",
    company: "Construct Services BTP",
    location: "Douala",
    period: "2025 — Présent",
    logo: "/images/logo/cs.png",
    current: true,
    tasks: [
      "Stage de fin d'études — diplôme d'ingénieur prévu juillet 2026",
      "Développement de solutions numériques pour le secteur BTP",
    ],
  },
  {
    role: "Développeur Full-Stack Stagiaire",
    company: "Afriland First Bank — DSI",
    location: "Yaoundé",
    period: "Juil. 2025 — Oct. 2025",
    logo: "/images/logo/afriland.png",
    current: false,
    tasks: [
      "Conception et implémentation de l'app de restauration « Maison First » (Next.js / Java Spring Boot)",
      "Architecture API Gateway et microservices",
    ],
  },
  {
    role: "Informaticien Stagiaire",
    company: "École Nationale Supérieure Polytechnique de Douala",
    location: "Douala",
    period: "Juil. 2024 — Sept. 2024",
    logo: "/images/logo/enspd.png",
    current: false,
    tasks: [
      "Analyse, conception et implémentation d'un LMS (SEaTA)",
      "Maquettage Figma · Versionning Git",
    ],
  },
  {
    role: "Électricien Stagiaire",
    company: "ASECNA",
    location: "Douala",
    period: "Mar. 2022 — Mai 2022",
    logo: "/images/logo/asecna.jpeg",
    current: false,
    tasks: [
      "Contrôle du système automatisé de la centrale électrique",
      "Supervision des sources secondaires d'électricité",
      "Assistance maintenance électrique aéroport",
    ],
  },
];

export const education = [
  {
    degree: "Diplôme d'Ingénieur Logiciel",
    school: "ENSP — École Nationale Supérieure Polytechnique de Douala",
    period: "Oct. 2023 — Juil. 2026",
    note: "Obtention prévue juillet 2026",
    logo: "/images/logo/enspd.png",
    current: true,
  },
  {
    degree: "Licence en Informatique",
    school: "Faculté des Sciences — Université de Douala",
    period: "Oct. 2019 — Juil. 2023",
    note: null,
    logo: "/images/logo/UDo.jpeg",
    current: false,
  },
  {
    degree: "DUT Génie électrique et informatique industrielle",
    school: "IUT de Douala",
    period: "Oct. 2020 — Juil. 2022",
    note: null,
    logo: "/images/logo/iut.png",
    current: false,
  },
  {
    degree: "Baccalauréat Série C",
    school: "Lycée de Japoma, Douala",
    period: "2019",
    note: null,
    logo: "/images/logo/lybija.jpeg",
    current: false,
  },
];

export const projects = [
  {
    title: "CTS-BTP",
    description: "Site web institutionnel d'une entreprise de BTP. Design soigné, pages services, réalisations et contact.",
    tech: ["Web", "Design", "UI/UX"],
    link: "https://cts-btp.com",
    type: "Client",
    featured: true,
    image: null,
  },
  {
    title: "Maison First",
    description: "Application de restauration interne pour Afriland First Bank. Gestion des commandes, menus et paiements en microservices.",
    tech: ["Next.js", "Java Spring Boot", "API Gateway"],
    link: null,
    type: "Professionnel",
    featured: true,
    image: null,
  },
  {
    title: "SMARTLOCK",
    description: "Serrure connectée IoT avec interface de contrôle à distance. Prototype matériel + application de gestion.",
    tech: ["Arduino", "IoT", "Figma"],
    link: "https://www.figma.com/proto/dFmO8uiVOssKi8zk5JckCA/Revo-SmartLock?nodeid=0-1&t=bIn4thkV2JROdfR9-1",
    type: "Personnel",
    featured: true,
    image: null,
  },
  {
    title: "SEaTA — LMS",
    description: "Learning Management System complet pour la gestion des cours, étudiants et évaluations en ligne.",
    tech: ["PHP", "MySQL", "HTML/CSS"],
    link: null,
    type: "Académique",
    featured: false,
    image: null,
  },
  {
    title: "SweetHome",
    description: "Application de gestion immobilière : annonces, locataires, contrats et suivi des paiements.",
    tech: ["Django", "Python", "PostgreSQL"],
    link: null,
    type: "Personnel",
    featured: false,
    image: null,
  },
  {
    title: "Bibliothèque en ligne",
    description: "Plateforme de gestion de bibliothèque avec emprunt, retour et catalogue en ligne.",
    tech: ["PHP", "PhpMyAdmin"],
    link: null,
    type: "Personnel",
    featured: false,
    image: null,
  },
];

export const certifications = [
  {
    name: "Introduction to IoT",
    issuer: "Cisco Network Academy",
    date: "Octobre 2025",
    link: "https://www.credly.com/badges/45766b20-cc49-4226-b986-ba1948b4ed8c/public_url",
  },
];

export const navLinks = [
  { label: "Présentation", href: "home" },
  { label: "Compétences", href: "skills" },
  { label: "Parcours", href: "parcours" },
  { label: "Projets", href: "projects" },
  { label: "Contact", href: "contact" },
];