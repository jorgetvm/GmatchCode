import React from 'react';
import GMatch_NEW_WHITE from '../../../Imagenes/GMatch_NEW_WHITE.png'
import GMatch_NEW_WHITEold from  '../../../Imagenes/GMatch_NEW_WHITEold.png'

export const Logo = () => {

    return (
        <div  style={{
            paddingBottom: '1rem',
          }}
          >
            <div className="imagen">
            <a href="http://info.gmatchapp.com">
                <img className="logoGmatch" src={GMatch_NEW_WHITEold} />
            </a>
               
            </div>
            <style>
                {`
                .imagen{
                .logoGmatch{
                    height: 10vh;
                }
                }
                `}
            </style>
        </div>
    )
}
export default Logo;