   
import React, { Component,Fragment } from 'react';
import Torneo from '../../Containers/Torneo';
import PieTorneos from '../../Components/PieTorneos/PieTorneos';
import LogoGmatchNegroNuevo from '../../Imagenes/LogoGmatchNegroNuevo.png';

import './TorneosWrapper.scss';

export const TorneosWrapper = ({torneos}) =>{
    const num_torneos = torneos.length;
    const ancho_pantalla = window.screen.width;
    return (
    <div className="TorneosWrapper">
        {((num_torneos && num_torneos>1) || (ancho_pantalla>1200)) && (
            <div className="TorneosWrapper__divTituloLogo">
                <img src={LogoGmatchNegroNuevo} />
            </div>
        )}
        <div className="TorneosWrapper__torneos">
            {torneos.map(id =>{
                return (
                    <div className={`TorneosWrapper__torneos__torneo ${num_torneos>1?'doble':''}`}>
                        <Torneo id_torneo={id} num_torneos={torneos.length}/>         
                    </div>
                )
            })}
    </div> 
    {num_torneos && num_torneos>1 && ancho_pantalla<1200 && (
        <PieTorneos/>
    )}
</div>
        
       
    )
}
export default TorneosWrapper