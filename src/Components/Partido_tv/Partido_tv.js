import React, { Component, Fragment } from 'react';
import moment from 'moment';
import pelota from '../../Imagenes/pelota.png';

import GMatch_NEW_WHITE from '../../Imagenes/GMatch_NEW_WHITE.png';
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


import {
  getMatchDuration,
} from '../../Utils/Utils';

import MiraDigital_white from '../../Imagenes/MiraDigital_white.png';

import pista3 from '../../Imagenes/pista3.jpg';

import './Partido_tv.scss';


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

    const { resultado, arbitro, torneo, torneo_media, deporte } = infoPartido;
    const {imagen_logo, imagenes_patrocinadores, club_logo} = torneo_media;
    let nombreTorneo; let genero;
    if (torneo) {
      nombreTorneo = torneo.nombre;
      genero = torneo.genero;
    } else {
      nombreTorneo = 'Campeonato de España';
      genero = 'Masculino';
    }
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
      console.log(resultado);
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
    return (
      <>
        <div className="contianerPartidoTv">
        <div className="logoPista">
          <img className="logo_pista" src={GMatch_NEW_WHITE} />
          <div className={`nombretorneo texto_info ${!(club_logo && club_logo.length > 0) ? 'nombretorneo--ancho' : ''}`}>
            <div className="nombre_hora">
              <div>{`${nombreTorneo}`}</div>
              <div>{mostrar_hora && (<div className="tiempoTv">{` ${horas}:${minutos}`}</div>)}</div>
            </div>
          </div>
          {club_logo && club_logo.length > 0 && (
            club_logo.map((eachLogo) => {
              return <img className="logo" src={eachLogo} />
            })
            )}
        </div>
        
          {/* <div className="logoPista">
            <img className="logo_pista" src={GMatch_NEW_WHITE} />
            <div className="pistaTv texto_info">{`Pista ${pista}`}</div>
          </div> */}
          
          <div className="resultadosTv">
            <div className="nombresTv texto_nombres">
              <div className="jugador1Tv">
                <div className="jugadorTv">
                  <div className="saque "><img className={`pelotaTv ${claseSaque1}`} src={pelota} alt="" /></div>
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
              <div className="jugador2Tv">
                <div className="jugadorTv">
                  <div className="saque "><img className={`pelotaTv ${claseSaque2}`} src={pelota} alt="" /></div>
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

          
          <div className="publicidad">
          {imagenes_patrocinadores && imagenes_patrocinadores.length > 0 && (
            imagenes_patrocinadores.map((eachLogo) => {
              return <div className="divLogo"><img className="logoTv " src={eachLogo} /></div>
            })
            )}
            {/* <div className="divLogo"><img className="logoTv " src={RegiodeMurcia_white} /></div>
            <div className="divLogo"><img className="logoTv4 " src={CSD_white} /></div>
            <div className="divLogo"><img className="logoTv4" src={CostaCalida_white} /></div>
            <div className="divLogo"><img className="logoTv5" src={UCAM25} /></div> */}
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
      </>
    );
  }
}
export default Partido_tv;
