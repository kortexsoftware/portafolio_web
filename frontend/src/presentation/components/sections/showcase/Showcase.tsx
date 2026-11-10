import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react";
import { useInView } from "../../../hooks/useInView";
import { Icon } from "../../ui/Icon";

export const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Estilo inline con el índice usado por los retardos escalonados en CSS. */
export const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

/** Avanza un índice cíclico mientras `active` sea verdadero. */
export const useCycle = (length: number, ms: number, active: boolean) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!active || reducedMotion()) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % length), ms);
    return () => window.clearInterval(id);
  }, [length, ms, active]);
  return index;
};

/** Interpola un número hacia `target` con easing; salta directo si hay movimiento reducido. */
export const useCountUp = (target: number, active: boolean, ms = 900) => {
  const [shown, setShown] = useState(0);
  const shownRef = useRef(0);
  useEffect(() => {
    if (!active) return;
    if (reducedMotion()) {
      shownRef.current = target;
      setShown(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const from = shownRef.current;
    const tick = (now: number) => {
      const p = Math.min((now - start) / ms, 1);
      const value = from + (target - from) * (1 - (1 - p) ** 3);
      shownRef.current = value;
      setShown(value);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, ms]);
  return shown;
};

/** Inclinación 3D leve y brillo que sigue al cursor (solo puntero fino). */
const tilt = (e: PointerEvent<HTMLElement>) => {
  if (e.pointerType !== "mouse" || reducedMotion()) return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width;
  const y = (e.clientY - r.top) / r.height;
  el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
  el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
  el.style.setProperty("--ry", `${((x - 0.5) * 5).toFixed(2)}deg`);
  el.style.setProperty("--rx", `${((0.5 - y) * 5).toFixed(2)}deg`);
};
const untilt = (e: PointerEvent<HTMLElement>) => {
  const el = e.currentTarget;
  el.style.setProperty("--ry", "0deg");
  el.style.setProperty("--rx", "0deg");
};

export const ShowcaseCard = ({
  className = "",
  order,
  children,
}: {
  className?: string;
  order: number;
  children: ReactNode;
}) => (
  <article
    className={`ff-card ${className}`}
    style={stagger(order)}
    onPointerMove={tilt}
    onPointerLeave={untilt}
  >
    {children}
  </article>
);

type ShowcaseProps = {
  id: string;
  /** Número visible del proyecto, p. ej. "01". */
  index: string;
  theme: string;
  category: string;
  title: string;
  lead: string;
  link: { href: string; label: string };
  /** Recibe `true` mientras la sección está en pantalla. */
  children: (active: boolean) => ReactNode;
};

export const Showcase = ({
  id,
  index,
  theme,
  category,
  title,
  lead,
  link,
  children,
}: ShowcaseProps) => {
  const { ref, seen, inView } = useInView<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`section wrap ff ${theme}${seen ? " is-visible" : ""}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="ff-shell">
        <div className="ff-glow" aria-hidden="true" />
        <header className="ff-head">
          <p className="ff-meta">
            <span className="ff-num" aria-hidden="true">{index}</span>
            <span className="ff-tag">Proyecto destacado</span>
            <span>{category}</span>
            <span className="ff-by">
              <i className="logo-mark" aria-hidden="true" /> Desarrollado por
              Kortex
            </span>
          </p>
          <h2 id={`${id}-title`}>{title}</h2>
          <p className="ff-lead">{lead}</p>
          <a className="ff-visit" href={link.href} target="_blank" rel="noreferrer">
            {link.label} <Icon name="arrow" />
          </a>
        </header>
        <div className="ff-grid">{children(seen && inView)}</div>
      </div>
    </section>
  );
};

export const StackCard = ({
  order,
  description,
  stack,
  stats,
}: {
  order: number;
  description: string;
  stack: string[];
  stats?: [string, string][];
}) => (
  <ShowcaseCard className="ff-span-3 ff-arch" order={order}>
    <div>
      <h3>Arquitectura</h3>
      <p>{description}</p>
      {stats && (
        <dl className="ff-stats">
          {stats.map(([value, label]) => (
            <div key={label}>
              <dt>{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
    <ul className="ff-stack">
      {stack.map((t, i) => (
        <li key={t} style={stagger(i)}>
          {t}
        </li>
      ))}
    </ul>
  </ShowcaseCard>
);
