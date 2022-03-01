import { useEffect, useState } from 'react';

// packages
import axios from 'axios';

const SinglePokemon = () => {
    const [pokemonName, setPokemonName] = useState('');

    useEffect(() => {
        const fetchSinglePokemon = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            console.log(response);
        }
        fetchSinglePokemon()
    }, []);

    const handleChange = (e)=> {
        e.preventDefault();
        setPokemonName(e.target.value);
    };

    

    return ( 
        <div>
            <h1>Single Pokemon</h1>
            <label>Search a Pokemon</label>
            <input type="text"
                    placeholder='Pokemon'
                    onChange={handleChange}
                    value={pokemonName} />
                    <h1>{pokemonName}</h1>
        </div>
     );
}
 
export default SinglePokemon;