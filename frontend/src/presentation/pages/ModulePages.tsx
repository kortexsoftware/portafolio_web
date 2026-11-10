import type { ReactNode } from "react";
import { PageHeader } from "../components/layout/PageHeader";
import {
  AboutSection,
  ClientsSection,
  DemoSection,
  PlansSection,
  ProcessSection,
  ProductsSection,
} from "../components/sections/HomeSections";
import { AboutStory } from "../components/sections/AboutStory";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { FullFragrance } from "../components/sections/showcase/FullFragrance";
import { StrongerFit } from "../components/sections/showcase/StrongerFit";
import { LoncocheTdm } from "../components/sections/showcase/LoncocheTdm";
import { HealUp } from "../components/sections/showcase/HealUp";
import { ProjectsIndex } from "../components/sections/showcase/ProjectsIndex";
import { ContactSection } from "../components/sections/ContactSection";
import {
  AboutVisual,
  ClientsVisual,
  ContactVisual,
  PlansVisual,
  ProductsVisual,
  ProjectsVisual,
} from "../components/visuals/PageVisuals";

/** Franja de ancho completo con fondo alterno para separar módulos. */
const Band = ({ children, tone = "tint" }: { children: ReactNode; tone?: "tint" | "plain" }) => (
  <div className={`band band-${tone}`}>{children}</div>
);

export const AboutPage = () => (
  <>
    <PageHeader
      index="01"
      title="Quiénes somos"
      lead="Un equipo que diseña, construye y acompaña productos digitales desde Chile."
      visual={<AboutVisual />}
    />
    <AboutSection />
    <Band>
      <AboutStory />
    </Band>
    <DemoSection
      title="¿Construimos algo"
      accent="juntos?"
      text="Cuéntanos tu idea o tu operación actual y te proponemos un camino concreto."
      cta="Conversemos"
    />
  </>
);

export const ProductsPage = () => (
  <>
    <PageHeader
      index="02"
      title="Productos"
      lead="Software para gestionar, vender, facturar y crecer, con implementación y soporte incluidos."
      visual={<ProductsVisual />}
    />
    <ProductsSection />
    <Band>
      <ProcessSection />
    </Band>
    <DemoSection
      title="¿No sabes cuál"
      accent="elegir?"
      text="Te ayudamos a encontrar la combinación que calza con tu empresa, sin compromiso."
      cta="Pedir asesoría"
    />
  </>
);

export const ProjectsPage = () => (
  <>
    <PageHeader
      index="03"
      title="Proyectos"
      lead="Productos que diseñamos y construimos de punta a punta."
      visual={<ProjectsVisual />}
    />
    <ProjectsIndex />
    <div className="showcase-stack">
      <FullFragrance />
      <StrongerFit />
      <LoncocheTdm />
      <HealUp />
    </div>
    <Band>
      <ProjectsSection showAll />
    </Band>
  </>
);

export const ClientsPage = () => (
  <>
    <PageHeader
      index="04"
      title="Clientes"
      lead="Las empresas que trabajan con Kortex y lo que cuentan de la experiencia."
      visual={<ClientsVisual />}
    />
    <ClientsSection />
    <DemoSection
      title="Tu empresa puede"
      accent="ser la siguiente."
      text="Agenda una demo y revisamos juntos cómo Kortex encaja en tu día a día."
    />
  </>
);

export const PlansPage = () => (
  <>
    <PageHeader
      index="05"
      title="Planes"
      lead="Precios claros para tu sitio web, desde landing pages hasta tiendas online."
      visual={<PlansVisual />}
    />
    <PlansSection />
    <DemoSection
      title="¿Dudas con"
      accent="tu plan?"
      text="Te explicamos qué incluye cada uno y armamos una cotización a tu medida."
      cta="Cotizar mi plan"
    />
  </>
);

export const ContactPage = () => (
  <>
    <PageHeader
      index="06"
      title="Contacto"
      lead="Cuéntanos qué necesitas y te respondemos con una propuesta."
      visual={<ContactVisual />}
    />
    <ContactSection />
  </>
);
