import React, { Component } from 'react';
import './MainContainer_cto_spain.css';
import PartidosCtoSpainContainer from '../PartidosCtoSpainContainer/PartidosCtoSpainContainer';
import GMatch_NEW_WHITE from '../../Imagenes/GMatch_NEW_WHITE.png';
import Siux_white from '../../Imagenes/Siux_white.png';
import LOGO_FPRM_white from '../../Imagenes/LOGO_FPRM_white.png';
import MiraDigital_white from '../../Imagenes/MiraDigital_white.png';


class MainContainer_cto_spain extends Component {

    constructor(props) {
        super(props)
        this.state = {torneos:""}


    }

    componentWillMount() {
       
      
      this.updateData();
 }
     

   
      updateTime = () => {
        const {timeLineTop}=this.state;
        this.setState({
            timeLineTop: timeLineTop+1
        })
        console.log(timeLineTop)
     
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

            fetch('http://gmatchapp.com/api/v1/torneos')
            .then((response) => {
              return response.json()
            })
            .then((data) => {
              this.setState({ Torneos: data })

            })
        }

    render(){
      const {Torneos} =this.state;

        return (
            
		<div className=" MainContainer_cto_spain">
      <div className="titulo">
          Campeonato de España por equipos
      </div>
     
               
                <div className=" maincontainer2 padding0 ">
                  
                    <PartidosCtoSpainContainer Torneos={Torneos} />
      </div>
      <div className="divLogo_spain"><img className="logo_spain"  src={GMatch_NEW_WHITE}/></div>
      </div>
        );		

}
}
export default MainContainer_cto_spain;