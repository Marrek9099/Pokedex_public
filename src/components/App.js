import './style.css';
import React from 'react';
import PokemonList from './PokemonList';
import SearchTerm from './SearchPokemon';



const App = () => {
    return (
        <div className="pokedex rounded">
                <h1>Pokédex</h1>
                <h3>Search for a pokemon:</h3>
                <SearchTerm/>
                <h3>Pokemon list</h3>
                <PokemonList/>
        </div>
    )
    
}

export default App;