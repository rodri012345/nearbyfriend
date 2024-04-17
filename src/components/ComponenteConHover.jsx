import { useState } from 'react';

const ComponenteConHover = () => {
  const [mostrarComponente, setMostrarComponente] = useState(false);

  const handleMouseEnter = () => {
    setMostrarComponente(true);
  };

  const handleMouseLeave = () => {
    setMostrarComponente(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative' }}
    >
      <div
        style={{
          display: mostrarComponente ? 'block' : 'none',
          position: 'absolute',
          top: '100%',
          left: 0,
          backgroundColor: 'white',
          padding: '10px',
          border: '1px solid #ccc',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        Contenido que aparece al hacer hover
      </div>
      <div style={{ height: '50px', width: '200px', backgroundColor: 'lightblue' }}>
        Componente principal
      </div>
    </div>
  );
};

export default ComponenteConHover;
