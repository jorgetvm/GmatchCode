import React from 'react';
import TorneosPage from './Pages/Torneos/TorneosPage';
import { obtenerValorParametro, getTorneosId } from './Utils/Utils';


export const customRouter = () => {
    
  const location = obtenerValorParametro('location');
  console.log(location)

    console.log("gola")
    return (
    <div>
        hola
        {<TorneosPage/>}
    </div>
        
    )
}

export default customRouter