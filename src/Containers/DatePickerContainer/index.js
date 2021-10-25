import React, { useState, useEffect } from "react";


// Importar Datepicker
import { DatePicker, DatePickerInput } from 'rc-datepicker';

// Importa el estilo predeterminado
import 'rc-datepicker/lib/style.css';
 

export const DatePickerContainer = ({onChange}) =>{
    const [actualDate, setActualDate] = useState('2021-10-23');
    const onchangeValue = (Date) =>{
        setActualDate(Date);
        onChange(Date);
    }
    return (
        <div>
            <DatePickerInput
                onChange={onChange}
                value={actualDate}
                className='my-custom-datepicker-component'
            />

            {/* this renders only a fixed datepicker */}
            <DatePicker onChange={onChange} value={actualDate} />
        </div>
    );
}
export default DatePickerContainer;
// export default class App extends React.Component {
//     constructor(props, context) {
//         super(props, context);

//         // Estado inicial con fecha
//         this.state = {
//             // or Date or Moment.js
//             selectedDate: '2021-10-23'
//         };

//         // Este enlace es necesario para que 'this' funcione en la devolución de llamada
//         this.onChange = this.onChange.bind(this);
//     }

//     onChange(date) {
// 		this.setState({
// 			selectedDate: date
// 		});
//         console.log(date);
// 	}

//     render() {
        
//     }
// }