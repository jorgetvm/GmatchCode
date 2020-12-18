import React, { Component } from 'react';

import './Torneo.css';
class Torneo extends Component {

    constructor(props) {
        super(props)
        this.state = {mostrar:''}
     
       
    }


    handleClick = () => {
        let {mostrar}= this.state;

        if (mostrar){
            mostrar=false;
        }else{
            mostrar=true;
        }

        this.setState({mostrar : mostrar})
    }
    render(){
    
       
       const {Torneo} = this.props;
       const {mostrar} = this.state;
       console.log(mostrar);
       const {
           nombre,
           superficie,
           descripcion,
           categoria,
           genero
       }=Torneo;
 
        return (
            <li >
                <ul >
                    <div className="Torneo" >
                        <a href="#"> 
                        <h3 className="Nombre" onClick={this.handleClick}>{nombre}</h3>
                        </a> 
                        {mostrar && (
                            <li >
                                <h4 className="Info">{superficie}</h4>
                                <h4 className="Info">{descripcion}</h4>
                                <h4 className="Info">{categoria}</h4>
                                <h4 className="Info">{genero}</h4>
                            </li>
                        )}   
                       
                        
                    </div>
                </ul>
            </li>
        );		

	
}
}
export default Torneo;