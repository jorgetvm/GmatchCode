import moment from 'moment';

export const getPartido = (id, data) => {
  const datosPartido = [];
  data.map(((partido) => {
    console.log(partido);
    if (partido.torneo_id === id) {
      datosPartido.push(partido);
    }
  }));
  return datosPartido;
};
export const createInfo = (Partidos, torneos) => {
  const infoTorneos = [];
  let aux1 = [];
  let aux = [];
  const seconds = moment.utc().local().format('ss');

  console.log(`seconds:${seconds}`);


  switch ((seconds < 40 ? 0 : ((seconds > 40 && seconds < 50) ? 1 : ((seconds >= 50) ? 2 : 0)))) {
    case 0:
      torneos.map((torneo) => {
        aux1 = [];
        Partidos.map((partido) => {
          if (partido.torneo.id == torneo.id) {
            if (partido.estado == 1) {
              aux1.push(partido);
            }
          }
        });
        aux = {
          torneo: torneo.id,
          nombre: torneo.nombre,
          genero: torneo.genero,
          partidos: aux1,
        };
        infoTorneos.push(aux);
      });
      break;
    case 1:
      torneos.map((torneo) => {
        aux1 = [];
        Partidos.map((partido) => {
          if (partido.torneo.id == torneo.id) {
            if (partido.estado == 2) {
              aux1.push(partido);
            }
          }
        });
        aux = {
          torneo: torneo.id,
          nombre: torneo.nombre,
          genero: torneo.genero,
          partidos: aux1,
        };
        infoTorneos.push(aux);
      });
      break;
    case 2:
      torneos.map((torneo) => {
        aux1 = [];
        Partidos.map((partido) => {
          if (partido.torneo.id == torneo.id) {
            if (partido.estado == 0) {
              aux1.push(partido);
            }
          }
        });
        aux = {
          torneo: torneo.id,
          nombre: torneo.nombre,
          genero: torneo.genero,
          partidos: aux1,
        };
        infoTorneos.push(aux);
      });
      break;
    default:
      torneos.map((torneo) => {
        aux1 = [];
        Partidos.map((partido) => {
          if (partido.torneo.id == torneo.id) {
            if (partido.estado == 1) {
              aux1.push(partido);
            }
          }
        });
        aux = {
          torneo: torneo.id,
          nombre: torneo.nombre,
          genero: torneo.genero,
          partidos: aux1,
        };
        infoTorneos.push(aux);
      });
      break;
  }


  return infoTorneos;
};

export const createInfoSpain = (Partidos, torneos, nombre_torneo) => {
  const infoTorneos = [];
  let aux1 = [];
  let aux = [];
  const seconds = moment.utc().local().format('ss');

  console.log(`seconds:${seconds}`);

  torneos.map((torneo) => {
    if (torneo.id >= 10) {
      aux1 = [];
      Partidos.map((partido) => {
        if (partido.torneo.id == torneo.id) {
          if (partido.estado == 1) {
            aux1.push(partido);
          }
        }
      });
      aux = {
        torneo: torneo.id,
        nombre: torneo.nombre,
        genero: torneo.genero,
        partidos: aux1,
      };
      infoTorneos.push(aux);
    }
  });

  return infoTorneos;
};

/**
 * filta la info de un torneo mediante el id
 * @param {array} Torneos array de torneos
 * @param {string} torneo_id id a buscar
 * @returns {object}
 */
export const filtraTorneo_id = (Torneos, torneo_id) => {
  const torneo_filtrado = [];
  Torneos.map((torneo) => {
    if (torneo.id == torneo_id || torneo.hashid == torneo_id) {
      torneo_filtrado.push(torneo);
    }
  });

  return torneo_filtrado;
};

/**
 * Filtra los partidos correspondientes a un torneo según id
 * @param {array} partidos lista de partidos
 * @param {string} torneo_id id del torneo
 * @returns {object}
 */
export const filtraPartidosDependsTorneoId = (partidos, torneo_id) => {
  const result = [];
  partidos.map((partido) => {
    if (partido.torneo && partido.torneo.id == torneo_id ||  partido.torneo.hashid == torneo_id) {
      result.push(partido);
    }
  });

  return result;
};

