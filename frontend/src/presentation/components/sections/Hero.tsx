import { Link } from 'react-router-dom';

export const Hero = () => (
  <section className="hero">
    <h1>Software y páginas web que venden</h1>
    <p>Diseñamos y desarrollamos productos digitales a medida para tu negocio.</p>
    <Link to="/contacto" className="btn">Pedir presupuesto</Link>
  </section>
);
