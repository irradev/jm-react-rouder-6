import { useParams } from 'react-router-dom';

export const Service = () => {
  const params = useParams();

  return (
    <div>
      <h1>Service: {params.service} </h1>
    </div>
  );
};
