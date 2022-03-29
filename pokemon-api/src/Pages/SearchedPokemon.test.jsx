

const axios = require('axios');

test('charizard in the object from the api', done => {
    const getData = async () => {
    try {
        let pokemonName = 'charizard'
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        expect(response.data.name).toBe('charizard')
        done()

    } catch (error) {
        done(error)
    }
    }
    getData()
});