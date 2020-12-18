import React, { Component } from 'react';
import { getPartido } from '../../Utils/Utils';
import Partido from '../Partido/Partido';
import './ListaPartidos.css';


class ListaPartidos extends Component {

    constructor(props) {
        super(props)
		this.state = {
            id:'',
            Partidos: []
		}
       
    }
    componentWillMount() {
       
      
          fetch('http://gmatchapp.com/api/v1/partidos')
          .then((response) => { 
            return response.json()
          })
          .then((data) => {
            this.setState({ Partidos: data })
          }) 
    }
   
 

    render(){


        const { Partidos } = this.state;
        const { Id,NombreTorneo } = this.props;
        const partido=getPartido(Id,Partidos);
        console.log(this.props);

        return (
		<Partido Partido={partido} NombreTorneo={NombreTorneo} ></Partido>
        );		

}
}
export default ListaPartidos;