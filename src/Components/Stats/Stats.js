import React, { Component, Fragment } from 'react';
import pelota from '../../Imagenes/pelota.png';
import MCT_REAL_neg from '../../Imagenes/MCT_REAL_neg.png';
import GMatch_NEW_WHITE from '../../Imagenes/GMatch_NEW_WHITE.png';
import Siux_white from '../../Imagenes/Siux_white.png';
import LOGO_FPRM_white from '../../Imagenes/LOGO_FPRM_white.png';
import MiraDigital_white from '../../Imagenes/MiraDigital_white.png';
import moment from 'moment';
import './Stats.css';



class Stats extends Component {

    constructor(props) {
        super(props)
		this.state = {
            id:'',
            Partido: []
		}
       
    }

 

    render(){
console.log("stats_tv")

        const { partido } = this.props;
  
        const infoPartido =partido;
        
const {resultado,arbitro,torneo} = infoPartido;
var nombreTorneo;
if(torneo){
    nombreTorneo=torneo.nombre;
}else{
    nombreTorneo="Campeonato de España";
}



var pista,jugador1,jugador2,nombreTorneo,ronda,juegos_j1,juegos_j2,acesj1,acesj2,doblesj1,doblesj2,puntosj1,puntosj2;

if(resultado){
console.log(resultado)
    jugador1=infoPartido.jugadores[0].nombre;
    jugador2=infoPartido.jugadores[1].nombre;

    pista=infoPartido.pista;
    ronda=infoPartido.ronda;
    
    puntosj1=resultado.stats_puntos_j1;
    puntosj2=resultado.stats_puntos_j2;

    acesj1=resultado.stats_aces_j1;
    acesj2=resultado.stats_aces_j2;

    doblesj1=resultado.stats_doble_faltas_j1;
    doblesj2=resultado.stats_doble_faltas_j2;

    juegos_j1=resultado.juegos_j1;
    juegos_j2=resultado.juegos_j2;

   
}



     
        return (
        <Fragment>

            <div className="pista">
                <div className="pista2">{`Pista ${pista}`}</div>
                <div className="pista2">{`${nombreTorneo}`}</div>
                <div className="pista2">{`${ronda}`}</div>    
            </div>
            <div className="set_actual"> 1º SET </div>
   
    <div className="stats">
        <div className="nombres">
            <span className="nombre_jugador">{`${jugador1}`}</span>
            <span className="c_central">{` ${juegos_j1} - ${juegos_j2}`  }   </span>
            <span className="nombre_jugador">{`${jugador2}`}</span>
        </div>
        <div className="estaditicas">
            <span className="stats_jugador">{`${acesj1}`}</span>
            <span className="c_central"> ACES </span>
            <span className="stats_jugador">{`${acesj2}`}</span>
        </div>
        <div className="estaditicas">
            <span className="stats_jugador">{`${doblesj1}`}</span>
            <span className="c_central"> D. FALTAS</span>
            <span className="stats_jugador">{`${doblesj2}`}</span>
        </div>
        <div className="estaditicas">
            <span className="stats_jugador">{`${puntosj1}`}</span>
            <span className="c_central"> P.GANADOS </span>
            <span className="stats_jugador">{`${puntosj2}`}</span>
        </div>
    </div>
		
        
		</Fragment>
        );		

}
}
export default Stats;