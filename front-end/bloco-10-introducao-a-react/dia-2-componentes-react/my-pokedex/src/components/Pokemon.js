import React from "react";

class Pokemon extends React.Component {
  render () {
    const { name, type, averageWeight, image } = this.props.poke;
    return (
      <div className='pokemonCard'>
        <div className='pokeInfo'>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>Average weight: { averageWeight.value } { averageWeight.measurementUnit }</p>
        </div>
        <div className='pokeSprite'>
          <img src={ image } alt={ name }></img>
        </div>
      </div>
    )
  }

}

export default Pokemon;