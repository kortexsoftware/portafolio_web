import { Link } from "react-router-dom";
import { container } from "@/di/container";
import { useAsync } from "../../hooks/useAsync";
import { Icon } from "../ui/Icon";
export const ProjectsSection = ({ showAll = false }: { showAll?: boolean }) => {
  const { data, loading, error } = useAsync(container.getProjects);
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
      <div className="projects-grid horizontal-cards">
        {data?.length
          ? (showAll ? data : data.slice(0, 3)).map((p) => (
              <article className="project" key={p.id}>
                <div className="project-image">
                  {p.imageUrl && (
                    <img src={p.imageUrl} alt={p.title} loading="lazy" />
                  )}
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
            ))
          : [
              "Desarrollo web",
              "Software de gestión",
              "Soluciones a medida",
            ].map((title, i) => (
              <article className="project" key={title}>
                <div
                  className={`project-image project-placeholder project-color-${i}`}
                >
                  <Icon name={i === 0 ? "code" : i === 1 ? "grid" : "file"} />
                  <span>
                    {loading ? "Cargando proyectos…" : "Próximamente"}
                  </span>
                </div>
                <div className="tags">
                  <span>Portafolio</span>
                </div>
                <h3>{title}</h3>
                <p>Pronto compartiremos los detalles de nuestros proyectos.</p>
              </article>
            ))}
      </div>
      {error && (
        <p className="data-notice" role="status">
          El portafolio no está disponible en este momento. Vuelve a intentarlo
          más tarde.
        </p>
      )}
    </section>
  );
};
