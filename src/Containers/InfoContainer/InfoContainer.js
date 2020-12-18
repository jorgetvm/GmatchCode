import React, { Component } from 'react';

import './InfoContainer.css';


class InfoContainer extends Component {

    constructor(props) {
        super(props)
		this.state = {
		}
       
    }
    
  


    render(){
      const{partido}=this.props;

        return (
            <div>{partido}
        </div>
        );		

}
}
export default InfoContainer;