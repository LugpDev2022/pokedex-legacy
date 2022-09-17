import PropTypes from 'prop-types';

export const PokeCard = ({ pokemon }) => {
  const { name, sprites, id } = pokemon;

  return (
    <div className='col-12 col-sm-6 col-lg-3 mt-4'>
      <div className='card card-img-top'>
        <img src={sprites.front_default} alt='Pokemon Image' />
        <div className='card-body shadow'>
          <h4 className='card-title text-capitalize'>{name}</h4>
          <span className='card-text'>Index: {id}</span>
        </div>
      </div>
    </div>
  );
};

PokeCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
