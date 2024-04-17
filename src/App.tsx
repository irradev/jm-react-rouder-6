import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  HashRouter,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Header } from './components/Header';
import { Error404 } from './pages/Error404';
import { Productos } from './pages/Productos';
import { ProductoDetalle } from './pages/ProductoDetalle';
import { Services } from './pages/Services';
import { Service } from './pages/Service';
import { useEffect, useState } from 'react';

import './App.css';
import './input-switch.css';
import { ToggleHashRouter } from './components/ToggleHashRouter';

function App() {
  const [isHashRouter, setIsHashRouter] = useState(false);

  useEffect(() => {
    const isHashRouterLocal = localStorage.getItem('toggleHash');
    if (isHashRouterLocal) {
      setIsHashRouter(JSON.parse(isHashRouterLocal));
    }
  }, []);

  return (
    <>
      <ToggleHashRouter
        isHashRouter={isHashRouter}
        onToggle={setIsHashRouter}
      />

      {!isHashRouter ? (
        <BrowserRouter>
          <AppChild />
        </BrowserRouter>
      ) : (
        <HashRouter>
          <AppChild />
        </HashRouter>
      )}
    </>
  );
}

function AppChild() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/acerca"
          element={<Navigate to="/about" />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/productos"
          element={<Productos />}
        />
        <Route
          path="/productos/:id"
          element={<ProductoDetalle />}
        />
        <Route
          path="*"
          element={<Error404 />}
        />

        <Route
          path="/servicios"
          element={<Services />}
        >
          <Route
            index
            element={<h2>Servicios</h2>}
          />
          <Route
            path=":service"
            element={<Service />}
          />
          <Route
            path="garantia"
            element={<h2>Garantía de nuestros servicios</h2>}
          />
        </Route>
      </Routes>
    </>
  );
}
export default App;
