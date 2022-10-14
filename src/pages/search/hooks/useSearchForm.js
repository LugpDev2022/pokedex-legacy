import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export const useSearchForm = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonID, setPokemonID] = useState('');

  const navigate = useNavigate();

  const onSearchPokemonByName = e => {
    e.preventDefault();
    if (e.target[0].value.length >= 1) {
      navigate(`?pokemon=${pokemonName}`);
      return;
    }
    navigate('/search');
  };

  const onSearchPokemonByID = e => {
    e.preventDefault();
    if (e.target[0].value.length >= 1) {
      navigate(`?pokemon=${pokemonID}`);
      return;
    }
    navigate('/search');
  };

  const onInputID = ({ target }) => {
    setPokemonID(target.value);
  };

  const onInputName = ({ target }) => {
    setPokemonName(target.value);
  };

  return {
    onInputID,
    onInputName,
    onSearchPokemonByID,
    onSearchPokemonByName,
    pokemonID,
    pokemonName,
  };
};