/**
 * ordena los partios según el estado
 * @param {array} partidos lista de partidos
 * @returns {object}
 */
export const ordenaPartidos = (partidos) => {
  let newPartidos = partidos;
  newPartidos.sort((a, b) => {
    if (a.estado == 1 && b.estado != 1) {
      return 1;
    }
    if (a.estado == 0 && b.estado == 2) {
      return 1;
    }
    return -1;
  });
  newPartidos = newPartidos.reverse();
  return newPartidos;
};

export const createInfoPadel = (Partidos, torneo) => {
  const info_Torneos = [];
  let aux1 = [];
  let aux = [];
  const seconds = moment.utc().local().format('ss');


  const contador = 0;

  console.log(torneo);

  aux1 = [];
  Partidos.map((partido) => {
    console.log(partido.torneo.id);

    if (partido.torneo.id == torneo) {
      aux1.push(partido);
    }
  });
  aux = {
    torneo,
    nombre: 'partido.torneo.nombre',
    genero: 'partido.torneo.genero',
    partidos: aux1,
  };
  console.log(aux);
  info_Torneos.push(aux);


  return info_Torneos;
};


export const getClasesSet = (set1j1, set1j2, set2j1, set2j2, set3j1, set3j2, set4j1, set4j2, puntosj1, puntosj2) => {
  let s1j1 = '';
  let s1j2 = '';
  let s2j1 = '';
  let s2j2 = '';
  let s3j1 = '';
  let s3j2 = '';
  let s4j1 = '';
  let s4j2 = '';
  let p1j1 = '';
  let p1j2 = '';
  let sets_totalj1 = '';
  let sets_totalj2 = '';
  let clasesSet = {};


  if ((puntosj1 == 'AD')) {
    p1j1 = 'gana';
    p1j2 = '';
  } else if ((puntosj2 == 'AD')) {
    p1j2 = 'gana';
    p1j1 = '';
  } else if ((puntosj1 > puntosj2)) {
    p1j1 = 'gana';
    p1j2 = '';
  } else if ((puntosj2 > puntosj1)) {
    p1j2 = 'gana';
    p1j1 = '';
  }


  if (set1j1 > set1j2) {
    s1j1 = 'gana';
    s1j2 = 'pierde';
  } else if (set1j2 > set1j1) {
    s1j2 = 'gana';
    s1j1 = 'pierde';
  }

  if (set2j1 > set2j2) {
    s2j1 = 'gana';
    s2j2 = 'pierde';
  } else if (set2j2 > set2j1) {
    s2j2 = 'gana';
    s2j1 = 'pierde';
  }

  if (set3j1 > set3j2) {
    s3j1 = 'gana';
    s3j2 = 'pierde';
  } else if (set3j2 > set3j1) {
    s3j2 = 'gana';
    s3j1 = 'pierde';
  }

  if (set4j1 > set4j2) {
    s4j1 = 'gana';
    s4j2 = 'pierde';
  } else if (set4j2 > set4j1) {
    s4j2 = 'gana';
    s4j1 = 'pierde';
  }

  if ((set1j1 + set2j1 + set3j1 + set4j1) > (set1j2 + set2j2 + set3j2 + set4j2)) {
    sets_totalj1 = 'gana';
    sets_totalj2 = '';
  } else if ((set1j1 + set2j1 + set3j1 + set4j1) < (set1j2 + set2j2 + set3j2 + set4j2)) {
    sets_totalj2 = 'gana';
    sets_totalj1 = '';
  } else {
    sets_totalj2 = '';
    sets_totalj1 = '';
  }

  const aux = {
    cs1j1: s1j1,
    cs1j2: s1j2,
    cs2j1: s2j1,
    cs2j2: s2j2,
    cs3j1: s3j1,
    cs3j2: s3j2,
    cs4j1: s4j1,
    cs4j2: s4j2,
    cp1j1: p1j1,
    cp2j2: p1j2,
    set_totalj1: sets_totalj1,
    set_totalj2: sets_totalj2,
  };
  clasesSet = aux;

  return clasesSet;
};

/**
 * obtiene el set actual de un partido
 * @param {object} resultado resultado de un partido
 * @returns {number}
 */
