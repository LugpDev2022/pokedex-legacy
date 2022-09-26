import { PokeCard } from '../../../components';
import { usePokemon } from '../';

export const PokeCardGrid = () => {
  const { pokemons } = usePokemon();

  //TODO: Show spinner while chargins
  return (
    <div className='row justify-content-between px-3'>
      {pokemons.map(pokemon => {
        return <PokeCard key={pokemon.name} pokemon={pokemon} />;
      })}
    </div>
  );
};
