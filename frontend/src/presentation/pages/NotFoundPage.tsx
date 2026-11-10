import { Link } from "react-router-dom";
import { LogoMark } from "../components/ui/Logo";

export const NotFoundPage = () => (
  <section className="section wrap not-found">
    <LogoMark variant="plain" size={96} animated />
    <p className="eyebrow">Error 404</p>
    <h1>Esta conexión no existe.</h1>
    <p>La página que buscas se movió o nunca estuvo aquí.</p>
    <Link to="/" className="btn">
      Volver al inicio
    </Link>
  </section>
);
