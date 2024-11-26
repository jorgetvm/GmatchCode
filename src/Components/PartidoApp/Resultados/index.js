import React from 'react';
import { RONDA_NAMING } from '../../DetallePartidoTorneo/constants';
import {
  getMatchDuration,
} from '../../../Utils/Utils';
const ResultadoPartido = ({
  data = {},
  jugador1,
  jugador2,
  pelota,
  claseSaque1,
  claseSaque2,
  ronda,
  nombreTorneo,
  sets_partido,
}) => {
  if (!jugador1 || !jugador2) return <p>No hay datos disponibles.</p>;

  const rondaPartido = RONDA_NAMING[ronda] || null;

  // Calcular el tiempo del partido en marcha
  const calcularDuracionPartido = () => {
    if (!data?.hora_inicio) return null;

    const { horas, minutos } = getMatchDuration(data?.hora_inicio);// No mostrar si lleva más de 24 horas
    return `${horas}h ${minutos}m`;
  };

  const duracionPartido = calcularDuracionPartido();

  // Determinar el mensaje del ganador
  const mensajeGanador =
    data?.ganador === 1
      ? jugador1
      : data?.ganador === 2
        ? jugador2
        : null;

  return (
    <div
      style={{
        color: '#fff',
        margin: '0 auto',
        maxWidth: '700px',
      }}
    >
      {/* Título */}
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '18px' }}>
        {nombreTorneo}
      </h2>
      <h3 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '16px' }}>
        {rondaPartido}
      </h3>



      {/* Jugadores */}
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
          <h3 style={{ margin: 0, fontSize: '18px', color: data?.ganador === 1 ? '#4CAF50' : '#fff' }}>
            {jugador1}
          </h3>
        </div>

        {/* Jugador 2 */}
        <div style={{ textAlign: 'right', flex: 1 }}>
          <h3 style={{ margin: 0, fontSize: '18px', color: data?.ganador === 2 ? '#4CAF50' : '#fff' }}>
            {jugador2}
          </h3>
        </div>
      </div>

      {/* Puntos y sets */}
      {!data?.ganador && (
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
              alt="Pelota"
              style={{ width: '20px', height: '20px' }}
            />
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
              {data.puntos_j1 || 0}
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
            {data.sets_j1 || 0} - {data.sets_j2 || 0}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
              {data.puntos_j2 || 0}
            </span>
            <img
              className={`pelotaTvLed ${claseSaque2}`}
              src={pelota}
              alt="Pelota"
              style={{ width: '20px', height: '20px' }}
            />
          </div>
        </div>
      )}

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
        {Array.from({ length: sets_partido }).map((_, index) => {
          const set = index + 1;
          return (
            <div
              key={set}
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              <div
                style={{
                  fontSize: '14px',
                  color: '#bbb',
                  marginBottom: '5px',
                }}
              >
                {set}º Set
              </div>
              <div>
                <span
                  style={{
                    fontSize: '20px',
                    color:
                      (data[`set${set}_j1`] || 0) > (data[`set${set}_j2`] || 0)
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
                      (data[`set${set}_j2`] || 0) > (data[`set${set}_j1`] || 0)
                        ? '#4caf50'
                        : '#fff',
                  }}
                >
                  {data[`set${set}_j2`] || 0}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {/* Tiempo de partido */}
      {duracionPartido && !data?.ganador && (
        <p style={{ textAlign: 'end', padding: '10px 0'  , fontSize: '14px', color: '#bbb' }}>
          Duración: {duracionPartido}
        </p>
      )}
      {/* Partido terminado */}
      {data?.ganador && (
        <p
          style={{
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#4CAF50',
            backgroundColor: '#1e1e1e',
            padding: '10px 20px',
            borderRadius: '8px',
          }}
        >
          Partido terminado - Ganador: {mensajeGanador}
        </p>
      )}
    </div>
  );
};

export default ResultadoPartido;
