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
    
    // bring in api
    useEffect(() => {
        try {
            const fetchPokemon = async () => {
                setLoading(true); // displays loading bar while the pokemon api gets pushed into empty allPokemonData array

                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${amountOfPokemon}&offset=${initialNumber - 1}`);
                const results = await response.data.results;
                const pokemon = results.map((result, index) => {
                    const paddedIndex = index + initialNumber // returns 001 for 1st pokemon
                    const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${paddedIndex}.png`
                    
                    return {
                        ...result,
                        pokemonImage
                    }
                })
                setAllPokemon(pokemon)
                setLoading(false);
            }
            fetchPokemon()
            
        } catch (error) {
            
            const expectedError = error.response.status < 500;
            console.log(expectedError);
            if (!expectedError) {
                
                <p>sorry, we could not fetch the pokemon at this time, please try again...</p>
            }}
            
        }, [initialNumber, amountOfPokemon]);


    const genOne = () => { // makeshift Pagination system changing the values on line 28 to render all the pokemon in that generation
        setInitialNumber(1);
        setAmountOfPokemon(151);
        
    };

    const genTwo = () => {
        setInitialNumber(152);
        setAmountOfPokemon(100);
    };

    const genThree = () => {
        setInitialNumber(252);
        setAmountOfPokemon(135);
    };

    const genFour = () => {
        setInitialNumber(387);
        setAmountOfPokemon(107);
    };
console.log(allPokemon);
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

            {/* render each pokemon from api */}
            { allPokemon && allPokemon.map((pokemon) => (

                <div key={pokemon.name} className='grid justify-center text-xl bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-400 transition ease-in-out duration-1000 hover:transition hover:ease-in-out hover:duration-500 rounded-lg py-8'>

                    <Link to={`singlepokemon/${pokemon.name}`}> 
                        <Card
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.pokemonImage} 
                        />
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