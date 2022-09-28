import { useReducer } from 'react';
import { PokemonContext, pokemonReducer, types } from './';

export const PokemonProvider = ({ children }) => {
  const initialState = {
    arePokemonsCharging: true,
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  const chargePokemons = () => {
    const action = {
      type: types.dataCharged,
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
