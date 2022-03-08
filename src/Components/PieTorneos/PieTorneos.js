import React, { Component, Fragment } from 'react';
import LogoGmatchNegroNuevo from '../../Imagenes/LogoGmatchNegroNuevo.png';
import MAPFRE from '../../Imagenes/Logo MAPFRE_H RGB_B.png';
import RMCT from '../../Imagenes/MCT_REAL_pos.png';
import ORANGE from '../../Imagenes/Orange_2.png';
import RFET from '../../Imagenes/Logo RFET.png';
import './PieTorneos.css';

export const PieTorneos = () => (
  <div className="pieTorneos">
    <div className="Torneo__containerPartido__logos">
      <div className="Torneo__containerPartido__logos--item"><img className="mapfre" src={MAPFRE} alt="mapfre" /></div>
      <div className="Torneo__containerPartido__logos--item"><img className="rmct" src={RMCT} alt="rmct" /></div>
      <div className="Torneo__containerPartido__logos--item"><img className="mapfre" src={ORANGE} alt="mapfre" /></div>
      <div className="Torneo__containerPartido__logos--item">
        {' '}
        <img className="rfet" src={RFET} alt="reft" />
      </div>
    </div>
    <div><a href="http://info.gmatchapp.com">info.gmatchapp.com</a></div>
    <div>
      Murcia, España -
      <a href="mailto:info@gmatchapp.com">info@gmatchapp.com</a>
    </div>
    <div>© Copyright 2020 GMatch - Todos los derechos reservados</div>
  </div>
);


export default PieTorneos;
