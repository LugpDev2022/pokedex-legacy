import { useContext } from 'react';

import { PokemonContext } from '../../context';
import { ChangePageButton, PokeCardGrid } from './components';
import { Spinner } from '../../ui';
import { useEffect } from 'react';

export const HomePage = () => {
  const { state, chargePokemons } = useContext(PokemonContext);
  const { arePokemonsCharging } = state;

  useEffect(() => {
    chargePokemons();
  }, []);

  const Page = () => (
    <div className='row justify-content-between'>
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
