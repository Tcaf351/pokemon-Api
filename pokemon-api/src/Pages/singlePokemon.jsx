import { useState } from 'react';

// packages
import axios from 'axios';

const SinglePokemon = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [searchedPokemons, setSearchedPokemons] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        console.log(response.data);
        // console.log(response.data.types[0].type.name);

        setSearchedPokemons(response.data);
    };

    const handleChange = (e)=> {
        setPokemonName(e.target.value);
    };

    return ( 
        <div>
            <h1>Single Pokemon</h1>
            <form onSubmit={ handleSubmit }>
                <label>Search a Pokemon</label>
                <input type="text"
                        placeholder='Pokemon'
                        onChange={handleChange}
                        value={pokemonName} />
                <button>Search</button>
            </form>

        { searchedPokemons == "" ? "" : 
            <div>
                <h1>{ searchedPokemons.name }</h1>
                <img src={ searchedPokemons.sprites.front_default } alt="pokemon" /> 
                <img src={ searchedPokemons.sprites.front_shiny } alt="shiny pokemon" /> 
                <h1>{ searchedPokemons.types[0].type.name }</h1> 
            </div>
        }
          
        </div>
     );
}
 
export default SinglePokemon;