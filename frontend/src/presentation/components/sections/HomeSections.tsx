import { useState } from "react";
import { Link } from "react-router-dom";
import { products, steps, plans, maintenanceNote } from "../../content/home";
import { Icon } from "../ui/Icon";
export const AboutSection = () => (
  <section id="quienes-somos" className="section wrap about-section">
    <div>
      <p className="eyebrow">Nuestra esencia</p>
      <h2>
        Somos el equipo
        <br />
        detrás de tu
        <br />
        <em>tecnología.</em>
      </h2>
    </div>
    <div className="about-copy">
      <p>
        Acompañamos a las empresas a conectar su operación con la tecnología.
        Desde elegir el software hasta hacerlo parte del día a día.
      </p>
      <div className="values">
        <div>
          <h3>Misión</h3>
          <p>Hacer que la tecnología trabaje para tu empresa.</p>
        </div>
        <div>
          <h3>Visión</h3>
          <p>Una operación más simple, conectada y humana.</p>
        </div>
      </div>
      <p className="team-note">Tecnología con personas detrás.</p>
    </div>
  </section>
);
export const ProductsSection = () => (
  <section id="productos" className="section wrap">
    <div className="section-heading">
      <h2>
        Cada área de tu
        <br />
        negocio, <em>conectada.</em>
      </h2>
      <p>
        Encuentra la solución que necesita
        <br />
        tu empresa para avanzar.
      </p>
    </div>
    <div className="products-grid">
      {products.map((product, index) => (
        <Link
          className={`product-card product-${index}`}
          key={product.slug}
          to={`/contacto?servicio=${product.slug}`}
        >
          <span className="icon-box">
            <Icon name={product.icon} />
          </span>
          <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
          <span className="product-arrow">
            <Icon name="arrow" />
          </span>
        </Link>
      ))}
    </div>
  </section>
);
export const ProcessSection = () => (
  <section className="section wrap process-section">
    <h2>De la compra al uso diario</h2>
    <ol className="steps">
      {steps.map((step, i) => (
        <li key={step.title}>
          <span className="perk-number">0{i + 1}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </li>
      ))}
    </ol>
  </section>
);
const founderPerks = [
  {
    title: "Precio de fundador",
    description:
      "Un descuento especial en tu primer plan por confiar en nosotros desde el inicio.",
  },
  {
    title: "Soporte prioritario",
    description:
      "Tus consultas pasan primero en la fila durante los primeros meses de trabajo.",
  },
  {
    title: "Tu caso, publicado",
    description:
      "Mostramos tu proyecto en este sitio, con tu logo y un enlace a tu empresa.",
  },
];
const clientPromises = [
  "Asesoría para elegir solo lo que tu empresa necesita.",
  "Implementación y capacitación junto a tu equipo.",
  "Personas reales detrás del soporte.",
  "Precios claros, sin letra chica.",
];
export const FoundersSection = () => (
  <section id="clientes" className="section wrap founders">
    <div className="founders-intro">
      <p className="eyebrow">Clientes fundadores</p>
      <h2>
        Buscamos a nuestras
        <br />
        primeras <em>empresas.</em>
      </h2>
      <p>
        Kortex está partiendo y queremos crecer junto a quienes confíen
        primero. Las empresas fundadoras reciben condiciones que no vamos a
        repetir.
      </p>
      <div className="founders-actions">
        <Link className="btn" to="/contacto">
          Quiero ser fundador
        </Link>
        <Link className="btn btn-outline" to="/planes">
          Ver planes
        </Link>
      </div>
      <p className="founders-note">Cupos limitados.</p>
    </div>
    <ol className="founders-perks">
      {founderPerks.map((perk, i) => (
        <li key={perk.title}>
          <span className="perk-number">0{i + 1}</span>
          <div>
            <h3>{perk.title}</h3>
            <p>{perk.description}</p>
          </div>
        </li>
      ))}
    </ol>
  </section>
);
export const ClientPromiseSection = () => (
  <section className="section wrap client-promise">
    <div>
      <p className="eyebrow pink-text">Reseñas</p>
      <h2>
        Aquí no habrá reseñas
        <br />
        <em>inventadas.</em>
      </h2>
      <p>
        Cuando nuestros primeros clientes cuenten su experiencia, la vas a
        leer en esta página, con nombre y empresa. Mientras tanto, mira lo que
        ya hemos construido.
      </p>
      <Link className="btn btn-outline" to="/proyectos">
        Ver proyectos
      </Link>
    </div>
    <div className="promise-card">
      <h3>Lo que cada cliente puede esperar</h3>
      <ul>
        {clientPromises.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  </section>
);
export const PlansSection = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="planes" className="section wrap">
      <h2>Planes web sin letra chica</h2>
      <div
        id="plan-options"
        className={`plans-grid${expanded ? " plans-expanded" : ""}`}
      >
        {plans.map((plan, i) => (
          <article
            className={`plan ${i === 1 ? "plan-featured" : ""}`}
            key={plan.name}
          >
            <div className="plan-heading">
              <h3>{plan.name}</h3>
              {i === 1 && <span>Más completo</span>}
            </div>
            <p className="plan-price">
              <small className="plan-from">Desde</small> {plan.price}
            </p>
            <p className="plan-caption">{plan.caption}</p>
            <ul>
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link
              to={`/contacto?plan=${plan.name}`}
              className={`btn ${i === 1 ? "" : "btn-outline"}`}
            >
              {plan.cta}
            </Link>
          </article>
        ))}
      </div>
      <p className="plan-caption">{maintenanceNote}</p>
      <button
        type="button"
        className="btn btn-outline mobile-plans"
        aria-expanded={expanded}
        aria-controls="plan-options"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Mostrar plan destacado" : "Ver todos los planes"}
      </button>
    </section>
  );
};
type DemoProps = {
  title?: string;
  accent?: string;
  text?: string;
  cta?: string;
};
export const DemoSection = ({
  title = "Conecta tu empresa al",
  accent = "cerebro Kortex.",
  text = "Agenda una demo gratuita y te mostramos cómo funciona con tus propios procesos.",
  cta = "Agendar demo gratis",
}: DemoProps) => (
  <section className="wrap demo-wrap">
    <div className="demo">
      <h2>
        {title}
        <br />
        <span>{accent}</span>
      </h2>
      <p>{text}</p>
      <Link className="btn btn-pink" to="/contacto">
        {cta}
      </Link>
    </div>
  </section>
);
