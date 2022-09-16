import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';
import { BiUser, BiLogIn } from 'react-icons/bi';

export const Navbar = () => {
  const [logged, setLogged] = useState(false);

  const navigate = useNavigate();

  const onLogInClick = () => {
    setLogged(!logged);
  };

  const onClickSearch = () => {
    navigate('/search');
  };

  return (
    <div
      className='navbar navbar-expand-md navbar-light py-3'
      style={{ backgroundColor: '#5986fd' }}
    >
      <div className='container justify-content-between'>
        <Link to='/' className='navbar-brand d-flex align-items-center gap-3'>
          <h1 className='mb-0 pokemonFont'>Pokedex</h1>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarContent'
          aria-controls='navbarContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarContent'
        >
          <div className='navbar-nav d-flex align-items-center gap-4'>
            <button onClick={onClickSearch} className='btn'>
              <FaSearch className='d-none d-md-block fs-2' />
              <span className='d-md-none '>Search pokemon</span>
            </button>

            {logged ? (
              <button
                onClick={onLogInClick}
                className='btn btn-outline-dark d-flex align-items-center gap-2'
              >
                <BiUser className='fs-1' />
                <span className='fs-4'>Account</span>
              </button>
            ) : (
              <button
                onClick={onLogInClick}
                className='btn btn-outline-dark d-flex align-items-center gap-2'
              >
                <BiLogIn className='fs-2' />
                <span className='fs-4'>Log In</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
