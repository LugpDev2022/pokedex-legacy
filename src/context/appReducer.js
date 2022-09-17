import { types } from './types';

export const appReducer = (state, action) => {
  switch (action.type) {
    case types.nextPage:
      console.log('Next Page');
      break;

    case types.prevPage:
      console.log('Previous Page');
      break;

    default:
      return state;
  }
};
