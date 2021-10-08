import React from "react";
import Pokemon from "./Pokemon";

export default class Pokedex extends React.Component {

  constructor() {
    super();

    this.state = {
      indexPokemon: 0,
    };
  }

  handleClick = () => {
    const arrayIndexs = this.props.pokemons.length - 1;
    let { indexPokemon } = this.state;

    if (arrayIndexs > indexPokemon) this.setState({ indexPokemon: indexPokemon + 1 });
    
    else this.setState({ indexPokemon: 0 });
  }


  render() {

    const { pokemons } = this.props;
    const { indexPokemon } = this.state;

    return (
      <div className='pokedex'>
        <Pokemon pokemon={pokemons[indexPokemon]} />
        <div>
          <button onClick={this.handleClick}>Proximo Pokemon</button>
          <div className="group-button">
            <button>Fire</button>
            <button>Psychic</button>
          </div>
        </div>
      </div>
    );
  }
}
