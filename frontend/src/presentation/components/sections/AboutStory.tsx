import { Link } from "react-router-dom";
import { useInView } from "../../hooks/useInView";
import { Icon } from "../ui/Icon";
import { stagger } from "./showcase/Showcase";

const facts = [
  { value: "3", label: "socios: dos fundadores y un socio técnico" },
  { value: "115", label: "contribuciones en nuestro primer producto" },
  { value: "2026", label: "año en que nace Kortex Software" },
];

const roles = [
  {
    title: "Fundadores",
    text: "Dirigen el producto, la relación con clientes y la estrategia de la empresa.",
  },
  {
    title: "Socio técnico",
    text: "Lidera la programación y la calidad técnica de cada proyecto.",
  },
  {
    title: "Nuevos socios",
    text: "Reglas claras para sumar talento a medida que la empresa crece.",
  },
];

const milestones = [
  {
    date: "Julio 2026",
    title: "Comienza FullFragrance",
    text: "Primer producto en conjunto: un comparador de precios de perfumes en Chile.",
  },
  {
    date: "Septiembre 2026",
    title: "fullfragance.cl, registrado",
    text: "El dominio queda inscrito ante NIC Chile y el producto toma forma pública.",
  },
  {
    date: "Septiembre 2026",
    title: "Acuerdo de fundadores",
    text: "Firmado en Temuco: el punto de partida formal del equipo.",
  },
  {
    date: "Hoy",
    title: "Nace Kortex Software",
    text: "Se suma un socio técnico y el equipo opera como sociedad formal de desarrollo de productos digitales.",
  },
];

export const AboutStory = () => {
  const timeline = useInView<HTMLOListElement>(0.2);
  return (
    <>
      <section className="section wrap about-facts" aria-label="Kortex en cifras">
        <dl>
          {facts.map((f) => (
            <div key={f.label}>
              <dt>{f.value}</dt>
              <dd>{f.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section wrap about-roles">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Equipo</p>
            <h2>
              Personas que construyen
              <br />
              <em>y responden.</em>
            </h2>
          </div>
          <p>
            Somos una sociedad formal con una estructura de propiedad y gobierno
            definida por escrito.
          </p>
        </div>
        <div className="roles-grid">
          {roles.map((r, i) => (
            <article key={r.title} className="card-base role-card" style={stagger(i)}>
              <span className="role-index">0{i + 1}</span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section wrap about-timeline">
        <div>
          <p className="eyebrow">Historia</p>
          <h2>
            De un proyecto
            <br />a una <em>empresa.</em>
          </h2>
          <Link to="/proyectos" className="btn btn-outline btn-small">
            Ver FullFragrance <Icon name="arrow" />
          </Link>
        </div>
        <ol
          ref={timeline.ref}
          className={`timeline${timeline.seen ? " is-visible" : ""}`}
        >
          {milestones.map((m, i) => (
            <li key={m.title} style={stagger(i)}>
              <time>{m.date}</time>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
};
