import { useEffect, useState } from 'react';
import { pokemonApi } from '../../../api';
import { PokeCard } from '../../../components';
import { SearchPokemonCard } from '../ui';

export const ShowCards = ({ pokemon }) => {
  const [error, setError] = useState(false);
  const [pokemonData, setPokemonData] = useState({});
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setIsSearching(true);
    if (pokemon) {
      pokemonApi
        .get(`pokemon/${pokemon}`)
        .then(resp => {
          setError(false);
          setPokemonData(resp.data);
          setIsSearching(false);
        })
        .catch(e => {
          if (e.response.status === 404) {
            setError(true);
            setPokemonData({});
            setIsSearching(false);
          }
        });
    }
  }, [pokemon]);

  if (pokemon === undefined) {
    return <SearchPokemonCard />;
  }

  if (isSearching) {
    return <span className='h5'>Searching...</span>;
  }

  if (pokemonData.name) {
    return <PokeCard {...pokemonData} search />;
  }

  if (error) {
    return <h2>Pokemon not Found</h2>;
  }
};
