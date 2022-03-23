import { useState, useEffect } from 'react';

// packages
import { Link } from 'react-router-dom';
import axios from 'axios';

// components
import Card from '../components/Card';

const AllPokemon = () => {
 
    const [allPokemon, setAllPokemon] = useState();
    // const [loadPagination, setLoadPagination] = useState([]);
    // const [previousPagination, setPreviousPagination] = useState([]);

    

    // bring in api
    useEffect(() => {

        try {
            const fetchApi = async () => {

                let allPokemonData = [];
                
                for (let i = 1; i <= 20; i++) {
                const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
                const response = await axios.get(url)
                // console.log(response.data);
                allPokemonData.push(response.data);
                // console.log(allPokemonData)
                }
                setAllPokemon(allPokemonData);
            }
            fetchApi()
            
        } catch (error) {

            const expectedError = error.response.status < 500;
            console.log(expectedError);
            if (!expectedError) {

            <p>sorry, we could not fetch the pokemon at this time, please try again...</p>
        }
            // console.log(error);
            // if (error.response.status === 500) throw "your request could not be processed at this time, please try again."
        }


        // try {
        //     const loadMorePagination = async () => {
        //         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
        //         console.log(response.data);
        //         const data = response.data.next;
        //         setLoadPagination(data);
        //     };
        //     loadMorePagination();

        // } catch (error) {
        //     console.log(error);
        // }
    }, []);

    // const loadMorePokemon = () => {
        
    // };


    return ( 
        <div className='bg-gray-200 dark:bg-gray-900 transition ease-in-out duration-1000 min-h-screen py-3'>

            <div className="grid grid-cols-3 gap-4">

            {/* render each pokemon from api (calling the first 50) */}
            { allPokemon && allPokemon.map((pokemon) => (

                <div key={pokemon.id} className='grid justify-center text-xl bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-400 transition ease-in-out duration-1000 hover:transition hover:ease-in-out hover:duration-500 rounded-lg py-8'>

                    <Link to={`singlepokemon/${pokemon.id}`}> 
                        <Card pokemon={pokemon} />
                    </Link>
                </div>
            )) }

            </div>

            <div className='sm:w-full sm:flex sm:items-center sm:justify-center'>
                <button className='bg-indigo-500 px-3 py-1 mx-10 rounded-lg text-gray-100 hover:bg-indigo-700 transition ease-out duration-200'>previous</button>
                <button className='bg-indigo-500 px-3 py-1 mx-10 rounded-lg text-gray-100 hover:bg-indigo-700 transition ease-out duration-200'>next</button>
            </div>

        </div>
     );
}
 
export default AllPokemon;