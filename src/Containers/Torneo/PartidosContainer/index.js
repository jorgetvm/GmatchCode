import React, { useState, useEffect } from 'react';
import { filterPartidosByDate, checkNextDaymatchs, checkPrevDaymatchs } from '../../../Utils/Utils';
import LogoGmatchNegroNuevo from '../../../Imagenes/LogoGmatchNegroNuevo.png';
import { normalizeInfoTorneo } from '../Normalizer/index';
import DetallePartidoTorneo from '../../../Components/DetallePartidoTorneo';
import PieTorneos from '../../../Components/PieTorneos/PieTorneos';
import './PartidosContainer.scss';
import Calendar from '../../../Components/Calendar';

export const PartidosContainer = ({ torneo_id, nombre, logos, logosTorneo }) => {
  const [infoPartidos, setInfoPartidos] = useState('');
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getUTCMonth() + 1);
  const [year, setYear] = useState(date.getUTCFullYear());
  const [partidosNormalizados, setPartidosNormalizados] = useState([]);
  const getInfo = () => {
    fetch('https://gmatchapp.com/api/v1/partidos')
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
    }
  };
  useEffect(() => {
    setDay(date.getUTCDate());
    setMonth(date.getUTCMonth());
    getInfo();
  }, [date]);
  return (
    <div className="PartidosContainer">
      <div className="PartidosContainer__divTituloLogo">
        <div className="PartidosContainer__divTituloLogo__logo">
          <a href="http://info.gmatchapp.com">
            <img src={LogoGmatchNegroNuevo} alt="Gmatch" />
          </a>
        </div>
        <div className="PartidosContainer__divTituloLogo__titulo">
          {`${nombre}`}
        </div>
        {logosTorneo && (
          <div className="PartidosContainer__divTituloLogo__logo PartidosContainer__divTituloLogo__logo--aux">
            <img src={logosTorneo} alt="Gmatch--logo" />
          </div>
        )}
      </div>
      {(day && month) && (
        <Calendar
          nextDayOnClick={nextDayOnClick}
          netxDayMatchs={checkNextDaymatchs(infoPartidos, date)}
          prevDayOnClick={prevDayOnClick}
          prevDayMatchs={checkPrevDaymatchs(infoPartidos, date)}
          day={day}
          month={month}
          diaSemana={date.getDay()} />
      )}
      {partidosNormalizados && partidosNormalizados.length > 0 && (
        <div className="PartidosContainer__Partidos">
          {partidosNormalizados.map((partido, index) => <DetallePartidoTorneo partido={partido}/>)}
        </div>
      )}
      {!partidosNormalizados  || (partidosNormalizados && partidosNormalizados.length === 0 ) && (
        <div className="PartidosContainer__noInfo">
          <div>
            No hay partidos todavía, vuelva proximamente.
          </div>
        <a href="https://www.gifsanimados.org/cat-tenis-172.htm"><img src="https://www.gifsanimados.org/data/media/172/tenis-imagen-animada-0056.gif" border="0" alt="tenis-imagen-animada-0056" /></a>
        </div>
      )}
      {logos && logos.length > 0 && (
        <PieTorneos logos={logos} />
      )}
      
     
    </div>
  );
};

export default PartidosContainer;
