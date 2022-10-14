import { useContext } from 'react';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';
import { PokemonContext } from '../../../context';

export const ChangePageButton = ({ location }) => {
  const { onPrevPage, onNextPage, page } = useContext(PokemonContext);

  if (location === 'left') {
    return (
      <div className='col-6 col-lg-1 order-1 order-lg-0 d-flex align-items-center justify-content-end my-4 px-4'>
        <button type='button' className='btn p-0' disabled={page === 1}>
          <BsFillArrowLeftSquareFill
            style={{ color: '#5986fd', fontSize: '50px' }}
            onClick={onPrevPage}
          />
        </button>
      </div>
    );
  }

  if (location === 'right') {
    return (
      <div className='col-6 col-lg-1 order-2 order-lg-1 d-flex align-items-center justify-content-left my-4 px-4'>
        <button type='button' className='btn p-0'>
          <BsFillArrowRightSquareFill
            style={{ color: '#5986fd', fontSize: '50px' }}
            onClick={onNextPage}
          />
        </button>
      </div>
    );
  }
};
