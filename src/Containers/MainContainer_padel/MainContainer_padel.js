import React, { Component } from 'react';
import './MainContainer_padel.css';
import PartidosPadelContainer from '../PartidosPadelContainer/PartidosPadelContainer';
import {filtraTorneo_id} from '../../Utils/Utils';



class MainContainer_padel extends Component {

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
          10000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
    

        updateData = () => {
       
          var requestOptions = {
            //method: 'GET',
            //redirect: 'follow'
          };
          fetch("https://gmatchapp.com/api/v1/torneos", requestOptions)
          .then((response,) => {
            console.log(response)
            return response.json()
          })
          .then((data) => {
            this.setState({ Torneos: data })//cambiado de partidos

          })
          .catch(error => console.log('error', error));


          /*
            fetch('https://gmatchapp.com/api/v1/torneos')
            .then((response) => {
              return response.json()
            })
            .then((data) => {
              this.setState({ Torneos: data })

            })*/
        }

    render(){
      const {Torneos} =this.state;
      const {id_torneo} = this.props;
      let torneo=[];
      let nombre="";
      if(Torneos){
        torneo=filtraTorneo_id(Torneos,id_torneo);
      }
if(torneo.length==1){

  nombre =  torneo[0].nombre;
 
}

        return (
            
		<div className=" MainContainer_Padel">
            <div className="tituloPadel">{`${nombre}`}</div>

               
                <div className=" maincontainer2 padding0 ">
                  
                    <PartidosPadelContainer Torneo={id_torneo} Torneo_id={id_torneo}/>
      </div>
      </div>
        );		

}
}
export default MainContainer_padel;