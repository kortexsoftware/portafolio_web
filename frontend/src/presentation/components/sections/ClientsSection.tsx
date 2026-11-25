import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { featuredProjects } from "../../content/projects";
import { Icon } from "../ui/Icon";

/** Empresas cliente: cada una enlaza a su proyecto y a su sitio. */
const clients = [
  {
    projectId: "totalkids",
    industry: "Mobiliario infantil",
    work: "Diseñamos y desarrollamos su tienda online: catálogo por nivel educativo, compra como invitado, seguimiento de pedidos y panel para operar la tienda.",
  },
  {
    projectId: "fullfragrance",
    industry: "Perfumería",
    work: "Construimos su plataforma web para comparar precios de perfumes entre tiendas de la ciudad y recomendar fragancias según los gustos de cada persona.",
  },
];

export const ClientsSection = () => (
  <section className="section wrap clients" aria-labelledby="clients-title">
    <div className="clients-intro">
      <h2 id="clients-title">Ya trabajan con nosotros</h2>
      <p>Empresas que confiaron en Cosmo para construir su presencia digital.</p>
    </div>
    <ul className="clients-list">
      {clients.map((c) => {
        const p = featuredProjects.find((fp) => fp.id === c.projectId)!;
        return (
          <li
            key={p.id}
            className="client-card"
            style={
              {
                "--c-bg": p.colors.bg,
                "--c-fg": p.colors.fg,
                "--c-accent": p.colors.accent,
              } as CSSProperties
            }
          >
            <div className="client-brand">
              <strong>{p.title}</strong>
              <span>{c.industry}</span>
            </div>
            <div className="client-body">
              <p>{c.work}</p>
              <div className="client-links">
                <Link to={`/proyectos#${p.id}`}>
                  Ver el proyecto <Icon name="arrow" />
                </Link>
                {p.url && (
                  <a href={p.url} target="_blank" rel="noreferrer">
                    {p.urlLabel}
                  </a>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  </section>
);
