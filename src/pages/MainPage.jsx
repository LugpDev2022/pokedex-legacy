import { useEffect } from 'react';
import { useState } from 'react';
import { PokeCard } from '../components/PokeCard';

export const MainPage = () => {
  const [pokemons, setPokemons] = useState([]);

  const page = 1;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=8&offset=${
    (page - 1) * 8
  }`;

  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch(url);
      const { results } = await response.json();
      setPokemons(results);
    };
    getPokemons();
  }, []);

  return (
    <div className='container px-5 mt-2'>
      <div className='row justify-content-between'>
        {pokemons.map(pokemon => {
          return <PokeCard key={pokemon.name} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
};
