import React from 'react';
import { RONDA_NAMING } from '../../DetallePartidoTorneo/constants';
const ResultadoPartido = ({
  data,
  jugador1,
  jugador2,
  pelota,
  claseSaque1,
  claseSaque2,
  ronda,
  nombreTorneo,
}) => {
  if (!data || !jugador1 || !jugador2) return <p>No hay datos disponibles.</p>;
  const rondaPartido = RONDA_NAMING[ronda] || null;
  return (
    <div
      style={{
        color: '#fff',
        margin: '0 auto',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {/* Título */}
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '18px' }}>
      {nombreTorneo}
        
      </h2>
      <h3 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '16px' }}>
      {rondaPartido}
      </h3>

      {/* Jugadores y resultados */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        {/* Jugador 1 */}
        <div style={{ textAlign: 'left', flex: 1 }}>
          <h3 style={{ margin: 0, fontSize: '18px',}}>{jugador1}</h3>
          {/* <span style={{ fontSize: '14px', color: '#bbb' }}>{jugador1.info}</span> */}
        </div>

        {/* Resultado */}
       

        {/* Jugador 2 */}
        <div style={{ textAlign: 'right', flex: 1 }}>
          <h3 style={{ margin: 0 , fontSize: '18px'}}>{jugador2}</h3>
          {/* <span style={{ fontSize: '14px', color: '#bbb' }}>{jugador2.info}</span> */}
        </div>
      </div>

      {/* Puntos en el Juego */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          backgroundColor: '#1e1e1e',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            className={`pelotaTvLed ${claseSaque1}`}
            src={pelota}
            alt=""
            style={{ width: '20px', height: '20px' }}
          />
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
            {data.puntos_j1}
          </span>
        </div>
        <div
          style={{
            flex: 1,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '28px',
            color: '#4caf50',
          }}
        >
          {data.sets_j1} - {data.sets_j2}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
            {data.puntos_j2}
          </span>
          <img
            className={`pelotaTvLed ${claseSaque2}`}
            src={pelota}
            alt=""
            style={{ width: '20px', height: '20px' }}
          />
        </div>
      </div>

      {/* Sets */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#1e1e1e',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        {[1, 2, 3].map((set) => (
          <div
            key={set}
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            <div style={{ fontSize: '14px', color: '#bbb', marginBottom: '5px' }}>{set}º Set</div>
            <div>
              <span
                style={{
                  fontSize: '20px',
                  color:
                    data[`set${set}_j1`] > data[`set${set}_j2`]
                      ? '#4caf50'
                      : '#fff',
                }}
              >
                {data[`set${set}_j1`] || 0}
              </span>
              {' - '}
              <span
                style={{
                  fontSize: '20px',
                  color:
                    data[`set${set}_j2`] > data[`set${set}_j1`]
                      ? '#4caf50'
                      : '#fff',
                }}
              >
                {data[`set${set}_j2`] || 0}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultadoPartido;
