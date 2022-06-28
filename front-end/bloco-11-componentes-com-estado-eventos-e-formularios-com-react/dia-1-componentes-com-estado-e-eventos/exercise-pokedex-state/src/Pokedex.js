import React from 'react';
import {
  arrayOf,
} from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from './types';
import Button from './Button';
import './Pokedex.css';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      dataIndex: 0,
      filteredType: 'All',
    };
  }

  getPokemonTypes = () => {
    const { pokemons } = this.props;
    return pokemons
      .map(({ type }) => type)
      .reduce((acc, cur) => {
        if (!acc.includes(cur)) { acc.push(cur); }
        return acc;
      }, []);
  }

  handleButton = (filteredPokemons) => {
    const dataSize = filteredPokemons.length;
    this.setState((state) => ({
      dataIndex: state.dataIndex === dataSize - 1 ? 0 : state.dataIndex + 1,
    }));
  }

  filterTypes = ({ target }) => {
    const { name } = target;
    this.setState({
      filteredType: name,
      dataIndex: 0,
    });
  }

  render() {
    const { pokemons } = this.props;
    const { dataIndex, filteredType } = this.state;
    const pokemonTypes = this.getPokemonTypes();
    const filteredPokemons = (
      pokemons
        .filter(({ type }) => {
          if (filteredType === 'All') { return true; }
          return type === filteredType;
        })
    );
    return (
      <div className="pokedex">
        <div className="pokemons">
          {
            filteredPokemons
              .filter((_pokemon, index) => index === dataIndex)
              .map((pokemon) => (
                <Pokemon key={ pokemon.id } pokemon={ pokemon } />
              ))
          }
          <Button
            onClick={ () => this.handleButton(filteredPokemons) }
            content=""
            disabled={ !(filteredPokemons.length - 1) }
            className="nav-btn"
          />
        </div>

        <div className="filter-buttons">
          <Button
            onClick={ this.filterTypes }
            content="All"
            className="filter-btn"
          />

          {
            pokemonTypes.map((type) => (
              <Button
                onClick={ this.filterTypes }
                content={ type }
                key={ type }
                className="filter-btn"
              />
            ))
          }
        </div>
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: arrayOf(pokemonType).isRequired,
};

export default Pokedex;
