import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Pages
import AllPokemon from './Pages/AllPokemon';
import Home from './Pages/Home';
import SinglePokemon from './Pages/SinglePokemon';


function App() {
  
  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path="/allpokemon" element={ <AllPokemon /> } />
          <Route path="/pokemon" element={ <SinglePokemon /> } />
        </Routes>

      </div>
    </Router> 
  );
}

export default App;