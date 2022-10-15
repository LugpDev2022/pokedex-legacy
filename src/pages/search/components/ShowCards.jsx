import { useEffect, useState } from 'react';
import { pokemonApi } from '../../../api';
import { PokeCard } from '../../../components';
import { SearchPokemonCard } from '../ui';

export const ShowCards = ({ pokemon }) => {
  const [error, setError] = useState(false);
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    if (pokemon) {
      pokemonApi
        .get(`pokemon/${pokemon}`)
        .then(resp => {
          setError(false);
          setPokemonData(resp.data);
        })
        .catch(e => {
          if (e.response.status === 404) {
            setError(true);
            setPokemonData({});
          }
        });
    }
  }, [pokemon]);

  if (pokemon === undefined) {
    return <SearchPokemonCard />;
  }

  if (pokemonData.name) {
    return <PokeCard {...pokemonData} search />;
  }

  if (error) {
    return <h2>Pokemon not Found</h2>;
  }
};
