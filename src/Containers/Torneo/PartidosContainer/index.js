import React, { useState, useEffect } from "react";
import {filtraPartidosDependsTorneoId, ordenaPartidos} from '../../../Utils/Utils';
import LogoGmatchNegroNuevo from '../../../Imagenes/LogoGmatchNegroNuevo.png';
import {normalizeInfoTorneo} from '../Normalizer/index';
import DetallePartidoTorneo from '../../../Components/DetallePartidoTorneo';
import "./PartidosContainer.scss";

export const PartidosContainer = ({ torneo_id, nombre }) => {
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
  if(infoPartidos){
    
console.log(infoPartidos)
  }
    
  return (
    <div className="PartidosContainer">
      <div className="PartidosContainer">
        <div className="PartidosContainer__divTituloLogo">
          <div className="PartidosContainer__divTituloLogo__logo">
            <img src={LogoGmatchNegroNuevo} />
          </div>
          <div className="PartidosContainer__divTituloLogo__titulo">
            {`${nombre}`}
          </div>
        </div>
      </div>
      {infoPartidos && infoPartidos.Partidos && infoPartidos.Partidos.map((partido,index) =>{
        return <DetallePartidoTorneo partido={partido} />
      })}

    </div>
  );
};

export default PartidosContainer;
