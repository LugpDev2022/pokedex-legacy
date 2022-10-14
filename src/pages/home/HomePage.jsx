import { useContext, useEffect } from 'react';

import { ChangePageButton, PokeCardGrid } from './components';
import { PokemonContext } from '../../context';
import { Spinner } from '../../ui';
import { usePokemon } from './hooks';

export const HomePage = () => {
  const { arePokemonsCharging, chargePokemons } = useContext(PokemonContext);
  const { pokemons } = usePokemon();

  useEffect(() => {
    chargePokemons(pokemons);
  }, [pokemons]);

  const Page = () => (
    <div className='row justify-content-between animate__animated animate__fadeIn'>
      <ChangePageButton location='left' />
      <PokeCardGrid />
      <ChangePageButton location='right' />
    </div>
  );

  return (
    <div className='container-fluid mt-2'>
      {arePokemonsCharging ? <Spinner /> : <Page />}
    </div>
  );
};
