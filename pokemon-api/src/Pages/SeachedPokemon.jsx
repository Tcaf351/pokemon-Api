// react packages
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

// packages
import axios from 'axios';
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
        <div className='min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition ease-in-out duration-1000'>

            <div className="py-10 px-5 lg:flex lg:items-center lg:justify-center">
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <label className='mx-2'>Search a Pokemon</label>
                    <input type="text"
                            placeholder='Pokemon'
                            {...register("pokemonName", { required: true, maxLength: 20 })} // form validation
                            onChange={handleChange}
                            value={pokemonName.toLowerCase()}
                            className=' rounded-md' 
                            />
                    <button className='px-2 py-1 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-gray-100'>Search</button>
                            <p>{errors.pokemonName?.message}</p>  
                </form>
            </div>

            {searchedPokemon && 
                <div className='lg:flex lg:items-center lg:justify-around lg:h-[60vh]'>
                
                    <div className="lg:h-full lg:flex lg:items-center lg:justify-center lg:flex-col">
                        { shinyToggle === false ? (
                            <div className=' cursor-pointer'>
                                <img onClick={() => setShinyToggle(!shinyToggle)} src={searchedPokemon.sprites?.front_default} alt="pokemon" className="h-44 w-44" />
                            </div> ) : (

                            <div className=' cursor-pointer'>
                                <img onClick={() => setShinyToggle(!shinyToggle)} src={searchedPokemon.sprites?.front_shiny} alt="pokemon" className="h-44 w-44" />
                            </div> 
                        )}

                        <div>
                            <h1 className='text-6xl font-semibold uppercase'>{searchedPokemon.name}</h1>
                        </div>
                    </div>

                        
        
                    <div className='lg:w-1/4 lg:h-full lg:flex lg:items-end lg:justify-around'>
                        <div className="my-24">
                            <h1 className='text-xl font-semibold uppercase'>weight</h1>
                            <h1 className='text-md font-semibold'>{(searchedPokemon.weight) * 0.1}kg</h1>
                        </div>
                        <div className="my-24">
                            <h1 className='text-xl font-semibold uppercase'>height</h1>
                            <h1 className='text-md font-semibold'>{((searchedPokemon.height * 3.2808) / 10).toFixed(1)}ft</h1>
                        </div>
                    </div>

                </div> 
             }

          
        </div>
     );
}
 
export default SearchedPokemon;