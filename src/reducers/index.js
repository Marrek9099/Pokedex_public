import { combineReducers } from "redux";

const pokemonListReducer = (pokemonList = [], action) => {
    if(action.type === 'POKEMON_LIST'){
        return action.payload;
    }

    else if (action.type === 'POKEMON'){
        return [action.payload];
    };

    return pokemonList;
};


const searchTermReducer = (searchTerm = null, action) => {
    if(action.type === 'SEARCH_TERM') {
        return action.payload;
    };

    return searchTerm;
};

export default combineReducers({
    pokemonList: pokemonListReducer,
    searchTerm: searchTermReducer
});