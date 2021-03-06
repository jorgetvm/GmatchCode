import React, { Component, Fragment } from 'react';
import pelota from '../../Imagenes/pelota.png';

import GMatch_NEW_WHITE from '../../Imagenes/GMatch_NEW_WHITE.png';
import head from '../../Imagenes/head.svg';
import LOGO_FPRM_white from '../../Imagenes/LOGO_FPRM_white.png';
import MiraDigital_white from '../../Imagenes/MiraDigital_white.png';
import joma from '../../Imagenes/joma.png';

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
var nombreTorneo;
if(torneo){
    nombreTorneo=torneo.nombre;
}else{
    nombreTorneo="Campeonato de España";
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
}/*else{
    /*jugador1="Rafa Nadal";
    jugador2="Roger Federer";
    pista="1";

    hora_prevista=moment.utc(hora_prevista).local().format('HH:mm');
    hora_inicio=moment.utc(hora_prevista).local().format('HH:mm');
    puntos_j1="15";
    juegos_j1="2";
    set1_j1="6";
    set2_j1="2";
    set3_j1="0";
    saque_actual=1;
    sets_j1=1;
    ganador=null;
    puntos_j2="30";
    juegos_j2="5";
    set1_j2="4";
    set2_j2="5";
    set3_j2="0";
    sets_j2=0; 
}*/

const ahora_h=moment.utc().local().format('HH');
   const ahora_m=moment().format('mm');
   const inicio=moment.utc(hora_inicio).format('HH');
   const inicio_h=moment.utc(hora_inicio).format('HH');
   const inicio_m=moment.utc(hora_inicio).local().format('mm');
console.log(hora_inicio);
const innicio=moment.utc(hora_inicio).format('YYYY/MM/DD HH:mm');
const innicio2=moment.utc(hora_inicio).local();
console.log('inicio' + innicio);
const inico2=moment.utc(innicio).format('YYYY/MM/DD HH:mm');
console.log('iniciow' + inico2);
const ahora=moment.utc().local();


console.log('ahora' + innicio2.diff(ahora,'minutes'));
const diferencia=moment.duration().subtract(innicio2);


console.log('diferencia' + moment.utc(diferencia).format('HH:mm'));
const ahoraa=moment.utc().local().format('YYYYMMDD HH:mm');
const innicio3=moment.utc(hora_inicio).format('YYYYMMDD HH:mm');
console.log('ahora ' + ahoraa + '; inicio: ' + innicio3);
var date  = moment(ahoraa, "YYYYMMDD HH:mm");
console.log(date.format('YYYYMMDD HH:mm'));
var horas_ = moment(innicio3, "YYYYMMDD HH:mm");
var minutos_ = moment(innicio3, "YYYYMMDD HH:mm");
var minutos_ = moment(innicio3, "YYYYMMDD HH:mm:ss");
console.log('horas_' + horas_.format('HH') + 'minutos_' + minutos_.format('mm'));
var horas = date.diff(horas_, "hours");
var minutos = date.diff(minutos_, "minutes");
var segundos = date.diff(minutos_, "seconds");
const horass=minutos/60;
const resto=minutos%60;
let min=Math.floor(segundos/60);

let h=Math.floor(min/60);
min=min-h*60;
console.log(segundos+' s '+min+' m ' + h +'h'); // "7d"
console.log(date.diff(minutos_, "minutes") + "m"); // "7m"
let mostrar_hora=false;
if(hora_inicio){

   const ahora_h=moment.utc().local().format('HH');
   const ahora_m=moment().format('mm');
   const inicio_h=moment.utc(hora_inicio).format('HH');
   const inicio_m=moment.utc(hora_inicio).local().format('mm');

    console.log(ahora_h);
    console.log(ahora_m);
    console.log(ahora_h-inicio_h);
    console.log(ahora_m-inicio_m);
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
}else{
    claseSaque1="iconoSaque_hidden";
}
if(sets_j1+sets_j2>=3){
    claseSaque2="iconoSaque_hidden";
    claseSaque1="iconoSaque_hidden";
}
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

            {/*<div className="divLogo"><img className="logo"src={MCT_REAL_neg}/></div>*/}
            
            {mostrar_hora && (<div className="tiempo"><i className="far fa-clock"></i>{` ${h} : ${min}`}</div>)}
       
        </div>
        </div>
        
        
		</Fragment>
        );		

}
}
export default Partido_tv;