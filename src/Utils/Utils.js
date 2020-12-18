import moment from 'moment';
export const getPartido = (id,data) => {

    let datosPartido = []; 
    data.map((partido =>{
        console.log(partido);
        if(partido.torneo_id === id ){

            datosPartido.push(partido)
        }
    }))
    return datosPartido;

}
export const createInfo = (Partidos,torneos) =>{
    let infoTorneos=[];
    let aux1=[];
    let aux=[];
    const seconds=moment.utc().local().format('ss');

        console.log('seconds:'+seconds);


        switch ((seconds < 40 ? 0 :((40<seconds && seconds<50) ? 1 : ((seconds>=50) ? 2 : 0)))) {
            
          case 0:
            torneos.map((torneo)=>{
                aux1=[];
                Partidos.map((partido) => {    
                
                    if(partido.torneo.id==torneo.id){
                        if(partido.estado==1){
                            aux1.push(partido);  
                        }
                    }  
                })
                aux={
                    "torneo":torneo.id,
                    "nombre":torneo.nombre,
                    "genero":torneo.genero,
                    "partidos":aux1,
                };
                infoTorneos.push(aux)
             })
            break;
            case 1:
                torneos.map((torneo)=>{
                    aux1=[];
                    Partidos.map((partido) => {    
                    
                        if(partido.torneo.id==torneo.id){
                            if(partido.estado==2){
                                aux1.push(partido);  
                            }
                            
                        }  
                    })
                    aux={
                        "torneo":torneo.id,
                        "nombre":torneo.nombre,
                        "genero":torneo.genero,
                        "partidos":aux1,
                    };
                    infoTorneos.push(aux)
                 })
            break;
            case 2:
                torneos.map((torneo)=>{
                    aux1=[];
                    Partidos.map((partido) => {    
                    
                        if(partido.torneo.id==torneo.id){
                            if(partido.estado==0){
                                aux1.push(partido);  
                            }
                        }  
                    })
                    aux={
                        "torneo":torneo.id,
                        "nombre":torneo.nombre,
                        "genero":torneo.genero,
                        "partidos":aux1,
                    };
                    infoTorneos.push(aux)
                 })
            break;
          default:
            torneos.map((torneo)=>{
                aux1=[];
                Partidos.map((partido) => {    
                
                    if(partido.torneo.id==torneo.id){
                        if(partido.estado==1){
                            aux1.push(partido);  
                        }
                    }  
                })
                aux={
                    "torneo":torneo.id,
                    "nombre":torneo.nombre,
                    "genero":torneo.genero,
                    "partidos":aux1,
                };
                infoTorneos.push(aux)
             })
            break;
        }
 
  
return infoTorneos;
}

