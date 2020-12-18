import React, { Component } from 'react';
import Hola from '../Hola/Hola';
import fedeMurcia from '../../Imagenes/fedeMurcia.jpg';
import './Card.css';
class Card extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        
        
    }

    handleClick = () => {
       
        const {Torneo} = this.props;

        const {id}=Torneo;
        
        // the event context comes from the Child
    
        this.props.onClick(id)
    }

    render(){
    
        const hola =this.state.nombre;
        const {Torneo} = this.props;

        const {
            nombre,
            superficie,
            descripcion,
            categoria,
            genero
        }=Torneo;
        
        return (
            <a href="#" onClick={this.handleClick}>
            <div className="container_torneo" >
                
                    <div className="informacion">
                        <h2><p>{nombre}</p></h2>
                        <h3><p>{`Superficie: ${superficie}`}</p></h3>
                        <h3><p>{descripcion}</p></h3>
                        <h3><p>{`Categoría: ${categoria}`}</p></h3>
                        <h3><p>{`Género: ${genero}`}</p></h3>
                    </div>
                
                    <div className="logoTorneo">
                        <img src={fedeMurcia} alt="hol" />	
                    </div>
                
                
            </div>
            </a>
        );		

	
}
}
export default Card;