import { useReducer } from 'react';
import { PokemonContext, pokemonReducer, types } from './';

export const PokemonProvider = ({ children }) => {
  const initialState = {
    arePokemonsCharging: true,
    pokemons: [],
    page: 1,
    logged: false,
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  const chargePokemons = pokemons => {
    const action = {
      type: types.chargePokemons,
      payload: {
        pokemons,
      },
    };
    dispatch(action);
  };

  return (
    <PokemonContext.Provider
      value={{
        state,
        chargePokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
