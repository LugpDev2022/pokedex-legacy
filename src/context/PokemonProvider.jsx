import { PokemonContext } from './PokemonContext';

export const PokemonProvider = ({ children }) => {
  const initialState = {
    page: 1,
  };

  return (
    <PokemonContext.Provider value={initialState}>
      {children}
    </PokemonContext.Provider>
  );
};
