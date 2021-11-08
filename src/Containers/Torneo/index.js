import React, { useState, useEffect } from "react";
import moment from 'moment';

import "./Torneo.scss";
import PartidosPadelContainer from '../PartidosPadelContainer/PartidosPadelContainer';
import DatePickerContainer from '../DatePickerContainer';
import PieTorneos from '../../Components/PieTorneos/PieTorneos';
import LogoGmatchNegroNuevo from '../../Imagenes/LogoGmatchNegroNuevo.png';
import MAPFRE from '../../Imagenes/Logo MAPFRE_H RGB_B.png';
import RMCT from '../../Imagenes/MCT_REAL_pos.png'
import ORANGE from '../../Imagenes/Orange_2.png';
import RFET from '../../Imagenes/Logo RFET.png';
import { filtraTorneo_id } from "../../Utils/Utils";
import PartidosContainer from './PartidosContainer';

export const Torneo = ({ id_torneo, num_torneos }) => {
  const [infoTorneo, setInfoTorneo] = useState("");
  const getInfo = () => {
    fetch("https://gmatchapp.com/api/v1/torneos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const dataFiltered = filtraTorneo_id(data, id_torneo);
        setInfoTorneo({ Torneo: dataFiltered });
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getInfo();
  }, []);
  let nombre = ''
  if (infoTorneo) {
    const {Torneo} = infoTorneo;
    nombre = Torneo[0].nombre;
  }
  const ancho_pantalla = window.screen.width;
  return (
    <div className={`Torneo ${num_torneos===1?'only1':''}`}>
      <div className="Torneo__containerPartido ">
        {((num_torneos && num_torneos>1) || (ancho_pantalla>1200)) && (
          <div className="Torneo__containerPartido__nombreSolitario">
            {nombre}
          </div>
        )}
        <PartidosContainer
          torneo_id={id_torneo}
          nombre={nombre}
          num_torneos={num_torneos}/>
          {ancho_pantalla<=1200 && (
            <div className="Torneo__containerPartido__logos">
              <div className="Torneo__containerPartido__logos--item"><img  className="mapfre" src={MAPFRE} /></div>
              <div className="Torneo__containerPartido__logos--item"><img  className="rmct" src={RMCT} /></div>
              <div className="Torneo__containerPartido__logos--item"><img  className="mapfre" src={ORANGE} /></div>
              <div className="Torneo__containerPartido__logos--item"> <img  className="rfet" src={RFET} /></div>
          </div>
          )}
          
           
      </div>
      {num_torneos && num_torneos===1 && ancho_pantalla<1200 && (
        <PieTorneos/>
      )}
    </div>
  );
};

export default Torneo;
