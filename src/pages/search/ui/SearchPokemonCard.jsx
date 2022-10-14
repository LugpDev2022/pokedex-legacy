import pikachu from '../../../assets/images/pikachu.webp';

export const SearchPokemonCard = () => (
  <div className={'col-10 col-sm-8 col-md-6 col-lg-7'}>
    <div className='card card-img-top'>
      <img className='p-2' src={pikachu} alt='Pokemon Image' />
      <div className='card-body shadow p-2'>
        <h3 className='card-title text-center'>Search a Pokémon</h3>
      </div>
    </div>
  </div>
);
