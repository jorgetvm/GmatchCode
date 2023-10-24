// PartidoObsPage.js
import React, { useState, useEffect } from 'react';
import MainContainer from '../../../Containers/MainContainer/MainContainer';
import { obtenerValorParametro, getTorneosId } from '../../../Utils/Utils';
import Partido_obs from '../../../Components/Partido_obs/Partido_obs';
import { API_PARTIDOS, TIME_API_PARTIDOS } from '../../../Utils/Constants';
import './PartidoObs.scss';
export const PartidoObsPage = () => {
  const [infoPartido, setInfoPartido] = useState(null);
  const [idPartido, setIdPartido] = useState(obtenerValorParametro('id'));

  let infopartido_tv = null;

  useEffect(() => {
    updateData();
  }, [idPartido]);

  const updateData = () => {
    setTimeout(() => {
      updateData();
    }, TIME_API_PARTIDOS);

    fetch(`${API_PARTIDOS}/${idPartido}`, {})
      .then((response) => response.json())
      .then((data) => {
        debugger;
        setInfoPartido(data);
      })
      .catch((error) => console.log('error', error));
  };


  if (infoPartido) {
    infopartido_tv = infoPartido;
  }
  return (
    <div className="PartidoObsPage">
      {infopartido_tv && (
      <Partido_obs partido={infopartido_tv} />
      )}
    </div>
  );
};

export default PartidoObsPage;
