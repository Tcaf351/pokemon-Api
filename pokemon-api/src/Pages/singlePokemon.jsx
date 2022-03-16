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
        <div className='bg-gray-200 dark:bg-slate-900 min-h-screen'>

            { singlePokemon &&
                <div className='grid grid-cols-3'>
                
                { shinyToggle === false ? (
                    <div className='grid justify-center order-2 cursor-pointer'>
                        <img onClick={() => setShinyToggle(!shinyToggle)} src={singlePokemon.sprites?.front_default} alt="pokemon" className="h-40 w-40 " />
                    </div> ) : (

                    <div className='grid justify-center order-2 cursor-pointer'>
                        <img onClick={() => setShinyToggle(!shinyToggle)} src={singlePokemon.sprites?.front_shiny} alt="pokemon" className="h-40 w-40 " />
                    </div> 
                )}

                    <h1>{singlePokemon.name}</h1>
                    <h1>{singlePokemon.weight}lbs</h1>
                </div> 
            }

        </div>
     );
}
 
export default SinglePokemon;