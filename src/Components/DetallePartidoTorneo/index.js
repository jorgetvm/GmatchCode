import React, { useState, useEffect, Fragment } from 'react';
import moment from 'moment';
import {
  getCurretnSetfromMatch,
  getClasesSet,
  getMatchDuration,
} from '../../Utils/Utils';
import pelota from '../../Imagenes/pelota.png';
import './DetallePartidoTorneo.scss';

export const DetallePartidoTorneo = ({ partido }) => {
  const resultado = partido.resultado || [];
  const {
    pista, estado, hora_prevista,
  } = partido;
  const currentSet = getCurretnSetfromMatch(resultado);
  const {
    puntos_j1,
    set1_j1,
    set2_j1,
    set3_j1,
    saque_actual,
    sets_j1,
    ganador,
    puntos_j2,
    set1_j2,
    set2_j2,
    set3_j2,
    sets_j2,
    hora_inicio,
    set_actual,
  } = resultado;
  let { ronda } = resultado;
  const nombrej1 = partido.jugadores[0] ? partido.jugadores[0].nombre : '';
  const nombrej2 = partido.jugadores[1] ? partido.jugadores[1].nombre : '';
  let claseSaque1 = 'iconoSaque';
  let claseSaque2 = 'iconoSaque';
  const claseTime = 'Vivo';
  if (saque_actual === 1) {
    claseSaque2 = 'iconoSaque_hidden';
  } else {
    claseSaque1 = 'iconoSaque_hidden';
  }

  if (!ronda) {
    ronda = 'Cuartos de final';
  }
  const { horas, minutos } = getMatchDuration(hora_inicio);
  const hora_prevista_comienzo = moment.utc(hora_prevista).local().format('HH:mm');
  const {
    cs1j1,
    cs2j1,
    cs3j1,
    cs4j1,
    cs1j2,
    cs2j2,
    cs3j2,
    cs4j2,
    cp1j1,
    cp2j2,
  } = getClasesSet(
    set1_j1,
    set1_j2,
    set2_j1,
    set2_j2,
    set3_j1,
    set3_j2,
    sets_j1,
    sets_j2,
    puntos_j1,
    puntos_j2,
  );
  let clasej1 = 'pierde';
  let clasej2 = 'pierde';
  let opacidad = '';
  if (estado == 2) {
    opacidad = 'opacidad';
    if (ganador === 1) clasej1 = 'gana';
    else clasej2 = 'gana';
  }


  return (
    <div className="DetallePartidoTorneoContainer">
      <div className="DetallePartidoTorneoContainer__upperInfo">
        <div className="DetallePartidoTorneoContainer__upperInfo__ronda">{ronda}</div>
        <div className="DetallePartidoTorneoContainer__upperInfo__pista">{`Pista ${pista}`}</div>
      </div>


      <div className="DetallePartidoTorneo">
        {estado != 2 && (
          <div className="DetallePartidoTorneo__horaPista">
            {estado == 1 && (
              <div className="DetallePartidoTorneo__horaPista__hora">
                <i className="fas fa-circle" />
                {`${horas > 0 ? `${horas}h:` : ''}${minutos}'`}
              </div>
            )}
            {estado == 0 && (
              <div className="DetallePartidoTorneo__horaPista__hora__horarioComienzo">
                <i className="far fa-clock" />
                {hora_prevista_comienzo}
              </div>
            )}
          </div>
        )}
        {estado == 2 && (
          <div className="DetallePartidoTorneo__horaPista">
            <div className="DetallePartidoTorneo__horaPista__check">
              {ganador == 1 && (
                <i className="far fa-check-circle" />
              )}
            </div>
            <div className="DetallePartidoTorneo__horaPista__check">
              {ganador == 2 && (
                <i className="far fa-check-circle" />
              )}
            </div>
          </div>
        )}
        <div className="DetallePartidoTorneo__informacion">
          <div className="DetallePartidoTorneo__informacion__jugadores">
            <div className={`DetallePartidoTorneo__informacion__jugadores__jugador ${clasej1}`}>{nombrej1}</div>
            <div className={`DetallePartidoTorneo__informacion__jugadores__jugador ${clasej2}`}>{nombrej2}</div>
          </div>
          {estado != 0 && (
            <div className="DetallePartidoTorneo__informacion__resultados">
              <div className="DetallePartidoTorneo__informacion__resultados__puntos">
                {!ganador && (
                <>
                  <div className="DetallePartidoTorneo__informacion__resultados__puntos__punto">
                    <div className="DetallePartidoTorneo__informacion__resultados__puntos__punto__pelota">
                      <img className={claseSaque1} src={pelota} alt="" />
                    </div>
                    <div className="DetallePartidoTorneo__informacion__resultados__puntos__punto__pelota">
                      <img className={claseSaque2} src={pelota} alt="" />
                    </div>

                  </div>

                  <div className="DetallePartidoTorneo__informacion__resultados__puntos__punto">
                    <div className={`DetallePartidoTorneo__informacion__resultados__puntos__punto__info ${cp1j1}`}>
                      {puntos_j1}
                    </div>
                    <div className={`DetallePartidoTorneo__informacion__resultados__puntos__punto__info ${cp2j2}`}>
                      {puntos_j2}
                    </div>
                  </div>
                </>

                )}
              </div>
              <div className={`DetallePartidoTorneo__informacion__resultados__set ${set_actual === 1 ? 'DetallePartidoTorneo__informacion__resultados__set--activo' : ''}`}>
                <div className={cs1j1}>{set1_j1}</div>
                <div className={cs1j2}>{set1_j2}</div>
              </div>
              <div className={`DetallePartidoTorneo__informacion__resultados__set ${set_actual === 2 ? 'DetallePartidoTorneo__informacion__resultados__set--activo' : ''}`}>
                <div className={cs2j1}>{set2_j1}</div>
                <div className={cs2j2}>{set2_j2}</div>
              </div>
              <div className={`DetallePartidoTorneo__informacion__resultados__set ${set_actual === 3 ? 'DetallePartidoTorneo__informacion__resultados__set--activo' : ''}`}>
                <div className={cs3j1}>{set3_j1}</div>
                <div className={cs3j2}>{set3_j2}</div>
              </div>
            </div>

          )}

        </div>
        {/*
          <div className={`DetallePartidoTorneo__informacion ${opacidad}`}>
            <div className="">
            {estado == 1 && (
              <div className="">
                <div className="">{`Pista ${pista}`}</div>
                <div className="">{`${ronda}`}</div>

                <div className={claseTime}>
                  <i className="fas fa-circle"></i>
                  {`${horas}:${minutos}`}
                </div>
              </div>
            )}
            {estado == 2 && (
              <div className="">
                <div className={claseTime} className="hora_prevista">
                  Finalizado
                </div>
                <div className="">{`Pista ${pista}`}</div>
              </div>
            )}
            {estado == 0 && (
              <div className="">
                <div className={claseTime} className="hora_prevista">
                  <i className="far fa-clock icono"></i>
                  {`${hora_prevista_comienzo}`}
                </div>
                <div className="">{`Pista ${pista}`}</div>
              </div>
            )}
          </div> */}

        {/* <div className="">
            <div className="">
              <div className={`nombre ${clasej1}`}>{nombrej1}</div>
              {estado == 1 && (
                <div className="flex flex2">
                  <div className="pelota">
                    <img className={claseSaque1} src={pelota} alt="" />
                  </div>

                  <div className={`puntos_p  ${cp1j1}`}>{puntos_j1}</div>
                </div>
              )}
            </div>
            <div className="">
              <div className={`sets  ${cs1j1}`}>{set1_j1}</div>

              <div className={`sets  ${cs2j1}`}>{set2_j1}</div>
              <div className={`sets  ${cs3j1}`}>{set3_j1}</div>
            </div>
          </div>

          <div className="">
            <div className="">
              <div className={`nombre ${clasej2}`}>{nombrej2}</div>
              {estado == 1 && (
                <div className="flex flex2">
                  <div className="pelota">
                    <img className={claseSaque2} src={pelota} alt="" />
                  </div>
                  <div className={`puntos_p  ${cp2j2}`}>{puntos_j2}</div>
                </div>
              )}
            </div>
            <div className="info2">
              <div className={`sets  ${cs1j2}`}>{set1_j2}</div>

              <div className={`sets  ${cs2j2}`}>{set2_j2}</div>
              <div className={`sets  ${cs3j2}`}>{set3_j2}</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DetallePartidoTorneo;
