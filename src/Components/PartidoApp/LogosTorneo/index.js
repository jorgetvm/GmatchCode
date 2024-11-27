import React from 'react';
import padelNuestro from '../../../Imagenes/padelNuestro.svg'
import GMatch_NEW_WHITEold from '../../../Imagenes/GMatch_NEW_WHITEold.png'

export const LogosTorneo = ({ logos, deporte }) => {
    debugger;
    return (
        <div style={{
            padding: '1rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        >{deporte && deporte === 'padel' && (
            <div className="">
                <a href="https://www.padelnuestro.com"><img className="eachPatrocinador" src={padelNuestro} alt={`logo-PdelNuestro`} /></a>
                
            </div>
        )}

            {logos.map((eachLogo, index) => (
                <div className="" key={index}>
                    <img className="eachPatrocinador" src={eachLogo} alt={`logo-${index}`} />
                </div>
            ))}
            <div className="">
                <span>© Copyright 2020 GMatch - Todos los derechos reservados <a href="http://info.gmatchapp.com">info.gmatchapp.com</a></span>
            </div>
            <style>
                {`
                .eachPatrocinador {
                    height: 40px;
                }
                `}
            </style>
        </div>
    )
}
export default LogosTorneo;