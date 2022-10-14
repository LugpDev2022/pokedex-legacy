import { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { SearchForm, ShowCards } from './components';

export const SearchPage = () => {
  const [searchedPokemon, setSearchedPokemon] = useState();
  const { search } = useLocation();
  const { pokemon } = queryString.parse(search);

  useEffect(() => {
    setSearchedPokemon(pokemon);
  }, [pokemon]);

  return (
    <div className='container'>
      <div className='row mt-4'>
        <h3 className='text-center'>Search a Pokémon</h3>
        <hr className='mt-2' />
      </div>
      <div className='row mt-3'>
        <div className='col-12 col-lg-6 mb-4'>
          <SearchForm />
        </div>
        <div className='col-12 col-lg-6 d-flex justify-content-center mb-3'>
          <ShowCards pokemon={pokemon} />
        </div>
      </div>
    </div>
  );
};
