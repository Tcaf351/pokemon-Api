// packages
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';

// Pages
import AllPokemon from './Pages/AllPokemon';
import Error from './Pages/Error';
import SearchedPokemon from './Pages/SeachedPokemon';
import SinglePokemon from './Pages/SinglePokemon';


function App() {
  const [shinyToggle, setShinyToggle] = useState(false); // this allows user to toggle to the pokemon's shiny form and then back to normal


  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route path="/" element={ <AllPokemon /> } />
          <Route path='/singlepokemon/:id' element={ <SinglePokemon shinyToggle={shinyToggle} 
                                                                    setShinyToggle={setShinyToggle} /> } />
          <Route path="/pokemon" element={ <SearchedPokemon shinyToggle={shinyToggle} 
                                                            setShinyToggle={setShinyToggle} /> } />
          <Route path="*" element={ <Error /> } />
        </Routes>

      </div>
    </Router> 
  );
}

export default App;