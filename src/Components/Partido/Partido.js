import React, { Component } from 'react';

import './Partido.css';
import DetallePartido from '../DetallePartido/DetallePartido';


class Partido extends Component {

    constructor(props) {
        super(props)
		this.state = {
            id:'',
            Partidos: []
		}
       
    }

 

    render(){


        const { Partido,NombreTorneo } = this.props;
        const { pista,hora,tipo_partido,ronda} = Partido;
     console.log(Partido)
        return (
		<div className="torneoContainer">
            <h2>{`${NombreTorneo}`}</h2>	
            {Partido && Partido.map(((partido,index) =>
                <div key={index.toString()}>
                <DetallePartido Partido={partido}/>
                </div>)
            )}    
        </div>
		
        );		

}
}
export default Partido;