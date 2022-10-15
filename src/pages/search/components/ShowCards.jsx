import { PokeCard } from '../../../components';
import { useShowCardsState } from '../hooks/useShowCardsState';
import { SearchPokemonCard } from '../ui';

export const ShowCards = ({ pokemon }) => {
  const { isSearching, pokemonData, error } = useShowCardsState(pokemon);

  if (pokemon === undefined) {
    return <SearchPokemonCard />;
  }

  if (isSearching) {
    return <span className='h5'>Searching...</span>;
  }

  if (pokemonData.name) {
    return <PokeCard {...pokemonData} search />;
  }

  if (error) {
    return <h2>Pokemon not Found</h2>;
  }
};
