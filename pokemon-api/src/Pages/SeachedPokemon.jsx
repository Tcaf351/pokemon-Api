import { useState } from 'react';

// packages
import axios from 'axios';

const SearchedPokemon = () => {
    const [pokemonName, setPokemonName] = useState(''); // for input
    const [searchedPokemon, setSearchedPokemon] = useState(); // for state

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        console.log(response.data);

        setSearchedPokemon(response.data);
    };

    const handleChange = (e)=> {
        setPokemonName(e.target.value);
    };

    return ( 
        <div className='bg-gray-200 dark:bg-slate-900'>
            <h1>Single Pokemon</h1>
            <form onSubmit={ handleSubmit }>
                <label>Search a Pokemon</label>
                <input type="text"
                        placeholder='Pokemon'
                        onChange={handleChange}
                        value={pokemonName} />
                <button>Search</button>
            </form>

            {searchedPokemon && <div>
                <h1>{ searchedPokemon.name }</h1>
                <img src={ searchedPokemon.sprites?.front_default } alt="pokemon" /> 
                <img src={  searchedPokemon.sprites?.front_shiny } alt="shiny pokemon" /> 
                <h1>{ searchedPokemon.types[0].type.name }</h1>  
                <h2>{searchedPokemon.weight}lbs</h2>
             </div>
             }

          
        </div>
     );
}
 
export default SearchedPokemon;