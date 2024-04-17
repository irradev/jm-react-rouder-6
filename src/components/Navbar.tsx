import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <span>Link</span>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/acerca">Acerca</Link>
        <Link to="/about">About</Link>
        <Link to="/indexistente">404</Link>
      </nav>
      <br />

      <span>NavLink</span>
      <nav className="menu">
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          to="/productos"
        >
          Productos
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          to="/servicios"
        >
          Servicios
        </NavLink>
      </nav>
    </>
  );
};
