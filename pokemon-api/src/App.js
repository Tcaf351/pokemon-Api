import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import axios from 'axios';

// components
import Navbar from './components/Navbar';

// Pages
import AllPokemon from './Pages/AllPokemon';
import SearchedPokemon from './Pages/SeachedPokemon';
import SinglePokemon from './Pages/SinglePokemon';


function App() {

    const [allPokemon, setAllPokemon] = useState();


  









    // bring in api
    useEffect(() => {
        const fetchApi = async () => {

            let allPokemonData = [];
            
            for (let i = 1; i <= 50; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            const response = await axios.get(url)
            // console.log(response.data);
            allPokemonData.push(response.data);
            console.log(allPokemonData)
            }
            setAllPokemon(allPokemonData);
        }
        fetchApi()
    }, []);

  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route path="/" element={ <AllPokemon allPokemon={allPokemon} /> } />
          <Route path='/singlepokemon/:id' element={ <SinglePokemon /> } />
          <Route path="/pokemon" element={ <SearchedPokemon /> } />
        </Routes>

      </div>
    </Router> 
  );
}

export default App;