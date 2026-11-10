import type { IconName } from "../components/ui/Icon";
// Editorial content stays in presentation; API entities and business rules stay in their own layers.
export const products: {
  title: string;
  description: string;
  slug: string;
  icon: IconName;
}[] = [
  {
    title: "Gestión empresarial",
    description: "Conecta los procesos y la información de tu negocio.",
    slug: "gestion-empresarial",
    icon: "grid",
  },
  {
    title: "Punto de venta",
    description: "Ventas, productos y stock en un mismo lugar.",
    slug: "punto-de-venta",
    icon: "cart",
  },
  {
    title: "Facturación",
    description: "Simplifica la administración de tus documentos.",
    slug: "facturacion",
    icon: "file",
  },
  {
    title: "Software a medida",
    description: "Lo construimos según cómo trabaja tu empresa.",
    slug: "software-a-medida",
    icon: "code",
  },
];
export const steps = [
  {
    title: "Elige tu solución",
    description:
      "Te asesoramos para encontrar el producto y el plan que calzan con tu empresa.",
  },
  {
    title: "Lo implementamos contigo",
    description:
      "Instalación, configuración y capacitación para que tu equipo parta con todo.",
  },
  {
    title: "Soporte que responde",
    description: "Personas reales que mantienen tu software al día.",
  },
];
export const plans = [
  {
    name: "Inicial",
    features: [
      "Tu solución esencial",
      "Puesta en marcha",
      "Soporte para comenzar",
    ],
  },
  {
    name: "Profesional",
    features: [
      "Más procesos conectados",
      "Configuración de tu operación",
      "Capacitación del equipo",
      "Acompañamiento continuo",
    ],
  },
  {
    name: "Empresa",
    features: [
      "Alcance personalizado",
      "Integraciones a medida",
      "Implementación acompañada",
    ],
  },
];
