import React from 'react';
import { connect } from 'react-redux';
import { searchTerm } from '../actions';

let interValId = null;

const SearchPokemon = ({searchTerm,term}) => {

    const onInputChange = e => {
        clearInterval(interValId);
        interValId = setTimeout(() => {
            searchTerm(e.target.value.toLowerCase());
        }, 2000);
    };

    return (
        <div className="form-group searchPokemon">
            <input onChange={e => onInputChange(e)}className="form-control form-control-lg" type="text" placeholder=" e.g. Pikachu"/>
        </div>
    );
};

const mapStateToProps = state => {
    return {term: state.searchTerm}
}

export default connect(mapStateToProps,{searchTerm})(SearchPokemon);
