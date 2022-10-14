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
        page: state.page + 1,
      };

    default:
      return state;
  }
};
