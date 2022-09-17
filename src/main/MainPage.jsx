import { useContext } from 'react';

import { AppContext } from '../context';
import { PokeCardGrid } from './components';

export const MainPage = () => {
  const { page } = useContext(AppContext);
  console.log(page);
  return (
    <>
      <PokeCardGrid />
    </>
  );
};
