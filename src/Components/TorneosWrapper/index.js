
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Torneo from '../../Containers/Torneo';
import PieTorneos from '../PieTorneos/PieTorneos';
import LogoGmatchNegroNuevo from '../../Imagenes/LogoGmatchNegroNuevo.png';
// import MAPFRE from '../../Imagenes/Logo MAPFRE_H RGB_B.png';
// import RMCT from '../../Imagenes/MCT_REAL_pos.png';
// import ORANGE from '../../Imagenes/Orange_2.png';
// import RFET from '../../Imagenes/Logo RFET.png';
import CEDU from '../../Imagenes/Logos_CEU_blancos_png/CEDU.png';
import CostaCalida from '../../Imagenes/Logos_CEU_blancos_png/CostaCalida.png'
import CSD from '../../Imagenes/Logos_CEU_blancos_png/CSD.png'
import RegiondeMurcia from '../../Imagenes/Logos_CEU_blancos_png/RegiondeMurcia.png'
import UCAM25_color from '../../Imagenes/Logos_CEU_blancos_png/UCAM25_color.png'
import './TorneosWrapper.scss';

export const TorneosWrapper = ({ torneos }) => {
  const numTorneos = torneos.length;
  const anchoPantalla = window.screen.width;
  return (
    <div className="TorneosWrapper">
      {((numTorneos && numTorneos > 1) || (anchoPantalla > 1200)) && (
        <div className="TorneosWrapper__divTituloLogo">
          <img className="mapfre" src={CEDU} alt="logo mapfre" />
          <img className="rfet2" src={CostaCalida} alt="logo RMCT" />
          <img src={LogoGmatchNegroNuevo} alt="logo gmatch" />
          <img className="mapfre" src={CSD} alt="logo ORANGE" />
          <img className="rfet" src={RegiondeMurcia} alt="logo RFET" />
          <img className="rfet2" src={UCAM25_color} alt="logo RFET" />
        </div>
      )}

      <div className="TorneosWrapper__torneos">
        {torneos.map((hashid) => (
          <div className={`TorneosWrapper__torneos__torneo ${numTorneos > 1 ? 'doble' : ''}`}>
            <Torneo id_torneo={hashid} numTorneos={torneos.length} />
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
  torneos: PropTypes.array.isRequired,
};

export default TorneosWrapper;
