import React from 'react';
import GMatch_NEW_WHITE from '../../../Imagenes/GMatch_NEW_WHITE.png'
import GMatch_NEW_WHITEold from '../../../Imagenes/GMatch_NEW_WHITEold.png'

export const Logo = ({ deporte }) => {

    return (
        <div style={{
            paddingBottom: '1rem',
        }}
        >
            <div className="imagen">
                <a href="http://info.gmatchapp.com">
                    <img className="logoGmatch" src={GMatch_NEW_WHITEold} />
                </a>
                <h2 style={{
                    fontFamily: 'arial black',
                    fontWeight: 'bold',
                    fontStyle: 'italic', textAlign: 'center', marginBottom: '20px', fontSize: '18px'
                }}>
                    {deporte}
                </h2>
            </div>
            <style>
                {`
                .imagen{
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: center;
                    h2::first-letter {
                      text-transform: uppercase;
                    }  
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