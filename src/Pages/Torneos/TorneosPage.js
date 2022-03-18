
import React from 'react';
import { obtenerValorParametro, getTorneosId } from '../../Utils/Utils';
import TorneosWrapper from '../../Components/TorneosWrapper';

export const TorneosPage = () => {
  const idsTorneo = obtenerValorParametro('id');
  let torneosIds = null;

  if (idsTorneo) {
    torneosIds = getTorneosId(obtenerValorParametro('id'));
  }
  console.log(torneosIds)
  return (
    <section className="TorneosPage">
      {torneosIds && (
      <TorneosWrapper torneos={torneosIds} />
      )}
    </section>
  );
};

export default TorneosPage;
