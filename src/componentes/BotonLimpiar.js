import React from 'react';
import '../css/Boton.css';

function BotonLimpiar (props) {
    return (
        <button className='botonLimpiar'
          onClick = {() => props.manejarLimpiar()}>
          {props.children}
        </button>
    );
}

export default BotonLimpiar;