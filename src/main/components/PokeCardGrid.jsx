import { PokeCard } from '../../components';
import { usePokemon } from '../hooks';

export const PokeCardGrid = () => {
  const { pokemons } = usePokemon();

  //TODO: Show spinner while chargins
  return (
    <div className='container px-5 mt-2'>
      <div className='row justify-content-between'>
        {pokemons.map(pokemon => {
          return <PokeCard key={pokemon.name} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
};
