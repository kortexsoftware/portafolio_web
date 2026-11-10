import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => (
  <>
    <header className="header">
      <NavLink to="/" className="logo">Agencia</NavLink>
      <nav>
        <NavLink to="/servicios">Servicios</NavLink>
        <NavLink to="/portafolio">Portafolio</NavLink>
        <NavLink to="/contacto" className="btn">Cotizar</NavLink>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    <footer className="footer">© {new Date().getFullYear()} Agencia</footer>
  </>
);
