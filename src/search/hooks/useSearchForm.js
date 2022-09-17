import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export const useSearchForm = () => {
  const [pokemonName, setPokemonName] = useState('');

  const [pokemonID, setPokemonID] = useState('');

  const navigate = useNavigate();

  const onSearchPokemonByName = e => {
    e.preventDefault();
    navigate(`?pokemon=${pokemonName}`);
  };

  const onSearchPokemonByID = e => {
    e.preventDefault();
    navigate(`?pokemon=${pokemonID}`);
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
