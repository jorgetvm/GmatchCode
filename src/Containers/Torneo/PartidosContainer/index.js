import React, { useState, useEffect } from "react";
import {filtraPartidosDependsTorneoId, ordenaPartidos} from '../../../Utils/Utils';
import LogoGmatchNegroNuevo from '../../../Imagenes/LogoGmatchNegroNuevo.png';
import {normalizeInfoTorneo} from '../Normalizer/index';
import DetallePartidoTorneo from '../../../Components/DetallePartidoTorneo';
import "./PartidosContainer.scss";

export const PartidosContainer = ({ torneo_id, nombre, num_torneos }) => {
  const [infoPartidos, setInfoPartidos] = useState("");
  const getInfo = () => {
    fetch("https://gmatchapp.com/api/v1/partidos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInfoPartidos({ Partidos: normalizeInfoTorneo(data,torneo_id) });
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getInfo();
    setInterval(() => {
      getInfo();
    }, 10000);
  }, []);
  const ancho_pantalla = window.screen.width;

    
  return (
    <div className="PartidosContainer">
      {num_torneos && num_torneos <=1 && ancho_pantalla<1200  && (
        <div className="PartidosContainer__divTituloLogo">
          
        <div className="PartidosContainer__divTituloLogo__logo" >
          <a href="http://info.gmatchapp.com">
            <img src={LogoGmatchNegroNuevo} />
          </a>
        </div>
        <div className="PartidosContainer__divTituloLogo__titulo">
          {`${nombre}`}
        </div>
      </div>
      )}
      {infoPartidos && infoPartidos.Partidos && (
        <div className="PartidosContainer__Partidos">
          {infoPartidos.Partidos.map((partido,index) =>{
            return <DetallePartidoTorneo partido={partido} />
          })}
        </div>
      )}

    </div>
  );
};

export default PartidosContainer;
