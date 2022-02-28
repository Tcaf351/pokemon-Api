import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import axios from 'axios';

// components
import Pokemon from './components/Pokemon';
import singlePokemon from './Pages/singlePokemon';


function App() {
  const [pokemons, setPokemons] = useState([]);

  // bring in api
  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50`);
      // console.log(response.data.results);
      setPokemons(response.data.results);
    };
    fetchApi()
  }, []);
console.log(pokemons.name);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/pokemon" element={ <singlePokemon /> } />
        </Routes>



        {/* render each pokemon from api (calling the first 50) */}
        { pokemons.map((pokemon, index) => (
          <Pokemon pokemon={pokemon} index={index} />
          )) }
      </div>
    </Router> 
  );
}

export default App;