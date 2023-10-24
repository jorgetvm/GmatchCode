import React, { Component, Fragment } from 'react';
import moment from 'moment';
import pelota from '../../Imagenes/pelota.png';
import pngegg from '../../Imagenes/pngegg.png';
import { SPORT_TYPES } from '../../Utils/Constants';
import LOGO_FPRM_white from '../../Imagenes/LOGO_FPRM_white.png';
import Dominos from '../../Imagenes/Dominos.png';
import rfet3 from '../../Imagenes/rfet3.png';
import rfet4 from '../../Imagenes/rfet4.png';
import rfet5 from '../../Imagenes/rfet5.png';
import CEDU_white from '../../Imagenes/Logos_CEU_blancos_png/CEDU_white.png';
import MCT_REAL_neg from '../../Imagenes/MCT_REAL_neg.png';
import CostaCalida_white from '../../Imagenes/Logos_CEU_blancos_png/CostaCalida_white.png';
import CSD_white from '../../Imagenes/Logos_CEU_blancos_png/CSD_white.png';
import RegiodeMurcia_white from '../../Imagenes/Logos_CEU_blancos_png/RegiodeMurcia_white.png';
import UCAM25 from '../../Imagenes/Logos_CEU_blancos_png/UCAM25.png';
import Cabecera from './Cabecera';
import Footer from './Footer';

import {
  getMatchDuration,
} from '../../Utils/Utils';

import MiraDigital_white from '../../Imagenes/MiraDigital_white.png';

import pista3 from '../../Imagenes/pista3.jpg';

import './Partido_tv.scss';
import { StatsModal } from './StatsModal';


