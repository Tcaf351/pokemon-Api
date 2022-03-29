// packages
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// components
import Navbar from './components/Navbar';

// Pages
import AllPokemon from './Pages/AllPokemon';
import Error from './Pages/Error';
import SearchedPokemon from './Pages/SeachedPokemon';
import SinglePokemon from './Pages/SinglePokemon';


function App() {
  const [shinyToggle, setShinyToggle] = useState(false);


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