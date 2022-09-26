import { PokemonContext } from './PokemonContext';

export const PokemonProvider = ({ children }) => {
  const si = {
    hola: 'mundo',
  };

  return (
    <PokemonContext.Provider value={si}>{children}</PokemonContext.Provider>
  );
};
