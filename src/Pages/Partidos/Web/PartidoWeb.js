// PartidoWebPage.js
import React, { useState, useEffect } from 'react';
import MainContainer from '../../../Containers/MainContainer/MainContainer';
import { obtenerValorParametro, getTorneosId } from '../../../Utils/Utils';
import Partido_tv from '../../../Components/Partido_tv/Partido_tv';
import { API_PARTIDOS, TIME_API_PARTIDOS } from '../../../Utils/Constants';
import { useDispatch } from 'react-redux';
import { actions } from '../../../reducers/main';
import { useSelector } from 'react-redux'


export const PartidoWebPage = () => {
  const [infoPartido, setInfoPartido] = useState(null);
  const [idPartido, setIdPartido] = useState(obtenerValorParametro('id'));
  const dispatch = useDispatch();
  // const { tournamentInfo } = useSelector((state) => state.main);
  dispatch(actions.getTournamentInfo(4));
  // console.log(tournamentInfo, 'tournamentInfo');
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
        setInfoPartido(data);
      })
      .catch((error) => console.log('error', error));
  };


  if (infoPartido) {
      if (idPartido === infoPartido.hashid) {
        infopartido_tv = infoPartido;
      }
  }

  console.log(infopartido_tv);
  return (
    <section className="PartidoWebPage">
      {infopartido_tv && (
      <Partido_tv partido={infopartido_tv} />
      )}
    </section>
  );
};

export default PartidoWebPage;
