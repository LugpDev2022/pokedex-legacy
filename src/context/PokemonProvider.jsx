import { useReducer } from 'react';

import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { PokemonContext, pokemonReducer, types } from './';

export const PokemonProvider = ({ children }) => {
  const { search } = useLocation();
  const { page } = queryString.parse(search);

  const init = () => {
    if (page === undefined) {
      return {
        arePokemonsCharging: true,
        pokemons: [],
        page: 1,
      };
    }

    return {
      arePokemonsCharging: true,
      pokemons: [],
      page,
    };
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
