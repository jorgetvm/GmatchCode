import React, { Component } from 'react';
import './MainContainer_torneos.css';
import TorneosContainer from '../TorneosContainer/TorneosContainer';
import PartidosContainer from '../PartidosContainer/PartidosContainer';
import InfoContainer from '../InfoContainer/InfoContainer';
import Partido_tv from '../../Components/Partido_tv/Partido_tv';


class MainContainer_torneos extends Component {

    constructor(props) {
        super(props)
        this.state = {torneos:""}


    }

    componentWillMount() {
       
      
      this.updateData();
 }
     

   
      updateTime = () => {
        const {timeLineTop}=this.state;
        this.setState({
            timeLineTop: timeLineTop+1
        })
        console.log(timeLineTop)
     
      }
      componentDidMount() {
        this.timerID = setInterval(
          () => this.updateData(),
          5000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
    

        updateData = () => {

            fetch('http://gmatchapp.com/api/v1/torneos')//cambiado de torneos
            .then((response) => {
              return response.json()
            })
            .then((data) => {
              this.setState({ Torneos: data })//cambiado de partidos

            })
        }


    render(){
      const {Torneos} =this.state;

        return (
            
		<div className="mainContainer">
          
               
      <div className=" maincontainer2 padding0 ">
        <PartidosContainer Torneos={Torneos} />
      </div>
      </div>
        );		

}
}
export default MainContainer_torneos;