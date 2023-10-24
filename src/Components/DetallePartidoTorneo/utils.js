
export const calculeStats = ({stats_aces_j1,stats_aces_j2,stats_doble_faltas_j1,stats_doble_faltas_j2,stats_puntos_j1,stats_puntos_j2}) =>{
    let acesJ1porcentaje = 0;
    let acesJ2porcentaje = 0;

    if(stats_aces_j1 == 0 && stats_aces_j2 !=0){
        acesJ2porcentaje = 100;
    }
    if(stats_aces_j2 == 0 && stats_aces_j1 !=0){
        acesJ1porcentaje = 100;
    }
    if(stats_aces_j2 != 0 && stats_aces_j1 !=0){
        acesJ1porcentaje = ((stats_aces_j1+stats_aces_j2)/stats_aces_j2)*100;
        acesJ2porcentaje = ((stats_aces_j1+stats_aces_j2)/stats_aces_j1)*100;
    }

    let doblesJ1porcentaje = 0;
    let doblesJ2porcentaje = 0;

    if(stats_doble_faltas_j1 == 0 && stats_doble_faltas_j2 !=0){
        doblesJ2porcentaje = 100;
    }
    if(stats_doble_faltas_j2 == 0 && stats_doble_faltas_j1 !=0){
        doblesJ1porcentaje = 100;
    }
    if(stats_doble_faltas_j2 != 0 && stats_doble_faltas_j1 !=0){
        doblesJ1porcentaje = ((stats_doble_faltas_j1+stats_doble_faltas_j2)/stats_doble_faltas_j2)*100;
        doblesJ2porcentaje = ((stats_doble_faltas_j1+stats_doble_faltas_j2)/stats_doble_faltas_j1)*100;
    }

    let puntosJ1porcentaje = 0;
    let puntosJ2porcentaje = 0;

    if(stats_puntos_j1 == 0 && stats_puntos_j2 !=0){
        puntosJ2porcentaje = 100;
    }
    if(stats_puntos_j2 == 0 && stats_puntos_j2 !=0){
        puntosJ1porcentaje = 100;
    }
    if(stats_puntos_j2 != 0 && stats_puntos_j1 !=0){
        puntosJ1porcentaje = ((stats_puntos_j1+stats_puntos_j2)/stats_puntos_j2)*100;
        puntosJ2porcentaje = ((stats_puntos_j1+stats_puntos_j2)/stats_puntos_j1)*100;
    }

    return {acesJ1porcentaje,acesJ2porcentaje, doblesJ1porcentaje, doblesJ2porcentaje, puntosJ1porcentaje, puntosJ2porcentaje}
}