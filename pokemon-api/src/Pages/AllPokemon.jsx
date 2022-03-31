import { useState, useEffect } from 'react';

// packages
import { Link } from 'react-router-dom';
import axios from 'axios';

// components
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import Pagination from '../components/Pagination';

const AllPokemon = () => {
 
    const [loading, setLoading] = useState(false);
    const [allPokemon, setAllPokemon] = useState();
    const [initialNumber, setInitialNumber] = useState(1);
    const [amountOfPokemon, setAmountOfPokemon] = useState(151);

    // let link = Scroll.Link;
    

    // bring in api
    useEffect(() => {
        try {
            const fetchApi = async () => {
                setLoading(true); // displays loading bar while the pokemon api gets pushed into empty allPokemonData array

                let allPokemonData = [];

                for (let i = initialNumber; i <= amountOfPokemon; i++) { // will make 100 fetch requests for 100 pokemon
                const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
                const response = await axios.get(url)
                // console.log(response.data);
                allPokemonData.push(response.data); // accessing each pokemon's details and pushing to array
                }
                
                setLoading(false); // stops loading bar from displaying as all pokemon will be in array and dispayed on screen.
 
                setAllPokemon(allPokemonData); // sets state to the array of 100 pokemon to then be mapped over to display
            }

            fetchApi()
            
        } catch (error) {
            
            const expectedError = error.response.status < 500;
            console.log(expectedError);
            if (!expectedError) {
                
                <p>sorry, we could not fetch the pokemon at this time, please try again...</p>
            }}
            
            
            // console.log(pokemonType.data.types[0].type.name);
        }, [initialNumber, amountOfPokemon]);


    const genOne = () => { // makeshift Pagination system changing the values on line 28 to render all the pokemon in that generation
        setInitialNumber(1);
        setAmountOfPokemon(151);
        
    };

    const genTwo = () => {
        setInitialNumber(152);
        setAmountOfPokemon(251);
    };

    const genThree = () => {
        setInitialNumber(252);
        setAmountOfPokemon(386);
    };

    const genFour = () => {
        setInitialNumber(387);
        setAmountOfPokemon(493);
    };

    return ( 
        <div  id="top" className='bg-gray-200 dark:bg-gray-900 transition ease-in-out duration-1000 min-h-screen py-3'>

            { loading === true ? <Spinner /> : false }

            <Pagination 
                genOne={genOne} 
                genTwo={genTwo}  
                genThree={genThree}
                genFour={genFour}
                />

            <div className="grid grid-cols-3 gap-4 mt-5">

            {/* render each pokemon from api (calling the first 50) */}
            { allPokemon && allPokemon.map((pokemon) => (

                <div key={pokemon.id} className='grid justify-center text-xl bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-400 transition ease-in-out duration-1000 hover:transition hover:ease-in-out hover:duration-500 rounded-lg py-8'>

                    <Link to={`singlepokemon/${pokemon.id}`}> 
                        <Card
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.front_default}
                        type={pokemon.types[0].type.name} />
                    </Link>
                </div>
            )) }

            </div>

            <div className='flex items-center justify-center'>
                <a href="#top" className='bg-indigo-500 px-3 py-1 mx-10 rounded-lg text-gray-100 hover:bg-indigo-700 transition ease-out duration-200'>Go To Top</a>
            </div>

        </div>
     );
}
 
export default AllPokemon;