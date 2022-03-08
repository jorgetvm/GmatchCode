import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Calendar.scss';

export const Calendar = ({
  nextDayOnClick, prevDayOnClick, day, month, diaSemana,
}) => {
  const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  let bloquedButtonLeft = '';
  let bloquedButtonRight = '';
  if (prevDayOnClick) {
    bloquedButtonLeft = 'Calendar__flecha--bloqued';
  }
  if (nextDayOnClick) {
    bloquedButtonRight = 'Calendar__flecha--bloqued';
  }
  return (
    <section>
      {(day && month) && (
        <div className="Calendar">
          <div
            className={`Calendar__flecha ${bloquedButtonLeft}`}
            onClick={prevDayOnClick}
            onKeyUp={prevDayOnClick}
            role="button"
            tabIndex="0"
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div className="Calendar__dia">
            {`${diasSemana[diaSemana]} ${day} de ${meses[month]}`}
          </div>
          <div
            className={`Calendar__flecha ${bloquedButtonRight}`}
            onClick={nextDayOnClick}
            onKeyDown={nextDayOnClick}
            role="button"
            tabIndex="0"
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      )}

    </section>
  );
};

export default Calendar;
