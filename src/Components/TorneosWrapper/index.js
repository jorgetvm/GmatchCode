
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Torneo from '../../Containers/Torneo';
import PieTorneos from '../PieTorneos/PieTorneos';
import LogoGmatchNegroNuevo from '../../Imagenes/LogoGmatchNegroNuevo.png';
import MAPFRE from '../../Imagenes/Logo MAPFRE_H RGB_B.png';
import RMCT from '../../Imagenes/MCT_REAL_pos.png';
import ORANGE from '../../Imagenes/Orange_2.png';
import RFET from '../../Imagenes/Logo RFET.png';
import './TorneosWrapper.scss';

export const TorneosWrapper = ({ torneos }) => {
  const numTorneos = torneos.length;
  const anchoPantalla = window.screen.width;
  return (
    <div className="TorneosWrapper">
      {((numTorneos && numTorneos > 1) || (anchoPantalla > 1200)) && (
        <div className="TorneosWrapper__divTituloLogo">

          <img className="mapfre" src={MAPFRE} alt="logo mapfre" />

          <img className="rmct" src={RMCT} alt="logo RMCT" />
          <img src={LogoGmatchNegroNuevo} alt="logo gmatch" />

          <img className="mapfre" src={ORANGE} alt="logo ORANGE" />
          <img className="rfet" src={RFET} alt="logo RFET" />
        </div>
      )}

      <div className="TorneosWrapper__torneos">
        {torneos.map((id) => (
          <div className={`TorneosWrapper__torneos__torneo ${numTorneos > 1 ? 'doble' : ''}`}>
            <Torneo id_torneo={id} numTorneos={torneos.length} />
          </div>
        ))}
      </div>
      {numTorneos && numTorneos > 1 && anchoPantalla < 1200 && (
        <PieTorneos />
      )}
    </div>


  );
};

TorneosWrapper.propTypes = {
  torneos: PropTypes.object.isRequired,
};

export default TorneosWrapper;
