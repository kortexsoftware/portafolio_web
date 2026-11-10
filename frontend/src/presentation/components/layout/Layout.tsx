import { useState } from "react";
import { Link, NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import { Icon } from "../ui/Icon";
import { Logo } from "../ui/Logo";
const links = [
  ["quienes-somos", "Quiénes somos"],
  ["productos", "Productos"],
  ["proyectos", "Proyectos"],
  ["clientes", "Clientes"],
  ["planes", "Planes"],
  ["contacto", "Contacto"],
];
export const Layout = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="header wrap">
        <Link to="/" className="logo" aria-label="Kortex, inicio">
          <Logo variant="gradient" size={40} animated />
        </Link>
        <nav
          id="main-nav"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Navegación principal"
        >
          {links.map(([id, text]) => (
            <NavLink key={id} to={`/${id}`} onClick={() => setOpen(false)}>
              {text}
            </NavLink>
          ))}
        </nav>
        <Link className="btn header-demo" to="/contacto">
          Solicitar demo
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </header>
      <main id="contenido">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="wrap">
          <div className="footer-top">
            <div>
              <Link to="/" className="footer-brand" aria-label="Kortex Software, inicio">
                <Logo variant="outline" size={52} stacked />
              </Link>
              <p>
                Venta, implementación y soporte de software para
                <br /> empresas en Chile.
              </p>
              <small>© {new Date().getFullYear()} Kortex Software.</small>
            </div>
            <nav aria-label="Enlaces del pie">
              <Link to="/productos">Productos</Link>
              <Link to="/planes">Planes</Link>
              <Link to="/contacto">Contacto</Link>
            </nav>
          </div>
          <div className="footer-wordmark" aria-hidden="true">
            KORTEX
          </div>
        </div>
      </footer>
      <ScrollRestoration />
    </>
  );
};
