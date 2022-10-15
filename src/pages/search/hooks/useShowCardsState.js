import { useState, useEffect } from 'react';
import { pokemonApi } from '../../../api';

export const useShowCardsState = pokemon => {
  const initialState = {
    error: false,
    pokemonData: {},
    isSearching: false,
  };

  const [showCardsState, setShowCardsState] = useState(initialState);

  useEffect(() => {
    setShowCardsState({
      ...initialState,
      isSearching: true,
    });
    if (pokemon) {
      pokemonApi
        .get(`pokemon/${pokemon.toLowerCase()}`)
        .then(resp => {
          setShowCardsState({
            ...initialState,
            pokemonData: { ...resp.data },
          });
        })
        .catch(e => {
          if (e.response.status === 404) {
            setShowCardsState({
              ...initialState,
              error: true,
            });
          }
        });
    }
  }, [pokemon]);

  return { ...showCardsState };
};
