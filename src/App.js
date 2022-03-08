import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';


import TorneosPage from './Pages/Torneos/TorneosPage';
import PartidoWeb from './Pages/Partidos/Web/PartidoWeb';
import PartidoObs from './Pages/Partidos/Obs/PartidoObs';
import PartidoLed from './Pages/Partidos/Led/PartidoLed';
import PartidoStats from './Pages/Partidos/Stats/PartidoStats';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/tenis/torneo" component={TorneosPage} />
          <Route exact path="/tenis/partido/web" component={PartidoWeb} />
          <Route exact path="/tenis/partido/obs" component={PartidoObs} />
          <Route exact path="/tenis/partido/led" component={PartidoLed} />
          <Route exact path="/tenis/partido/stats" component={PartidoStats} />
          <Route exact path="/tenis/partido" component={PartidoWeb} />
        </Switch>

      </div>
    </Router>
  );
}


export default App;
