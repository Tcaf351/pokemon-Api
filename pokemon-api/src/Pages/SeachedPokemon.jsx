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
        <div className='min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 grid grid-cols-4 transition ease-in-out duration-1000'>

            <div className="py-10 col-span-4 mx-auto ">
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <label>Search a Pokemon</label>
                    <input type="text"
                            placeholder='Pokemon'
                            {...register("pokemonName", { required: true, maxLength: 20 })} // form validation
                            onChange={handleChange}
                            value={pokemonName}
                            className='mx-3 rounded-lg' 
                            />
                            {errors.pokemonName?.type === 'required' && "Pokemon name is required"}

                    <button className='px-2 py-1 rounded-lg bg-indigo-500 text-gray-100'>Search</button>
                </form>
            </div>

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