import { useEffect } from 'react';
import { useState } from 'react';

export const PokeCard = ({ pokemon }) => {
  const [{ sprite, id, name }, setPokemonData] = useState({
    id: '',
    name: '',
    sprite: '',
  });

  useEffect(() => {
    const getPokemonData = async () => {
      const response = await fetch(pokemon.url);

      const { id, name, sprites } = await response.json();
      setPokemonData({ id, name, sprite: sprites.front_default });
    };

    getPokemonData();
  }, []);

  return (
    <div className='col-12 col-sm-6 col-lg-3 mt-4'>
      <div className='card card-img-top'>
        <img src={sprite} alt='Pokemon Image' />
        <div className='card-body shadow'>
          <h4 className='card-title text-capitalize'>{name}</h4>
          <span className='card-text'>Index: {id}</span>
        </div>
      </div>
    </div>
  );
};
