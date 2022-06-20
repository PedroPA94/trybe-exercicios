import React from "react";
import data from '../data'
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    return (
      data.map((pokemon) => <Pokemon poke={ pokemon } key={ pokemon.id } />)
    )
  }
}

export default Pokedex;