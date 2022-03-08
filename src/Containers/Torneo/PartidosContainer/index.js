import React, { useState, useEffect } from 'react';
import { filterPartidosByDate, checkNextDaymatchs, checkPrevDaymatchs } from '../../../Utils/Utils';
import LogoGmatchNegroNuevo from '../../../Imagenes/LogoGmatchNegroNuevo.png';
import { normalizeInfoTorneo } from '../Normalizer/index';
import DetallePartidoTorneo from '../../../Components/DetallePartidoTorneo';
import './PartidosContainer.scss';
import Calendar from '../../../Components/Calendar';

export const PartidosContainer = ({ torneo_id, nombre, num_torneos }) => {
  const [infoPartidos, setInfoPartidos] = useState('');
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getUTCMonth() + 1);
  const [year, setYear] = useState(date.getUTCFullYear());
  const [partidosNormalizados, setPartidosNormalizados] = useState([]);
  const getInfo = () => {
    fetch('https://test.gmatchapp.com/api/v1/partidos')
      .then((response) => response.json())
      .then((data) => {
        setInfoPartidos({ Partidos: normalizeInfoTorneo(data, torneo_id) });
      })
      .catch((error) => console.log('error', error));
  };
  useEffect(() => {
    getInfo();
    setInterval(() => {
      getInfo();
    }, 10000);
  }, []);
  const anchoPantalla = window.screen.width;

  useEffect(() => {
    if (infoPartidos && infoPartidos.Partidos) {
      setPartidosNormalizados(filterPartidosByDate(infoPartidos, day, month, year));
    }
  }, [infoPartidos, infoPartidos.Partidos]);

  const nextDayOnClick = () => {
    if (checkNextDaymatchs(infoPartidos, date)) {
      const nextDate = new Date(date);
      nextDate.setDate(nextDate.getDate() + 1);
      setDate(nextDate);
    }
  };
  const prevDayOnClick = () => {
    if (checkPrevDaymatchs(infoPartidos, date)) {
      const nextDate = new Date(date);
      nextDate.setDate(nextDate.getDate() - 1);
      setDate(nextDate);
    }else return null
  };
  useEffect(() => {
    setDay(date.getUTCDate());
    setMonth(date.getUTCMonth() + 1);
    getInfo();
  }, [date]);

  return (
    <div className="PartidosContainer">
      {num_torneos && num_torneos <= 1 && anchoPantalla < 1200 && (
        <div className="PartidosContainer__divTituloLogo">

          <div className="PartidosContainer__divTituloLogo__logo">
            <a href="http://info.gmatchapp.com">
              <img src={LogoGmatchNegroNuevo} alt="Gmatch" />
            </a>
          </div>
          <div className="PartidosContainer__divTituloLogo__titulo">
            {`${nombre}`}
          </div>
        </div>
      )}

      <section>
        {(day && month) && (
        <Calendar nextDayOnClick={nextDayOnClick} prevDayOnClick={prevDayOnClick} day={day} month={month} diaSemana={date.getDay()} />
        )}
        {partidosNormalizados && partidosNormalizados.length > 0 && (
        <div className="PartidosContainer__Partidos">
          {partidosNormalizados.map((partido, index) => <DetallePartidoTorneo partido={partido} />)}
        </div>
        )}
      </section>


    </div>
  );
};

export default PartidosContainer;
