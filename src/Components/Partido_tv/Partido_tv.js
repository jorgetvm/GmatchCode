import React, { Component, Fragment } from 'react';
import pelota from '../../Imagenes/pelota.png';

import GMatch_NEW_WHITE from '../../Imagenes/GMatch_NEW_WHITE.png';
import LOGO_FPRM_white from '../../Imagenes/LOGO_FPRM_white.png';
import Dominos from '../../Imagenes/Dominos.png';
import rfet3 from '../../Imagenes/rfet3.png';
import rfet4 from '../../Imagenes/rfet4.png';
import rfet5 from '../../Imagenes/rfet5.png';
import MCT_REAL_neg from '../../Imagenes/MCT_REAL_neg.png';

import MiraDigital_white from '../../Imagenes/MiraDigital_white.png';

import pista3 from '../../Imagenes/pista3.jpg';

import moment from 'moment';
import './Partido_tv.css';



class Partido_tv extends Component {

    constructor(props) {
        super(props)
		this.state = {
            id:'',
            Partido: []
		}
       
    }

 

    render(){
console.log("partido_tv")

        const { partido } = this.props;
  
        const infoPartido =partido;
        
const {resultado,arbitro,torneo} = infoPartido;
var nombreTorneo,genero;
if(torneo){
    nombreTorneo=torneo.nombre;
    genero=torneo.genero;
}else{
    nombreTorneo="Campeonato de España";
    genero="Masculino";
}
var autoarbitraje=0;
let horade_inicio;
//const {puntos_j1} = resultado;
var juegosj1,claseSaque2,claseSaque1;
var puntos_j1,juegos_j1,set1_j1,set2_j1,set3_j1,saque_actual,sets_j1,ganador,jugador1,jugador2,pista,ronda;
var puntos_j2,juegos_j2,set1_j2,set2_j2,set3_j2,sets_j2;
var hora_inicio,hora_prevista;
if(arbitro){
    if(arbitro.auto_arbitraje ==1){
        autoarbitraje=1;
    }else{
        autoarbitraje=0;
    }
}
if(resultado){
console.log(resultado)
    jugador1=infoPartido.jugadores[0].nombre;
    jugador2=infoPartido.jugadores[1].nombre;
    pista=infoPartido.pista;
    ronda=infoPartido.ronda;
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


const ahoraa=moment.utc().format('YYYYMMDD HH:mm');
const innicio3=moment.utc(hora_inicio).format('YYYYMMDD HH:mm');
var date  = moment(ahoraa, "YYYYMMDD HH:mm");
var horas_ = moment(innicio3, "YYYYMMDD HH:mm");
var minutos_ = moment(innicio3, "YYYYMMDD HH:mm:ss");
var horas = date.diff(horas_, "hours");
var minutos = date.diff(minutos_, "minutes");
var segundos = date.diff(minutos_, "seconds");
let min=Math.floor(segundos/60);

let h=Math.floor(min/60);
min=min-h*60;
let mostrar_hora=false;
if(hora_inicio){
    mostrar_hora=true;
}


if (min<10){
    min=`0${min}`;
} 

if (h<10){
    h=`0${h}`;
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
console.log('claseSaque1' +claseSaque1 + '\n' +'claseSaque2' +claseSaque2);

let pj1;
let pj2;
console.log(horade_inicio)

   if (autoarbitraje==1) {
    pj1=sets_j1;
    pj2=sets_j2;
   }else{
    pj1=puntos_j1;
    pj2=puntos_j2;
   }
     
        return (
        <Fragment>
        <div className="contianerPartidoTv">
            <div className="logoPista">
                <img className="logo_pista"  src={GMatch_NEW_WHITE}/>
                <div className="pistaTv texto_info">{`Pista ${pista}`}</div>
            </div>
            <div className="nombretorneo texto_info">
                <div className="nombre_hora">
                    <div>{`${nombreTorneo}`}</div>
                    <div>{mostrar_hora && (<div className="tiempoTv">{` ${h}:${min}`}</div>)}</div>
                </div>
            </div>
            <div className="resultadosTv">
                <div className="nombresTv texto_nombres">
                    <div className="jugador1Tv">
                        <div className="jugadorTv">
                            <div className="saque "><img className={`pelotaTv ${claseSaque1}`} src={pelota} alt=""/></div>
                            <span className="nombre_jugador">{jugador1}</span>
                        </div>
                        <div className="resultadoTv">
                            <div className="grupo1">
                                <div className="setTv ">{set1_j1}</div>
                                <div className="setTv ">{set2_j1}</div>
                                <div className="setTv">{set3_j1}</div>
                            </div>
                            <div className="grupo2">
                                <div className="puntosTv ">{pj1}</div>
                            </div>
                        </div>
                    </div>
                    <div className="jugador2Tv">
                        <div className="jugadorTv">
                            <div className="saque "><img className={`pelotaTv ${claseSaque2}`} src={pelota} alt=""/></div>
                            <span className="nombre_jugador">{jugador2}</span>
                        </div>
                        <div className="resultadoTv">
                            <div className="grupo1">
                                <div className="setTv ">{set1_j2}</div>
                                <div className="setTv ">{set2_j2}</div>
                                <div className="setTv">{set3_j2}</div>
                            </div>
                            <div className="grupo2">
                                <div className="puntosTv ">{pj2}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="publicidad">
                <div className="divLogo"><img className="logoTv"   src={GMatch_NEW_WHITE}/></div>
                <img className="divLogo"src="https://cdn-magento2-static.head.com/version1618337719/frontend/Head/base/es_ES/images/logo.svg" title="" alt="" width="250px" height="auto"/>
                <div className="divLogo"><img className="logoTv dominos"   src={Dominos}/></div>
                <div className="divLogo"><img className="logoTv"   src={LOGO_FPRM_white}/></div>
                <div className="divLogo"><img className="logoTv"  src={MiraDigital_white}/></div>

            </div>



        </div>
        {/*
        <div className="partidotv">
            <div className="pista">
                <div className="pista2">{`Pista ${pista}`}</div>
                <div className="pista2">{`${nombreTorneo}`}</div>
                <div className="pista2">{`${ronda}`}</div>    
            </div>
    
            <div className="contenedor">
                <div className="jugador">
                    <div className="nombre">
                    <span className="nombre_jugador">{jugador1}</span>
                    <div className="saque tamaño_puntos"><img className={`pelota ${claseSaque1}`} src={pelota} alt=""/></div>
                    <div className="puntos tamaño_puntos">{pj1}</div>
                    </div>
                
                    
                    <div className="set tamaño_puntos">{set1_j1} <span className="set2">Set 1</span></div>
                    <div className="set tamaño_puntos">{set2_j1} <span className="set2">Set 2</span></div>
                    <div className="set tamaño_puntos">{set3_j1} <span className="set2">Set 3</span></div>
                </div>
                <div className="jugador paddingFix">
                    <div className="nombre">
                    <span className="nombre_jugador">{jugador2}</span>
                    <div className="saque tamaño_puntos"><img className={`pelota ${claseSaque2}`} src={pelota} alt=""/></div>
                    <div className="puntos tamaño_puntos">{pj2}</div>
                    </div>
                    
                
                    <div className="set tamaño_puntos">{set1_j2}</div>
                    <div className="set tamaño_puntos">{set2_j2}</div>
                    <div className="set tamaño_puntos">{set3_j2}</div>
                </div>
            </div>
            <div className="logo-partido">
            <div className="logos">
                <div className="divLogo"><img className="logo_padel"  src={GMatch_NEW_WHITE}/></div>
                <div className="divLogo"><img className="logo_padel"   src={head}/></div>
                <div className="divLogo"><img className="logo_padel3" src={LOGO_FPRM_white}/></div>
                <div className="divLogo"><img className="logo_padel"  src={joma}/></div>
                <div className="divLogo"><img className="logo_padel2"  src={MiraDigital_white}/></div>

                {/*<div className="divLogo"><img className="logo"src={MCT_REAL_neg}/></div>*
                
                {mostrar_hora && (<div className="tiempo"><i className="far fa-clock"></i>{` ${h} : ${min}`}</div>)}
        
            </div>
            </div>
        </div>
        
        */}
		</Fragment>
        );		

}
}
export default Partido_tv;