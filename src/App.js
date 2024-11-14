import logo from './logo.svg';
import './App.css';
import { PruebasComponentes } from './Componentes/PruebasComponentes';
import Temporizador from './Componentes/Temporizador';
import ListaPokemon from './Componentes/ListaPokemon';

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
      </header>
    </div>
  );
}

export default App;
