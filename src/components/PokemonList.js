import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { fetchPokemonList } from '../actions';
import { fetchPokemon } from '../actions';
import PokemonItem from './PokemonItem';

let offset = 0;

const PokemonList = ({fetchPokemonList, fetchPokemon, pokemonList, term}) => {
        useEffect ( () => {
            if(term === null || term === "") fetchPokemonList(offset)
            else if (term !== null) fetchPokemon(term)
        }, [fetchPokemonList, fetchPokemon, term]);


        const renderList = () =>{
            if(pokemonList.length !== 0) {
                if(pokemonList[0] === 'error'){
                    return 'Pokédex is unable to find this pokemon'
                };
                return pokemonList.map( pokemon => {
                    return (
                        <PokemonItem 
                            pokemon= {pokemon}
                            pImage= {pokemon.sprites.other.dream_world.front_default} 
                            pName= {pokemon.name} 
                            key= {pokemon.id}
                        />
                    );
                });
            };
        };

        const renderUpArrow = () => {
            if(offset > 0){
                return <i onClick = {() => onUpArrowClick()} className="fas fa-caret-up" ></i>
            }
        }

        
        const onDownArrowClick = () => {
            offset = offset + 5;
            fetchPokemonList(offset);
        };

        const onUpArrowClick = () => {
            offset = offset - 5;
            fetchPokemonList(offset);
        };
       
    
        const renderConent = () => {
           if(pokemonList.length > 1) {
                return (
                    <div>
                        {renderUpArrow()}
                        {renderList()}
                        <i onClick={ () => onDownArrowClick()} className="fas fa-caret-down"></i>
                    </div>
                    )
           }
           else if(pokemonList.length === 1){
               return <div>{renderList()}</div>
           }
           else {
               return <div>Loading</div>
           };
        };


        return <div>
            {renderConent()}
        </div>
};

const mapStateToProps = state => {
    return {
        pokemonList: state.pokemonList,
        term: state.searchTerm
    };
};

export default connect(mapStateToProps,{fetchPokemonList, fetchPokemon})(PokemonList);