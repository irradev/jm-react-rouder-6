import { useParams, useNavigate } from 'react-router-dom';
import { productos } from '../data/productos';

export const ProductoDetalle = () => {
  const params = useParams();
  const navigate = useNavigate();

  const producto = productos.find((p) => p.id === Number(params.id));

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section>
      <h1>Detalle del Producto</h1>
      <h2>{producto?.nombre}</h2>
      <p
        style={{
          fontSize: '2rem',
          fontWeight: '600',
          margin: 0,
          marginBottom: '24px',
        }}
      >
        ${producto?.precio}
      </p>
      <button onClick={handleBack}>Regresar</button>
    </section>
  );
};
