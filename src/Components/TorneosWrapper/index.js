
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Torneo from '../../Containers/Torneo';
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
  const [infoTorneo, setInfoTorneo] = useState('');
  let logos = [];
  let nombre = '';
  let logosTorneo = '';
  const numTorneos = torneos.length;
  const anchoPantalla = window.screen.width;
  const apiUrl = `https://gmatchapp.com/api/v1/torneos/${torneos[0]}`;
  const getInfo = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setInfoTorneo({ Torneo: data });
      })
      .catch((error) => console.log('error', error));
  };
  useEffect(() => {
    getInfo();
  }, []);

  if (infoTorneo) {
    const { Torneo } = infoTorneo;
    nombre = Torneo.nombre;
    logos = Torneo.imagenes_patrocinadores_color || Torneo.imagenes_patrocinadores;
    debugger;
    logosTorneo = Torneo.imagen_logo[0] || '';
  }
  return (
    <div className="TorneosWrapper">
        <div className={`TorneosWrapper__torneo`}>
          <Torneo id_torneo={torneos[0]} numTorneos={torneos.length} nombre={nombre} logos={logos} logosTorneo={logosTorneo} />
        </div>
      </div>


  );
};

TorneosWrapper.propTypes = {
  torneos: PropTypes.array.isRequired,
};

export default TorneosWrapper;
