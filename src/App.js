import React, { Component,Fragment } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
 

import  MainContainer_cto_spain from './Containers/MainContainer_cto_spain/MainContainer_cto_spain';
import MainContaniner from './Containers/MainContainer/MainContainer';
import TorneosWrapper from './Components/TorneosWrapper';



class App extends Component {  
  render() {
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

      const getTorneosId = (ids) =>{
        let result = [];
        if(ids.indexOf('_') >- 1){
          result = ids.split('_');
        } else {
          result.push(ids)
        }
        return result;
      }


      const torneos_ids = getTorneosId(obtenerValorParametro('torneo'));
      
    return (
      <Fragment>

      {torneos_ids && (
            <TorneosWrapper torneos={torneos_ids}/>
      )}
      {torneos_ids=="undefined" || torneos_ids==null && (
        <MainContaniner/>
      )}

      
       
     </Fragment>
    );
  };
}

 
export default App;
