import React, { useState, useEffect } from "react";
import {
  getCurretnSetfromMatch,
  getClasesSet,
  getMatchDuration,
} from "../../Utils/Utils";
import moment from "moment";
import pelota from "../../Imagenes/pelota.png";
import "./DetallePartidoTorneo.scss";

export const DetallePartidoTorneo = ({ partido }) => {
  const { resultado,pista, estado, hora_prevista } = partido;
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
    hora_inicio
    } = resultado;
  let { ronda } = resultado;
  const nombrej1 = partido.jugadores[0].nombre;
  const nombrej2 = partido.jugadores[1].nombre;
  let claseSaque1 = "iconoSaquePadel";
  let claseSaque2 = "iconoSaquePadel";
  const claseTime = "VivoPadel";
  if (saque_actual === 1) {
    claseSaque2 = "iconoSaque_hiddenPadel";
  } else {
    claseSaque1 = "iconoSaque_hiddenPadel";
  }
  if (!ronda) {
    ronda = "Cuartos de finalPadel";
  }
  let { horas, minutos } = getMatchDuration(hora_inicio);
  const hora_prevista_comienzo=moment.utc(hora_prevista).local().format('HH:mm');
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
    puntos_j2
  );
  let clasej1 = "";
  let clasej2 = "";
  let opacidad = "";
  if (estado == 2) {
    opacidad = "opacidadPadel";
    if (ganador === 1) clasej1 = "ganaPadel";
    else clasej2 = "ganaPadel";
  }

  return (
    <div className="PartidoPadel">
      <div className={`informacionPadel ${opacidad}`}>
        <div className="infoPadel">
          {estado == 1 && (
            <div className="info_Padel">
              <div className="pistaPadel">{`Pista ${pista}`}</div>
              <div className="rondaPadel">{`${ronda}`}</div>

              <div className={claseTime}>
                <i class="fas fa-circle"></i>
                {`${horas}:${minutos}`}
              </div>
            </div>
          )}
          {estado == 2 && (
            <div className="info_Padel">
              <div className={claseTime} class="hora_previstaPadel">
                Finalizado
              </div>
              <div className="pistaPadel">{`Pista ${pista}`}</div>
            </div>
          )}
          {estado == 0 && (
            <div className="info_Padel">
              <div className={claseTime} class="hora_previstaPadel">
                <i className="far fa-clock icono"></i>
                {`${hora_prevista_comienzo}`}
              </div>
              <div className="pistaPadel">{`Pista ${pista}`}</div>
            </div>
          )}
        </div>

        <div className="JugadorPadel">
          <div class="info1Padel">
            <div className={`nombrePadel ${clasej1}`}>{nombrej1}</div>
            {estado == 1 && (
              <div className="flexPadel flex2Padel">
                <div className="pelotaPadel">
                  <img className={claseSaque1} src={pelota} alt="" />
                </div>

                <div className={`puntos_pPadel  ${cp1j1}`}>{puntos_j1}</div>
              </div>
            )}
          </div>
          <div className="info2Padel">
            <div className={`setsPadel  ${cs1j1}`}>{set1_j1}</div>

            <div className={`setsPadel  ${cs2j1}`}>{set2_j1}</div>
            <div className={`setsPadel  ${cs3j1}`}>{set3_j1}</div>
          </div>
        </div>

        <div className="JugadorPadel">
          <div className="info1Padel">
            <div className={`nombrePadel ${clasej2}`}>{nombrej2}</div>
            {estado == 1 && (
              <div className="flexPadel flex2Padel">
                <div className="pelotaPadel">
                  <img className={claseSaque2} src={pelota} alt="" />
                </div>
                <div className={`puntos_pPadel  ${cp2j2}`}>{puntos_j2}</div>
              </div>
            )}
          </div>
          <div className="info2Padel">
            <div className={`setsPadel  ${cs1j2}`}>{set1_j2}</div>

            <div className={`setsPadel  ${cs2j2}`}>{set2_j2}</div>
            <div className={`setsPadel  ${cs3j2}`}>{set3_j2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetallePartidoTorneo;
