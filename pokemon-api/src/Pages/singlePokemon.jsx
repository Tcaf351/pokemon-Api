import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// packages
import axios from 'axios';

const SinglePokemon = ({ shinyToggle, setShinyToggle }) => {
    const [singlePokemon, setSinglePokemon] = useState([]);

    let { id } = useParams();

    const singlePokemonId = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`) 
        console.log(response.data);
        setSinglePokemon(response.data)
    };


    useEffect(() => {
        singlePokemonId()
    }, [id]);


    return ( 
        <div className='sm:h-screen bg-gradient-to-tl from-gray-200 to-gray-600 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition min-h-screen ease-in-out duration-1000 lg:grid lg:items-center'>

            { singlePokemon &&
                <div className='grid grid-cols-3'>
                
                    { shinyToggle === false ? (
                        <div className='lg:grid lg:justify-center lg:col-span-2 cursor-pointer'>
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