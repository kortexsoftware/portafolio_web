import { useEffect, useRef, useState } from "react";
import { reducedMotion } from "./Showcase";

const items = [
  { id: "fullfragrance", index: "01", label: "FullFragrance" },
  { id: "loncoche-tdm", index: "02", label: "Loncoche TDM" },
  { id: "barberia-app", index: "03", label: "BarberíaApp" },
  { id: "totalkids", index: "04", label: "Total Kids" },
  { id: "cosmo-web", index: "05", label: "Cosmo" },
  { id: "proyectos", index: "06", label: "Resumen" },
];

/** Barra fija que marca qué proyecto se está viendo. */
export const ProjectsIndex = () => {
  const [active, setActive] = useState(items[0].id);
  const [docked, setDocked] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Marca cuándo la barra queda fijada bajo el header para acoplarla a él
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    let frame = 0;
    const check = () => {
      frame = 0;
      const stickyTop = parseFloat(getComputedStyle(nav).top) || 0;
      setDocked(nav.getBoundingClientRect().top <= stickyTop + 0.5);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

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

  useEffect(() => {
    const activeLink = document.querySelector<HTMLAnchorElement>(
      `.projects-index a[href="#${active}"]`,
    );
    const scroller = activeLink?.closest<HTMLOListElement>("ol");
    if (!activeLink || !scroller) return;
    scroller.scrollTo({
      behavior: reducedMotion() ? "auto" : "smooth",
      left:
        activeLink.offsetLeft -
        (scroller.clientWidth - activeLink.offsetWidth) / 2,
    });
  }, [active]);

  return (
    <nav
      ref={navRef}
      className={`projects-index${docked ? " is-docked" : ""}`}
      aria-label="Proyectos en esta página"
    >
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
