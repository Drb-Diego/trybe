import React from "react";
import Pokemon from "./Pokemon";

export default class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      indexPokemon: 0,
      typePokemon: "all",
    };
  }

  handleClick = () => {
    const arrayIndexs = this.props.pokemons.length - 1;
    let { indexPokemon } = this.state;

    if (arrayIndexs > indexPokemon) this.setState({ indexPokemon: indexPokemon + 1 });

    else this.setState({ indexPokemon: 0 });
  };

  handleClickTypePokemon = event => {
    this.setState({ typePokemon: event.target.value });
  };

  render() {
    const { pokemons } = this.props;
    const { indexPokemon, typePokemon } = this.state;

    console.log(this.state);

    return (
      <div className='pokedex'>

        {typePokemon === "all" ? (
          <Pokemon pokemon={pokemons[indexPokemon]} />
        ) : (
          pokemons
            .filter(pokemon => pokemon.type === typePokemon)
            .map((pokemon) => <Pokemon pokemon={pokemon} />)
        )}

        <div>
          <button onClick={this.handleClick}>Proximo Pokemon</button>

          <div className='group-button'>
            {pokemons.map(pokemon => (
              <button
                key={pokemon.id}
                value={pokemon.type}
                onClick={this.handleClickTypePokemon}
              >
                {pokemon.type}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
