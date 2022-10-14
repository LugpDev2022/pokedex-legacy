import { useContext } from 'react';

import { PokeCard } from '../../../components';
import { PokemonContext } from '../../../context';

export const PokeCardGrid = () => {
  const { pokemons } = useContext(PokemonContext);

  return (
    <div className='col-12 col-lg-10 order-0'>
      <div className='container'>
        <div className='row justify-content-between px-3'>
          {pokemons.map(pokemon => (
            <PokeCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
};