export const getCurretnSetfromMatch = (resultado) => {
  let currentSet;
  const { sets_j1 } = resultado;
  const { sets_j2 } = resultado;
  switch (sets_j1 + sets_j2) {
    case 0:
      currentSet = 1;
      break;

    case 1:
      currentSet = 2;
      break;
    case 2:
      currentSet = 3;
      break;
    case 3:
      currentSet = 4;
      break;
    case 4:
      currentSet = 5;
      break;
  }
  return currentSet;
};

/**
 * obtiene la duración de un partido
 * @param {string} hora_inicio hora de inicio
 * @returns {number,number} horas y minutos
 */
export const getMatchDuration = (hora_inicio) => {
  let duracion = {
    horas: '',
    minutos: '',
  };


  let ahora = moment.utc().format();
  ahora = moment.utc(ahora).format('YYYYMMDD HH:mm')
  let innicio =  moment.utc(hora_inicio, "YYYYMMDD HH:mm").local().format('YYYYMMDD HH:mm');
  const date = moment(ahora, 'YYYYMMDD HH:mm');
  const minutos_ = moment(innicio, 'YYYYMMDD HH:mm:ss');


  const minutos = date.diff(minutos_, 'minutes');
  const segundos = date.diff(minutos_, 'seconds');
  let min = Math.floor(segundos / 60);

  let h = Math.floor(min / 60);
  min -= h * 60;
  if(min < 10 ){
    min = `0${min}`
  }

  if (h < 10) {
    h = `${h}`;
  }
  duracion = {
    horas: h,
    minutos: min,
  };
  return duracion;
};

export const ORIENTATION = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
};

export const getDeviceInfo = () => {
  const orientation = ORIENTATION.VERTICAL;
  if (window && window.screen) {
    const { screen } = window;
    const { availWidth, availHeight, orientation } = screen;
    const { type } = orientation;

    if (type === 'landscape-primary') {
      orientation = ORIENTATION.HORIZONTAL;
    } else if (type === 'portrait-primary') {
      orientation = ORIENTATION.VERTICAL;
    }
  }
};


export const obtenerValorParametro = (parametro) => {
  const sPaginaURL = window.location.search.substring(1);
  const sURLVariables = sPaginaURL.split('&');
  for (let i = 0; i < sURLVariables.length; i++) {
    const sParametro = sURLVariables[i].split('=');
    if (sParametro[0] == parametro) {
      return sParametro[1];
    }
  }
  return null;
};

export const getTorneosId = (ids) => {
  let result = [];
  if (ids.indexOf('_') > -1) {
    result = ids.split('_');
  } else {
    result.push(ids);
  }
  return result;
};


export const filterPartidosByDate = (infoPartidos, dia, mes, año) => {
  if(infoPartidos) {
    const partidosFiltrados = [];
    const { Partidos } = infoPartidos;
    Partidos.forEach((partido) => {
      const d = new Date(partido.hora_prevista);
      const diaPartido = d.getUTCDate();
      const mesPartido = d.getUTCMonth();
      const añoPartido = d.getUTCFullYear();
      if (dia === diaPartido && mes === mesPartido && año === añoPartido) {
        partidosFiltrados.push(partido);
      }
      // partidosFiltrados.push(partido);
    });
    return partidosFiltrados;
  }else return null
};

export const checkNextDaymatchs = (infoPartidos, date) => {
  let result = false;
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + 1);
  const day = nextDate.getDate();
  const month = nextDate.getUTCMonth();
  const year = nextDate.getFullYear();
  const partidos = filterPartidosByDate(infoPartidos, day, month, year);
  if (partidos && partidos.length > 0) {
    result = true;
  }
  return result;
};

export const checkPrevDaymatchs = (infoPartidos, date) => {
  
  let result = false;
  const prevDate = new Date(date);
  
  prevDate.setDate(prevDate.getDate() - 1);
  const day = prevDate.getDate();
  const month = prevDate.getUTCMonth();
  const year = prevDate.getFullYear();
  const partidos = filterPartidosByDate(infoPartidos, day, month, year);
  if (partidos && partidos.length > 0) {
    result = true;
  }
  return result;
};
