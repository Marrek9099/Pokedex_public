import axios from 'axios';


export const fetchPokemonList = offset => async dispatch => {
    const pokemonList = []
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=5&offset=${offset}`);
    for(let pokemon of data.results){
        const {data} = await axios.get(pokemon.url);
        pokemonList.push(data);
    };

    dispatch({type: 'POKEMON_LIST', payload: pokemonList});
};


export const fetchPokemon = pokemonName => async dispatch => {
    try {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        dispatch({type: 'POKEMON', payload: data});
    }
    catch(err) {
        dispatch({type: 'POKEMON', payload: 'error'})
    };
    
};

export const searchTerm = term => {
    return {
        type: 'SEARCH_TERM',
        payload: term
    };
};

