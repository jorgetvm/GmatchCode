import React from "react";
import {filtraPartidosDependsTorneoId,ordenaPartidos} from '../../../Utils/Utils'

export const normalizeInfoTorneo = (listaPartidos,id_torneo) =>{
    let dataNormalized = {}
    const partidosFiltrados = filtraPartidosDependsTorneoId(listaPartidos,id_torneo);
    const partidosOrdenados = ordenaPartidos(partidosFiltrados);
    dataNormalized = partidosOrdenados;
    return dataNormalized;
}