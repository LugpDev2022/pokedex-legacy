import { types } from './types/types';

export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case types.nextPage:
      console.log('Next Page');
      return { ...state, page: state.page + 1 };

    case types.prevPage:
      console.log('Prev Page');
      return state;

    default:
      return state;
  }
};
