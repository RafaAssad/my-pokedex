import React from 'react';
import './App.css';
import pokemao from './data';
import Pokedex from './pokedex';
// import Botao from './butao';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonIndex: 0
    }
  }


  nextPokemon = (state) => {
    this.setState({
      pokemonIndex: (state.pokemonIndex +1) % pokemao.length
    })
  }

  handleClick = () => {
    this.nextPokemon(this.state);
  }

  render (){
    const {id, name, type, image, averageWeight} = pokemao[this.state.pokemonIndex];
  return (
    <div className="caixa">
    <Pokedex
      id = {id}
      name = {name}
      type = {type}
      averageWeight = {averageWeight}
      image = {image} />
      <button className="button" onClick={this.handleClick}>Próximo Pokemon</button>
    </div>
  );
 }
}


export default App;

