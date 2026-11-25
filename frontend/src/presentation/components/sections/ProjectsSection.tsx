import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { container } from "@/di/container";
import { useAsync } from "../../hooks/useAsync";
import { featuredProjects } from "../../content/projects";
import { Icon } from "../ui/Icon";
import { reducedMotion } from "./showcase/Showcase";

/**
 * Resumen de proyectos. Las tarjetas destacadas llevan a su vitrina en
 * /proyectos; los proyectos que entregue la API se suman después.
 */
export const ProjectsSection = ({ showAll = false }: { showAll?: boolean }) => {
  const { data } = useAsync(container.getProjects);
  const featuredTitles = new Set(featuredProjects.map((p) => p.title.toLowerCase()));
  const extra = (data ?? []).filter((p) => !featuredTitles.has(p.title.toLowerCase()));
  const featured = showAll ? featuredProjects : featuredProjects.slice(0, 3);

  return (
    <section id="proyectos" className="section wrap">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Proyectos creados</p>
          <h2>Lo que ya construimos</h2>
        </div>
        {!showAll && (
          <Link to="/proyectos" className="btn btn-outline btn-small">
            Ver todos los proyectos
          </Link>
        )}
      </div>
      <div className="projects-grid projects-recap horizontal-cards">
        {featured.map((p) => (
          <article
            className="project project-featured"
            key={p.id}
            style={
              {
                "--p-bg": p.colors.bg,
                "--p-fg": p.colors.fg,
                "--p-accent": p.colors.accent,
              } as CSSProperties
            }
          >
            <a
              className="project-image project-cover"
              href={showAll ? `#${p.id}` : `/proyectos#${p.id}`}
              aria-label={`Ver ${p.title} en detalle`}
              onClick={(e) => {
                const target = document.getElementById(p.id);
                if (!target) return;
                e.preventDefault();
                target.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth" });
              }}
            >
              <span className="project-cover-index">{p.index}</span>
              <strong>{p.title}</strong>
              <span className="project-cover-cta">
                Ver en detalle <Icon name="arrow" />
              </span>
            </a>
            <div className="tags">
              {p.category.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="project-title">
              <h3>{p.title}</h3>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="round-link"
                  aria-label={p.urlLabel}
                >
                  <Icon name="arrow" />
                </a>
              )}
            </div>
            <p>{p.summary}</p>
          </article>
        ))}
        {showAll &&
          extra.map((p) => (
            <article className="project" key={p.id}>
              <div className="project-image">
                {p.imageUrl && <img src={p.imageUrl} alt={p.title} loading="lazy" />}
              </div>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-title">
                <h3>{p.title}</h3>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="round-link"
                    aria-label={`Visitar ${p.title}`}
                  >
                    <Icon name="arrow" />
                  </a>
                )}
              </div>
              <p>{p.summary}</p>
            </article>
          ))}
      </div>
    </section>
  );
};
