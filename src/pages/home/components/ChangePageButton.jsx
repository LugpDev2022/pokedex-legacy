import { useContext } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { PokemonContext } from '../../../context';

export const ChangePageButton = ({ location }) => {
  const { onPrevPage, onNextPage } = useContext(PokemonContext);

  if (location === 'left') {
    return (
      <div className='col-6 col-lg-1 order-1 order-lg-0 d-flex align-items-center justify-content-end my-4 px-4'>
        <BsFillArrowLeftCircleFill
          className='h1'
          style={{ color: '#5986fd', fontSize: '50px' }}
          onClick={onPrevPage}
        />
      </div>
    );
  }

  if (location === 'right') {
    return (
      <div className='col-6 col-lg-1 order-2 order-lg-1 d-flex align-items-center justify-content-left my-4 px-4'>
        <BsFillArrowRightCircleFill
          className='h1'
          style={{ color: '#5986fd', fontSize: '50px' }}
          onClick={onNextPage}
        />
      </div>
    );
  }
};
