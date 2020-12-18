import React, { Component, Fragment } from 'react';
import moment from 'moment';
import pelota from '../../Imagenes/pelota.png';
import {calsesSet} from '../../Utils/Utils';

import './DetallePartidoCtoSpain.css';


class DetallePartidoCtoSpain extends Component {

    constructor(props) {
        super(props)
		this.state = {
            id:'',
            Partidos: []
		}
       
    }

      curretnSet =(resultados) =>{
          let currentSet;
        const {sets_j1} = resultados;
        const {sets_j2} = resultados;
        switch (sets_j1 + sets_j2) {
            case 0:
                currentSet=1;
            break;
        
            case 1:
                currentSet=2;
            break;
            case 2:
                currentSet=3;
            break;
            case 3:
                currentSet=4;
            break;
            case 4:
                currentSet=5;
            break;
        }
        return currentSet;
      }
    render(){
        let setActualj1=0;
        let SetActualj1=0;
        let SetActualj2=0;

        const { Partidos } = this.props;

        console.log(Partidos);
   
        const {resultado}= Partidos;
        let{hora_prevista,ronda,estado,pista} = Partidos;
        const {puntos_j1,juegos_j1,set1_j1,set2_j1,set3_j1,saque_actual,sets_j1,ganador,set_actual} = resultado;
        const {puntos_j2,juegos_j2,set1_j2,set2_j2,set3_j2,sets_j2,} = resultado;
        let {hora_inicio}= resultado;
        const currentSet= this.curretnSet(resultado);
        console.log(currentSet);
        const nombrej1= Partidos.jugadores[0].nombre;
        const nombrej2= Partidos.jugadores[1].nombre;
        let duracion=moment();
        let claseTime="VivoSpain";
        //const infopista=`Pista: ${pista} Ronda: ${ronda}`;

        let claseSaque1="iconoSaqueSpain";
        let claseSaque2="iconoSaqueSpain";
        
        if(saque_actual===1){
            claseSaque2="iconoSaque_hiddenSpain";
        }else{
            claseSaque1="iconoSaque_hiddenSpain";
        }
if(!ronda){
    ronda="Cuartos de finalSpain";
}
hora_prevista=moment.utc(hora_prevista).local().format('HH:mm');
const ahora_h=moment.utc().local().format('HH');
   const ahora_m=moment().format('mm');
   const inicio=moment.utc(hora_inicio).format('HH');
   const inicio_h=moment.utc(hora_inicio).format('HH');
   const inicio_m=moment.utc(hora_inicio).local().format('mm');
console.log(hora_inicio);
const innicio=moment.utc(hora_inicio).format('YYYY/MM/DD HH:mm');
const innicio2=moment.utc(hora_inicio).local();
console.log('inicio' + innicio);
const inico2=moment.utc(innicio).format('YYYY/MM/DD HH:mm');
console.log('iniciow' + inico2);
const ahora=moment.utc().local();


console.log('ahora' + innicio2.diff(ahora,'minutes'));
const diferencia=moment.duration().subtract(innicio2);


console.log('diferencia' + moment.utc(diferencia).format('HH:mm'));
const ahoraa=moment.utc().local().format('YYYYMMDD HH:mm');
const innicio3=moment.utc(hora_inicio).format('YYYYMMDD HH:mm');
console.log('ahora ' + ahoraa + '; inicio: ' + innicio3);
var date  = moment(ahoraa, "YYYYMMDD HH:mm");
console.log(date.format('YYYYMMDD HH:mm'));
var horas_ = moment(innicio3, "YYYYMMDD HH:mm");
var minutos_ = moment(innicio3, "YYYYMMDD HH:mm");
var minutos_ = moment(innicio3, "YYYYMMDD HH:mm:ss");
console.log('horas_' + horas_.format('HH') + 'minutos_' + minutos_.format('mm'));
var horas = date.diff(horas_, "hours");
var minutos = date.diff(minutos_, "minutes");
var segundos = date.diff(minutos_, "seconds");
const horass=minutos/60;
const resto=minutos%60;
let min=Math.floor(segundos/60);

let h=Math.floor(min/60);
min=min-h*60;
console.log(segundos+' s '+min+' m ' + h +'h'); // "7d"
console.log(date.diff(minutos_, "minutes") + "m"); // "7m"

if(hora_inicio){

   const ahora_h=moment.utc().local().format('HH');
   const ahora_m=moment().format('mm');
   const inicio_h=moment.utc(hora_inicio).format('HH');
   const inicio_m=moment.utc(hora_inicio).local().format('mm');

    console.log(ahora_h);
    console.log(ahora_m);
    console.log(ahora_h-inicio_h);
    console.log(ahora_m-inicio_m);

   

    
    claseTime="VivoSpain";
}


if (min<10){
    min=`0${min}`;
} 

if (h<10){
    h=`0${h}`;
}          

       const clases=calsesSet(set1_j1,set1_j2,set2_j1,set2_j2,set3_j1,set3_j2,sets_j1,sets_j2,puntos_j1,puntos_j2);
       let clasej1='';
       let clasej2='';
       let opacidad='';
       if(estado==2){
        opacidad='opacidadSpain';
           if(ganador===1)
           clasej1='ganaSpain';
           else
           clasej2='ganaSpain';
       }
        

        const {
            cs1j1,
            cs2j1,
            cs3j1,
            cs4j1,
            cs1j2,
            cs2j2,
            cs3j2,
            cs4j2,
            cp1j1,
            cp2j2,
            set_totalj1,
            set_totalj2,
        }=clases[0];
        switch (set_actual) {
            case 1:
                SetActualj1=set1_j1;
                SetActualj2=set1_j2;
                break;
            case 2:
                SetActualj1=set2_j1;
                SetActualj2=set2_j2;
                break;
            case 3:
                SetActualj1=set3_j1;
                SetActualj2=set3_j2;
                break;
            default:
                break;
        }

        return (
            
            
        <Fragment>
            
            <div className="PartidoSpain" onClick={this.props.Mostrar} >	
                <div className={`informacionSpain ${opacidad}`}>
                    <div className="infoSpain">
                        {estado==1 && (
                               
                               <div className="info_Spain">
                               <div className={claseTime}><i class="fas fa-circle"></i>{`${h}:${min}`}</div>
                               <div className="pistaSpain">{`Pista ${pista}`}</div>
                               
                               
                               
                               </div>
                                
                            
                        )}
                       {estado==2 && (
                               
                                    <div  className="info_Spain">
                                    <div className={claseTime} class="hora_previstaSpain">Finalizado</div>
                                    <div className="pistaSpain">{`Pista ${pista}`}</div>
                                    
                                    
                                    
                                    </div>
                               
                           
                        )}
                        {estado==0 && (
                               
                                    <div  className="info_Spain">
                                    <div className={claseTime} class="hora_previstaSpain"><i className="far fa-clock icono" ></i>{`${hora_prevista}`}</div>
                                    <div className="pistaSpain">{`Pista ${pista}`}</div>
                                    
                                    
                                    
                                    </div>
                                
                            
                        )}
                        
                        
                        
                    </div>

                    <div className="JugadorSpain">
                        <div class="info1Spain">
                            <div className={`nombreSpain ${clasej1}`}>{nombrej1}</div>
                            {estado==1 && (<div className="flexSpain flex2Spain">
                                <div className="pelotaSpain">
                                    <img className={claseSaque1} src={pelota} alt=""/></div>
                                                                           
                                <div className={`puntos_pSpain tamanoNumeros ${cp1j1}`}>{puntos_j1}</div>
                            </div>
                            )}
                        
                        <div className="info2Spain tamanoNumeros">
                            <div className={`setsSpain ${clasej1}`}>{set1_j1}</div>
                            
                                <div className="auxiliar_flexSpain">
                                <div className={`setsSpain ${cs2j1}`}>{set2_j1}</div>
                                <div className={`setsSpain ${cs3j1}`}>{set3_j1}</div>
                                </div>
                            
                            
                        </div>
                        </div>
                    </div>
    
    
                    <div className="JugadorSpain">
    
                        <div className="info1Spain">
                            <div className={`nombreSpain ${clasej2}`}>{nombrej2}</div>
                            {estado==1 && (
                                <div className="flexSpain flex2Spain">
                               <div className="pelotaSpain">
                                   <img className={claseSaque2} src={pelota} alt=""/></div>
                               <div className={`puntos_pSpain tamanoNumeros ${cp2j2}`}>{puntos_j2}</div>
                               </div>   
                            )}
                            
                        
                        <div className="info2Spain tamanoNumeros">
                            <div className={`setsSpain ${cs1j2}`}>{set1_j2}</div>
                           
                                
   
                                <div className="auxiliar_flexSpain"> 
                                <div className={`setsSpain ${cs2j2}`}>{set2_j2}</div>
                                <div className={`setsSpain ${cs3j2}`}>{set3_j2}</div>
                                </div>
                           
                        </div>
                        </div>
                    </div>   
                   
                    
                </div>       
            </div>
            
		
		</Fragment>
        );		

}
}
export default DetallePartidoCtoSpain;