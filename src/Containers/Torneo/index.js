import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './Torneo.scss';
import PartidosPadelContainer from '../PartidosPadelContainer/PartidosPadelContainer';
import PieTorneos from '../../Components/PieTorneos/PieTorneos';

import { filtraTorneo_id } from '../../Utils/Utils';
import PartidosContainer from './PartidosContainer';

export const Torneo = ({ id_torneo, numTorneos, nombre }) => {
  
 
  const anchoPantalla = window.screen.width;
  return (
    <div className={`Torneo ${numTorneos === 1 ? 'only1' : ''}`}>
      <div className="Torneo__containerPartido ">
        {((numTorneos && numTorneos > 1) || (anchoPantalla > 1200)) && (
          <div className="Torneo__containerPartido__nombreSolitario">
            {nombre}
          </div>
        )}
        <PartidosContainer
          torneo_id={id_torneo}
          nombre={nombre}
          numTorneos={numTorneos}
        />


      </div>
      {numTorneos && numTorneos === 1 && anchoPantalla <= 1200 && (
        <PieTorneos />
      )}
    </div>
  );
};

export default Torneo;
