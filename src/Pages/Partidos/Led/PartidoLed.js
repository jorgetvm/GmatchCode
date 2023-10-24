// PartidoLedPage.js
import React, { useState, useEffect } from 'react';
import { obtenerValorParametro } from '../../../Utils/Utils';
import Partido_tv_led from '../../../Components/Partido_tv_led/Partido_tv_led';
import { API_PARTIDOS, TIME_API_PARTIDOS } from '../../../Utils/Constants';

export const PartidoLedPage = () => {
  const [infoPartido, setInfoPartido] = useState(null);
  const [idPartido, setIdPartido] = useState(obtenerValorParametro('id'));

  let infopartidoTv = null;


  const updateData = () => {
    setTimeout(() => {
      updateData();
    }, TIME_API_PARTIDOS);

    fetch(`${API_PARTIDOS}/${idPartido}`, {})
      .then((response) => response.json())
      .then((data) => {
        setInfoPartido(data);
      })
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    updateData();
  }, [idPartido]);

  if (infoPartido) {
    infopartidoTv = infoPartido; 
  }

  return (
    <section className="PartidoLedPage">
      {infopartidoTv && (
        <Partido_tv_led partido={infopartidoTv} />
      )}
    </section>
  );
};

export default PartidoLedPage;
