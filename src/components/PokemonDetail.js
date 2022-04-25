import React from 'react';


const PokemonDetail = ({id, pName, pokemon}) => {

    const abilities = pokemon.abilities.map( ability => {
        return (
           <div key={ability.ability.name}>{ability.ability.name}</div>
        )
    });
    const image = pokemon.sprites.other["official-artwork"].front_default;
    return (
        <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-center" id="exampleModalLabel">{pName}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <img src={image} alt={pName}/>
                    <div>
                        <h3>Height:{pokemon.height}</h3> 
                    </div>
                    <div>
                        <h3>Weight:{pokemon.weight}</h3> 
                    </div>

                    <div>
                        <h3>Abilities: {abilities}</h3>
                    </div>
                    
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    );
};


export default PokemonDetail;