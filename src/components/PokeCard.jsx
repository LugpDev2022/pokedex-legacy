import PropTypes from 'prop-types';

export const PokeCard = ({ pokemon, search }) => {
  const { name, sprites, id } = pokemon;

  return (
    <div
      className={`${
        search
          ? 'col-10 col-sm-8 col-md-6 col-lg-7'
          : 'col-12 col-sm-6 col-lg-3'
      } mt-4`}
    >
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
