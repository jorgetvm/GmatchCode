import React, { Component, Fragment } from 'react';
import './PieTorneos.css';

class PieTorneos extends Component{
    constructor(props) {
        super(props)
    }
	render(){
        return(
            <div className="pieTorneos">
               
                <div><a href="http://info.gmatchapp.com">info.gmatchapp.com</a></div>
                <div>Murcia, España - <a href="mailto:info@gmatchapp.com">info@gmatchapp.com</a></div>
                <div>© Copyright 2020 GMatch - Todos los derechos reservados</div>
            </div>
        )
       
    }
}

 

    
export default PieTorneos;