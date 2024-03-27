import './App.css';
import Pokedex from './components/Pokedex';
import Favorites from './components/Favorites';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useState } from 'react';
//
function App() {x
  const [pokemon, setPokemon] = useState([]);
  const [value, setValue] = useState("");
  console.log(pokemon)
  //
  const filterList = () => {
    return pokemon.filter((item) =>
    filterField(item).toLowerCase().includes(value.toLocaleLowerCase())
    );
};
//
  return (
    <BrowserRouter>
      <NavBar pokemon={pokemon} setPokemon={setPokemon} filterField={(item) => item.name.toString()} value={value} setValue={setValue} filterList={filterList} />
      <Routes>
        <Route path='/' element={
          <div className='d-flex flex-wrap justify-content-evenly'>
            <Pokedex pokemon={pokemon} setPokemon={setPokemon} value={value} setValue={setValue} filterList={filterList} filterField={(item) => item.name.toString()} />
          </div>
        } />
        <Route path='/favoris' element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
