import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';

// Pages
import AllPokemon from './Pages/AllPokemon';
import SearchedPokemon from './Pages/SeachedPokemon';
import SinglePokemon from './Pages/SinglePokemon';


function App() {
  

  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route path="/" element={ <AllPokemon /> } />
          <Route path='/singlepokemon/:id' element={ <SinglePokemon /> } />
          <Route path="/pokemon" element={ <SearchedPokemon /> } />
        </Routes>

      </div>
    </Router> 
  );
}

export default App;