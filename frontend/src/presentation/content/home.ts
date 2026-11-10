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
    name: "Landing",
    price: "$390.000",
    caption: "Pago único + IVA · Listo en ~2 semanas",
    features: [
      "Página de una sección, a tu medida",
      "Diseño adaptado a celular",
      "Formulario de contacto y WhatsApp",
      "Dominio y hosting el primer año",
    ],
    cta: "Elegir Landing",
  },
  {
    name: "Corporativo",
    price: "$790.000",
    caption: "Pago único + IVA · Listo en ~4 semanas",
    features: [
      "Sitio de 4 a 6 secciones",
      "SEO básico y Google Analytics",
      "Correos corporativos",
      "Capacitación para editar tu contenido",
      "1 mes de soporte incluido",
    ],
    cta: "Elegir Corporativo",
  },
  {
    name: "Tienda online",
    price: "$590.000",
    caption: "Tienda a medida desde $1.200.000 + IVA",
    features: [
      "Catálogo, carrito y medios de pago",
      "Envíos y gestión de pedidos",
      "Integraciones a medida (cotiza)",
      "Capacitación de tu equipo",
    ],
    cta: "Cotizar tienda",
  },
];

export const maintenanceNote =
  "Mantención mensual opcional desde $25.000: cambios, respaldos y seguridad.";
