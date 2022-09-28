import { types } from './types/types';

export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case types.chargeData:
      return {
        ...state,
        arePokemonsCharging: false,
        pokemons: action.payload.pokemons,
      };

    default:
      return state;
  }
};