export const createInfoSpain = (Partidos,torneos,nombre_torneo) =>{
    let infoTorneos=[];
    let aux1=[];
    let aux=[];
    const seconds=moment.utc().local().format('ss');

        console.log('seconds:'+seconds);

        torneos.map((torneo)=>{
            if(torneo.id>=10){
                aux1=[];
                Partidos.map((partido) => {    
                
                    if(partido.torneo.id==torneo.id){
                        if(partido.estado==1){
                            aux1.push(partido);  
                        }
                    }  
                })
                aux={
                    "torneo":torneo.id,
                    "nombre":torneo.nombre,
                    "genero":torneo.genero,
                    "partidos":aux1,
                };
                infoTorneos.push(aux)
            }
            
         })
        /*switch ((seconds < 40 ? 0 :((40<seconds && seconds<50) ? 1 : ((seconds>=50) ? 2 : 0)))) {
            
          case 0:
            torneos.map((torneo)=>{
                if(torneo.nombre==nombre_torneo){
                    aux1=[];
                    Partidos.map((partido) => {    
                    
                        if(partido.torneo.id==torneo.id){
                            if(partido.estado==1){
                                aux1.push(partido);  
                            }
                        }  
                    })
                    aux={
                        "torneo":torneo.id,
                        "nombre":torneo.nombre,
                        "genero":torneo.genero,
                        "partidos":aux1,
                    };
                    infoTorneos.push(aux)
                }
                
             })
            break;
            case 1:
                torneos.map((torneo)=>{
                    if(torneo.nombre==nombre_torneo){
                    aux1=[];
                    Partidos.map((partido) => {    
                    
                        if(partido.torneo.id==torneo.id){
                            if(partido.estado==2){
                                aux1.push(partido);  
                            }
                            
                        }  
                    })
                    aux={
                        "torneo":torneo.id,
                        "nombre":torneo.nombre,
                        "genero":torneo.genero,
                        "partidos":aux1,
                    };
                    infoTorneos.push(aux)
                }
                 })
            break;
            case 2:
                torneos.map((torneo)=>{
                    if(torneo.nombre==nombre_torneo){
                    aux1=[];
                    Partidos.map((partido) => {    
                    
                        if(partido.torneo.id==torneo.id){
                            if(partido.estado==0){
                                aux1.push(partido);  
                            }
                        }  
                    })
                    aux={
                        "torneo":torneo.id,
                        "nombre":torneo.nombre,
                        "genero":torneo.genero,
                        "partidos":aux1,
                    };
                    infoTorneos.push(aux)
                    }
                 })
            break;
          default:
            torneos.map((torneo)=>{
                if(torneo.nombre==nombre_torneo){
                aux1=[];
                Partidos.map((partido) => {    
                
                    if(partido.torneo.id==torneo.id){
                        if(partido.estado==1){
                            aux1.push(partido);  
                        }
                    }  
                })
                aux={
                    "torneo":torneo.id,
                    "nombre":torneo.nombre,
                    "genero":torneo.genero,
                    "partidos":aux1,
                };
                infoTorneos.push(aux)
                }
             })
            break;
        }*/
 
  
return infoTorneos;
}

export const filtraTorneo_id = (Torneos,torneo_id) =>{
    let torneo_filtrado=[];
    Torneos.map((torneo) => {    
                    
        if(torneo.id==torneo_id){
           
                torneo_filtrado.push(torneo);  
        }  
    })

return torneo_filtrado;
}


export const createInfoPadel = (Partidos,torneo) =>{

    let info_Torneos=[];
    let aux1=[];
    let aux=[];
    const seconds=moment.utc().local().format('ss');

       
    var contador=0;
       
console.log(torneo)
      
                aux1=[];
                Partidos.map((partido) => {    
                    console.log(partido.torneo.id);

                    if(partido.torneo.id==torneo){   
                        aux1.push(partido);       
                    }  
                })
                aux={
                    "torneo":torneo,
                    "nombre":"partido.torneo.nombre",
                    "genero":"partido.torneo.genero",
                    "partidos":aux1,
                };
                console.log(aux)
                info_Torneos.push(aux)
                
       
            
      
        /*switch ((seconds < 40 ? 0 :((40<seconds && seconds<50) ? 1 : ((seconds>=50) ? 2 : 0)))) {
            
          case 0:
            torneos.map((torneo)=>{
                if(torneo.nombre==nombre_torneo){
                    aux1=[];
                    Partidos.map((partido) => {    
                    
                        if(partido.torneo.id==torneo.id){
                            if(partido.estado==1){
                                aux1.push(partido);  
                            }
                        }  
                    })
                    aux={
                        "torneo":torneo.id,
                        "nombre":torneo.nombre,
                        "genero":torneo.genero,
                        "partidos":aux1,
                    };
                    infoTorneos.push(aux)
                }
                
             })
            break;
            case 1:
                torneos.map((torneo)=>{
                    if(torneo.nombre==nombre_torneo){
                    aux1=[];
                    Partidos.map((partido) => {    
                    
                        if(partido.torneo.id==torneo.id){
                            if(partido.estado==2){
                                aux1.push(partido);  
                            }
                            
                        }  
                    })
                    aux={
                        "torneo":torneo.id,
                        "nombre":torneo.nombre,
                        "genero":torneo.genero,
                        "partidos":aux1,
                    };
                    infoTorneos.push(aux)
                }
                 })
            break;
            case 2:
                torneos.map((torneo)=>{
                    if(torneo.nombre==nombre_torneo){
                    aux1=[];
                    Partidos.map((partido) => {    
                    
                        if(partido.torneo.id==torneo.id){
                            if(partido.estado==0){
                                aux1.push(partido);  
                            }
                        }  
                    })
                    aux={
                        "torneo":torneo.id,
                        "nombre":torneo.nombre,
                        "genero":torneo.genero,
                        "partidos":aux1,
                    };
                    infoTorneos.push(aux)
                    }
                 })
            break;
          default:
            torneos.map((torneo)=>{
                if(torneo.nombre==nombre_torneo){
                aux1=[];
                Partidos.map((partido) => {    
                
                    if(partido.torneo.id==torneo.id){
                        if(partido.estado==1){
                            aux1.push(partido);  
                        }
                    }  
                })
                aux={
                    "torneo":torneo.id,
                    "nombre":torneo.nombre,
                    "genero":torneo.genero,
                    "partidos":aux1,
                };
                infoTorneos.push(aux)
                }
             })
            break;
        }*/
 
  
return info_Torneos;
}


