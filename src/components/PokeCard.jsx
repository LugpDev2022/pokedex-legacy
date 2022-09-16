export const PokeCard = () => {
  const bulbasur = {
    imgURL:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    pokeName: 'Bulbasur',
    pokeIndex: '1',
  };

  return (
    <div className='col-12 col-sm-6 col-lg-3 mt-4'>
      <div className='card card-img-top'>
        <img src={bulbasur.imgURL} alt='Pokemon Image' />
        <div className='card-body'>
          <h5 className='card-title'>{bulbasur.pokeName}</h5>
          <p className='card-text'>Index: {bulbasur.pokeIndex}</p>
        </div>
      </div>
    </div>
  );
};