class Partido_tv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      Partido: [],
    };
  }


  render() {
    console.log('partido_tv');
 
    const { partido } = this.props;
    const infoPartido = partido;
    const { resultado, arbitro, torneo, torneo_media, deporte, tipo_partido, estado } = infoPartido;
    const {  stats_aces_j1, stats_aces_j2, stats_doble_faltas_j1, stats_doble_faltas_j2, stats_puntos_j1, stats_puntos_j2} = resultado;
    const {imagen_logo, imagenes_patrocinadores, club_logo} = torneo_media;
    let nombreTorneo; let genero;
    if (torneo) {
      nombreTorneo = torneo.nombre;
      genero = torneo.genero;
    } else {
      nombreTorneo = 'Campeonato de España';
      genero = 'Masculino';
    }
    const tipoPartido = SPORT_TYPES[deporte];
    let autoarbitraje = 0;
    let horade_inicio;
    // const {puntos_j1} = resultado;
    let juegosj1; let claseSaque2; let claseSaque1;
    let puntos_j1; let juegos_j1; let set1_j1; let set2_j1; let set3_j1; let saque_actual; let sets_j1; let ganador; let jugador1; let jugador2; let pista; let ronda;
    let puntos_j2; let juegos_j2; let set1_j2; let set2_j2; let set3_j2; let sets_j2;
    let hora_inicio; let hora_prevista;
    if (arbitro) {
      if (arbitro.auto_arbitraje == 1) {
        autoarbitraje = 1;
      } else {
        autoarbitraje = 0;
      }
    }

    if (resultado) {
      jugador1 = infoPartido.jugadores[0].nombre;
      jugador2 = infoPartido.jugadores[1].nombre;
      pista = infoPartido.pista;
      ronda = infoPartido.ronda;
      hora_prevista = resultado.hora_prevista;
      hora_inicio = resultado.hora_inicio;
      puntos_j1 = resultado.puntos_j1;
      juegos_j1 = resultado.juegos_j1;
      set1_j1 = resultado.set1_j1;
      set2_j1 = resultado.set2_j1;
      set3_j1 = resultado.set3_j1;
      saque_actual = resultado.saque_actual;
      sets_j1 = resultado.sets_j1;
      ganador = resultado.ganador;
      puntos_j2 = resultado.puntos_j2;
      juegos_j2 = resultado.juegos_j2;
      set1_j2 = resultado.set1_j2;
      set2_j2 = resultado.set2_j2;
      set3_j2 = resultado.set3_j2;
      sets_j2 = resultado.sets_j2;
    }


    let mostrar_hora = false;
    if (hora_inicio) {
      mostrar_hora = true;
    }


    if (saque_actual === 1) {
      claseSaque2 = 'iconoSaque_hidden';
      claseSaque1 = '';
    } else {
      claseSaque1 = 'iconoSaque_hidden';
      claseSaque2 = '';
    }
    if (sets_j1 + sets_j2 >= 3 && deporte !== 3) {
      claseSaque2 = 'iconoSaque_hidden';
      claseSaque1 = 'iconoSaque_hidden';
    }

    let pj1;
    let pj2;

    if (autoarbitraje == 1) {
      pj1 = sets_j1;
      pj2 = sets_j2;
    } else {
      pj1 = puntos_j1;
      pj2 = puntos_j2;
    }
    const espaciosJ1 = jugador1.split(" ").length >2 ? 'textoPequeño' : '' ;
    const espaciosJ2 = jugador2.split(" ").length >2 ? 'textoPequeño' : '' ;
    const textoPequeño = espaciosJ1 || espaciosJ2;
    const { horas, minutos } = getMatchDuration(hora_inicio);
    const getPelotaSrc = (deporte)=> {
      let result = pelota;
      if (deporte !== 1 ){
        result = pngegg;
      }
      return result
    }
 
    return (
      <>
        <div className={`${tipoPartido} contianerPartidoTv `}>

         <Cabecera  
            club_logo={club_logo}
            nombreTorneo={nombreTorneo}
            horas={horas}
            minutos={minutos}
            mostrar_hora={mostrar_hora}
            />

          <div className="resultadosTv">
            <div className="nombresTv texto_nombres">
              <div className="jugador1Tv">
                <div className="jugadorTv">
                  <div className="saque "><img className={`pelotaTv ${claseSaque1}`} src={getPelotaSrc(deporte)} alt="" /></div>
                  <span className={`nombre_jugador ${textoPequeño}`}>{jugador1}</span>
                </div>
                <div className="resultadoTv">
                  {deporte !== 3 && (
                    <div className="grupo1">
                    <div className="setTv ">{set1_j1}</div>
                    <div className="setTv ">{set2_j1}</div>
                    <div className="setTv">{set3_j1}</div>
                  </div>
                  )}
                  {deporte === 3 && (
                    <div className="grupo1">
                    <div className="setTv ">{sets_j1}</div>
                  </div>
                  )}
                  <div className="grupo2">
                    <div className="puntosTv ">{pj1}</div>
                  </div>
                </div>
              </div>
              <hr className="separador"></hr>
              <div className="jugador2Tv">
                <div className="jugadorTv">
                  <div className="saque "><img className={`pelotaTv ${claseSaque2}`} src={getPelotaSrc(tipo_partido)} alt="" /></div>
                  <span className={`nombre_jugador ${textoPequeño}`}>{jugador2}</span>
                </div>
                <div className="resultadoTv">
                  {deporte !== 3 && (
                    <div className="grupo1">
                    <div className="setTv ">{set1_j2}</div>
                    <div className="setTv ">{set2_j2}</div>
                    <div className="setTv">{set3_j2}</div>
                  </div>
                  )}
                  {deporte === 3 && (
                    <div className="grupo1">
                    <div className="setTv ">{sets_j2}</div>
                  </div>
                  )}
                  <div className="grupo2">
                    <div className="puntosTv ">{pj2}</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <StatsModal 
            nombrej1={jugador1}
            nombrej2={jugador2}
            stats_aces_j1={stats_aces_j1}
            stats_aces_j2={stats_aces_j2}
            stats_doble_faltas_j1={stats_doble_faltas_j1}
            stats_doble_faltas_j2={stats_doble_faltas_j2}
            stats_puntos_j1={stats_puntos_j1}
            stats_puntos_j2={stats_puntos_j2}
            estado={estado}
          />
          <Footer imagenes_patrocinadores={imagenes_patrocinadores}/>
        </div>

      </>
    );
  }
}
export default Partido_tv;
