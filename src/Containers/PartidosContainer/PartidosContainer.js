import React, { Component,Fragment } from 'react';
import DetallePartido from '../../Components/DetallePartido/DetallePartido';
import { createInfo} from '../../Utils/Utils';


import './PartidosContainer.css';

class PartidosContainer extends Component {

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

handleClick = (id) => {
console.log(id)
/*
  let {mostrar}= this.state;

  if (mostrar){
      mostrar=false;
  }else{
      mostrar=true;
  }

  this.setState({mostrar : mostrar});
 */
}
    render(){
      const {mostrar} = this.state;

        let infoTorneos=[];
        
        const {Torneos} = this.props;

        const {info_partidos} =this.state;
        
        if(info_partidos && Torneos){
          console.log(this.state)
   
            infoTorneos=createInfo(info_partidos,Torneos);

        }




        return (
            <Fragment>
            <div className="PartidosContainer">

            {infoTorneos && infoTorneos.map(((infoTorneo,index) =>
             
                <div key={index.toString()} className="torneo_grande" id={infoTorneo.nombre} onClick={this.handleClick(infoTorneo.nombre)}>
                  {infoTorneo.nombre=="Murcia Club de tenis" && (

                  <div>
                    {/*<div className="genero">{infoTorneo.genero}</div>*/}
                    <div className="flex">
                        <h2>{`${infoTorneo.nombre}`}</h2>
                    </div>
                  </div>
                  )}
  
                  <div id={infoTorneo.nombre} className="infoTorneo">
                    
                    
                  {infoTorneo.partidos && infoTorneo.partidos.map((info_partidos,index)=>
                    
                      <DetallePartido Partidos={info_partidos}  key={index.toString()} onClick={this.props.onClick} Mostrar={this.handleClick}/>
                   
                   
                    
                  )}
                  </div>
                  
                </div>)
            )}    
        </div>
        </Fragment>
        );		

}
}
export default PartidosContainer;