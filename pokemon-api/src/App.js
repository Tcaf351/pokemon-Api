import { useState, useEffect } from 'react';

import axios from 'axios';

// components
import Pokemon from './components/Pokemon';


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


  return (
    <div>
      {/* render each pokemon from api (calling the first 50) */}
      { pokemons.map(pokemon => (
        <Pokemon pokemon={pokemon} />
      )) }
    </div>
  );
}

export default App;