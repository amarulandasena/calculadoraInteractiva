import './App.css';
import logo from './img/A&D_SOFT.jpg';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';

function App() {
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
          <Pantalla />
        </article>
        <article className='fila'>
          <Boton> 1 </Boton>
          <Boton> 2 </Boton>
          <Boton> 3 </Boton>
          <Boton> + </Boton>
        </article>
        <article className='fila'>
          <Boton> 4 </Boton>
          <Boton> 5 </Boton>
          <Boton> 6 </Boton>
          <Boton> - </Boton>
        </article>
        <article className='fila'>
          <Boton> 7 </Boton>
          <Boton> 8 </Boton>
          <Boton> 9 </Boton>
          <Boton> * </Boton>
        </article>
        <article className='fila'>
          <Boton> = </Boton>
          <Boton> 0 </Boton>
          <Boton> . </Boton>
          <Boton> / </Boton>
        </article>
        <article className='fila'></article>
      </section>
    </div>
  );
}

export default App;
