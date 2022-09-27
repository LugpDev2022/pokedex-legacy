import { useEffect, useState, useContext } from 'react';

import { pokemonApi } from '../../../api/pokemonApi';
import { PokemonContext } from '../../../context/PokemonContext';

export const usePokemon = () => {
  const { page } = useContext(PokemonContext);

  const [pokemonDataArray, setPokemonDataArray] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const { data } = await pokemonApi.get(
        `pokemon?limit=8&offset=${(page - 1) * 8}`
      );
      setPokemonDataArray(data.results);
    };
    getPokemons();
  }, []);

  useEffect(() => {
    const getPokemons = async () => {
      const fetchedPokemonsArray = await Promise.all(
        pokemonDataArray.map(async item => {
          return fetch(item.url).then(response => response.json());
        })
      );
      setPokemons(fetchedPokemonsArray);
    };
    getPokemons();
  }, [pokemonDataArray]);

  return { pokemons };
};
