import { useReducer } from 'react';
import { PokemonContext, pokemonReducer, types } from './';

export const PokemonProvider = ({ children }) => {
  const initialState = {
    page: 1,
    arePokemonsCharging: true,
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  const onNextPage = () => {
    const action = {
      type: types.nextPage,
    };
    dispatch(action);
  };

  return (
    <PokemonContext.Provider value={{ state, onNextPage }}>
      {children}
    </PokemonContext.Provider>
  );
};
