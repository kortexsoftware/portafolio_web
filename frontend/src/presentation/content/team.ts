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
      "Estudiante de Ingeniería Civil Informática en la Universidad Católica de Temuco, enfocado en desarrollo full stack y experiencias digitales modernas. Aplica Clean Code, arquitecturas escalables y buenas prácticas desde el diseño técnico hasta los detalles de UI. Valora el trabajo colaborativo y el software legible que entrega valor real.",
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
      "Estudiante de Ingeniería Civil Informática en la Universidad Católica de Temuco, enfocado en desarrollo de soluciones web y de software. Trabaja con análisis de datos para respaldar decisiones técnicas. Ha liderado equipos como Scrum Master, aportando organización y seguimiento a cada entrega.",
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
    id: "eduardo-dominguez",
    name: "Eduardo Domínguez",
    initials: "ED",
    role: "Desarrollo de software · Relación con clientes",
    description:
      "Estudiante de informática interesado en crear soluciones de software y aprender construyendo proyectos. Ha desarrollado aplicaciones web de reservas, gestión deportiva y gestión de pedidos. Le interesa especialmente el desarrollo web, el backend y el diseño de soluciones útiles para las personas.",
    specialties: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "Prisma",
      "SQLite",
      "Playwright",
    ],
    links: [
      {
        label: "Portafolio personal",
        href: "https://portfolio-eduardo-dominguez.vercel.app/",
      },
      {
        label: "GitHub personal",
        href: "https://github.com/imeduuu",
      },
    ],
    published: true,
  },
];
