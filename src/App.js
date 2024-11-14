import logo from './logo.svg';
import './App.css';
import { PruebasComponentes } from './Componentes/PruebasComponentes';
import Temporizador from './Componentes/Temporizador';
import ListaPokemon from './Componentes/ListaPokemon';
import BreakingBad from './Componentes/BreakingBad';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <PruebasComponentes></PruebasComponentes>
        <Temporizador tiempoInicial={10}></Temporizador>
        <ListaPokemon></ListaPokemon>
        <BreakingBad></BreakingBad>
      </header>
    </div>
  );
}

export default App;
