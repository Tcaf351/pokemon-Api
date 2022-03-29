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
    const [pokemonType, setPokemonType] = useState();


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

            setSearchedPokemon(response.data);
            setPokemonType(response.data.types[0].type.name)

        } catch (error) {
            return navigate('*')
        }
    };

    const handleChange = (e)=> {
        setPokemonName(e.target.value);
    };

    let gradientColour;
    switch (pokemonType) {

        case "fire":
            gradientColour = "to-red-500";
            break;
        
        case "water":
            gradientColour = "to-blue-500";
            break;

        case "grass":
            gradientColour = "to-green-500"
            break;

        case "electric":
            gradientColour = "to-yellow-500";
            break;
        
        case "ice":
            gradientColour = "to-cyan-300";
            break;
        
        case "fighting":
            gradientColour = "to-red-900";
            break;
        
        case "poison":
            gradientColour = "to-indigo-500";
            break;

        case "ground":
            gradientColour = "to-orange-800";
            break;
        
        case "flying":
            gradientColour = "to-sky-300";
            break;

        case "psychic":
            gradientColour = "to-pink-500";
            break;

        case "bug":
            gradientColour = "to-emerald-300";
            break;

        case "rock":
            gradientColour = "to-stone-900";
            break;

        case "ghost":
            gradientColour = "to-indigo-900";
            break;
        
        case "dark":
            gradientColour = "to-gray-900";
            break;

        case "dragon":
            gradientColour = "to-blue-900";
            break;

        case "steel":
            gradientColour = "to-slate-500";
            break;

        case "fairy":
            gradientColour = "to-rose-500";
            break;

        default: 
        gradientColour = "to-gray-200"
    }

    let gradient = `bg-gradient-to-tl from-gray-200 ${gradientColour}`


    let backGround = `sm:h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition min-h-screen ease-in-out duration-1000 lg:flex lg:flex-col lg:items-center lg:justify-center lg:border ${gradient}`;

    return ( 
        <div className={backGround}>

            <div className="py-10 px-5 lg:flex lg:items-center lg:justify-center">
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <label className='mx-2'>Search a Pokemon</label>
                    <input type="text"
                            placeholder='Pokemon'
                            {...register("pokemonName", { required: true, maxLength: 20 })} // form validation
                            onChange={handleChange}
                            value={pokemonName.toLowerCase()}
                            className='text-gray-900 rounded-md' 
                            />
                    <button className='px-2 py-1 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-gray-100'>Search</button>
                            <p>{errors.pokemonName?.message}</p>  
                </form>
            </div>

            {searchedPokemon && 
                <div className='lg:flex lg:items-center lg:justify-around lg:h-[60vh] rounded-xl w-9/12 shadow-2xl bg-opacity-40 backdrop-blur-md border border-slate-300 border-r-0 border-b-0 border-opacity-50'>
                
                    <div className="lg:h-full lg:flex lg:items-center lg:justify-center lg:flex-col">
                        { shinyToggle === false ? (
                            <div className='cursor-pointer'>
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

                        
        
                    <div className='lg:w-1/4 lg:h-1/4 lg:flex lg:items-center lg:justify-around'>
                        <div className="my-24">
                            <h1 className='text-xl font-semibold uppercase'>weight</h1>
                            <h1 className='text-md font-semibold'>{(searchedPokemon.weight) * 0.1}kg</h1>
                        </div>
                        <div className="my-24">
                            <h1 className='text-xl font-semibold uppercase'>height</h1>
                            <h1 className='text-md font-semibold'>{((searchedPokemon.height * 3.2808) / 10).toFixed(1)}ft</h1>
                        </div>
                        <div>
                        <h1 className='text-xl font-semibold uppercase'>Type</h1>
                            <h1 className='text-md font-semibold uppercase'>{pokemonType}</h1>
                        </div>
                    </div>

                </div> 
             }

          
        </div>
     );
}
 
export default SearchedPokemon;