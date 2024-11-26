import React from 'react';

const ComparadorEstadisticas = ({ data, deporte }) => {
  if (!data) return <p>No hay datos disponibles.</p>;

  const obtenerEstadisticas = () => {
    switch (deporte.toLowerCase()) {
      case 'tenis':
      case 'padel':
        return [
          { label: 'Aces', jugador1: data.stats_aces_j1, jugador2: data.stats_aces_j2 },
          { label: 'Saques Fallados', jugador1: data.stats_faltas_j1, jugador2: data.stats_faltas_j2 },
          { label: 'Doble Faltas', jugador1: data.stats_doble_faltas_j1, jugador2: data.stats_doble_faltas_j2 },
          {
            label: 'Porcentaje de saque',
            jugador1: `${Math.round(
              (data.stats_puntos_j1 / (data.stats_puntos_j1 + data.stats_faltas_j1 || 1)) * 100
            )}%`,
            jugador2: `${Math.round(
              (data.stats_puntos_j2 / (data.stats_puntos_j2 + data.stats_faltas_j2 || 1)) * 100
            )}%`,
          },
          { label: 'Puntos Totales', jugador1: data.stats_puntos_j1, jugador2: data.stats_puntos_j2 },
        ];
      case 'pingpong':
        return [
          { label: 'Puntos Totales', jugador1: data.stats_puntos_j1, jugador2: data.stats_puntos_j2 },
        ];
      default:
        return [];
    }
  };

  const warnings = [
    { label: 'Warnings', jugador1: data.warnings_j1, jugador2: data.warnings_j2 },
  ];

  const estadisticas = obtenerEstadisticas().concat(
    data.warnings_j1 || data.warnings_j2 ? warnings : []
  );

  // Componente para una tarjeta de estadísticas
  const TarjetaEstadisticas = ({ titulo, estadisticas }) => (
    <div>
      <h3 style={{ color: '#fff', textAlign: 'center', marginBottom: '15px' }}>{titulo}</h3>
      {estadisticas.map((stat, index) => {
        const total = parseInt(stat.jugador1, 10) + parseInt(stat.jugador2, 10) || 1;
        const porcentajeJ1 = (parseInt(stat.jugador1, 10) / total) * 100;
        const porcentajeJ2 = (parseInt(stat.jugador2, 10) / total) * 100;

        return (
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
              <span style={{ flex: '1', textAlign: 'left' }}>{stat.jugador1}</span>
              <span style={{ flex: '2', textAlign: 'center', fontWeight: 'bold' }}>{stat.label}</span>
              <span style={{ flex: '1', textAlign: 'right' }}>{stat.jugador2}</span>
            </div>
            {stat.label !== 'Warnings' && (
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
                    width: `${porcentajeJ1}%`,
                    backgroundColor: '#4caf50',
                    height: '100%',
                    transition: 'width 0.3s ease-in-out',
                  }}
                ></div>
                <div
                  style={{
                    width: `${porcentajeJ2}%`,
                    backgroundColor: '#2196f3',
                    height: '100%',
                    transition: 'width 0.3s ease-in-out',
                  }}
                ></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div style={{ backgroundColor: '#121212',  borderRadius: '12px' }}>
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
        }}
      >
        <TarjetaEstadisticas titulo="Estadísticas" estadisticas={estadisticas} />
      </div>
    </div>
  );
};

export default ComparadorEstadisticas;
