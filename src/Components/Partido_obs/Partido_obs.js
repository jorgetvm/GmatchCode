import React, { Component, Fragment } from 'react';
import moment from 'moment';
import pelota from '../../Imagenes/pelota.png';
import MCT_REAL_neg from '../../Imagenes/MCT_REAL_neg.png';
import LogoGmatchNegroNuevo from '../../Imagenes/LogoGmatchNegroNuevo.png';
import './Partido_obs.css';


class Partido_obs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      Partido: [],
    };
  }


  render() {
    const { partido, obs } = this.props;

    const infoPartido = partido;

    const { resultado, arbitro, torneo, deporte } = infoPartido;
    let nombreTorneo;
    if (torneo) {
      nombreTorneo = torneo.nombre;
    } else {
      nombreTorneo = 'Campeonato de España';
    }
    let autoarbitraje = 0;
    let horade_inicio;
    // const {puntos_j1} = resultado;
    let juegosj1; let claseSaque2; let claseSaque1;
    let puntos_j1; let juegos_j1; let set1_j1; let set2_j1; let set3_j1; let saque_actual; let sets_j1; let ganador; let jugador1; let jugador2; let pista;
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
    if (obs) {
      document.body.setAttribute('class', 'obs_body');
    }
    const ahora_h = moment.utc().local().format('HH');
    const ahora_m = moment().format('mm');
    const inicio = moment.utc(hora_inicio).format('HH');
    const inicio_h = moment.utc(hora_inicio).format('HH');
    const inicio_m = moment.utc(hora_inicio).local().format('mm');
    console.log(hora_inicio);
    const innicio = moment.utc(hora_inicio).format('YYYY/MM/DD HH:mm');
    const innicio2 = moment.utc(hora_inicio).local();
    console.log(`inicio${innicio}`);
    const inico2 = moment.utc(innicio).format('YYYY/MM/DD HH:mm');
    console.log(`iniciow${inico2}`);
    const ahora = moment.utc().local();


    console.log(`ahora${innicio2.diff(ahora, 'minutes')}`);
    const diferencia = moment.duration().subtract(innicio2);


    console.log(`diferencia${moment.utc(diferencia).format('HH:mm')}`);
    const ahoraa = moment.utc().local().format('YYYYMMDD HH:mm');
    const innicio3 = moment.utc(hora_inicio).format('YYYYMMDD HH:mm');
    console.log(`ahora ${ahoraa}; inicio: ${innicio3}`);
    const date = moment(ahoraa, 'YYYYMMDD HH:mm');
    console.log(date.format('YYYYMMDD HH:mm'));
    const horas_ = moment(innicio3, 'YYYYMMDD HH:mm');
    var minutos_ = moment(innicio3, 'YYYYMMDD HH:mm');
    var minutos_ = moment(innicio3, 'YYYYMMDD HH:mm:ss');
    console.log(`horas_${horas_.format('HH')}minutos_${minutos_.format('mm')}`);
    const horas = date.diff(horas_, 'hours');
    const minutos = date.diff(minutos_, 'minutes');
    const segundos = date.diff(minutos_, 'seconds');
    const horass = minutos / 60;
    const resto = minutos % 60;
    let min = Math.floor(segundos / 60);

    let h = Math.floor(min / 60);
    min -= h * 60;
    console.log(`${segundos} s ${min} m ${h}h`); // "7d"
    console.log(`${date.diff(minutos_, 'minutes')}m`); // "7m"
    let mostrar_hora = false;
    if (hora_inicio) {
      const ahora_h = moment.utc().local().format('HH');
      const ahora_m = moment().format('mm');
      const inicio_h = moment.utc(hora_inicio).format('HH');
      const inicio_m = moment.utc(hora_inicio).local().format('mm');


      mostrar_hora = true;
    }


    if (min < 10) {
      min = `0${min}`;
    }

    if (h < 10) {
      h = `0${h}`;
    }
    if (saque_actual === 1) {
      claseSaque2 = 'iconoSaque_hidden';
    } else {
      claseSaque1 = 'iconoSaque_hidden';
    }
    if (sets_j1 + sets_j2 >= 3 && deporte !== 3) {
      claseSaque2 = 'iconoSaque_hidden';
      claseSaque1 = 'iconoSaque_hidden';
    }
    let pj1;
    let pj2;
    console.log(horade_inicio);

    if (autoarbitraje == 1) {
      pj1 = sets_j1;
      pj2 = sets_j2;
    } else {
      pj1 = puntos_j1;
      pj2 = puntos_j2;
    }

    return (
      <>
        <div className="contenedor">
          <div className="obs_gmatch">
            Powered by GMatch
          </div>
          <div className="obs_jugadores">
            <div className="obs_jugador obs_borde1">
              <div className="obs_nombre">
                <span className="obs_nombre_jugador">{jugador1}</span>
                <div className="obs_saque"><img className={`obs_pelota ${claseSaque1}`} src={pelota} alt="" /></div>
                <div className="obs_puntos">{pj1}</div>
              </div>

              {deporte !== 3 && (
                <>
                  <div className="obs_set">
                    {set1_j1}
                    {' '}
                  </div>
                  {(sets_j1 + sets_j2) > 0 && (
                    <div className="obs_set">
                      {set2_j1}
                      {' '}
                    </div>
                  )}
                  {(sets_j1 + sets_j2) > 1 && (
                    <div className="obs_set">
                      {set3_j1}
                      {' '}
                    </div>
                  )}
                </>
              )}
              {deporte == 3 && (

                <div className="obs_set">
                  {sets_j1}
                  {' '}
                </div>

              )}


            </div>
            <div className="obs_jugador  obs_borde2">
              <div className="obs_nombre">
                <span className="obs_nombre_jugador">{jugador2}</span>
                <div className="obs_saque"><img className={`obs_pelota ${claseSaque2}`} src={pelota} alt="" /></div>
                <div className="obs_puntos">{pj2}</div>
              </div>

              {deporte !== 3 && (
                <>
                  <div className="obs_set">{set1_j2}</div>
                  {(sets_j1 + sets_j2) > 0 && (
                    <div className="obs_set">
                      {set2_j2}
                      {' '}
                    </div>
                  )}
                  {(sets_j1 + sets_j2) > 1 && (
                    <div className="obs_set">
                      {set3_j2}
                      {' '}
                    </div>
                  )}
                </>
              )}
              {deporte == 3 && (

                <div className="obs_set">
                  {sets_j2}
                  {' '}
                </div>

              )}
            </div>
            <div className="obs_pista">
              <span className="obs_pista2">{`${nombreTorneo}`}</span>
              <span className="obs_triangulo">&nbsp;</span>
            </div>
          </div>


        </div>


      </>
    );
  }
}
export default Partido_obs;
