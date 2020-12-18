import React, { Component,Fragment } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
 

import  MainContainer_cto_spain from './Containers/MainContainer_cto_spain/MainContainer_cto_spain';
import MainContaniner from './Containers/MainContainer/MainContainer';
import MainContainer_padel from './Containers/MainContainer_padel/MainContainer_padel';



class App extends Component {



/*
 <Fragment>
      
        <MainContaniner/>

        <BrowserRouter>
        <Switch>
          <Route path='/torneo' component={MainContainer_torneos}/>
          <Route path='/' component={MainContaniner}/>
        </Switch>
      </BrowserRouter>

      </Fragment>*/
  
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

      var id = obtenerValorParametro('torneo');


    return (
      <Fragment>

            {/*id=="cto_spain" && (
              < MainContainer_cto_spain/>
            )*/}
      {id && (
              < MainContainer_padel id_torneo={id}/>
            )}
      {id=="undefined" || id==null && (
        <MainContaniner/>
      )}

      
       
     </Fragment>
    );
  };
}

 
export default App;
