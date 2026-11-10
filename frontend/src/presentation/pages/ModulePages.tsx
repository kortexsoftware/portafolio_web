import type { ReactNode } from "react";
import {
  AboutSection,
  ClientsSection,
  DemoSection,
  PlansSection,
  ProcessSection,
  ProductsSection,
} from "../components/sections/HomeSections";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { ContactSection } from "../components/sections/ContactSection";

const Page = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="page">
    <h1 className="sr-only">{title}</h1>
    {children}
  </div>
);

export const AboutPage = () => (
  <Page title="Quiénes somos">
    <AboutSection />
    <DemoSection />
  </Page>
);

export const ProductsPage = () => (
  <Page title="Productos">
    <ProductsSection />
    <ProcessSection />
    <DemoSection />
  </Page>
);

export const ProjectsPage = () => (
  <Page title="Proyectos">
    <ProjectsSection showAll />
  </Page>
);

export const ClientsPage = () => (
  <Page title="Clientes">
    <ClientsSection />
  </Page>
);

export const PlansPage = () => (
  <Page title="Planes">
    <PlansSection />
    <DemoSection />
  </Page>
);

export const ContactPage = () => (
  <Page title="Contacto">
    <ContactSection />
  </Page>
);
