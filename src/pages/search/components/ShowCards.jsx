import { SearchPokemonCard } from '../ui';

export const ShowCards = ({ pokemon }) => {
  if (!pokemon) {
    return <SearchPokemonCard />;
  }

  if (pokemon) {
    console.log('Existe el pokemon');
  }
};
