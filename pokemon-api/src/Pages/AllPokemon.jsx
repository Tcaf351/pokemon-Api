import { useState, useEffect } from 'react';
import axios from 'axios';

// components
import Card from '../components/Card';


const AllPokemon = () => {
    const [allPokemon, setAllPokemon] = useState();

    // bring in api
    useEffect(() => {
        const fetchApi = async () => {

        
            let allPokemonData = [];
        for (let i = 1; i <= 20; i++) {
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
        <div>
            <h1>All Pokemon</h1>

            {/* render each pokemon from api (calling the first 50) */}
            { allPokemon && allPokemon.map((pokemon) => (
            <Card pokemon={pokemon} />
            )) }
        </div>
     );
}
 
export default AllPokemon;