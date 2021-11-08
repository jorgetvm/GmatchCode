import React, { useState, useEffect } from "react";
import moment from 'moment';

import "./Torneo.scss";
import PartidosPadelContainer from '../PartidosPadelContainer/PartidosPadelContainer';
import DatePickerContainer from '../DatePickerContainer';
import PieTorneos from '../../Components/PieTorneos/PieTorneos';
import { filtraTorneo_id } from "../../Utils/Utils";
import PartidosContainer from './PartidosContainer';

export const Torneo = ({ id_torneo }) => {
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
  return (
    <div className="Torneo">
      <div className="Torneo__containerPartido ">
        {/* <DatePickerContainer onChange={onChange} locale='es' /> */}
        <PartidosContainer
          torneo_id={id_torneo}
          nombre={nombre}/>
      </div>
      <PieTorneos/>
    </div>
  );
};

export default Torneo;
