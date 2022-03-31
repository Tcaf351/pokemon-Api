import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// packages
import axios from 'axios';
import { motion } from 'framer-motion';

const SinglePokemon = ({ shinyToggle, setShinyToggle }) => {
    const [singlePokemon, setSinglePokemon] = useState([]); // storing searched pokemon into state
    const [pokemonType, setPokemonType] = useState(); // store the pokemon's type to later use with the dynamic gradient

    let { id } = useParams();

    useEffect(() => {
        const singlePokemonId = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`) 
            console.log(response.data);
            setSinglePokemon(response.data) // setting the pokemon that was searched into state
            setPokemonType(response.data.types[0].type.name) // storing the pokemon type in state
            setShinyToggle(false)
        };

        singlePokemonId() // calling function on line 14
    }, [id]); // re-runs useEffect whenever the user enters a new pokemon's name in the input box, line 14


    let gradientColour; // accesses the pokemom's type to then use the switch statement to dynamically change gradient colour depending on the pokemon type
    switch (pokemonType) { // accessing state on line 9

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

    let gradient = `bg-gradient-to-tl from-gray-200 ${gradientColour}` // dynamic gradient colour for background


    let backGround = `sm:h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition min-h-screen ease-in-out duration-1000 xs:flex xs:flex-col xs:items-center xs:justify-center lg:border ${gradient}`;

    return ( 
        <div className={backGround}>

            { singlePokemon &&
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className='xs:flex xs:items-center xs:justify-center lg:justify-around xs:flex-col lg:h-[60vh] rounded-xl xs:w-9/12 shadow-2xl bg-opacity-40 backdrop-blur-md border border-slate-300 border-r-0 border-b-0 border-opacity-50'>

                <motion.div
                    animate={{ y: 10 }} 
                    initial={{ y: -550 }}
                    transition={{ delay: 1.5 }}
                >
                    <p className='uppercase font-semibold text-lg xs:px-3'>Click on the Pokemon to change its form</p>
                </motion.div>
                
                <div className="lg:h-1/2 xs:flex xs:items-center xs:justify-center xs:flex-col">
                    { shinyToggle === false ? (
                        <div className='cursor-pointer'>
                            <img onClick={() => setShinyToggle(!shinyToggle)} src={singlePokemon.sprites?.front_default} alt="pokemon" className="h-44 w-44" />
                        </div> ) : (

                        <div className='cursor-pointer'>
                            <img onClick={() => setShinyToggle(!shinyToggle)} src={singlePokemon.sprites?.front_shiny} alt="pokemon" className="h-44 w-44" />
                        </div> 
                    )}

                        <div>
                            <h1 className='xs:text-4xl lg:text-6xl font-semibold uppercase'>{singlePokemon.name}</h1>
                        </div>
                </div>


                        <div className='lg:w-1/4 lg:h-1/4 lg:flex lg:items-center lg:justify-around'>
                        <div className="xs:my-10 lg:my-0 lg:mx-10">
                            <h1 className='text-xl font-bold uppercase'>weight</h1>
                            <h1 className='text-md font-semibold'>{(singlePokemon.weight) * 0.1}kg</h1>
                        </div>
                        <div className="xs:my-10 lg:my-0 lg:mx-10">
                            <h1 className='text-xl font-bold uppercase'>height</h1>
                            <h1 className='text-md font-semibold'>{((singlePokemon.height * 3.2808) / 10).toFixed(1)}ft</h1>
                        </div>
                        <div className="xs:my-10 lg:my-0 lg:mx-10">
                            <h1 className='text-xl font-bold uppercase'>Type</h1>
                            <h1 className='text-md font-semibold uppercase'>{pokemonType}</h1>
                        </div>
                    </div>
                        

                </motion.div> 
            }
            <Link to="/"><button className='bg-indigo-500 px-3 py-1 mx-10 my-3 rounded-lg text-gray-100 hover:bg-indigo-700 transition ease-out duration-200'>Go Back</button></Link>

        </div>
     );
}
 
export default SinglePokemon;