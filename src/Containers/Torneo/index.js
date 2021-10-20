import React, { useState, useEffect } from "react";

import "./Torneo.scss";
import PartidosPadelContainer from '../PartidosPadelContainer/PartidosPadelContainer';
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
  return (
    <div className=" MainContainer_Padel">
      <div className=" maincontainer2 padding0 ">
        <PartidosContainer
          torneo_id={id_torneo}
          nombre={nombre}/>
      </div>
    </div>
  );
};

export default Torneo;
