import type { Faq } from "./faq";

// Editorial detail for each home product category (see products in home.ts).
// Capabilities stay at the level already promised on the site; specific
// integrations, certifications or SLAs need business confirmation first.

export type ServiceDetail = {
  slug: string;
  title: string;
  lead: string;
  pains: string[];
  includes: { title: string; description: string }[];
  faqs: Faq[];
  cta: { title: string; accent: string; text: string; label: string };
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "gestion-empresarial",
    title: "Gestión empresarial",
    lead: "Un solo lugar para los procesos y la información de tu negocio, implementado junto a tu equipo.",
    pains: [
      "Cada área trabaja en su propia planilla y los números nunca cuadran.",
      "Para saber cómo va el mes tienes que pedirle datos a tres personas.",
      "La información importante vive en chats y correos que nadie encuentra.",
      "Sumar personas al equipo significa sumar desorden.",
    ],
    includes: [
      {
        title: "Diagnóstico de tu operación",
        description:
          "Revisamos cómo trabajan hoy tus áreas antes de proponer cualquier herramienta.",
      },
      {
        title: "Procesos conectados",
        description:
          "Ventas, operación y administración comparten la misma información.",
      },
      {
        title: "Implementación y capacitación",
        description:
          "Configuramos el sistema contigo y acompañamos a tu equipo en los primeros usos.",
      },
      {
        title: "Soporte con personas",
        description:
          "Cuando algo no funciona, hablas con alguien que conoce tu implementación.",
      },
    ],
    faqs: [
      {
        question: "¿Tengo que cambiar todo de una vez?",
        answer:
          "No. Partimos por el proceso que más te duele y sumamos áreas a medida que tu equipo se acostumbra.",
      },
      {
        question: "¿Qué pasa con mis planillas actuales?",
        answer:
          "Revisamos qué información tienes y planificamos contigo cómo llevarla al nuevo sistema.",
      },
      {
        question: "¿Cómo se cotiza?",
        answer:
          "Depende de las áreas, los usuarios y los procesos a configurar. Después de una conversación te enviamos una propuesta con alcance y valor.",
      },
    ],
    cta: {
      title: "Ordenemos tu",
      accent: "operación.",
      text: "Cuéntanos cómo trabaja tu empresa hoy y te proponemos por dónde empezar.",
      label: "Pedir asesoría",
    },
  },
  {
    slug: "punto-de-venta",
    title: "Punto de venta",
    lead: "Ventas, productos y stock en un mismo lugar, para que sepas qué vendes y qué te queda.",
    pains: [
      "Te enteras de que se acabó un producto cuando un cliente lo pide.",
      "Cuadrar la caja al final del día toma más de lo que debería.",
      "Las ventas del local y las de internet se llevan por separado.",
      "No sabes con certeza cuáles productos te dejan más margen.",
    ],
    includes: [
      {
        title: "Ventas en un solo flujo",
        description:
          "Registra cada venta y deja el stock actualizado en el mismo paso.",
      },
      {
        title: "Catálogo y stock ordenados",
        description:
          "Productos, precios y existencias visibles para todo tu equipo.",
      },
      {
        title: "Puesta en marcha",
        description:
          "Cargamos tu catálogo contigo y capacitamos a quienes atienden.",
      },
      {
        title: "Soporte que responde",
        description:
          "Personas reales para resolver dudas cuando el local está funcionando.",
      },
    ],
    faqs: [
      {
        question: "¿Sirve si vendo en local y por internet?",
        answer:
          "Cuéntanos tus canales en la conversación inicial y te decimos qué se puede conectar en tu caso.",
      },
      {
        question: "¿Cuánto toma empezar a vender?",
        answer:
          "Depende del tamaño de tu catálogo. El plazo queda por escrito en la propuesta, antes de empezar.",
      },
      {
        question: "¿Cómo se cotiza?",
        answer:
          "Según la cantidad de cajas, usuarios y productos. Te enviamos una propuesta después de conocer tu negocio.",
      },
    ],
    cta: {
      title: "Vende sabiendo",
      accent: "qué tienes.",
      text: "Te mostramos cómo funcionaría con tus productos y tu forma de vender.",
      label: "Agendar demo gratis",
    },
  },
  {
    slug: "facturacion",
    title: "Facturación",
    lead: "Menos tiempo emitiendo y buscando documentos, más claridad sobre lo que cobras.",
    pains: [
      "Emitir documentos te quita horas que podrías dedicar a vender.",
      "Buscar una factura antigua es revisar carpetas y correos.",
      "No tienes claro qué clientes te deben y desde cuándo.",
      "Los errores de digitación se repiten todos los meses.",
    ],
    includes: [
      {
        title: "Emisión simplificada",
        description:
          "Menos pasos manuales para generar tus documentos del día a día.",
      },
      {
        title: "Documentos en orden",
        description:
          "Todo tu historial en un lugar, fácil de buscar cuando lo necesites.",
      },
      {
        title: "Configuración contigo",
        description:
          "Dejamos la herramienta ajustada a tu empresa y capacitamos a tu equipo.",
      },
      {
        title: "Soporte cercano",
        description: "Ayuda directa cuando aparece una duda al emitir.",
      },
    ],
    faqs: [
      {
        question: "¿Se conecta con lo que ya uso para vender?",
        answer:
          "Lo revisamos en la conversación inicial. Si tu herramienta permite integraciones, la incluimos en la propuesta; si no, te lo decimos de entrada.",
      },
      {
        question: "¿Mi equipo necesita conocimientos técnicos?",
        answer:
          "No. La capacitación está pensada para quienes emiten documentos todos los días.",
      },
      {
        question: "¿Cómo se cotiza?",
        answer:
          "Según el volumen de documentos y los usuarios. Te enviamos una propuesta después de conversar.",
      },
    ],
    cta: {
      title: "Factura en minutos,",
      accent: "no en horas.",
      text: "Revisamos cómo emites hoy y te mostramos qué puedes simplificar.",
      label: "Pedir asesoría",
    },
  },
  {
    slug: "software-a-medida",
    title: "Software a medida",
    lead: "Cuando ninguna herramienta calza con tu forma de trabajar, la construimos para ti.",
    pains: [
      "Probaste varios sistemas y todos te obligan a cambiar cómo trabajas.",
      "Tu equipo repite a mano tareas que un sistema podría hacer solo.",
      "Pagas por varias herramientas que no se hablan entre sí.",
      "Tu operación creció y las planillas ya no aguantan.",
    ],
    includes: [
      {
        title: "Diseño desde tu proceso",
        description:
          "Entendemos cómo trabaja tu equipo antes de escribir una línea de código.",
      },
      {
        title: "Entregas por etapas",
        description:
          "Empiezas a usar lo más importante primero y sumamos funciones después.",
      },
      {
        title: "Web o móvil",
        description:
          "Elegimos la plataforma según quién lo usa y dónde. Mira nuestros proyectos.",
      },
      {
        title: "Acompañamiento continuo",
        description:
          "Después del lanzamiento seguimos disponibles para mantener y mejorar.",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto se demora?",
        answer:
          "Depende del alcance. Trabajamos por etapas y el plazo de cada una queda por escrito en la propuesta.",
      },
      {
        question: "¿Cómo se cotiza?",
        answer:
          "Conversamos sobre tu operación, definimos qué resolver primero y te enviamos una propuesta con alcance y valor.",
      },
      {
        question: "¿Puedo ver proyectos que hayan hecho?",
        answer:
          "Sí. En la sección de proyectos mostramos productos que diseñamos y construimos de punta a punta.",
      },
    ],
    cta: {
      title: "Construyamos lo que",
      accent: "tu empresa necesita.",
      text: "Cuéntanos tu proceso y te decimos si tiene sentido construir y cómo lo abordaríamos.",
      label: "Cuéntanos tu proyecto",
    },
  },
];

export const getServiceDetail = (slug: string | undefined) =>
  serviceDetails.find((s) => s.slug === slug);
