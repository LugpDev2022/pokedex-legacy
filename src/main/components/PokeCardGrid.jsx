import { useEffect, useState } from 'react';
import { PokeCard } from '../../components/PokeCard';

export const PokeCardGrid = () => {
  const [pokemonDataArray, setPokemonDataArray] = useState([]);

  const [pokemons, setPokemons] = useState([]);

  //TODO: Get page from context
  const page = 1;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=8&offset=${
    (page - 1) * 8
  }`;

  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch(url);
      const { results } = await response.json();
      setPokemonDataArray(results);
    };
    getPokemons();
  }, []);

  useEffect(() => {
    const getPokemons = async () => {
      const pokemons2 = await Promise.all(
        pokemonDataArray.map(item => {
          return fetch(item.url).then(response => response.json());
        })
      );
      setPokemons(pokemons2);
    };
    getPokemons();
  }, [pokemonDataArray]);

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
