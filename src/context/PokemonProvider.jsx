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

    if (page) {
      return {
        ...initialState,
        page,
      };
    }

    if (!page) {
      localStorage.setItem('page', 1);
      return initialState;
    }
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
    const action = {
      type: types.nextPage,
    };
    dispatch(action);
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
