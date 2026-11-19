// Editorial content. Answers restate terms already published in home.ts plans;
// any new commercial commitment (code ownership, domain ownership, SLAs) needs
// business confirmation before it is added here.

export type Pain = {
  text: string;
  solution: string;
  to: string;
};

export const pains: Pain[] = [
  {
    text: "Tu información vive repartida entre planillas, WhatsApp y papeles.",
    solution: "Gestión empresarial",
    to: "/productos/gestion-empresarial",
  },
  {
    text: "Decides por intuición porque los números nunca están a mano.",
    solution: "Gestión empresarial",
    to: "/productos/gestion-empresarial",
  },
  {
    text: "Tu equipo repite a mano tareas que un sistema podría hacer solo.",
    solution: "Software a medida",
    to: "/productos/software-a-medida",
  },
  {
    text: "Ventas, stock y boletas viven en herramientas que no se hablan.",
    solution: "Punto de venta y facturación",
    to: "/productos/punto-de-venta",
  },
  {
    text: "Tu página no te trae clientes, o todavía no tienes una.",
    solution: "Planes web",
    to: "/planes",
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "¿Cuánto se demora un proyecto?",
    answer:
      "Una landing queda lista en unas 2 semanas y un sitio corporativo en unas 4. El software a medida depende del alcance: te entregamos el plazo por escrito en la propuesta, antes de empezar.",
  },
  {
    question: "¿Cómo se cotiza?",
    answer:
      "Los planes web tienen precio de referencia publicado en la página de planes. Para software a medida conversamos primero sobre tu operación y luego te enviamos una propuesta con alcance y valor.",
  },
  {
    question: "¿Puedo editar mi sitio después?",
    answer:
      "Sí. El plan Corporativo incluye capacitación para que tu equipo actualice el contenido sin depender de nosotros.",
  },
  {
    question: "¿Se puede conectar con las herramientas que ya uso?",
    answer:
      "En la conversación inicial revisamos qué usas hoy. Si la herramienta permite integraciones, la incluimos en la propuesta; si no, te lo decimos de entrada.",
  },
  {
    question: "¿Qué pasa después de la entrega?",
    answer:
      "El plan Corporativo incluye un mes de soporte. Después puedes sumar mantención mensual opcional, desde $25.000, para cambios, respaldos y seguridad.",
  },
];
