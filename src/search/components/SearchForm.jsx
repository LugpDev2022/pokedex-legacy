import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchForm = () => {
  const navigate = useNavigate();

  const onSearchByID = e => {
    e.preventDefault();
    console.log('Buscando por ID');
  };

  const [formData, setFormData] = useState('');

  const onInputName = ({ target }) => {
    setFormData(target.value);
  };

  return (
    <>
      <label htmlFor='searchByName' className='h4'>
        Search By Name
      </label>
      <hr className='mt-1' />
      <form onSubmit={onSearchByID} className='d-flex gap-2'>
        <input
          type='Name'
          className='form-control'
          placeholder='Pokémon Name'
          id='searchByName'
          name='searchByName'
          value={formData}
          onChange={onInputName}
        />

        <button type='submit' className='btn btn-primary'>
          Search
        </button>
      </form>
    </>
  );
};
