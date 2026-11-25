import { contact } from "../../content/contact";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Icon } from "../ui/Icon";
import { Logo } from "../ui/Logo";
const links = [
  ["quienes-somos", "Quiénes somos"],
  ["equipo", "Equipo"],
  ["productos", "Productos"],
  ["proyectos", "Proyectos"],
  ["clientes", "Clientes"],
  ["planes", "Planes"],
  ["contacto", "Contacto"],
];
/** Órbita decorativa del pie: la C del logo a gran escala, en líneas finas. */
const FooterOrbit = () => (
  <svg className="site-footer-orbit" viewBox="0 0 600 600" aria-hidden="true" focusable="false">
    <circle cx="300" cy="300" r="270" className="orbit-faint" />
    <circle cx="300" cy="300" r="190" className="orbit-faint" />
    <path className="orbit-main" d="M453.2 171.4 A200 200 0 1 0 453.2 428.6" />
    <circle cx="453.2" cy="171.4" r="13" className="orbit-node" />
    <circle cx="453.2" cy="428.6" r="13" className="orbit-node" />
    <circle cx="100" cy="300" r="13" className="orbit-node" />
    <circle cx="300" cy="300" r="34" className="orbit-core" />
    <circle cx="300" cy="300" r="12" className="orbit-core-dot" />
    <g className="orbit-satellite">
      <circle cx="300" cy="30" r="7" />
    </g>
  </svg>
);

export const Layout = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Cierra el menú móvil al cambiar de página
  useEffect(() => setOpen(false), [pathname]);

  // Escape cierra el menú desde cualquier parte
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // El header gana cuerpo (sombra, fondo opaco) en cuanto la página se desplaza
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className={`site-header wrap${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
        <Link to="/" className="logo" aria-label="Cosmo, inicio">
          <Logo variant="gradient" size={40} animated />
        </Link>
        <nav id="main-nav" className="site-nav" aria-label="Navegación principal">
          <ul>
            {links.map(([id, text]) => (
              <li key={id}>
                <NavLink to={`/${id}`}>{text}</NavLink>
              </li>
            ))}
          </ul>
          <div className="site-nav-extra">
            <Link className="btn" to="/contacto">
              Solicitar demo
            </Link>
            <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
              <Icon name="chat" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </nav>
        <Link className="btn site-header-demo" to="/contacto">
          Solicitar demo
        </Link>
        <button
          type="button"
          className="site-menu-btn"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </header>
      <main id="contenido">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="wrap site-footer-inner">
          <div className="site-footer-brand">
            <Link to="/" aria-label="Cosmo Software, inicio">
              <Logo variant="mint" size={48} stacked />
            </Link>
            <p>
              Software, implementación y soporte para que cada área de tu
              empresa trabaje conectada.
            </p>
          </div>
          <nav className="site-footer-col" aria-label="Secciones del sitio">
            <h2>Explora</h2>
            <ul>
              {links.map(([id, text]) => (
                <li key={id}>
                  <Link to={`/${id}`}>{text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="site-footer-col">
            <h2>Hablemos</h2>
            <ul>
              <li>
                <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
                  <Icon name="chat" />
                  WhatsApp {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`}>
                  <Icon name="mail" />
                  {contact.email}
                </a>
              </li>
              <li>
                <span>
                  <Icon name="pin" />
                  Chile, atención online
                </span>
              </li>
            </ul>
            <Link className="site-footer-demo" to="/contacto">
              Solicitar demo
            </Link>
          </div>
          <FooterOrbit />
        </div>
        <div className="wrap site-footer-base">
          <small>© {new Date().getFullYear()} Cosmo Software</small>
          <button
            type="button"
            className="site-footer-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                  ? "auto"
                  : "smooth",
              })
            }
          >
            Volver arriba
          </button>
        </div>
      </footer>
      <ScrollRestoration />
    </>
  );
};
