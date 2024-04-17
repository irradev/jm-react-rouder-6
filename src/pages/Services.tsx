import { NavLink, Outlet } from 'react-router-dom';

export const Services = () => {
  return (
    <div>
      <h1>Services with outlet</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          gap: '24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '8px',
          }}
        >
          <NavLink
            to="consultoria"
            className={({ isActive }) =>
              isActive ? 'active-link-secondary' : ''
            }
          >
            Consultoría
          </NavLink>
          <NavLink
            to="web-design"
            className={({ isActive }) =>
              isActive ? 'active-link-secondary' : ''
            }
          >
            Diseño web
          </NavLink>
          <NavLink
            to="marketing"
            className={({ isActive }) =>
              isActive ? 'active-link-secondary' : ''
            }
          >
            Marketing
          </NavLink>
          <NavLink
            to="seo"
            className={({ isActive }) =>
              isActive ? 'active-link-secondary' : ''
            }
          >
            Mejoramiento SEO
          </NavLink>
          <NavLink
            to="garantia"
            className={({ isActive }) =>
              isActive ? 'active-link-secondary' : ''
            }
          >
            Consulta nuestra garantía
          </NavLink>
        </div>
        <div
          style={{
            flexGrow: 1,
            backgroundColor: '#812211',
            color: '#FAFAFA',
            borderRadius: '8px',
            padding: '8px',
            maxWidth: '480px',
            width: '480px',
            height: '280px',
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
