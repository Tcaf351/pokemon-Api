import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// packages
import axios from 'axios';

const SinglePokemon = () => {
    const [singlePokemon, setSinglePokemon] = useState([]);
    const [shinyToggle, setShinyToggle] = useState(false);

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
        <div className='bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition min-h-screen ease-in-out duration-1000'>

            { singlePokemon &&
                <div className='grid grid-cols-3'>
                
                { shinyToggle === false ? (
                    <div className='grid justify-center col-span-3 cursor-pointer order-2'>
                        <img onClick={() => setShinyToggle(!shinyToggle)} src={singlePokemon.sprites?.front_default} alt="pokemon" className="h-44 w-44" />
                    </div> ) : (

                    <div className='grid justify-center col-span-3 cursor-pointer order-2'>
                        <img onClick={() => setShinyToggle(!shinyToggle)} src={singlePokemon.sprites?.front_shiny} alt="pokemon" className="h-44 w-44" />
                    </div> 
                )}

                    <div className='col-span-3 text-center order-1 py-8'>
                        <h1 className='text-7xl font-semibold uppercase '>{singlePokemon.name}</h1>
                    </div>
                    <div className='text-center col-span-3 order-3 py-2'>
                        <h1 className='text-xl font-semibold'>{(singlePokemon.weight) * 0.1} kg</h1>
                    </div>
                </div> 
            }

        </div>
     );
}
 
export default SinglePokemon;