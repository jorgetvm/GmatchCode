import React, { Component,Fragment } from 'react';
import DetallePartidoPadel from '../../Components/DetallePartidoPadel/DetallePartidoPadel';
import { createInfoPadel} from '../../Utils/Utils';
import GMatch_NEW_WHITE from '../../Imagenes/GMatch_NEW_WHITE.png';
import head from '../../Imagenes/head.svg';
import LOGO_FPRM_white from '../../Imagenes/LOGO_FPRM_white.png';
import MiraDigital_white from '../../Imagenes/MiraDigital_white.png';
import joma from '../../Imagenes/joma.png';

import './PartidosPadelContainer.css';

class PartidosPadelContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {mostrar:'true',}
     
       
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
    var requestOptions = {
      //method: 'GET',
      //redirect: 'follow'
    };

    fetch("https://gmatchapp.com/api/v1/partidos", requestOptions)
    .then((response,) => {
      console.log(response)
      return response.json()
    })
    .then((data) => {
      this.setState({ info_partidos: data })//cambiado de partidos

    })
    .catch(error => console.log('error', error));
    /*
    var proxyUrl="https://cors-anywhere.herokuapp.com/";
    var url="https://gmatchapp.com/api/v1/partidos";
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ info_partidos: data })//cambiado de partidos

      })*/
  }

 


    render(){
      const nombre_torneo="Torneo Región de Murcia";
      const {mostrar} = this.state;
      const {nombre} = this.props
       
        let infoTorneos;
        let torneo=[];
        const {Torneo} = this.props;
        torneo=Torneo;
        const {info_partidos} =this.state;
let partidos=[];
    

        if(info_partidos && torneo){

   
            infoTorneos=createInfoPadel(info_partidos,Torneo);
            infoTorneos=infoTorneos[0];
            
            partidos = infoTorneos.partidos;
        }


console.log(partidos)

        return (
            <Fragment>
            <div className="PartidosPadelContainer">

           {infoTorneos && (
             
            <div  className="torneo_grande"  > 
                        <div className="tituloPadel">{`${nombre}`}</div>
         
              <div  className="infoTorneoPadel">
                     
                     
              {partidos && partidos.length>0 &&partidos.sort(function (a, b) {
  if (a.estado > b.estado) {
    return -1;
  }
  if (a.estado < b.estado) {
    return 1;
  }
  // a must be equal to b
  return 0;
}).slice(partidos.length-3).reverse().map((partido,index)=>
                        <DetallePartidoPadel Partidos={partido}  key={index.toString()} onClick={this.props.onClick} />
              )}

         
              </div>
            </div>

           )}

       
           
                
           
            <div className="logos_padel">   
            <div className="logos">
            <div className="divLogo"><img className="logo_padel"  src={GMatch_NEW_WHITE}/></div>
            <div className="divLogo"><img className="logo_padel"  src={head}/></div>
            <div className="divLogo"><img className="logo_padel3" src={LOGO_FPRM_white}/></div>
            <div className="divLogo"><img className="logo_padel3" src={joma}/></div>
            <div className="divLogo"><img className="logo_padel2"  src={MiraDigital_white}/></div>
            </div>
       
        </div> 
        </div>
        </Fragment>
        );		

}
}
export default PartidosPadelContainer;