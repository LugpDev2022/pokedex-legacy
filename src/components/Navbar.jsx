import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { BiUser, BiLogIn } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';

import { PokemonContext } from '../context';

export const Navbar = () => {
  const { logged } = useContext(PokemonContext);

  return (
    <div
      className='navbar navbar-expand-md navbar-light'
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
            <Link to='/search' className='text-dark text-decoration-none'>
              <FaSearch className='fs-3 d-none d-md-block' />

              <span className='btn btn-outline-dark mt-3 d-block d-md-none'>
                Search a Pokémon
              </span>
            </Link>

            {logged ? (
              <button className='btn btn-outline-dark d-flex align-items-center gap-2'>
                <BiUser className='fs-2' />
                <span className='fs-5'>Account</span>
              </button>
            ) : (
              <button className='btn btn-outline-dark d-flex align-items-center gap-2'>
                <BiLogIn className='fs-3' />
                <span className='fs-5'>Log In</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
