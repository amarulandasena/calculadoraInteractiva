import './App.css';
import logo from './img/A&D_SOFT.jpg';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonLimpiar from './componentes/BotonLimpiar';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  /** Crear un hook para la App y poder capturar lo ingresado por el usuario */
  const [input, setInput] = useState('');

  const agregarInput = (valor) => {
    setInput (input + valor);
  }

  /** Crear una función para limpiar la pantalla */
  const limpiarInput = () => {
    setInput ('');
  }

  /** Crear la función para calcular los resultados */
  const calcularResultado = () => {
    if (input) {
      setInput (evaluate(input));
    } else {
      limpiarInput();
    }
  }

  return (
    <div className="App">
      <header className='contenedorLogo'>
        <img
          src = {logo}
          className = 'logo'
          alt = 'Logo A&D' />
      </header>

      <section className='contenedorCalculadora'>
        <article className='fila'>
          <Pantalla 
            input = {input} />
        </article>
        <article className='fila'>
          <Boton manejarClic = {agregarInput}> 1 </Boton>
          <Boton manejarClic = {agregarInput}> 2 </Boton>
          <Boton manejarClic = {agregarInput}> 3 </Boton>
          <Boton manejarClic = {agregarInput}> + </Boton>
        </article>
        <article className='fila'>
          <Boton manejarClic = {agregarInput}> 4 </Boton>
          <Boton manejarClic = {agregarInput}> 5 </Boton>
          <Boton manejarClic = {agregarInput}> 6 </Boton>
          <Boton manejarClic = {agregarInput}> - </Boton>
        </article>
        <article className='fila'>
          <Boton manejarClic = {agregarInput}> 7 </Boton>
          <Boton manejarClic = {agregarInput}> 8 </Boton>
          <Boton manejarClic = {agregarInput}> 9 </Boton>
          <Boton manejarClic = {agregarInput}> * </Boton>
        </article>
        <article className='fila'>
          <Boton manejarClic = {calcularResultado}> = </Boton>
          <Boton manejarClic = {agregarInput}> 0 </Boton>
          <Boton manejarClic = {agregarInput}> . </Boton>
          <Boton manejarClic = {agregarInput}> / </Boton>
        </article>
        <article className='fila'>
          <BotonLimpiar manejarLimpiar = {limpiarInput} > Limpiar </BotonLimpiar>
        </article>
      </section>
    </div>
  );
}

export default App;
