import { useSearchForm } from '../hooks';

export const SearchForm = () => {
  const { onInputID, onInputName, onSearchPokemon, pokemonID, pokemonName } =
    useSearchForm();

  return (
    <>
      <label htmlFor='searchByName' className='h4'>
        Search By Name
      </label>
      <hr className='mt-1' />
      <form onSubmit={onSearchPokemon} className='input-group'>
        <input
          type='Name'
          className='form-control'
          placeholder='Pokémon Name'
          id='searchByName'
          name='searchByName'
          value={pokemonName}
          onChange={onInputName}
        />

        <button type='submit' className='btn btn-primary'>
          Search
        </button>
      </form>

      <label htmlFor='searchByID' className='h4 mt-4'>
        Search By ID
      </label>
      <hr className='mt-1' />
      <form onSubmit={onSearchPokemon} className='input-group'>
        <input
          type='Name'
          className='form-control'
          placeholder='Pokémon ID'
          id='searchByID'
          name='searchByID'
          value={pokemonID}
          onChange={onInputID}
        />

        <button type='submit' className='btn btn-primary'>
          Search
        </button>
      </form>
    </>
  );
};
