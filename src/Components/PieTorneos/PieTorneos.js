import React, { Component, Fragment } from 'react';
import LogoGmatchNegroNuevo from '../../Imagenes/LogoGmatchNegroNuevo.png';
// import MAPFRE from '../../Imagenes/Logo MAPFRE_H RGB_B.png';
// import RMCT from '../../Imagenes/MCT_REAL_pos.png';
// import ORANGE from '../../Imagenes/Orange_2.png';
// import RFET from '../Imagenes/Logo RFET.png';
import CEDU from '../../Imagenes/Logos_CEU_blancos_png/CEDU.png';
import CostaCalida from '../../Imagenes/Logos_CEU_blancos_png/CostaCalida.png'
import CSD from '../../Imagenes/Logos_CEU_blancos_png/CSD.png'
import RegiondeMurcia from '../../Imagenes/Logos_CEU_blancos_png/RegiondeMurcia.png'
import UCAM25_color from '../../Imagenes/Logos_CEU_blancos_png/UCAM25_color.png'
import './PieTorneos.scss';
export const PieTorneos = () => (
  <div className="pieTorneos">
    <div className="pieTorneos__logos">
      <div className="pieTorneos__logos--item"><img className="mapfre" src={CEDU} alt="mapfre" /></div>
      <div className="pieTorneos__logos--item"><img className="rmct" src={CostaCalida} alt="rmct" /></div>
      <div className="pieTorneos__logos--item"><img className="mapfre" src={CSD} alt="mapfre" /></div>
      <div className="pieTorneos__logos--item"><img className="rfet" src={RegiondeMurcia} alt="reft" /></div>
      <div className="pieTorneos__logos--item"><img className="rfet" src={UCAM25_color} alt="reft" /></div>
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
