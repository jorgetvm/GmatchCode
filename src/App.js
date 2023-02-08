import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import { createStore } from 'redux';
import {Provider, useDispatch} from 'react-redux';
import TorneosPage from './Pages/Torneos/TorneosPage';
import PartidoWeb from './Pages/Partidos/Web/PartidoWeb';
import PartidoObs from './Pages/Partidos/Obs/PartidoObs';
import PartidoLed from './Pages/Partidos/Led/PartidoLed';
import PartidoStats from './Pages/Partidos/Stats/PartidoStats';
import { HashRouter } from 'react-router-dom';
import { obtenerValorParametro, getTorneosId } from './Utils/Utils';
import { actions } from '../src/reducers/main';
import rootReducers from './reducers/index';

function App() {
  const store = createStore(rootReducers);
  const location = obtenerValorParametro('location');
  console.log(location)
  // dispatch(actions.getTournamentInfo());
  return (
    <Provider store={store}>
      <div className="App">
        {location && (
          <div>
            {(location && location === 'torneo' )&& (<TorneosPage/>)}
            {location === 'partido_web' && (<PartidoWeb/>)}
            {location === 'partido_obs' && (<PartidoObs/>)}
            {location === 'partido_led' && (<PartidoLed/>)}
          </div>
        )}
        {/* <Switch>
        <Route exact path="/" component={componentToUse} />
          <Route exact path="/tenis/torneo" component={TorneosPage} />
          <Route exact path="/tenis/partido/web" component={PartidoWeb} />
          <Route exact path="/tenis/partido/obs" component={PartidoObs} />
          <Route exact path="/tenis/partido/led" component={PartidoLed} />
          <Route exact path="/tenis/partido/stats" component={PartidoStats} />
          <Route exact path="/tenis/partido" component={PartidoWeb} />
        </Switch> */}
      </div>
    </Provider>
  );
}


export default App;
