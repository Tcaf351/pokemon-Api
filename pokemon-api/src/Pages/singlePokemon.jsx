import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// packages
import axios from 'axios';

const SinglePokemon = ({ shinyToggle, setShinyToggle }) => {
    const [singlePokemon, setSinglePokemon] = useState([]);
    const [pokemonType, setPokemonType] = useState();

    let { id } = useParams();

    const singlePokemonId = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`) 
        console.log(response.data);
        setSinglePokemon(response.data)
        setPokemonType(response.data.types[0].type.name)

    };
    // let background = {type: singlePokemon.types[0].type.name};

    useEffect(() => {
        singlePokemonId()
    }, [id]);

    // let type = singlePokemon.types[0].type.name;

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
            gradientColour = "to-cyan-500";
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


    let backGround = `sm:h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition min-h-screen ease-in-out duration-1000 lg:grid lg:items-center ${gradient}`;


    return ( 
        <div className={backGround}>

            { singlePokemon &&
                <div className='flex items-center justify-center bg-opacity-40 backdrop-blur-md border border-slate-300 border-r-0 border-b-0 border-opacity-50'>
                
                    { shinyToggle === false ? (
                        <div className='lg:flex lg:justify-center lg:col-span-2 cursor-pointer'>
                            <img onClick={() => setShinyToggle(!shinyToggle)} src={singlePokemon.sprites?.front_default} alt="pokemon" className="h-44 w-44" />
                        </div> ) : (

                        <div className='lg:grid lg:justify-center lg:col-span-2 cursor-pointer'>
                            <img onClick={() => setShinyToggle(!shinyToggle)} src={singlePokemon.sprites?.front_shiny} alt="pokemon" className="h-44 w-44" />
                        </div> 
                    )}

                        <div className='lg:grid lg:justify-center lg:col-span-2'>
                            <h1 className='text-6xl font-semibold uppercase'>{singlePokemon.name}</h1>
                        </div>

                        <div className='lg:grid lg:grid-cols-2'>
                            <div>
                                <h1 className='text-xl font-semibold uppercase'>weight</h1>
                                <h1 className='text-md font-semibold'>{(singlePokemon.weight) * 0.1}kg</h1>
                            </div>
                            <div>
                                <h1 className='text-xl font-semibold uppercase'>height</h1>
                                <h1 className='text-md font-semibold'>{((singlePokemon.height * 3.2808) / 10).toFixed(1)}ft</h1>
                            </div>
                        </div>

                </div> 
            }

        </div>
     );
}
 
export default SinglePokemon;