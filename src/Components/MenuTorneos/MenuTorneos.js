import React, { Component } from 'react';
import Torneo from '../Torneo/Torneo';
import ListaPartidos from '../ListaPartidos/ListaPartidos'
import './MenuTorneos.css';

import Card from '../Card/Card';
class MenuTorneos extends Component {

    constructor(props) {
        super(props)
		this.state = {
			id:''
		}
		//this.handleClick = this.handleClick.bind(this);
    }
	shouldComponentUpdate() {
		console.log("hola")
		const {id}=this.state;
		if(id){
			console.log(id)
			
		}
		return true;
	  }

    handleClick = (id) => {
		
        // the event context comes from the Child
	
		this.setState({id: id})
	
	
    }
	/**/

    render(){
		console.log(this.state)
		const {id}=this.state;
		const {Torneos}=this.props;
		if(id){
			return (
				<div>
				<ListaPartidos Id={id} NombreTorneo={Torneos[id-1].nombre} />
				</div>)
		}
        return (
		<div className="Card">			
			{Torneos && Torneos.map(((torneo,index) => 
			<div key={index.toString()}>
			<Card Torneo={torneo}
			onClick={this.handleClick}/>
			</div>)
			)
			}
		</div>
        );		

}
}
export default MenuTorneos;