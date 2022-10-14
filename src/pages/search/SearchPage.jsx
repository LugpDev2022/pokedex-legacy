import { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { PokeCard } from '../../components';
import { pokemonApi } from '../../api';
import { SearchForm } from './components';
import { SearchPokemonCard } from './ui/SearchPokemonCard';

export const SearchPage = () => {
  const [searchedPokemon, setSearchedPokemon] = useState();
  const [cardPokemon, setCardPokemon] = useState();

  const { search } = useLocation();

  useEffect(() => {
    const { pokemon } = queryString.parse(search);
    setSearchedPokemon(pokemon);
  }, [search]);

  // useEffect(() => {
  //   const getPokemonCard = async () => {
  //     const { data } = await pokemonApi.get(`/pokemon/${searchedPokemon}`);
  //     if (data) {
  //       setCardPokemon(data);
  //     }
  //   };

  //   if (searchedPokemon) {
  //     getPokemonCard();
  //   }
  // }, [searchedPokemon]);

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
          <SearchPokemonCard />
        </div>
      </div>
    </div>
  );
};
