import { PokeCardGrid, ChangePageButtons } from './components';

export const HomePage = () => (
  <div className='container px-5 mt-2'>
    <PokeCardGrid />
    <ChangePageButtons />
  </div>
);
