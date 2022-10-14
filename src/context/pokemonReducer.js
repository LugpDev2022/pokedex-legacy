import { types } from './types/types';

export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case types.chargePokemons:
      return {
        ...state,
        arePokemonsCharging: false,
        pokemons: action.payload.pokemons,
      };

    case types.nextPage:
      return {
        ...state,
        arePokemonsCharging: true,
        page: parseInt(state.page) + 1,
      };

    case types.prevPage:
      return {
        ...state,
        arePokemonsCharging: true,
        page: parseInt(state.page) - 1,
      };

    default:
      return state;
  }
};
