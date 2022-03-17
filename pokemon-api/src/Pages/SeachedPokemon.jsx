import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


// packages
import axios from 'axios';
import { useForm } from "react-hook-form";
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';


const SearchedPokemon = ({ shinyToggle, setShinyToggle }) => {
    const navigate = useNavigate();

    const [pokemonName, setPokemonName] = useState(''); // for input
    const [searchedPokemon, setSearchedPokemon] = useState(); // for state


    // Joi Validation
    const schema = Joi.object({
        pokemonName: Joi.string()
        .alphanum()
        .min(1)
        .max(20)
        .required(),
    });


    // react-hook forms
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(schema), 
    });

    const onSubmit = async (e) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            console.log(response.data);

            return setSearchedPokemon(response.data);

        } catch (error) {
            return navigate('*')
        }
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
                            className='mx-3 rounded-md' 
                            />
                            <p>{errors.pokemonName?.message}</p>  

                    <button className='px-2 py-1 rounded-lg bg-indigo-500 text-gray-100'>Search</button>
                </form>
            </div>

            {searchedPokemon && 
                <div>

                    { shinyToggle === false ? (
                        <div className='col-start-2 col-span-4 cursor-pointer'>
                            <img onClick={() => setShinyToggle(!shinyToggle)} src={searchedPokemon.sprites?.front_default} alt="pokemon" className="h-44 w-44" />
                        </div> ) : (

                        <div className='col-start-2 col-span-4 cursor-pointer'>
                            <img onClick={() => setShinyToggle(!shinyToggle)} src={searchedPokemon.sprites?.front_shiny} alt="pokemon" className="h-44 w-44" />
                        </div> 
                    )}

                        <div className='text-center order-3 py-8'>
                            <h1 className='text-7xl font-semibold uppercase '>{searchedPokemon.name}</h1>
                        </div>
                        <div className='text-center py-2'>
                            <h1 className='text-xl font-semibold'>{(searchedPokemon.weight) * 0.1} kg</h1>
                        </div>

                </div>
             }

          
        </div>
     );
}
 
export default SearchedPokemon;