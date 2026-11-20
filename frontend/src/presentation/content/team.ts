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
    role: "Desarrollador de software · Scrum Master",
    description:
      "Estudiante de Ingeniería Civil en Informática en la Universidad Católica de Temuco, enfocado en desarrollo de software, desarrollo web y análisis de datos. Creó FullFragrance, un comparador de precios en producción que reúne más de 11.900 perfumes de 11 tiendas chilenas, y el sitio oficial de noticias de Loncoche TDM. Ha liderado equipos universitarios como Scrum Master, se mueve con soltura entre Linux y Windows, suma infraestructura como código con Terraform y cuenta con certificación Cisco en fundamentos de redes. Trabaja desde Temuco–Loncoche, Chile.",
    specialties: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Astro",
      "Tailwind CSS",
      "Python",
      "Go",
      "C++",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Terraform",
      "Linux",
      "Scrum",
      "Análisis de datos",
    ],
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
