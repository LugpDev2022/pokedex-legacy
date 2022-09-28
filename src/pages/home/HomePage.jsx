import { useContext } from 'react';

import { PokemonContext } from '../../context';
import { ChangePageButton, PokeCardGrid } from './components';
import { Spinner } from '../../ui';

export const HomePage = () => {
  const { state } = useContext(PokemonContext);
  const { arePokemonsCharging } = state;

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
