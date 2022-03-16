import { useState } from 'react';

// packages
import axios from 'axios';
import { useForm } from "react-hook-form";

const SearchedPokemon = () => {
    const [pokemonName, setPokemonName] = useState(''); // for input
    const [searchedPokemon, setSearchedPokemon] = useState(); // for state

    // react-hook forms
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (e) => {
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
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <label>Search a Pokemon</label>
                    <input type="text"
                            placeholder='Pokemon'
                            {...register("pokemonName", { required: true, maxLength: 20 })} // form validation
                            onChange={handleChange}
                            value={pokemonName} 
                            />
                            {errors.pokemonName?.type === 'required' && "Pokemon name is required"}

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