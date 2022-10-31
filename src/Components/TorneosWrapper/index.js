
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
  const [infoTorneo2, setInfoTorneo2] = useState('');
  let logos = [];
  let nombre = '';
  let logosTorneo = '';
  let logos2 = [];
  let nombre2 = '';
  let logosTorneo2 = '';
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
  const apiUrl2 = `https://gmatchapp.com/api/v1/torneos/${torneos[1]}`;
  const getInfo2 = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setInfoTorneo2({ Torneo2: data });
      })
      .catch((error) => console.log('error', error));
  };
  useEffect(() => {
    getInfo();
    if(numTorneos === 2 ) {
      getInfo2();
    }
  }, []);

  if (infoTorneo) {
    const { Torneo } = infoTorneo;
    nombre = Torneo.nombre;
    logos = Torneo.imagenes_patrocinadores_color || Torneo.imagenes_patrocinadores;
    logosTorneo = Torneo.imagen_logo[0] || '';
  }
  if (infoTorneo2) {
    const { Torneo2 } = infoTorneo2;
    nombre2 = Torneo2.nombre;
    logos2 = Torneo2.imagenes_patrocinadores_color || Torneo2.imagenes_patrocinadores;
    logosTorneo2 = Torneo2.imagen_logo[0] || '';
  }
  return (
    <div className="TorneosWrapper">
        <div className={`TorneosWrapper__torneo`}>
          <Torneo id_torneo={torneos[0]} numTorneos={torneos.length} nombre={nombre} logos={logos} logosTorneo={logosTorneo} />
          {numTorneos === 2 && (
            <Torneo id_torneo={torneos[1]} numTorneos={torneos.length} nombre={nombre2} logos={logos2} logosTorneo={logosTorneo2} />
          )}
        </div>
      </div>


  );
};

TorneosWrapper.propTypes = {
  torneos: PropTypes.array.isRequired,
};

export default TorneosWrapper;
