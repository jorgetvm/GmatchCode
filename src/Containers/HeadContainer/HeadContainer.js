import React, { Component, Fragment } from 'react';

import TorneosContainer from '../TorneosContainer/TorneosContainer';
import PartidosContainer from '../PartidosContainer/PartidosContainer';
import './HeadContainer.css';
import Gmatch from './Gmatch.jpg';

class HeadContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
           }
       
    }

        
 

    render(){ 
        return (
        <Fragment>
            <title>Los meta tags más importantes y su función | IONOS</title>
                <div className="HeadContainer">
                    <img className="Logo"  src={Gmatch} alt="Logo Gmatch"/>
                    <div className="head"></div>
                </div>
        </Fragment> 
        );		

}
}
export default HeadContainer;