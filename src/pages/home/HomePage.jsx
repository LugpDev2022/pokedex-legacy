import { ChangePageButton, PokeCardGrid } from './components';

export const HomePage = () => (
  <div className='container-fluid mt-2'>
    <div className='row justify-content-between'>
      <ChangePageButton location='left' />
      <PokeCardGrid />
      <ChangePageButton location='right' />
    </div>
  </div>
);
