import React, { useEffect, useState }  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  getCurretnSetfromMatch,
  getClasesSet,
  getMatchDuration,
} from '../../Utils/Utils';
import pelota from '../../Imagenes/pelota.png';
import { RONDA_NAMING } from  './constants';
import { calculeStats } from './utils';
import './DetallePartidoTorneo.scss';

export const DetallePartidoTorneo = ({ partido }) => {
  const [show, setShow] = useState(false);
  const resultado = partido?.resultado || [];
  const ronda = RONDA_NAMING[partido?.ronda] || '';
  const {
    pista, estado, hora_prevista,deporte
  } = partido;
  const currentSet = getCurretnSetfromMatch(resultado);
  const {
    puntos_j1,
    set1_j1,
    set2_j1,
    set3_j1,
    saque_actual,
    sets_j1,
    ganador,
    puntos_j2,
    set1_j2,
    set2_j2,
    set3_j2,
    sets_j2,
    hora_inicio,
    hora_fin,
    set_actual,
  } = resultado;
  const nombrej1 = partido.jugadores[0] ? partido.jugadores[0].nombre : '';
  const nombrej2 = partido.jugadores[1] ? partido.jugadores[1].nombre : '';
  let claseSaque1 = 'iconoSaque';
  let claseSaque2 = 'iconoSaque';
  const claseTime = 'Vivo';
  if (saque_actual === 1) {
    claseSaque2 = 'iconoSaque_hidden';
  } else {
    claseSaque1 = 'iconoSaque_hidden';
  }

  const { horas, minutos } = getMatchDuration(hora_inicio);
  const hora_prevista_comienzo = moment.utc(hora_prevista).local().format('HH:mm');
  const {
    cs1j1,
    cs2j1,
    cs3j1,
    cs4j1,
    cs1j2,
    cs2j2,
    cs3j2,
    cs4j2,
    cp1j1,
    cp2j2,
    set_totalj1,
    set_totalj2,
  } = getClasesSet(
    set1_j1,
    set1_j2,
    set2_j1,
    set2_j2,
    set3_j1,
    set3_j2,
    sets_j1,
    sets_j2,
    puntos_j1,
    puntos_j2,
  );
  let clasej1 = 'pierde';
  let clasej2 = 'pierde';
  let opacidad = '';
  if (estado == 2) {
    opacidad = 'opacidad';
    if (ganador === 1) clasej1 = 'gana';
    else clasej2 = 'gana';
  }
  const {  stats_aces_j1, stats_aces_j2, stats_doble_faltas_j1, stats_doble_faltas_j2, stats_puntos_j1, stats_puntos_j2} = resultado;
   const tile = `Estadísticas`;
   const { acesJ1porcentaje, acesJ2porcentaje, doblesJ1porcentaje, doblesJ2porcentaje, puntosJ1porcentaje, puntosJ2porcentaje } = calculeStats({stats_aces_j1, stats_aces_j2, stats_doble_faltas_j1, stats_doble_faltas_j2, stats_puntos_j1, stats_puntos_j2})
 const showModal = () =>{
    setShow(true)
    if( window && window.dataLayer){
      window.dataLayer.push({'event': 'showModal', 'event_category': 'interaction', 'event_label': `${nombrej1}vs${nombrej2}`, 'event_value': '0'});
    }
 };
 const closeModal = () =>{
  setShow(false)
  if( window && window.dataLayer){
    window.dataLayer.push({'event': 'closeModal', 'event_category': 'interaction', 'event_label': `${nombrej1}vs${nombrej2}`, 'event_value': '0'});
  }
};
  return (
    <div className="DetallePartidoTorneoContainer">
      <div className="DetallePartidoTorneoContainer__upperInfo">
        <div className="DetallePartidoTorneoContainer__upperInfo__ronda">{ronda}</div>
        {estado != 0 && (
          <div className="DetallePartidoTorneoContainer__upperInfo__stats" onClick={showModal} >Live Stats</div>
        )}
        <div className="DetallePartidoTorneoContainer__upperInfo__pista">{`Pista ${pista}`}</div>
      </div>


      <div className="DetallePartidoTorneo">
        {estado != 2 && (
          <div className="DetallePartidoTorneo__horaPista">
            {estado == 1 && (
              <div className="DetallePartidoTorneo__horaPista__hora">
                <i className="fas fa-circle" />
                {`${horas > 0 ? `${horas}h:` : ''}${minutos}'`}
              </div>
            )}
            {estado == 0 || estado === 'Programado'  && (
              <div className="DetallePartidoTorneo__horaPista__hora__horarioComienzo">
                <i className="far fa-clock" />
                {hora_prevista_comienzo}
              </div>
            )}
          </div>
        )}
        {(estado == 2 || hora_fin) && (
          <div className="DetallePartidoTorneo__horaPista">
            <div className="DetallePartidoTorneo__horaPista__check">
              {ganador == 1 && (
                <i className="far fa-check-circle" />
              )}
            </div>
            <div className="DetallePartidoTorneo__horaPista__check">
              {ganador == 2 && (
                <i className="far fa-check-circle" />
              )}
             
            </div>
          </div>
        )}
        <div className="DetallePartidoTorneo__informacion">
          <div className="DetallePartidoTorneo__informacion__jugadores">
            <div className={`DetallePartidoTorneo__informacion__jugadores__jugador ${clasej1}`}>{nombrej1}</div>
            <div className={`DetallePartidoTorneo__informacion__jugadores__jugador ${clasej2}`}>{nombrej2}</div>
          </div>
          {estado != 0 && (
            <div className="DetallePartidoTorneo__informacion__resultados">
              <div className="DetallePartidoTorneo__informacion__resultados__puntos">
                {!ganador && (
                <>
                  <div className="DetallePartidoTorneo__informacion__resultados__puntos__punto">
                    <div className="DetallePartidoTorneo__informacion__resultados__puntos__punto__pelota">
                      <img className={claseSaque1} src={pelota} alt="" />
                    </div>
                    <div className="DetallePartidoTorneo__informacion__resultados__puntos__punto__pelota">
                      <img className={claseSaque2} src={pelota} alt="" />
                    </div>

                  </div>

                  <div className="DetallePartidoTorneo__informacion__resultados__puntos__punto">
                    <div className={`DetallePartidoTorneo__informacion__resultados__puntos__punto__info ${cp1j1}`}>
                      {puntos_j1}
                    </div>
                    <div className={`DetallePartidoTorneo__informacion__resultados__puntos__punto__info ${cp2j2}`}>
                      {puntos_j2}
                    </div>
                  </div>
                </>

                )}
              </div>
              {deporte !== 3 && (
                <><div className={`DetallePartidoTorneo__informacion__resultados__set ${set_actual === 1 ? 'DetallePartidoTorneo__informacion__resultados__set--activo' : ''}`}>
                  <div className={cs1j1}>{set1_j1}</div>
                  <div className={cs1j2}>{set1_j2}</div>
                </div><div className={`DetallePartidoTorneo__informacion__resultados__set ${set_actual === 2 ? 'DetallePartidoTorneo__informacion__resultados__set--activo' : ''}`}>
                    <div className={cs2j1}>{set2_j1}</div>
                    <div className={cs2j2}>{set2_j2}</div>
                  </div><div className={`DetallePartidoTorneo__informacion__resultados__set ${set_actual === 3 ? 'DetallePartidoTorneo__informacion__resultados__set--activo' : ''}`}>
                    <div className={cs3j1}>{set3_j1}</div>
                    <div className={cs3j2}>{set3_j2}</div>
                  </div></>
              )}
              {deporte === 3 && (
                <><div className='DetallePartidoTorneo__informacion__resultados__set'>
                  <div className={set_totalj1}>{sets_j1}</div>
                  <div className={set_totalj2}>{sets_j2}</div>
                </div></>
              )}
            </div>

          )}

        </div>
        
      
      </div>

        <Modal
          show={show}
          size="lg"
          aria-labelledby={tile}
          centered
          onHide={closeModal}
        >
          <Modal.Header>
            <Modal.Title id={tile}>
              <div className="title">
              <div>{tile}</div>
                <div onClick={closeModal} className="title_close"><i class="fa fa-times" aria-hidden="true"></i></div>
              </div>
            
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="nombres_stats">
                <div className="nombres_stats_j1">{nombrej1}</div>
                <div className="nombres_stats_j2">{nombrej2}</div>
            </div>
            <h4 className="title_stats">Aces</h4>
             
            <div className="aces_stats ">
                <div className="nombres_stats">
                    <div>{stats_aces_j1}</div>
                    <div>{stats_aces_j2}</div>
                </div>
                <div class="container_stats">
                    <div className="first-progrss" style={{width: `${acesJ1porcentaje}%`}} />
                    <div className="second-progrss" style={{width: `${acesJ2porcentaje}%`}} />
                </div>
            </div>
            <h4 className="title_stats">Dobles faltas</h4>
            <div className="dobles_stats">
                <div className="nombres_stats">
                    <div>{stats_doble_faltas_j1}</div>
                    <div>{stats_doble_faltas_j2}</div>
                </div>
                <div class="container_stats">
                    <div className="first-progrss" style={{width: `${doblesJ1porcentaje}%`}} />
                    <div className="second-progrss" style={{width: `${doblesJ2porcentaje}%`}} />
                </div>
            </div>
            <h4 className="title_stats">Puntos</h4>
            <div className="puntos_stats">
                <div className="nombres_stats">
                    <div>{stats_puntos_j1}</div>
                    <div>{stats_puntos_j2}</div>
                </div>
                <div class="container_stats">
                    <div className="first-progrss" style={{width: `${puntosJ1porcentaje}%`}} />
                    <div className="second-progrss" style={{width: `${puntosJ2porcentaje}%`}} />
                </div>
            </div>
          </Modal.Body>

        </Modal>
    </div>
  );
};

// const StatsModal = (props) =>{

//   debugger;
//   const { nameJ1, nameJ2, acesJ1, acesJ2, doblesJ1, doblesJ2, puntosJ1, puntosJ2} = props;
//    const tile = `Estadísticas ${nameJ1} vs ${nameJ2}`;
//    const acesJ1porcentaje = ((acesJ1+acesJ2)/acesJ1)*100;
//    const acesJ2porcentaje = ((acesJ1+acesJ2)/acesJ2)*100;
//    const doblesJ1porcentaje = ((doblesJ1+doblesJ2)/doblesJ1)*100;
//    const doblesJ2porcentaje = ((doblesJ1+doblesJ2)/doblesJ2)*100;
//    const puntosJ1porcentaje = ((puntosJ1+puntosJ2)/puntosJ1)*100;
//    const puntosJ2porcentaje = ((puntosJ1+puntosJ2)/puntosJ2)*100;

//    return (<>
  
//       {show && (
          
//       )}
//      </>  
//      );
// }

export default DetallePartidoTorneo;
