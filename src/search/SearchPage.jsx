import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { PokeCard } from '../components';
import { SearchForm } from './';
import { pokemonApi } from '../api/pokemonApi';

export const SearchPage = () => {
  const [searchedPokemon, setSearchedPokemon] = useState();

  const [cardPokemon, setCardPokemon] = useState();

  const { search } = useLocation();

  useEffect(() => {
    const { pokemon } = queryString.parse(search);
    setSearchedPokemon(pokemon);
  }, [search]);

  useEffect(() => {
    const getPokemonCard = async () => {
      const { data } = await pokemonApi.get(`/pokemon/${searchedPokemon}`);
      if (data) {
        setCardPokemon(data);
      }
    };

    if (searchedPokemon) {
      getPokemonCard();
    }
  }, [searchedPokemon]);

  return (
    <div className='container'>
      <div className='row mt-4'>
        <h3 className='text-center'>Search a Pokémon</h3>
        <hr className='mt-2' />
      </div>
      <div className='row mt-3'>
        <div className='col-12 col-lg-6'>
          <SearchForm />
        </div>
        <div className='col-12 col-lg-6 d-flex justify-content-center'>
          {cardPokemon !== undefined ? (
            <PokeCard pokemon={cardPokemon} search={true} />
          ) : (
            <div className='alert bg-danger'>Pokemon no encontrado</div>
          )}
        </div>
      </div>
    </div>
  );
};
