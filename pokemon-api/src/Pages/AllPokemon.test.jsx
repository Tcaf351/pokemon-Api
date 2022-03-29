// import axios from 'axios';
const axios = require('axios');

test('the allPokemonData array will not be empty', done => {
    const fetchApi = async () => {
        try {
            let allPokemonData = [];
            
            for (let i = 1; i <= 20; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            const response = await axios.get(url)
            allPokemonData.push(response.data);
            expect(allPokemonData).not.toBe([]);
            done()
            }
            
        } catch (error) {
            done(error)
        }
    }
    fetchApi()
}); 