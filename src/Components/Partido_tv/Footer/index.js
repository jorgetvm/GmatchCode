import React, { Component, Fragment } from 'react';

import GMatch_NEW_WHITE from '../../../Imagenes/GMatch_NEW_WHITE.png';
import './Footer.scss'


export const Footer = ({imagenes_patrocinadores}) => {
    return (
        <>
        {imagenes_patrocinadores && imagenes_patrocinadores.length > 0  && (
            <div className="footer">
            {(imagenes_patrocinadores.map((eachLogo) => {
                  return (
                      <div className="logoFooter">
                          <img className="eachLogoFooter" src={eachLogo} />
                      </div>
                  )
              })
              )}
            </div>
        )}
        {imagenes_patrocinadores && imagenes_patrocinadores.length === 0  && (
            <div className="footer">
             <div className="logoFooter">
                          <img className="eachLogoFooter" src={GMatch_NEW_WHITE} />
                      </div>
            </div>
        )}
        </>
        
        
    )
}
export default Footer;