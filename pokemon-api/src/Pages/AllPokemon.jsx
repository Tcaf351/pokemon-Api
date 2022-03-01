import { useState, useEffect } from 'react';
import axios from 'axios';

// components
import Card from '../components/Card';


const AllPokemon = () => {
    const [pokemons, setPokemons] = useState([]);

    // bring in api
    useEffect(() => {
        const fetchApi = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
        console.log(response.data.results);
        setPokemons(response.data.results);
        };
        fetchApi()
    }, []);


    return ( 
        <div>
            <h1>All Pokemon</h1>

            {/* render each pokemon from api (calling the first 50) */}
            { pokemons.map((pokemon, index) => (
            <Card pokemon={pokemon} index={index} />
            )) }
        </div>
     );
}
 
export default AllPokemon;