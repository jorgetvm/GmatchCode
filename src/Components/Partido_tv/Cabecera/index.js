
import React, { Component, Fragment } from 'react';

import GMatch_NEW_WHITE from '../../../Imagenes/GMatch_NEW_WHITE.png';
import './Cabecera.scss'

export const Cabecera = ({
  club_logo,
  nombreTorneo,
  horas,
  minutos,
  mostrar_hora,
}) => {
  return (
    <div className="cabecera">
     
      <div className="cabeceralogos">
        <div className="logoGmatch">
          <img  src={GMatch_NEW_WHITE} />
        </div>
        <div className="logoClub">
          <img  src={club_logo[0]} />
        </div>
      </div>
      <div className={`nombretorneo ${!(club_logo && club_logo.length > 0) ? 'nombretorneo--ancho' : ''}`}>
        <div className="nombre_hora">
          <div>{`${nombreTorneo}`}</div>
          {mostrar_hora && (<div className="tiempoTv">{` ${horas}:${minutos}`}</div>)}
        </div>
      </div>
    </div>
  )
}
export default Cabecera;