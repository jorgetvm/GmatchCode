import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { calculeStats } from '../../DetallePartidoTorneo/utils';
import './StatsModal.scss'

export const StatsModal = ({
    nombrej1,
    nombrej2,
    stats_aces_j1,
    stats_aces_j2,
    stats_doble_faltas_j1,
    stats_doble_faltas_j2,
    stats_puntos_j1,
    stats_puntos_j2,
    estado
}) => {
    const { acesJ1porcentaje, acesJ2porcentaje, doblesJ1porcentaje, doblesJ2porcentaje, puntosJ1porcentaje, puntosJ2porcentaje } = calculeStats({ stats_aces_j1, stats_aces_j2, stats_doble_faltas_j1, stats_doble_faltas_j2, stats_puntos_j1, stats_puntos_j2 })
    const [show, setShow] = useState(false);
    const tile = `Estadísticas`;
    const showModal = () => {
        setShow(true)
        if (window && window.dataLayer) {
            window.dataLayer.push({ 'event': 'showModal', 'event_category': 'interaction', 'event_label': `${nombrej1}vs${nombrej2}`, 'event_value': '0' });
        }
    };
    const closeModal = () => {
        setShow(false)
        if (window && window.dataLayer) {
            window.dataLayer.push({ 'event': 'closeModal', 'event_category': 'interaction', 'event_label': `${nombrej1}vs${nombrej2}`, 'event_value': '0' });
        }
    };
    return (
        <div className="StatsModal">
            {estado != 0 && (
                <div className="boton" onClick={showModal} >Live Stats</div>
            )}
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
                            <div className="first-progrss" style={{ width: `${acesJ1porcentaje}%` }} />
                            <div className="second-progrss" style={{ width: `${acesJ2porcentaje}%` }} />
                        </div>
                    </div>
                    <h4 className="title_stats">Dobles faltas</h4>
                    <div className="dobles_stats">
                        <div className="nombres_stats">
                            <div>{stats_doble_faltas_j1}</div>
                            <div>{stats_doble_faltas_j2}</div>
                        </div>
                        <div class="container_stats">
                            <div className="first-progrss" style={{ width: `${doblesJ1porcentaje}%` }} />
                            <div className="second-progrss" style={{ width: `${doblesJ2porcentaje}%` }} />
                        </div>
                    </div>
                    <h4 className="title_stats">Puntos</h4>
                    <div className="puntos_stats">
                        <div className="nombres_stats">
                            <div>{stats_puntos_j1}</div>
                            <div>{stats_puntos_j2}</div>
                        </div>
                        <div class="container_stats">
                            <div className="first-progrss" style={{ width: `${puntosJ1porcentaje}%` }} />
                            <div className="second-progrss" style={{ width: `${puntosJ2porcentaje}%` }} />
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </div>

    )
}

export default StatsModal;