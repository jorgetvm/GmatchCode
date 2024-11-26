import React, { Component, Fragment } from 'react';
import moment from 'moment';
import pelota from '../../Imagenes/pelota.png';

import {
    getMatchDuration,
    obtenerNombreJugadores,
} from '../../Utils/Utils';
import { SPORT_TYPES } from '../../Utils/Constants';
import ComparadorEstadisticas from './Estadisticas';

import './PartidoApp.css';
import ResultadoPartido from './Resultados';
import Logo from './Logos';
import LogosTorneo from './LogosTorneo';


const PartidoApp = ({ partido }) => {
    const { resultado, arbitros, torneo, deporte, torneo_media, sets_partido } = partido;
    const nombreTorneo = torneo?.nombre || 'CTO. ESPAÑA MAPFRE POR EQUIPOS';
    // const nombreTorneo = 'CTO. ESPAÑA MAPFRE POR EQUIPOS';
    const logosPatrocinadores = torneo_media?.imagenes_patrocinadores || null;
    // const nombreCLub = torneo?.club.nombre || '' ;
    const nombreCLub = 'Copa Orange';

    let autoarbitraje = 0;
    let horade_inicio;
    let juegosj1; let claseSaque2; let claseSaque1;
    let puntos_j1; let juegos_j1; let set1_j1; let set2_j1; let set3_j1; let saque_actual; let sets_j1; let ganador; let jugador1; let jugador2; let pista; let ronda;
    let puntos_j2; let juegos_j2; let set1_j2; let set2_j2; let set3_j2; let sets_j2;
    let hora_inicio; let hora_prevista;
    if (arbitros) {
        if (arbitros[0].auto_arbitraje == 1) {
            autoarbitraje = 1;
        } else {
            autoarbitraje = 0;
        }
    }

    if (resultado) {

        const { j1Nombre, j2Nombre } = obtenerNombreJugadores(partido.jugadores);
        jugador1 = j1Nombre;
        jugador2 = j2Nombre;
        pista = partido.pista;
        ronda = partido.ronda;
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


    const { horas, minutos } = getMatchDuration(hora_inicio);
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

    return (
        <div className="PartidoApp">
            <div style={{
                backgroundColor: '#121212',
                padding: '20px',
                borderRadius: '0 0 12px 12px',
                color: '#fff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            }} >
                
                <Logo deporte={SPORT_TYPES[deporte]}/>
                
                <div className="resultados">
                    <ResultadoPartido
                        data={partido.resultado}
                        jugador1={jugador1}
                        jugador2={jugador2}
                        pelota={pelota}
                        claseSaque1={claseSaque1}
                        claseSaque2={claseSaque2}
                        ronda={ronda}
                        nombreTorneo={nombreTorneo}
                        sets_partido={sets_partido}
                    />
                </div>
                <div className="estadisticas">
                    <ComparadorEstadisticas data={partido.resultado} deporte={SPORT_TYPES[deporte]}/>
                </div>
            </div>
           
            <div className="Patrocinadores"><LogosTorneo logos={logosPatrocinadores} deporte={SPORT_TYPES[deporte]}/></div>

            <style>{`
                .PartidoApp{
                    .estadisticas{
                        padding-top: 1rem;
                    }
                }
            `}</style>
        </div>

    );
};

export default PartidoApp;
