import { PokeCard } from '../../../components';
import { usePokemon } from '../hooks';

export const PokeCardGrid = () => {
  const { pokemons } = usePokemon();

  //TODO: Show spinner while chargins
  return (
    <div className='col-12 col-lg-10 order-0'>
      <div className='container'>
        <div className='row justify-content-between px-3'>
          {pokemons.map(pokemon => {
            return <PokeCard key={pokemon.name} pokemon={pokemon} />;
          })}
        </div>
      </div>
    </div>
  );
};
