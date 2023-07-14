import logo from './logo.svg';
import './App.css';
import Pokedex from './Pokedex';

function App() {
  return (
    <div>
      <div id="title-container" className='container text-center'>
        <h1>Pokedex</h1>
      </div>
      <div className='container py-3'>
        <div className='row justify-content-around card-group' id='pokedex-container'> 
            < Pokedex />
        </div>
      </div>
    </div>
  );
}

export default App;
