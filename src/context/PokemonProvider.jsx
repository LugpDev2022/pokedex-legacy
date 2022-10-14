import { useReducer } from 'react';
import { PokemonContext, pokemonReducer, types } from './';

export const PokemonProvider = ({ children }) => {
  const init = () => {
    const page = localStorage.getItem('page');

    const initialState = {
      arePokemonsCharging: true,
      pokemons: [],
      page: 1,
      logged: false,
    };

    if (!page) {
      localStorage.setItem('page', 1);
      return initialState;
    }

    return {
      ...initialState,
      page,
    };
  };

  const [state, dispatch] = useReducer(pokemonReducer, {}, init);

  const chargePokemons = pokemons => {
    const action = {
      type: types.chargePokemons,
      payload: {
        pokemons,
      },
    };
    dispatch(action);
  };

  const onNextPage = () => {
    dispatch({ type: types.nextPage });
  };

  const onPrevPage = () => {
    if (state.page > 1) {
      dispatch({ type: types.prevPage });
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        ...state,
        chargePokemons,
        onNextPage,
        onPrevPage,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
