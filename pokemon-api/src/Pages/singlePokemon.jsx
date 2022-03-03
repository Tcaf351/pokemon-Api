import { useState, useEffect } from 'react';

// packages
import axios from 'axios';

const SinglePokemon = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [searchedPokemons, setSearchedPokemons] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        console.log(response.data);
        setSearchedPokemons(response.data);
    };

    const handleChange = (e)=> {
        e.preventDefault();
        setPokemonName(e.target.value);
    };

    useEffect(() => {
        
    }, [searchedPokemons])

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


            <h1>{searchedPokemons.name}</h1>
            <img src={searchedPokemons.sprites.front_default} alt="Pokemon" /> 
            <img src={searchedPokemons.sprites.front_shiny} alt="Pokemon" /> 

          
        </div>
     );
}
 
export default SinglePokemon;