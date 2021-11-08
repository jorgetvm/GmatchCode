import React, { useState, useEffect } from "react";
import moment from 'moment';

import "./Torneo.scss";
import PartidosPadelContainer from '../PartidosPadelContainer/PartidosPadelContainer';
import DatePickerContainer from '../DatePickerContainer';
import PieTorneos from '../../Components/PieTorneos/PieTorneos';
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
  const onChange = (Date) =>{
    
    console.log(Date)
    const SelectedDate = moment(Date)
    console.log(SelectedDate.date())
    console.log(SelectedDate.month()+1)
    console.log(SelectedDate.year())
  }
  const ancho_pantalla = window.screen.width;
  return (
    <div className={`Torneo ${num_torneos===1?'only1':''}`}>
      <div className="Torneo__containerPartido ">
        {/* <DatePickerContainer onChange={onChange} locale='es' /> */}
        {((num_torneos && num_torneos>1) || (ancho_pantalla>1200)) && (
          <div className="Torneo__containerPartido__nombreSolitario">
            {nombre}
          </div>
        )}
        <PartidosContainer
          torneo_id={id_torneo}
          nombre={nombre}
          num_torneos={num_torneos}/>
      </div>
      {num_torneos && num_torneos===1 && ancho_pantalla<1200 && (
        <PieTorneos/>
      )}
    </div>
  );
};

export default Torneo;
