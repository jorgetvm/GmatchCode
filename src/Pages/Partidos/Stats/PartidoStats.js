// StatsPage.js
import React, { useState, useEffect } from 'react';
import { obtenerValorParametro } from '../../../Utils/Utils';
import Stats from '../../../Components/Stats/Stats';
import { API_PARTIDOS, TIME_API_PARTIDOS } from '../../../Utils/Constants';

export const StatsPage = () => {
  const [infoPartido, setInfoPartido] = useState(null);
  const [idPartido, setIdPartido] = useState(obtenerValorParametro('id'));

  let infopartidoTv = null;

  const updateData = () => {
    setTimeout(() => {
      updateData();
    }, TIME_API_PARTIDOS);

    fetch(API_PARTIDOS, {})
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
    infoPartido.forEach((partido) => {
      if (idPartido === partido.id) {
        infopartidoTv = partido;
      }
    });
  }

  console.log(infopartidoTv);
  return (
    <section className="StatsPage">
      {infopartidoTv && (
      <Stats partido={infopartidoTv} />
      )}
    </section>
  );
};

export default StatsPage;
