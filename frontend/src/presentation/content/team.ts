export type TeamLink = {
  label: string;
  href: string;
};

export type TeamMember = {
  id: string;
  name: string;
  initials: string;
  role: string;
  description: string;
  specialties: string[];
  links: TeamLink[];
  published: boolean;
};

/**
 * Los perfiles incompletos se mantienen explícitos hasta recibir nombres,
 * biografías y enlaces personales confirmados por cada integrante.
 */
export const teamMembers: TeamMember[] = [
  {
    id: "benjamin-cantero",
    name: "Benjamin Cantero",
    initials: "BC",
    role: "Full Stack Developer · En formación",
    description:
      "Estudiante de Ingeniería Civil Informática en la Universidad Católica de Temuco, con foco en desarrollo full stack y experiencias digitales modernas. Aplica Clean Code, arquitecturas escalables y buenas prácticas desde el diseño técnico hasta los detalles de UI. Valora el trabajo colaborativo, la mejora continua y el software legible que entrega valor real. Trabaja desde Chile con disponibilidad remota o presencial.",
    specialties: [
      "React",
      "Next.js",
      "TypeScript",
      "Flutter",
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "Java",
      "PostgreSQL",
      "MySQL",
      "Prisma",
      "Git",
      "Linux",
    ],
    links: [
      {
        label: "Portafolio personal",
        href: "https://mi-portafolio-gilt-six.vercel.app/",
      },
      {
        label: "GitHub personal",
        href: "https://github.com/BenjaminCantero",
      },
    ],
    published: true,
  },
  {
    id: "juan-pablo-valdebenito",
    name: "Juan Pablo Valdebenito",
    initials: "JV",
    role: "Desarrollo de software · Scrum Master",
    description:
      "Estudiante de Ingeniería Civil en Informática en la Universidad Católica de Temuco. Desarrolla soluciones web y de software, trabaja con análisis de datos y ha liderado equipos como Scrum Master.",
    specialties: ["React", "TypeScript", "Python", "Scrum"],
    links: [
      {
        label: "Portafolio personal",
        href: "https://juan-valdebenito.github.io/Portafolio/",
      },
      {
        label: "GitHub personal",
        href: "https://github.com/Juan-Valdebenito",
      },
    ],
    published: true,
  },
  {
    id: "fundador-clientes",
    name: "Perfil por publicar",
    initials: "02",
    role: "Fundador · Relación con clientes",
    description:
      "Acompaña la definición de cada proyecto y mantiene alineados al equipo, el negocio y sus objetivos.",
    specialties: [],
    links: [],
    published: false,
  },
];
