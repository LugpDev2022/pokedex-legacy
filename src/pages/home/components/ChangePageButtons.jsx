import { useNavigate } from 'react-router-dom';

export const ChangePageButtons = () => {
  const navigate = useNavigate();

  const onNextPage = () => {
    console.log('Next Page');
  };

  const onPrevPage = () => {
    console.log('Prev Page');
  };

  return (
    <div className='row my-4'>
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
            Page: 1
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
