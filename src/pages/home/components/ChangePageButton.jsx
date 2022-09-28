import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';

export const ChangePageButton = ({ location }) => {
  if (location === 'left') {
    return (
      <div className='col-6 col-lg-1 order-1 order-lg-0 d-flex align-items-center justify-content-end my-4 px-4'>
        <BsFillArrowLeftCircleFill
          className='h1'
          style={{ color: '#5986fd', fontSize: '50px' }}
        />
      </div>
    );
  }

  if (location === 'right') {
    return (
      <div className='col-6 col-lg-1 order-2 d-flex align-items-center justify-content-left my-4 px-4'>
        <BsFillArrowRightCircleFill
          className='h1'
          style={{ color: '#5986fd', fontSize: '50px' }}
        />
      </div>
    );
  }
};
