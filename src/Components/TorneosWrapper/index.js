
import React, { Component, Fragment } from 'react';
import Torneo from '../../Containers/Torneo';
import PieTorneos from '../PieTorneos/PieTorneos';
import LogoGmatchNegroNuevo from '../../Imagenes/LogoGmatchNegroNuevo.png';
import MAPFRE from '../../Imagenes/Logo MAPFRE_H RGB_B.png';
import RMCT from '../../Imagenes/MCT_REAL_pos.png';
import ORANGE from '../../Imagenes/Orange_2.png';
import RFET from '../../Imagenes/Logo RFET.png';
import './TorneosWrapper.scss';

export const TorneosWrapper = ({ torneos }) => {
  const num_torneos = torneos.length;
  const ancho_pantalla = window.screen.width;
  return (
    <div className="TorneosWrapper">
      {((num_torneos && num_torneos > 1) || (ancho_pantalla > 1200)) && (
        <div className="TorneosWrapper__divTituloLogo">

          <img className="mapfre" src={MAPFRE} />

          <img className="rmct" src={RMCT} />
          <img src={LogoGmatchNegroNuevo} />

          <img className="mapfre" src={ORANGE} />
          <img className="rfet" src={RFET} />
        </div>
      )}

      <div className="TorneosWrapper__torneos">
        {torneos.map((id) => (
          <div className={`TorneosWrapper__torneos__torneo ${num_torneos > 1 ? 'doble' : ''}`}>
            <Torneo id_torneo={id} num_torneos={torneos.length} />
          </div>
        ))}
      </div>
      {num_torneos && num_torneos > 1 && ancho_pantalla < 1200 && (
        <PieTorneos />
      )}
    </div>


  );
};
export default TorneosWrapper;
