import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PageHeader } from "../components/layout/PageHeader";
import { DemoSection, FaqSection } from "../components/sections/HomeSections";
import { ProductsVisual } from "../components/visuals/PageVisuals";
import { getServiceDetail, serviceDetails } from "../content/services";
import { NotFoundPage } from "./NotFoundPage";

export const ServicePage = () => {
  const { slug } = useParams();
  const service = getServiceDetail(slug);

  useEffect(() => {
    if (!service) return;
    const previous = document.title;
    document.title = `${service.title} | Cosmo`;
    return () => {
      document.title = previous;
    };
  }, [service]);

  if (!service) return <NotFoundPage />;

  const others = serviceDetails.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHeader
        index="03"
        title={service.title}
        lead={service.lead}
        visual={<ProductsVisual />}
        parent={{ label: "Productos", to: "/productos" }}
      />

      <section
        className="section wrap service-pains"
        aria-labelledby="service-pains-title"
      >
        <div>
          <p className="eyebrow">Si te pasa esto</p>
          <h2 id="service-pains-title">
            Probablemente
            <br />
            <em>te sirve.</em>
          </h2>
        </div>
        <ul className="service-pain-list">
          {service.pains.map((pain) => (
            <li key={pain}>{pain}</li>
          ))}
        </ul>
      </section>

      <div className="band band-tint">
        <section
          className="section wrap service-includes"
          aria-labelledby="service-includes-title"
        >
          <h2 id="service-includes-title">Qué incluye</h2>
          <ol className="service-include-grid">
            {service.includes.map((item, i) => (
              <li key={item.title}>
                <span className="perk-number">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
          <Link
            className="btn"
            to={`/contacto?servicio=${service.slug}`}
          >
            Cotizar {service.title.toLowerCase()}
          </Link>
        </section>
      </div>

      <FaqSection faqs={service.faqs} />

      <nav
        className="section wrap service-others"
        aria-label="Otros productos"
      >
        <p className="eyebrow">Otros productos</p>
        <ul>
          {others.map((other) => (
            <li key={other.slug}>
              <Link to={`/productos/${other.slug}`}>{other.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <DemoSection
        title={service.cta.title}
        accent={service.cta.accent}
        text={service.cta.text}
        cta={service.cta.label}
        to={`/contacto?servicio=${service.slug}`}
      />
    </>
  );
};
