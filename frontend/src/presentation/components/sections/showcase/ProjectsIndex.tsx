import { useEffect, useState } from "react";
import { reducedMotion } from "./Showcase";

const items = [
  { id: "fullfragrance", index: "01", label: "FullFragrance" },
  { id: "strongerfit", index: "02", label: "StrongerFit" },
  { id: "proyectos", index: "03", label: "Más proyectos" },
];

/** Barra fija que marca qué proyecto se está viendo. */
export const ProjectsIndex = () => {
  const [active, setActive] = useState(items[0].id);

  useEffect(() => {
    const targets = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => el !== null);
    // Activa la sección que cruza la franja central de la ventana
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="projects-index" aria-label="Proyectos en esta página">
      <ol className="wrap">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              aria-current={active === it.id ? "true" : undefined}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(it.id)?.scrollIntoView({
                  behavior: reducedMotion() ? "auto" : "smooth",
                });
                setActive(it.id);
              }}
            >
              <span>{it.index}</span>
              {it.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
