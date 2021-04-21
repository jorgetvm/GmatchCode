import React, { Component } from 'react';
import './MainContainer.css';
import TorneosContainer from '../TorneosContainer/TorneosContainer';
import PartidosContainer from '../PartidosContainer/PartidosContainer';
import InfoContainer from '../InfoContainer/InfoContainer';
import Partido_tv from '../../Components/Partido_tv/Partido_tv';
import Partido_obs from '../../Components/Partido_obs/Partido_obs';
import Partido_tv_led from '../../Components/Partido_tv_led/Partido_tv_led';

import Stats from '../../Components/Stats/Stats';

class MainContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {mostrar:'true'}


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

          /*var formdata = new FormData();
          formdata.append("email", "admin@gmatchapp.com");
          formdata.append("password", "1234");*/
          
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
              this.setState({ partidos: data })//cambiado de partidos

            })
            .catch(error => console.log('error', error));
          
          /*
          var proxyUrl="https://cors-anywhere.herokuapp.com/";
          var url="http://gmatchapp.com/api/v1/partidos";
          fetch(url,{       headers: {
            'Content-Type': 'application/json',mode:'cors'
        }})
            .then((response,) => {
              return response.json()
            })
            .then((data) => {
              this.setState({ partidos: data })//cambiado de partidos

            })*/
        }


    render(){
      function obtenerValorParametro(sParametroNombre) {
        var sPaginaURL = window.location.search.substring(1);
         var sURLVariables = sPaginaURL.split('&');
          for (var i = 0; i < sURLVariables.length; i++) {
            var sParametro = sURLVariables[i].split('=');
            if (sParametro[0] == sParametroNombre) {
    
              return sParametro[1];
            }
          }
         return null;
        }

        var id = obtenerValorParametro('id_partido');
        var idLed = obtenerValorParametro('id_partido_led');
        var obs=obtenerValorParametro('obs');
        var stats=obtenerValorParametro('stats');
  if (id){
    console.log("obs"+obs);
  }else{
    console.log("no id");
  }
  let infopartido_tv=[];
        
       console.log(this.state);
       const {partidos}=this.state;
  
       if(partidos){
        partidos.forEach(partido => {
        if(id==partido.id || idLed==partido.id ){
          infopartido_tv=partido;
        }
      });}
      console.log(infopartido_tv);
        return (
            
		<div className="mainContainer"> 
          
               
            {(id && obs==null && stats && idLed==null) && (
              <Stats partido={infopartido_tv} />
            )}
            {(id && obs==null && stats==null && idLed==null) && (
              <Partido_tv partido={infopartido_tv} />
            )}
            {(id && obs && stats==null && idLed==null) && (
              <Partido_obs partido={infopartido_tv} obs/>
            )}
            {(id==null && obs==null && stats==null && idLed) && (
              <Partido_tv_led partido={infopartido_tv}/>
            )}
            
             </div>
        );		

}
}
export default MainContainer;