import React, { Component, Fragment } from 'react';
import pelota from '../../Imagenes/pelota.png';

import {
    getMatchDuration,
  } from "../../Utils/Utils";
import GMatch_NEW_WHITE from '../../Imagenes/GMatch_NEW_WHITE.png';
import rfet1 from '../../Imagenes/rfet1.png';
import rfet2 from '../../Imagenes/rfet2.jpg';
import rfet3 from '../../Imagenes/rfet3.png';
import rfet4 from '../../Imagenes/rfet4.png';
import rfet5 from '../../Imagenes/rfet5.png';
import MCT_REAL_neg from '../../Imagenes/MCT_REAL_neg.png';

import MiraDigital_white from '../../Imagenes/MiraDigital_white.png';



import moment from 'moment';
import './Partido_tv_led.css';



const Partido_tv_led = ({partido}) => {


    const { resultado,  arbitros, torneo } = partido;
    let nombreTorneo= "Campeonato de España";
    let nombreCLub= "REAL MURCIA CLUB DE TENIS 1919";
   

  
        
if(torneo && torneo.nombre){
    nombreTorneo=torneo.nombre;
}
        
if(torneo && torneo.descripcion){
    nombreCLub=torneo.descripcion;
}

var autoarbitraje=0;
var juegosj1,claseSaque2,claseSaque1;
var puntos_j1,juegos_j1,set1_j1,set2_j1,set3_j1,saque_actual,sets_j1,ganador,jugador1,jugador2,pista,ronda;
var puntos_j2,juegos_j2,set1_j2,set2_j2,set3_j2,sets_j2;
var hora_inicio,hora_prevista;
if( arbitros){
    if( arbitros[0].auto_arbitraje == 1){
        autoarbitraje=1;
    }else{
        autoarbitraje=0;
    }
}
 
if(resultado){
    jugador1=partido.jugadores[0].nombre;
    jugador2=partido.jugadores[1].nombre;
    pista=partido.pista;
    ronda=partido.ronda;
    hora_prevista=resultado.hora_prevista;
    hora_inicio=resultado.hora_inicio;
    puntos_j1=resultado.puntos_j1;
    juegos_j1=resultado.juegos_j1;
    set1_j1=resultado.set1_j1;
    set2_j1=resultado.set2_j1;
    set3_j1=resultado.set3_j1;
    saque_actual=resultado.saque_actual;
    sets_j1=resultado.sets_j1;
    ganador=resultado.ganador;
    puntos_j2=resultado.puntos_j2;
    juegos_j2=resultado.juegos_j2;
    set1_j2=resultado.set1_j2;
    set2_j2=resultado.set2_j2;
    set3_j2=resultado.set3_j2;
    sets_j2=resultado.sets_j2; 
}



let { horas, minutos } = getMatchDuration(hora_inicio);

let mostrar_hora=false;
if(hora_inicio){
    mostrar_hora=true;
}
        
if(saque_actual===1){
    claseSaque2="iconoSaque_hidden";
    claseSaque1="";
}else{
    claseSaque1="iconoSaque_hidden";
    claseSaque2="";
}
if(sets_j1+sets_j2>=3){
    claseSaque2="iconoSaque_hidden";
    claseSaque1="iconoSaque_hidden";

}

let pj1;
let pj2;

   if (autoarbitraje==1) {
    pj1=sets_j1;
    pj2=sets_j2;
   }else{
    pj1=puntos_j1;
    pj2=puntos_j2;
   }
        return (
        <div className="contianerPartidoTvLed">
            <div className="nombretorneoLed ">    
                <div className="nombreTor">{`${nombreTorneo}`}</div>
            </div>
            <div className="resultadosTvLed">
                <div className="nombresTvLed texto_nombresLed">
                    <div className="jugador1TvLed">
                        <div className="jugadorTvLed">
                            <div className="saqueLed "><img className={`pelotaTvLed ${claseSaque1}`} src={pelota} alt=""/></div>
                            <span className="nombre_jugadorLed">{jugador1}</span>
                        </div>
                        <div className="resultadoTvLed">
                            <div className="grupo1Led">
                                <div className="setTvLed ">{set1_j1}</div>
                                <div className="setTvLed ">{set2_j1}</div>
                                <div className="setTvLed">{set3_j1}</div>
                            </div>
                            <div className="grupo2Led">
                                <div className="puntosTvLed ">{pj1}</div>
                            </div>
                        </div>
                    </div>
                    <div className="jugador2TvLed">
                        <div className="jugadorTvLed">
                            <div className="saqueLed "><img className={`pelotaTvLed ${claseSaque2}`} src={pelota} alt=""/></div>
                            <span className="nombre_jugadorLed">{jugador2}</span>
                        </div>
                        <div className="resultadoTvLed">
                            <div className="grupo1Led">
                                <div className="setTvLed ">{set1_j2}</div>
                                <div className="setTvLed ">{set2_j2}</div>
                                <div className="setTvLed">{set3_j2}</div>
                            </div>
                            <div className="grupo2Led">
                                <div className="puntosTvLed ">{pj2}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="publicidadLed">
                <div className="divLogoLed"><img className="logoTvLed"   src={GMatch_NEW_WHITE}/></div>
                <div className="nombreClub">{`${nombreCLub}`}</div>
                <div>{mostrar_hora && (<div className="tiempoTvLed">{` ${horas}:${minutos}`}</div>)}</div>


            </div>



        </div>
        
        );		

}

export default Partido_tv_led;