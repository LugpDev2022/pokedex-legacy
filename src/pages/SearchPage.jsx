import { SearchForm } from '../components';

export const SearchPage = () => {
  return (
    <div className='container'>
      <div className='row mt-4'>
        <h3 className='text-center'>Search a Pokémon</h3>
        <hr className='mt-2' />
      </div>
      <div className='row mt-3'>
        <div className='col-12 col-lg-6'>
          <SearchForm />
        </div>
        <div className='col-12 col-lg-6'></div>
      </div>
    </div>
  );
};
