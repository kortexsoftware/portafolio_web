import { Link } from "react-router-dom";
import { NeuralNetwork } from "./NeuralNetwork";
import { Icon } from "../ui/Icon";

const tickerItems = [
  "Gestión empresarial",
  "Punto de venta",
  "Facturación",
  "Soporte cercano",
];

const TickerGroup = ({ hidden = false }: { hidden?: boolean }) => (
  <span aria-hidden={hidden || undefined}>
    {tickerItems.map((item) => (
      <span key={item}>
        {item} <b>✦</b>{" "}
      </span>
    ))}
  </span>
);

export const Hero = () => (
  <>
    <section className="hero">
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <span className="hero-badge">
            <i /> Software para empresas en Chile
          </span>
          <h1>
            Software <br className="desktop-break" />
            que
            <br />
            <span>piensa.</span>
            <br />
            contigo.
          </h1>
          <p>
            Kortex es el cerebro digital de tu empresa: licencias,
            implementación y soporte conectados en un solo lugar.
          </p>
          <div className="hero-actions">
            <Link to="/productos" className="btn">
              Explorar productos <Icon name="arrow" />
            </Link>
            <Link to="/contacto" className="btn btn-outline">
              Hablar con ventas
            </Link>
          </div>
        </div>
        <NeuralNetwork />
      </div>
    </section>
    <div className="ticker">
      {/* Dos mitades idénticas: la animación desplaza -50% y vuelve sin salto */}
      <div className="ticker-track">
        <TickerGroup />
        <TickerGroup hidden />
        <TickerGroup hidden />
        <TickerGroup hidden />
      </div>
    </div>
  </>
);
