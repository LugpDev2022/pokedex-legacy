import { useReducer } from 'react';
import { PokemonContext, pokemonReducer, types } from './';

export const PokemonProvider = ({ children }) => {
  const init = () => {
    const initialState = {
      arePokemonsCharging: true,
      pokemons: [],
      page: 1,
    };

    return initialState;
  };
  const [state, dispatch] = useReducer(pokemonReducer, {}, init);

  const chargePokemons = pokemons => {
    const action = {
      type: types.chargeData,
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
