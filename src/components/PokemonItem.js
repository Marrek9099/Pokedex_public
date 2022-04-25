import React from 'react';
import PokemonDetail from './PokemonDetail';


const PokemonItem = ({pImage, pName, pokemon}) => {
    return (
        <div className="container pokemonItem">               
            <img data-toggle="modal" data-target={`#${pName}`} src={pImage} alt=" "/>
            <p data-toggle="modal" data-target={`#${pName}`}>
                {pName}
            </p>
            <PokemonDetail id={`${pName}`} pName={pName} pokemon={pokemon}/>
        </div> 
    );

};

export default PokemonItem;