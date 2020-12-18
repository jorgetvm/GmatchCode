import React, { Component,Fragment } from 'react';
import DetallePartidoCtoSpain from '../../Components/DetallePartidoCtoSpain/DetallePartidoCtoSpain';
import { createInfoSpain} from '../../Utils/Utils';


import './PartidosCtoSpainContainer.css';

class PartidosCtoSpainContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {mostrar:'true'}
     
       
    }
    componentWillMount() {
       
      
       this.updateData();
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.updateData(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  updateData = () => {

    fetch('http://gmatchapp.com/api/v1/partidos')//cambiado de torneos
    .then((response) => {
      return response.json()
    })
    .then((data) => {

      this.setState({ info_partidos: data })//cambiado de partidos

    })
}


    render(){
        const nombre_torneo="Cto. de España por Equipos Absoluto 1ª";
      const {mostrar} = this.state;

        let infoTorneos=[];
        
        const {Torneos} = this.props;

        const {info_partidos} =this.state;
        
        if(info_partidos && Torneos){
          console.log(this.state)
   
            infoTorneos=createInfoSpain(info_partidos,Torneos,nombre_torneo);

        }




        return (
            <Fragment>
            <div className="PartidosCtoSpainContainer">

            {infoTorneos && infoTorneos.map(((infoTorneo,index) =>
             
                <div key={index.toString()} className="torneo_grande" id={infoTorneo.nombre} >
                  
                  <div className="tituloEliminatoria">{infoTorneo.nombre}</div>
                        <div id={infoTorneo.nombre} className="infoTorneoSpain">
                                            
                                            
                        {infoTorneo.partidos && infoTorneo.partidos.map((info_partidos,index)=>
                        
                            <DetallePartidoCtoSpain Partidos={info_partidos}  key={index.toString()} onClick={this.props.onClick} />
                        )}
                        
                        
                
                 
  
                  
                  </div>
                  
                </div>)
            )}    
        </div>
        </Fragment>
        );		

}
}
export default PartidosCtoSpainContainer;