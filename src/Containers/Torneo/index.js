import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './Torneo.scss';
import PartidosPadelContainer from '../PartidosPadelContainer/PartidosPadelContainer';
import PieTorneos from '../../Components/PieTorneos/PieTorneos';

import { filtraTorneo_id } from '../../Utils/Utils';
import PartidosContainer from './PartidosContainer';

export const Torneo = ({ id_torneo, numTorneos, nombre, logos, logosTorneo }) => {
  
 
  const anchoPantalla = window.screen.width;
  return (
    <div className={`Torneo`}>
      <div className="Torneo__containerPartido ">
        <PartidosContainer
          torneo_id={id_torneo}
          nombre={nombre}
          numTorneos={numTorneos}
          logos={logos}
          logosTorneo={logosTorneo}
        />
      </div>
    </div>
  );
};

export default Torneo;
