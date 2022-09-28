import { types } from './types/types';

export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case types.dataCharged:
      return { ...state, arePokemonsCharging: false };

    default:
      return state;
  }
};
