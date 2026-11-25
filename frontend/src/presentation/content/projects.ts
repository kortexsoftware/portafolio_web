/**
 * Proyectos destacados de la página de proyectos. El resumen de
 * "Lo que ya construimos" los repite como tarjetas que llevan a cada vitrina.
 */
export type FeaturedProject = {
  id: string;
  index: string;
  title: string;
  category: string[];
  summary: string;
  /** Sitio público; sin enlace cuando el proyecto no tiene uno. */
  url?: string;
  urlLabel?: string;
  colors: { bg: string; fg: string; accent: string };
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "fullfragrance",
    index: "01",
    title: "FullFragrance",
    category: ["Web full stack"],
    summary: "Comparador de perfumes y precios entre tiendas, con recomendaciones personalizadas.",
    url: "https://fullfragance.cl",
    urlLabel: "Visitar fullfragance.cl",
    colors: { bg: "#17130f", fg: "#f3ece2", accent: "#d6a85a" },
  },
  {
    id: "loncoche-tdm",
    index: "02",
    title: "Loncoche TDM",
    category: ["Sitio web", "Astro"],
    summary: "Noticiero del club de tenis de mesa que el equipo actualiza sin tocar código.",
    url: "https://noticiastenisdemesaloncoche.vercel.app",
    urlLabel: "Visitar Loncoche TDM",
    colors: { bg: "#0c1d5c", fg: "#eef4ff", accent: "#ff7a1a" },
  },
  {
    id: "barberia-app",
    index: "03",
    title: "BarberíaApp",
    category: ["Reservas", "Full stack"],
    summary: "Agenda digital para barberías con disponibilidad en tiempo real y paneles por rol.",
    url: "https://barberiaapp-olive.vercel.app",
    urlLabel: "Abrir BarberíaApp",
    colors: { bg: "#0d0d0d", fg: "#f2f0eb", accent: "#c9a36b" },
  },
  {
    id: "totalkids",
    index: "04",
    title: "Total Kids",
    category: ["E-commerce", "Monorepo"],
    summary: "Tienda de mobiliario infantil con catálogo por nivel, seguimiento de pedidos y panel de gestión.",
    colors: { bg: "#fff9ee", fg: "#1f2a44", accent: "#1a5299" },
  },
  {
    id: "cosmo-web",
    index: "05",
    title: "Cosmo Software",
    category: ["Sitio corporativo", "Full stack"],
    summary: "Nuestro propio sitio: portada en forma de red, formulario conectado a la API e identidad de marca.",
    colors: { bg: "#10302a", fg: "#eef3ee", accent: "#9fd6c2" },
  },
];
