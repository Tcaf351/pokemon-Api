import { useState, useEffect } from 'react';

// packages
import { Link } from 'react-router-dom';
import axios from 'axios';

// components
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import Pagination from '../components/Pagination';

const AllPokemon = () => {
 
    const [loading, setLoading] = useState(true);
    const [allPokemon, setAllPokemon] = useState();
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [nextPageUrl, setNextPageUrl] = useState();
    // const [prevPageUrl, setPrevPageUrl] = useState();

    

    // bring in api
    useEffect(() => {
        try {
            const fetchApi = async () => {
                setLoading(true);

                let allPokemonData = [];
                
                for (let i = 1; i <= 50; i++) {
                const url = `${currentPageUrl}/${i}`;
                const response = await axios.get(url)
                // console.log(response.data);
                allPokemonData.push(response.data);
                // console.log(allPokemonData)
                }
 
                setLoading(false);
                setAllPokemon(allPokemonData);
            }
            fetchApi()
            
        } catch (error) {

            const expectedError = error.response.status < 500;
            console.log(expectedError);
            if (!expectedError) {

            <p>sorry, we could not fetch the pokemon at this time, please try again...</p>
        }}


    }, [currentPageUrl]);


    if (loading) return <Spinner />

    const goToNextPage = async () => {
        let allPokemonData = [];
                
                    for (let i = 1; i <= 50; i++) {
                    const url = `${currentPageUrl}/${i}`;
                    const response = await axios.get(url)
                    // console.log(response.data);
                    allPokemonData.push(response.data);
                    // console.log(allPokemonData)
                    setAllPokemon(allPokemonData)
                    }
    }

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

            <Pagination goToNextPage={goToNextPage}  />

        </div>
     );
}
 
export default AllPokemon;