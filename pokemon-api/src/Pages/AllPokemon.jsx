import { useState, useEffect } from 'react';

// packages
import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';

// components
import Card from '../components/Card';


const AllPokemon = (props) => {
    const { allPokemon } = props;
    // let { id } = useParams();
//     const [allPokemon, setAllPokemon] = useState();

//     // bring in api
    // useEffect(() => {
    //     const fetchApi = async () => {

    //         let allPokemonData = [];
            
    //         for (let i = 1; i <= 50; i++) {
    //         const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    //         const response = await axios.get(url)
    //         // console.log(response.data);
    //         allPokemonData.push(response.data);
    //         console.log(allPokemonData)
    //         }
    //         setAllPokemon(allPokemonData);
    //     }
    //     fetchApi()
    // }, []);


    return ( 
        <div className='bg-slate-100 dark:bg-gray-900'>
            <h1>All Pokemon</h1>

            <div  className="grid grid-cols-3 gap-4">
            {/* render each pokemon from api (calling the first 50) */}
            { allPokemon && allPokemon.map((pokemon) => (

                <div key={pokemon.id} className='grid justify-center text-xl bg-slate-200 dark:bg-gray-600 dark:hover:bg-gray-400 transition ease-in-out duration-500 hover:bg-slate-300  rounded-lg py-8'>

                    <Link to={`singlepokemon/${pokemon.id}`}> 
                        <Card pokemon={pokemon} />
                    </Link>
                </div>
            )) }

            </div>

        </div>
     );
}
 
export default AllPokemon;