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
export const PieTorneos = (logos) => {
  const { logos: logosInfo } = logos;
  return (
  <div className="pieTorneos">
    <div className="pieTorneos__logos">
      {logosInfo.map((eachLogo, index) => <div className="pieTorneos__logos--item"><img className="pieTorneos__logos--item__logo" src={eachLogo} alt="logo" /></div>)}
    </div>
    <div className="pieTorneos__legal">
      <span>© Copyright 2020 GMatch - Todos los derechos reservados <a href="http://info.gmatchapp.com">info.gmatchapp.com</a></span>
    </div>
   
  </div>
)}


export default PieTorneos;
