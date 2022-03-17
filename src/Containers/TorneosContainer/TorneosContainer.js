import React, { Component } from 'react';
import Torneo from '../../Components/Torneo/Torneo';
import './TorneosContainer.css';


class TorneosContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const listStyle = {
      listStyleType: 'none',
      padding: '0px',
    };
    const { Torneos } = this.props;
    return (
      <div className="TorneosContainer">
        <h2 className="Titulo">Torneos</h2>
        <ul style={listStyle}>
          {Torneos.nombre == 'Murcia Club de tenis' && Torneos.map(((torneo, index) => (
            <div key={index.toString()}>
              <Torneo Torneo={torneo} />
            </div>
          )))}
        </ul>
      </div>
    );
  }
}
export default TorneosContainer;