export const calsesSet = (set1j1,set1j2,set2j1,set2j2,set3j1,set3j2,set4j1,set4j2,puntosj1,puntosj2) =>{
    let s1j1='';
    let s1j2='';
    let s2j1='';
    let s2j2='';
    let s3j1='';
    let s3j2='';
    let s4j1='';
    let s4j2='';
    let p1j1='';
    let p1j2='';
    let sets_totalj1='';
    let sets_totalj2='';
    let calseSet=[];


    if((puntosj1=='AD')){
        p1j1="gana";
        p1j2="pierde";
        }else if((puntosj2=='AD')){
                p1j2="gana";
                p1j1="pierde";
            }else if ((puntosj1>puntosj2)  ) {
                p1j1="gana";
                p1j2="pierde";
                }else if((puntosj2>puntosj1)  ){
                    p1j2="gana";
                    p1j1="pierde";
                }
    
    
    
    if (set1j1>set1j2) {
        s1j1="gana";
        s1j2="pierde";
    }else if(set1j2>set1j1){
        s1j2="gana";
        s1j1="pierde";
    }

    if (set2j1>set2j2) {
        s2j1="gana";
        s2j2="pierde";
    }else if(set2j2>set2j1){
        s2j2="gana";
        s2j1="pierde";
    }

    if (set3j1>set3j2) {
        s3j1="gana";
        s3j2="pierde";
    }else if(set3j2>set3j1){
        s3j2="gana";
        s3j1="pierde";
    }

    if (set4j1>set4j2) {
        s4j1="gana";
        s4j2="pierde";
    }else if(set4j2>set4j1){
        s4j2="gana";
        s4j1="pierde";
    }

    if((set1j1+set2j1+set3j1+set4j1)>(set1j2+set2j2+set3j2+set4j2)){
        sets_totalj1="gana";
        sets_totalj2="pierde";
    }else if((set1j1+set2j1+set3j1+set4j1)<(set1j2+set2j2+set3j2+set4j2)){
        sets_totalj2="gana";
        sets_totalj1="pierde";
    }else{
        sets_totalj2="pierde";
        sets_totalj1="pierde";
    }

    const aux={
        "cs1j1":s1j1,
        "cs1j2":s1j2,
        "cs2j1":s2j1,
        "cs2j2":s2j2,
        "cs3j1":s3j1,
        "cs3j2":s3j2,
        "cs4j1":s4j1,
        "cs4j2":s4j2,
        "cp1j1":p1j1,
        "cp2j2":p1j2,
        "set_totalj1":sets_totalj1,
        "set_totalj2":sets_totalj2,
    };
    calseSet.push(aux);
  
return calseSet;
}
