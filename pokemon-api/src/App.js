import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

// components
import Navbar from './components/Navbar';

// Pages
import AllPokemon from './Pages/AllPokemon';
import SinglePokemon from './Pages/SinglePokemon';


function App() {
  const [arrayOfPokemon, setArrayOfPokemon] = useState();

  const pushAllPokemonToArray = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
    const data = response.data.results;
    // console.log(data);
    let pokemonNames = [];
    data.forEach(({name}) => {
      pokemonNames.push(`https://pokeapi.co/api/v2/pokemon/${name}`)
    })
    console.log([...pokemonNames]);
    setArrayOfPokemon(pokemonNames)
  }

  useEffect(() => {
    pushAllPokemonToArray()
  }, [])
  // console.log(arrayOfPokemon);
  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route path="/" element={ <AllPokemon /> } />
          <Route path="/pokemon" element={ <SinglePokemon /> } />
        </Routes>

        {/* {
          arrayOfPokemon.map((pokemon) => (
            <div>
              <h1>{pokemon}</h1>
            </div>
          ))

        } */}

      </div>
    </Router> 
  );
}

export default App;