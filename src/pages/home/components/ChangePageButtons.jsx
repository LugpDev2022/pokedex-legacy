import { useContext } from 'react';
import { PokemonContext } from '../../../context';

export const ChangePageButtons = () => {
  const { page, onNextPage } = useContext(PokemonContext);

  const onPrevPage = () => {};

  return (
    <div className='row my-3'>
      <div className='col d-flex justify-content-center'>
        <div className='btn-group'>
          <button
            type='button'
            className='btn p-2'
            style={{ backgroundColor: '#5986fd' }}
            onClick={onPrevPage}
          >
            Previous
          </button>
          <div className='btn p-2' style={{ backgroundColor: '#5986fd' }}>
            Page: {page}
          </div>
          <button
            type='button'
            className='btn p-2'
            style={{ backgroundColor: '#5986fd' }}
            onClick={onNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
