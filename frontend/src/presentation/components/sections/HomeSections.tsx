import { useState } from "react";
import { Link } from "react-router-dom";
import { products, steps, plans } from "../../content/home";
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
          <span className="step-number">0{i + 1}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </li>
      ))}
    </ol>
  </section>
);
export const ClientsSection = () => (
  <>
    <section
      className="client-strip"
      aria-label="Empresas que confían en Kortex"
    >
      <p>Un espacio para las empresas que crecen con Kortex</p>
      <div className="client-logos">
        {Array.from({ length: 7 }, (_, i) => (
          <span key={i}>TU EMPRESA AQUÍ</span>
        ))}
      </div>
    </section>
    <section id="clientes" className="section wrap">
      <p className="eyebrow pink-text">Reseñas</p>
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="reviews-grid horizontal-cards">
        {[0, 1, 2].map((i) => (
          <article className={`review review-${i}`} key={i}>
            <div className="review-stars" aria-hidden="true">
              ★★★★★
            </div>
            <blockquote>
              Este espacio espera una historia real de nuestros clientes.
            </blockquote>
            <div className="review-author">
              <span className="avatar">K</span>
              <p>
                Tu experiencia cuenta<small>Testimonios próximamente</small>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
);
export const PlansSection = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="planes" className="section wrap">
      <h2>Planes sin letra chica</h2>
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
            <p className="plan-price">{i === 2 ? "A medida" : "Conversemos"}</p>
            <p className="plan-caption">Cotización según tu empresa</p>
            <ul>
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link
              to={`/contacto?plan=${plan.name}`}
              className={`btn ${i === 1 ? "" : "btn-outline"}`}
            >
              {i === 2 ? "Cotizar" : `Elegir ${plan.name}`}
            </Link>
          </article>
        ))}
      </div>
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
