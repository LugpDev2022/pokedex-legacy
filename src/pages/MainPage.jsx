import { PokeCard } from '../components/PokeCard';

const pokemons = [1, 2, 3, 4, 5, 6, 7, 8];

export const MainPage = () => {
  return (
    <div className='container px-5 mt-2'>
      <div className='row justify-content-between'>
        {pokemons.map(pokemon => {
          return <PokeCard key={pokemon} />;
        })}
      </div>
    </div>
  );
};
