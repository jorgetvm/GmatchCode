import React from 'react';

const ComparadorEstadisticas = ({ data }) => {
  if (!data) return <p>No hay datos disponibles.</p>;

  // Agrupación de estadísticas
  const estadisticasSaque = [
    { label: 'Aces', j1: data.stats_aces_j1, j2: data.stats_aces_j2 },
    { label: 'Doble Faltas', j1: data.stats_doble_faltas_j1, j2: data.stats_doble_faltas_j2 },
    { label: 'Faltas Totales', j1: data.stats_faltas_j1, j2: data.stats_faltas_j2 },
    { label: 'Sets Ganados', j1: data.sets_j1, j2: data.sets_j2 },
    { label: 'Puntos Totales', j1: data.stats_puntos_j1, j2: data.stats_puntos_j2 },
  ];


  // Componente para una tarjeta de estadísticas
  const TarjetaEstadisticas = ({ titulo, estadisticas }) => (
    <div
      style={{
        backgroundColor: '#1e1e1e',
        padding: '15px',
        marginBottom: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h3 style={{ color: '#fff', textAlign: 'center', marginBottom: '15px' }}>{titulo}</h3>
      {estadisticas.map((stat, index) => (
        <div key={index} style={{ marginBottom: '15px', color: '#fff' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px',
              fontSize: '16px',
            }}
          >
            <span style={{ flex: '1', textAlign: 'left' }}>{stat.j1}</span>
            <span style={{ flex: '2', textAlign: 'center', fontWeight: 'bold' }}>{stat.label}</span>
            <span style={{ flex: '1', textAlign: 'right' }}>{stat.j2}</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '8px',
              backgroundColor: '#333',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${(stat.j1 / (stat.j1 + stat.j2)) * 100 || 0}%`,
                backgroundColor: '#4caf50',
                height: '100%',
              }}
            ></div>
            <div
              style={{
                width: `${(stat.j2 / (stat.j1 + stat.j2)) * 100 || 0}%`,
                backgroundColor: '#2196f3',
                height: '100%',
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ backgroundColor: '#121212', padding: '20px', borderRadius: '12px' }}>
      <div style={{
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: '20px' }}>Estadísticas</h2>
        <TarjetaEstadisticas titulo="" estadisticas={estadisticasSaque} />
      </div>

    </div>
  );
};

export default ComparadorEstadisticas;
