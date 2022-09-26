import { useEffect, useState } from 'react';

export const usePokemon = () => {
  const page = 1;

  const [pokemonDataArray, setPokemonDataArray] = useState([]);

  const [pokemons, setPokemons] = useState([]);

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

  return { pokemons };
};
